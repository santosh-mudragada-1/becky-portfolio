import { cn } from "@/lib/utils";

/**
 * A single notebook page surface: warm paper with faint ruled lines, a red
 * margin rule, a spine shadow near the binding and a subtle grain vignette.
 * Adapts to light/dark via tokens. Content scrolls inside if it overflows.
 */
export function Paper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-l-sm rounded-r-2xl bg-card shadow-lg",
        className
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent 0 31px, color-mix(in oklch, var(--border), transparent 25%) 31px 32px)",
      }}
    >
      {/* Spine shadow near the binding */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/12 to-transparent dark:from-black/35"
      />
      {/* Red margin rule */}
      <span
        aria-hidden
        className="absolute inset-y-0 left-12 w-px bg-destructive/40 md:left-16"
      />
      {/* Warm vignette */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(120%_80%_at_50%_-10%,transparent,color-mix(in_oklch,var(--foreground),transparent_94%))]"
      />
      {/* Fine paper grain */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
      >
        <filter id="paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>

      <div className="relative h-full overflow-y-auto px-6 py-7 pl-16 md:px-10 md:pl-24">
        {children}
      </div>
    </div>
  );
}
