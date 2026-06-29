"use client";
import { useLang } from "@/context/LangContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { IconArrowUpRight, IconShieldCheck, IconClock, IconStar, IconUsers } from "@tabler/icons-react";

function CountUp({ target, prefix = "", suffix = "", duration = 2000 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{prefix}{count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{suffix}</span>;
}


export default function StatsSection() {
  const { t } = useLang();

  const STATS = [
    { icon: IconUsers, value: 691, suffix: "K+", label: t("stats.label1"), context: "vs 18M+ unverified on Upwork", contextIcon: IconArrowUpRight, color: "#f0c96b" },
    { icon: IconShieldCheck, value: 2.4, prefix: "$", suffix: "B+", label: t("stats.label2"), context: "100% secured by escrow", contextIcon: IconShieldCheck, color: "#f0c96b" },
    { icon: IconStar, value: 98, suffix: "%", label: t("stats.label3"), context: "vs industry avg of 74%", contextIcon: IconArrowUpRight, color: "#f0c96b" },
    { icon: IconClock, value: 24, prefix: "<", suffix: "h", label: t("stats.label4"), context: "vs industry avg of 72h", contextIcon: IconArrowUpRight, color: "#f0c96b" },
  ];

  return (
    <section style={{ background: "#0f1f3d", padding: "80px 0", position: "relative", overflow: "hidden" }}>

      {/* Background elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-200px", left: "-200px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-200px", right: "-200px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(184,146,42,0.1)", border: "1px solid rgba(184,146,42,0.2)", borderRadius: "100px", padding: "6px 16px", marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#f0c96b" }}>{t("stats.eyebrow")}</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#ffffff", lineHeight: 1.1, marginBottom: "14px" }}>
            {t("stats.headline1")}<br />
            <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("stats.headline2")}
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            {t("stats.subtext")}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", borderRadius: "20px", overflow: "hidden" }}>
          {STATS.map(function(stat, i) {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ background: "#0f1f3d", padding: "40px 32px", position: "relative", overflow: "hidden", cursor: "default", transition: "background 0.3s ease" }}
                onMouseEnter={function(e) { e.currentTarget.style.background = "#1a3260"; }}
                onMouseLeave={function(e) { e.currentTarget.style.background = "#0f1f3d"; }}
              >
                {/* Top accent line */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(240,201,107,0.4), transparent)", opacity: 0, transition: "opacity 0.3s" }} />

                {/* Icon */}
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(184,146,42,0.1)", border: "1px solid rgba(184,146,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <Icon size={18} style={{ color: "#f0c96b" }} />
                </div>

                {/* Value */}
                <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.05em", color: "#ffffff", lineHeight: 1, marginBottom: "8px" }}>
                  {stat.prefix && <span style={{ color: "#f0c96b" }}>{stat.prefix}</span>}
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div style={{ fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                  {stat.label}
                </div>

                {/* Divider */}
                <div style={{ width: "32px", height: "1px", background: "rgba(184,146,42,0.3)", marginBottom: "12px" }} />

                {/* Context */}
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <IconArrowUpRight size={12} style={{ color: "#f0c96b", flexShrink: 0 }} />
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{stat.context}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", marginTop: "40px", flexWrap: "wrap" }}
        >
          {[
            { icon: IconShieldCheck, text: t("stats.badge1") },
            { icon: IconShieldCheck, text: t("stats.badge2") },
            { icon: IconShieldCheck, text: t("stats.badge3") },
            { icon: IconShieldCheck, text: t("stats.badge4") },
          ].map(function(item, i) {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <item.icon size={14} style={{ color: "#f0c96b", flexShrink: 0 }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{item.text}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
