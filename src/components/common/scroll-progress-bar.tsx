"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * Thin reading-progress bar pinned to the top of the viewport. Decorative →
 * `aria-hidden`. Spring-smoothed to feel connected to the Lenis scroll.
 */
export function ScrollProgressBar({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-1 origin-left bg-primary",
        className
      )}
    />
  );
}
