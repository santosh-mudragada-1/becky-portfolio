import Link from "next/link";

import { AppearanceControls } from "@/components/common/appearance-controls";
import { Button } from "@/components/ui/button";
import { mainNav, siteConfig } from "@/config/site";

/**
 * Top navigation. Wordmark + section anchors + a resume button. Kept light and
 * quiet so the hero does the shouting.
 */
export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-md">
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — home`}
          className="group inline-flex items-baseline gap-1.5 rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <span className="font-quirky text-xl font-bold tracking-tight">
            {siteConfig.nickname}
          </span>
          <span className="size-2 rounded-full bg-primary transition-transform duration-300 group-hover:scale-150" />
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <AppearanceControls />
          <div className="mx-0.5 hidden h-5 w-px bg-border sm:block" />

          <Button asChild size="sm">
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
