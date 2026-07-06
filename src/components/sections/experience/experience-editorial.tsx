import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ReadingPhoto } from "@/components/sections/experience/reading-photo";
import { experienceCompany, hats, productAreas } from "@/content/experience";

/**
 * Experience v3 — "Editorial". The grown-up take: one company, three years, a
 * stack of hats. Calm typography, wit in the copy.
 */
export function ExperienceEditorial() {
  return (
    <Section id="experience">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="eyebrow">
              Experience · {experienceCompany.name}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1] tracking-tight">
              One company. Three years. A whole stack of hats.
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {experienceCompany.blurb}
            </p>

            <ul className="mt-10 divide-y divide-border">
              {hats.map((h) => (
                <li
                  key={h.name}
                  className="group grid grid-cols-[auto_1fr] gap-x-5 py-6"
                >
                  <span className="text-4xl leading-none transition-transform group-hover:-rotate-12">
                    {h.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">
                      {h.name}
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        hat
                      </span>
                    </h3>
                    <p className="mt-1 text-muted-foreground text-pretty">
                      {h.blurb}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 font-mono text-xs text-muted-foreground">
              shipped across:{" "}
              {productAreas.map((a) => `${a.name} (${a.projects.join(", ")})`).join("  ·  ")}
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ReadingPhoto
              className="mx-auto w-full max-w-[15rem]"
              caption="doing “research” (reading a map)"
            />
          </aside>
        </div>
      </Container>
    </Section>
  );
}
