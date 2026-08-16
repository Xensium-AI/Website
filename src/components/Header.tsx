import Logo from "./Logo";
import styles from "./Header.module.css";
import { navLinks } from "@/content/site-content";
import { AI_RECEPTIONIST_PHONE, CALENDAR_LINK } from "@/config/site";

export default function Header() {
  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={styles.inner}>
        <a href="#top" className={styles.logoLink} aria-label="Xensium AI — home">
          <Logo collapseOnTiny />
        </a>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <a href={AI_RECEPTIONIST_PHONE.href} className={styles.phone}>
            <span className={styles.phoneIcon} aria-hidden="true">
              📞
            </span>
            <span className={styles.phoneLabel}>
              <span className={styles.phoneCaption}>Call our AI receptionist</span>
              <span className={styles.phoneNumber}>{AI_RECEPTIONIST_PHONE.display}</span>
            </span>
          </a>
          <a href={CALENDAR_LINK} className={styles.demo}>
            <span aria-hidden="true">📅</span>
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
