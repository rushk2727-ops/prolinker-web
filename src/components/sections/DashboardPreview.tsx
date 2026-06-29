"use client";
import { useLang } from "@/context/LangContext";
import { motion, useMotionValue, useTransform, useSpring, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  IconTrendingUp, IconBriefcase, IconCash, IconUsers,
  IconArrowUpRight, IconActivity, IconChartBar, IconClock,
  IconShieldCheck, IconBolt,
} from "@tabler/icons-react";

function AnimatedBar({ height, delay, color }: { height: number; delay: number; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: "4px 4px 0 0", position: "relative", height: "80px", display: "flex", alignItems: "flex-end" }}>
      <motion.div
        initial={{ height: "0%" }}
        animate={inView ? { height: `${height}%` } : { height: "0%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ width: "100%", background: color, borderRadius: "4px 4px 0 0", boxShadow: height > 80 ? `0 0 12px ${color}60` : "none" }}
      />
    </div>
  );
}

function CountUpNumber({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 1800, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}


function LiveFeed() {
  const { t } = useLang();
  const FEED_ITEMS = [
    { icon: "check", text: "Marcus T. submitted milestone 2", time: "2m ago", color: "#0a7c4e" },
    { icon: "cash", text: "$4,200 released from escrow", time: "8m ago", color: "#b8922a" },
    { icon: "hire", text: "Priya S. hired for UI redesign", time: "15m ago", color: "#4f46e5" },
    { icon: "star", text: "5-star review from DataStream Inc", time: "22m ago", color: "#f59e0b" },
    { icon: "rocket", text: "New AI match found for your project", time: "31m ago", color: "#0891b2" },
  ];
  const [items, setItems] = useState(FEED_ITEMS);
  const [newItem, setNewItem] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewItem(true);
      setTimeout(() => {
        setItems(prev => {
          const rotated = [...prev];
          rotated.push(rotated.shift()!);
          return rotated;
        });
        setNewItem(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {items.slice(0, 4).map(function(item, i) {
        const iconMap: Record<string, string> = { check: '✓', cash: '$', hire: '✦', star: '★', rocket: '↑' };
        const iconChar = iconMap[item.icon] || item.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px" }}
          >
            <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: item.color + '22', display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "13px", fontWeight: 700, color: item.color }}>{iconChar}</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: "1px" }}>{item.text}</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.time}</div>
            </div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: item.color, flexShrink: 0 }}>{item.time}</div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function DashboardPreview() {
  const { t } = useLang();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [8, -8]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-8, 8]), { stiffness: 100, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  const chartBars = [
    { height: 35, color: "rgba(240,201,107,0.4)" },
    { height: 55, color: "rgba(240,201,107,0.5)" },
    { height: 42, color: "rgba(240,201,107,0.4)" },
    { height: 70, color: "rgba(240,201,107,0.6)" },
    { height: 58, color: "rgba(240,201,107,0.5)" },
    { height: 85, color: "rgba(240,201,107,0.7)" },
    { height: 72, color: "rgba(240,201,107,0.6)" },
    { height: 90, color: "rgba(240,201,107,0.8)" },
    { height: 100, color: "#f0c96b" },
  ];

  return (
    <section style={{ padding: "100px 0", background: "#0f1f3d", position: "relative", overflow: "hidden" }}>

      {/* Background elements */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-200px", right: "-200px", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(184,146,42,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-200px", left: "-200px", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center" }}>

          {/* LEFT — Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(184,146,42,0.1)", border: "1px solid rgba(184,146,42,0.2)", borderRadius: "100px", padding: "5px 14px", marginBottom: "20px" }}>
              <IconActivity size={12} style={{ color: "#f0c96b" }} />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#f0c96b" }}>{t("dashboard.eyebrow")}</span>
            </div>

            <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#ffffff", lineHeight: 1.08, marginBottom: "20px" }}>
              {t("dashboard.headline1")}<br />
              <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("dashboard.headline2")}
              </span>
            </h2>

            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "40px", maxWidth: "420px" }}>
              {t("dashboard.subtext")}
            </p>

            {/* Feature list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
              {[
                { icon: IconActivity, title: t("dashboard.feature1Title"), desc: t("dashboard.feature1Desc") },
                { icon: IconChartBar, title: t("dashboard.feature2Title"), desc: t("dashboard.feature2Desc") },
                { icon: IconShieldCheck, title: t("dashboard.feature3Title"), desc: t("dashboard.feature3Desc") },
                { icon: IconBolt, title: t("dashboard.feature4Title"), desc: t("dashboard.feature4Desc") },
              ].map(function(feat, i) {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "14px 16px", borderRadius: "12px", border: "1px solid transparent", transition: "all 0.25s ease", cursor: "default" }}
                    onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "rgba(255,255,255,0.04)"; el.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "transparent"; el.style.borderColor = "transparent"; }}
                  >
                    <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "rgba(184,146,42,0.1)", border: "1px solid rgba(184,146,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} style={{ color: "#f0c96b" }} />
                    </div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", marginBottom: "3px" }}>{feat.title}</div>
                      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{feat.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

<a
              href="#"
              style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#b8922a", color: "#ffffff", fontSize: "14px", fontWeight: 600, padding: "13px 26px", borderRadius: "11px", textDecoration: "none", boxShadow: "0 4px 20px rgba(184,146,42,0.3)", transition: "all 0.2s" }}
              onMouseEnter={function(e) { const el = e.currentTarget; el.style.background = "#d4a843"; el.style.boxShadow = "0 8px 32px rgba(184,146,42,0.4)"; }}
              onMouseLeave={function(e) { const el = e.currentTarget; el.style.background = "#b8922a"; el.style.boxShadow = "0 4px 20px rgba(184,146,42,0.3)"; }}
            >
              Explore Dashboard <IconArrowUpRight size={15} />
            </a>
          </motion.div>

          {/* RIGHT — 3D Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            >
              {/* Main Dashboard Panel */}
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.4)" }}>

                {/* Title Bar */}
                <div style={{ padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.02)" }}>
                  <div style={{ display: "flex", gap: "5px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57", display: "block" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#febc2e", display: "block" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840", display: "block" }} />
                  </div>
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "4px", padding: "3px 10px", display: "flex", alignItems: "center", gap: "5px" }}>
                    <IconShieldCheck size={9} style={{ color: "#28c840" }} />
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>prolinker.com/dashboard</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#28c840" }} />
                    <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)" }}>{t("ticker.live")}</span>
                  </div>
                </div>

                <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "2px" }}>
                  {[
                    { label: "Active Projects", value: 12, suffix: "", change: "+3 this week", color: "#34d399" },
                    { label: "Spend MTD", value: 8400, prefix: "$", suffix: "", change: "On budget", color: "#f0c96b" },
                    { label: "AI Match Avg", value: 96, suffix: "%", change: "Top tier", color: "#818cf8" },
                  ].map(function(metric, i) {
                    return (
                      <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", padding: "12px" }}>
                        <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "6px" }}>{metric.label}</div>
                        <div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "20px", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "3px" }}>
                          {metric.prefix}<CountUpNumber target={metric.value} suffix={metric.suffix} />
                        </div>
                        <div style={{ fontSize: "9px", color: metric.color, fontWeight: 600 }}>{metric.change}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Chart */}
                <div style={{ margin: "0 16px 10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "1.5px" }}>{t("why.card2Title")}</div>
                    <div style={{ fontSize: "9px", color: "#f0c96b", fontWeight: 600 }}>+24% vs last month</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "80px" }}>
                    {chartBars.map(function(bar, i) {
                      return <AnimatedBar key={i} height={bar.height} delay={i * 0.08} color={bar.color} />;
                    })}
                  </div>
                </div>

                {/* Live Feed */}
                <div style={{ margin: "0 16px 16px" }}>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#34d399" }} />
                    {t("dashboard.liveActivity")}
                  </div>
                  <LiveFeed />
                </div>

              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: "absolute", top: "60px", left: "-28px", background: "#ffffff", borderRadius: "14px", padding: "12px 16px", boxShadow: "0 16px 48px rgba(0,0,0,0.3)", zIndex: 10 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#e6f5ef", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconTrendingUp size={16} style={{ color: "#0a7c4e" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f1f3d", fontFamily: "var(--font-geist-sans)" }}>$2.4B+</div>
                    <div style={{ fontSize: "9px", color: "#8a97ad" }}>Total paid out</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ position: "absolute", bottom: "40px", right: "-28px", background: "#ffffff", borderRadius: "14px", padding: "12px 16px", boxShadow: "0 16px 48px rgba(0,0,0,0.3)", zIndex: 10 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#fdf6e3", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconClock size={16} style={{ color: "#b8922a" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f1f3d", fontFamily: "var(--font-geist-sans)" }}>24h</div>
                    <div style={{ fontSize: "9px", color: "#8a97ad" }}>Avg. first response</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
