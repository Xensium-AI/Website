"use client";

import { useRef, useState } from "react";
import styles from "./Contact.module.css";
import { AI_RECEPTIONIST_PHONE, CALENDAR_LINK } from "@/config/site";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [sent, setSent] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = {
      name: !name.trim(),
      email: !EMAIL_RE.test(email.trim()),
      message: message.trim().length < 4,
    };
    if (nextErrors.name || nextErrors.email || nextErrors.message) {
      setErrors(nextErrors);
      return;
    }
    /* Frontend-only for now: no email service / backend is connected yet. */
    setSent(true);
    setErrors({ name: false, email: false, message: false });
  };

  const reset = () => {
    setSent(false);
    setName("");
    setEmail("");
    setMessage("");
    setFileName(null);
    setErrors({ name: false, email: false, message: false });
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <div className="eyebrow">Contact</div>
          <h2 className={`sectionTitle ${styles.title}`}>Let&rsquo;s talk about your calls.</h2>
          <p className={styles.sub}>
            Tell us a little about your business and how you handle calls today. We&rsquo;ll show
            you what Xensium AI can do.
          </p>
          <div className={styles.channels}>
            <a href={AI_RECEPTIONIST_PHONE.href} className={styles.channel}>
              <span className={styles.channelIcon} aria-hidden="true">
                📞
              </span>
              <span className={styles.channelLabel}>
                <span className={styles.channelCaption}>Prefer to talk now? Call our AI receptionist</span>
                <span className={styles.channelValue}>{AI_RECEPTIONIST_PHONE.display}</span>
              </span>
            </a>
            <a href={CALENDAR_LINK} className={styles.channel}>
              <span className={styles.channelIcon} aria-hidden="true">
                📅
              </span>
              <span className={styles.channelLabel}>
                <span className={styles.channelCaption}>Rather see it live?</span>
                <span className={styles.channelValue}>Book a demo</span>
              </span>
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.sentCard}>
              <div className={styles.sentIcon} aria-hidden="true">
                ✓
              </div>
              <div className={styles.sentTitle}>Thanks — we&rsquo;ll be in touch.</div>
              <p className={styles.sentText}>
                We&rsquo;ve received your message. In the meantime, you can call our AI receptionist
                and hear it for yourself.
              </p>
              <button type="button" onClick={reset} className={styles.sentReset}>
                Send another message
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={submit} noValidate>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  placeholder="Jane Doe"
                  value={name}
                  autoComplete="name"
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prev) => ({ ...prev, name: false }));
                  }}
                />
                {errors.name && <div className={styles.error}>Please enter your name.</div>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                  placeholder="jane@company.com"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: false }));
                  }}
                />
                {errors.email && <div className={styles.error}>Please enter a valid email.</div>}
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                  placeholder="How do you handle calls today, and what would you want Xensium to help with?"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setErrors((prev) => ({ ...prev, message: false }));
                  }}
                />
                {errors.message && <div className={styles.error}>Please add a short message.</div>}
              </div>

              <div className={styles.field}>
                <span className={styles.label}>
                  Attach a file <span className={styles.optional}>(optional)</span>
                </span>
                <button
                  type="button"
                  className={styles.attach}
                  onClick={() => fileInput.current?.click()}
                >
                  <span className={styles.attachIcon} aria-hidden="true">
                    📎
                  </span>
                  <span className={styles.attachBody}>
                    <span className={styles.attachTitle}>{fileName ?? "Upload file"}</span>
                    <span className={styles.attachHint}>PDF, DOC, or image · optional</span>
                  </span>
                  <span className={styles.attachBrowse}>Browse</span>
                </button>
                <input
                  ref={fileInput}
                  type="file"
                  accept=".pdf,.doc,.docx,image/*"
                  className={styles.fileInput}
                  onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                  tabIndex={-1}
                  aria-hidden="true"
                />
                <div className={styles.attachNote}>
                  File uploads will be enabled soon — attachments aren&rsquo;t sent yet.
                </div>
              </div>

              <button type="submit" className={styles.submit}>
                Send Message
              </button>
              <div className={styles.privacy}>
                We&rsquo;ll only use your details to follow up about Xensium AI.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
