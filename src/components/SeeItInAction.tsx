import styles from "./SeeItInAction.module.css";
import Waveform from "./Waveform";
import { actionExamples } from "@/content/site-content";

export default function SeeItInAction() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.intro}>
          <div className="eyebrow">See it in action</div>
          <h2 className="sectionTitle">See what happens when every call gets answered.</h2>
          <p className={`sectionSub ${styles.sub}`}>
            From new inquiries to appointment requests, Xensium AI handles the conversations your
            business can&rsquo;t afford to miss.
          </p>
        </div>

        <div className={styles.grid}>
          {actionExamples.map((example) => (
            <div key={example.tag} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.tag}>{example.tag}</span>
                <Waveform preset="card" />
              </div>
              <div className={styles.convo}>
                <div className={styles.callerBubble}>{example.caller}</div>
                <div className={styles.aiRow}>
                  <span className={styles.aiAvatar} aria-hidden="true">
                    Xe
                  </span>
                  <div className={styles.aiBubble}>{example.ai}</div>
                </div>
              </div>
              <div className={styles.result}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>{example.result}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.disclaimer}>Example conversations shown for demonstration purposes.</div>
      </div>
    </section>
  );
}
