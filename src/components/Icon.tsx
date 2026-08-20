/**
 * Small local inline-SVG icon set.
 *
 * No icon library is installed in this project, and the brief asks not to add
 * a dependency purely for decorative icons — so these are hand-rolled, share
 * one consistent 24px grid / 1.75 stroke, and inherit `currentColor`.
 */

export type IconName =
  | "phone"
  | "chat"
  | "target"
  | "calendar"
  | "clipboard"
  | "transfer"
  | "check"
  | "menu"
  | "close";

const PATHS: Record<IconName, React.ReactNode> = {
  phone: (
    <path d="M6.6 3.5h3l1.5 3.8-2 1.3a12 12 0 0 0 5.3 5.3l1.3-2 3.8 1.5v3a1.9 1.9 0 0 1-2.1 1.9A16.5 16.5 0 0 1 4.7 5.6 1.9 1.9 0 0 1 6.6 3.5Z" />
  ),
  chat: (
    <>
      <path d="M20.5 12.4a7.6 7.6 0 0 1-8.2 7.6 8.7 8.7 0 0 1-2.6-.4L4.5 21l1.4-4.4a7.4 7.4 0 0 1-1.4-4.3 7.6 7.6 0 0 1 8-7.3 7.6 7.6 0 0 1 8 7.4Z" />
      <path d="M9 11.5h6M9 14.5h4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.8h17M8.3 3.5v3M15.7 3.5v3" />
      <path d="M8 13.6h3M8 16.8h7" />
    </>
  ),
  clipboard: (
    <>
      <path d="M9 4.7H7.3a2 2 0 0 0-2 2v12.1a2 2 0 0 0 2 2h9.4a2 2 0 0 0 2-2V6.7a2 2 0 0 0-2-2H15" />
      <rect x="9" y="2.9" width="6" height="3.6" rx="1.3" />
      <path d="M8.8 11.6h6.4M8.8 15.2h4.4" />
    </>
  ),
  transfer: (
    <>
      <path d="M4 15.5h9a4 4 0 0 0 4-4V5" />
      <path d="M13.6 8.6 17 5l3.4 3.6" />
      <path d="M4 19.5h7" />
    </>
  ),
  check: <path d="m5 12.8 4.4 4.4L19 7.6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
};

export default function Icon({
  name,
  size = 22,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
