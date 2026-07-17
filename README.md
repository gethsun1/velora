# Velora Experience

A premium hospitality booking and operations platform for Eldoret, Kenya. The retained cinematic Next.js experience is backed by a NestJS API, Prisma and PostgreSQL.

## Local setup

```bash
npm install
npm --prefix apps/api install
npm run dev
# separate terminal
npm --prefix apps/api run start:dev
```

Open `http://localhost:3000`. Production verification uses `npm run lint` and `npm run build`.

Production frontend: https://velora-two-sooty.vercel.app  
Production API: https://velora-api-production-8cf3.up.railway.app/api  
Swagger: https://velora-api-production-8cf3.up.railway.app/docs

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

The root application uses Next.js 16, React 19, TypeScript and Tailwind CSS. `apps/api` uses NestJS 11, Prisma 6 and PostgreSQL. See `ARCHITECTURE.md` and `DEPLOYMENT.md`.

The current API implements authentication, persistent catalogues, authoritative quotes, guest booking, private tracking, analytics, audit-backed status changes and conflict-aware inventory reservations. Live M-Pesa, SMS, WhatsApp and uploads remain intentionally adapter-backed rather than simulated financial transactions.

## Brand asset

The original rooftop hero image in `public/images/velora-hero.png` was generated specifically for Velora with OpenAI image generation; it contains no third-party business assets.
