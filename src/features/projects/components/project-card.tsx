import {
  ArrowUpRightIcon,
  BriefcaseBusinessIcon,
  CalendarRangeIcon,
  Layers3Icon,
} from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import type { ProjectItem } from "@/types/portfolio";
import { ProjectStatusBadge } from "@/features/projects/components/project-status-badge";

type ProjectCardProps = {
  project: ProjectItem;
  onOpen: (project: ProjectItem) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <Card className="surface surface-interactive relative h-full overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl">
      <div aria-hidden className="hero-orb -top-14 -right-10 size-28 bg-primary/12" />
      <CardHeader className="relative space-y-5 p-5">
        <div className="flex items-center justify-between gap-3">
          <ProjectStatusBadge status={project.status} />
          <span className="text-sm font-medium text-foreground/70">{project.year}</span>
        </div>
        <div className="space-y-3">
          <CardTitle className="text-2xl transition-colors group-hover/card:text-primary">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-foreground/74">
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusinessIcon className="size-4 text-primary" />
              {project.client}
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarRangeIcon className="size-4 text-primary" />
              {project.duration}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 px-5 pb-5">
        <p className="text-sm font-medium leading-7 text-foreground/82">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-medium text-foreground/78">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-background/46 px-3 py-2">
            <Layers3Icon className="size-4 text-primary" />
            {project.category}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-background/46 px-3 py-2">
            <ArrowUpRightIcon className="size-4 text-primary" />
            {project.role}
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border/50 bg-background/50 px-4 py-3 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                {metric.label}
              </p>
              <p className="mt-2 font-mono text-xl font-semibold text-foreground">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-5 pb-5">
        <Button type="button" className="rounded-full" onClick={() => onOpen(project)}>
          View details
        </Button>
      </CardFooter>
    </Card>
  );
}
