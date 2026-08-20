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
 * PLACEHOLDER — the real Cal.com scheduling link is NOT yet configured.
 *
 * No booking URL exists anywhere in this repository or its environment, so
 * this is an obvious placeholder that must be supplied before launch. Every
 * "Book a Demo" CTA opens this URL directly (new tab) rather than scrolling
 * to the contact form.
 *
 * Replace with the real link, e.g. "https://cal.com/xensium/demo".
 */
export const CAL_COM_BOOKING_URL = "https://cal.com/CAL_COM_BOOKING_URL_PLACEHOLDER";

/** True while the booking URL is still the unconfigured placeholder. */
export const IS_BOOKING_URL_PLACEHOLDER =
  CAL_COM_BOOKING_URL.includes("CAL_COM_BOOKING_URL_PLACEHOLDER");

export const SITE_NAME = "Xensium AI";

export const SITE_DESCRIPTION =
  "Xensium AI is the AI voice receptionist that answers every business call — it picks up on the first ring, talks with your customers naturally, and books, qualifies, and captures, 24/7.";
