import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/my-brain", label: "My Brain" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/play", label: "Play" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className={`mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full bg-cream/90 backdrop-blur-md transition-all duration-300 sm:flex sm:justify-between ${
          scrolled ? "px-5 py-2.5 shadow-[0_14px_35px_-30px_oklch(0.4_0.08_20)]" : "px-6 py-4"
        }`}
      >
        <Link to="/" className="flex min-w-0 items-baseline gap-2">
          <span className="display truncate text-xl sm:text-2xl">Abinaya</span>
          <span className="hand shrink-0 text-xl text-coral">Sathish</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-ink"
              activeProps={{ className: "bg-card text-ink" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 rounded-full bg-ink px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cream transition-transform duration-300 hover:scale-[1.04]"
          >
            Let's Talk
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-card sm:hidden"
        >
          <span
            className={`h-0.5 w-4 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-4 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-cream p-4 sm:hidden">
          {[...links, { to: "/contact", label: "Contact" } as const].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/70 py-3 text-sm font-semibold uppercase tracking-[0.16em] last:border-0"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
