import { createFileRoute } from "@tanstack/react-router";
import { CtaButton } from "@/components/CtaButton";
import { StickyNote } from "@/components/Decor";
import { Panel, SectionHeading } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { stickers } from "@/data/site";

export const Route = createFileRoute("/play")({
  head: () => ({
    meta: [
      { title: "Play — Side experiments | Abinaya Sathish" },
      {
        name: "description",
        content:
          "Unbriefed brand experiments: rewriting packaging copy, inventing labels, and noticing things nobody asked me to notice.",
      },
      { property: "og:title", content: "Play — Abinaya Sathish" },
      {
        property: "og:description",
        content: "Side experiments and unbriefed brand thinking, kept deliberately unserious.",
      },
    ],
  }),
  component: Play,
});

const experiments = [
  {
    title: "Rewrite the shelf",
    sticker: stickers.skincare,
    body: "I pick a product I own and rewrite its label until it sounds like it means something. Most take three tries.",
    tag: "ongoing",
  },
  {
    title: "Unboxing autopsy",
    sticker: stickers.bag,
    body: "Every parcel that arrives gets graded: what the packaging promised versus what it delivered.",
    tag: "weekly",
  },
  {
    title: "Café field notes",
    sticker: stickers.latte,
    body: "Menu wording, cup design, the playlist. A running log of what makes a small place feel like a brand.",
    tag: "68 entries",
  },
  {
    title: "Gifting studies",
    sticker: stickers.roses,
    body: "Why a ribbon changes perceived value. An excuse to buy wrapping paper and call it research.",
    tag: "for fun",
  },
];

function Play() {
  return (
    <>
      <Panel>
        <SectionHeading
          number="Play"
          kicker="nobody asked for these"
          title={<>The unbriefed experiments</>}
          intro="Strategy muscles need practice. These are the projects with no client, no deadline and no reason other than curiosity."
        />
        <Reveal delay={140} className="mt-8">
          <StickyNote>if it's not a little bit fun, it won't be memorable</StickyNote>
        </Reveal>
      </Panel>

      <Panel>
        <div className="grid gap-6 sm:grid-cols-2">
          {experiments.map((e, i) => (
            <Reveal
              as="article"
              key={e.title}
              delay={i * 80}
              className="soft-card flex gap-5 p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={e.sticker}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-24 w-24 shrink-0 object-contain"
              />
              <div className="min-w-0">
                <p className="eyebrow text-coral">{e.tag}</p>
                <h3 className="display mt-1.5 text-2xl">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Panel>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="display max-w-xl text-3xl sm:text-4xl">
            Have an idea that's too odd for a brief?
          </h2>
          <CtaButton to="/contact">Tell me about it</CtaButton>
        </div>
      </Panel>
    </>
  );
}
