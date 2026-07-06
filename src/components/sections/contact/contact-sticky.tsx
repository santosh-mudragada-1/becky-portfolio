import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { siteConfig, socialLinks } from "@/config/site";

/**
 * Contact v2 — "Sticky Note". A yellow note stuck to the fridge. It's always
 * yellow (in light or dark mode) so all its text stays dark ink.
 */
export function ContactSticky() {
  return (
    <Section id="contact">
      <Container className="flex flex-col items-center">
        <p className="eyebrow mb-6 self-start">Contact · leave a note</p>

        <div className="relative w-full max-w-md -rotate-2 rounded-sm bg-marker p-8 text-marker-foreground shadow-xl transition-transform duration-300 hover:rotate-0">
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-2 bg-marker-foreground/10"
          />
          <p className="font-display text-2xl font-bold tracking-tight">
            gone shipping — back after coffee ☕
          </p>
          <p className="mt-2 text-lg">
            Leave a message and I&apos;ll get back to you faster than my roadmap
            slips.
          </p>

          <dl className="mt-6 space-y-2 font-mono text-sm">
            <div className="flex justify-between gap-3 border-b border-marker-foreground/25 pb-1">
              <dt className="text-marker-foreground/70">email</dt>
              <dd>
                <a href={`mailto:${siteConfig.email}`} className="font-bold hover:underline">
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-3 border-b border-marker-foreground/25 pb-1">
              <dt className="text-marker-foreground/70">résumé</dt>
              <dd>
                <a href={siteConfig.resumeUrl} className="font-bold hover:underline">
                  /resume.pdf
                </a>
              </dd>
            </div>
          </dl>

          <ul className="mt-4 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marker-foreground/80 outline-none hover:text-marker-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
