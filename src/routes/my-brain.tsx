import { createFileRoute } from "@tanstack/react-router";
import { CtaButton } from "@/components/CtaButton";
import { StickyNote } from "@/components/Decor";
import { Panel, SectionHeading } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { insights, process, stickers } from "@/data/site";

export const Route = createFileRoute("/my-brain")({
  head: () => ({
    meta: [
      { title: "My Brain — How I think about brands | Abinaya Sathish" },
      {
        name: "description",
        content:
          "Notes on why people choose one brand over another: familiarity, feeling, details and habit — plus the way I work through a brand problem.",
      },
      { property: "og:title", content: "My Brain — Abinaya Sathish" },
      {
        property: "og:description",
        content: "Observations on brand choice, and the five-step way I work through a brand.",
      },
    ],
  }),
  component: MyBrain,
});

function MyBrain() {
  return (
    <>
      <Panel>
        <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_auto]">
          <SectionHeading
            number="My Brain"
            kicker="how I see brands"
            title={<>I can't visit a café without analysing it</>}
            intro="I notice patterns: the words on the cup, the pause before someone recommends a product, the reason a packaging choice feels expensive. This page is the unfiltered version of that."
          />
          <img
            src={stickers.latte}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="float-soft mx-auto w-36 sm:w-48"
          />
        </div>
        <Reveal delay={140} className="mt-8">
          <StickyNote>
            apparently this is what happens when you start seeing everything as a brand
          </StickyNote>
        </Reveal>
      </Panel>

      <Panel>
        <SectionHeading number="Theories" title={<>Four things I keep being right about</>} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {insights.map((item, i) => (
            <Reveal as="article" key={item.title} delay={i * 80} className="soft-card p-7">
              <img
                src={item.sticker}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-24 w-24 object-contain"
              />
              <h3 className="display mt-4 text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              <p className="hand mt-3 text-lg text-coral">{item.note}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      <Panel>
        <SectionHeading
          number="Method"
          kicker="how I work"
          title={<>Observe. Question. Find. Strategise. Create.</>}
          intro="I don't start with a moodboard. I start with understanding."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <Reveal as="li" key={p.number} delay={i * 70} className="soft-card p-6">
              <span className="display text-4xl text-coral-soft">{p.number}</span>
              <h3 className="display mt-2 text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={380} className="mt-10 flex flex-wrap items-center gap-5">
          <p className="hand text-2xl text-coral">Thoughtful. Intentional. Impactful.</p>
          <CtaButton to="/work">See it applied</CtaButton>
        </Reveal>
      </Panel>
    </>
  );
}
