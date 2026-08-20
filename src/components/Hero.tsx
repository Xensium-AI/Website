import styles from "./Hero.module.css";
import CtaButton from "./CtaButton";
import LiveCallDemo from "./LiveCallDemo";
import Icon from "./Icon";
import { heroProofPoints, heroSubcopy } from "@/content/site-content";
import { AI_RECEPTIONIST_PHONE, CAL_COM_BOOKING_URL } from "@/config/site";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.dots} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            AI Voice Receptionist
          </div>
          <h1 className={styles.title}>The AI receptionist that answers every business call.</h1>
          <p className={styles.sub}>{heroSubcopy}</p>

          <div className={styles.ctas}>
            <CtaButton href={CAL_COM_BOOKING_URL} variant="primary" external>
              Book a Demo
            </CtaButton>
            <CtaButton href={AI_RECEPTIONIST_PHONE.href} variant="outline">
              Talk to our AI receptionist
            </CtaButton>
          </div>

          <ul className={styles.proof}>
            {heroProofPoints.map((point) => (
              <li key={point} className={styles.proofItem}>
                <span className={styles.proofCheck}>
                  <Icon name="check" size={13} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className={styles.callNow}>
            Or call it right now — <span>{AI_RECEPTIONIST_PHONE.display}</span>
          </div>
        </div>

        <div id="live" className={styles.demo}>
          <LiveCallDemo />
        </div>
      </div>
    </section>
  );
}
