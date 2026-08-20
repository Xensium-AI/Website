import styles from "./Marquee.module.css";
import { marqueeCategories } from "@/content/site-content";

export default function Marquee() {
  return (
    <section id="solutions" className={styles.section} aria-labelledby="solutions-label">
      <div className={`container ${styles.heading}`}>
        <h2 id="solutions-label" className={styles.label}>
          Built for businesses that live and die by the phone
        </h2>
      </div>
      <div className={styles.mask}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.group} aria-hidden={copy === 1}>
              {marqueeCategories.map((label) => (
                <span key={label} className={styles.pill}>
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
