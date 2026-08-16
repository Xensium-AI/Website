import styles from "./Waveform.module.css";

const PRESETS: Record<string, { heights: number[]; accent: number }> = {
  /* header of the live call demo card */
  demo: { heights: [40, 80, 55, 100, 65, 35], accent: 3 },
  /* small waveform on "see it in action" cards */
  card: { heights: [40, 85, 100, 55], accent: 2 },
  /* large waveform above the final CTA */
  cta: { heights: [35, 70, 100, 60, 40], accent: 2 },
};

export default function Waveform({ preset = "demo" }: { preset?: "demo" | "card" | "cta" }) {
  const { heights, accent } = PRESETS[preset];
  return (
    <div className={`${styles.wave} ${styles[preset]}`} aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className={`${styles.bar} ${i === accent ? styles.accent : ""}`}
          style={{ height: `${h}%`, animationDelay: `${i * 120}ms` }}
        />
      ))}
    </div>
  );
}
