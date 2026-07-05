import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Notebook } from "@/components/sections/notebook";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About",
  path: "/about",
  description:
    "The notebook — meet the product manager & marketer behind the desk: story, experience, hobbies, fun facts and what I'm up to now.",
});

export default function AboutPage() {
  return (
    <Section spacing="sm">
      <Container>
        <h1 className="sr-only">About</h1>

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 rounded-lg text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
          <ArrowLeft className="size-4" />
          Back to the desk
        </Link>

        <Notebook />
      </Container>
    </Section>
  );
}
