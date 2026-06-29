"use client";
import { useLang } from "@/context/LangContext";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";


export default function HowItWorks() {
  const { t } = useLang();
  const STEPS = [
    {
      step: "01",
      title: t("howItWorks.step1Title"),
      description: t("howItWorks.step1Desc"),
      highlight: t("howItWorks.step1Highlight"),
      content: (
        <div style={{ background: "#0f1f3d", padding: "24px", height: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", borderRadius: "100px", padding: "4px 10px", marginBottom: "14px" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f0c96b" }} /><span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: "#f0c96b" }}>STEP 01</span></div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#f0c96b", letterSpacing: "2px", marginBottom: "12px" }}>PROJECT BRIEF</div>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#ffffff", marginBottom: "12px" }}>Build a SaaS dashboard with React and real-time analytics</div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
            {["React", "TypeScript", "Node.js", "$8k-$15k"].map(function(tag, i) {
              return <span key={i} style={{ background: i === 3 ? "#b8922a" : "rgba(255,255,255,0.08)", color: i === 3 ? "#ffffff" : "rgba(255,255,255,0.7)", fontSize: "10px", fontWeight: 600, padding: "3px 8px", borderRadius: "6px" }}>{tag}</span>;
            })}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flex: 1, padding: "10px", background: "#b8922a", borderRadius: "8px", textAlign: "center" }}>
              <span style={{ fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>Post Project - Free</span>
            </div>
            <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.08)", borderRadius: "8px" }}>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>Private</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "6px", marginTop: "10px" }}>
            {[["2 min", "To post"], ["Free", "Always"], ["Public/Private", "Your choice"]].map(function(item, i) {
              return <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "6px", padding: "8px", textAlign: "center" }}><div style={{ fontSize: "11px", fontWeight: 700, color: "#f0c96b" }}>{item[0]}</div><div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{item[1]}</div></div>;
            })}
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: t("howItWorks.step2Title"),
      description: t("howItWorks.step2Desc"),
      highlight: t("howItWorks.step2Highlight"),
      content: (
        <div style={{ background: "#0f1f3d", padding: "24px", height: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", borderRadius: "100px", padding: "4px 10px", marginBottom: "14px" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f0c96b" }} /><span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: "#f0c96b" }}>STEP 02</span></div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#f0c96b", letterSpacing: "2px", marginBottom: "12px" }}>TOP MATCHES FOUND</div>
          {[{ name: "Marcus T.", role: "Senior React Dev · Amsterdam", score: 98, rate: "$95/hr" }, { name: "Priya S.", role: "Full Stack Engineer · Berlin", score: 95, rate: "$85/hr" }, { name: "James L.", role: "React + Node Expert · London", score: 91, rate: "$110/hr" }].map(function(m, i) {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", marginBottom: "6px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#b8922a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>{m.name[0]}</div>
                <div style={{ flex: 1 }}><div style={{ fontSize: "11px", fontWeight: 600, color: "#fff" }}>{m.name}</div><div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>{m.role}</div></div>
                <div style={{ textAlign: "right" }}><div style={{ fontSize: "12px", fontWeight: 800, color: "#f0c96b" }}>{m.score}%</div><div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>{m.rate}</div></div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      step: "03",
      title: t("howItWorks.step3Title"),
      description: t("howItWorks.step3Desc"),
      highlight: t("howItWorks.step3Highlight"),
      content: (
        <div style={{ background: "#0f1f3d", padding: "24px", height: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", borderRadius: "100px", padding: "4px 10px", marginBottom: "14px" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f0c96b" }} /><span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: "#f0c96b" }}>STEP 03</span></div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#f0c96b", letterSpacing: "2px", marginBottom: "12px" }}>FREELANCER PROFILE</div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#b8922a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 800, color: "#fff" }}>M</div>
            <div><div style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>Marcus T.</div><div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)" }}>Senior React Developer</div></div>
            <div style={{ marginLeft: "auto", background: "rgba(10,124,78,0.2)", border: "1px solid rgba(10,124,78,0.4)", borderRadius: "100px", padding: "4px 10px" }}><span style={{ fontSize: "10px", fontWeight: 700, color: "#34d399" }}>Available</span></div>
          </div>
          <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
            {["React", "TypeScript", "Node.js"].map(function(tag, i) { return <span key={i} style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", fontSize: "10px", padding: "3px 8px", borderRadius: "6px" }}>{tag}</span>; })}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <div style={{ padding: "10px", background: "#0f1f3d", borderRadius: "8px", textAlign: "center" }}><span style={{ fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>Book Interview</span></div>
            <div style={{ padding: "10px", background: "#f3f5f9", borderRadius: "8px", textAlign: "center", border: "1px solid #e2e6ef" }}><span style={{ fontSize: "11px", fontWeight: 600, color: "#0f1f3d" }}>View Portfolio</span></div>
          </div>
        </div>
      ),
    },
    {
      step: "04",
      title: t("howItWorks.step4Title"),
      description: t("howItWorks.step4Desc"),
      highlight: t("howItWorks.step4Highlight"),
      content: (
        <div style={{ background: "#0f1f3d", padding: "24px", height: "100%", boxSizing: "border-box" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.25)", borderRadius: "100px", padding: "4px 10px", marginBottom: "14px" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f0c96b" }} /><span style={{ fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", color: "#f0c96b" }}>STEP 04</span></div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#f0c96b", letterSpacing: "2px", marginBottom: "12px" }}>ESCROW PAYMENT</div>
          {[{ label: "Design & Wireframes", amount: "$2,500", status: "Released" }, { label: "Frontend Development", amount: "$5,000", status: "In Escrow" }, { label: "Final Delivery", amount: "$2,500", status: "Locked" }].map(function(m, i) {
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", marginBottom: "6px" }}>
                <div style={{ flex: 1 }}><div style={{ fontSize: "11px", fontWeight: 600, color: "#fff" }}>{m.label}</div><div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>{m.amount}</div></div>
                <span style={{ fontSize: "10px", fontWeight: 700, padding: "3px 8px", borderRadius: "100px", background: i === 0 ? "rgba(10,124,78,0.2)" : i === 1 ? "rgba(184,146,42,0.2)" : "rgba(255,255,255,0.08)", color: i === 0 ? "#34d399" : i === 1 ? "#f0c96b" : "rgba(255,255,255,0.4)" }}>{m.status}</span>
              </div>
            );
          })}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", padding: "10px", background: "rgba(184,146,42,0.1)", borderRadius: "8px", border: "1px solid rgba(184,146,42,0.2)" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#f0c96b" }}>100% Escrow Protected</span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#f0c96b" }}>$10,000</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section style={{ background: "#ffffff", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, #e2e6ef, transparent)" }} />

      {/* Header */}
      <div className="container-xl" style={{ paddingTop: "100px", paddingBottom: "0px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "16px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#b8922a" }}>{t("howItWorks.eyebrow")}</span>
            <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#0f1f3d", lineHeight: 1.08, marginBottom: "16px" }}>
            From brief to hired,{" "}
            <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("howItWorks.headline2")}
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#5a6a85", maxWidth: "480px", margin: "0 auto", lineHeight: 1.75 }}>
            {t("howItWorks.subtext")}
          </p>
        </motion.div>
      </div>

      {/* Sticky Scroll */}
      <StickyScroll content={STEPS} />

      {/* Bottom CTA */}
      <div className="container-xl" style={{ paddingBottom: "80px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <p style={{ fontSize: "14px", color: "#8a97ad", marginBottom: "20px" }}>{t("howItWorks.joinText")}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
<a
              href="#"
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#0f1f3d", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "13px 26px", borderRadius: "11px", textDecoration: "none", boxShadow: "0 4px 20px rgba(15,31,61,0.2)", transition: "all 0.2s" }}
              onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#b8922a"; }}
              onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#0f1f3d"; }}
            >
              Post a Project - Free <IconArrowRight size={15} />
            </a>
<a
              href="#"
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#ffffff", color: "#0f1f3d", fontSize: "14px", fontWeight: 600, padding: "13px 26px", borderRadius: "11px", textDecoration: "none", border: "1.5px solid #e2e6ef", transition: "all 0.2s" }}
              onMouseEnter={function(e) { const el = e.currentTarget; el.style.borderColor = "#0f1f3d"; }}
              onMouseLeave={function(e) { const el = e.currentTarget; el.style.borderColor = "#e2e6ef"; }}
            >
              {t("hero.cta2")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
