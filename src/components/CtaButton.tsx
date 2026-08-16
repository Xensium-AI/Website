import styles from "./CtaButton.module.css";

type Variant = "primary" | "outline" | "outlineDark";
type Size = "md" | "lg";

export default function CtaButton({
  href,
  variant = "primary",
  size = "lg",
  icon,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: string;
  children: React.ReactNode;
}) {
  const classes = [styles.btn, styles[variant], size === "md" ? styles.md : styles.lg].join(" ");
  return (
    <a href={href} className={classes}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </a>
  );
}
