"use client";

import { useState } from "react";

import { ProjectFolder } from "@/components/sections/work/project-folder";
import { getProjectsByCategory } from "@/content/projects";
import type { ProjectCategory } from "@/types";

interface CategoryMeta {
  id: ProjectCategory;
  blurb: string;
  accent: string;
}

const categories: CategoryMeta[] = [
  {
    id: "Enterprise",
    accent: "chart-2",
    blurb: "Platforms & tools for teams at scale.",
  },
  { id: "AI", accent: "chart-4", blurb: "Products with intelligence baked in." },
  {
    id: "Consumer",
    accent: "chart-3",
    blurb: "Delightful things for everyday people.",
  },
];

/**
 * The Project Folder: three category folders in a filing stack. One opens at a
 * time (accordion); Enterprise is open by default so there's always something
 * to see.
 */
export function ProjectFolders() {
  const [openId, setOpenId] = useState<ProjectCategory | null>("Enterprise");

  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <ProjectFolder
          key={category.id}
          index={index}
          category={category.id}
          blurb={category.blurb}
          accent={category.accent}
          projects={getProjectsByCategory(category.id)}
          open={openId === category.id}
          onToggle={() =>
            setOpenId((prev) => (prev === category.id ? null : category.id))
          }
        />
      ))}
    </div>
  );
}
