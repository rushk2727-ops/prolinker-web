"use client";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import {
  IconCode, IconBrain, IconPalette, IconShield,
  IconCloud, IconDatabase, IconSpeakerphone, IconPencil,
  IconArrowRight, IconUsers,
} from "@tabler/icons-react";


export default function Categories() {
  const { t } = useLang();
  const CATEGORIES = [
    { icon: IconCode, label: "Development & Engineering", count: 182400, color: "#4f46e5", bg: "#eef2ff", border: "rgba(99,102,241,0.2)" },
    { icon: IconPalette, label: "Design & Creative", count: 94200, color: "#0891b2", bg: "#e0f7fa", border: "rgba(8,145,178,0.2)" },
    { icon: IconSpeakerphone, label: "Marketing & Growth", count: 67800, color: "#0a7c4e", bg: "#e6f5ef", border: "rgba(10,124,78,0.2)" },
    { icon: IconDatabase, label: "Business & Finance", count: 45300, color: "#b45309", bg: "#fef3c7", border: "rgba(180,83,9,0.2)" },
    { icon: IconShield, label: "Legal & Compliance", count: 28900, color: "#7c3aed", bg: "#f5f3ff", border: "rgba(124,58,237,0.2)" },
    { icon: IconBrain, label: "AI & Data Science", count: 51200, color: "#b8922a", bg: "#fdf6e3", border: "rgba(184,146,42,0.2)" },
    { icon: IconCloud, label: "Mobile Development", count: 38700, color: "#0f1f3d", bg: "#e8edf5", border: "rgba(15,31,61,0.15)" },
    { icon: IconPencil, label: "Video & Animation", count: 22100, color: "#c0392b", bg: "rgba(192,57,43,0.08)", border: "rgba(192,57,43,0.2)" },
  ];
  return (
    <section style={{ padding: "100px 0", background: "#f8f9fc", position: "relative", overflow: "hidden" }}>

      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,237,245,0.7) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(253,246,227,0.5) 0%, transparent 70%)" }} />
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "16px" }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#b8922a" }}>{t("categories.eyebrow")}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#0f1f3d", lineHeight: 1.08 }}>
              {t("categories.headline1")}<br />
              <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("categories.headline2")}
              </span>
            </h2>
          </div>
          
          <a
            href="#"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: 600, color: "#0f1f3d", textDecoration: "none", padding: "10px 18px", borderRadius: "8px", border: "1px solid #e2e6ef", background: "#ffffff", transition: "all 0.2s", boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}
            onMouseEnter={function(e) { const el = e.currentTarget; el.style.borderColor = "#0f1f3d"; el.style.boxShadow = "0 4px 16px rgba(15,31,61,0.12)"; }}
            onMouseLeave={function(e) { const el = e.currentTarget; el.style.borderColor = "#e2e6ef"; el.style.boxShadow = "0 2px 8px rgba(15,31,61,0.06)"; }}
          >
            View all categories <IconArrowRight size={14} />
          </a>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {CATEGORIES.map(function(cat, i) {
            const Icon = cat.icon;
            const isTopRow = i < 4;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e6ef",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(15,31,61,0.04)",
                }}
                onMouseEnter={function(e) {
                  const el = e.currentTarget;
                  el.style.borderColor = cat.border;
                  el.style.boxShadow = "0 16px 48px rgba(15,31,61,0.12)";
                  el.style.transform = "translateY(-6px)";
                  el.style.background = "#fafbfc";
                  const bar = el.querySelector(".cat-accent-bar") as HTMLElement;
                  if (bar) { bar.style.height = "3px"; bar.style.opacity = "1"; }
                  const arrow = el.querySelector(".cat-arrow") as HTMLElement;
                  if (arrow) arrow.style.opacity = "1";
                  const iconWrap = el.querySelector(".cat-icon-wrap") as HTMLElement;
                  if (iconWrap) { iconWrap.style.background = cat.color; iconWrap.style.borderColor = cat.color; }
                  const iconEl = el.querySelector(".cat-icon-svg") as HTMLElement;
                  if (iconEl) iconEl.style.color = "#ffffff";
                  const count = el.querySelector(".cat-count") as HTMLElement;
                  if (count) count.style.color = cat.color;
                }}
                onMouseLeave={function(e) {
                  const el = e.currentTarget;
                  el.style.borderColor = "#e2e6ef";
                  el.style.boxShadow = "0 2px 8px rgba(15,31,61,0.04)";
                  el.style.transform = "translateY(0)";
                  el.style.background = "#ffffff";
                  const bar = el.querySelector(".cat-accent-bar") as HTMLElement;
                  if (bar) { bar.style.height = "3px"; bar.style.opacity = "0.3"; }
                  const arrow = el.querySelector(".cat-arrow") as HTMLElement;
                  if (arrow) arrow.style.opacity = "0";
                  const iconWrap = el.querySelector(".cat-icon-wrap") as HTMLElement;
                  if (iconWrap) { iconWrap.style.background = cat.bg; iconWrap.style.borderColor = cat.border; }
                  const iconEl = el.querySelector(".cat-icon-svg") as HTMLElement;
                  if (iconEl) iconEl.style.color = cat.color;
                  const count = el.querySelector(".cat-count") as HTMLElement;
                  if (count) count.style.color = "#8a97ad";
                }}
              >
                {/* Top accent line */}
                <div
                  className="cat-accent-bar"
                  style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: cat.color, opacity: 0.3, transition: "all 0.3s ease", borderRadius: "16px 16px 0 0" }}
                />

                {/* Icon */}
                <div
                  className="cat-icon-wrap"
                  style={{ width: "48px", height: "48px", borderRadius: "12px", background: cat.bg, border: `1px solid ${cat.border}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px", transition: "all 0.3s ease" }}
                >
                  <Icon className="cat-icon-svg" size={22} style={{ color: cat.color, transition: "color 0.3s ease" }} />
                </div>

                {/* Name */}
                <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "15px", fontWeight: 700, color: "#0f1f3d", marginBottom: "5px", letterSpacing: "-0.02em" }}>
                  {cat.label}
                </div>

                {/* Desc */}
                <div style={{ fontSize: "11px", color: "#8a97ad", marginBottom: "14px", lineHeight: 1.5 }}>
                  {cat.desc}
                </div>

                {/* Count */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <IconUsers size={12} style={{ color: "#8a97ad" }} />
                    <span className="cat-count" style={{ fontSize: "12px", fontWeight: 600, color: "#8a97ad", transition: "color 0.3s ease" }}>
                      {cat.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} pros
                    </span>
                  </div>
                  <div
                    className="cat-arrow"
                    style={{ fontSize: "12px", fontWeight: 700, color: cat.color, opacity: 0, transition: "opacity 0.2s ease", display: "flex", alignItems: "center", gap: "3px" }}
                  >
                    Explore <IconArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0px", marginTop: "32px", background: "#0f1f3d", borderRadius: "16px", overflow: "hidden", border: "1px solid #1a3260" }}
        >
          {[
            { label: "Total Categories", value: "120+", icon: "🗂️", color: "#3b82f6", bg: "rgba(59,130,246,0.08)", desc: "Across all specializations" },
            { label: "Avg. Hourly Rate", value: "$65/hr", icon: "💰", color: "#0a7c4e", bg: "rgba(10,124,78,0.08)", desc: "Competitive market rates" },
            { label: "Projects This Month", value: "12,400+", icon: "📈", color: "#b8922a", bg: "rgba(184,146,42,0.08)", desc: "Active opportunities" },
            { label: "Success Rate", value: "98%", icon: "⭐", color: "#8b5cf6", bg: "rgba(139,92,246,0.08)", desc: "Client satisfaction score" },
          ].map(function(stat, i) {
            return (
              <div
                key={i}
                style={{ padding: "28px 32px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none", transition: "background 0.25s ease", cursor: "default", position: "relative", overflow: "hidden" }}
                onMouseEnter={function(e) { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={function(e) { e.currentTarget.style.background = "transparent"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>
                    {stat.icon}
                  </div>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: stat.color }} />
                </div>
                <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "28px", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "4px" }}>{stat.value}</div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: "3px" }}>{stat.label}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{stat.desc}</div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
