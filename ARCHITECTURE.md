# Velora architecture

The existing Next.js 16 App Router application remains at the repository root. This preserves its visual system and Vercel defaults. `apps/api` is a NestJS 11 service deployed independently to Railway, with PostgreSQL accessed through Prisma 6.

Authentication uses short-lived signed access tokens and opaque, rotating refresh tokens. Only token hashes are stored. Administrative endpoints require a valid administrator JWT. Prices are integer Kenyan shillings and are recalculated by the API; bookings store immutable pricing and address snapshots. Inventory reservations are created transactionally after an overlap query.

Production topology: browser → Vercel frontend → restricted-CORS Railway API → private Railway PostgreSQL. Notifications and payments use logged/mock and manual adapters until provider credentials are configured.
