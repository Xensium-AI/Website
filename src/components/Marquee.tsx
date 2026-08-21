import styles from "./Marquee.module.css";

/**
 * Seamless looping strip.
 *
 * The track holds two identical halves and slides exactly one half width, so
 * the list restarts with no jump. Each half repeats the items enough times to
 * stay wider than any viewport — otherwise a short list leaves a visible gap
 * after the last item before the loop comes round again.
 */
const MIN_ITEMS_PER_HALF = 24;

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
  /** "dark" = industries strip, "light" = languages strip. */
  variant?: "dark" | "light";
  /** Seconds for one full cycle — lower is faster. */
  speed?: number;
}) {
  const labelId = `${id ?? label.replace(/\s+/g, "-").toLowerCase()}-label`;
  const passes = Math.max(1, Math.ceil(MIN_ITEMS_PER_HALF / items.length));
  const half = Array.from({ length: passes }).flatMap(() => items);

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
        <div className={styles.track} style={{ animationDuration: `${speed * passes}s` }}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.group} aria-hidden={copy === 1}>
              {half.map((item, i) => (
                <span key={`${item}-${i}`} className={styles.pill}>
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
