import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Squiggle, StickyNote } from "@/components/Decor";
import { Panel, SectionHeading } from "@/components/Panel";
import { Reveal } from "@/components/Reveal";
import { stickers } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abinaya Sathish, Brand Strategist" },
      {
        name: "description",
        content:
          "Tell me about your brand and where it's getting stuck. Email hello@abinayasathish.com or send a note here.",
      },
      { property: "og:title", content: "Contact — Abinaya Sathish" },
      {
        property: "og:description",
        content: "Let's build something meaningful together — start a brand strategy project.",
      },
    ],
  }),
  component: Contact,
});

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-coral";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:hello@abinayasathish.com?subject=${encodeURIComponent(
    `Project enquiry${brand ? ` — ${brand}` : ""}`,
  )}&body=${encodeURIComponent(`${message}\n\n— ${name}${email ? ` (${email})` : ""}`)}`;

  return (
    <>
      <Panel>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              number="Contact"
              kicker="let's build something"
              title={<>Meaningful together</>}
              intro="Tell me what you're building and where it's getting stuck. I'll reply within two working days, honestly, even if strategy isn't what you need next."
            />
            <div className="mt-8 space-y-5">
              <div>
                <p className="eyebrow text-coral">Email</p>
                <a
                  href="mailto:hello@abinayasathish.com"
                  className="display text-2xl underline decoration-coral decoration-2 underline-offset-8 sm:text-3xl"
                >
                  hello@abinayasathish.com
                </a>
              </div>
              <div>
                <p className="eyebrow text-coral">Instagram</p>
                <a
                  href="https://instagram.com/abinayasathish"
                  target="_blank"
                  rel="noreferrer"
                  className="display text-2xl underline decoration-coral decoration-2 underline-offset-8 sm:text-3xl"
                >
                  @abinayasathish
                </a>
              </div>
            </div>
            <Reveal delay={180} className="mt-10">
              <StickyNote>strategy first. everything else after.</StickyNote>
            </Reveal>
          </div>

          <Reveal delay={120} className="soft-card p-7 sm:p-9">
            <h2 className="display text-2xl">Send a note</h2>
            <Squiggle className="mt-2" />
            <form
              className="mt-6 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailto;
              }}
            >
              <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                Your name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Abinaya's next client"
                  className={inputClass}
                />
              </label>
              <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  className={inputClass}
                />
              </label>
              <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                Brand or company
                <input
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  placeholder="Optional"
                  className={inputClass}
                />
              </label>
              <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em]">
                What's getting stuck?
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="A few lines is plenty."
                  className={inputClass}
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-cream transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
              >
                Say hello
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
              <p className="text-xs text-muted-foreground">
                This opens your email app with the message ready to send.
              </p>
            </form>
          </Reveal>
        </div>
      </Panel>

      <Panel>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <p className="hand max-w-md text-3xl text-coral">
            Let's make your brand the one people choose.
          </p>
          <img
            src={stickers.gift}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="float-soft w-40 sm:w-52"
          />
        </div>
      </Panel>
    </>
  );
}
