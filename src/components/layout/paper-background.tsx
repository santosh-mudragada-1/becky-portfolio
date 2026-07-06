const PAPER = "/images/Textured-Crumpled-Paper-Background.jpg";

/**
 * Fixed, full-viewport crumpled-paper backdrop.
 *
 * The photo is desaturated so it contributes only its crease texture; the hue
 * comes from the primary-tinted `--background` plus a faint primary wash — so
 * when the primary colour changes, the paper's tint changes with it. Kept low
 * and soft so it blends into the page rather than fighting it. In dark mode the
 * texture is inverted to read as dark crumpled paper.
 */
export function PaperBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 bg-background transition-colors duration-500"
    >
      {/* Crease texture (grayscale → takes the tint from what's behind it) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.45] mix-blend-multiply [filter:grayscale(1)_contrast(1.05)] dark:opacity-30 dark:mix-blend-screen dark:[filter:grayscale(1)_invert(1)_contrast(1.1)]"
        style={{ backgroundImage: `url("${PAPER}")` }}
      />

      {/* Faint primary wash so the paper visibly picks up the chosen hue */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-multiply transition-colors duration-500 dark:opacity-[0.14] dark:mix-blend-screen"
        style={{ backgroundColor: "var(--primary)" }}
      />

      {/* Soft vignette so edges recede */}
      <div className="absolute inset-0 [background:radial-gradient(120%_95%_at_50%_50%,transparent_60%,color-mix(in_oklab,var(--foreground),transparent_90%))]" />
    </div>
  );
}
