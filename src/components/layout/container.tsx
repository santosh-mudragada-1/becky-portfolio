import type { ElementType } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Render as a different element (e.g. `section`, `main`, `header`). */
  as?: ElementType;
  /** Max-width preset. */
  size?: "prose" | "default" | "wide" | "full";
}

const sizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  prose: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
  full: "max-w-none",
};

/**
 * Horizontal layout boundary: centers content, applies the responsive
 * `container-px` gutter, and caps width per `size`. Wrap section content in one
 * of these so gutters stay identical site-wide.
 */
export function Container({
  as: Tag = "div",
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("container-px mx-auto w-full", sizes[size], className)}
      {...props}
    />
  );
}
