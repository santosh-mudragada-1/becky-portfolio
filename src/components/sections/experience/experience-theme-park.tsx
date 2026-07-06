import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReadingPhoto } from "@/components/sections/experience/reading-photo";
import { experienceCompany, hats, productAreas } from "@/content/experience";
import { cn } from "@/lib/utils";

/**
 * Experience v1 — "Theme Park Map". The park is one company; the hats are the
 * rides (with thrill ratings). The photo is the "you are here" marker.
 */
const rideMeta = [
  { ride: "The Hype Coaster", thrill: 5, band: "bg-primary text-primary-foreground" },
  { ride: "The Herding Carousel", thrill: 4, band: "bg-pop text-white" },
  { ride: "The Discovery Drop", thrill: 5, band: "bg-chart-3 text-white" },
];

const rides = hats.map((h, i) => ({
  ...h,
  ...(rideMeta[i] ?? {
    ride: h.name,
    thrill: 4,
    band: "bg-primary text-primary-foreground",
  }),
}));

export function ExperienceThemePark() {
  return (
    <Section id="experience">
      <Container>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <p className="eyebrow">
              Experience · {experienceCompany.duration} @ {experienceCompany.name}
            </p>
            <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
              Welcome to <span className="text-primary">Beckyland</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              One park, three years, every ride run by the same person in a
              different hat. Please keep arms, legs and roadmaps inside at all
              times.
            </p>
          </div>
          <span className="shrink-0 -rotate-2 rounded-xl border-2 border-dashed border-primary/50 bg-card px-4 py-2 text-center font-mono text-xs font-bold uppercase text-primary">
            🎟 3-year pass
            <br />
            all zones
          </span>
        </header>

        {/* The rides (hats) */}
        <ul className="grid gap-4 md:grid-cols-3">
          {rides.map((r) => (
            <li
              key={r.name}
              className="group overflow-hidden rounded-2xl border-2 border-border bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={cn(
                  "flex items-center justify-between px-4 py-2 font-mono text-[11px] font-bold uppercase",
                  r.band
                )}
              >
                <span className="truncate">{r.ride}</span>
                <span aria-label={`thrill ${r.thrill} of 5`}>
                  {"★".repeat(r.thrill)}
                  {"☆".repeat(Math.max(0, 5 - r.thrill))}
                </span>
              </div>
              <div className="p-5">
                <span className="text-4xl transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110 inline-block">
                  {r.emoji}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
                  {r.name}{" "}
                  <span className="font-normal text-muted-foreground">hat</span>
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                  {r.blurb}
                </p>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                  operating since {experienceCompany.since} · wait: worth it
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Park map footer: you-are-here + zones */}
        <div className="mt-6 grid gap-6 rounded-2xl border-2 border-dashed border-border p-5 sm:grid-cols-[auto_1fr] sm:items-center">
          <div className="relative mx-auto sm:mx-0">
            <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2 rounded-full bg-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-sticker">
              You are here
            </span>
            <ReadingPhoto className="w-40" caption="studying the park map" />
          </div>
          <div>
            <p className="eyebrow mb-3">Zones I shipped in</p>
            <ul className="flex flex-wrap gap-2">
              {productAreas.map((a) => (
                <li
                  key={a.name}
                  className="rounded-full border-2 border-border bg-card px-3 py-1.5 font-mono text-xs font-bold"
                >
                  {a.emoji} {a.name}
                  <span className="ml-1 font-normal text-muted-foreground">
                    · {a.projects.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
