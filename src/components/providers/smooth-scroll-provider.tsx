"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";

import { lenisOptions } from "@/config/motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * App-wide smooth scrolling.
 *
 * Lenis drives the page and is synchronized with GSAP's ticker so ScrollTrigger
 * reads Lenis's virtual scroll position (one frame loop, no jitter). Smoothing
 * is disabled when the user prefers reduced motion.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);
  const reduced = usePrefersReducedMotion();

  // Drive Lenis from GSAP's ticker (single source of truth for the frame loop).
  useEffect(() => {
    function raf(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => gsap.ticker.remove(raf);
  }, []);

  // Keep ScrollTrigger in sync with Lenis's virtual scroll.
  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();
    return () => lenis.off("scroll", ScrollTrigger.update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ ...lenisOptions, smoothWheel: !reduced }}
    >
      {children}
    </ReactLenis>
  );
}
