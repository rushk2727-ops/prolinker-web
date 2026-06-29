"use client";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  IconBrain, IconShieldCheck, IconBolt, IconUsers,
  IconChartBar, IconLock, IconSparkles, IconArrowRight,
  IconClock, IconStar, IconNetwork,
} from "@tabler/icons-react";

function CountUp({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1500, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{suffix}</span>;
}

function PulsingDot() {
  return (
    <div style={{ position: "relative", width: "10px", height: "10px", flexShrink: 0 }}>
      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#0a7c4e", position: "absolute" }} />
      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#0a7c4e", position: "absolute", animation: "pulse-ring 1.5s ease-out infinite", opacity: 0.4 }} />
    </div>
  );
}

function LiveMatchMini() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);
  const matches = [
    { name: "Marcus T.", score: 98, color: "#0a7c4e", bg: "#e6f5ef" },
    { name: "Priya S.", score: 95, color: "#0f1f3d", bg: "#e8edf5" },
    { name: "James L.", score: 91, color: "#b8922a", bg: "#fdf6e3" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {matches.map(function(m, i) {
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "10px", background: i === active ? m.bg : "rgba(255,255,255,0.04)", border: `1px solid ${i === active ? m.color + "30" : "rgba(255,255,255,0.06)"}`, transition: "all 0.4s ease" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, color: m.color, flexShrink: 0 }}>{m.name[0]}</div>
            <span style={{ flex: 1, fontSize: "12px", fontWeight: 600, color: i === active ? "#0f1f3d" : "rgba(255,255,255,0.5)" }}>{m.name}</span>
            <span style={{ fontSize: "11px", fontWeight: 800, color: m.color, background: m.bg, padding: "2px 8px", borderRadius: "100px" }}>{m.score}%</span>
          </div>
        );
      })}
    </div>
  );
}

function MiniChart() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const bars = [40, 65, 50, 80, 70, 90, 85, 100];
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "60px" }}>
      {bars.map(function(h, i) {
        return (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={inView ? { height: `${h}%` } : { height: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: 1, background: i === bars.length - 1 ? "#b8922a" : "rgba(184,146,42,0.35)", borderRadius: "4px 4px 0 0" }}
          />
        );
      })}
    </div>
  );
}

export default function WhyProLinker() {
  const { t } = useLang();
  return (
    <section style={{ padding: "120px 0", background: "#0f1f3d", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#f0c96b" }}>{t("why.eyebrow")}</span>
            <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#ffffff", lineHeight: 1.08, marginBottom: "16px" }}>
            {t("why.headline1")}<br />
            <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("why.headline2")}
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#5a6a85", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            {t("why.subtext")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "auto", gap: "16px" }}>

          {/* Cell 1 — AI Matching (large, dark navy) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            style={{ gridColumn: "span 5", gridRow: "span 1", background: "#1e3a6e", borderRadius: "20px", padding: "32px", position: "relative", overflow: "hidden", minHeight: "280px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(15,31,61,0.4)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
          >
            <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.15) 0%, transparent 70%)" }} />
            <div>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconBrain size={22} style={{ color: "#f0c96b" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "20px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "8px" }}>{t("why.card1Title")}</h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: "20px" }}>{t("why.card1Desc")}</p>
            </div>
            <LiveMatchMini />
          </motion.div>

          {/* Cell 2 — Stats (gold accent) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ gridColumn: "span 3", gridRow: "span 1", background: "#fdf6e3", border: "1px solid rgba(184,146,42,0.3)", borderRadius: "20px", padding: "32px", position: "relative", overflow: "hidden", minHeight: "280px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(184,146,42,0.15)"; el.style.borderColor = "rgba(184,146,42,0.4)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "rgba(184,146,42,0.2)"; }}
          >
            <div>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconChartBar size={22} style={{ color: "#b8922a" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em", marginBottom: "6px" }}>{t("why.card2Title")}</h3>
              <p style={{ fontSize: "12px", color: "#5a6a85", lineHeight: 1.6, marginBottom: "20px" }}>{t("why.card2Desc")}</p>
            </div>
            <div>
              <MiniChart />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
                <span style={{ fontSize: "10px", color: "#8a97ad" }}>Jan</span>
                <span style={{ fontSize: "10px", color: "#8a97ad" }}>Aug</span>
              </div>
            </div>
          </motion.div>

          {/* Cell 3 — Hire Time */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{ gridColumn: "span 4", gridRow: "span 1", background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "20px", padding: "32px", minHeight: "280px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(15,31,61,0.1)"; el.style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <div>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "#e8edf5", border: "1px solid #c8d0e0", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconClock size={22} style={{ color: "#0f1f3d" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em", marginBottom: "6px" }}>{t("why.card3Title")}</h3>
              <p style={{ fontSize: "12px", color: "#5a6a85", lineHeight: 1.6 }}>{t("why.card3Desc")}</p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "56px", fontWeight: 900, color: "#0f1f3d", letterSpacing: "-0.05em", lineHeight: 1 }}>
                <CountUp target={48} suffix="h" />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px" }}>
                <IconArrowRight size={12} style={{ color: "#0a7c4e" }} />
                <span style={{ fontSize: "11px", color: "#0a7c4e", fontWeight: 600 }}>vs 2 weeks industry avg</span>
              </div>
            </div>
          </motion.div>

          {/* Cell 4 — Escrow Security */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{ gridColumn: "span 4", gridRow: "span 1", background: "#e6f5ef", border: "1px solid rgba(10,124,78,0.25)", borderRadius: "20px", padding: "32px", minHeight: "240px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(10,124,78,0.15)"; el.style.borderColor = "rgba(10,124,78,0.4)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "rgba(10,124,78,0.2)"; }}
          >
            <div>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(10,124,78,0.15)", border: "1px solid rgba(10,124,78,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconLock size={22} style={{ color: "#0a7c4e" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em", marginBottom: "6px" }}>{t("why.card4Title")}</h3>
              <p style={{ fontSize: "12px", color: "#5a6a85", lineHeight: 1.6 }}>{t("why.card4Desc")}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <PulsingDot />
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0a7c4e" }}>$2.4B+ secured to date</span>
            </div>
          </motion.div>

          {/* Cell 5 — Network */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ gridColumn: "span 4", gridRow: "span 1", background: "#eef2ff", border: "1px solid rgba(99,102,241,0.25)", borderRadius: "20px", padding: "32px", minHeight: "240px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(15,31,61,0.4)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
          >
            <div style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }} />
            <div>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconNetwork size={22} style={{ color: "#818cf8" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", fontWeight: 800, color: "#3730a3", letterSpacing: "-0.03em", marginBottom: "6px" }}>{t("why.card5Title")}</h3>
              <p style={{ fontSize: "12px", color: "#4f46e5", lineHeight: 1.6 }}>{t("why.card5Desc")}</p>
            </div>
            <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "40px", fontWeight: 900, color: "#3730a3", letterSpacing: "-0.04em" }}>
              <CountUp target={691} suffix="K+" />
            </div>
          </motion.div>

          {/* Cell 6 — Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.24 }}
            style={{ gridColumn: "span 4", gridRow: "span 1", background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "20px", padding: "32px", minHeight: "240px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(15,31,61,0.1)"; el.style.borderColor = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
          >
            <div>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(184,146,42,0.1)", border: "1px solid rgba(184,146,42,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconStar size={22} style={{ color: "#b8922a" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em", marginBottom: "6px" }}>{t("why.card6Title")}</h3>
              <p style={{ fontSize: "12px", color: "#5a6a85", lineHeight: 1.6 }}>{t("why.card6Desc")}</p>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
              {[...Array(5)].map(function(_, i) {
                return <IconStar key={i} size={24} style={{ color: "#f59e0b", fill: "#f59e0b" }} />;
              })}
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f1f3d", marginLeft: "8px", alignSelf: "center" }}>5.0</span>
            </div>
          </motion.div>

          {/* Cell 7 — Invite Only */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            style={{ gridColumn: "span 4", gridRow: "span 1", background: "#fdf6e3", border: "1px solid rgba(184,146,42,0.3)", borderRadius: "20px", padding: "32px", minHeight: "240px", display: "flex", flexDirection: "column", justifyContent: "space-between", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-6px)"; el.style.boxShadow = "0 20px 60px rgba(184,146,42,0.15)"; el.style.borderColor = "rgba(184,146,42,0.4)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.borderColor = "rgba(184,146,42,0.2)"; }}
          >
            <div>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconShieldCheck size={22} style={{ color: "#b8922a" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em", marginBottom: "6px" }}>{t("why.card7Title")}</h3>
              <p style={{ fontSize: "12px", color: "#5a6a85", lineHeight: 1.6 }}>{t("why.card7Desc")}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex" }}>
                {["M", "P", "J", "S"].map(function(l, i) {
                  return <div key={i} style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#0f1f3d", border: "2px solid #fdf6e3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#f0c96b", marginLeft: i > 0 ? "-8px" : 0 }}>{l}</div>;
                })}
              </div>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#b8922a" }}>Top 1% only</span>
            </div>
          </motion.div>

          {/* Cell 8 — Private Projects (wide) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.32 }}
            style={{ gridColumn: "span 8", gridRow: "span 1", background: "#1e3a6e", borderRadius: "20px", padding: "40px 48px", minHeight: "180px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", position: "relative", overflow: "hidden", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
            onMouseEnter={function(e) { const el = e.currentTarget; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 20px 60px rgba(15,31,61,0.4)"; }}
            onMouseLeave={function(e) { const el = e.currentTarget; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
          >
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(184,146,42,0.08), transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <IconBolt size={22} style={{ color: "#f0c96b" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "22px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "8px" }}>{t("why.card8Title")}</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "400px" }}>{t("why.card8Desc")}</p>
            </div>
            <div style={{ flexShrink: 0, position: "relative", zIndex: 1 }}>
              <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", padding: "20px 28px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "36px", fontWeight: 900, color: "#f0c96b", letterSpacing: "-0.04em", marginBottom: "4px" }}>100%</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>Confidential</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
