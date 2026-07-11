import Image from "next/image";
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
      <div aria-hidden className="hero-orb -top-14 -right-10 size-24 bg-primary/12" />
      <div className="border-b border-border/45 p-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-[1.03]"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        </div>
      </div>
      <CardHeader className="relative space-y-4 px-4 pt-4 pb-0">
        <div className="flex items-center justify-between gap-3">
          <ProjectStatusBadge status={project.status} />
          <span className="text-sm font-medium text-foreground/70">{project.year}</span>
        </div>
        <div className="space-y-2">
          <CardTitle className="text-xl transition-colors group-hover/card:text-primary">
            {project.title}
          </CardTitle>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-foreground/74 sm:text-sm">
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
      <CardContent className="space-y-4 px-4 pt-4 pb-4">
        <p className="text-sm font-medium leading-6 text-foreground/82">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-foreground/78 sm:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-background/46 px-3 py-1.5">
            <Layers3Icon className="size-4 text-primary" />
            {project.category}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-background/46 px-3 py-1.5">
            <ArrowUpRightIcon className="size-4 text-primary" />
            {project.role}
          </span>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-border/50 bg-background/50 px-3 py-2.5 backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                {metric.label}
              </p>
              <p className="mt-1.5 font-mono text-lg font-semibold text-foreground">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 px-4 pb-4">
        <Button type="button" size="sm" className="rounded-full" onClick={() => onOpen(project)}>
          View details
        </Button>
        <Button asChild type="button" size="sm" variant="outline" className="rounded-full">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live link
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
