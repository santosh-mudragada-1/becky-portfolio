"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import Link from "next/link";
import type { CSSProperties, PointerEvent } from "react";

import { ObjectVisual } from "@/components/sections/workspace/object-visual";
import type { DeskObjectConfig } from "@/config/workspace";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

const variants: Variants = {
  hidden: { opacity: 0, scale: 0.82, y: 18 },
  show: (rotate: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate,
    transition: { type: "spring", stiffness: 220, damping: 20 },
  }),
};

interface DeskObjectProps {
  object: DeskObjectConfig;
  /** Absolute flat-lay positioning (desktop) vs. in-flow grid item (mobile). */
  scatter?: boolean;
}

export function DeskObject({ object, scatter = false }: DeskObjectProps) {
  const { title, subtitle, href, icon, shape, accent, rotate, x, y } = object;
  const reduced = usePrefersReducedMotion();

  // Cursor-follow 3D tilt. Pointer offset (−1…1) → spring-smoothed rotation.
  const ptrX = useMotionValue(0);
  const ptrY = useMotionValue(0);
  const rotateX = useSpring(useTransform(ptrY, [-1, 1], [12, -12]), {
    stiffness: 220,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(ptrX, [-1, 1], [-14, 14]), {
    stiffness: 220,
    damping: 16,
  });

  const handleMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    ptrX.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    ptrY.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const reset = () => {
    ptrX.set(0);
    ptrY.set(0);
  };

  const link = (
    <MotionLink
      href={href}
      aria-label={`${title} — ${subtitle}`}
      custom={rotate}
      variants={variants}
      whileHover={{ y: -12, scale: 1.05 }}
      whileFocus={{ y: -12, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={
        {
          "--obj": `var(--${accent})`,
          perspective: 650,
        } as CSSProperties
      }
      className="group flex flex-col items-center gap-3 rounded-3xl p-2 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        <ObjectVisual shape={shape} Icon={icon} />
      </motion.div>
      <span className="flex flex-col items-center text-center">
        <span className="font-display text-base font-semibold leading-none tracking-tight text-foreground">
          {title}
        </span>
        <span className="eyebrow mt-1.5">{subtitle}</span>
      </span>
    </MotionLink>
  );

  if (!scatter) return link;

  // Positioning lives on a static wrapper so Framer's transform (tilt/lift)
  // never fights the centering translate.
  return (
    <div
      className={cn("absolute -translate-x-1/2 -translate-y-1/2")}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {link}
    </div>
  );
}
