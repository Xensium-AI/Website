/**
 * All homepage copy in one place, taken from the approved XENSIUM AI design.
 * Components render this data; edit copy here without touching UI.
 */

import type { IconName } from "@/components/Icon";

/** Nav items. `id` is the section each link targets and scroll-spy watches. */
export const navLinks = [
  { label: "The problem", href: "#problem", id: "problem" },
  { label: "Solution", href: "#solution", id: "solution" },
  { label: "Features", href: "#features", id: "features" },
  { label: "How it works", href: "#how-it-works", id: "how-it-works" },
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

export const capabilitiesIntro =
  "Not a phone tree. Not a chatbot. A real voice that talks to your callers, answers their questions, and books them in.";

export const capabilities: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "phone",
    title: "Sounds like a real person",
    desc: "Callers can't tell it's AI. It handles pauses, interruptions, and follow-ups like a human would.",
  },
  {
    icon: "calendar",
    title: "Books appointments for you",
    desc: "Checks your calendar in real time and locks in the slot before the caller hangs up.",
  },
  {
    icon: "help",
    title: "Answers your callers' questions",
    desc: "Trained on your hours, services, pricing, and policies. Gives the right answer every single time.",
  },
  {
    icon: "userPlus",
    title: "Captures every lead",
    desc: "Gets the caller's name, number, and reason for calling. Nothing slips through while you're busy.",
  },
  {
    icon: "transfer",
    title: "Transfers when it matters",
    desc: "Big deal or urgent call? It sends it straight to you or your team, with full context. No cold handoffs.",
  },
  {
    icon: "clock",
    title: "Works 24/7, 365 days",
    desc: "Nights, weekends, holidays, lunch rushes. Every call answered on the first ring. It never takes a day off.",
  },
];

/**
 * Languages marquee. LANGUAGE_COUNT is the headline figure — confirm it
 * matches what Xensium actually supports before launch.
 */
export const LANGUAGE_COUNT = 63;

export const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Portuguese",
  "Italian",
  "Dutch",
  "Arabic",
  "Hindi",
  "Urdu",
  "Mandarin",
  "Japanese",
  "Korean",
  "Russian",
  "Turkish",
  "Polish",
  "Vietnamese",
  "Thai",
  "Swedish",
  "Indonesian",
  "Tagalog",
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
    q: "What is an AI receptionist, and how can it help my business?",
    a: "It is a voice agent that answers your business line, holds a normal conversation with the caller, and completes the task — booking, answering a question, taking details, or routing the call. The practical benefit is coverage: calls that currently hit voicemail during a rush or after hours get answered instead. It is not a replacement for your team on complex work; it handles the front-desk traffic so your team does not have to.",
  },
  {
    q: "Can the AI receptionist answer calls 24/7 and handle multiple calls at the same time?",
    a: "Yes to both. It answers nights, weekends, and holidays, and it takes concurrent calls — ten people ringing at once all get picked up, with no hold queue. There is no per-seat limit the way there is with human staff.",
  },
  {
    q: "Can it book appointments, qualify leads, collect caller information, and follow up with customers?",
    a: "It books and reschedules against your live calendar, asks your qualifying questions, and captures name, number, and reason for calling on every call. Follow-up depends on the channel: confirmation texts and emails are straightforward; multi-step outbound follow-up sequences are scoped during setup rather than switched on by default.",
  },
  {
    q: "Can it answer questions about my business, services, pricing, and policies?",
    a: "Yes, from the material you give us during setup — hours, locations, services, price ranges, and policies. It answers from that source rather than improvising. If your pricing is genuinely situational, we usually configure it to give a range and hand off rather than quote a number it cannot stand behind.",
  },
  {
    q: "Can it transfer calls to my team or escalate conversations when human assistance is needed?",
    a: "Yes. You define the rules — which topics, which hours, which person or department. It warm-transfers with the context it has already gathered, so the caller does not repeat themselves. You can also set it to take a message and flag it as urgent when nobody is available.",
  },
  {
    q: "Can the AI receptionist integrate with my CRM, calendar, phone system, and other business tools?",
    a: "Calendar and phone/VoIP integration are standard. CRM and other tools depend on the specific system: mainstream platforms with an open API are usually straightforward, and anything unusual or on-premise gets assessed during setup. Ask about your exact stack on the demo rather than assuming it is covered.",
  },
  {
    q: "Can I customize its voice, personality, language, responses, and conversation flow?",
    a: "Yes. You choose the voice, how it introduces itself, the tone it uses, and the language it answers in. Conversation flows are configured to your process — what it asks first, when it books, when it transfers. Changes after go-live are a configuration update, not a rebuild.",
  },
  {
    q: "What happens if the AI doesn't know an answer or encounters an unexpected situation?",
    a: "It is configured to say it does not have that answer and fall back — transfer to a human, take a message, or offer a callback — rather than guess. Those calls are flagged in your transcripts so you can see what it could not handle and add the missing information. Expect a small number of these in the first weeks; that is normal and it is how the configuration gets tightened.",
  },
  {
    q: "Can I keep my existing phone number, monitor calls, and access transcripts, summaries, and analytics?",
    a: "You keep your number — you forward it to Xensium, and you can stop forwarding at any time, which makes it low-risk to trial. Every call produces a recording, transcript, and summary, alongside volume and outcome reporting.",
  },
  {
    q: "How much does an AI receptionist cost, how long does setup take, and is my customer data secure?",
    a: "Setup takes about 14 days: a short intake call, then we build, train, and test it with you before you forward your number. Pricing depends on call volume and how much configuration and integration you need, so we quote after the demo rather than publishing a flat rate. On security, calls and customer data are encrypted in transit and at rest, with access controls and retention settings you manage — if you have specific compliance requirements, raise them on the demo so we can confirm what we can and cannot meet in writing.",
  },
];

export const footerColumns = [
  {
    heading: "Product",
    links: [
      { label: "The problem", href: "#problem" },
      { label: "Features", href: "#features" },
      { label: "Live demo", href: "#live" },
      { label: "Book a demo", href: "BOOKING" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Solution", href: "#solution" },
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
