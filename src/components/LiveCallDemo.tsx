"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./LiveCallDemo.module.css";
import Waveform from "./Waveform";
import { callScenarios, scenarioPills } from "@/content/site-content";

const TURN_PACE_MS = 1500;
const FIRST_TURN_DELAY_MS = 650;

/**
 * Animated caller ↔ AI receptionist conversation, ported from the approved
 * design: turns appear one by one with a typing indicator, then the
 * "actions taken" chips pop in. Industry pills switch the scenario.
 */
export default function LiveCallDemo() {
  const [industry, setIndustry] = useState("health");
  const [step, setStep] = useState(0);
  const [showActions, setShowActions] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const play = useCallback((key: string) => {
    clearTimers();
    const turns = callScenarios[key].turns;

    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setStep(turns.length);
      setShowActions(true);
      return;
    }

    setStep(0);
    setShowActions(false);
    let t = FIRST_TURN_DELAY_MS;
    turns.forEach((_, i) => {
      timers.current.push(setTimeout(() => setStep(i + 1), t));
      t += TURN_PACE_MS;
    });
    timers.current.push(setTimeout(() => setShowActions(true), t + 250));
  }, []);

  useEffect(() => {
    play(industry);
    return clearTimers;
  }, [industry, play]);

  const scenario = callScenarios[industry];
  const visibleTurns = scenario.turns.slice(0, step);
  const typingIsAI = step < scenario.turns.length && scenario.turns[step].who === "ai";

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.status}>
          <span className={styles.liveDot} aria-hidden="true" />
          <span className={styles.callerLabel}>{scenario.caller}</span>
        </div>
        <Waveform preset="demo" />
      </div>

      <div className={styles.transcript} aria-live="polite">
        <div className={styles.sceneTitle}>{scenario.title}</div>
        {visibleTurns.map((turn, i) =>
          turn.who === "ai" ? (
            <div key={i} className={styles.aiTurn}>
              <span className={styles.aiAvatar} aria-hidden="true">
                Xe
              </span>
              <div className={styles.aiBody}>
                <div className={styles.aiName}>XENSIUM AI</div>
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

      {showActions && (
        <div className={styles.actions}>
          {scenario.actions.map((action, i) => (
            <div key={action} className={styles.actionChip} style={{ animationDelay: `${i * 110}ms` }}>
              <span className={styles.check} aria-hidden="true">
                ✓
              </span>
              <span>{action}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.pills}>
          {scenarioPills.map((pill) => (
            <button
              key={pill.key}
              type="button"
              onClick={() => (pill.key === industry ? play(industry) : setIndustry(pill.key))}
              className={pill.key === industry ? styles.pillActive : styles.pill}
            >
              {pill.label}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => play(industry)} className={styles.replay}>
          ↻ Replay
        </button>
      </div>
      <div className={styles.demoNote}>Simulated conversation shown for demonstration.</div>
    </div>
  );
}
