import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { aboutParagraphs, aboutSpec } from "@/content/about";

/**
 * About v5 — "Editorial". A big pull-quote carries it; the details sit quietly
 * beside it.
 */
export function AboutEditorial() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">About</p>
            <blockquote className="mt-4 font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-[1.05] tracking-tight">
              “I turn chaos into roadmaps —{" "}
              <span className="text-primary">and roadmaps into shipped products.</span>”
            </blockquote>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              — Becky, probably in a standup
            </p>
          </div>

          <div>
            <div className="max-w-prose space-y-4 text-lg text-muted-foreground">
              {aboutParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-5">
              {aboutSpec.map((s) => (
                <div key={s.label}>
                  <dt className="eyebrow">{s.label}</dt>
                  <dd className="mt-1 font-display text-sm font-bold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </Section>
  );
}
