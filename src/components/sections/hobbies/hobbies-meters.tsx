import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { hobbies } from "@/content/hobbies";

/**
 * Hobbies v2 — "Skill Meters". Fake, deeply serious proficiency bars.
 */
const label = (n: number) => (n >= 5 ? "elite" : n >= 4 ? "strong" : "enthusiast");

export function HobbiesMeters() {
  return (
    <Section id="hobbies">
      <Container size="prose">
        <p className="eyebrow">Off the clock · certified stats</p>
        <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
          My real <span className="text-primary">skill tree</span>
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Peer-reviewed by me. Data source: vibes.
        </p>

        <ul className="mt-8 space-y-5">
          {hobbies.map((h) => (
            <li key={h.name}>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display font-bold tracking-tight">
                  <span className="mr-2">{h.emoji}</span>
                  {h.name}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                  {label(h.level)}
                </span>
              </div>
              <div className="mt-1.5 h-3 overflow-hidden rounded-full border border-border bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${(h.level / 5) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{h.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
