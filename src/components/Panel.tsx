import type { ReactNode } from "react";
import { Squiggle } from "./Decor";
import { Reveal } from "./Reveal";

/** Big rounded cream container that every section sits inside. */
export function Panel({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className="px-4 py-4 sm:px-8 sm:py-5 lg:px-10">
      <div
        className={`panel mx-auto max-w-[1600px] px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}

/** Numbered section heading with a handwritten kicker and coral squiggle. */
export function SectionHeading({
  number,
  kicker,
  title,
  intro,
}: {
  number: string;
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <Reveal className="max-w-3xl">
      <div className="flex items-center gap-3">
        <span className="eyebrow text-coral">{number}</span>
        {kicker && <span className="hand text-xl text-muted-foreground">{kicker}</span>}
      </div>
      <h2 className="display mt-3 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      <Squiggle className="mt-3" />
      {intro && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}
