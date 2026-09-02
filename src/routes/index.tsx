import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.png.asset.json";
import { CtaButton } from "@/components/CtaButton";
import { Circled, HandArrow, Squiggle, StickyNote } from "@/components/Decor";
import { Panel, SectionHeading } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { insights, process, projects, services, stickers } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abinaya Sathish — Brand Strategist" },
      {
        name: "description",
        content:
          "Brand strategy, positioning and messaging for founders who want to be the brand people choose. Selected work, process and thinking.",
      },
      { property: "og:title", content: "Abinaya Sathish — Brand Strategist" },
      {
        property: "og:description",
        content:
          "Positioning, messaging and identity direction for brands that want to be chosen, not compared.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <Panel className="overflow-hidden">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow text-coral">01 — Brand Strategist</p>
              <h1 className="display mt-4 text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-[4.4rem]">
                Why do people
                <br />
                choose <Circled>one brand</Circled>
                <br />
                over another?
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                I'm Abinaya — I answer that question for a living. Positioning, messaging and
                identity direction for founders who'd rather be chosen than compared.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaButton to="/work">See the work</CtaButton>
                <Link
                  to="/my-brain"
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] underline decoration-coral decoration-2 underline-offset-8"
                >
                  Read my thinking
                </Link>
              </div>
            </Reveal>
            <Reveal delay={220} className="mt-10 flex items-center gap-3">
              <HandArrow className="h-8 w-16 rotate-[8deg]" />
              <span className="hand text-xl text-muted-foreground">
                spoiler: it's rarely the logo
              </span>
            </Reveal>
          </div>

          <Reveal delay={100} className="relative">
            <div className="soft-card relative overflow-hidden rounded-[2rem] p-3">
              <img
                src={portrait.url}
                alt="Illustration of Abinaya at her desk with a laptop, boba tea and a stack of brand strategy books"
                width={1132}
                height={1680}
                className="w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <img
              src={stickers.latte}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="float-soft pointer-events-none absolute -bottom-6 -left-6 w-24 sm:w-32"
            />
          </Reveal>
        </div>
      </Panel>

      {/* 02 — INSIGHTS */}
      <Panel>
        <SectionHeading
          number="02"
          kicker="the short answer"
          title={<>Brands aren't chosen logically</>}
          intro="Four things I keep seeing, whether the product is skincare, software or a small apparel label."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {insights.map((item, i) => (
            <Reveal
              as="article"
              key={item.title}
              delay={i * 90}
              className="soft-card group flex gap-5 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={item.sticker}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-20 w-20 shrink-0 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-24 sm:w-24"
              />
              <div className="min-w-0">
                <h3 className="display text-xl sm:text-2xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <p className="hand mt-3 text-lg text-coral">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* 03 — SERVICES */}
      <Panel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <SectionHeading
              number="03"
              kicker="how I help"
              title={<>What I actually do</>}
              intro="Strategy that ends in usable words and clear direction — not a deck nobody opens twice."
            />
            <div className="mt-8 hidden lg:block">
              <StickyNote>
                every project ends with a one-page brand you can quote from memory
              </StickyNote>
            </div>
          </div>
          <ul className="divide-y divide-border">
            {services.map((s, i) => (
              <Reveal as="li" key={s.number} delay={i * 70}>
                <div className="group flex items-start gap-5 py-5 transition-colors">
                  <span className="eyebrow mt-1.5 shrink-0 text-coral">{s.number}</span>
                  <div className="min-w-0">
                    <h3 className="display text-2xl transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {s.title}
                    </h3>
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

      {/* 04 — PROCESS */}
      <Panel>
        <SectionHeading
          number="04"
          kicker="the process"
          title={<>Five steps, no mystery</>}
          intro="The same path every time, because good strategy is repeatable and bad strategy is improvised."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <Reveal
              as="li"
              key={p.number}
              delay={i * 80}
              className="soft-card relative p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="display text-5xl text-coral-soft">{p.number}</span>
              <h3 className="display mt-2 text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={400}
            className="flex flex-col justify-center gap-4 rounded-[1.25rem] border-2 border-dashed border-coral-soft p-6"
          >
            <p className="hand text-2xl text-coral">Ready to start at step one?</p>
            <CtaButton to="/contact">Book a call</CtaButton>
          </Reveal>
        </ol>
      </Panel>

      {/* 05 — WORK + CONTACT */}
      <Panel>
        <SectionHeading
          number="05"
          kicker="selected work"
          title={<>Brands I've helped be chosen</>}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.slug} delay={i * 90}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-[1.25rem] bg-card transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow text-coral">
                    {p.category} · {p.year}
                  </p>
                  <h3 className="display mt-2 text-2xl sm:text-3xl">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                  <span className="mt-4 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.18em] underline decoration-coral decoration-2 underline-offset-8">
                    View case study
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 grid items-center gap-8 rounded-[1.5rem] bg-card p-8 sm:p-10 lg:grid-cols-[1.2fr_auto]">
          <div className="min-w-0">
            <h2 className="display text-3xl sm:text-5xl">
              Let's make your brand
              <br />
              the obvious choice
            </h2>
            <Squiggle className="mt-3" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Tell me what you're building and where it's getting stuck. I'll tell you honestly
              whether strategy is what you need next.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton to="/contact">Start a project</CtaButton>
              <CtaButton href="mailto:hello@abinayasathish.com" className="bg-cream text-ink">
                Email me
              </CtaButton>
            </div>
          </div>
          <img
            src={stickers.roses}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="float-soft mx-auto w-40 sm:w-56"
          />
        </Reveal>
      </Panel>
    </>
  );
}
