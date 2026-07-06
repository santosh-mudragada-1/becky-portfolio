import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/config/site";

/**
 * Contact v1 — "Big CTA". Loud closer, one clear action, socials underneath.
 */
export function ContactCta() {
  return (
    <Section id="contact" spacing="lg">
      <Container className="text-center">
        <p className="eyebrow">Contact · the closer</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-poster text-[clamp(2.75rem,10vw,7rem)] uppercase leading-[0.85] tracking-tight">
          Let&apos;s build <span className="text-primary">something</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
          Roles, projects, or just a strong opinion about onboarding — my inbox
          is (surprisingly) organized.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="xl">
            <a href={`mailto:${siteConfig.email}`}>Say hi 👋</a>
          </Button>
          <Button asChild size="xl" variant="outline">
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
              Grab my résumé
            </a>
          </Button>
        </div>

        <ul className="mt-8 flex items-center justify-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-transform outline-none hover:-translate-y-1 hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50"
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
