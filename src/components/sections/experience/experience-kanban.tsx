import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReadingPhoto } from "@/components/sections/experience/reading-photo";
import { experienceCompany, hats, productAreas } from "@/content/experience";
import { cn } from "@/lib/utils";

/**
 * Experience v4 — "The Hat Rack". A board of the hats she wore at one company,
 * plus the product worlds she shipped in. Meta and a little smug.
 */
const tones = ["bg-card", "bg-brand-soft", "bg-accent"];

export function ExperienceKanban() {
  return (
    <Section id="experience">
      <Container>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">
              Experience · {experienceCompany.duration} @ {experienceCompany.name}
            </p>
            <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
              The <span className="text-primary">hat rack</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Same desk, same badge, wildly different job descriptions. WIP
              limit: one hat at a time (allegedly).
            </p>
          </div>
          <div className="hidden -rotate-3 bg-white p-2 pb-5 shadow-md sm:block">
            <ReadingPhoto imgClassName="h-28 w-auto" />
            <p className="mt-1 text-center font-mono text-[10px] text-neutral-500">
              blocked: needs coffee
            </p>
          </div>
        </header>

        <ul className="grid gap-4 sm:grid-cols-3">
          {hats.map((h, i) => (
            <li
              key={h.name}
              className={cn(
                "rounded-2xl border-2 border-border p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:rotate-1",
                tones[i % tones.length],
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{h.emoji}</span>
                <span className="font-mono text-[11px] text-foreground/60">
                  since {experienceCompany.since}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold tracking-tight text-foreground">
                {h.name}
              </h3>
              <p className="mt-1.5 text-sm text-foreground/80 text-pretty">
                {h.blurb}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-border p-4">
          <span className="eyebrow mr-1">shipped across</span>
          {productAreas.map((a) => (
            <span
              key={a.name}
              className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px]"
            >
              {a.emoji} {a.name} · {a.projects.join(", ")}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
