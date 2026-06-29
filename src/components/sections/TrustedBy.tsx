"use client";
import { useLang } from "@/context/LangContext";
import Marquee from "react-fast-marquee";

const ROW1 = [
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "Atlassian", logo: "/logos/atlassian.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Notion", logo: "/logos/notion.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Linear", logo: "/logos/linear.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
];

const ROW2 = [
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "Slack", logo: "/logos/slack.svg" },
  { name: "Airbnb", logo: "/logos/airbnb.svg" },
  { name: "Netflix", logo: "/logos/netflix.svg" },
  { name: "Adobe", logo: "/logos/adobe.svg" },
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
];

function LogoItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 48px",
        padding: "10px 20px",
        borderRadius: "10px",
        transition: "all 0.3s ease",
        cursor: "default",
        minWidth: "80px",
      }}
      onMouseEnter={function(e) {
        const el = e.currentTarget;
        el.style.background = "rgba(15,31,61,0.04)";
        const img = el.querySelector("img") as HTMLImageElement;
        if (img) {
          img.style.filter = "grayscale(0%) opacity(1)";
          img.style.transform = "scale(1.08)";
        }
      }}
      onMouseLeave={function(e) {
        const el = e.currentTarget;
        el.style.background = "transparent";
        const img = el.querySelector("img") as HTMLImageElement;
        if (img) {
          img.style.filter = "grayscale(100%) opacity(0.45)";
          img.style.transform = "scale(1)";
        }
      }}
    >
      <img
        src={logo}
        alt={name}
        style={{
          height: "36px",
          width: "auto",
          maxWidth: "110px",
          objectFit: "contain",
          filter: "grayscale(100%) opacity(0.45)",
          transition: "all 0.3s ease",
          display: "block",
        }}
      />
    </div>
  );
}

export default function TrustedBy() {
  const { t } = useLang();
  return (
    <section style={{
      padding: "80px 0",
      borderTop: "1px solid #e2e6ef",
      borderBottom: "1px solid #e2e6ef",
      background: "#f3f5f9",
      overflow: "hidden",
    }}>

      {/* Label */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <span style={{
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          color: "#8a97ad",
        }}>
          {t("trustedBy.label")}
        </span>
      </div>

      {/* Row 1 — Left */}
      <div style={{ marginBottom: "48px" }}>
        <Marquee
          speed={40}
          gradient={true}
          gradientColor="#f3f5f9"
          gradientWidth={120}
          pauseOnHover={true}
          direction="left"
          loop={0}
          autoFill={true}
        >
          {ROW1.map(function(item, i) {
            return <LogoItem key={i} name={item.name} logo={item.logo} />;
          })}
        </Marquee>
      </div>

      {/* Row 2 — Right */}
      <div>
        <Marquee
          speed={30}
          gradient={true}
          gradientColor="#f3f5f9"
          gradientWidth={120}
          pauseOnHover={true}
          direction="right"
          loop={0}
          autoFill={true}
        >
          {ROW2.map(function(item, i) {
            return <LogoItem key={i} name={item.name} logo={item.logo} />;
          })}
        </Marquee>
      </div>

    </section>
  );
}
