import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  PackageCheckIcon,
  ServerCogIcon,
  SmartphoneIcon,
  TargetIcon,
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/constants/services";
import { ExpertiseSection } from "@/features/home/components/expertise-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

const serviceIcons = [
  GlobeIcon,
  LayoutDashboardIcon,
  PackageCheckIcon,
  SmartphoneIcon,
  ServerCogIcon,
  CodeXmlIcon,
  BriefcaseBusinessIcon,
] as const;

export function ServicesOverview() {
  return (
    <div className="grid min-w-0 gap-8">
      <section className="grid gap-4">
        <div className="space-y-2">
          <p className="text-label text-primary">Core Services</p>
          <h2 className="text-title text-foreground">What I can build for you</h2>
          <p className="max-w-3xl text-sm font-medium leading-7 text-foreground/78">
            Each service is scoped around a clear business outcome so clients can quickly understand the right fit.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];

            return (
              <Card
                key={category.title}
                className="surface surface-interactive overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl"
              >
                <CardHeader className="relative space-y-4 p-5">
                  <div aria-hidden className="hero-orb -top-12 right-0 size-24 bg-primary/12" />
                  <div className="relative flex items-center gap-3">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-theme-subtle">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="grid gap-4 px-5 pb-5">
                  <p className="text-sm font-medium leading-7 text-foreground/82">{category.summary}</p>
                  <div className="rounded-[1.1rem] border border-primary/12 bg-background/42 p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <TargetIcon className="size-4" />
                      <p className="text-xs font-semibold uppercase tracking-[0.18em]">Best for</p>
                    </div>
                    <p className="mt-2 text-sm font-medium leading-6 text-foreground/78">{category.idealFor}</p>
                  </div>
                  <div className="grid gap-2">
                    {category.includes.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1rem] border border-border/50 bg-background/50 px-3 py-2 text-sm font-medium text-foreground/82"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="min-w-0 overflow-hidden">
        <ExpertiseSection fullBleed />
      </div>
    </div>
  );
}
