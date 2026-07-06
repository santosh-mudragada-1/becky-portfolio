import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { aboutIntro, aboutParagraphs } from "@/content/about";
import { cn } from "@/lib/utils";

/**
 * About v4 — "Sticky Notes". The bio, scribbled across a few notes stuck to the
 * wall. Each lifts and straightens on hover.
 */
const notes = [
  { text: aboutIntro, tone: "bg-marker text-marker-foreground", rotate: "-rotate-2" },
  { text: aboutParagraphs[0], tone: "bg-card text-foreground", rotate: "rotate-1" },
  { text: aboutParagraphs[1], tone: "bg-brand-soft text-brand-soft-foreground", rotate: "-rotate-1" },
  {
    text: "Wears many hats. Literally listed them in the last section.",
    tone: "bg-card text-foreground",
    rotate: "rotate-2",
  },
];

export function AboutNotes() {
  return (
    <Section id="about">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">About · the wall</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            Me, in <span className="text-primary">Post-its</span>
          </h2>
        </header>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {notes.map((n, i) => (
            <li
              key={i}
              className={cn(
                "relative rounded-sm p-5 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:rotate-0",
                n.tone,
                n.rotate
              )}
            >
              <span
                aria-hidden
                className="absolute -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-2 bg-foreground/10"
              />
              <p className="text-[1.05rem] leading-snug font-medium">{n.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
