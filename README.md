# Resend with Next.js

This example shows how to use Resend with [Next.js](https://nextjs.org) using the `useActionState` hook to handle form submissions.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/resend/resend-nextjs-useactionstate-example&project-name=resend-nextjs-useactionstate-example&repository-name=resend-nextjs-useactionstate-example&env=RESEND_API_KEY)

## Instructions

1. Define environment variables in `.env` file.

```sh
cp .env.example .env
```

2. Install dependencies:

```sh
npm install
# or
yarn
```

3. Run Next.js locally:

```sh
npm run dev
```

4. Update the email address in the `components/form/actions.ts` file to your own email address.

## License

MIT License
