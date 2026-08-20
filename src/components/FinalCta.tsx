import styles from "./FinalCta.module.css";
import Waveform from "./Waveform";
import CtaButton from "./CtaButton";
import { AI_RECEPTIONIST_PHONE, CAL_COM_BOOKING_URL } from "@/config/site";

export default function FinalCta() {
  return (
    <section id="demo" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.wave}>
          <Waveform preset="cta" />
        </div>
        <h2 className={styles.title}>Stop missing calls. Start answering every opportunity.</h2>
        <p className={styles.sub}>
          Give your customers a receptionist that never sleeps, never takes a day off, and is ready
          whenever they call.
        </p>
        <div className={styles.buttons}>
          <CtaButton href={AI_RECEPTIONIST_PHONE.href} variant="primary">
            Call our AI receptionist
          </CtaButton>
          <CtaButton href={CAL_COM_BOOKING_URL} variant="outlineDark" external>
            Book a Demo
          </CtaButton>
        </div>
        <div className={styles.phoneNote}>{AI_RECEPTIONIST_PHONE.display} · available 24/7</div>
      </div>
    </section>
  );
}
