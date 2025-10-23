import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Preview,
	Section,
	Text,
	Tailwind,
} from "@react-email/components";

const ContactThankYouEmail = () => {
	return (
		<Html lang="en" dir="ltr">
			<Head />
			<Preview>
				Thanks for reaching out! I&apos;ll get back to you soon.
			</Preview>
			<Tailwind>
				<Body className="bg-black font-sans py-[40px]">
					<Container className="bg-white rounded-[8px] max-w-[600px] mx-auto p-[40px]">
						{/* Header */}
						<Section className="text-center mb-[32px]">
							<Heading className="text-[32px] font-bold text-black m-0 mb-[16px]">
								Thanks for Reaching Out!
							</Heading>
						</Section>

						{/* Main Content */}
						<Section className="mb-[32px]">
							<Text className="text-[16px] text-gray-800 mb-[16px] leading-[24px]">
								Thank you for contacting me! I&apos;ve received your message and
								appreciate you taking the time to reach out.
							</Text>

							<Text className="text-[16px] text-gray-800 mb-[24px] leading-[24px]">
								I&apos;ll review your message and get back to you within 24-48
								hours. If your inquiry is urgent, please don&apos;t hesitate to
								follow up.
							</Text>

							<Text className="text-[16px] text-gray-800 leading-[24px]">
								Best regards,
								<br />
								Chris
							</Text>
						</Section>

						{/* Footer */}
						<Section className="border-t border-solid border-gray-200 pt-[24px] mt-[40px]">
							<Text className="text-[12px] text-gray-500 text-center m-0 mb-[8px]">
								© 2025 Chris. All rights reserved.
							</Text>
							<Text className="text-[12px] text-gray-500 text-center m-0">
								{/** biome-ignore lint/a11y/useValidAnchor: test */}
								<a href="#" className="text-gray-500 underline">
									Unsubscribe
								</a>
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactThankYouEmail;
