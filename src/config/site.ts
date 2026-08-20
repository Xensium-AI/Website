/**
 * Central site configuration.
 *
 * Every phone / booking CTA on the site reads from this file, so when the
 * real AI receptionist number and Cal.com calendar are ready they can be
 * swapped in here — no component changes required.
 */

/** PLACEHOLDER — replace with the real AI receptionist number before launch. */
export const AI_RECEPTIONIST_PHONE = {
  /** Human-readable number shown in the UI. */
  display: "+1 (800) 555-0123",
  /** tel: link used by every "Call our AI receptionist" action. */
  href: "tel:+18005550123",
};

/**
 * Public Cal.com booking page. Every "Book a Demo" CTA opens this directly
 * in a new tab rather than scrolling to the contact form.
 *
 * This is a public scheduling link — never put a Cal.com API key here, or in
 * any NEXT_PUBLIC_* variable: those are embedded in the browser bundle and
 * would be readable by every visitor.
 */
export const CAL_COM_BOOKING_URL = "https://cal.com/haseeb-munawar-xyl64v/website";

export const SITE_NAME = "Xensium AI";

export const SITE_DESCRIPTION =
  "Xensium AI is the AI voice receptionist that answers every business call — it picks up on the first ring, talks with your customers naturally, and books, qualifies, and captures, 24/7.";
