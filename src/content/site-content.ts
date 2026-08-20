/**
 * All homepage copy in one place, taken from the approved XENSIUM AI design.
 * Components render this data; edit copy here without touching UI.
 */

import type { IconName } from "@/components/Icon";

/** Nav items. `id` is the section each link targets and scroll-spy watches. */
export const navLinks = [
  { label: "Product", href: "#product", id: "product" },
  { label: "Solutions", href: "#solutions", id: "solutions" },
  { label: "Features", href: "#features", id: "features" },
  { label: "Results", href: "#results", id: "results" },
  { label: "FAQs", href: "#faq", id: "faq" },
];

export const heroSubcopy =
  "Our AI Receptionist picks up every call, books appointments, and captures leads 24/7. It sounds human. It never calls in sick. And it pays for itself in the first month, or you don't pay at all.";

export const heroProofPoints = [
  "Live in 14 days, we do all the work",
  "Books straight into your calendar",
  "First month free if it doesn't book appointments",
];

export const marqueeCategories = [
  "Healthcare",
  "Dental",
  "Real Estate",
  "Law Firms",
  "Home Services",
  "Automotive",
  "Hospitality",
  "Professional Services",
];

export const problemCards = [
  {
    n: "01",
    title: "Missed calls",
    desc: "A ringing phone with no one to answer sends the caller straight to your competitor.",
  },
  {
    n: "02",
    title: "After-hours silence",
    desc: "Most calls that come in when you're closed never become customers — they never call back.",
  },
  {
    n: "03",
    title: "Hold-time hang-ups",
    desc: "Callers won't wait. Long holds during busy periods quietly cost you booked business.",
  },
  {
    n: "04",
    title: "Overloaded front desk",
    desc: "Routine questions pull staff away from the customers standing right in front of them.",
  },
];

export const solutionCards = [
  {
    title: "Always available",
    desc: "24/7, weekends, holidays, and during your busiest rush — no overflow ever goes unanswered.",
  },
  {
    title: "Sounds human",
    desc: "Real-time, natural conversation that listens, adapts, and follows your business's tone.",
  },
  {
    title: "Takes real action",
    desc: "Not just an answering machine — it books, captures, and routes work into your systems.",
  },
];

/* ---------------------------------------------------------------------------
   Hero transcript — one generic caller/receptionist flow (no niche tabs).
   Order: greeting → services + appointment → services explained → name &
   number → availability → slot chosen → scheduled + confirmation sent.
--------------------------------------------------------------------------- */

export type CallTurn = { who: "ai" | "caller"; text: string };

export const callerLabel = "Incoming call · New caller";

export const conversationTitle = "Booking an appointment";

export const conversation: CallTurn[] = [
  { who: "ai", text: "Thank you for calling [Business Name]. How can I help you today?" },
  { who: "caller", text: "Hi, I'd like to learn about your services and book an appointment." },
  {
    who: "ai",
    text: "Absolutely. We offer [Service A], [Service B], and [Service C]. Which service are you interested in?",
  },
  { who: "caller", text: "Service A." },
  { who: "ai", text: "Great. May I have your name and the best phone number for the booking?" },
  { who: "caller", text: "Jordan. I'll provide my mobile number." },
  {
    who: "ai",
    text: "Thanks, Jordan. I have Tuesday at 10:30 AM or Wednesday at 2:00 PM. Which works better?",
  },
  { who: "caller", text: "Wednesday at 2:00 PM." },
  {
    who: "ai",
    text: "Perfect—you're scheduled for Wednesday at 2:00 PM. Your confirmation is on its way.",
  },
];

export const conversationOutcomes = [
  "Appointment booked · Wed 2:00 PM",
  "Caller details captured",
  "Calendar invite & text confirmation sent",
];

export const actionExamples = [
  {
    tag: "NEW LEAD",
    caller: "“Hi, I found your website and wanted to know if you have availability this week.”",
    ai: "“Absolutely. I can help with that. What day works best for you?”",
    result: "Lead captured",
  },
  {
    tag: "APPOINTMENT",
    caller: "“I’d like to book an appointment for Thursday.”",
    ai: "“Of course. I have an opening at 10:30 AM or 2:00 PM. Which works better?”",
    result: "Appointment scheduled",
  },
  {
    tag: "AFTER HOURS",
    caller: "“Hi, I need some information about your services.”",
    ai: "“Absolutely. I’m here 24/7. I can answer your questions or take your details so the team can follow up.”",
    result: "Call handled",
  },
  {
    tag: "CALL TRANSFER",
    caller: "“I need to speak with someone about an existing order.”",
    ai: "“Of course. I’ll connect you with the right person.”",
    result: "Call transferred",
  },
];

export const capabilities: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "phone",
    title: "Answer & greet",
    desc: "Picks up on the first ring with your custom greeting — every time, day or night.",
  },
  {
    icon: "chat",
    title: "Answer FAQs",
    desc: "Hours, location, pricing, services — answered instantly from your business details.",
  },
  {
    icon: "target",
    title: "Qualify leads",
    desc: "Asks the right questions and captures intent so only real opportunities reach your team.",
  },
  {
    icon: "calendar",
    title: "Book & reschedule",
    desc: "Checks availability and books, moves, or cancels appointments in your calendar.",
  },
  {
    icon: "clipboard",
    title: "Capture details",
    desc: "Records names, numbers, and reasons for calling — logged and ready for follow-up.",
  },
  {
    icon: "transfer",
    title: "Transfer & escalate",
    desc: "Warm-transfers urgent calls to the right person, with context already gathered.",
  },
];

export const howItWorksIntro =
  "You don't learn new software. You don't change how you work. We build everything, train the AI on your business, and flip the switch.";

export const howItWorks = [
  {
    n: "1",
    range: "Days 1–2",
    title: "One short call",
    desc: "Tell us about your business, services, hours, and the questions callers ask. That's all we need from you.",
  },
  {
    n: "2",
    range: "Days 3–10",
    title: "We build & train your AI Receptionist",
    desc: "We give it a natural voice, teach it your services, pricing, and policies, and connect it to your calendar. We handle the setup.",
  },
  {
    n: "3",
    range: "By day 14",
    title: "Go live & start recovering revenue",
    desc: "Every call gets answered from day one. Appointments get booked, leads get captured, and your team gets the details.",
  },
];

/**
 * Results metrics. Deliberately limited to claims already supported in this
 * project — no invented financial figures. The fourth card stays qualitative.
 */
export const results = [
  {
    metric: "100%",
    title: "Calls answered",
    desc: "Calls routed to Xensium are answered; no more voicemail or lost callers.",
  },
  {
    metric: "<2s",
    title: "Pickup time",
    desc: "Fast pickup without hold queues, even during a rush.",
  },
  {
    metric: "24/7",
    title: "Always covered",
    desc: "Coverage across nights, weekends, and holidays.",
  },
  {
    metric: "More",
    title: "Bookings",
    desc: "Callers can choose an available slot before hanging up.",
  },
];

export const faqs = [
  {
    q: "Will callers know they’re talking to AI?",
    a: "Xensium introduces itself naturally and speaks conversationally. You choose how it identifies itself — many businesses simply present it as their front desk.",
  },
  {
    q: "How natural does it actually sound?",
    a: "It listens, responds in real time, handles interruptions, and follows your business’s tone. The call demo above is representative of a real conversation.",
  },
  {
    q: "Can it transfer calls to my team?",
    a: "Yes. It warm-transfers to the right person or department and passes along everything it has already gathered, so callers never repeat themselves.",
  },
  {
    q: "What happens outside business hours?",
    a: "Xensium answers 24/7. After hours it can book appointments, capture leads, take messages, and flag anything urgent for the morning.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses go live within 14 days. You share how your front desk works, we configure and test it with you, then you forward your calls.",
  },
  {
    q: "Is my data secure?",
    a: "Calls and customer data are encrypted in transit and at rest, with access controls and retention settings you manage.",
  },
];

export const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "Product", href: "#product" },
      { label: "Features", href: "#features" },
      { label: "Live demo", href: "#live" },
      { label: "Book a demo", href: "BOOKING" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Solutions", href: "#solutions" },
      { label: "Results", href: "#results" },
      { label: "Contact", href: "#contact" },
      { label: "FAQs", href: "#faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];
