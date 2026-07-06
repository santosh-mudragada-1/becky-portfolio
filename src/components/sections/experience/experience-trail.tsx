import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReadingPhoto } from "@/components/sections/experience/reading-photo";
import { experienceCompany, hats, productAreas } from "@/content/experience";

/**
 * Experience v5 — "The Trail". A numbered route through the hats she wore at
 * The Matrix Labs. Photo marks the trailhead (the day she joined).
 */
export function ExperienceTrail() {
  return (
    <Section id="experience">
      <Container>
        <header className="mb-10 max-w-2xl">
          <p className="eyebrow">Experience · the scenic route</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            One trail, many <span className="text-primary">hats</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            {experienceCompany.duration} at {experienceCompany.name} — no job
            hopping, just hat swapping. Mind the loops.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
          <div className="mx-auto -rotate-2 lg:mx-0">
            <span className="mb-2 inline-block rounded-full bg-foreground px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-background">
              Trailhead · {experienceCompany.since}
            </span>
            <ReadingPhoto className="w-44" caption="map: acquired" />
          </div>

          <ol className="relative space-y-6 border-l-2 border-dashed border-primary/50 pl-8">
            {hats.map((h, i) => (
              <li key={h.name} className="relative">
                <span className="absolute -left-[2.55rem] grid size-8 place-items-center rounded-full border-2 border-primary bg-background font-poster text-sm text-primary">
                  {i + 1}
                </span>
                <div className="group rounded-2xl border-2 border-border bg-card p-4 shadow-sm transition-transform duration-300 hover:translate-x-1">
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {h.emoji} {h.name} hat
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {h.blurb}
                  </p>
                </div>
              </li>
            ))}
            <li className="relative">
              <span className="absolute -left-[2.55rem] grid size-8 place-items-center rounded-full border-2 border-dashed border-primary bg-background text-primary">
                ★
              </span>
              <p className="pt-1 font-mono text-xs text-muted-foreground">
                still on the trail · shipped across{" "}
                {productAreas.map((a) => a.name).join(" · ")}
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </Section>
  );
}
