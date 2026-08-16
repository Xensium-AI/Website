import styles from "./Hero.module.css";
import CtaButton from "./CtaButton";
import LiveCallDemo from "./LiveCallDemo";
import { heroTrustPoints } from "@/content/site-content";
import { AI_RECEPTIONIST_PHONE, CALENDAR_LINK } from "@/config/site";

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
          <p className={styles.sub}>
            Xensium AI picks up on the first ring, talks with your customers naturally, and books,
            qualifies, and captures — 24/7. Advanced AI, made simple.
          </p>
          <div className={styles.ctas}>
            <CtaButton href={CALENDAR_LINK} variant="primary" icon="📅">
              Book a Demo
            </CtaButton>
            <a href={AI_RECEPTIONIST_PHONE.href} className={styles.callBtn}>
              <span className={styles.callIcon} aria-hidden="true">
                📞
              </span>
              Talk to our AI receptionist
            </a>
          </div>
          <div className={styles.callNow}>
            Or call it right now — <span>{AI_RECEPTIONIST_PHONE.display}</span>
          </div>
          <div className={styles.trust}>
            {heroTrustPoints.map((point, i) => (
              <span key={point} className={styles.trustItem}>
                {i > 0 && (
                  <span className={styles.dotSep} aria-hidden="true">
                    ·
                  </span>
                )}
                <span>{point}</span>
              </span>
            ))}
          </div>
        </div>

        <div id="live" className={styles.demo}>
          <LiveCallDemo />
        </div>
      </div>
    </section>
  );
}
