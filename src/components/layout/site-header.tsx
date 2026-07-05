"use client";

import { useEffect, useState } from "react";

import { Logo } from "@/components/common/logo";
import { ModeToggle } from "@/components/common/mode-toggle";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Sticky site header. Gains a translucent, blurred backdrop once the page is
 * scrolled so it stays legible over any section. Holds the brand plus the
 * theme controls and resume CTA.
 *
 * NOTE: no section navigation yet — the nav model (spatial "desk" vs. routes)
 * is an open decision (see docs/sitemap.md), and no pages exist in the
 * foundation.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between gap-4">
        <Logo />

        <div className="flex items-center gap-2">
          <ThemeSwitcher className="hidden sm:flex" />
          <ModeToggle />
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
