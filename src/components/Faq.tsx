"use client";

import { useState } from "react";
import styles from "./Faq.module.css";
import { faqs } from "@/content/site-content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <div className="eyebrow">Questions</div>
          <h2 className={`sectionTitle ${styles.title}`}>You probably want to know…</h2>
        </div>
        <div className={styles.list}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ""}`}
                  aria-hidden={!isOpen}
                >
                  <div className={styles.answerClip}>
                    <div className={styles.answer}>{faq.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
