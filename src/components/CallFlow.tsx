import styles from "./CallFlow.module.css";
import { callFlow } from "@/content/site-content";

export default function CallFlow() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <div className="eyebrow eyebrow--dark">Anatomy of a call</div>
          <h2 className="sectionTitle sectionTitle--dark">From ring to resolved in one conversation.</h2>
        </div>
        <div className={styles.grid}>
          {callFlow.map((step) => (
            <div key={step.n} className={styles.card}>
              <div className={styles.num}>{step.n}</div>
              <div className={styles.cardTitle}>{step.title}</div>
              <p className={styles.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.note}>
          See it play out live in the <a href="#live">call demo above ↑</a>
        </div>
      </div>
    </section>
  );
}
