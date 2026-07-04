"use client";

import { useMemo, useState } from "react";
import { Layers3Icon, SparklesIcon } from "lucide-react";
import { ConfirmationDialog } from "@/components/common/confirmation-dialog";
import { EmptyState } from "@/components/common/empty-state";
import { Pagination } from "@/components/common/pagination";
import {
  PROJECTS,
  PROJECT_CATEGORY_OPTIONS,
} from "@/constants/projects";
import { useProjectControls } from "@/hooks/use-project-controls";
import type { ProjectItem } from "@/types/portfolio";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/src/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { ProjectCard } from "@/features/projects/components/project-card";
import { ProjectDrawerContent } from "@/features/projects/components/project-drawer-content";

const impactScore = (project: ProjectItem) =>
  project.metrics.reduce((score, metric) => score + metric.value.length, 0);

function matchesText(project: ProjectItem, search: string) {
  if (!search) {
    return true;
  }

  const query = search.toLowerCase();
  return [project.title, project.client, project.summary, project.tags.join(" "), project.stack.join(" ")]
    .join(" ")
    .toLowerCase()
    .includes(query);
}

export function ProjectsExplorer() {
  const {
    filters,
    queryFilters,
    page,
    pageSize,
    isDirty,
    setPage,
    updateFilters,
    resetFilters,
  } = useProjectControls();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const projectsData = useMemo(() => {
    let filtered = PROJECTS.filter((project) => matchesText(project, queryFilters.search));

    if (queryFilters.category !== "All") {
      filtered = filtered.filter((project) => project.category === queryFilters.category);
    }

    if (queryFilters.status !== "All") {
      filtered = filtered.filter((project) => project.status === queryFilters.status);
    }

    if (queryFilters.featuredOnly) {
      filtered = filtered.filter((project) => project.featured);
    }

    filtered = [...filtered].sort((left, right) => {
      if (queryFilters.sortBy === "alphabetical") {
        return left.title.localeCompare(right.title);
      }

      if (queryFilters.sortBy === "impact") {
        return impactScore(right) - impactScore(left);
      }

      return right.year - left.year;
    });

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const safePage = Math.min(Math.max(page, 1), totalPages);
    const startIndex = (safePage - 1) * pageSize;

    return {
      items: filtered.slice(startIndex, startIndex + pageSize),
      total,
      page: safePage,
      pageSize,
      totalPages,
    };
  }, [page, pageSize, queryFilters]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4">
          <div className="surface-subtle flex flex-col gap-4 border-primary/14 bg-background/34 p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Layers3Icon className="size-4.5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Project controls</p>
                  <p className="text-sm font-medium text-foreground/72">
                    Browse the archive by category.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {isDirty ? (
                  <ConfirmationDialog
                    trigger={
                      <Button type="button" variant="ghost" className="rounded-full">
                        Reset filters
                      </Button>
                    }
                    title="Reset filters?"
                    description="This will clear the current search, category, status, and sort settings."
                    confirmLabel="Reset"
                    onConfirm={resetFilters}
                  />
                ) : null}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <Tabs
                value={filters.category}
                onValueChange={(value) =>
                  updateFilters({ category: value as typeof filters.category })
                }
              >
                <TabsList variant="line" className="w-full flex-wrap justify-start">
                  {PROJECT_CATEGORY_OPTIONS.map((option) => (
                    <TabsTrigger key={option.value} value={option.value}>
                      {option.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-2 rounded-full border-primary/18 bg-background/40 px-3 py-1 font-medium text-foreground/82">
                  <SparklesIcon className="size-3.5 text-primary" />
                  {projectsData.total} results
                </Badge>
                {filters.featuredOnly ? (
                  <Badge variant="secondary" className="rounded-full font-medium">
                    Featured only
                  </Badge>
                ) : null}
              </div>
            </div>
          </div>

          {projectsData.items.length === 0 ? (
            <EmptyState
              title="No projects match the current filters"
              description="Broaden the search query, switch categories, or remove the featured-only filter to see more work."
              actionLabel="Clear filters"
              onAction={resetFilters}
            />
          ) : (
            <>
              <div className="grid gap-4 lg:grid-cols-2">
                {projectsData.items.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>

              <Pagination
                page={projectsData.page}
                totalPages={projectsData.totalPages}
                onPageChange={setPage}
              />
            </>
          )}
      </div>

      <Sheet
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      >
        <SheetContent side="right" className="w-full max-w-3xl">
          {selectedProject ? (
            <>
              <SheetHeader>
                <SheetTitle>{selectedProject.title}</SheetTitle>
                <SheetDescription>{selectedProject.summary}</SheetDescription>
              </SheetHeader>
              <ProjectDrawerContent project={selectedProject} />
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
}
