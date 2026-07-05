import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectFolders } from "@/components/sections/work";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Work",
  path: "/work",
  description:
    "The project folder — selected product & marketing work across Enterprise, AI and Consumer. Open a folder, expand a card, peek inside.",
});

export default function WorkPage() {
  return (
    <Section spacing="sm">
      <Container>
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <ArrowLeft className="size-4" />
          Back to the desk
        </Link>

        <header className="mb-8 max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            The <span className="text-gradient">Project Folder</span>
          </h1>
          <p className="mt-3 text-lg text-pretty text-muted-foreground">
            Filed by category. Open a folder to flip through the projects, then
            expand any card for the story-in-brief. Full case studies land soon.
          </p>
        </header>

        <ProjectFolders />
      </Container>
    </Section>
  );
}
