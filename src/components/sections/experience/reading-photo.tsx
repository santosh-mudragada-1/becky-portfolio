import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * The "reading the map" photo, reused across Experience versions. Torn-paper
 * cutout that tilts a touch on hover. Decorative caption optional.
 */
export function ReadingPhoto({
  className,
  imgClassName,
  caption,
  priority = false,
}: {
  className?: string;
  imgClassName?: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("group relative", className)}>
      <Image
        src="/images/becky-reading.png"
        alt="Becky reading a theme-park map"
        width={400}
        height={498}
        priority={priority}
        unoptimized
        className={cn(
          "h-auto w-full drop-shadow-2xl transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.03]",
          imgClassName
        )}
      />
      {caption && (
        <figcaption className="mt-2 text-center font-mono text-[11px] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
