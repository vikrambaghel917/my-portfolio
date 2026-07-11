import Image from "next/image";
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
          description="A few recent live enterprise platforms built for operations, CRM, and education management."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="surface surface-interactive h-full overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl">
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
              <CardHeader className="space-y-4 px-4 pt-4 pb-0">
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
              <CardContent className="space-y-4 px-4 pt-4 pb-4">
                <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-border/40 bg-background/38 px-3 py-2.5 backdrop-blur-xl"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="mt-1.5 font-mono text-xl font-semibold text-foreground">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
                <Button asChild size="sm" variant="outline" className="rounded-full">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Open live project
                    <ArrowUpRightIcon />
                  </a>
                </Button>
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
