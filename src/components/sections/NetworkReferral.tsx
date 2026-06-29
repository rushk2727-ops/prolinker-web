"use client";
import { useLang } from "@/context/LangContext";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  IconUsers, IconCash, IconArrowRight, IconNetwork,
  IconGift, IconTrendingUp, IconShieldCheck, IconBolt,
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
      const p = Math.min((ts - start) / 2000, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

const NETWORK_NODES = [
  { id: "you", label: "You", x: 50, y: 50, size: 48, color: "#f0c96b", bg: "rgba(184,146,42,0.3)", border: "#f0c96b", level: 0, earnings: null },
  { id: "a1", label: "Sarah K.", x: 20, y: 20, size: 36, color: "#34d399", bg: "rgba(52,211,153,0.15)", border: "#34d399", level: 1, earnings: "$240/mo" },
  { id: "a2", label: "Marcus T.", x: 80, y: 18, size: 36, color: "#34d399", bg: "rgba(52,211,153,0.15)", border: "#34d399", level: 1, earnings: "$180/mo" },
  { id: "a3", label: "Priya S.", x: 15, y: 72, size: 36, color: "#34d399", bg: "rgba(52,211,153,0.15)", border: "#34d399", level: 1, earnings: "$320/mo" },
  { id: "a4", label: "James L.", x: 82, y: 70, size: 36, color: "#34d399", bg: "rgba(52,211,153,0.15)", border: "#34d399", level: 1, earnings: "$160/mo" },
  { id: "b1", label: "Alex M.", x: 8, y: 40, size: 26, color: "#818cf8", bg: "rgba(129,140,248,0.15)", border: "#818cf8", level: 2, earnings: "$45/mo" },
  { id: "b2", label: "Lisa R.", x: 35, y: 5, size: 26, color: "#818cf8", bg: "rgba(129,140,248,0.15)", border: "#818cf8", level: 2, earnings: "$60/mo" },
  { id: "b3", label: "Tom H.", x: 65, y: 5, size: 26, color: "#818cf8", bg: "rgba(129,140,248,0.15)", border: "#818cf8", level: 2, earnings: "$35/mo" },
  { id: "b4", label: "Nina W.", x: 92, y: 40, size: 26, color: "#818cf8", bg: "rgba(129,140,248,0.15)", border: "#818cf8", level: 2, earnings: "$80/mo" },
  { id: "b5", label: "Dan C.", x: 8, y: 88, size: 26, color: "#818cf8", bg: "rgba(129,140,248,0.15)", border: "#818cf8", level: 2, earnings: "$55/mo" },
  { id: "b6", label: "Eva P.", x: 92, y: 88, size: 26, color: "#818cf8", bg: "rgba(129,140,248,0.15)", border: "#818cf8", level: 2, earnings: "$70/mo" },
];

const CONNECTIONS = [
  ["you", "a1"], ["you", "a2"], ["you", "a3"], ["you", "a4"],
  ["a1", "b1"], ["a1", "b2"], ["a2", "b3"], ["a2", "b4"],
  ["a3", "b5"], ["a4", "b6"],
];

function NetworkViz() {
  const { t } = useLang();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [pulse, setPulse] = useState(0);
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const t = setInterval(() => setPulse(p => p + 1), 2000);
    return () => clearInterval(t);
  }, []);

  const getNode = (id: string) => NETWORK_NODES.find(n => n.id === id)!;

  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "80%" }}>
      <svg
        ref={ref}
        viewBox="0 0 400 320"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      >
        {/* Connection lines */}
        {CONNECTIONS.map(function([from, to], i) {
          const f = getNode(from);
          const t2 = getNode(to);
          const isActive = activeNode === from || activeNode === to;
          return (
            <motion.line
              key={i}
              x1={f.x * 4}
              y1={f.y * 3.2}
              x2={t2.x * 4}
              y2={t2.y * 3.2}
              stroke={isActive ? "#f0c96b" : "rgba(255,255,255,0.12)"}
              strokeWidth={isActive ? 2 : 1.5}
              strokeDasharray={isActive ? "none" : "4 4"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
              style={{ transition: "stroke 0.3s, strokeWidth 0.3s" }}
            />
          );
        })}

        {/* Animated pulse along connections */}
        {CONNECTIONS.map(function([from, to], i) {
          const f = getNode(from);
          const t2 = getNode(to);
          if (!inView) return null;
          return (
            <motion.circle
              key={"pulse-" + i}
              r="3"
              fill="#f0c96b"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                cx: [f.x * 4, t2.x * 4],
                cy: [f.y * 3.2, t2.y * 3.2],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3 + (pulse * 0.1),
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {NETWORK_NODES.map(function(node, i) {
          const x = node.x * 4;
          const y = node.y * 3.2;
          const isActive = activeNode === node.id;
          const isYou = node.id === "you";
          return (
            <g
              key={node.id}
              transform={`translate(${x}, ${y})`}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Pulse ring for "you" node */}
              {isYou && (
                <motion.circle
                  r={node.size / 2 + 8}
                  fill="none"
                  stroke="#f0c96b"
                  strokeWidth="1"
                  animate={{ r: [node.size / 2 + 6, node.size / 2 + 16], opacity: [0.6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}

              {/* Node circle */}
              <motion.circle
                r={node.size / 2}
                fill={node.bg}
                stroke={isActive ? "#f0c96b" : node.border}
                strokeWidth={isActive ? 2 : 1.5}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                style={{ transition: "stroke 0.2s" }}
              />

              {/* Label */}
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fontSize: isYou ? "11px" : "7px",
                  fontWeight: isYou ? 800 : 700,
                  fill: isYou ? "#f0c96b" : (node.level === 1 ? "#34d399" : "#818cf8"),
                  fontFamily: "var(--font-geist-sans)",
                  pointerEvents: "none",
                }}
              >
                {isYou ? "YOU" : node.label.split(" ")[0]}
              </text>

              {/* Earnings tooltip on hover */}
              {isActive && node.earnings && (
                <g transform="translate(0, -28)">
                  <rect x="-24" y="-10" width="48" height="18" rx="4" fill="rgba(240,201,107,0.9)" />
                  <text textAnchor="middle" dominantBaseline="middle" style={{ fontSize: "8px", fontWeight: 700, fill: "#0f1f3d", fontFamily: "var(--font-geist-sans)" }}>
                    {node.earnings}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function NetworkReferral() {
  const { t } = useLang();
  return (
    <section style={{ padding: "120px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-200px", left: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-200px", right: "-200px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(15,31,61,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

          {/* LEFT — Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fdf6e3", border: "1px solid rgba(184,146,42,0.25)", borderRadius: "100px", padding: "5px 14px", marginBottom: "16px" }}>
                <IconNetwork size={12} style={{ color: "#b8922a" }} />
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#b8922a" }}>Invite Network</span>
              </div>
              <div style={{ fontSize: "13px", color: "#5a6a85", marginBottom: "8px" }}>{t("network.hoverNote")}</div>
            </div>

            {/* Network Viz */}
            <div style={{ background: "#0f1f3d", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "20px", boxShadow: "0 8px 40px rgba(15,31,61,0.2)", padding: "24px" }}>
              <NetworkViz />

              {/* Legend */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                {[
                  { color: "#b8922a", label: "You" },
                  { color: "#34d399", label: "Level 1 (5%)" },
                  { color: "#818cf8", label: "Level 2 (2%)" },
                ].map(function(item, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: item.color, border: "1.5px solid rgba(255,255,255,0.3)" }} />
                      <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
              <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#b8922a" }}>{t("network.eyebrow")}</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#0f1f3d", lineHeight: 1.08, marginBottom: "20px" }}>
              {t("network.headline1")}<br />
              <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("network.headline2")}
              </span>
            </h2>

            <p style={{ fontSize: "1rem", color: "#5a6a85", lineHeight: 1.8, marginBottom: "40px", maxWidth: "420px" }}>
              {t("network.subtext")}
            </p>

            {/* How it works */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "40px" }}>
              {[
                { icon: IconUsers, title: "Invite a colleague", desc: "Share your personal invite link. They join as a verified professional.", value: null },
                { icon: IconCash, title: "They complete projects", desc: "Your Level 1 invites earn — you get 5% of their project fees.", value: "5%" },
                { icon: IconTrendingUp, title: "Their network grows too", desc: "When they invite others, you earn 2% of Level 2 earnings too.", value: "2%" },
                { icon: IconGift, title: "No cap, no expiry", desc: "Your passive income compounds as your network grows. Forever.", value: null },
              ].map(function(item, i) {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ display: "flex", gap: "14px", padding: "16px", borderRadius: "12px", border: "1px solid transparent", transition: "all 0.25s ease", cursor: "default" }}
                    onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#f8f9fc"; el.style.borderColor = "#e2e6ef"; }}
                    onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "transparent"; el.style.borderColor = "transparent"; }}
                  >
                    <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "#fdf6e3", border: "1px solid rgba(184,146,42,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} style={{ color: "#f0c96b" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                        <div style={{ fontSize: "14px", fontWeight: 600, color: "#0f1f3d" }}>{item.title}</div>
                        {item.value && (
                          <span style={{ fontSize: "11px", fontWeight: 800, color: "#b8922a", background: "#fdf6e3", border: "1px solid rgba(184,146,42,0.25)", borderRadius: "100px", padding: "2px 8px" }}>{item.value}</span>
                        )}
                      </div>
                      <div style={{ fontSize: "12px", color: "#5a6a85" }}>{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "32px" }}>
              {[
                { value: 800, prefix: "$", suffix: "+", label: t("network.stat1Label"), color: "#f0c96b" },
                { value: 691, suffix: "K+", label: t("network.stat2Label"), color: "#34d399" },
                { value: 2, prefix: "", suffix: " levels", label: t("network.stat3Label"), color: "#818cf8" },
              ].map(function(stat, i) {
                return (
                  <div key={i} style={{ background: "#ffffff", border: "1.5px solid #e2e6ef", borderRadius: "12px", boxShadow: "0 2px 12px rgba(15,31,61,0.08)", padding: "16px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "22px", fontWeight: 900, color: stat.color, letterSpacing: "-0.03em", marginBottom: "4px" }}>
                      <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <div style={{ fontSize: "10px", color: "#8a97ad", fontWeight: 500 }}>{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
<a
              href="#"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#b8922a", color: "#ffffff", fontSize: "14px", fontWeight: 700, padding: "14px 28px", borderRadius: "11px", textDecoration: "none", boxShadow: "0 8px 32px rgba(184,146,42,0.3)", transition: "all 0.2s" }}
              onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#d4a843"; el.style.boxShadow = "0 12px 40px rgba(184,146,42,0.45)"; }}
              onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#b8922a"; el.style.boxShadow = "0 8px 32px rgba(184,146,42,0.3)"; }}
            >
              Get Your Invite Link <IconArrowRight size={15} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
