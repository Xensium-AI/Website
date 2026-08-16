import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Xensium AI — The AI receptionist that answers every business call",
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
