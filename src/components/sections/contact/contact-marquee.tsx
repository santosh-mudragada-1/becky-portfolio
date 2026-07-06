import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/config/site";

/**
 * Contact v5 — "Marquee". A shameless scrolling "hire me" band, then the links.
 */
const ticker = ["HIRE BECKY", "LET'S TALK", "SHIP SOMETHING", "COFFEE'S ON ME"];

export function ContactMarquee() {
  return (
    <Section id="contact" spacing="sm">
      <div className="flex rotate-1 gap-0 overflow-hidden border-y-2 border-foreground bg-primary py-5 select-none">
        <div className="flex w-max shrink-0 motion-safe:animate-[marquee_22s_linear_infinite]">
          {[0, 1].map((dup) =>
            ticker.map((word) => (
              <span
                key={`${dup}-${word}`}
                className="flex items-center gap-6 pr-6 font-poster text-3xl uppercase tracking-wide text-primary-foreground sm:text-5xl"
              >
                {word}
                <span className="text-primary-foreground/60">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      <Container className="mt-10 text-center">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-3 font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold tracking-tight">
          Okay but seriously — say hi.
        </h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${siteConfig.email}`}>Email me</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </Button>
        </div>
        <ul className="mt-6 flex items-center justify-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-full border border-border bg-card transition-transform outline-none hover:-translate-y-1 hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
