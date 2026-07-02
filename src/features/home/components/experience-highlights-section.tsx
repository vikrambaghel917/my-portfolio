import { BriefcaseBusinessIcon, SparklesIcon } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { EXPERIENCE } from "@/constants/portfolio";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

export function ExperienceHighlightsSection() {
  return (
    <section className="app-shell section-block">
      <div className="space-y-8">
        <SectionHeader
          eyebrow="Experience"
          title="Professional experience across web, mobile, and Firebase-backed delivery"
          description="My work has centered on React, React Native, frontend architecture, and production-ready integration between UI layers and backend systems."
        />
        <div className="relative grid gap-6">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-6 hidden w-px bg-linear-to-b from-primary/50 via-primary/18 to-transparent lg:block"
          />
          {EXPERIENCE.map((item, index) => (
            <Card
              key={`${item.company}-${item.period}`}
              className="surface surface-interactive relative overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl"
            >
              <div
                aria-hidden
                className="hero-orb -top-14 -right-8 size-28 bg-primary/12"
              />
              <CardHeader className="relative grid gap-5 p-6 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                <div className="hidden lg:flex">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/22 bg-primary/10 text-primary shadow-theme-subtle">
                    <BriefcaseBusinessIcon className="size-5" />
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="border-primary/20 bg-background/36 text-primary">
                      0{index + 1}
                    </Badge>
                    <p className="text-sm font-medium text-muted-foreground">{item.period}</p>
                  </div>
                  <div>
                    <CardTitle className="text-xl sm:text-2xl">{item.role}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </div>
                <div className="grid gap-2 lg:justify-items-end">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Delivery focus
                  </p>
                  <p className="max-w-xs text-sm leading-6 text-muted-foreground lg:text-right">
                    {item.summary}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="relative px-6 pb-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.25rem] border border-border/50 bg-background/50 p-4 backdrop-blur-xl"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/18 bg-primary/10 text-primary">
                          <SparklesIcon className="size-4" />
                        </span>
                        <p className="text-sm leading-6 text-foreground">{highlight}</p>
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
