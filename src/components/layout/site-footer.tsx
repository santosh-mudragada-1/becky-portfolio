import { Logo } from "@/components/common/logo";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig, socialLinks } from "@/config/site";

/**
 * Global footer: brand, a friendly sign-off, social links and colophon.
 * Server component — the only interactive bit (theme switcher) is a client
 * island.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-14">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm space-y-3">
            <Logo />
            <p className="text-sm text-muted-foreground text-pretty">
              {siteConfig.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <ThemeSwitcher />
            <div className="flex items-center gap-1">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Button key={label} variant="ghost" size="icon" asChild>
                  <a
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="size-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. Built with curiosity & caffeine.
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {siteConfig.role}
          </p>
        </div>
      </Container>
    </footer>
  );
}
