"use client";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import { IconArrowRight, IconSparkles, IconShieldCheck, IconBolt, IconUsers } from "@tabler/icons-react";

export default function CTABanner() {
  const { t } = useLang();
  return (
    <section style={{ padding: "120px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>

      {/* Background elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-200px", left: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-200px", right: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(15,31,61,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Gold horizontal line */}
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(184,146,42,0.15), transparent)", transform: "translateY(-50%)" }} />
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fdf6e3", border: "1px solid rgba(184,146,42,0.25)", borderRadius: "100px", padding: "6px 16px", marginBottom: "24px" }}>
              <IconSparkles size={13} style={{ color: "#f0c96b" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#b8922a" }}>{t("cta.eyebrow")}</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 900, letterSpacing: "-0.045em", color: "#0f1f3d", lineHeight: 1.05, marginBottom: "20px" }}>
              {t("cta.headline1")}<br />
              {t("cta.headline2")}<br />
              <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("cta.headline3")}
              </span>
            </h2>

            <p style={{ fontSize: "1rem", color: "#5a6a85", lineHeight: 1.8, maxWidth: "420px", marginBottom: "40px" }}>
              {t("cta.subtext")}
            </p>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "40px" }}>
              {[
                { icon: IconShieldCheck, text: t("cta.badge1") },
                { icon: IconBolt, text: t("cta.badge2") },
                { icon: IconUsers, text: t("cta.badge3") },
              ].map(function(badge, i) {
                const Icon = badge.icon;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                    <Icon size={14} style={{ color: "#f0c96b", flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "#5a6a85", fontWeight: 500 }}>{badge.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#b8922a", color: "#ffffff", fontSize: "15px", fontWeight: 700, padding: "15px 32px", borderRadius: "12px", textDecoration: "none", boxShadow: "0 8px 32px rgba(184,146,42,0.35)", transition: "all 0.2s" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#d4a843"; el.style.boxShadow = "0 12px 40px rgba(184,146,42,0.45)"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#b8922a"; el.style.boxShadow = "0 8px 32px rgba(184,146,42,0.35)"; }}
              >
                {t("hero.cta1")}
                <IconArrowRight size={16} />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#ffffff", color: "#0f1f3d", fontSize: "15px", fontWeight: 600, padding: "15px 32px", borderRadius: "12px", textDecoration: "none", border: "1.5px solid #e2e6ef", transition: "all 0.2s" }}
                onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#f8f9fc"; el.style.borderColor = "#0f1f3d"; }}
                onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#ffffff"; el.style.borderColor = "#e2e6ef"; }}
              >
                {t("hero.cta2")}
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Large stat */}
            <div style={{ background: "#f8f9fc", border: "1px solid #e2e6ef", borderRadius: "20px", padding: "32px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #b8922a, #f0c96b, transparent)" }} />
              <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "56px", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.05em", lineHeight: 1, marginBottom: "8px" }}>
                <span style={{ background: "linear-gradient(135deg, #b8922a, #f0c96b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>691K+</span>
              </div>
              <div style={{ fontSize: "16px", fontWeight: 600, color: "#5a6a85", marginBottom: "4px" }}>{t("stats.label1")}</div>
              <div style={{ fontSize: "13px", color: "#8a97ad" }}>{t("cta.stat1Sub")}</div>
            </div>

            {/* Two smaller stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { value: "$2.4B+", label: t("cta.stat2Label"), sub: t("cta.stat2Sub"), color: "#34d399" },
                { value: "< 48h", label: t("cta.stat3Label"), sub: t("cta.stat3Sub"), color: "#818cf8" },
              ].map(function(stat, i) {
                return (
                  <div key={i} style={{ background: "#f8f9fc", border: "1px solid #e2e6ef", borderRadius: "16px", padding: "24px", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: stat.color, opacity: 0.5 }} />
                    <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "28px", fontWeight: 900, color: "#0f1f3d", letterSpacing: "-0.04em", marginBottom: "6px" }}>{stat.value}</div>
                    <div style={{ fontSize: "13px", fontWeight: 600, color: "#5a6a85", marginBottom: "3px" }}>{stat.label}</div>
                    <div style={{ fontSize: "11px", color: "#8a97ad" }}>{stat.sub}</div>
                  </div>
                );
              })}
            </div>

            {/* Social proof avatars */}
            <div style={{ background: "#f8f9fc", border: "1px solid #e2e6ef", borderRadius: "16px", padding: "20px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ display: "flex" }}>
                {["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80&auto=format&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format&fit=crop&crop=face"].map(function(src, i) {
                  return (
                    <img key={i} src={src} alt="" style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", border: "2px solid #ffffff", marginLeft: i === 0 ? 0 : "-8px", display: "block" }} />
                  );
                })}
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(184,146,42,0.2)", border: "2px solid #ffffff", marginLeft: "-8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 700, color: "#f0c96b" }}>+</div>
              </div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#0f1f3d" }}>{t("cta.socialProof")}</div>
                <div style={{ fontSize: "11px", color: "#8a97ad", marginTop: "2px" }}>{t("cta.socialProofSub")}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
