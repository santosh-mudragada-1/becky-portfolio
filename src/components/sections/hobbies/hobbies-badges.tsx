import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { hobbies } from "@/content/hobbies";
import { cn } from "@/lib/utils";

/**
 * Hobbies v1 — "Badges". Each hobby as a sticker that tilts and pops on hover.
 */
export function HobbiesBadges() {
  return (
    <Section id="hobbies">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">Off the clock</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            Things I do to <span className="text-primary">avoid Slack</span>
          </h2>
        </header>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((h, i) => (
            <li
              key={h.name}
              className={cn(
                "sticker flex items-center gap-4 rounded-2xl p-4 transition-transform duration-200 hover:-translate-y-1 hover:rotate-0",
                i % 2 === 0 ? "-rotate-1" : "rotate-1"
              )}
            >
              <span className="text-4xl">{h.emoji}</span>
              <div>
                <h3 className="font-display text-lg font-bold tracking-tight">
                  {h.name}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  {h.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
