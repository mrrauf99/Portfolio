# Portfolio

Personal portfolio site for Abdul Rauf, a full stack web developer. Single-page site (hero, about, skills, projects, experience, contact) with an additional `/projects` index and per-project case-study pages at `/projects/[slug]`. All page content is data-driven (`data/*.ts`), so most content updates don't require touching component code.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + [React 19](https://react.dev), TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config in `app/globals.css`, no `tailwind.config.*`)
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [Framer Motion](https://www.framer.com/motion/) for animation
- [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`) for the client-side contact form
- ESLint (`eslint-config-next`)

## Prerequisites

- Node.js (a version compatible with Next.js 16 / React 19)
- npm

## Installation

```bash
npm install
```

## Environment variables

The contact form sends email via EmailJS and requires these variables (there is no `.env.example` in the repo — create a `.env` file locally):

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Values come from your EmailJS account (service, email template, and public key). Without them, the contact form shows a "not configured" error instead of sending.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Other commands

```bash
npm run lint       # ESLint (zero warnings allowed)
npx tsc --noEmit   # type-check
```

No test suite is configured in this repo.

## Deployment

The repo is set up for deployment on [Vercel](https://vercel.com) (`.vercel` is gitignored, indicating local Vercel CLI usage). Connect the repository in Vercel and set the environment variables listed above in the project settings.
