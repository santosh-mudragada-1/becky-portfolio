import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { allTools } from "@/content/tools";

/**
 * Tools v3 — "Marquee". A scrolling ticker of the stack; freezes under
 * reduced-motion.
 */
export function ToolsMarquee() {
  return (
    <Section id="tools" spacing="sm">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">The toolbox</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            The <span className="text-primary">stack</span>, on loop
          </h2>
        </header>
      </Container>

      <div className="flex -rotate-1 gap-0 overflow-hidden border-y-2 border-foreground bg-primary py-4 select-none">
        <div className="flex w-max shrink-0 motion-safe:animate-[marquee_28s_linear_infinite]">
          {[0, 1].map((dup) =>
            allTools.map((t) => (
              <span
                key={`${dup}-${t.name}`}
                className="flex items-center gap-5 pr-5 font-poster text-2xl uppercase tracking-wide text-primary-foreground sm:text-3xl"
              >
                {t.name}
                <span className="text-primary-foreground/60">✦</span>
              </span>
            ))
          )}
        </div>
      </div>

      <Container>
        <p className="mt-6 max-w-md text-muted-foreground">
          Ten tabs, permanently open. It&apos;s fine. Everything&apos;s fine.
        </p>
      </Container>
    </Section>
  );
}
