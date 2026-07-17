# Velora Experience

A presentation-ready premium hospitality booking experience for Eldoret, Kenya. The demo includes a cinematic customer journey, package and flavour catalogues, guest booking with live price composition, tracking, account views, and an executive operations console.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Production verification uses `npm run lint` and `npm run build`.

## Demo operations login

- URL: `/admin/login`
- Email: `admin@veloraexperience.co.ke`
- Password: `VeloraDemo#2026`

These credentials are demonstration-only. The login helper is intentionally visible for presentations and must be disabled before production deployment.

## Key routes

- `/` — editorial homepage
- `/experiences` and `/experiences/[slug]` — catalogue and detail
- `/flavours` — filterable flavour edit
- `/book` — five-stage guest booking configurator
- `/track` — simulated live booking timeline
- `/login`, `/account` — customer entry and account view
- `/admin/login`, `/admin` — operations login and dashboard

## Deployment

Deploy as a standard Next.js application on Vercel: install with `npm install`, build with `npm run build`, and use the repository root. No secrets are required for this frontend demonstration.

## Architecture and limitations

This first delivery is a frontend demonstration built with Next.js 16, React 19, TypeScript and Tailwind CSS. Seed data lives in `src/lib/data.ts`; current interaction state is browser-local and the tracking timeline is simulated. A production rollout still requires the requested NestJS/PostgreSQL service, server-side authentication, authoritative persisted pricing and inventory reservations, notifications, payments, audit records, Prisma migrations, and end-to-end tests.

## Brand asset

The original rooftop hero image in `public/images/velora-hero.png` was generated specifically for Velora with OpenAI image generation; it contains no third-party business assets.
