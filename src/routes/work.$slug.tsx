import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaButton } from "@/components/CtaButton";
import { Squiggle } from "@/components/Decor";
import { Panel } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study not found — Abinaya Sathish" }, { name: "robots", content: "noindex" }],
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
  const { project } = Route.useLoaderData();

  return (
    <>
      <Panel>
        <Reveal>
          <Link
            to="/work"
            className="eyebrow text-muted-foreground transition-colors hover:text-ink"
          >
            ← All work
          </Link>
          <p className="eyebrow mt-6 text-coral">
            {project.category} · {project.year}
          </p>
          <h1 className="display mt-3 text-4xl sm:text-6xl">{project.name}</h1>
          <Squiggle className="mt-3" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-10 overflow-hidden rounded-[1.5rem] bg-card p-4">
          <img
            src={project.image}
            alt={`${project.name} brand work`}
            width={1024}
            height={768}
            className="w-full rounded-[1rem] object-cover"
          />
        </Reveal>
      </Panel>

      <Panel>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-coral">The problem</p>
            <p className="mt-4 text-lg leading-relaxed">{project.problem}</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow text-coral">The approach</p>
            <ul className="mt-4 space-y-3">
              {project.approach.map((step) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                  {step}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={160} className="mt-10 rounded-[1.25rem] bg-card p-8">
          <p className="eyebrow text-coral">The outcome</p>
          <p className="display mt-3 text-2xl leading-snug sm:text-3xl">{project.outcome}</p>
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
