"use client";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import { FREELANCERS } from "@/constants/data";
import {
  IconShieldCheck, IconStar, IconClock, IconArrowRight,
  IconBrandReact, IconMapPin, IconCurrencyDollar,
} from "@tabler/icons-react";

export default function FeaturedFreelancers() {
  const { t } = useLang();
  return (
    <section style={{ padding: "100px 0", background: "#ffffff", position: "relative", overflow: "hidden" }}>

      {/* Background pattern */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(15,31,61,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

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
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#b8922a" }}>{t("freelancers.eyebrow")}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#0f1f3d", lineHeight: 1.08 }}>
              {t("freelancers.headline1")}<br />
              <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("freelancers.headline2")}
              </span>
            </h2>
          </div>
          
          <a
            href="#"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", fontWeight: 600, color: "#0f1f3d", textDecoration: "none", padding: "10px 18px", borderRadius: "8px", border: "1px solid #e2e6ef", background: "#ffffff", transition: "all 0.2s", boxShadow: "0 2px 8px rgba(15,31,61,0.06)" }}
            onMouseEnter={function(e) { const el = e.currentTarget; el.style.borderColor = "#0f1f3d"; el.style.boxShadow = "0 4px 16px rgba(15,31,61,0.12)"; }}
            onMouseLeave={function(e) { const el = e.currentTarget; el.style.borderColor = "#e2e6ef"; el.style.boxShadow = "0 2px 8px rgba(15,31,61,0.06)"; }}
          >
            View all professionals <IconArrowRight size={14} />
          </a>
        </motion.div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "20px" }}>
          {FREELANCERS.map(function(freelancer, i) {
            return (
              <motion.div
                key={freelancer.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{ background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,31,61,0.06)", transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)", cursor: "pointer", position: "relative" }}
                onMouseEnter={function(e) {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 20px 60px rgba(15,31,61,0.14)";
                  el.style.borderColor = "#c8d0e0";
                  el.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={function(e) {
                  const el = e.currentTarget;
                  el.style.boxShadow = "0 4px 20px rgba(15,31,61,0.06)";
                  el.style.borderColor = "#e2e6ef";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Card Top — Navy Banner */}
                <div style={{ height: "72px", background: "linear-gradient(135deg, #0f1f3d 0%, #1a3260 100%)", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 50%, rgba(184,146,42,0.15), transparent 60%)" }} />
                  {/* AI Match Badge */}
                  <div style={{ position: "absolute", top: "12px", right: "12px", display: "flex", alignItems: "center", gap: "5px", background: "rgba(184,146,42,0.15)", border: "1px solid rgba(184,146,42,0.3)", borderRadius: "100px", padding: "4px 10px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#f0c96b" }} />
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "#f0c96b" }}>{freelancer.aiMatch}% AI Match</span>
                  </div>
                  {/* Available badge */}
                  {freelancer.available && (
                    <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", alignItems: "center", gap: "4px", background: "rgba(10,124,78,0.2)", border: "1px solid rgba(10,124,78,0.3)", borderRadius: "100px", padding: "3px 8px" }}>
                      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#34d399" }} />
                      <span style={{ fontSize: "9px", fontWeight: 700, color: "#34d399" }}>{t("freelancers.available")}</span>
                    </div>
                  )}
                </div>

                {/* Avatar */}
                <div style={{ padding: "0 24px", marginTop: "-32px", position: "relative", zIndex: 1 }}>
                  <div style={{ position: "relative", display: "inline-block" }}>
                    <img
                      src={freelancer.image}
                      alt={freelancer.name}
                      style={{ width: "64px", height: "64px", borderRadius: "50%", objectFit: "cover", border: "3px solid #ffffff", boxShadow: "0 4px 12px rgba(15,31,61,0.15)", display: "block" }}
                      onError={function(e) { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + freelancer.name + "&background=e8edf5&color=0f1f3d&size=200"; }}
                    />
                    {freelancer.verified && (
                      <div style={{ position: "absolute", bottom: "2px", right: "2px", width: "18px", height: "18px", borderRadius: "50%", background: "#0f1f3d", border: "2px solid #ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <IconShieldCheck size={10} style={{ color: "#f0c96b" }} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "12px 24px 24px" }}>

                  {/* Name + Role */}
                  <div style={{ marginBottom: "12px" }}>
                    <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "17px", fontWeight: 700, color: "#0f1f3d", letterSpacing: "-0.02em", marginBottom: "3px" }}>{freelancer.name}</h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#5a6a85", fontSize: "13px" }}>
                      <IconMapPin size={12} style={{ color: "#8a97ad", flexShrink: 0 }} />
                      {freelancer.role} · {freelancer.location}
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "16px" }}>
                    {freelancer.tags.slice(0, 4).map(function(tag, j) {
                      return (
                        <span key={j} style={{ background: "#f3f5f9", border: "1px solid #e2e6ef", color: "#5a6a85", fontSize: "11px", fontWeight: 600, padding: "3px 9px", borderRadius: "100px" }}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Divider */}
                  <div style={{ height: "1px", background: "#f0f2f7", marginBottom: "16px" }} />

                  {/* Stats Row */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <IconCurrencyDollar size={14} style={{ color: "#b8922a" }} />
                      <span style={{ fontFamily: "var(--font-geist-sans)", fontSize: "18px", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em" }}>${freelancer.rate}</span>
                      <span style={{ fontSize: "12px", color: "#8a97ad" }}>/hr</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <IconStar size={13} style={{ color: "#f59e0b" }} />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f1f3d" }}>{freelancer.rating}</span>
                      <span style={{ fontSize: "12px", color: "#8a97ad" }}>({freelancer.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "16px", padding: "8px 12px", background: "#f8f9fc", borderRadius: "8px", border: "1px solid #e2e6ef" }}>
                    <IconClock size={12} style={{ color: "#8a97ad", flexShrink: 0 }} />
                    <span style={{ fontSize: "11px", color: "#5a6a85", fontWeight: 500 }}>Responds within <strong style={{ color: "#0f1f3d" }}>2 hours</strong> · {freelancer.reviews} projects completed</span>
                  </div>

                  {/* CTA Button */}
                  <button
                    style={{ width: "100%", padding: "12px", borderRadius: "10px", background: "#0f1f3d", color: "#ffffff", fontSize: "13px", fontWeight: 600, border: "none", cursor: "pointer", transition: "all 0.2s ease", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                    onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#b8922a"; el.style.boxShadow = "0 4px 16px rgba(184,146,42,0.3)"; }}
                    onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#0f1f3d"; el.style.boxShadow = "none"; }}
                  >
                    Book Interview <IconArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Join Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ background: "linear-gradient(135deg, #0f1f3d 0%, #1a3260 100%)", borderRadius: "20px", padding: "40px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", position: "relative", overflow: "hidden", boxShadow: "0 8px 32px rgba(15,31,61,0.2)" }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 90% 50%, rgba(184,146,42,0.1), transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#f0c96b", marginBottom: "10px" }}>Invite-Only Network</div>
            <h3 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "22px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "8px" }}>{t("freelancers.joinTitle")}</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", maxWidth: "480px", lineHeight: 1.65 }}>Apply to join our exclusive network of enterprise-ready professionals. Earn more, work with better clients, and grow your passive income through referrals.</p>
          </div>
          <button
            style={{ flexShrink: 0, padding: "14px 28px", borderRadius: "12px", border: "1.5px solid rgba(184,146,42,0.4)", background: "rgba(184,146,42,0.1)", color: "#f0c96b", fontSize: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "7px", position: "relative", zIndex: 1 }}
            onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#b8922a"; el.style.color = "#ffffff"; el.style.borderColor = "#b8922a"; }}
            onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "rgba(184,146,42,0.1)"; el.style.color = "#f0c96b"; el.style.borderColor = "rgba(184,146,42,0.4)"; }}
          >
            Apply to Join Network <IconArrowRight size={15} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
