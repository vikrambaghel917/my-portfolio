import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { ROUTES } from "@/constants/routes";
import type { ProjectItem } from "@/types/portfolio";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

type FeaturedProjectsSectionProps = {
  projects: ProjectItem[];
};

export function FeaturedProjectsSection({
  projects,
}: FeaturedProjectsSectionProps) {
  return (
    <section className="app-shell section-block">
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Project Completed and Delivered"
          title="Projects"
          description="A few recent builds across web and mobile."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="surface surface-interactive h-full overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline" className="border-primary/20 bg-background/36">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-xl sm:text-2xl transition-colors group-hover/card:text-primary">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.2rem] border border-border/40 bg-background/38 px-4 py-3 backdrop-blur-xl"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-mono text-2xl font-semibold text-foreground">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild variant="outline" className="rounded-full">
          <Link href={ROUTES.projects}>
            View all projects
            <ArrowUpRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
