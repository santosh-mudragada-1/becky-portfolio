import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReadingPhoto } from "@/components/sections/experience/reading-photo";
import { experienceCompany, hats, productAreas } from "@/content/experience";
import { cn } from "@/lib/utils";

/**
 * Experience v5 — "The Trail". A hiking-map take: a trailhead sign, numbered
 * mile-markers with difficulty badges, and a summit. Photo marks the trailhead.
 */
const stopMeta = [
  { mile: "Mile 1", difficulty: "warm-up", badge: "bg-chart-3 text-white" },
  { mile: "Mile 2", difficulty: "moderate", badge: "bg-pop text-white" },
  { mile: "Mile 3", difficulty: "expert", badge: "bg-primary text-primary-foreground" },
];

const stops = hats.map((h, i) => ({
  ...h,
  ...(stopMeta[i] ?? {
    mile: `Mile ${i + 1}`,
    difficulty: "moderate",
    badge: "bg-primary text-primary-foreground",
  }),
}));

export function ExperienceTrail() {
  return (
    <Section id="experience">
      <Container>
        <header className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="eyebrow">Experience · the scenic route</p>
            <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
              One trail, many <span className="text-primary">hats</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              {experienceCompany.duration} at {experienceCompany.name}. No job
              hopping — just hat swapping, uphill both ways.
            </p>
          </div>
          <span className="shrink-0 rotate-2 rounded-xl border-2 border-foreground bg-card px-4 py-2 font-mono text-xs font-bold uppercase shadow-sticker">
            🥾 3 miles · moderate
          </span>
        </header>

        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start">
          {/* Trailhead sign */}
          <div className="mx-auto lg:mx-0">
            <div className="inline-block -rotate-2 rounded-lg border-2 border-foreground bg-card p-2 shadow-sticker">
              <ReadingPhoto className="w-44" />
              <p className="mt-1.5 text-center font-mono text-[11px] font-bold uppercase tracking-wide">
                Trailhead · {experienceCompany.since}
              </p>
            </div>
          </div>

          {/* The trail */}
          <ol className="relative space-y-6 border-l-[3px] border-dashed border-primary/50 pl-8">
            {stops.map((s, i) => (
              <li key={s.name} className="relative">
                <span className="absolute -left-[2.72rem] grid size-9 place-items-center rounded-full border-2 border-primary bg-background font-poster text-primary">
                  {i + 1}
                </span>
                <div className="group rounded-2xl border-2 border-border bg-card p-4 shadow-sm transition-transform duration-300 hover:translate-x-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold uppercase",
                        s.badge
                      )}
                    >
                      {s.mile} · {s.difficulty}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {s.emoji} {s.name} hat
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                    {s.blurb}
                  </p>
                </div>
              </li>
            ))}

            {/* Summit */}
            <li className="relative">
              <span className="absolute -left-[2.72rem] grid size-9 place-items-center rounded-full border-2 border-dashed border-primary bg-background text-primary">
                ★
              </span>
              <div className="rounded-2xl border-2 border-dashed border-border p-4">
                <p className="font-display text-lg font-bold tracking-tight">
                  📍 Summit — you are here
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Still climbing. Shipped across{" "}
                  {productAreas.map((a) => a.name).join(" · ")}.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </Container>
    </Section>
  );
}
