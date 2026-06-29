"use client";
import { useLang } from "@/context/LangContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  IconBrain, IconBolt, IconShieldCheck, IconTargetArrow,
  IconArrowRight, IconSparkles, IconCheck, IconChartBar,
  IconNetwork, IconClock,
} from "@tabler/icons-react";


function RadarChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1500, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView]);

  const cx = 140, cy = 140, r = 100;
  const axes = ["Skills", "Rating", "Speed", "Trust", "Value", "Comms"];
  const n = axes.length;
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];
  const matchData = [0.98, 0.95, 0.88, 0.92, 0.85, 0.90];

  function getPoint(angle: number, radius: number) {
    const rad = (angle - 90) * (Math.PI / 180);
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  }

  const axisAngles = axes.map((_, i) => (360 / n) * i);

  const dataPoints = matchData.map((val, i) => {
    const pt = getPoint(axisAngles[i], r * val * progress);
    return `${pt.x},${pt.y}`;
  });

  return (
    <svg ref={ref} viewBox="0 0 280 280" style={{ width: "100%", maxWidth: "280px" }}>
      {/* Grid levels */}
      {levels.map((level, li) => {
        const pts = axisAngles.map(ang => {
          const pt = getPoint(ang, r * level);
          return `${pt.x},${pt.y}`;
        }).join(" ");
        return <polygon key={li} points={pts} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />;
      })}

      {/* Axis lines */}
      {axisAngles.map((ang, i) => {
        const pt = getPoint(ang, r);
        return <line key={i} x1={cx} y1={cy} x2={pt.x} y2={pt.y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />;
      })}

      {/* Data polygon */}
      <polygon
        points={dataPoints.join(" ")}
        fill="rgba(184,146,42,0.15)"
        stroke="#f0c96b"
        strokeWidth="2"
        style={{ filter: "drop-shadow(0 0 8px rgba(240,201,107,0.4))" }}
      />

      {/* Data points */}
      {matchData.map((val, i) => {
        const pt = getPoint(axisAngles[i], r * val * progress);
        return (
          <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="#f0c96b" stroke="#0f1f3d" strokeWidth="2"
            style={{ filter: "drop-shadow(0 0 4px rgba(240,201,107,0.6))" }}
          />
        );
      })}

      {/* Axis labels */}
      {axes.map((label, i) => {
        const pt = getPoint(axisAngles[i], r + 20);
        return (
          <text key={i} x={pt.x} y={pt.y} textAnchor="middle" dominantBaseline="middle"
            style={{ fontSize: "9px", fill: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
            {label}
          </text>
        );
      })}

      {/* Center label */}
      <text x={cx} y={cy - 8} textAnchor="middle" style={{ fontSize: "18px", fill: "#f0c96b", fontFamily: "Geist, sans-serif", fontWeight: 800 }}>98%</text>
      <text x={cx} y={cy + 10} textAnchor="middle" style={{ fontSize: "8px", fill: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif" }}>MATCH SCORE</text>
    </svg>
  );
}

function LiveMatchPanel() {
  const { t } = useLang();
  const steps = [
    { label: "Scanning 691,649 profiles...", pct: 100 },
    { label: "Applying 50+ match signals...", pct: 78 },
    { label: "Running trust verification...", pct: 45 },
    { label: "Generating match scores...", pct: 20 },
  ];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", padding: "20px", marginTop: "16px" }}>
      <div style={{ fontSize: "10px", fontWeight: 700, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "14px" }}>AI Processing Steps</div>
      {steps.map(function(step, i) {
        const isActive = i === activeStep;
        const isDone = i < activeStep;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 0", borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
            <div style={{ width: "18px", height: "18px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: isDone ? "rgba(184,146,42,0.2)" : isActive ? "rgba(184,146,42,0.1)" : "rgba(255,255,255,0.04)", border: `1px solid ${isDone ? "rgba(184,146,42,0.4)" : isActive ? "rgba(184,146,42,0.3)" : "rgba(255,255,255,0.08)"}`, transition: "all 0.3s" }}>
              {isDone ? <IconCheck size={10} style={{ color: "#f0c96b" }} /> : isActive ? <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f0c96b", animation: "pulse 1s ease-in-out infinite" }} /> : null}
            </div>
            <span style={{ fontSize: "11px", color: isDone ? "rgba(255,255,255,0.6)" : isActive ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)", fontWeight: isActive ? 600 : 400, transition: "all 0.3s" }}>
              {step.label}
            </span>
            {isDone && <IconCheck size={11} style={{ color: "#f0c96b", marginLeft: "auto", flexShrink: 0 }} />}
          </div>
        );
      })}
    </div>
  );
}

export default function AIFeatureSection() {
  const { t } = useLang();
  const FEATURES = [
    { icon: IconBrain, title: t("ai.feature1Title"), desc: t("ai.feature1Desc"), color: "#f0c96b" },
    { icon: IconTargetArrow, title: t("ai.feature2Title"), desc: t("ai.feature2Desc"), color: "#f0c96b" },
    { icon: IconBolt, title: t("ai.feature3Title"), desc: t("ai.feature3Desc"), color: "#f0c96b" },
    { icon: IconNetwork, title: t("ai.feature4Title"), desc: t("ai.feature4Desc"), color: "#f0c96b" },
  ];

  return (
    <section style={{ padding: "120px 0", background: "#f8f9fc", position: "relative", overflow: "hidden" }}>

      {/* Subtle background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,237,245,0.8) 0%, transparent 70%)" }} />
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#b8922a" }}>{t("ai.eyebrow")}</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#0f1f3d", lineHeight: 1.08, marginBottom: "20px" }}>
              {t("ai.headline1")}<br />
              <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("ai.headline2")}
              </span>
            </h2>

            <p style={{ fontSize: "1rem", color: "#5a6a85", lineHeight: 1.8, maxWidth: "440px", marginBottom: "40px" }}>
              Post once. Our AI scans 691,649 profiles across 50+ compatibility signals and instantly surfaces your 3 best-matched professionals — no scrolling, no guessing.
            </p>

            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
              {FEATURES.map(function(feat, i) {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ display: "flex", gap: "14px", padding: "16px", borderRadius: "12px", border: "1px solid transparent", transition: "all 0.25s ease", cursor: "default" }}
                    onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#f8f9fc"; el.style.borderColor = "#e2e6ef"; }}
                    onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "transparent"; el.style.borderColor = "transparent"; }}
                  >
                    <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "#fdf6e3", border: "1px solid rgba(184,146,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.25s" }}>
                      <Icon size={17} style={{ color: "#b8922a" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 700, color: "#0f1f3d", marginBottom: "4px" }}>{feat.title}</div>
                      <div style={{ fontSize: "13px", color: "#5a6a85", lineHeight: 1.65 }}>{feat.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#0f1f3d", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "13px 26px", borderRadius: "11px", textDecoration: "none", boxShadow: "0 4px 20px rgba(15,31,61,0.2)", transition: "background 0.2s" }}
              onMouseEnter={function(e) { e.currentTarget.style.background = "#b8922a"; }}
              onMouseLeave={function(e) { e.currentTarget.style.background = "#0f1f3d"; }}
            >
              {t("ai.cta")}
              <IconArrowRight size={15} />
            </motion.a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div style={{ background: "#0f1f3d", borderRadius: "24px", padding: "32px", boxShadow: "0 32px 80px rgba(15,31,61,0.2)", position: "relative", overflow: "hidden" }}>

              {/* Bg glow */}
              <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconSparkles size={16} style={{ color: "#f0c96b" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#ffffff" }}>ProLinker AI Engine</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>v3.2 · Real-time matching</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "100px", padding: "4px 10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} />
                  <span style={{ fontSize: "10px", fontWeight: 600, color: "#10b981" }}>{t("ticker.live")}</span>
                </div>
              </div>

              {/* Radar Chart */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "8px", position: "relative", zIndex: 1 }}>
                <RadarChart />
              </div>

              {/* Match scores */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px", position: "relative", zIndex: 1 }}>
                {[
                  { name: "Marcus T.", score: 98, color: "#10b981" },
                  { name: "Priya S.", score: 95, color: "#f0c96b" },
                  { name: "James L.", score: 91, color: "#f0c96b" },
                ].map(function(m, i) {
                  return (
                    <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
                      <div style={{ fontSize: "18px", fontWeight: 800, color: m.color, fontFamily: "Geist, sans-serif", letterSpacing: "-0.03em" }}>{m.score}%</div>
                      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{m.name}</div>
                    </div>
                  );
                })}
              </div>

              {/* Live processing steps */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <LiveMatchPanel />
              </div>

              {/* Bottom stat */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px", padding: "10px", background: "rgba(184,146,42,0.06)", border: "1px solid rgba(184,146,42,0.12)", borderRadius: "8px", position: "relative", zIndex: 1 }}>
                <IconClock size={13} style={{ color: "#f0c96b" }} />
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>691,649 profiles analysed in <strong style={{ color: "#f0c96b" }}>1.2 seconds</strong></span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
