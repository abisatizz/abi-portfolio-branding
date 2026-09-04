import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaButton } from "@/components/CtaButton";
import { Squiggle } from "@/components/Decor";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { caseDetails, projects } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project, detail: caseDetails[project.slug] ?? null };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found — Abinaya Sathish" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.name} — Case study by Abinaya Sathish`;
    return {
      meta: [
        { title },
        { name: "description", content: project.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: project.tagline },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CaseStudy,
});

function CaseNotFound() {
  return (
    <Panel>
      <h1 className="display text-4xl sm:text-5xl">That case study moved</h1>
      <Squiggle className="mt-3" />
      <p className="mt-4 text-sm text-muted-foreground">
        The project you're looking for isn't here anymore.
      </p>
      <div className="mt-6">
        <CtaButton to="/work">Back to all work</CtaButton>
      </div>
    </Panel>
  );
}

function CaseStudy() {
  const { project, detail } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length] ?? project;

  const boxes =
    detail?.boxes ??
    [
      { label: "The problem", body: project.problem },
      { label: "The outcome", body: project.outcome },
    ];

  return (
    <>
      {/* The box: one bordered card holding the whole case study */}
      <Panel>
        <Reveal className="rounded-[1.75rem] border border-border bg-card/60 p-6 sm:p-10 lg:p-14">
          {/* box header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/work"
              className="eyebrow text-muted-foreground transition-colors hover:text-ink"
            >
              ← Case study
            </Link>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="eyebrow rounded-full border border-border px-4 py-2 transition-colors hover:bg-cream"
            >
              Next →
            </Link>
          </div>

          <p className="eyebrow mt-8 text-coral">
            {project.name} · {project.category} · {project.year}
          </p>

          <h1 className="hand mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            {detail?.question ?? project.tagline}
          </h1>

          <ul className="mt-7 flex flex-wrap gap-2">
            {(detail?.tags ?? [project.category]).map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-border px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* the grid of boxes inside the box */}
          <div className="mt-10 grid border-t border-border sm:grid-cols-2">
            {boxes.map((b, i) => (
              <Reveal
                key={b.label}
                delay={i * 60}
                className={`border-b border-border p-6 sm:p-8 ${
                  i % 2 === 0 ? "sm:border-r" : ""
                }`}
              >
                <span className="block text-xs text-coral">—</span>
                <h2 className="mt-3 text-[0.8rem] font-bold uppercase tracking-[0.14em]">
                  {b.label}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </Reveal>
            ))}
          </div>

          <p className="hand mt-8 text-2xl text-coral">
            {detail?.footnote ?? "The thinking is the deliverable."}
          </p>
        </Reveal>
      </Panel>

      {/* Visual */}
      <Panel>
        <Reveal className="overflow-hidden rounded-[1.5rem] bg-card p-4">
          <img
            src={project.image}
            alt={`${project.name} brand work`}
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-[1rem] object-cover"
          />
        </Reveal>
      </Panel>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 className="display max-w-lg text-3xl sm:text-4xl">
            Want this kind of clarity for your brand?
          </h2>
          <CtaButton to="/contact">Start a project</CtaButton>
        </div>
      </Panel>
    </>
  );
}
