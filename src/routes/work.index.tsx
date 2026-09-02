import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaButton } from "@/components/CtaButton";
import { Panel, SectionHeading } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { projects, stickers } from "@/data/site";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Abinaya Sathish, Brand Strategist" },
      {
        name: "description",
        content:
          "Case studies in brand positioning, messaging and identity direction: WCMS, Trustlance, Lasa and ongoing content work.",
      },
      { property: "og:title", content: "Work — Abinaya Sathish" },
      {
        property: "og:description",
        content: "Selected brand strategy case studies: the problem, the approach, the outcome.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <Panel>
        <SectionHeading
          number="Work"
          kicker="case studies"
          title={<>The problem, the decision, the outcome</>}
          intro="Every project below started with a brand being compared instead of chosen. Here's what changed."
        />
      </Panel>

      <Panel>
        <div className="grid gap-8">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.slug} delay={i * 80}>
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group grid gap-6 overflow-hidden rounded-[1.5rem] bg-card p-5 transition-transform duration-300 hover:-translate-y-1 sm:grid-cols-[minmax(0,1fr)_1.1fr] sm:p-6"
              >
                <div className="overflow-hidden rounded-[1rem]">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="min-w-0 sm:py-4">
                  <p className="eyebrow text-coral">
                    {p.category} · {p.year}
                  </p>
                  <h2 className="display mt-2 text-3xl sm:text-4xl">{p.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                  <span className="mt-5 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.18em] underline decoration-coral decoration-2 underline-offset-8">
                    Read the case study
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Panel>

      <Panel>
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
          <div>
            <h2 className="display text-3xl sm:text-5xl">Your brand could be next</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              I take on a small number of strategy projects at a time so each one gets proper
              attention.
            </p>
            <div className="mt-6">
              <CtaButton to="/contact">Enquire about a project</CtaButton>
            </div>
          </div>
          <img
            src={stickers.bag}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="float-soft mx-auto w-40 sm:w-52"
          />
        </div>
      </Panel>
    </>
  );
}
