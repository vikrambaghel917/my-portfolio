import { SectionHeader } from "@/components/common/section-header";
import { EXPERIENCE } from "@/constants/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import {
  BadgeCheckIcon,
  BriefcaseBusinessIcon,
  CalendarRangeIcon,
  SparklesIcon,
} from "lucide-react";

type ExperienceSectionProps = {
  embedded?: boolean;
};

export function ExperienceSection({ embedded = false }: ExperienceSectionProps) {
  return (
    <section className={cn("section-block", embedded ? "" : "app-shell")}>
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Experience"
          title="Professional experience across web, mobile, and Firebase-backed delivery"
          description="I've spent most of my time simplifying operational complexity into clearer interfaces and reusable engineering patterns."
        />
        <div className="grid gap-6">
          {EXPERIENCE.map((item, index) => (
            <Card
              key={`${item.company}-${item.period}`}
              className="surface surface-interactive relative overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl"
            >
              <div
                aria-hidden
                className={cn(
                  "hero-orb -top-14 right-0 size-28",
                  index === 0 ? "bg-primary/14" : "bg-primary/10",
                )}
              />
              <CardHeader className="relative gap-5 border-b border-border/45 p-5 lg:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/16 bg-primary/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      <BriefcaseBusinessIcon className="size-3.5" />
                      Experience {index + 1}
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl leading-tight">{item.role}</CardTitle>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/55 px-3 py-1.5 text-sm font-medium text-foreground/74">
                        <SparklesIcon className="size-4 text-primary" />
                        {item.company}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-2xl border border-primary/16 bg-background/60 px-4 py-2 text-sm font-medium text-foreground/78 shadow-theme-subtle">
                    <CalendarRangeIcon className="size-4 text-primary" />
                    {item.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative grid gap-5 p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
                <div className="rounded-[1.4rem] border border-primary/12 bg-background/50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Role summary
                  </p>
                  <p className="mt-3 text-sm font-medium leading-7 text-foreground/80">{item.summary}</p>
                </div>

                <div className="grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.25rem] border border-border/55 bg-background/58 px-4 py-4 transition-colors hover:border-primary/20 hover:bg-background/72"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/18 bg-primary/10 text-primary">
                          <BadgeCheckIcon className="size-4" />
                        </span>
                        <p className="text-sm font-medium leading-6 text-foreground/84">{highlight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
