import type { CSSProperties } from "react";

import type { DeskShape } from "@/config/workspace";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/**
 * Top-down "object viewed from above" illustrations, drawn in CSS/SVG so they
 * stay crisp and re-tint with the active theme (via the `--obj` custom property
 * set by the parent DeskObject). A stand-in until real illustrations land.
 *
 * Each shape shares a `group-hover` flourish (see DeskObject's `group`).
 */

// Tinted surfaces derived from the object's accent (--obj).
const solid: CSSProperties = { background: "var(--obj)" };
const paper: CSSProperties = {
  background: "color-mix(in oklch, var(--obj), var(--card) 82%)",
};
const deep: CSSProperties = {
  background: "color-mix(in oklch, var(--obj), black 26%)",
};
const line: CSSProperties = {
  background: "color-mix(in oklch, var(--obj), var(--foreground) 45%)",
};

const iconOnColor = "text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]";

function GroundShadow() {
  return (
    <span
      aria-hidden
      className="absolute -bottom-3 left-1/2 h-3 w-[70%] -translate-x-1/2 rounded-[100%] bg-black/20 blur-md transition-all duration-300 group-hover:w-[82%] group-hover:bg-black/25 dark:bg-black/40"
    />
  );
}

export function ObjectVisual({
  shape,
  Icon,
}: {
  shape: DeskShape;
  Icon: LucideIcon;
}) {
  return (
    <div className="relative grid place-items-center" aria-hidden>
      <GroundShadow />
      {renderShape(shape, Icon)}
    </div>
  );
}

function renderShape(shape: DeskShape, Icon: LucideIcon) {
  switch (shape) {
    case "notebook":
      return (
        <div className="relative h-28 w-[5.5rem] rounded-2xl shadow-lg" style={solid}>
          {/* page */}
          <div className="absolute inset-y-2 left-3 right-2 rounded-lg rounded-l-sm bg-card/95" />
          {/* ruled lines */}
          <div className="absolute inset-y-5 left-5 right-4 flex flex-col justify-between">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-[3px] rounded-full" style={line} />
            ))}
          </div>
          {/* spiral binding */}
          <div className="absolute -top-1 left-3 right-3 flex justify-between px-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="h-2.5 w-1 rounded-full bg-foreground/25"
              />
            ))}
          </div>
          <Icon className={cn("absolute bottom-2 right-2 size-4", iconOnColor)} />
        </div>
      );

    case "mug":
      return (
        <div className="relative size-24">
          {/* handle */}
          <span
            className="absolute right-0 top-1/2 size-8 -translate-y-1/2 translate-x-2 rounded-full border-[6px]"
            style={{ borderColor: "var(--obj)" }}
          />
          {/* body (rim, top-down) */}
          <div
            className="absolute inset-0 grid place-items-center rounded-full shadow-lg"
            style={solid}
          >
            {/* coffee */}
            <div className="grid size-16 place-items-center rounded-full" style={deep}>
              <Icon className={cn("size-6", iconOnColor)} />
            </div>
          </div>
          {/* steam wisp on hover */}
          <span className="absolute -top-2 left-1/2 h-4 w-1 -translate-x-1/2 rounded-full bg-foreground/20 opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      );

    case "folder":
      return (
        <div className="relative h-24 w-28">
          {/* back sheet peeking */}
          <div className="absolute inset-x-2 top-1 bottom-2 rounded-lg bg-card shadow-sm" />
          {/* tab */}
          <div
            className="absolute left-2 top-0 h-4 w-12 rounded-t-lg"
            style={solid}
          />
          {/* front flap (tilts open on hover) */}
          <div
            className="absolute inset-x-0 bottom-0 top-3 origin-bottom rounded-lg shadow-md transition-transform duration-300 group-hover:[transform:perspective(400px)_rotateX(18deg)]"
            style={solid}
          >
            <Icon className={cn("absolute bottom-2 right-2 size-5", iconOnColor)} />
          </div>
        </div>
      );

    case "roadmap":
      return (
        <div
          className="relative h-24 w-28 rounded-xl border shadow-md"
          style={{ ...paper, borderColor: "color-mix(in oklch, var(--obj), black 10%)" }}
        >
          <svg viewBox="0 0 112 96" className="absolute inset-0 h-full w-full">
            <path
              d="M14 78 C 40 78, 30 40, 56 40 S 74 18, 98 18"
              fill="none"
              stroke="var(--obj)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="2 7"
            />
            <circle cx="14" cy="78" r="5" fill="var(--obj)" />
            <circle cx="56" cy="40" r="5" fill="var(--obj)" />
            <circle cx="98" cy="18" r="5" fill="var(--obj)" />
          </svg>
          <Icon
            className="absolute bottom-1.5 right-1.5 size-4"
            style={{ color: "var(--obj)" }}
          />
        </div>
      );

    case "dashboard":
      return (
        <div className="relative h-24 w-28 rounded-xl p-2 shadow-lg" style={deep}>
          <div className="flex h-full items-end gap-1.5 rounded-md bg-card/10 p-2">
            {[40, 68, 52, 84, 60].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm"
                style={{ height: `${h}%`, background: "var(--obj)" }}
              />
            ))}
          </div>
          <Icon className={cn("absolute right-2 top-2 size-4", iconOnColor)} />
        </div>
      );

    case "board":
      return (
        <div
          className="relative h-24 w-28 rounded-xl border shadow-md"
          style={{ ...paper, borderColor: "color-mix(in oklch, var(--obj), black 10%)" }}
        >
          <div className="absolute inset-2 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((col) => (
              <div key={col} className="flex flex-col gap-1.5">
                <span className="h-1.5 rounded-full" style={line} />
                {Array.from({ length: col === 1 ? 2 : 1 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-4 rounded-sm shadow-sm"
                    style={{
                      background:
                        col === 1
                          ? "var(--obj)"
                          : "color-mix(in oklch, var(--obj), white 30%)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <Icon
            className="absolute -right-1.5 -top-1.5 size-6 rounded-full bg-card p-1 shadow-sm"
            style={{ color: "var(--obj)" }}
          />
        </div>
      );

    case "toolbox":
      return (
        <div className="relative h-20 w-28">
          {/* handle */}
          <span
            className="absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2 rounded-t-xl border-[5px] border-b-0"
            style={{ borderColor: "var(--obj)" }}
          />
          {/* body */}
          <div className="absolute inset-x-0 bottom-0 top-2 rounded-xl shadow-lg" style={solid}>
            {/* lid seam */}
            <span className="absolute inset-x-3 top-4 h-[3px] rounded-full bg-black/15" />
            {/* latch */}
            <span className="absolute left-1/2 top-2.5 size-3 -translate-x-1/2 rounded-sm bg-card/90" />
            <Icon className={cn("absolute bottom-2 right-2 size-5", iconOnColor)} />
          </div>
        </div>
      );

    case "sticky":
      return (
        <div className="relative size-24">
          {/* back notes fan out on hover */}
          <span
            className="absolute inset-0 rounded-md shadow-sm transition-transform duration-300 group-hover:-rotate-12"
            style={{ background: "color-mix(in oklch, var(--obj), white 22%)" }}
          />
          <span
            className="absolute inset-0 rounded-md shadow-sm transition-transform duration-300 group-hover:rotate-6"
            style={{ background: "color-mix(in oklch, var(--obj), white 8%)" }}
          />
          {/* top note */}
          <div className="absolute inset-0 rounded-md shadow-md" style={solid}>
            <div className="absolute inset-x-3 top-4 flex flex-col gap-2">
              <span className="h-[3px] w-3/4 rounded-full bg-black/15" />
              <span className="h-[3px] w-1/2 rounded-full bg-black/15" />
            </div>
            <Icon className={cn("absolute bottom-2 right-2 size-4", iconOnColor)} />
          </div>
        </div>
      );
  }
}
