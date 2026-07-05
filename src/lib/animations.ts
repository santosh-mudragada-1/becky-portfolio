import type { Variants } from "framer-motion";

import { duration, ease, stagger } from "@/config/motion";

/**
 * Reusable Framer Motion variants. Compose these instead of redefining
 * transitions per component so motion reads as one intentional system. All
 * respect the tokens in `@/config/motion`.
 */

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: ease.outExpo.array },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo.array },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.medium, ease: ease.outExpo.array },
  },
};

/** Parent that reveals children on a stagger. Pair with an item variant. */
export const staggerContainer = (
  step: number = stagger.base,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: step, delayChildren } },
});

/** Sensible defaults for scroll-triggered reveals via `whileInView`. */
export const viewportOnce = { once: true, amount: 0.3 } as const;
