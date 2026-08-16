import styles from "./Outcomes.module.css";
import { outcomes } from "@/content/site-content";

export default function Outcomes() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">Business outcomes</div>
          <h2 className="sectionTitle">Fewer missed calls. More booked business.</h2>
        </div>
        <div className={styles.grid}>
          {outcomes.map((outcome) => (
            <div key={outcome.title} className={styles.card}>
              <div className={styles.cardTitle}>{outcome.title}</div>
              <p className={styles.cardDesc}>{outcome.desc}</p>
              <div className={styles.tracked}>↑ tracked in your dashboard</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
