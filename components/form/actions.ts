"use server";

import { Resend } from "resend";
import * as z from "zod";
import ContactThankYouEmail from "@/emails/contact-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
	success?: boolean;
	error?: string;
	message?: string;
};
export async function submitContactForm(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	try {
		const formSchema = z.object({
			email: z.email(),
		});

		const { data, success } = formSchema.safeParse(
			Object.fromEntries(formData.entries()),
		);
		if (!success)
			return {
				success: false,
				error: "Please enter a valid email address",
			};

		const { error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: [data.email],
			subject: "Thank you for contacting me",
			react: ContactThankYouEmail(),
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				success: false,
				error: "Failed to send email. Please try again.",
			};
		}

		return {
			success: true,
			message: "Success! I'll get back to you as soon as possible.",
		};
	} catch (error) {
		console.error("Server action error:", error);
		return {
			success: false,
			error: "Something went wrong. Please try again.",
		};
	}
}
