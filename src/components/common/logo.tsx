import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Wordmark / home link. Text-based so it inherits the active theme; the dot
 * gives a small playful hover. Swap the inner mark for an SVG when branding
 * lands.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight",
        "rounded-lg outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
    >
      <span
        aria-hidden
        className="size-3 rounded-full bg-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
      />
      <span>{siteConfig.name}</span>
    </Link>
  );
}
