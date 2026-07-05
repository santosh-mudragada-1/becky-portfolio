import type { CSSProperties } from "react";

import { cn } from "@/lib/utils";

type Tone = "yellow" | "pink" | "blue" | "green" | "orange";

/** Fixed, bright note colors — sticky notes read as physical paper in any theme. */
const tones: Record<Tone, string> = {
  yellow: "oklch(0.91 0.11 96)",
  pink: "oklch(0.86 0.09 8)",
  blue: "oklch(0.87 0.07 232)",
  green: "oklch(0.88 0.1 145)",
  orange: "oklch(0.85 0.11 62)",
};

const INK = "oklch(0.32 0.03 60)";

interface StickyNoteProps {
  children: React.ReactNode;
  tone?: Tone;
  /** Resting tilt in degrees. */
  rotate?: number;
  /** Show a strip of tape at the top. */
  tape?: boolean;
  className?: string;
}

/**
 * Handwritten sticky note — tilted, taped, softly shadowed. Lifts and
 * straightens a touch on hover. Decorative color, so text stays dark ink for
 * contrast regardless of theme.
 */
export function StickyNote({
  children,
  tone = "yellow",
  rotate = -2,
  tape = false,
  className,
}: StickyNoteProps) {
  return (
    <div
      className={cn(
        "relative w-44 rounded-sm p-4 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:rotate-0",
        className
      )}
      style={
        {
          background: tones[tone],
          color: INK,
          transform: `rotate(${rotate}deg)`,
          boxShadow: "0 10px 20px -8px rgba(0,0,0,0.35)",
        } as CSSProperties
      }
    >
      {tape && (
        <span
          aria-hidden
          className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-2 bg-white/45 shadow-sm backdrop-blur-[1px]"
        />
      )}
      <p className="font-hand text-xl leading-snug">{children}</p>
    </div>
  );
}
