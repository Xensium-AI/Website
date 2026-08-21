"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import styles from "./Header.module.css";
import { navLinks } from "@/content/site-content";
import { AI_RECEPTIONIST_PHONE, CAL_COM_BOOKING_URL } from "@/config/site";

/**
 * Sticky header. Never hides on scroll. Tracks the section in view with an
 * IntersectionObserver so the active nav item persists after a click and
 * updates as the reader scrolls.
 */
export default function Header() {
  const [activeId, setActiveId] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  /* While a click-initiated scroll is in flight the observer must not steal
     the highlight from the item the reader just chose. */
  const lockUntil = useRef(0);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < lockUntil.current) return;
        // Pick the entry nearest the top of the viewport that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        // Bias the "active" band just below the sticky header.
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Keep the clicked item highlighted, and close the mobile menu.
  const handleNavClick = useCallback((id: string) => {
    lockUntil.current = Date.now() + 1200;
    setActiveId(id);
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={styles.nav}>
      <nav className={styles.inner} aria-label="Main">
        <a href="#top" className={styles.logoLink} aria-label="Xensium AI — home">
          <Logo collapseOnTiny />
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${styles.link} ${active ? styles.linkActive : ""}`}
                  aria-current={active ? "location" : undefined}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.actions}>
          <a href={AI_RECEPTIONIST_PHONE.href} className={styles.phone}>
            <span className={styles.phoneLabel}>
              <span className={styles.phoneCaption}>Call our AI receptionist</span>
              <span className={styles.phoneNumber}>{AI_RECEPTIONIST_PHONE.display}</span>
            </span>
          </a>
          <a
            href={CAL_COM_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demo}
          >
            Book a Demo
          </a>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </nav>

      <div id="mobile-nav" className={`${styles.mobileNav} ${menuOpen ? styles.mobileOpen : ""}`} hidden={!menuOpen}>
        <ul className={styles.mobileList}>
          {navLinks.map((link) => {
            const active = activeId === link.id;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ""}`}
                  aria-current={active ? "location" : undefined}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                  {active && <span className={styles.activeDot} aria-hidden="true" />}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={CAL_COM_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mobileCta}
          onClick={() => setMenuOpen(false)}
        >
          Book a Demo
        </a>
        <a href={AI_RECEPTIONIST_PHONE.href} className={styles.mobilePhone} onClick={() => setMenuOpen(false)}>
          Call our AI receptionist · {AI_RECEPTIONIST_PHONE.display}
        </a>
      </div>
    </header>
  );
}
