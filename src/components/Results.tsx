import styles from "./Results.module.css";
import { results } from "@/content/site-content";

export default function Results() {
  return (
    <section id="results" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <div className="eyebrow eyebrow--dark">Results</div>
          <h2 className="sectionTitle sectionTitle--dark">
            What happens when you stop missing calls.
          </h2>
          <p className="sectionSub sectionSub--dark">
            Every call is answered, every lead is captured, and appointments are booked while your
            team stays focused on the work.
          </p>
        </div>

        <ul className={styles.grid}>
          {results.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.metric}>{item.metric}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
