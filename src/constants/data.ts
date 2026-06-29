// ─────────────────────────────────────────
// PROLINKER — CENTRAL DATA STORE
// ─────────────────────────────────────────

export const SITE = {
  name: "ProLinker",
  tagline: "The Professional Freelance Network",
  description:
    "AI-powered matching. Invite-only network. Enterprise-grade trust.",
  location: "Keizersgracht 241, 1016 EA Amsterdam",
  founded: "2012",
  email: "hello@prolinker.com",
};

// ─────────────────────────────────────────
// NAV
// ─────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Find Talent", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Categories", href: "#" },
  { label: "Enterprise", href: "#" },
  { label: "Pricing", href: "#" },
];

// ─────────────────────────────────────────
// HERO
// ─────────────────────────────────────────
export const HERO = {
  badge: "AI-Powered · Invite-Only Network",
  headline: ["Scale your vision with", "world-class", "professional talent."],
  goldWord: "professional",
  subheading:
    "The enterprise freelance network for elite developers, designers, and specialists. Connect with verified experts matched instantly by AI.",
  searchPlaceholder:
    "Search 'React Developer', 'UI Designer', 'Cloud Architect'…",
  tags: ["Python", "React", "UI Design", "AWS", "AI / ML", "Data Engineering"],
  ctas: {
    primary: "Post a Project — Free",
    secondary: "Browse Freelancers",
  },
  stats: [
    { value: 691649, suffix: "+", label: "Verified Freelancers" },
    { value: 467760, suffix: "+", label: "Projects Completed" },
    { value: 98, suffix: "%", label: "Satisfaction Rate" },
    { value: 24, prefix: "<", suffix: "h", label: "First Response" },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&auto=format&fit=crop",
    alt: "Professional team working in a modern office",
  },
  floatingCards: [
    {
      id: "match",
      position: "top-left",
      label: "AI Match Score",
      value: "98% — Top Match",
      sub: "React · TypeScript · Node.js",
      valueColor: "green",
    },
    {
      id: "rating",
      position: "mid-right",
      label: "Rating",
      value: "5.0 ★★★★★",
      sub: "Top Rated Professional",
      valueColor: "navy",
    },
    {
      id: "rate",
      position: "bot-left",
      label: "Avg. Hourly Rate",
      value: "$95",
      sub: "Senior Level · Verified",
      valueColor: "navy",
    },
  ],
};

// ─────────────────────────────────────────
// TRUSTED BY
// ─────────────────────────────────────────
export const TRUSTED_LOGOS = [
  "Apple",
  "Atlassian",
  "Shopify",
  "Notion",
  "Stripe",
  "Etsy",
  "Linear",
  "Vercel",
  "GitHub",
  "Figma",
];

// ─────────────────────────────────────────
// FREELANCERS
// ─────────────────────────────────────────
export const FREELANCERS = [
  {
    id: 1,
    name: "Marcus T.",
    role: "Senior React Developer",
    location: "Amsterdam",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop&crop=face",
    rate: 95,
    rating: 5.0,
    reviews: 127,
    aiMatch: 98,
    tags: ["React", "TypeScript", "Node.js", "AWS"],
    available: true,
    verified: true,
  },
  {
    id: 2,
    name: "Priya S.",
    role: "Product Designer",
    location: "Berlin (Remote)",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop&crop=face",
    rate: 85,
    rating: 4.9,
    reviews: 98,
    aiMatch: 95,
    tags: ["Figma", "Design Systems", "SaaS", "Prototyping"],
    available: true,
    verified: true,
  },
  {
    id: 3,
    name: "James L.",
    role: "Full Stack Engineer",
    location: "London (Remote)",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80&auto=format&fit=crop&crop=face",
    rate: 110,
    rating: 4.9,
    reviews: 214,
    aiMatch: 92,
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    available: false,
    verified: true,
  },
];

// ─────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────
export const CATEGORIES = [
  { icon: "💻", name: "Software Development", count: 54157 },
  { icon: "🤖", name: "AI & Machine Learning", count: 31240 },
  { icon: "🎨", name: "UI / UX Design", count: 59671 },
  { icon: "🛡️", name: "Cybersecurity", count: 18340 },
  { icon: "☁️", name: "DevOps & Cloud", count: 27890 },
  { icon: "📊", name: "Data Engineering", count: 22410 },
  { icon: "📣", name: "Digital Marketing", count: 56800 },
  { icon: "✍️", name: "Content & Copywriting", count: 54911 },
];

// ─────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────
export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Post Your Project",
    desc: "Define your requirements in minutes. Free to post, public or private to your trusted network.",
    variant: "navy",
  },
  {
    step: "02",
    title: "Receive AI Matches",
    desc: "Our AI instantly surfaces your top 3 best-fit freelancers — scored, ranked, and explained.",
    variant: "gold",
  },
  {
    step: "03",
    title: "Compare & Select",
    desc: "Review portfolios, references, and ratings. Interview before committing — zero pressure.",
    variant: "navy",
  },
  {
    step: "04",
    title: "Pay Securely",
    desc: "Milestone-based escrow payments. Funds release only when you approve each deliverable.",
    variant: "gold",
  },
];

// ─────────────────────────────────────────
// DASHBOARD METRICS
// ─────────────────────────────────────────
export const DASHBOARD = {
  metrics: [
    { label: "Active Projects", value: 12, change: "▲ 3 this week", color: "green" },
    { label: "Spend MTD", value: 8400, prefix: "$", change: "On budget ✓", color: "gold" },
    { label: "AI Match Avg", value: 96, suffix: "%", change: "Top tier", color: "navy" },
  ],
  chartData: [30, 48, 40, 65, 55, 78, 70, 88, 100],
  projects: [
    { name: "E-commerce Architecture", status: "Active", budget: "$15k", color: "green" },
    { name: "LLM Support Bot", status: "In Review", budget: "$8k", color: "gold" },
    { name: "Fintech Design System", status: "On Hold", budget: "$22k", color: "amber" },
  ],
  feed: [
    { text: "Marcus T. submitted milestone 2", time: "2m ago", icon: "✅" },
    { text: "Payment of $2,400 released", time: "14m ago", icon: "💳" },
    { text: "New proposal received — Priya S.", time: "1h ago", icon: "📩" },
    { text: "Project awarded: $12,000", time: "2h ago", icon: "🏆" },
  ],
};

// ─────────────────────────────────────────
// LIVE PROJECTS
// ─────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Scalable E-commerce Architecture",
    tags: ["Node.js", "AWS", "Microservices"],
    budget: "$15k – $25k",
    expertise: "Cloud, Node.js, AWS",
    status: "Active",
    posted: "Today, 16:58",
  },
  {
    id: 2,
    title: "LLM Integration for Customer Support",
    tags: ["Python", "OpenAI", "NLP"],
    budget: "$8k – $12k",
    expertise: "Python, OpenAI, NLP",
    status: "Urgent",
    posted: "Today, 11:26",
  },
  {
    id: 3,
    title: "Creative Strategist — Meta Ads Campaign",
    tags: ["Meta Ads", "Strategy", "Creative"],
    budget: "$55 – $85/hr",
    expertise: "Meta, Paid Social",
    status: "Active",
    posted: "Yesterday, 19:14",
  },
  {
    id: 4,
    title: "Fintech App Design System",
    tags: ["Figma", "UI/UX", "Fintech"],
    budget: "$20k – $40k",
    expertise: "UI/UX, Figma",
    status: "On Hold",
    posted: "26 Jun, 14:35",
  },
  {
    id: 5,
    title: "WordPress Blog & Translation Plugin",
    tags: ["WordPress", "PHP", "i18n"],
    budget: "$115 – $570",
    expertise: "WordPress, Translation",
    status: "Active",
    posted: "26 Jun, 11:14",
  },
];

// ─────────────────────────────────────────
// WHY PROLINKER
// ─────────────────────────────────────────
export const WHY_FEATURES = [
  {
    icon: "🤖",
    title: "Smart AI Matching",
    desc: "Our AI analyses 50+ data points — skills, style, ratings, availability — and surfaces only your top 3 matches. No noise.",
    variant: "navy",
    stat: null,
  },
  {
    icon: "👥",
    title: "Verified Professionals",
    desc: "Every member is identity-verified and enters through a trusted invite chain — quality guaranteed at every level.",
    variant: "default",
    stat: "691K+",
  },
  {
    icon: "🔒",
    title: "Zero-Risk Payments",
    desc: "Milestone escrow holds funds until you approve work. IP ownership guaranteed by automated contract at every hire.",
    variant: "gold",
    stat: null,
  },
  {
    icon: "🌍",
    title: "Global Compliance",
    desc: "Hire across 150+ countries with automated localized contracts, tax documentation, and IP protection.",
    variant: "default",
    stat: null,
    countries: ["🇺🇸 USA", "🇬🇧 UK", "🇩🇪 Germany", "🇳🇱 Netherlands", "🇮🇳 India", "🇸🇬 Singapore", "+ 144 more"],
    span: 2,
  },
  {
    icon: "💸",
    title: "Passive Income Network",
    desc: "Invite professionals to your network and earn 2% of every hour they bill — passively, indefinitely.",
    variant: "default",
    stat: "2%",
  },
];

// ─────────────────────────────────────────
// NETWORK
// ─────────────────────────────────────────
export const NETWORK = {
  nodes: [
    { name: "Sarah K. — UX Designer", earn: "+€42", color: "#2563eb" },
    { name: "James L. — Dev Agency", earn: "+€118", color: "#b8922a" },
    { name: "Mia T. — Copywriter", earn: "+€29", color: "#7c3aed" },
  ],
  totalEarned: "€189",
  features: [
    {
      icon: "💸",
      title: "Earn 2% Passively",
      desc: "Receive 2% of the hourly rate every time a freelancer you invited earns — forever.",
    },
    {
      icon: "🔐",
      title: "Private Projects",
      desc: "Post projects visible only to your vetted network — zero exposure to the open market.",
    },
    {
      icon: "🌐",
      title: "Social Sharing Rewards",
      desc: "Share projects externally, grow your reach, and earn every time your network responds.",
    },
  ],
};

// ─────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "ProLinker's AI matched us with a React developer in under a minute. We hired within 48 hours and shipped on time. The quality was exceptional — far above what we found on Upwork.",
    name: "Laura M.",
    role: "CTO, FinFlow Technologies",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The invite-only model is a genuine differentiator. Every professional I've worked with has been outstanding. Zero time wasted on bad profiles — that alone is worth the platform fee.",
    name: "David K.",
    role: "Founder, BuildScale Agency",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "I've earned €800 in passive income this quarter just from my network. And private project mode means competitors never know what we're building. No other platform offers this.",
    name: "Ananya R.",
    role: "Senior UX Designer, Freelancer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80&auto=format&fit=crop&crop=face",
    rating: 5,
  },
];

// ─────────────────────────────────────────
// BLOG
// ─────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: 1,
    category: "Sales & Growth",
    title: "7 Rock-Solid Sales Techniques for Freelancers That Work in 2026",
    excerpt:
      "Believe it or not, you sell something every day. Here's how to close more clients with less effort.",
    date: "22 June 2026",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=700&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Artificial Intelligence",
    title: "The Future of AI-Assisted Software Development",
    excerpt:
      "How elite developers are leveraging AI to deliver 5× efficiency gains on enterprise projects.",
    date: "15 June 2026",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Corporate Legal",
    title: "IP Security in the Gig Economy: A Guide for Enterprise Teams",
    excerpt:
      "Securing your corporate assets when hiring globally — what legal teams need to know.",
    date: "8 June 2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop",
  },
];

// ─────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────
export const FOOTER_LINKS = {
  Platform: [
    { label: "Find Freelancers", href: "#" },
    { label: "Browse Projects", href: "#" },
    { label: "Post a Project", href: "#" },
    { label: "Enterprise Hub", href: "#" },
    { label: "How It Works", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "IP Agreement", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
};