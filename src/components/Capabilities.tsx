import styles from "./Capabilities.module.css";
import { capabilities } from "@/content/site-content";

export default function Capabilities() {
  return (
    <section id="capabilities" className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">What Xensium can do</div>
          <h2 className="sectionTitle">A full front desk, handled on every call.</h2>
        </div>
        <div className={styles.grid}>
          {capabilities.map((cap) => (
            <div key={cap.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                {cap.icon}
              </div>
              <div className={styles.cardTitle}>{cap.title}</div>
              <p className={styles.cardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
