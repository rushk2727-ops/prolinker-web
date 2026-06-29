"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HERO } from "@/constants/data";
import { useLang } from "@/context/LangContext";
import {
  IconBrandReact, IconBrandPython, IconPalette, IconCloud,
  IconBrain, IconChartBar, IconArrowRight, IconSearch,
  IconSparkles, IconShieldCheck, IconBolt, IconUsers,
} from "@tabler/icons-react";

const TYPING_TEXTS = [
  "Find a React Developer...",
  "Looking for a UI/UX Designer?",
  "Need a Cloud Architect?",
  "Hire an AI/ML Engineer...",
  "Find a DevOps Expert...",
  "Looking for a Copywriter?",
];

const TAG_ICONS: Record<string, any> = {
  "Python": IconBrandPython,
  "React": IconBrandReact,
  "UI Design": IconPalette,
  "AWS": IconCloud,
  "AI / ML": IconBrain,
  "Data Engineering": IconChartBar,
};

function useTypingEffect() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = TYPING_TEXTS[index];
    if (isPaused) {
      const t = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 1400);
      return () => clearTimeout(t);
    }
    if (!isDeleting && displayed === current) { setIsPaused(true); return; }
    if (isDeleting && displayed === "") { setIsDeleting(false); setIndex((p) => (p + 1) % TYPING_TEXTS.length); return; }
    const t = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, isDeleting ? 30 : 60);
    return () => clearTimeout(t);
  }, [displayed, index, isDeleting, isPaused]);

  return displayed;
}


function AIPanel() {
  const [scanDone, setScanDone] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    const t = setTimeout(() => setScanDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [5, -5]), { stiffness: 150, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-5, 5]), { stiffness: 150, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  const freelancers = [
    { name: "Marcus T.", role: "Senior React Dev · Amsterdam", rate: "$95/hr", match: 98, matchColor: "#0a7c4e", matchBg: "#e6f5ef", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face" },
    { name: "Priya S.", role: "Full Stack Engineer · Berlin", rate: "$85/hr", match: 95, matchColor: "#0f1f3d", matchBg: "#e8edf5", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&crop=face" },
    { name: "James L.", role: "React + Node Expert · London", rate: "$110/hr", match: 91, matchColor: "#b8922a", matchBg: "#fdf6e3", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80&auto=format&fit=crop&crop=face" },
  ];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000, position: "relative" }}
    >
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        style={{ background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "20px", boxShadow: "0 32px 80px rgba(15,31,61,0.14), 0 8px 24px rgba(15,31,61,0.08)", overflow: "hidden" }}
      >
        <div style={{ background: "#0f1f3d", padding: "11px 16px", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ display: "flex", gap: "5px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57", display: "block" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e", display: "block" }} />
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840", display: "block" }} />
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.08)", borderRadius: "5px", padding: "4px 10px", display: "flex", alignItems: "center", gap: "5px" }}>
            <IconShieldCheck size={10} style={{ color: "#28c840", flexShrink: 0 }} />
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>prolinker.com/ai-match</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#28c840", display: "block" }} />
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)" }}>AI Active</span>
          </div>
        </div>

        <div style={{ padding: "16px" }}>
          <div style={{ background: "#f8f9fc", border: "1px solid #e2e6ef", borderRadius: "10px", padding: "12px 14px", marginBottom: "12px" }}>
            <div style={{ fontSize: "9px", fontWeight: 700, color: "#8a97ad", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "5px" }}>Project Brief</div>
            <div style={{ fontSize: "12px", color: "#0f1f3d", fontWeight: 600, marginBottom: "8px", lineHeight: 1.4 }}>Build a SaaS dashboard with React and real-time data visualization</div>
            <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
              {["React", "TypeScript", "Node.js"].map(function(tag, i) {
                return <span key={i} style={{ background: "#e8edf5", color: "#0f1f3d", fontSize: "9px", fontWeight: 600, padding: "2px 7px", borderRadius: "100px" }}>{tag}</span>;
              })}
              <span style={{ background: "#fdf6e3", color: "#b8922a", fontSize: "9px", fontWeight: 600, padding: "2px 7px", borderRadius: "100px" }}>$8k-$15k</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: scanDone ? "#e6f5ef" : "#fdf6e3", border: "1px solid " + (scanDone ? "rgba(10,124,78,0.2)" : "rgba(212,168,67,0.2)"), borderRadius: "8px", padding: "8px 12px", marginBottom: "12px", transition: "all 0.5s ease" }}>
            <IconSparkles size={12} style={{ color: scanDone ? "#0a7c4e" : "#b8922a", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "10px", fontWeight: 600, color: scanDone ? "#0a7c4e" : "#b8922a", marginBottom: "4px" }}>
                {scanDone ? "Analysis complete - 3 perfect matches found" : "AI analysing 691,649 profiles..."}
              </div>
              <div style={{ width: "100%", background: "rgba(0,0,0,0.06)", borderRadius: "100px", height: "3px", overflow: "hidden" }}>
                <div style={{ height: "3px", borderRadius: "100px", background: scanDone ? "#0a7c4e" : "linear-gradient(90deg, #b8922a, #f0c96b)", width: scanDone ? "100%" : "0%", transition: "width 2s ease-out" }} />
              </div>
            </div>
            <span style={{ fontSize: "9px", fontWeight: 700, color: scanDone ? "#0a7c4e" : "#b8922a", flexShrink: 0 }}>1.2s</span>
          </div>

          <div style={{ fontSize: "9px", fontWeight: 700, color: "#8a97ad", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px" }}>Top Matches Found</div>

          {freelancers.map(function(f, i) {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "8px", border: "1px solid #e2e6ef", background: "#ffffff", marginBottom: "6px", cursor: "pointer" }}
                whileHover={{ borderColor: "#0f1f3d", x: 2 }}
              >
                <img src={f.img} alt={f.name} style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover", flexShrink: 0, border: "1.5px solid #e2e6ef" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#0f1f3d" }}>{f.name}</div>
                  <div style={{ fontSize: "9px", color: "#8a97ad", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.role}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ background: f.matchBg, color: f.matchColor, fontSize: "10px", fontWeight: 700, padding: "2px 7px", borderRadius: "100px" }}>{f.match}%</div>
                  <div style={{ fontSize: "9px", color: "#8a97ad", marginTop: "2px" }}>{f.rate}</div>
                </div>
              </motion.div>
            );
          })}

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid #e2e6ef" }}>
            <span style={{ fontSize: "9px", color: "#8a97ad" }}>3 matches · 691,649 profiles scanned</span>
            <button style={{ display: "flex", alignItems: "center", gap: "3px", background: "#0f1f3d", color: "#ffffff", fontSize: "10px", fontWeight: 600, padding: "5px 12px", borderRadius: "5px", border: "none", cursor: "pointer" }}>
              View All <IconArrowRight size={10} />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: "-16px", left: "-20px", background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "12px", padding: "10px 14px", boxShadow: "0 8px 32px rgba(15,31,61,0.12)", zIndex: 10, minWidth: "140px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#e6f5ef", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconBolt size={14} style={{ color: "#0a7c4e" }} />
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#0f1f3d" }}>Hired in 48h</div>
            <div style={{ fontSize: "9px", color: "#8a97ad" }}>Avg. time to hire</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: "-16px", right: "-20px", background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "12px", padding: "10px 14px", boxShadow: "0 8px 32px rgba(15,31,61,0.12)", zIndex: 10, minWidth: "140px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#fdf6e3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <IconUsers size={14} style={{ color: "#b8922a" }} />
          </div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#0f1f3d" }}>691K+ Pros</div>
            <div style={{ fontSize: "9px", color: "#8a97ad" }}>Verified network</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const typingText = useTypingEffect();
  const { t } = useLang();

  return (
    <>
      <section style={{ paddingTop: "68px", display: "flex", alignItems: "center", background: "#ffffff", position: "relative", overflow: "hidden" }}>

        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-200px", right: "-150px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,237,245,0.9) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "-150px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(253,246,227,0.7) 0%, transparent 70%)" }} />
        </div>

        <div className="container-xl" style={{ width: "100%", position: "relative", zIndex: 1, paddingTop: "36px", paddingBottom: "36px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "48px", alignItems: "center" }}>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fdf6e3", border: "1px solid rgba(212,168,67,0.3)", borderRadius: "100px", padding: "6px 14px", marginBottom: "20px", width: "fit-content" }}
              >
                <IconSparkles size={12} style={{ color: "#b8922a" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#b8922a" }}>AI-Powered · Invite-Only Network</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2.8rem, 4.5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.045em", color: "#0f1f3d", marginBottom: "16px" }}
              >
                {t("hero.headline1")}
                <br />
                <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {t("hero.headline2")}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                style={{ fontSize: "1rem", color: "#5a6a85", lineHeight: 1.75, maxWidth: "420px", marginBottom: "20px" }}
              >
                {t("hero.subtext")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                style={{ display: "flex", alignItems: "center", background: "#ffffff", border: "1.5px solid #e2e6ef", borderRadius: "12px", padding: "6px 6px 6px 14px", marginBottom: "10px", maxWidth: "460px", boxShadow: "0 4px 20px rgba(15,31,61,0.07)" }}
              >
                <IconSearch size={15} style={{ color: "#8a97ad", flexShrink: 0, marginRight: "8px" }} />
                <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: "2px", fontSize: "13px", color: "#8a97ad", height: "38px" }}>
                  <span style={{ color: "#0f1f3d" }}>{typingText}</span>
                  <span style={{ width: "2px", height: "15px", background: "#b8922a", display: "inline-block", animation: "blink 1s step-end infinite", flexShrink: 0 }} />
                </div>
                <button
                  style={{ flexShrink: 0, background: "#0f1f3d", color: "#ffffff", fontSize: "13px", fontWeight: 600, padding: "9px 18px", borderRadius: "9px", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px", transition: "all 0.2s" }}
                  onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#b8922a"; }}
                  onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#0f1f3d"; }}
                >
                  Search <IconArrowRight size={13} />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}
              >
                {HERO.tags.map(function(tag, i) {
                  const Icon = TAG_ICONS[tag];
                  return (
                    <span
                      key={i}
                      style={{ display: "inline-flex", alignItems: "center", gap: "5px", background: "#f3f5f9", border: "1px solid #e2e6ef", color: "#5a6a85", fontSize: "12px", fontWeight: 500, padding: "5px 11px", borderRadius: "100px", cursor: "pointer", transition: "all 0.2s ease" }}
                      onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#e8edf5"; el.style.color = "#0f1f3d"; el.style.borderColor = "#b8c4da"; }}
                      onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#f3f5f9"; el.style.color = "#5a6a85"; el.style.borderColor = "#e2e6ef"; }}
                    >
                      {Icon && <Icon size={12} />}
                      {tag}
                    </span>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px", flexWrap: "wrap" }}
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#0f1f3d", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "13px 26px", borderRadius: "11px", textDecoration: "none", boxShadow: "0 4px 20px rgba(15,31,61,0.25)" }}
                  onMouseEnter={function(e) { e.currentTarget.style.background = "#b8922a"; }}
                  onMouseLeave={function(e) { e.currentTarget.style.background = "#0f1f3d"; }}
                >
                  {t("hero.cta1")}
                  <IconArrowRight size={15} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#ffffff", color: "#0f1f3d", fontSize: "14px", fontWeight: 600, padding: "13px 26px", borderRadius: "11px", textDecoration: "none", border: "1.5px solid #e2e6ef", transition: "all 0.2s" }}
                  onMouseEnter={function(e) { const el = e.currentTarget; el.style.borderColor = "#0f1f3d"; el.style.background = "#f8f9fc"; }}
                  onMouseLeave={function(e) { const el = e.currentTarget; el.style.borderColor = "#e2e6ef"; el.style.background = "#ffffff"; }}
                >
                  {t("hero.cta2")}
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap", padding: "16px 20px", background: "#f8f9fc", borderRadius: "12px", border: "1px solid #e2e6ef" }}
              >
                {[
                  { value: "691K+", label: "Verified Pros" },
                  { value: "467K+", label: "Projects Done" },
                  { value: "98%", label: "Satisfaction" },
                  { value: "24h", label: "First Response" },
                ].map(function(stat, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                      {i > 0 && <div style={{ width: "1px", height: "24px", background: "#e2e6ef", flexShrink: 0, marginRight: "16px" }} />}
                      <div style={{ paddingRight: "16px" }}>
                        <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "1.25rem", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em", lineHeight: 1 }}>{stat.value}</div>
                        <div style={{ fontSize: "10px", color: "#8a97ad", marginTop: "3px", whiteSpace: "nowrap" }}>{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <div style={{ position: "relative", padding: "0px 40px 0px 0px" }}>
              <AIPanel />
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
