"use client";

import { Shuffle, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "becky:versions";

export interface Version {
  id: string;
  name: string;
  node: React.ReactNode;
}

interface SectionReg {
  id: string;
  label: string;
  names: string[];
}

interface Ctx {
  registry: SectionReg[];
  values: Record<string, number>;
  register: (section: SectionReg) => void;
  setValue: (id: string, index: number) => void;
}

const VersionContext = createContext<Ctx | null>(null);

/** Holds the chosen version per section, persisted to localStorage. */
export function VersionProvider({ children }: { children: React.ReactNode }) {
  const [registry, setRegistry] = useState<SectionReg[]>([]);
  const [values, setValues] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setValues(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const register = useCallback((section: SectionReg) => {
    setRegistry((prev) =>
      prev.some((r) => r.id === section.id)
        ? prev.map((r) => (r.id === section.id ? section : r))
        : [...prev, section]
    );
  }, []);

  const setValue = useCallback((id: string, index: number) => {
    setValues((prev) => {
      const next = { ...prev, [id]: index };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return (
    <VersionContext.Provider value={{ registry, values, register, setValue }}>
      {children}
    </VersionContext.Provider>
  );
}

function useVersionCtx() {
  const ctx = useContext(VersionContext);
  if (!ctx) {
    throw new Error("Version components must be inside <VersionProvider>");
  }
  return ctx;
}

/** Renders the currently-selected version of a section and registers it. */
export function VersionSection({
  id,
  label,
  versions,
}: {
  id: string;
  label: string;
  versions: Version[];
}) {
  const { register, values } = useVersionCtx();

  useEffect(() => {
    register({ id, label, names: versions.map((v) => v.name) });
  }, [id, label, versions, register]);

  const index = Math.min(values[id] ?? 0, versions.length - 1);
  const active = versions[index] ?? versions[0];

  return <div key={active?.id}>{active?.node}</div>;
}

/** One floating control that switches versions for every registered section. */
export function VersionFab() {
  const { registry, values, setValue } = useVersionCtx();
  const [open, setOpen] = useState(false);

  if (registry.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="Design versions"
          className="max-h-[72vh] w-60 overflow-y-auto rounded-2xl border border-border bg-popover p-3 shadow-xl"
        >
          <div className="mb-1 flex items-center justify-between">
            <p className="eyebrow">Versions</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close version picker"
              className="rounded-md p-1 text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <X className="size-4" />
            </button>
          </div>

          {registry.map((section) => {
            const current = values[section.id] ?? 0;
            return (
              <div key={section.id} className="mt-3 first:mt-2">
                <p className="mb-1.5 font-display text-sm font-bold">
                  {section.label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {section.names.map((name, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setValue(section.id, i)}
                      aria-current={current === i}
                      aria-label={`${section.label} version ${i + 1}: ${name}`}
                      title={name}
                      className={cn(
                        "grid size-9 place-items-center rounded-lg font-mono text-xs font-bold transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                        current === i
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      V{i + 1}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Switch design versions"
        className="flex items-center gap-2 rounded-full bg-foreground px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-background shadow-lg outline-none transition-transform hover:scale-105 focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-95"
      >
        <Shuffle className="size-4" />
        Versions
      </button>
    </div>
  );
}
