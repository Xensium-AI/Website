import styles from "./Capabilities.module.css";
import Icon from "./Icon";
import { capabilities } from "@/content/site-content";

export default function Capabilities() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">What Xensium can do</div>
          <h2 className="sectionTitle">A full front desk, handled on every call.</h2>
          <p className="sectionSub">
            Every capability below runs on the same call — no menus, no hold music, no handoffs
            your caller has to repeat themselves through.
          </p>
        </div>
        <ul className={styles.grid}>
          {capabilities.map((cap) => (
            <li key={cap.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={cap.icon} size={22} />
              </span>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
