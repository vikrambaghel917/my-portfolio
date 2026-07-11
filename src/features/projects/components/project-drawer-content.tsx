import {
  BriefcaseBusinessIcon,
  CalendarRangeIcon,
  FlagIcon,
  Layers3Icon,
} from "lucide-react";
import { ProjectStatusBadge } from "@/features/projects/components/project-status-badge";
import { Badge } from "@/src/components/ui/badge";
import type { ProjectItem } from "@/types/portfolio";

type ProjectDrawerContentProps = {
  project: ProjectItem;
};

export function ProjectDrawerContent({
  project,
}: ProjectDrawerContentProps) {
  return (
    <div className="grid gap-6 overflow-y-auto px-4 pb-6">
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border/50">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid gap-3">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-2 rounded-full border-primary/18 bg-background/36 font-medium text-foreground/82">
            <Layers3Icon className="size-3.5 text-primary" />
            {project.category}
          </Badge>
          <ProjectStatusBadge status={project.status} />
        </div>
        <div className="grid gap-2">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-foreground/72">
            <BriefcaseBusinessIcon className="size-4 text-primary" />
            {project.client}
          </p>
          <p className="text-sm font-medium leading-7 text-foreground/82">{project.description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-border/50 bg-background/50 px-4 py-4 backdrop-blur-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
              {metric.label}
            </p>
            <p className="mt-2 font-mono text-2xl font-semibold text-foreground">
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        <article className="rounded-2xl border border-border/50 bg-background/40 p-4">
          <h3 className="font-semibold text-primary">Challenge</h3>
          <p className="mt-2 text-sm font-medium leading-7 text-foreground/80">{project.challenge}</p>
        </article>
        <article className="rounded-2xl border border-border/50 bg-background/40 p-4">
          <h3 className="font-semibold text-primary">Solution</h3>
          <p className="mt-2 text-sm font-medium leading-7 text-foreground/80">{project.solution}</p>
        </article>
        <article className="rounded-2xl border border-border/50 bg-background/40 p-4">
          <h3 className="font-semibold text-primary">Outcome</h3>
          <p className="mt-2 text-sm font-medium leading-7 text-foreground/80">{project.outcome}</p>
        </article>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
          <h3 className="font-semibold text-primary">Role and duration</h3>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium leading-7 text-foreground/80">
            <CalendarRangeIcon className="size-4 text-primary" />
            {project.role} · {project.duration}
          </p>
        </div>
        <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
          <h3 className="font-semibold text-primary">Stack</h3>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium leading-7 text-foreground/80">
            <FlagIcon className="size-4 text-primary" />
            {project.stack.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
