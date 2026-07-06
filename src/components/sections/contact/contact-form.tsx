import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Contact v4 — "Sarcastic Form". Looks like a real form, labels have jokes. The
 * send button opens a pre-filled email (no backend needed).
 */
export function ContactForm() {
  return (
    <Section id="contact">
      <Container size="prose">
        <p className="eyebrow">Contact · the form</p>
        <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
          Slide into my <span className="text-primary">inbox</span>
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Fields optional. Effort appreciated. Memes welcome.
        </p>

        <div className="mt-8 space-y-5 rounded-2xl border-2 border-border bg-card p-6">
          <div>
            <label htmlFor="c-name" className="eyebrow">
              Your name (or alias, I don&apos;t judge)
            </label>
            <input
              id="c-name"
              type="text"
              placeholder="e.g. Future Colleague"
              className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            />
          </div>
          <div>
            <label htmlFor="c-msg" className="eyebrow">
              The pitch (keep it spicy)
            </label>
            <textarea
              id="c-msg"
              rows={4}
              placeholder="“We should build something” is a perfectly good opener."
              className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-2.5 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${siteConfig.email}?subject=Hi%20Becky`}>
                Send it 🚀
              </a>
            </Button>
            <p className="font-mono text-xs text-muted-foreground">
              opens your email · no creepy tracking
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
