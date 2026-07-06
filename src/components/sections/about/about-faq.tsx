import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { aboutFaq } from "@/content/about";

/**
 * About v2 — "FAQ". Questions I get (and a few I ask myself), answered with the
 * usual amount of sarcasm.
 */
export function AboutFaq() {
  return (
    <Section id="about">
      <Container size="prose">
        <p className="eyebrow">About · FAQ</p>
        <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
          Ask me <span className="text-primary">anything</span>
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Frequently asked — mostly by me, to me, at 2am.
        </p>

        <dl className="mt-8 space-y-4">
          {aboutFaq.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border-2 border-border bg-card p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <dt className="font-display text-lg font-bold tracking-tight">
                <span className="mr-2 text-primary">Q.</span>
                {item.q}
              </dt>
              <dd className="mt-1.5 text-muted-foreground text-pretty">
                <span className="mr-2 font-mono text-sm text-primary">A.</span>
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
