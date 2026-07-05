"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Reflects the user's OS-level "reduce motion" preference. Gate every
 * non-essential JS animation (GSAP/Framer timelines) on this — the CSS layer
 * already neutralizes transitions.
 */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
