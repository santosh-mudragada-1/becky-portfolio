import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

/**
 * Contact v3 — "Boarding Pass". A ticket straight to her inbox. Matches the
 * Experience boarding-pass version for a nice callback.
 */
export function ContactPass() {
  return (
    <Section id="contact">
      <Container>
        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">Contact · final boarding call</p>
          <h2 className="mt-3 font-poster text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
            One ticket to my <span className="text-primary">inbox</span>
          </h2>
        </header>

        <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-sticker">
          <div className="flex items-center justify-between gap-3 bg-primary px-5 py-4 text-primary-foreground">
            <div>
              <p className="font-mono text-[11px] uppercase opacity-80">destination</p>
              <p className="font-poster text-2xl uppercase leading-none">
                Becky&apos;s inbox
              </p>
            </div>
            <span className="rounded-full bg-primary-foreground/20 px-3 py-1 font-mono text-[11px] font-bold uppercase">
              status: open
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-4 border-b-2 border-dashed border-foreground/30 p-5 font-mono text-sm">
            <div>
              <dt className="text-[11px] uppercase text-muted-foreground">passenger</dt>
              <dd className="font-bold">You (hopefully)</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase text-muted-foreground">to</dt>
              <dd className="font-bold break-all">{siteConfig.email}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase text-muted-foreground">departs</dt>
              <dd className="font-bold">Whenever you&apos;re ready</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase text-muted-foreground">reply eta</dt>
              <dd className="font-bold">Faster than my roadmap</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3 p-5">
            <Button asChild>
              <a href={`mailto:${siteConfig.email}`}>Check in</a>
            </Button>
            <Button asChild variant="outline">
              <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
                Résumé
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
