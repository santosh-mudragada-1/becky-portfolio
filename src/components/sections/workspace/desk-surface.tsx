/**
 * The desk seen from above — a warm, papery surface with fine grain, a faint
 * desk-pad grid, a soft top-down light, and one hand-drawn doodle. Everything
 * here is quiet: the objects are the subject, this is just the table they sit
 * on. Purely decorative.
 */
export function DeskSurface() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Warm base wash + soft overhead light pooling at top-center */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" />
      <div className="absolute inset-0 [background:radial-gradient(80%_50%_at_50%_-5%,color-mix(in_oklch,var(--primary),transparent_88%),transparent_60%)]" />

      {/* Desk-pad grid, masked to the center so edges stay calm */}
      <div
        className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklch, var(--border), transparent 45%) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border), transparent 45%) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      {/* Fine paper grain */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
        <filter id="desk-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#desk-grain)" />
      </svg>

      {/* One coffee-stain ring, low and unobtrusive */}
      <div
        className="absolute bottom-[14%] left-[8%] size-20 rounded-full border-[6px] opacity-[0.1]"
        style={{ borderColor: "var(--chart-5)" }}
      />

      {/* Vignette so header + edges recede */}
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-background/70 to-transparent" />
      <div className="absolute inset-0 [background:radial-gradient(120%_90%_at_50%_50%,transparent_60%,color-mix(in_oklch,var(--foreground),transparent_92%))]" />
    </div>
  );
}
