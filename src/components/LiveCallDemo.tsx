"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./LiveCallDemo.module.css";
import Waveform from "./Waveform";
import Icon from "./Icon";
import {
  callerLabel,
  conversation,
  conversationOutcomes,
  conversationTitle,
} from "@/content/site-content";

const TURN_PACE_MS = 1400;
const FIRST_TURN_DELAY_MS = 500;
const REPLAY_PAUSE_MS = 3200;

/**
 * Animated caller ↔ AI receptionist transcript.
 *
 * Renders the complete conversation on the server so it is meaningful with
 * JavaScript disabled; once hydrated (and unless the reader prefers reduced
 * motion) it replays the turns one at a time.
 */
export default function LiveCallDemo() {
  const [step, setStep] = useState(conversation.length);
  const [showOutcome, setShowOutcome] = useState(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback(() => {
    clearTimers();
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setStep(conversation.length);
      setShowOutcome(true);
      return;
    }

    setStep(0);
    setShowOutcome(false);
    let t = FIRST_TURN_DELAY_MS;
    conversation.forEach((_, i) => {
      timers.current.push(setTimeout(() => setStep(i + 1), t));
      t += TURN_PACE_MS;
    });
    timers.current.push(setTimeout(() => setShowOutcome(true), t + 200));
    // keep the call alive — replay from the top after a short pause
    timers.current.push(setTimeout(() => play(), t + 200 + REPLAY_PAUSE_MS));
  }, []);

  /* The server renders the whole conversation so it is meaningful without
     JavaScript. Reset to the first turn before the browser paints, so the
     reader never sees the finished transcript flash into view. */
  useLayoutEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    setStep(0);
    setShowOutcome(false);
  }, []);

  useEffect(() => {
    play();
    return clearTimers;
  }, [play]);

  // Follow the conversation as new turns appear.
  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [step, showOutcome]);

  const visibleTurns = conversation.slice(0, step);
  const typingIsAI = step < conversation.length && conversation[step].who === "ai";

  return (
    <div className={styles.wrap}>
      <div className={styles.flow}>
        <div className={styles.party}>
          <span className={styles.callerAvatar} aria-hidden="true">
            <svg viewBox="0 0 44 44" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="22" cy="15" r="6.5" />
              <path d="M9 37a13 13 0 0 1 26 0" />
            </svg>
          </span>
          <span className={styles.partyName}>Caller</span>
        </div>

        <div className={styles.link} aria-hidden="true">
          <svg viewBox="0 0 160 40" preserveAspectRatio="none" className={styles.linkPath}>
            <path
              d="M2 30 C 40 30, 40 10, 80 10 S 120 30, 158 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="7 8"
            />
          </svg>
          <span className={styles.linkBadge}>
            <span className={styles.linkDot} />
            Live
          </span>
        </div>

        <div className={styles.party}>
          <span className={styles.aiAvatarLg} aria-hidden="true">
            <svg viewBox="0 0 44 44" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="11" y="14" width="22" height="17" rx="5" />
              <path d="M22 8.5v5.5M7.5 21v4M36.5 21v4" />
              <circle cx="17.5" cy="22.5" r="1.6" fill="currentColor" stroke="none" />
              <circle cx="26.5" cy="22.5" r="1.6" fill="currentColor" stroke="none" />
              <path d="M18 27.5h8" />
            </svg>
          </span>
          <span className={`${styles.partyName} ${styles.partyNameAi}`}>AI Receptionist</span>
        </div>
      </div>

      <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.status}>
          <span className={styles.liveDot} aria-hidden="true" />
          <span className={styles.liveTag}>Live</span>
          <span className={styles.callerLabel}>{callerLabel}</span>
        </div>
        <Waveform preset="demo" />
      </div>

      <div className={styles.transcript} ref={transcriptRef} aria-live="polite">
        <div className={styles.sceneTitle}>{conversationTitle}</div>
        {visibleTurns.map((turn, i) =>
          turn.who === "ai" ? (
            <div key={i} className={styles.aiTurn}>
              <span className={styles.aiAvatar} aria-hidden="true">
                Xe
              </span>
              <div className={styles.aiBody}>
                <div className={styles.aiName}>AI Receptionist</div>
                <div className={styles.aiBubble}>{turn.text}</div>
              </div>
            </div>
          ) : (
            <div key={i} className={styles.callerTurn}>
              <div className={styles.callerBody}>
                <div className={styles.callerName}>Caller</div>
                <div className={styles.callerBubble}>{turn.text}</div>
              </div>
            </div>
          ),
        )}
        {typingIsAI && (
          <div className={styles.typing}>
            <span className={styles.typingAvatar} aria-hidden="true">
              Xe
            </span>
            <div className={styles.typingBubble}>
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
              <span className={styles.typingDot} />
            </div>
          </div>
        )}
      </div>

      {showOutcome && (
        <div className={styles.actions}>
          {conversationOutcomes.map((outcome, i) => (
            <div key={outcome} className={styles.actionChip} style={{ animationDelay: `${i * 110}ms` }}>
              <span className={styles.check}>
                <Icon name="check" size={12} />
              </span>
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <span className={styles.footerNote}>Simulated conversation shown for demonstration.</span>
        <button type="button" onClick={play} className={styles.replay}>
          ↻ Replay
        </button>
      </div>
      </div>
    </div>
  );
}
