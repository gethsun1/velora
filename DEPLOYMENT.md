# Deployment

## Railway API

The `velora-experience` Railway project contains `velora-api` and PostgreSQL. The API is built with `apps/api/Dockerfile`; startup applies committed migrations and then starts NestJS. Seed explicitly with `SEED_ON_DEPLOY=true` for one deployment and set it back to false afterward.

Required variables: `DATABASE_URL`, `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `NODE_ENV`, `DEMO_MODE`, `SEED_DEMO_ADMIN_EMAIL`, `SEED_DEMO_ADMIN_PASSWORD`, `CORS_ORIGINS`, and provider adapter modes.

## Vercel frontend

The frontend project is `gethsun1s-projects/velora`. Set `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_APP_URL`, and `NEXT_PUBLIC_DEMO_MODE`, then run `vercel --prod` from the repository root.

No database URL, JWT secret or infrastructure credential belongs in a `NEXT_PUBLIC_` variable or committed environment file.
