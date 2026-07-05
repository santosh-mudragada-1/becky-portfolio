"use client";

import { MotionConfig } from "framer-motion";

import { ColorThemeProvider } from "@/components/providers/color-theme-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

/**
 * Single composition root for every client-side provider. Mounted once in the
 * root layout so components stay provider-agnostic.
 *
 * Order:
 *   ThemeProvider       → light/dark (class strategy, resolved before paint)
 *     ColorThemeProvider → color axis ([data-theme]: mango…matcha)
 *       MotionConfig     → routes Framer Motion through the reduced-motion pref
 *         SmoothScroll   → Lenis + GSAP frame loop
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ColorThemeProvider>
        <MotionConfig reducedMotion="user">
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </MotionConfig>
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
