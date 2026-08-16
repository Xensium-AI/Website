import styles from "./Logo.module.css";

/**
 * Text-based XENSIUM AI wordmark matching the approved design.
 * When a real logo asset exists, replace the markup here — every
 * placement (nav, footer) renders through this component.
 */
export default function Logo({
  variant = "light",
  collapseOnTiny = false,
}: {
  variant?: "light" | "dark";
  /** Hide the wordmark on very narrow screens (used in the sticky header). */
  collapseOnTiny?: boolean;
}) {
  const classes = [
    styles.logo,
    variant === "dark" ? styles.dark : "",
    collapseOnTiny ? styles.collapse : "",
  ].join(" ");
  return (
    <span className={classes}>
      <span className={styles.mark}>Xe</span>
      <span className={styles.wordmark}>
        Xensium<span className={styles.ai}>AI</span>
      </span>
    </span>
  );
}
