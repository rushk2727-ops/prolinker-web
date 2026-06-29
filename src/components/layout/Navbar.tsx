"use client";
import { useLang } from "@/context/LangContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, allLangs, langLabel, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = scrolled
    ? {
        width: "100%",
        maxWidth: "1100px",
        height: "64px",
        display: "flex" as const,
        alignItems: "center" as const,
        justifyContent: "space-between" as const,
        padding: "0 32px",
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        borderRadius: "16px",
        borderTop: "1px solid #e2e6ef",
        borderLeft: "1px solid #e2e6ef",
        borderRight: "1px solid #e2e6ef",
        borderBottom: "1px solid #e2e6ef",
        boxShadow: "0 8px 32px rgba(15,31,61,0.12)",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: "all" as const,
      }
    : {
        width: "100%",
        maxWidth: "100%",
        height: "68px",
        display: "flex" as const,
        alignItems: "center" as const,
        justifyContent: "space-between" as const,
        padding: "0 48px",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(20px)",
        borderRadius: "0px",
        borderTop: "1px solid transparent",
        borderLeft: "1px solid transparent",
        borderRight: "1px solid transparent",
        borderBottom: "1px solid #e2e6ef",
        boxShadow: "none",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: "all" as const,
      };

  const wrapStyle = scrolled
    ? {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "12px 24px",
        transition: "padding 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: "none" as const,
      }
    : {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0px",
        transition: "padding 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: "none" as const,
      };

  return (
    <>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={wrapStyle}
      >
        <div style={navStyle}>
          {/* Logo + Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px", flex: 1 }}>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              <span style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.04em", color: "#0f1f3d" }}>
                {SITE.name}
              </span>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#b8922a", display: "inline-block" }} />
            </a>
            <ul style={{ display: "flex", alignItems: "center", gap: "28px", listStyle: "none", margin: "0 auto", padding: 0 }}>
              {NAV_LINKS.map(function(link, i) {
                const navLabels: Record<string, string> = { "Find Talent": t("nav.findTalent"), "Projects": t("nav.projects"), "Categories": t("nav.categories"), "Enterprise": t("nav.enterprise"), "Pricing": t("nav.pricing") };
                return (
                  <li key={i} style={{ listStyle: "none" }}>
                    <a
                      href={link.href}
                      style={{ fontSize: "13.5px", fontWeight: 500, color: "#5a6a85", textDecoration: "none", padding: "7px 16px", borderRadius: "10px", transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)", background: "transparent", display: "block", backdropFilter: "blur(0px)", border: "1px solid transparent", boxShadow: "none" }}
                      onMouseEnter={function(e) { const el = e.currentTarget as HTMLElement; el.style.color = "#b8922a"; el.style.background = "rgba(253,246,227,0.85)"; el.style.backdropFilter = "blur(12px)"; el.style.border = "1px solid rgba(212,168,67,0.25)"; el.style.boxShadow = "0 4px 16px rgba(184,146,42,0.1), 0 0 0 1px rgba(212,168,67,0.1)"; }}
                      onMouseLeave={function(e) { const el = e.currentTarget as HTMLElement; el.style.color = "#5a6a85"; el.style.background = "transparent"; el.style.backdropFilter = "blur(0px)"; el.style.border = "1px solid transparent"; el.style.boxShadow = "none"; }}
                    >
                      {navLabels[link.label] || link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* Language Switcher */}
            <div style={{ position: "relative", display: "inline-block" }} className="lang-switcher">
              <button
                style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 10px", borderRadius: "8px", border: "1px solid #e2e6ef", background: "#f3f5f9", cursor: "pointer", fontSize: "11px", fontWeight: 700, color: "#0f1f3d", fontFamily: "inherit", transition: "all 0.2s" }}
                onMouseEnter={function(e) {
                  const dropdown = e.currentTarget.nextElementSibling as HTMLElement;
                  if (dropdown) dropdown.style.display = "flex";
                }}
              >
                <span style={{ fontSize: "13px" }}>🌐</span>
                {lang === "en" ? "EN" : lang === "nl" ? "NL" : lang === "nl-BE" ? "NL-BE" : "FR"}
                <span style={{ fontSize: "8px", color: "#8a97ad" }}>▼</span>
              </button>
              <div
                style={{ display: "none", flexDirection: "column", position: "absolute", top: "calc(100% + 6px)", right: 0, background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "10px", padding: "4px", boxShadow: "0 8px 32px rgba(15,31,61,0.12)", zIndex: 1000, minWidth: "80px", gap: "2px" }}
                onMouseLeave={function(e) {
                  (e.currentTarget as HTMLElement).style.display = "none";
                }}
              >
                {allLangs.map(function(l) {
                  const labels: Record<string, string> = { en: "🇬🇧 EN", nl: "🇳🇱 NL", "nl-BE": "🇧🇪 NL-BE", fr: "🇫🇷 FR" };
                  return (
                    <button
                      key={l}
                      onClick={() => {
                        setLang(l);
                        const dropdown = document.querySelector(".lang-switcher div") as HTMLElement;
                        if (dropdown) dropdown.style.display = "none";
                      }}
                      style={{ padding: "7px 12px", borderRadius: "7px", border: "none", cursor: "pointer", fontSize: "11px", fontWeight: 600, fontFamily: "inherit", background: lang === l ? "#f3f5f9" : "transparent", color: lang === l ? "#0f1f3d" : "#5a6a85", transition: "all 0.2s", textAlign: "left", whiteSpace: "nowrap" }}
                      onMouseEnter={function(e) { e.currentTarget.style.background = "#f3f5f9"; e.currentTarget.style.color = "#0f1f3d"; }}
                      onMouseLeave={function(e) { e.currentTarget.style.background = lang === l ? "#f3f5f9" : "transparent"; e.currentTarget.style.color = lang === l ? "#0f1f3d" : "#5a6a85"; }}
                    >
                      {labels[l]}
                    </button>
                  );
                })}
              </div>
            </div>

            <a
              href="#"
              style={{ fontSize: "13.5px", fontWeight: 500, color: "#5a6a85", textDecoration: "none", padding: "7px 16px", borderRadius: "10px", border: "1px solid transparent", transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)", background: "transparent" }}
              onMouseEnter={function(e) { const el = e.currentTarget as HTMLElement; el.style.color = "#b8922a"; el.style.background = "rgba(253,246,227,0.85)"; el.style.border = "1px solid rgba(212,168,67,0.25)"; el.style.boxShadow = "0 4px 16px rgba(184,146,42,0.1)"; }}
              onMouseLeave={function(e) { const el = e.currentTarget as HTMLElement; el.style.color = "#5a6a85"; el.style.background = "transparent"; el.style.border = "1px solid transparent"; el.style.boxShadow = "none"; }}
            >
              Sign In
            </a>
            <a
              href="#"
              style={{ background: "#0f1f3d", color: "#ffffff", fontSize: "13.5px", fontWeight: 600, padding: "9px 20px", borderRadius: "10px", textDecoration: "none", boxShadow: "0 2px 8px rgba(15,31,61,0.2)", transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)", border: "1px solid transparent" }}
              onMouseEnter={function(e) { const el = e.currentTarget as HTMLElement; el.style.background = "#b8922a"; el.style.boxShadow = "0 4px 20px rgba(184,146,42,0.4)"; el.style.border = "1px solid rgba(212,168,67,0.3)"; el.style.transform = "translateY(-1px)"; }}
              onMouseLeave={function(e) { const el = e.currentTarget as HTMLElement; el.style.background = "#0f1f3d"; el.style.boxShadow = "0 2px 8px rgba(15,31,61,0.2)"; el.style.border = "1px solid transparent"; el.style.transform = "translateY(0px)"; }}
            >
              Post a Project
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: "68px", left: 0, right: 0, zIndex: 99, background: "#ffffff", borderBottom: "1px solid #e2e6ef", boxShadow: "0 4px 20px rgba(15,31,61,0.09)" }}
          >
            <div className="container-xl" style={{ paddingTop: "24px", paddingBottom: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {NAV_LINKS.map(function(link, i) {
                const navLabels: Record<string, string> = { "Find Talent": t("nav.findTalent"), "Projects": t("nav.projects"), "Categories": t("nav.categories"), "Enterprise": t("nav.enterprise"), "Pricing": t("nav.pricing") };
                return (
                  <a
                    key={i}
                    href={link.href}
                    style={{ fontSize: "15px", fontWeight: 500, color: "#5a6a85", textDecoration: "none", padding: "4px 0" }}
                    onClick={function() { setMobileOpen(false); }}
                  >
                    {navLabels[link.label] || link.label}
                  </a>
                );
              })}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", paddingTop: "16px", borderTop: "1px solid #e2e6ef" }}>
                <a href="#" style={{ fontSize: "14px", fontWeight: 500, color: "#5a6a85", textDecoration: "none" }}>{t('nav.signIn')}</a>
                <a href="#" style={{ background: "#0f1f3d", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "12px 20px", borderRadius: "8px", textDecoration: "none", textAlign: "center" }}>{t('nav.postProject')}</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
