import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { hobbies } from "@/content/hobbies";
import { cn } from "@/lib/utils";

/**
 * Hobbies v3 — "Pin Board". Cards pinned to a corkboard, each at a jaunty angle.
 */
const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1"];

export function HobbiesPinboard() {
  return (
    <Section id="hobbies">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">Off the clock · the board</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            Pinned for <span className="text-primary">later</span>
          </h2>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h, i) => (
            <li
              key={h.name}
              className={cn(
                "group relative rounded-lg border border-border bg-card p-5 pt-7 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:rotate-0",
                rotations[i % rotations.length]
              )}
            >
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-primary shadow-sm ring-2 ring-background"
              />
              <span className="text-3xl">{h.emoji}</span>
              <h3 className="mt-2 font-display text-lg font-bold tracking-tight">
                {h.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                {h.note}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
