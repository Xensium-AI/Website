import styles from "./HowItWorks.module.css";
import { howItWorks, howItWorksIntro } from "@/content/site-content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">How it works</div>
          <h2 className="sectionTitle">Live within 14 days - no technical setup.</h2>
          <p className="sectionSub">{howItWorksIntro}</p>
        </div>

        <ol className={styles.timeline}>
          {howItWorks.map((step) => (
            <li key={step.n} className={styles.step}>
              <div className={styles.marker}>
                <span className={styles.num}>{step.n}</span>
              </div>
              <div className={styles.body}>
                <span className={styles.range}>{step.range}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
