import type { ReactNode } from "react";

/** Hand-drawn coral underline used under section headings. */
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 12"
      aria-hidden="true"
      className={`h-3 w-40 text-coral ${className}`}
      fill="none"
    >
      <path
        d="M2 8C34 3 62 3 96 7c30 3 58 3 102-3"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Loose hand-drawn oval used to circle emphasised words. */
export function Circled({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        viewBox="0 0 320 90"
        aria-hidden="true"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -inset-x-4 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+2rem)] text-coral"
        fill="none"
      >
        <path
          className="draw-line"
          d="M160 6C74 6 8 22 8 45s66 39 152 39 152-16 152-39S246 6 160 6"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Hand-drawn arrow. Rotate with a wrapper class if needed. */
export function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 40" aria-hidden="true" className={`text-coral ${className}`} fill="none">
      <path
        d="M86 20C64 6 38 8 8 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 20l14-7M8 20l13 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-4 w-4 text-coral ${className}`}>
      <path
        fill="currentColor"
        d="M12 21s-7.5-4.6-9.3-9A5.1 5.1 0 0 1 12 6.9 5.1 5.1 0 0 1 21.3 12c-1.8 4.4-9.3 9-9.3 9z"
      />
    </svg>
  );
}

/** Taped paper note with handwritten text. */
export function StickyNote({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative inline-block max-w-xs -rotate-2 bg-muted px-5 py-4 shadow-[0_10px_25px_-18px_oklch(0.4_0.08_20/0.8)] ${className}`}
    >
      <span className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-3 bg-coral-soft/60" />
      <p className="hand text-lg text-ink">{children}</p>
    </div>
  );
}
