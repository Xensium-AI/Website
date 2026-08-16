/**
 * All homepage copy in one place, lifted from the approved Claude Design
 * export. Components render this data; edit copy here without touching UI.
 */

export const navLinks = [
  { label: "Product", href: "#capabilities" },
  { label: "Solutions", href: "#industries" },
  { label: "Industries", href: "#industries" },
  { label: "Resources", href: "#faq" },
];

export const heroTrustPoints = [
  "Answers in <1 ring",
  "Handles simultaneous calls",
  "Works after hours",
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

export type CallTurn = { who: "ai" | "caller"; text: string };

export type CallScenario = {
  caller: string;
  title: string;
  turns: CallTurn[];
  actions: string[];
};

export const callScenarios: Record<string, CallScenario> = {
  health: {
    caller: "Incoming call · New patient",
    title: "Booking a dental appointment",
    turns: [
      { who: "ai", text: "Thanks for calling Brightpath Dental — this is the front desk. How can I help?" },
      { who: "caller", text: "Hi, I'd like to book a cleaning sometime this week." },
      { who: "ai", text: "Of course. I have Thursday at 10:30 AM or Friday at 2:00 PM. Which works better?" },
      { who: "caller", text: "Thursday at 10:30 works." },
      { who: "ai", text: "Perfect — you're booked for Thursday at 10:30. Can I grab your name and number to confirm?" },
    ],
    actions: ["Appointment booked · Thu 10:30 AM", "Patient details captured", "Confirmation text sent"],
  },
  realestate: {
    caller: "Incoming call · After hours",
    title: "After-hours property inquiry",
    turns: [
      { who: "ai", text: "Thanks for calling Meridian Realty. I can help even though the office is closed — what are you looking for?" },
      { who: "caller", text: "I saw the listing on Oak Street. Is it still available?" },
      { who: "ai", text: "It is. Are you looking to buy or rent, and what's your ideal move-in timing?" },
      { who: "caller", text: "Buying, hopefully within two months." },
      { who: "ai", text: "Great — I'll have an agent call you first thing tomorrow. What's the best number?" },
    ],
    actions: ["Lead captured & qualified", "Agent callback scheduled · 9:00 AM", "Listing details emailed"],
  },
  home: {
    caller: "Incoming call · New job",
    title: "Booking a home service",
    turns: [
      { who: "ai", text: "Thanks for calling Summit Plumbing — how can I help today?" },
      { who: "caller", text: "My kitchen sink is leaking pretty badly." },
      { who: "ai", text: "Sorry to hear that. We can send a technician tomorrow between 8–10 AM or 1–3 PM. Which window works?" },
      { who: "caller", text: "The morning is better." },
      { who: "ai", text: "Booked for 8–10 AM tomorrow. I'll text you the technician's name and a confirmation." },
    ],
    actions: ["Job booked · Tomorrow 8–10 AM", "Address & issue captured", "Technician assigned"],
  },
  law: {
    caller: "Incoming call · Potential client",
    title: "Qualifying a new client",
    turns: [
      { who: "ai", text: "Thank you for calling Harbor & Lane. Are you calling about a new matter?" },
      { who: "caller", text: "Yes, I was in a car accident last week." },
      { who: "ai", text: "I'm sorry to hear that. Was anyone injured, and has an insurance claim been filed yet?" },
      { who: "caller", text: "I have a minor injury, no claim yet." },
      { who: "ai", text: "Understood. I'll connect you with our personal-injury team and share your details so you don't repeat yourself." },
    ],
    actions: ["Client pre-qualified", "Case details captured", "Warm transfer to PI team"],
  },
};

export const scenarioPills = [
  { key: "health", label: "Healthcare" },
  { key: "realestate", label: "Real estate" },
  { key: "home", label: "Home services" },
  { key: "law", label: "Law firms" },
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

export const capabilities = [
  { icon: "📞", title: "Answer & greet", desc: "Picks up on the first ring with your custom greeting — every time, day or night." },
  { icon: "💬", title: "Answer FAQs", desc: "Hours, location, pricing, services — answered instantly from your business details." },
  { icon: "🎯", title: "Qualify leads", desc: "Asks the right questions and captures intent so only real opportunities reach your team." },
  { icon: "📅", title: "Book & reschedule", desc: "Checks availability and books, moves, or cancels appointments in your calendar." },
  { icon: "📝", title: "Capture details", desc: "Records names, numbers, and reasons for calling — logged and ready for follow-up." },
  { icon: "↗️", title: "Transfer & escalate", desc: "Warm-transfers urgent calls to the right person, with context already gathered." },
];

export const callFlow = [
  { n: "01", title: "Incoming call", desc: "A customer calls your business line — new lead or regular." },
  { n: "02", title: "Answers instantly", desc: "Xensium picks up in under a ring with your greeting." },
  { n: "03", title: "Understands intent", desc: "Natural conversation uncovers what the caller needs." },
  { n: "04", title: "Takes action", desc: "Books, qualifies, captures, or transfers — right then." },
  { n: "05", title: "Confirms & logs", desc: "Sends confirmation and logs everything for your team." },
];

export const howItWorks = [
  {
    n: "1",
    title: "Tell us how your front desk works",
    desc: "Share your greeting, hours, services, FAQs, and how you like calls handled. No technical setup.",
  },
  {
    n: "2",
    title: "We build your receptionist",
    desc: "We configure Xensium to your workflows, voice, and calendar — then test it with you until it sounds right.",
  },
  {
    n: "3",
    title: "Forward your calls, go live",
    desc: "Point your number at Xensium whenever you want — after hours, overflow, or 24/7. Change it anytime.",
  },
];

export const industries = [
  { icon: "🦷", title: "Healthcare & Dental", desc: "Answer patient calls, book and reschedule appointments, and handle after-hours triage messages." },
  { icon: "🏠", title: "Real estate", desc: "Capture every property inquiry — even after hours — qualify buyers, and schedule agent callbacks." },
  { icon: "🔧", title: "Home services", desc: "Turn incoming calls into booked jobs with the next available time slot, automatically." },
  { icon: "⚖️", title: "Law firms", desc: "Pre-qualify potential clients and gather case details before a warm transfer to your team." },
  { icon: "🚗", title: "Automotive", desc: "Book service appointments, quote availability, and route parts and sales calls to the right desk." },
  { icon: "💇", title: "Salons & spas", desc: "Fill the calendar with bookings and manage reschedules while your team focuses on clients." },
];

export const outcomes = [
  { title: "More calls answered", desc: "Every ring is picked up — first-time, overflow, and after-hours calls that used to go to voicemail." },
  { title: "More leads captured", desc: "Details and intent are recorded on every call, so no opportunity slips through the cracks." },
  { title: "More appointments booked", desc: "Callers book in the moment instead of waiting for a callback that may never happen." },
  { title: "Less front-desk load", desc: "Routine questions and scheduling are handled automatically, freeing your team for walk-ins." },
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
    a: "Most businesses go live within days. You share how your front desk works, we configure and test it with you, then you forward your calls.",
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
      { label: "Capabilities", href: "#capabilities" },
      { label: "Live demo", href: "#live" },
      { label: "Book a demo", href: "CALENDAR" },
      { label: "Industries", href: "#industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Contact", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Book a demo", href: "CALENDAR" },
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
