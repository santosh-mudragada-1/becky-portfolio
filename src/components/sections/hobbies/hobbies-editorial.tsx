import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { hobbies } from "@/content/hobbies";

/**
 * Hobbies v5 — "Editorial". A calm, numbered index of the off-hours Becky.
 */
export function HobbiesEditorial() {
  return (
    <Section id="hobbies">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">Off the clock · the index</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
            Six ways I recharge.
          </h2>
        </header>

        <ol className="divide-y divide-border">
          {hobbies.map((h, i) => (
            <li
              key={h.name}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5"
            >
              <span className="font-poster text-2xl leading-none text-muted-foreground transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {h.emoji} {h.name}
                </h3>
                <p className="text-sm text-muted-foreground">{h.note}</p>
              </div>
              <span className="hidden font-mono text-[11px] text-muted-foreground sm:block">
                since forever
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
