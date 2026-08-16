import styles from "./Industries.module.css";
import { industries } from "@/content/site-content";

export default function Industries() {
  return (
    <section id="industries" className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">Built for your business</div>
          <h2 className="sectionTitle">One receptionist, shaped to your industry.</h2>
        </div>
        <div className={styles.grid}>
          {industries.map((industry) => (
            <div key={industry.title} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {industry.icon}
              </span>
              <div>
                <div className={styles.cardTitle}>{industry.title}</div>
                <p className={styles.cardDesc}>{industry.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
