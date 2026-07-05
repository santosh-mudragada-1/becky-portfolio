"use client";

import { motion, type Variants } from "framer-motion";

import { duration as durations, ease } from "@/config/motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 20 },
  down: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
  none: {},
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  /** Seconds to delay — useful for hand-tuned sequencing. */
  delay?: number;
  /** Override the entrance duration (seconds). */
  duration?: number;
  /** Replay every time it enters the viewport instead of once. */
  repeat?: boolean;
  /** Fraction visible before triggering [0–1]. */
  amount?: number;
}

/**
 * Declarative, in-view entrance wrapper on Framer Motion. Reduced-motion is
 * honored automatically via the app-level `MotionConfig`. For scrubbed/pinned
 * choreography, reach for GSAP ScrollTrigger.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = durations.slow,
  repeat = false,
  amount = 0.3,
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offsets[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: ease.outExpo.array },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, amount }}
    >
      {children}
    </motion.div>
  );
}
