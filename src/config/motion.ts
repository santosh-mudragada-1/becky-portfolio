/**
 * Motion tokens — single source of truth for timing & easing.
 *
 * Mirrors the CSS `--ease-*` custom properties in globals.css so JS-driven
 * animation (GSAP, Framer Motion) stays consistent with CSS. Durations follow
 * the docs: fast 150–200ms, medium 300–500ms, large 600–900ms.
 */

/** Durations in seconds (GSAP / Framer Motion native unit). */
export const duration = {
  fast: 0.2,
  base: 0.4,
  medium: 0.5,
  slow: 0.7,
  slower: 0.9,
} as const;

/** Easing as cubic-bezier: `.css` for GSAP/CSS, `.array` for Framer Motion. */
export const ease = {
  fluid: { css: "cubic-bezier(0.3, 0, 0, 1)", array: [0.3, 0, 0, 1] },
  outExpo: { css: "cubic-bezier(0.16, 1, 0.3, 1)", array: [0.16, 1, 0.3, 1] },
  inOutQuart: {
    css: "cubic-bezier(0.76, 0, 0.24, 1)",
    array: [0.76, 0, 0.24, 1],
  },
  bounce: {
    css: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    array: [0.34, 1.56, 0.64, 1],
  },
} as const;

/** Stagger presets for orchestrated group reveals. */
export const stagger = {
  tight: 0.04,
  base: 0.08,
  loose: 0.14,
} as const;

/** Lenis smooth-scroll configuration. */
export const lenisOptions = {
  duration: 1.1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
} as const;

export type Duration = keyof typeof duration;
export type Ease = keyof typeof ease;
