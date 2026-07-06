import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReadingPhoto } from "@/components/sections/experience/reading-photo";
import { experienceCompany, hats, productAreas } from "@/content/experience";

/**
 * Experience v1 — "Theme Park Map". The park is one company (The Matrix Labs);
 * the rides are the hats she wore. Literal, playful, ties to the map photo.
 */
export function ExperienceThemePark() {
  return (
    <Section id="experience">
      <Container>
        <header className="mb-10 max-w-2xl">
          <p className="eyebrow">
            Experience · {experienceCompany.duration} @ {experienceCompany.name}
          </p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            Welcome to <span className="text-primary">Beckyland</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            One park, three years, and every ride operated by the same person
            wearing a different hat. {experienceCompany.blurb}
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="sticker relative flex flex-col items-center rounded-2xl p-4">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 rounded-full bg-primary px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-sticker">
              You are here
            </span>
            <ReadingPhoto
              className="mt-4 w-full max-w-[15rem]"
              caption="studying the park map · questionable life choices"
            />
          </div>

          <div>
            <p className="eyebrow mb-3">The rides (a.k.a. my hats)</p>
            <ul className="grid gap-4 sm:grid-cols-3">
              {hats.map((h) => (
                <li
                  key={h.name}
                  className="group rounded-2xl border-2 border-border bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-md"
                >
                  <span className="text-4xl">{h.emoji}</span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
                    {h.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                    {h.blurb}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl border-2 border-dashed border-border p-4">
              <p className="eyebrow mb-2">Zones I shipped in</p>
              <ul className="flex flex-wrap gap-2">
                {productAreas.map((a) => (
                  <li
                    key={a.name}
                    className="rounded-full bg-marker px-3 py-1 font-mono text-xs font-bold text-marker-foreground"
                  >
                    {a.emoji} {a.name} · {a.projects.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
