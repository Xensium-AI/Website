import styles from "./Solution.module.css";
import { solutionCards } from "@/content/site-content";

export default function Solution() {
  return (
    <section id="product" className={styles.section}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <div className="eyebrow">Meet Xensium AI</div>
            <h2 className={`sectionTitle ${styles.title}`}>
              A receptionist that never sleeps, never puts anyone on hold, and never misses.
            </h2>
            <p className={styles.sub}>
              Xensium answers on the first ring, speaks naturally with every caller, and actually
              gets things done — booking, qualifying, capturing, and transferring — around the
              clock.
            </p>
          </div>
          <div className={styles.cards}>
            {solutionCards.map((card) => (
              <div key={card.title} className={styles.card}>
                <div className={styles.cardTitle}>{card.title}</div>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
