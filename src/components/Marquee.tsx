import styles from "./Marquee.module.css";
import { marqueeCategories } from "@/content/site-content";

export default function Marquee() {
  return (
    <section className={styles.section} aria-label="Businesses that live and die by the phone">
      <div className={`container ${styles.heading}`}>
        <h2 className={styles.title}>Built for businesses that live and die by the phone.</h2>
      </div>
      <div className={styles.mask}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <div key={copy} className={styles.group} aria-hidden={copy === 1}>
              {marqueeCategories.map((label) => (
                <div key={label} className={styles.item}>
                  <span className={styles.dot} aria-hidden="true" />
                  <span className={styles.label}>{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
