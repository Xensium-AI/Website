"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
  );
}
