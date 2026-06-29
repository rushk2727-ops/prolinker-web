"use client";
import { useState, useEffect, useRef } from "react";
import {
  IconTrendingUp, IconBriefcase, IconUserCheck,
  IconStar, IconCash, IconUsers, IconArrowUpRight,
} from "@tabler/icons-react";

const TICKER_ITEMS = [
  { icon: IconCash, text: "Marcus T. completed a project", value: "+$12,400", color: "#0a7c4e", bg: "rgba(10,124,78,0.1)", type: "payment" },
  { icon: IconBriefcase, text: "New project posted - AI Integration", value: "$8k-$15k", color: "#b8922a", bg: "rgba(184,146,42,0.1)", type: "project" },
  { icon: IconUserCheck, text: "Priya S. hired in 48h - UX Design", value: "Amsterdam", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", type: "hire" },
  { icon: IconStar, text: "James L. received a 5-star review", value: "Node.js", color: "#f59e0b", bg: "rgba(245,158,11,0.1)", type: "review" },
  { icon: IconCash, text: "Payment released - E-commerce", value: "+$4,800", color: "#0a7c4e", bg: "rgba(10,124,78,0.1)", type: "payment" },
  { icon: IconBriefcase, text: "New project - Fintech Design System", value: "$20k-$40k", color: "#b8922a", bg: "rgba(184,146,42,0.1)", type: "project" },
  { icon: IconUsers, text: "Sarah K. joined the network", value: "Invited", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", type: "join" },
  { icon: IconTrendingUp, text: "691,649 verified professionals", value: "Online now", color: "#0a7c4e", bg: "rgba(10,124,78,0.1)", type: "stat" },
  { icon: IconCash, text: "Project awarded - React Dashboard", value: "+$9,200", color: "#0a7c4e", bg: "rgba(10,124,78,0.1)", type: "payment" },
  { icon: IconUserCheck, text: "Alex M. hired in 12h - Full Stack", value: "Berlin", color: "#3b82f6", bg: "rgba(59,130,246,0.1)", type: "hire" },
];

export default function LiveTicker() {
  const [time, setTime] = useState("");
  const [blink, setBlink] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 800);
    return () => clearInterval(t);
  }, []);

  const allItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div style={{ background: "#fafbff", borderTop: "2px solid #e2e6ef", borderBottom: "2px solid #e2e6ef", overflow: "hidden", position: "relative", boxShadow: "0 4px 16px rgba(15,31,61,0.04)" }}>

      {/* Top gradient accent line */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, #0f1f3d 0%, #b8922a 25%, #0a7c4e 50%, #3b82f6 75%, #0f1f3d 100%)", backgroundSize: "200% 100%", animation: "gradientShift 4s ease infinite" }} />

      <div style={{ display: "flex", alignItems: "stretch", height: "52px" }}>

        {/* LIVE label */}
        <div style={{ flexShrink: 0, padding: "0 28px", display: "flex", alignItems: "center", gap: "10px", borderRight: "1px solid #e2e6ef", background: "#f8f9fc", minWidth: "120px" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#0a7c4e", opacity: blink ? 1 : 0.3, transition: "opacity 0.4s ease", position: "relative", zIndex: 1 }} />
            <div style={{ position: "absolute", width: "16px", height: "16px", borderRadius: "50%", border: "1.5px solid rgba(10,124,78,0.3)", animation: "pulse-ring 2s ease-out infinite" }} />
          </div>
          <div>
            <div style={{ fontSize: "10px", fontWeight: 800, color: "#0a7c4e", letterSpacing: "0.15em", textTransform: "uppercase", lineHeight: 1 }}>Live</div>
            <div style={{ fontSize: "8px", color: "#8a97ad", fontFamily: "monospace", marginTop: "2px" }}>{time}</div>
          </div>
        </div>

        {/* Scrolling Track */}
        <div
          style={{ flex: 1, overflow: "hidden", position: "relative", cursor: "default" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to right, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />
          {/* Right fade */}
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "60px", background: "linear-gradient(to left, #ffffff, transparent)", zIndex: 2, pointerEvents: "none" }} />

          <div
            ref={trackRef}
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              animation: "ticker 60s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
              whiteSpace: "nowrap",
            }}
          >
            {allItems.map(function(item, i) {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "0 24px", borderRight: "1px solid #f0f0f0", flexShrink: 0 }}
                >
                  <div style={{ width: "22px", height: "22px", borderRadius: "5px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={12} style={{ color: item.color }} />
                  </div>
                  <span style={{ fontSize: "12px", color: "#5a6a85", fontWeight: 500 }}>{item.text}</span>
                  <span style={{ fontSize: "12px", fontWeight: 700, color: item.color, display: "inline-flex", alignItems: "center", gap: "1px" }}>
                    {item.type === "payment" && <IconArrowUpRight size={10} />}
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right stats */}
        <div style={{ flexShrink: 0, padding: "0 16px", display: "flex", alignItems: "center", gap: "16px", borderLeft: "1px solid #e2e6ef", background: "#f8f9fc" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#0a7c4e", display: "flex", alignItems: "center", gap: "2px", justifyContent: "center" }}>
              <IconArrowUpRight size={10} />$2.4B+
            </div>
            <div style={{ fontSize: "8px", color: "#8a97ad", marginTop: "1px" }}>Paid out</div>
          </div>
          <div style={{ width: "1px", height: "20px", background: "#e2e6ef" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#b8922a" }}>691K+</div>
            <div style={{ fontSize: "8px", color: "#8a97ad", marginTop: "1px" }}>Active pros</div>
          </div>
        </div>
      </div>
    </div>
  );
}
