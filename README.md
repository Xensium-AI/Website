# Xensium AI — Website

Marketing website for **Xensium AI**, the AI voice receptionist that answers
every business call. Built with Next.js (App Router) + TypeScript + CSS
Modules, implementing the approved XENSIUM AI homepage design.

## Prerequisites

- Node.js 20+ (developed on Node 22)
- npm 10+

## Getting started

```bash
npm install
npm run dev        # development server at http://localhost:3000
```

To preview the production build locally:

```bash
npm run build
npm run start      # serves the production build at http://localhost:3000
```

Environment variables are optional in development. For production, copy
`.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the real
domain.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the development server         |
| `npm run build`     | Production build (fully static)      |
| `npm run start`     | Serve the production build           |
| `npm run typecheck` | TypeScript check without emitting    |

## Integration status

The frontend is complete; these integrations are intentionally **not
connected yet**:

- ❌ **Phone** — the AI receptionist number is a placeholder; no real line is
  wired up.
- ❌ **Calendar** — "Book a Demo" points at the on-page contact form, not a
  real scheduler.
- ❌ **Contact form backend** — validation is client-side only; submissions
  are not sent anywhere, and the attachment field is UI-only.

## Placeholders to replace before launch

All in [`src/config/site.ts`](src/config/site.ts):

- **`AI_RECEPTIONIST_PHONE`** — currently the demo number `+1 (800) 555-0123`.
  Replace `display` and `href` with the real AI receptionist number.
- **`CALENDAR_LINK`** — currently points to the on-page contact form
  (`#contact`). Replace with the real scheduling URL (Calendly, Cal.com, …).

Other placeholders:

- **Logo** — a text wordmark rendered by
  [`src/components/Logo.tsx`](src/components/Logo.tsx); swap in the real logo
  asset there when available.
- **Contact form** — frontend-only for now (client-side validation, no email
  service/backend). The attachment field is UI-only; uploads are not sent.
- **Footer legal links** — Privacy / Terms / Security point to `#` until real
  pages exist.
- **`NEXT_PUBLIC_SITE_URL`** — set this environment variable to the production
  domain at deploy time (e.g. `https://www.example.com`) so Open Graph URLs
  resolve absolutely; it defaults to `http://localhost:3000`.

## Project structure

```
src/
├── app/            # Next.js app router: layout, page, global styles, favicon
├── components/     # One component + CSS module per homepage section
├── config/         # site.ts — phone/calendar placeholders, site metadata
└── content/        # site-content.ts — all homepage copy in one place
```
