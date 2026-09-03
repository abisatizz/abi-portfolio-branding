import { Link } from "@tanstack/react-router";
import { Heart } from "./Decor";

export function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-8 lg:px-10">
      <div className="panel mx-auto max-w-[1600px] px-6 py-10 sm:px-12 lg:px-20">
        <div className="grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <p className="hand text-2xl text-coral">Let's build a brand people choose.</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Abinaya Sathish</h2>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Brand strategist working with founders on positioning, messaging and the small
              details that make a brand feel inevitable.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:flex-col sm:text-right">
            <Link to="/my-brain" className="transition-colors hover:text-ink">
              My Brain
            </Link>
            <Link to="/work" className="transition-colors hover:text-ink">
              Work
            </Link>
            <Link to="/about" className="transition-colors hover:text-ink">
              About
            </Link>
            <Link to="/play" className="transition-colors hover:text-ink">
              Play
            </Link>
            <Link to="/contact" className="transition-colors hover:text-ink">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
          <p className="flex items-center gap-1.5">
            Made with <Heart /> and far too much coffee.
          </p>
          <p>© {new Date().getFullYear()} Abinaya Sathish</p>
        </div>
      </div>
    </footer>
  );
}
