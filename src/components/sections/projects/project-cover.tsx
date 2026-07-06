import Image from "next/image";

import { areaMeta } from "@/components/sections/projects/area";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Project cover. If a real `cover` image is set on the project it's shown;
 * otherwise a colour-coded placeholder is generated from the area (gradient +
 * emoji + title). Every project therefore always has a cover.
 */
export function ProjectCover({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const meta = areaMeta[project.category];

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl",
        className
      )}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          fill
          unoptimized
          className="object-cover"
        />
      ) : (
        <>
          <div className={cn("absolute inset-0", meta.bg)} />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20" />
          <span className="absolute -bottom-5 -left-2 text-[7rem] leading-none opacity-25 select-none">
            {meta.emoji}
          </span>
          <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-white backdrop-blur-sm">
            {project.category}
          </span>
          <div className="absolute inset-0 grid place-items-center p-4">
            <span className="text-center font-poster text-2xl uppercase leading-none text-white drop-shadow sm:text-3xl">
              {project.title}
            </span>
          </div>
          <span className="absolute bottom-2 right-3 font-mono text-[9px] text-white/70">
            cover: placeholder
          </span>
        </>
      )}
    </div>
  );
}
