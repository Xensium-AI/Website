import styles from "./Marquee.module.css";

/**
 * Seamless looping strip. Two identical groups sit side by side and the track
 * slides exactly one group width, so the list restarts with no gap or jump.
 */
export default function Marquee({
  id,
  label,
  items,
  variant = "dark",
  speed = 24,
}: {
  id?: string;
  label: string;
  items: string[];
  /** "dark" = navy band (industries), "light" = tinted band (languages). */
  variant?: "dark" | "light";
  /** Seconds for one full cycle — lower is faster. */
  speed?: number;
}) {
  const labelId = `${id ?? label.replace(/\s+/g, "-").toLowerCase()}-label`;
  return (
    <section
      id={id}
      className={`${styles.section} ${variant === "light" ? styles.light : styles.dark}`}
      aria-labelledby={labelId}
    >
      <div className={`container ${styles.heading}`}>
        <h2 id={labelId} className={styles.label}>
          {label}
        </h2>
      </div>
      <div className={styles.mask}>
        <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.group} aria-hidden={copy === 1}>
              {items.map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
