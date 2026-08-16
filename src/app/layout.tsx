import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

const SITE_TITLE = "Xensium AI — The AI Voice Receptionist That Answers Every Business Call";

/**
 * Base URL used to resolve absolute Open Graph / social URLs.
 *
 * Prefers NEXT_PUBLIC_SITE_URL (set this to the real domain in the hosting
 * environment), then Vercel's own per-deployment host, then localhost. The
 * value is validated because a defined-but-blank or malformed variable would
 * otherwise throw at build time.
 */
function resolveSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    try {
      return new URL(configured).toString();
    } catch {
      // fall through to the defaults below rather than failing the build
    }
  }

  const vercelHost = process.env.NEXT_PUBLIC_VERCEL_URL?.trim();
  if (vercelHost) return `https://${vercelHost}`;

  return "http://localhost:3000";
}

export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteUrl()),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
