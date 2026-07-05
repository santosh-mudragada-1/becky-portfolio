import type { ElementType } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Vertical rhythm preset. */
  spacing?: "none" | "sm" | "default" | "lg";
}

const spacings: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "",
  sm: "py-12 md:py-16",
  default: "py-20 md:py-28",
  lg: "py-28 md:py-36",
};

/**
 * Semantic section wrapper that owns vertical rhythm so views compose from
 * consistent blocks. Pair with `<Container>` for horizontal bounds.
 */
export function Section({
  as: Tag = "section",
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn("relative scroll-mt-24", spacings[spacing], className)}
      {...props}
    />
  );
}
