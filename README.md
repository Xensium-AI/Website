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

## Deploying to Vercel

This is a standard Next.js App Router project at the repository root, so
Vercel deploys it with zero configuration — there is no `vercel.json`, and
none is needed. Vercel auto-detects the framework, the `npm run build`
command, and the output directory.

1. **Connect the repository.** In Vercel, choose *Add New → Project* and
   import `Xensium-AI/Website`. Framework preset should auto-detect as
   **Next.js**; leave the build command, output directory, and install
   command at their defaults.
2. **Select the branch.** Set the Production Branch to whichever branch you
   intend to release from (`main` once this work is merged). Every other
   branch and pull request gets an automatic preview deployment.
3. **Configure the environment variable.** Add `NEXT_PUBLIC_SITE_URL` for the
   environments you want it in:

   | Variable | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | The deployment's public base URL, no trailing slash (e.g. `https://www.your-domain.com`) |

   This is optional. If it is unset — or left blank — the site falls back to
   Vercel's per-deployment URL, and then to `http://localhost:3000`, so the
   build never fails on a missing value. Set it once the real domain exists so
   Open Graph and social previews use absolute production URLs. It holds a
   public URL only; never put secrets in a `NEXT_PUBLIC_` variable, since
   those are embedded in the browser bundle.
4. **Deploy.** Trigger the first deployment from the Vercel dashboard, or by
   pushing a commit to the connected branch.
5. **Configure the production domain later.** Add the custom domain under
   *Project → Settings → Domains* when it is ready, then update
   `NEXT_PUBLIC_SITE_URL` to match and redeploy so metadata picks it up.

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
- **`NEXT_PUBLIC_SITE_URL`** — no production domain is configured yet. Set it
  in Vercel once the real domain exists (see *Deploying to Vercel* above); it
  falls back to the Vercel deployment URL, then `http://localhost:3000`.

## Project structure

```
src/
├── app/            # Next.js app router: layout, page, global styles, favicon
├── components/     # One component + CSS module per homepage section
├── config/         # site.ts — phone/calendar placeholders, site metadata
└── content/        # site-content.ts — all homepage copy in one place
```
