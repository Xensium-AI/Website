import styles from "./Footer.module.css";
import Logo from "./Logo";
import { footerColumns } from "@/content/site-content";
import { CAL_COM_BOOKING_URL } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <Logo variant="dark" />
          </div>
          <p className={styles.tagline}>
            The AI voice receptionist that answers every call, talks like a human, and never misses
            an opportunity.
          </p>
        </div>
        <div className={styles.columns}>
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <div className={styles.heading}>{column.heading}</div>
              <div className={styles.links}>
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href === "BOOKING" ? CAL_COM_BOOKING_URL : link.href}
                    className={styles.link}
                    {...(link.href === "BOOKING"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        © {year} Xensium AI · Never miss a call. Never miss an opportunity.
      </div>
    </footer>
  );
}
