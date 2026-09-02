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
