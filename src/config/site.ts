/**
 * Central site configuration.
 *
 * Every phone / calendar CTA on the site reads from this file, so when the
 * real AI receptionist number and booking calendar are ready they can be
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
 * PLACEHOLDER — replace with the real scheduling URL (e.g. Calendly/Cal.com).
 * Until then, "Book a Demo" scrolls to the contact form so the CTA stays useful.
 */
export const CALENDAR_LINK = "#contact";

export const SITE_NAME = "Xensium AI";

export const SITE_DESCRIPTION =
  "Xensium AI is the AI voice receptionist that answers every business call — it picks up on the first ring, talks with your customers naturally, and books, qualifies, and captures, 24/7.";
