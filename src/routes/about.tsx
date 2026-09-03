import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png.asset.json";
import { CtaButton } from "@/components/CtaButton";
import { StickyNote } from "@/components/Decor";
import { Panel, SectionHeading } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { services, stickers } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abinaya Sathish, Brand Strategist" },
      {
        name: "description",
        content:
          "Brand strategist working on positioning, messaging and identity direction. Strategy first, everything else after.",
      },
      { property: "og:title", content: "About — Abinaya Sathish" },
      {
        property: "og:description",
        content: "Who I am, how I work, and what I help brands figure out.",
      },
    ],
  }),
  component: About,
});

const facts = [
  { label: "Based in", value: "Chennai, working with brands anywhere" },
  { label: "Focus", value: "Positioning, messaging, identity direction" },
  { label: "Works best with", value: "Founders and small teams who want to decide" },
  { label: "Fuel", value: "Boba, black coffee, other people's packaging" },
];

function About() {
  return (
    <>
      <Panel>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              number="About"
              kicker="hello, I'm Abinaya"
              title={<>Strategy first. Everything else after.</>}
              intro="I help brands figure out what to say, who to say it to, and how to make it unforgettable. Most of my work happens before anything gets designed — in the deciding."
            />
            <Reveal delay={140} className="mt-7">
              <StickyNote>I don't start with a moodboard. I start with understanding.</StickyNote>
            </Reveal>
            <Reveal delay={220} className="mt-8">
              <CtaButton to="/contact">Work with me</CtaButton>
            </Reveal>
          </div>
          <Reveal delay={100} className="soft-card overflow-hidden p-3">
            <img
              src={portrait.url}
              alt="Illustration of Abinaya working at her desk"
              loading="lazy"
              width={1132}
              height={1680}
              className="w-full rounded-[1.5rem] object-cover"
            />
          </Reveal>
        </div>
      </Panel>

      <Panel>
        <SectionHeading number="Details" title={<>The short version</>} />
        <dl className="mt-10 grid gap-5 sm:grid-cols-2">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 70} className="soft-card p-6">
              <dt className="eyebrow text-coral">{f.label}</dt>
              <dd className="mt-2 text-lg leading-snug">{f.value}</dd>
            </Reveal>
          ))}
        </dl>
      </Panel>

      <Panel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              number="Services"
              kicker="what I actually do"
              title={<>Ways we can work</>}
            />
            <img
              src={stickers.skincare}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="float-soft mt-8 w-44"
            />
          </div>
          <ul className="divide-y divide-border">
            {services.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 60}>
                <div className="flex items-start gap-5 py-5">
                  <span className="eyebrow mt-1.5 shrink-0 text-coral">{s.number}</span>
                  <div className="min-w-0">
                    <h3 className="display text-2xl">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Panel>
    </>
  );
}
