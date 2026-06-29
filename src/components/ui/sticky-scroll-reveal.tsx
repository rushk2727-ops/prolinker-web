"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCard(index);
            }
          });
        },
        {
          root: null,
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      );
      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [content]);

  const accentColors = [
    "#0f1f3d",
    "#b8922a",
    "#0891b2",
    "#0a7c4e",
  ];

  return (
    <div
      className="relative"
      style={{ paddingTop: "40px", paddingBottom: "40px", background: "#ffffff" }}
    >
      <div className="container-xl">
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>

          {/* Left - Scrolling Text */}
          <div style={{ flex: 1 }}>
            {content.map((item, index) => (
              <div
                key={item.title + index}
                ref={(el) => { cardRefs.current[index] = el; }}
                style={{ marginBottom: "80px", paddingBottom: "80px", borderBottom: index < content.length - 1 ? "1px solid #f0f2f7" : "none" }}
              >
                {/* Step badge */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px", background: activeCard === index ? "#fdf6e3" : "#f8f9fc", border: `1px solid ${activeCard === index ? "rgba(184,146,42,0.25)" : "#e2e6ef"}`, borderRadius: "100px", padding: "4px 12px", transition: "all 0.3s ease" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: activeCard === index ? accentColors[index % accentColors.length] : "#c8d0e0", transition: "all 0.3s ease" }} />
                  <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: activeCard === index ? accentColors[index % accentColors.length] : "#8a97ad", transition: "all 0.3s ease" }}>
                    Step 0{index + 1}
                  </span>
                </div>

                <motion.h3
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontFamily: "var(--font-geist-sans)", fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 800, color: "#0f1f3d", letterSpacing: "-0.03em", marginBottom: "14px", lineHeight: 1.1 }}
                >
                  {item.title.split("— ")[1] || item.title}
                </motion.h3>

                <motion.p
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: "15px", color: "#5a6a85", lineHeight: 1.8, maxWidth: "420px" }}
                >
                  {item.description}
                </motion.p>

                {activeCard === index && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    transition={{ duration: 0.4 }}
                    style={{ height: "3px", background: accentColors[index % accentColors.length], borderRadius: "100px", marginTop: "24px" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right - Sticky Visual */}
          <div style={{ width: "480px", flexShrink: 0, position: "sticky", top: "calc(50vh - 200px)" }}>
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: "100%", borderRadius: "24px", overflow: "hidden", boxShadow: "0 32px 80px rgba(15,31,61,0.15)", border: "1px solid rgba(255,255,255,0.08)" }}
              className={cn(contentClassName)}
            >
              {content[activeCard].content ?? null}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
