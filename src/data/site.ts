import wcms from "@/assets/project-wcms.jpg";
import trustlance from "@/assets/project-trustlance.jpg";
import lasa from "@/assets/project-lasa.jpg";
import others from "@/assets/project-others.jpg";
import sticker1 from "@/assets/sticker-1.png.asset.json";
import sticker2 from "@/assets/sticker-2.png.asset.json";
import sticker3 from "@/assets/sticker-3.png.asset.json";
import sticker4 from "@/assets/sticker-4.png.asset.json";
import sticker5 from "@/assets/sticker-5.png.asset.json";

export const stickers = {
  gift: sticker1.url,
  skincare: sticker2.url,
  roses: sticker3.url,
  bag: sticker4.url,
  latte: sticker5.url,
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  tagline: string;
  image: string;
  problem: string;
  approach: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "wcms",
    name: "WCMS",
    category: "Brand strategy & identity",
    year: "2025",
    tagline: "Making a technical service feel like a premium choice.",
    image: wcms,
    problem:
      "WCMS sold serious expertise but looked like every other vendor in the category — competing on price instead of trust.",
    approach: [
      "Interviewed customers to find the real reason they stayed",
      "Repositioned around reliability over feature lists",
      "Built a restrained black-and-embossed identity system",
      "Wrote a messaging kit the sales team could actually use",
    ],
    outcome:
      "A brand that reads premium at first glance, with sales conversations that start from value rather than discounts.",
  },
  {
    slug: "trustlance",
    name: "Trustlance",
    category: "Positioning & messaging",
    year: "2025",
    tagline: "A freelance marketplace built on one promise: no bad hires.",
    image: trustlance,
    problem:
      "A crowded marketplace category where every platform claimed to have the best talent, so nobody believed any of them.",
    approach: [
      "Mapped the category's shared language and deliberately left it",
      "Anchored the brand on verified trust, not volume",
      "Designed a warm, human interface voice",
      "Built onboarding copy that sets expectations honestly",
    ],
    outcome:
      "A clear promise that gives cautious first-time clients a reason to try the platform instead of asking a friend.",
  },
  {
    slug: "lasa",
    name: "Lasa",
    category: "Brand identity & packaging",
    year: "2024",
    tagline: "Quiet luxury for a small-batch apparel label.",
    image: lasa,
    problem:
      "Beautiful garments, but the packaging and tags made them look like a hobby project instead of a label worth its price.",
    approach: [
      "Defined a slow, tactile brand world",
      "Chose materials that make unboxing feel considered",
      "Simplified the mark so it works embossed and tiny",
      "Set rules so every future drop stays consistent",
    ],
    outcome:
      "Customers photograph and share the packaging, which now does the marketing the label could not afford to buy.",
  },
  {
    slug: "content-and-social",
    name: "Content & Social",
    category: "Ongoing brand work",
    year: "2023 — now",
    tagline: "Small brands, consistent voice, thousands of posts.",
    image: others,
    problem:
      "Founders posting whatever felt right that day, which left their brands unrecognisable from one week to the next.",
    approach: [
      "Built simple content pillars per brand",
      "Wrote voice guidelines short enough to be read",
      "Designed repeatable post templates",
      "Reviewed performance monthly and cut what didn't work",
    ],
    outcome:
      "Brands that look and sound like themselves every single time they show up in a feed.",
  },
];

export const insights = [
  {
    title: "Familiarity beats persuasion",
    body: "People pick the brand they recognise. Consistency is not boring — it is the cheapest advantage you have.",
    sticker: stickers.latte,
    note: "seen it before = trust it",
  },
  {
    title: "Feeling comes before features",
    body: "Nobody reads the spec sheet first. They decide how a brand makes them feel, then look for reasons to agree.",
    sticker: stickers.skincare,
    note: "emotion first, logic later",
  },
  {
    title: "Details are the proof",
    body: "Packaging, tone, the confirmation email. Small details are where a brand quietly proves it means what it says.",
    sticker: stickers.bag,
    note: "the little things aren't little",
  },
  {
    title: "Being chosen is a habit",
    body: "The second purchase is where brands are actually built. Make returning easier than reconsidering.",
    sticker: stickers.gift,
    note: "loyalty is repeated ease",
  },
];

export const services = [
  {
    number: "01",
    title: "Brand Positioning",
    body: "Finding the one thing you own in your market, and the words to defend it.",
  },
  {
    number: "02",
    title: "Messaging & Voice",
    body: "Headlines, story, tone rules — everything your brand needs to sound like one person.",
  },
  {
    number: "03",
    title: "Identity Direction",
    body: "Art direction for logo, type, colour and packaging so the look matches the promise.",
  },
  {
    number: "04",
    title: "Launch Content",
    body: "Website copy, social pillars and campaign concepts that carry the strategy forward.",
  },
  {
    number: "05",
    title: "Brand Audits",
    body: "An honest read on where your brand leaks trust, plus what to fix first.",
  },
];

export const process = [
  {
    number: "01",
    title: "Listen",
    body: "Conversations with you and your customers. I look for the gap between what you say and what they hear.",
  },
  {
    number: "02",
    title: "Map",
    body: "Category language, competitors, and the space nobody is standing in yet.",
  },
  {
    number: "03",
    title: "Decide",
    body: "One position. Written plainly, argued properly, and small enough to remember.",
  },
  {
    number: "04",
    title: "Build",
    body: "Messaging, art direction and templates so the strategy survives contact with real work.",
  },
  {
    number: "05",
    title: "Stay",
    body: "Reviews after launch, because brands drift the moment nobody is watching.",
  },
];

/* ---------- About page ---------- */

export type Tool = { name: string; domain: string };

export const toolbox: { group: string; tools: Tool[] }[] = [
  {
    group: "Design",
    tools: [
      { name: "Photoshop", domain: "photoshop.adobe.com" },
      { name: "Illustrator", domain: "illustrator.adobe.com" },
      { name: "Figma", domain: "figma.com" },
      { name: "Canva", domain: "canva.com" },
      { name: "After Effects", domain: "adobe.com" },
      { name: "WordPress", domain: "wordpress.org" },
      { name: "Webflow", domain: "webflow.com" },
    ],
  },
  {
    group: "Development",
    tools: [
      { name: "HTML5", domain: "html.spec.whatwg.org" },
      { name: "CSS", domain: "w3.org" },
      { name: "JavaScript", domain: "javascript.info" },
      { name: "React", domain: "react.dev" },
      { name: "Node.js", domain: "nodejs.org" },
      { name: "GitHub", domain: "github.com" },
      { name: "VS Code", domain: "code.visualstudio.com" },
    ],
  },
  {
    group: "Marketing & Analytics",
    tools: [
      { name: "Meta Ads", domain: "facebook.com" },
      { name: "GA4", domain: "analytics.google.com" },
      { name: "Google Ads", domain: "ads.google.com" },
      { name: "Search Console", domain: "search.google.com" },
      { name: "LinkedIn Ads", domain: "linkedin.com" },
    ],
  },
  {
    group: "Strategy & AI",
    tools: [
      { name: "Miro", domain: "miro.com" },
      { name: "Notion", domain: "notion.so" },
      { name: "Framer", domain: "framer.com" },
      { name: "Relume", domain: "relume.io" },
      { name: "Lovable", domain: "lovable.dev" },
      { name: "Firefly", domain: "firefly.adobe.com" },
    ],
  },
];

export const logoUrl = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const capabilities = [
  {
    group: "Strategy",
    items: ["Brand strategy", "Brand positioning", "Market research", "Strategic planning", "Business development"],
    accent: false,
  },
  {
    group: "Management",
    items: ["Project management", "Vendor management", "Client relations", "Strategic planning"],
    accent: false,
  },
  {
    group: "Design",
    items: [
      "Brand identity",
      "UI/UX design",
      "User research",
      "Wireframing",
      "Prototyping",
      "Design systems",
      "Graphic design",
      "Video editing",
    ],
    accent: true,
  },
  {
    group: "Development",
    items: ["Web development", "Responsive web design"],
    accent: false,
  },
];

export const whatAmI = [
  "A strategist?",
  "A designer?",
  "A marketer?",
  "A UI/UX person?",
  "A developer?",
  "A model?",
];

export const timeline = [
  { year: "16", label: "Started modelling" },
  { year: "Graphic", label: "Design" },
  { year: "Digital", label: "Marketing" },
  { year: "UI/UX", label: "Design" },
  { year: "Web", label: "Development" },
  { year: "Brand", label: "Strategy" },
];

/* ---------- Case study boxes ---------- */

export type CaseDetail = {
  question: string;
  tags: string[];
  boxes: { label: string; body: string }[];
  footnote: string;
};

export const caseDetails: Record<string, CaseDetail> = {
  wcms: {
    question: "What makes a technical service worth trusting?",
    tags: ["Brand strategy", "Positioning", "Identity", "Messaging"],
    boxes: [
      { label: "The context", body: "A technical services brand competing in a category where every competitor looked and sounded identical." },
      { label: "What I noticed", body: "Customers stayed for reliability, but every sales conversation opened with a price comparison." },
      { label: "The problem", body: "Nothing in the brand signalled expertise, so buyers had no reason to pay more than the cheapest quote." },
      { label: "The insight", body: "Trust is proven with restraint. The more a technical brand shouts, the less credible it feels." },
      { label: "The strategy", body: "Reposition around dependability instead of feature lists, and let the identity carry the seriousness." },
      { label: "The idea", body: "A quiet black-and-embossed system that reads premium before a single word is read." },
      { label: "What I built", body: "Positioning statement, messaging kit for the sales team, and a full identity direction." },
      { label: "The outcome", body: "Conversations now start from value, not discounts — and the brand looks like the safe choice." },
    ],
    footnote: "The thinking is the deliverable. Everything else is proof of it.",
  },
  trustlance: {
    question: "What makes someone hire a stranger online?",
    tags: ["Positioning", "Messaging", "Voice", "Onboarding"],
    boxes: [
      { label: "The context", body: "A freelance marketplace launching into a category crowded with near-identical promises." },
      { label: "What I noticed", body: "Every platform claimed the best talent, so buyers believed none of them and asked a friend instead." },
      { label: "The problem", body: "The real fear wasn't cost. It was hiring badly and having to explain it to someone." },
      { label: "The insight", body: "Verified trust beats infinite choice. Fewer, safer options feel better than a bigger marketplace." },
      { label: "The strategy", body: "Leave the category language entirely and anchor everything on one promise: no bad hires." },
      { label: "The idea", body: "A warm, plainly-spoken interface voice that sets honest expectations at every step." },
      { label: "What I built", body: "Positioning platform, messaging hierarchy, voice guidelines and onboarding copy." },
      { label: "The outcome", body: "A reason for cautious first-time clients to try the platform instead of asking around." },
    ],
    footnote: "One promise, kept everywhere, does more than ten claims.",
  },
  lasa: {
    question: "What makes a dessert worth photographing?",
    tags: ["Identity", "Packaging", "Art direction", "Guidelines"],
    boxes: [
      { label: "The context", body: "A small-batch apparel label with beautiful garments and hobby-project packaging." },
      { label: "What I noticed", body: "The clothes felt considered in the hand; everything wrapped around them undid that in a second." },
      { label: "The problem", body: "The price asked for luxury while the unboxing quietly argued against it." },
      { label: "The insight", body: "Quiet luxury is a materials decision before it is a graphic one." },
      { label: "The strategy", body: "Build a slow, tactile brand world and simplify the mark until it works embossed and tiny." },
      { label: "The idea", body: "Packaging designed to be opened slowly — and shared afterwards." },
      { label: "What I built", body: "Identity refinement, material and packaging direction, and rules for future drops." },
      { label: "The outcome", body: "Customers photograph the unboxing, doing the marketing the label couldn't buy." },
    ],
    footnote: "The unboxing is the ad. Design it like one.",
  },
  "content-and-social": {
    question: "What makes a small brand recognisable in a feed?",
    tags: ["Content pillars", "Voice", "Templates", "Ongoing"],
    boxes: [
      { label: "The context", body: "Founders posting whatever felt right that day across several small brands." },
      { label: "What I noticed", body: "Each brand looked like a different company from one week to the next." },
      { label: "The problem", body: "Without a system, consistency depended on mood — and mood does not scale." },
      { label: "The insight", body: "Recognition is repetition. People trust what they have already seen twice." },
      { label: "The strategy", body: "A handful of content pillars per brand, plus voice rules short enough to actually read." },
      { label: "The idea", body: "Repeatable post templates that stay on-brand even when someone is in a hurry." },
      { label: "What I built", body: "Pillars, voice guidelines, template kits and a monthly performance review." },
      { label: "The outcome", body: "Brands that look and sound like themselves every time they show up." },
    ],
    footnote: "Consistency isn't boring — it's the cheapest advantage there is.",
  },
};
