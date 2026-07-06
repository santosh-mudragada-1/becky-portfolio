import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { aboutSpec } from "@/content/about";

/**
 * About v3 — "Spec Sheet". Becky as a product, printed like a nutrition label.
 */
export function AboutSpec() {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About · the spec sheet</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
              If I came in a box, this would be the label.
            </h2>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Product manager, some assembly required. Best served with coffee.
              Read before operating heavy roadmaps.
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm rotate-1 border-[3px] border-foreground bg-card p-5 shadow-sticker">
            <p className="border-b-[6px] border-foreground pb-2 font-poster text-3xl uppercase leading-none">
              Becky™
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Product spec · serving size: 1 PM
            </p>
            <dl className="mt-3 divide-y divide-foreground/20">
              {aboutSpec.map((s) => (
                <div key={s.label} className="flex items-baseline justify-between gap-4 py-2">
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="text-right font-display text-sm font-bold">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 border-t-[6px] border-foreground pt-2 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              *daily value of chaos may vary
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
