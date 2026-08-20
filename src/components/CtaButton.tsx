import styles from "./CtaButton.module.css";

type Variant = "primary" | "outline" | "outlineDark";
type Size = "md" | "lg";

export default function CtaButton({
  href,
  variant = "primary",
  size = "lg",
  external = false,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  /** Opens in a new tab with safe rel attributes (used for Cal.com). */
  external?: boolean;
  children: React.ReactNode;
}) {
  const classes = [styles.btn, styles[variant], size === "md" ? styles.md : styles.lg].join(" ");
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
