import styles from "./Problem.module.css";
import { problemCards } from "@/content/site-content";

export default function Problem() {
  return (
    <section id="problem" className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">The cost of a missed call</div>
          <h2 className="sectionTitle sectionTitle--oneLine">Every unanswered call is a customer calling someone else.</h2>
          <p className={`sectionSub ${styles.sub}`}>
            Phones ring while your team is with customers, after you close, and all at once during a
            rush. The call you miss is often the one that mattered most.
          </p>
        </div>
        <div className={styles.grid}>
          {problemCards.map((card) => (
            <div key={card.n} className={styles.card}>
              <div className={styles.num}>{card.n}</div>
              <div className={styles.cardTitle}>{card.title}</div>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
