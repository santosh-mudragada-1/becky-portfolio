import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { allTools, toolGroups } from "@/content/tools";

/**
 * Tools v4 — "Config File". The stack, printed like a config object. For the
 * PMs who think in JSON.
 */
const keys = ["design", "analytics", "marketing"];

export function ToolsConfig() {
  return (
    <Section id="tools">
      <Container size="prose">
        <header className="mb-8">
          <p className="eyebrow">The toolbox · as code</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            My stack, <span className="text-primary">as config</span>
          </h2>
        </header>

        <div className="overflow-x-auto rounded-2xl border-2 border-foreground bg-card p-5 font-mono text-sm shadow-sticker">
          <p>
            <span className="text-muted-foreground">const</span>{" "}
            <span className="text-pop">becky</span>.stack = {"{"}
          </p>
          {toolGroups.map((g, gi) => (
            <p key={g.category} className="pl-4">
              <span className="text-primary">{keys[gi]}</span>:{" ["}
              {g.tools.map((t, i) => (
                <span key={t.name}>
                  <span className="text-chart-3">&quot;{t.name}&quot;</span>
                  {i < g.tools.length - 1 ? ", " : ""}
                </span>
              ))}
              {"],"}
            </p>
          ))}
          <p>{"}"}</p>
          <p className="mt-2 text-muted-foreground">
            {"// tabs open: "}
            {allTools.length}
            {" · regrets: 0"}
          </p>
        </div>
      </Container>
    </Section>
  );
}
