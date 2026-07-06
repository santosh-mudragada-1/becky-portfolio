import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReadingPhoto } from "@/components/sections/experience/reading-photo";
import { experienceCompany, hats, productAreas } from "@/content/experience";

/**
 * Experience v2 — "Boarding Pass". One ticket, one destination (The Matrix
 * Labs), three years — and three hats printed as the cabin classes.
 */
export function ExperienceBoardingPass() {
  return (
    <Section id="experience">
      <Container>
        <header className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Experience · itinerary</p>
            <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
              Now boarding: <span className="text-primary">Matrix Labs</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              One destination, {experienceCompany.duration}, zero layovers
              elsewhere. Cabin crew (me) rotated hats mid-flight.
            </p>
          </div>
          <ReadingPhoto className="hidden w-28 sm:block" />
        </header>

        <div className="overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-sticker">
          {/* Ticket header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-foreground/30 bg-primary px-5 py-4 text-primary-foreground">
            <div>
              <p className="font-mono text-[11px] uppercase opacity-80">
                destination
              </p>
              <p className="font-poster text-2xl uppercase leading-none">
                {experienceCompany.name}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[11px] uppercase opacity-80">
                duration · since
              </p>
              <p className="font-poster text-2xl leading-none">
                {experienceCompany.duration} · {experienceCompany.since}
              </p>
            </div>
          </div>

          {/* Cabin classes = hats */}
          <ul className="divide-y divide-dashed divide-foreground/20">
            {hats.map((h, i) => (
              <li key={h.name} className="flex items-center gap-4 px-5 py-4">
                <span className="text-3xl">{h.emoji}</span>
                <div className="flex-1">
                  <p className="font-display text-lg font-bold tracking-tight">
                    {h.name}{" "}
                    <span className="font-mono text-xs font-normal text-muted-foreground">
                      class
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground">{h.blurb}</p>
                </div>
                <span className="hidden font-poster text-2xl text-muted-foreground sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>

          {/* Cargo = product areas */}
          <div className="flex flex-wrap items-center gap-2 border-t-2 border-dashed border-foreground/30 px-5 py-4">
            <span className="eyebrow mr-1">cargo</span>
            {productAreas.map((a) => (
              <span
                key={a.name}
                className="rounded-full border border-border px-3 py-1 font-mono text-[11px]"
              >
                {a.emoji} {a.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
