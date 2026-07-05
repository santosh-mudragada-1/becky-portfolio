import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  /** Reverse the scroll direction. */
  reverse?: boolean;
  /** Pause when the pointer hovers the track. */
  pauseOnHover?: boolean;
}

/**
 * Infinite horizontal marquee — great for logo/skill walls or ticker copy.
 * Pure CSS (`--animate-marquee` token), so it's cheap and freezes under
 * `prefers-reduced-motion`. Content is duplicated once and translated -50% for
 * a seamless loop.
 */
export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
}: MarqueeProps) {
  const track = cn(
    "flex w-max shrink-0 items-center gap-[var(--gap,3rem)] pr-[var(--gap,3rem)]",
    "motion-safe:animate-[marquee_var(--duration,40s)_linear_infinite]",
    reverse && "[animation-direction:reverse]",
    pauseOnHover && "group-hover:[animation-play-state:paused]"
  );

  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className={track}>{children}</div>
      <div className={track} aria-hidden>
        {children}
      </div>
    </div>
  );
}
