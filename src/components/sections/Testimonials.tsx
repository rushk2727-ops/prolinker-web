"use client";
import { useLang } from "@/context/LangContext";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { IconStar, IconQuote } from "@tabler/icons-react";

const ALL_TESTIMONIALS = [
  {
    id: 1,
    quote: "ProLinker AI matched us with a React developer in under a minute. We hired within 48 hours and shipped on time. Quality was exceptional — far above Upwork.",
    name: "Laura M.",
    role: "CTO, FinFlow Technologies",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "FinFlow",
  },
  {
    id: 2,
    quote: "The invite-only model is a genuine differentiator. Every professional I have worked with has been outstanding. Zero time wasted on bad profiles.",
    name: "David K.",
    role: "Founder, BuildScale Agency",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "BuildScale",
  },
  {
    id: 3,
    quote: "I earned over 800 euros in passive income this quarter just from my network. Private project mode means competitors never see what we are building.",
    name: "Ananya R.",
    role: "Senior UX Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "Freelancer",
  },
  {
    id: 4,
    quote: "We scaled from 2 to 14 engineers in 3 weeks using ProLinker. The AI matching saved us hundreds of hours of screening time.",
    name: "Marcus B.",
    role: "VP Engineering, ScaleAI",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "ScaleAI",
  },
  {
    id: 5,
    quote: "Best freelancing platform I have used in 10 years. The escrow system is rock solid and the talent quality is consistently top tier.",
    name: "Sarah L.",
    role: "Head of Product, Notion",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "Notion",
  },
  {
    id: 6,
    quote: "ProLinker helped us find a world class data engineer in 24 hours. The verified credentials and portfolio quality blew us away.",
    name: "James T.",
    role: "CTO, DataStream Inc",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "DataStream",
  },
  {
    id: 7,
    quote: "The network referral model is genius. I invited 6 colleagues and now earn passively every month. No other platform even comes close.",
    name: "Priya S.",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "Freelancer",
  },
  {
    id: 8,
    quote: "Switched from Upwork 6 months ago and never looked back. The quality of freelancers on ProLinker is in a completely different league.",
    name: "Alex W.",
    role: "CEO, TechVenture Labs",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "TechVenture",
  },
  {
    id: 9,
    quote: "Our enterprise procurement team loves ProLinker. Compliance is built in, contracts are automated, and the talent is always verified.",
    name: "Michelle K.",
    role: "Chief Procurement Officer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "GlobalCorp",
  },
  {
    id: 10,
    quote: "I posted a project at 9am and had my perfect matched freelancer on a call by 11am. The AI is genuinely impressive.",
    name: "Ryan O.",
    role: "Product Manager, Stripe",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
    company: "Stripe",
  },
];

const ROW1 = ALL_TESTIMONIALS.slice(0, 5);
const ROW2 = ALL_TESTIMONIALS.slice(5, 10);

function TestimonialCard({ t }: { t: typeof ALL_TESTIMONIALS[0] }) {
  return (
    <div
      style={{
        minWidth: "320px",
        maxWidth: "320px",
        background: "#ffffff",
        border: "1px solid #e2e6ef",
        borderRadius: "16px",
        padding: "24px",
        margin: "0 10px",
        boxShadow: "0 2px 12px rgba(15,31,61,0.06)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={function(e) {
        const el = e.currentTarget;
        el.style.boxShadow = "0 12px 40px rgba(15,31,61,0.12)";
        el.style.borderColor = "#c8d0e0";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={function(e) {
        const el = e.currentTarget;
        el.style.boxShadow = "0 2px 12px rgba(15,31,61,0.06)";
        el.style.borderColor = "#e2e6ef";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Top gold accent */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #b8922a, #f0c96b, transparent)" }} />

      {/* Quote watermark */}
      <div style={{ position: "absolute", bottom: "16px", right: "16px", opacity: 0.04 }}>
        <IconQuote size={48} style={{ color: "#0f1f3d" }} />
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: "2px", marginBottom: "14px" }}>
        {[...Array(t.rating)].map(function(_, i) {
          return <IconStar key={i} size={13} style={{ color: "#f59e0b", fill: "#f59e0b" }} />;
        })}
      </div>

      {/* Quote */}
      <p style={{ fontSize: "13px", color: "#0f1f3d", lineHeight: 1.75, marginBottom: "20px", minHeight: "90px", position: "relative", zIndex: 1 }}>
        "{t.quote}"
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: "#f0f2f7", marginBottom: "16px" }} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={t.image}
          alt={t.name}
          style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover", border: "2px solid #e2e6ef", flexShrink: 0 }}
          onError={function(e) {
            const img = e.target as HTMLImageElement;
            img.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(t.name) + "&background=e8edf5&color=0f1f3d&size=100";
          }}
        />
        <div>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#0f1f3d" }}>{t.name}</div>
          <div style={{ fontSize: "11px", color: "#8a97ad" }}>{t.role}</div>
        </div>
        <div style={{ marginLeft: "auto", background: "#f3f5f9", border: "1px solid #e2e6ef", borderRadius: "6px", padding: "3px 8px" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, color: "#5a6a85" }}>{t.company}</span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLang();
  return (
    <section style={{ padding: "120px 0 80px", background: "#0f1f3d", position: "relative", overflow: "hidden" }}>

      {/* Background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-100px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "400px", background: "radial-gradient(ellipse, rgba(184,146,42,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", color: "#f0c96b" }}>{t("testimonials.eyebrow")}</span>
            <div style={{ width: "20px", height: "1.5px", background: "#b8922a" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(2rem, 3.5vw, 2.9rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#ffffff", lineHeight: 1.08, marginBottom: "16px" }}>
            {t("testimonials.headline1")}<br />
            <span style={{ background: "linear-gradient(135deg, #b8922a 0%, #f0c96b 50%, #d4a843 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("testimonials.headline2")}
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "#5a6a85", maxWidth: "460px", margin: "0 auto", lineHeight: 1.75 }}>
            {t("testimonials.subtext")}
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div style={{ position: "relative" }}>

        {/* Row 1 - Left */}
        <div style={{ marginBottom: "16px" }}>
          <Marquee speed={50} gradient={true} gradientColor="#0f1f3d" gradientWidth={100} pauseOnHover={true} direction="left" loop={0} autoFill={true}>
            {ROW1.map(function(t) {
              return <TestimonialCard key={t.id} t={t} />;
            })}
          </Marquee>
        </div>

        {/* Row 2 - Right */}
        <div style={{ marginBottom: "0" }}>
          <Marquee speed={35} gradient={true} gradientColor="#0f1f3d" gradientWidth={100} pauseOnHover={true} direction="right" loop={0} autoFill={true}>
            {ROW2.map(function(t) {
              return <TestimonialCard key={t.id} t={t} />;
            })}
          </Marquee>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent, #0f1f3d)", pointerEvents: "none" }} />
      </div>

      {/* Bottom Stats Bar */}
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: "#ffffff", borderRadius: "20px", padding: "28px 48px", border: "1px solid #e2e6ef", boxShadow: "0 4px 20px rgba(15,31,61,0.08)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", marginTop: "40px", marginBottom: "0", position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(184,146,42,0.08), transparent 50%)", pointerEvents: "none" }} />
          {[
            { value: t("testimonials.stat1Value") || "10,000+", label: t("testimonials.stat1Label"), sub: t("testimonials.stat1Sub") },
            { value: "4.9/5", label: t("testimonials.stat2Label"), sub: t("testimonials.stat2Sub") },
            { value: "98%", label: t("testimonials.stat3Label"), sub: t("testimonials.stat3Sub") },
            { value: "$2.4B+", label: t("testimonials.stat4Label"), sub: t("testimonials.stat4Sub") },
          ].map(function(stat, i) {
            return (
              <div key={i} style={{ padding: "0 24px", borderRight: i < 3 ? "1px solid #e2e6ef" : "none", position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}><div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#b8922a", flexShrink: 0 }} /><div style={{ fontFamily: "var(--font-geist-sans)", fontSize: "22px", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em" }}>{stat.value}</div></div>
                <div style={{ fontSize: "12px", fontWeight: 600, color: "#5a6a85", marginBottom: "2px" }}>{stat.label}</div>
                <div style={{ fontSize: "10px", color: "#8a97ad" }}>{stat.sub}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

    </section>
  );
}
