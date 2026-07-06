import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { hobbies } from "@/content/hobbies";

/**
 * Hobbies v4 — "Marquee". A scrolling ticker of hobbies; freezes under
 * reduced-motion.
 */
export function HobbiesMarquee() {
  return (
    <Section id="hobbies" spacing="sm">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">Off the clock</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            When I&apos;m not <span className="text-primary">shipping</span>
          </h2>
        </header>
      </Container>

      <div className="flex -rotate-1 gap-0 overflow-hidden border-y-2 border-foreground bg-primary py-4 select-none">
        <div className="flex w-max shrink-0 motion-safe:animate-[marquee_26s_linear_infinite]">
          {[0, 1].map((dup) =>
            hobbies.map((h) => (
              <span
                key={`${dup}-${h.name}`}
                className="flex items-center gap-4 pr-8 font-poster text-2xl uppercase tracking-wide text-primary-foreground sm:text-3xl"
              >
                <span aria-hidden>{h.emoji}</span>
                {h.name}
                <span className="text-primary-foreground/60">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      <Container>
        <p className="mt-6 max-w-md text-muted-foreground">
          Roughly in order of how much coffee is involved.
        </p>
      </Container>
    </Section>
  );
}
