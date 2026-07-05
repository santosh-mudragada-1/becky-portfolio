import {
  ArrowRight,
  BookOpen,
  Hammer,
  MapPin,
  Smile,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  aboutParagraphs,
  aboutSticky,
  currentStatus,
  experience,
  funFacts,
  hobbies,
  notebookProfile,
  type NotebookSectionId,
} from "@/content/notebook";
import { cn } from "@/lib/utils";

import { StickyNote } from "./sticky-note";

/** Section heading — display type with a hand-drawn underline for warmth. */
function Heading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        {children}
      </h2>
      <svg
        className="mt-1.5 h-2 w-36 text-primary"
        viewBox="0 0 144 8"
        fill="none"
        aria-hidden
      >
        <path
          d="M2 5 C 40 1, 108 1, 142 4"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Renders the content for one notebook section. */
export function NotebookPage({ id }: { id: NotebookSectionId }) {
  switch (id) {
    case "about":
      return (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col-reverse gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow">{notebookProfile.role}</p>
              {/* The one handwritten heading — a personal hello. */}
              <p className="mt-2 font-hand text-5xl leading-[0.95] text-foreground">
                Hi, I&apos;m {notebookProfile.name} <span aria-hidden>👋</span>
              </p>
            </div>
            {/* Polaroid avatar */}
            <div className="relative shrink-0 rotate-3 rounded-sm bg-white p-2 pb-6 shadow-md">
              <span
                aria-hidden
                className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-3 bg-white/50 shadow-sm"
              />
              <div className="grid size-20 place-items-center rounded-sm bg-brand-soft font-display text-2xl font-semibold text-brand-soft-foreground">
                {initialsOf(notebookProfile.name)}
              </div>
              <p className="absolute inset-x-0 bottom-1 text-center font-hand text-base text-neutral-500">
                that&apos;s me
              </p>
            </div>
          </div>

          <div className="max-w-prose space-y-4 text-lg leading-relaxed text-foreground/85">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <StickyNote tone="yellow" rotate={-3} tape className="mt-1">
            {aboutSticky}
          </StickyNote>
        </div>
      );

    case "experience":
      return (
        <div>
          <Heading>Experience</Heading>
          <ol className="ml-1 space-y-7 border-l-2 border-dashed border-primary/40 pl-6">
            {experience.map((e) => (
              <li key={`${e.org}-${e.period}`} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[1.95rem] top-1.5 size-3 rounded-full border-2 border-primary bg-card"
                />
                <p className="eyebrow">{e.period}</p>
                <p className="mt-1.5 font-display text-xl font-semibold leading-tight text-foreground">
                  {e.role}{" "}
                  <span className="font-normal text-primary">@ {e.org}</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {e.impact}
                </p>
              </li>
            ))}
          </ol>
        </div>
      );

    case "hobbies":
      return (
        <div>
          <Heading>Hobbies &amp; obsessions</Heading>
          <ul className="flex flex-wrap gap-2.5">
            {hobbies.map(({ label, icon: Icon }, i) => (
              <li
                key={label}
                className={cn(
                  "flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-2.5 shadow-xs transition-transform hover:-translate-y-1 hover:rotate-2",
                  i % 2 === 0 ? "-rotate-1" : "rotate-1"
                )}
              >
                <Icon className="size-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
          <p className="annotation mt-7 text-2xl">
            ...basically: endlessly curious about how things work — and how to
            make them better.
          </p>
        </div>
      );

    case "fun-facts": {
      const tones = ["yellow", "blue", "pink", "green"] as const;
      const tilts = [-3, 2, -2, 3];
      return (
        <div>
          <Heading>Fun facts</Heading>
          <div className="flex flex-wrap gap-5">
            {funFacts.map((fact, i) => (
              <StickyNote
                key={i}
                tone={tones[i % tones.length]}
                rotate={tilts[i % tilts.length]}
                tape={i % 2 === 0}
              >
                {fact}
              </StickyNote>
            ))}
          </div>
        </div>
      );
    }

    case "status":
      return (
        <div>
          <Heading>Current status</Heading>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-3 rounded-full bg-success" />
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                {currentStatus.availability}
              </span>
            </li>
            <StatusRow icon={MapPin} label="Based">
              {currentStatus.location}
            </StatusRow>
            <StatusRow icon={BookOpen} label="Reading">
              {currentStatus.reading}
            </StatusRow>
            <StatusRow icon={Hammer} label="Building">
              {currentStatus.building}
            </StatusRow>
            <StatusRow icon={Smile} label="Mood">
              {currentStatus.mood}
            </StatusRow>
          </ul>

          <div className="mt-8 flex items-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Say hi <ArrowRight />
              </Link>
            </Button>
            <Sparkles className="size-5 text-highlight" aria-hidden />
          </div>
        </div>
      );
  }
}

function StatusRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-baseline gap-3">
      <Icon className="size-4 shrink-0 translate-y-0.5 text-primary" aria-hidden />
      <span className="eyebrow w-16 shrink-0">{label}</span>
      <span className="text-base font-medium text-foreground">{children}</span>
    </li>
  );
}
