/**
 * Keyboard-only "skip to content" link. Visually hidden until focused so
 * screen-reader and keyboard users can bypass the header. Targets `#main`.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
    >
      Skip to content
    </a>
  );
}
