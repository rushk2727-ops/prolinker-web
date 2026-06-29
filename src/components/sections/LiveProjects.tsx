"use client";
import { useLang } from "@/context/LangContext";
import { useState, useEffect, useRef } from "react";
import {
  IconArrowRight, IconClock, IconCurrencyDollar,
  IconCircleCheck, IconAlertCircle, IconClock2,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const ALL_PROJECTS = [
  { id: 1, title: "Scalable E-commerce Architecture", tags: ["Node.js", "AWS", "Microservices"], budget: "$15k-$25k", expertise: "Cloud, Node.js, AWS", status: "Active", posted: "Today, 16:58" },
  { id: 2, title: "LLM Integration for Customer Support", tags: ["Python", "OpenAI", "NLP"], budget: "$8k-$12k", expertise: "Python, OpenAI, NLP", status: "Urgent", posted: "Today, 11:26" },
  { id: 3, title: "Creative Strategist — Meta Ads Campaign", tags: ["Meta Ads", "Strategy", "Creative"], budget: "$55-$85/hr", expertise: "Meta, Paid Social", status: "Active", posted: "Yesterday, 19:14" },
  { id: 4, title: "Fintech App Design System", tags: ["Figma", "UI/UX", "Fintech"], budget: "$20k-$40k", expertise: "UI/UX, Figma", status: "On Hold", posted: "26 Jun, 14:35" },
  { id: 5, title: "WordPress Blog & Translation Plugin", tags: ["WordPress", "PHP", "i18n"], budget: "$115-$570", expertise: "WordPress, Translation", status: "Active", posted: "26 Jun, 11:14" },
  { id: 6, title: "React Native Mobile App — HealthTech", tags: ["React Native", "iOS", "Android"], budget: "$30k-$50k", expertise: "Mobile, React Native", status: "Urgent", posted: "Today, 09:42" },
  { id: 7, title: "AI-Powered Data Pipeline Architecture", tags: ["Python", "Spark", "AWS"], budget: "$18k-$28k", expertise: "Data Engineering, AI", status: "Active", posted: "Today, 08:15" },
  { id: 8, title: "Brand Identity & Design System", tags: ["Branding", "Figma", "Illustration"], budget: "$8k-$15k", expertise: "Design, Branding", status: "Active", posted: "Yesterday, 16:30" },
  { id: 9, title: "Kubernetes Infrastructure Setup", tags: ["DevOps", "K8s", "Terraform"], budget: "$12k-$20k", expertise: "DevOps, Cloud", status: "Urgent", posted: "Today, 14:22" },
  { id: 10, title: "Shopify Custom Theme Development", tags: ["Shopify", "Liquid", "JavaScript"], budget: "$5k-$10k", expertise: "E-commerce, Shopify", status: "Active", posted: "Yesterday, 11:45" },
  { id: 11, title: "Machine Learning Model for Fraud Detection", tags: ["Python", "TensorFlow", "ML"], budget: "$25k-$40k", expertise: "AI/ML, Data Science", status: "Active", posted: "Today, 07:30" },
  { id: 12, title: "SaaS Dashboard UI Redesign", tags: ["React", "TypeScript", "Figma"], budget: "$10k-$18k", expertise: "UI/UX, Frontend", status: "On Hold", posted: "25 Jun, 09:00" },
  { id: 13, title: "Blockchain Smart Contract Audit", tags: ["Solidity", "Web3", "Security"], budget: "$15k-$25k", expertise: "Blockchain, Security", status: "Urgent", posted: "Today, 10:05" },
  { id: 14, title: "SEO & Content Strategy Overhaul", tags: ["SEO", "Content", "Analytics"], budget: "$3k-$6k", expertise: "SEO, Marketing", status: "Active", posted: "Yesterday, 14:10" },
  { id: 15, title: "iOS App for Real Estate Platform", tags: ["Swift", "iOS", "CoreData"], budget: "$20k-$35k", expertise: "iOS, Mobile", status: "Active", posted: "Today, 13:47" },
];

const STATUS_CONFIG: Record<string, { color: string; bg: string; border: string; icon: any }> = {
  "Active": { color: "#0a7c4e", bg: "rgba(10,124,78,0.1)", border: "rgba(10,124,78,0.2)", icon: IconCircleCheck },
  "Urgent": { color: "#c0392b", bg: "rgba(192,57,43,0.1)", border: "rgba(192,57,43,0.2)", icon: IconAlertCircle },
  "On Hold": { color: "#b45309", bg: "rgba(180,83,9,0.1)", border: "rgba(180,83,9,0.2)", icon: IconClock2 },
};

function RowContent({ project }: { project: typeof ALL_PROJECTS[0] }) {
  const { t } = useLang();
  const status = STATUS_CONFIG[project.status] || STATUS_CONFIG["Active"];
  const StatusIcon = status.icon;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 120px", padding: "0 24px", alignItems: "center", height: "100%" }}>
      <div>
        <div style={{ fontSize: "13px", fontWeight: 600, color: "#0f1f3d", marginBottom: "4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "280px" }}>{project.title}</div>
        <div style={{ display: "flex", gap: "4px" }}>
          {project.tags.slice(0, 3).map(function(tag, j) {
            return <span key={j} style={{ background: "#f3f5f9", border: "1px solid #e2e6ef", color: "#5a6a85", fontSize: "9px", fontWeight: 600, padding: "1px 6px", borderRadius: "100px" }}>{tag}</span>;
          })}
        </div>
      </div>
      <div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", background: "#e8edf5", color: "#0f1f3d", fontSize: "11px", fontWeight: 700, padding: "4px 8px", borderRadius: "100px", border: "1px solid #c8d0e0" }}>
          <IconCurrencyDollar size={10} />{project.budget.replace("$", "")}
        </span>
      </div>
      <div style={{ fontSize: "11px", color: "#5a6a85", fontWeight: 500 }}>{project.expertise}</div>
      <div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", background: status.bg, color: status.color, fontSize: "10px", fontWeight: 700, padding: "4px 8px", borderRadius: "100px", border: `1px solid ${status.border}` }}>
          <StatusIcon size={10} />{project.status}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "10px", color: "#8a97ad" }}>
        <IconClock size={10} />{project.posted}
      </div>
      <div style={{ textAlign: "right" }}>
        {project.status === "On Hold" ? (
          <span style={{ fontSize: "10px", color: "#8a97ad" }}>{t("projects.unavailable")}</span>
        ) : (
          <button
            style={{ display: "inline-flex", alignItems: "center", gap: "3px", background: "transparent", color: "#0f1f3d", fontSize: "11px", fontWeight: 600, padding: "6px 12px", borderRadius: "7px", border: "1px solid #e2e6ef", cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}
            onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#0f1f3d"; el.style.color = "#ffffff"; el.style.borderColor = "#0f1f3d"; }}
            onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "transparent"; el.style.color = "#0f1f3d"; el.style.borderColor = "#e2e6ef"; }}
          >Apply <IconArrowRight size={10} /></button>
        )}
      </div>
    </div>
  );
}

function AirportRow({ current, next, shouldFlip, flipDelay }: {
  current: typeof ALL_PROJECTS[0];
  next: typeof ALL_PROJECTS[0];
  shouldFlip: boolean;
  flipDelay: number;
}) {
  const { t } = useLang();
  const [phase, setPhase] = useState<"idle" | "flipping-out" | "flipping-in">("idle");
  const [displayed, setDisplayed] = useState(current);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (!shouldFlip) return;
    if (timerRef.current) clearTimeout(timerRef.current);

    // Phase 1: fold out after delay
    timerRef.current = setTimeout(() => {
      setPhase("flipping-out");

      // Phase 2: swap content at halfway point
      setTimeout(() => {
        setDisplayed(next);
        setPhase("flipping-in");

        // Phase 3: done
        setTimeout(() => {
          setPhase("idle");
        }, 200);
      }, 200);
    }, flipDelay);

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [shouldFlip, next, flipDelay]);

  // Sync displayed when not flipping
  useEffect(() => {
    if (!shouldFlip) {
      setDisplayed(current);
      setPhase("idle");
    }
  }, [current, shouldFlip]);

  const getTransform = () => {
    if (phase === "flipping-out") return "rotateX(-90deg)";
    if (phase === "flipping-in") return "rotateX(90deg)";
    return "rotateX(0deg)";
  };

  const getTransition = () => {
    if (phase === "flipping-out") return "transform 0.18s ease-in";
    if (phase === "flipping-in") return "transform 0.18s ease-out";
    return "none";
  };

  return (
    <div style={{
      height: "64px",
      borderBottom: "1px solid #f0f2f7",
      background: "#ffffff",
      perspective: "800px",
      overflow: "hidden",
    }}>
      <div style={{
        height: "100%",
        transform: getTransform(),
        transition: getTransition(),
        transformOrigin: "center center",
        backfaceVisibility: "hidden",
      }}>
        <RowContent project={displayed} />
      </div>
    </div>
  );
}

export default function LiveProjects() {
  const { t } = useLang();
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState(t("projects.filterAll"));
  const [nextPage, setNextPage] = useState(1);
  const [shouldFlip, setShouldFlip] = useState(false);
  const ROWS = 5;

  const filtered = filter === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter(p => p.status === filter);
  const total = Math.ceil(filtered.length / ROWS);
  const currentRows = filtered.slice(page * ROWS, (page + 1) * ROWS);
  const nextRows = filtered.slice(nextPage * ROWS, (nextPage + 1) * ROWS);

  // Pad rows to always have ROWS items
  const padded = (arr: typeof ALL_PROJECTS) => {
    const result = [...arr];
    while (result.length < ROWS) result.push(result[result.length - 1] || ALL_PROJECTS[0]);
    return result;
  };

  const currentPadded = padded(currentRows);
  const nextPadded = padded(nextRows);

  useEffect(() => {
    const t = setInterval(() => {
      const np = (page + 1) % total;
      setNextPage(np);
      setShouldFlip(true);

      // After all rows flipped, update current page
      setTimeout(() => {
        setPage(np);
        setShouldFlip(false);
        setNextPage((np + 1) % total);
      }, ROWS * 150 + 600);
    }, 8000);
    return () => clearInterval(t);
  }, [page, total]);

  useEffect(() => {
    setPage(0);
    setNextPage(1);
    setShouldFlip(false);
  }, [filter]);

  return (
    <section style={{ padding: "100px 0", background: "#f8f9fc", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(15,31,61,0.025) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#b8922a" }}>{t("projects.eyebrow")}</span>
            </div>
            <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#0f1f3d", lineHeight: 1.08 }}>
              {t("projects.headline1")}<br />
              <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{t("projects.headline2")}</span>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(10,124,78,0.08)", border: "1px solid rgba(10,124,78,0.2)", borderRadius: "100px", padding: "6px 14px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#0a7c4e" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#0a7c4e" }}>{t("projects.liveLabel")}</span>
            </div>
            <div style={{ display: "flex", gap: "6px", background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "10px", padding: "4px" }}>
              {[{ val: "All", label: t("projects.filterAll") }, { val: "Active", label: t("projects.filterActive") }, { val: "Urgent", label: t("projects.filterUrgent") }, { val: "On Hold", label: t("projects.filterOnHold") }].map(function(f) {
                return (
                  <button key={f.val} onClick={() => setFilter(f.val)}
                    style={{ padding: "6px 14px", borderRadius: "7px", border: "none", cursor: "pointer", fontSize: "12px", fontWeight: 600, fontFamily: "inherit", transition: "all 0.2s", background: filter === f.val ? "#0f1f3d" : "transparent", color: filter === f.val ? "#ffffff" : "#5a6a85" }}
                  >{f.label}</button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Board */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ background: "#ffffff", border: "1px solid #e2e6ef", borderRadius: "20px", overflow: "hidden", boxShadow: "0 4px 20px rgba(15,31,61,0.06)" }}
        >
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 120px", padding: "12px 24px", borderBottom: "2px solid #e2e6ef", background: "#f8f9fc" }}>
            {[t("projects.colProject"), t("projects.colBudget"), t("projects.colExpertise"), t("projects.colStatus"), t("projects.colPosted"), t("projects.colAction")].map(function(h, i) {
              return <div key={i} style={{ fontSize: "10px", fontWeight: 700, color: "#8a97ad", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: i === 5 ? "right" : "left" }}>{h}</div>;
            })}
          </div>

          {/* Airport Rows */}
          {currentPadded.map(function(project, i) {
            return (
              <AirportRow
                key={i}
                current={project}
                next={nextPadded[i] || project}
                shouldFlip={shouldFlip}
                flipDelay={i * 150}
              />
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
