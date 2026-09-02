import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const base =
  "group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-100";

function Arrow() {
  return (
    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  );
}

/** Rounded black pill button. Renders a router link, or an <a> for external/mailto. */
export function CtaButton({
  to,
  href,
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={`${base} ${className}`}
      >
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <Link to={(to ?? "/") as "/"} className={`${base} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}
