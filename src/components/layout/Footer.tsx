"use client";
import { useLang } from "@/context/LangContext";
import { SITE, FOOTER_LINKS } from "@/constants/data";

const socialIcons = ["X", "in", "f", "YT"];
const bottomLinks = ["EUR", "Privacy", "Terms"];

export default function Footer() {
  const { t } = useLang();
  return (
    <footer style={{ background: "#0f1f3d", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container-xl" style={{ paddingTop: "64px", paddingBottom: "32px" }}>

        {/* Top Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
              <span style={{ fontFamily: "var(--font-geist-sans)", fontWeight: 800, fontSize: "20px", letterSpacing: "-0.04em", color: "#ffffff" }}>
                {SITE.name}
              </span>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#b8922a", display: "inline-block" }} />
            </div>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: "280px", marginBottom: "24px" }}>
              The AI-powered professional freelance network. Amsterdam-based. Globally connected since {SITE.founded}.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {socialIcons.map(function(icon, i) {
                return (
                  <a key={i} href="#" style={{ width: "34px", height: "34px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", fontSize: "12px", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={function(e) { const el = e.currentTarget; el.style.borderColor = "#d4a843"; el.style.color = "#f0c96b"; }}
                    onMouseLeave={function(e) { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.1)"; el.style.color = "rgba(255,255,255,0.4)"; }}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h5 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>{t("footer.platform")}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
              {FOOTER_LINKS.Platform.map(function(link, i) {
                return (
                  <li key={i}>
                    <a href={link.href} style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={function(e) { (e.target as HTMLElement).style.color = "#ffffff"; }}
                      onMouseLeave={function(e) { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>{t("footer.company")}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
              {FOOTER_LINKS.Company.map(function(link, i) {
                return (
                  <li key={i}>
                    <a href={link.href} style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={function(e) { (e.target as HTMLElement).style.color = "#ffffff"; }}
                      onMouseLeave={function(e) { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>{t("footer.legal")}</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
              {FOOTER_LINKS.Legal.map(function(link, i) {
                return (
                  <li key={i}>
                    <a href={link.href} style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={function(e) { (e.target as HTMLElement).style.color = "#ffffff"; }}
                      onMouseLeave={function(e) { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "18px", padding: "32px", marginBottom: "40px", background: "rgba(255,255,255,0.02)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <h4 style={{ fontFamily: "var(--font-geist-sans)", color: "#ffffff", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.02em", marginBottom: "4px" }}>
              {t("footer.newsletter")}
            </h4>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{t("footer.newsletterSub")}</p>
          </div>
          <div style={{ display: "flex", gap: "8px", flex: "0 0 auto" }}>
            <input type="email" placeholder={t("footer.emailPlaceholder")} style={{ width: "260px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "12px 16px", fontSize: "13.5px", color: "#ffffff", outline: "none", fontFamily: "inherit" }} />
            <button style={{ background: "#b8922a", color: "#ffffff", fontSize: "13.5px", fontWeight: 600, padding: "12px 20px", borderRadius: "8px", border: "none", cursor: "pointer", whiteSpace: "nowrap", transition: "background 0.2s" }}
              onMouseEnter={function(e) { (e.target as HTMLElement).style.background = "#d4a843"; }}
              onMouseLeave={function(e) { (e.target as HTMLElement).style.background = "#b8922a"; }}
            >
              {t("footer.subscribe")}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
            2012-2026 {SITE.name}. All rights reserved. {SITE.location}.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {bottomLinks.map(function(item, i) {
              return (
                <a key={i} href="#" style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={function(e) { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                  onMouseLeave={function(e) { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.2)"; }}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}
