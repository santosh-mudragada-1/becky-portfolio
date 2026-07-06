"use client";

import { MotionConfig } from "framer-motion";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

/**
 * Single composition root for client providers.
 *
 *   ThemeProvider   → light/dark class (default light; user toggles)
 *     MotionConfig  → routes Framer Motion through the reduced-motion pref
 *       SmoothScroll → Lenis + GSAP frame loop
 *
 * The primary-colour axis is handled outside React (a CSS variable set by the
 * appearance controls + a pre-paint script), so it isn't a provider here.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </MotionConfig>
    </ThemeProvider>
  );
}
