"use client";

import { Moon, Palette, Plus, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

import { useMounted } from "@/hooks/use-mounted";
import {
  ACCENT_STORAGE_KEY,
  accentPresets,
  applyAccent,
  defaultAccent,
} from "@/lib/appearance";
import { cn } from "@/lib/utils";

type ViewTransitionDocument = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

/**
 * Appearance controls for the nav: pick the accent colour (5 presets + a custom
 * picker) and toggle dark mode. Dark mode animates as a circular wipe from the
 * button via the View Transitions API (falls back to instant where unsupported
 * or when reduced motion is requested).
 */
export function AppearanceControls() {
  const mounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  const [accent, setAccent] = useState<string>(defaultAccent);
  const [open, setOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(ACCENT_STORAGE_KEY);
      if (stored) setAccent(stored);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const chooseAccent = (color: string) => {
    setAccent(color);
    applyAccent(color);
    try {
      localStorage.setItem(ACCENT_STORAGE_KEY, color);
    } catch {
      // ignore
    }
  };

  const toggleTheme = (e: React.MouseEvent) => {
    const next = isDark ? "light" : "dark";
    const doc = document as ViewTransitionDocument;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduce) {
      setTheme(next);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const end = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => setTheme(next));
    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${end}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const btn =
    "grid size-9 place-items-center rounded-full border border-border bg-card text-foreground outline-none transition-transform hover:-translate-y-0.5 hover:text-primary focus-visible:ring-[3px] focus-visible:ring-ring/50";

  return (
    <div className="flex items-center gap-1.5">
      <div className="relative" ref={popRef}>
        <button
          type="button"
          aria-label="Change accent colour"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className={btn}
        >
          <Palette className="size-4" />
        </button>

        {open && (
          <div
            role="dialog"
            aria-label="Accent colour"
            className="absolute right-0 top-11 z-50 w-56 rounded-2xl border border-border bg-popover p-3 shadow-xl"
          >
            <p className="eyebrow mb-2.5">Accent colour</p>
            <div className="flex flex-wrap gap-2">
              {accentPresets.map((p) => (
                <button
                  key={p.color}
                  type="button"
                  aria-label={p.name}
                  title={p.name}
                  onClick={() => chooseAccent(p.color)}
                  className={cn(
                    "size-8 rounded-full ring-2 ring-offset-2 ring-offset-popover transition-transform hover:scale-110",
                    accent.toLowerCase() === p.color.toLowerCase()
                      ? "ring-foreground"
                      : "ring-transparent"
                  )}
                  style={{ backgroundColor: p.color }}
                />
              ))}
              <label
                title="Custom colour"
                className="grid size-8 cursor-pointer place-items-center rounded-full border border-dashed border-muted-foreground/60 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Plus className="size-4" />
                <input
                  type="color"
                  aria-label="Custom accent colour"
                  value={accent}
                  onChange={(e) => chooseAccent(e.target.value)}
                  className="sr-only"
                />
              </label>
            </div>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              the paper follows your lead ✨
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleTheme}
        disabled={!mounted}
        className={btn}
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </button>
    </div>
  );
}
