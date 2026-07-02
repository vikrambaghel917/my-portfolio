import {
  BriefcaseBusinessIcon,
  FolderKanbanIcon,
  SparklesIcon,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { ProjectsExplorer } from "@/features/projects/components/projects-explorer";
import { PROJECTS } from "@/constants/projects";
import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import { formatCompactNumber } from "@/utils/format";

const projectStats = [
  {
    label: "Projects in archive",
    value: formatCompactNumber(PROJECTS.length),
    detail: "Shipped web and mobile applications.",
    icon: FolderKanbanIcon,
  },
  {
    label: "Live projects",
    value: formatCompactNumber(PROJECTS.filter((project) => project.status === "Live").length),
    detail: "Applications currently active in delivery.",
    icon: BriefcaseBusinessIcon,
  },
  {
    label: "Featured case studies",
    value: formatCompactNumber(PROJECTS.filter((project) => project.featured).length),
    detail: "Highlighted builds with stronger impact.",
    icon: SparklesIcon,
  },
];

export default function ProjectsPage() {
  return (
    <div className="app-shell space-y-8 py-8 sm:py-12 lg:py-16">
      <PageHeader
        eyebrow="Project archive"
        title={
          <>
            <span className="text-primary">Web and mobile</span>{" "}
            <span>applications</span>
          </>
        }
        description="Selected builds focused on frontend quality, delivery, and maintainability."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {projectStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card
              key={stat.label}
              className="surface surface-interactive overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl"
            >
              <CardContent className="relative flex items-start gap-4 p-4">
                <div
                  aria-hidden
                  className="hero-orb -top-10 right-0 size-20 bg-primary/14"
                />
                <span className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-theme-subtle">
                  <Icon className="size-5" />
                </span>
                <div className="relative min-w-0 space-y-1.5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {stat.label}
                  </p>
                  <CardTitle className="font-mono text-3xl font-bold leading-none text-foreground">
                    {stat.value}
                  </CardTitle>
                  <p className="text-sm font-medium leading-6 text-foreground/80">
                    {stat.detail}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <ProjectsExplorer />
    </div>
  );
}
