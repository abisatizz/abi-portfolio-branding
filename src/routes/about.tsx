import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png.asset.json";
import { CtaButton } from "@/components/CtaButton";
import { HandArrow, Heart, Squiggle } from "@/components/Decor";
import { Panel, SectionHeading } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { capabilities, logoUrl, services, timeline, toolbox, whatAmI } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abinaya Sathish, Brand Strategist" },
      {
        name: "description",
        content:
          "Brand strategist blending strategy, design, marketing and UI/UX. What I can do, the tools I use, and how I got here.",
      },
      { property: "og:title", content: "About — Abinaya Sathish" },
      {
        property: "og:description",
        content: "Who I am, what I can do with a good brief, and the toolbox behind it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      {/* Intro */}
      <Panel>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <p className="hand text-2xl text-coral">Hello, I'm</p>
              <h1 className="hand mt-1 text-5xl text-coral sm:text-7xl">Abinaya Sathish.</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                A <strong className="text-ink">Brand Strategist</strong> who blends strategy with
                creativity to build brands that connect, communicate and grow.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                I work across strategy, creativity, design, content, marketing, UI/UX and
                technology, and also work as a fashion model and UGC creator. My degree is{" "}
                <strong className="text-ink">BSc Aviation</strong> — because why take the normal
                path when you can collect experiences from everywhere and still make it make sense?
              </p>
              <p className="hand mt-7 text-xl text-coral">
                Different turns. Different lessons. One purpose <Heart className="inline" />
                <br />
                to build brands that actually mean something.
              </p>
            </Reveal>
            <Reveal delay={180} className="mt-8">
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

      {/* What I can do with a good brief */}
      <Panel>
        <Reveal>
          <h2 className="display text-4xl sm:text-6xl">
            What I can do with a <span className="hand normal-case text-coral">good brief.</span>
          </h2>
          <Squiggle className="mt-3" />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.group}
              delay={i * 70}
              className={`rounded-[1.5rem] p-6 ${c.accent ? "bg-coral-soft" : "bg-card"}`}
            >
              <p className="eyebrow text-muted-foreground">{c.group}</p>
              <ul className="mt-5 divide-y divide-border">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-[0.8rem] font-semibold uppercase tracking-[0.06em]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* Toolbox + So what am I */}
      <Panel>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal>
              <h2 className="hand text-4xl">My Toolbox</h2>
              <Squiggle className="mt-2" />
            </Reveal>
            <div className="mt-8 space-y-4">
              {toolbox.map((group, i) => (
                <Reveal
                  key={group.group}
                  delay={i * 70}
                  className="grid gap-4 rounded-[1.25rem] bg-card p-5 sm:grid-cols-[9rem_1fr] sm:items-center"
                >
                  <p className="eyebrow text-muted-foreground">{group.group}</p>
                  <ul className="flex flex-wrap gap-2.5">
                    {group.tools.map((tool) => (
                      <li
                        key={tool.name}
                        className="flex items-center gap-2 rounded-full bg-cream px-3 py-2 text-xs font-medium shadow-[0_6px_16px_-14px_oklch(0.4_0.08_20/0.9)] transition-transform duration-200 hover:-translate-y-0.5"
                      >
                        <img
                          src={logoUrl(tool.domain)}
                          alt={`${tool.name} logo`}
                          loading="lazy"
                          width={20}
                          height={20}
                          className="h-5 w-5 rounded-[0.3rem] object-contain"
                        />
                        {tool.name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} className="rounded-[1.5rem] bg-card p-7">
            <h2 className="hand text-4xl">So, What Am I?</h2>
            <Squiggle className="mt-2" />
            <ul className="mt-6 space-y-3">
              {whatAmI.map((q) => (
                <li key={q} className="flex items-center gap-3 text-sm">
                  <span className="text-coral">✓</span>
                  {q}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-end justify-end gap-2">
              <HandArrow className="w-20 rotate-12" />
              <p className="hand text-4xl text-coral">
                Yes. <Heart className="inline" />
              </p>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              I don't believe in putting everything into one box.
            </p>
            <p className="hand mt-2 text-2xl text-coral underline decoration-coral/60 decoration-2 underline-offset-4">
              I'd rather build the box myself.
            </p>
          </Reveal>
        </div>
      </Panel>

      {/* How did we get here */}
      <Panel>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <h2 className="hand text-4xl">How Did We Get Here?</h2>
              <Squiggle className="mt-2" />
            </Reveal>
            <ol className="mt-9 flex flex-wrap items-stretch gap-3">
              {timeline.map((t, i) => (
                <Reveal as="li" key={t.year + t.label} delay={i * 60}>
                  <div className="flex h-full min-w-[7rem] flex-col items-center rounded-[1rem] bg-card px-4 py-5 text-center">
                    <span className="display text-2xl text-coral">{t.year}</span>
                    <span className="eyebrow mt-2 text-muted-foreground">{t.label}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={120} className="rounded-[1.5rem] bg-card p-7 text-sm leading-relaxed">
            <p>
              I started modelling at 16, which taught me about first impressions, visual language
              and how quickly people form opinions.
            </p>
            <p className="mt-4">
              Then I got into design, marketing, UI/UX and development. Somewhere along the way I
              stopped asking "does this look good?" and started asking "okay, but why should anyone
              care?"
            </p>
            <p className="mt-4">And that's when brand strategy started making a lot more sense.</p>
            <p className="mt-4">
              Today, that mix is what makes me, me. <Heart className="inline" />
            </p>
          </Reveal>
        </div>
      </Panel>

      {/* Services */}
      <Panel>
        <SectionHeading number="Services" kicker="ways we can work" title={<>What you can hire me for</>} />
        <ul className="mt-10 divide-y divide-border">
          {services.map((s, i) => (
            <Reveal as="li" key={s.number} delay={i * 60}>
              <div className="flex items-start gap-5 py-5">
                <span className="eyebrow mt-1.5 shrink-0 text-coral">{s.number}</span>
                <div className="min-w-0">
                  <h3 className="display text-2xl">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
        <div className="mt-10">
          <CtaButton to="/contact">Start a project</CtaButton>
        </div>
      </Panel>
    </>
  );
}
