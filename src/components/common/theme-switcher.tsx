"use client";

import { Check } from "lucide-react";

import { useColorTheme } from "@/hooks/use-color-theme";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

/**
 * Color-theme picker — an accessible row of swatches (Mango, Coffee, Grape,
 * Ocean, Matcha). Built as a labelled group of toggle buttons (no extra menu
 * dependency). Active state renders only after mount to keep SSR markup stable.
 */
export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme, themes } = useColorTheme();
  const mounted = useMounted();

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={cn(
        "flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-xs",
        className
      )}
    >
      {themes.map((t) => {
        const active = mounted && theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id)}
            aria-pressed={active}
            aria-label={`${t.name} theme`}
            title={t.name}
            className={cn(
              "relative grid size-6 place-items-center rounded-full outline-none transition-transform",
              "hover:scale-110 focus-visible:ring-[3px] focus-visible:ring-ring/50",
              active && "ring-2 ring-foreground/70 ring-offset-1 ring-offset-card"
            )}
            style={{ backgroundColor: t.swatch }}
          >
            {active && (
              <Check className="size-3.5 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]" />
            )}
          </button>
        );
      })}
    </div>
  );
}
