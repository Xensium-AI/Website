import styles from "./HowItWorks.module.css";
import { howItWorks } from "@/content/site-content";

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">How it works</div>
          <h2 className="sectionTitle">Live in days — no technical setup.</h2>
        </div>
        <div className={styles.grid}>
          {howItWorks.map((step) => (
            <div key={step.n} className={styles.card}>
              <div className={styles.num}>{step.n}</div>
              <div className={styles.cardTitle}>{step.title}</div>
              <p className={styles.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
