import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GlobeIcon,
  IndianRupeeIcon,
  LayoutDashboardIcon,
  PackageCheckIcon,
  ServerCogIcon,
  SmartphoneIcon,
  TargetIcon,
  TimerIcon,
} from "lucide-react";
import Link from "next/link";
import { SERVICE_AREAS } from "@/constants/local-seo";
import {
  SERVICE_CATEGORIES,
  SERVICE_PACKAGES,
  SERVICE_POSITIONING,
} from "@/constants/services";
import { ExpertiseSection } from "@/features/home/components/expertise-section";
import { Badge } from "@/src/components/ui/badge";
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
      <Card className="surface surface-interactive overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl">
        <CardHeader className="relative space-y-4 p-6 lg:p-8">
          <div aria-hidden className="hero-orb -top-16 right-0 size-32 bg-primary/14" />
          <Badge variant="outline" className="w-fit rounded-full border-primary/20 bg-background/36 px-3 py-1 font-medium text-primary">
            Services
          </Badge>
          <CardTitle className="max-w-4xl text-2xl sm:text-3xl">
            Clear development services with scope, pricing, and delivery outcomes.
          </CardTitle>
          <p className="max-w-4xl text-sm font-medium leading-7 text-foreground/82">
            {SERVICE_POSITIONING}
          </p>
        </CardHeader>
      </Card>

      <section className="grid gap-4">
        <div className="space-y-2">
          <p className="text-label text-primary">Core Services</p>
          <h2 className="text-title text-foreground">What I can build for you</h2>
          <p className="max-w-3xl text-sm font-medium leading-7 text-foreground/78">
            Each service is scoped around a clear business outcome so clients can quickly understand the right fit.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
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

      <section className="grid gap-5">
        <div className="space-y-2">
          <p className="text-label text-primary">Packages</p>
          <h2 className="text-title text-foreground">Packages, pricing, and what you get</h2>
          <p className="max-w-3xl text-sm font-medium leading-7 text-foreground/78">
            These are starting prices for the most common builds. Final pricing depends on scope, integrations, and timeline.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {SERVICE_PACKAGES.map((servicePackage) => (
            <Card
              key={servicePackage.name}
              className="surface-subtle surface-interactive h-full border-primary/12 bg-background/34"
            >
              <CardHeader className="grid gap-4 p-5">
                <CardTitle className="text-lg">{servicePackage.name}</CardTitle>
                <div className="grid gap-3 rounded-[1.1rem] border border-primary/12 bg-background/46 p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <IndianRupeeIcon className="size-4" />
                    <p className="text-sm font-semibold">{servicePackage.price}</p>
                  </div>
                  <div className="flex items-center gap-2 text-foreground/78">
                    <TimerIcon className="size-4 text-primary" />
                    <p className="text-sm font-medium">{servicePackage.timeline}</p>
                  </div>
                  <p className="text-sm font-medium leading-6 text-foreground/76">{servicePackage.bestFor}</p>
                </div>
              </CardHeader>
              <CardContent className="grid gap-5 px-5 pb-5">
                <div className="grid gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Included</p>
                  {servicePackage.includes.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-border/50 bg-background/50 px-3 py-2 text-sm font-medium text-foreground/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="grid gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Client gets</p>
                  {servicePackage.deliverables.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-primary/14 bg-primary/8 px-3 py-2 text-sm font-medium text-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-5">
        <div className="space-y-2">
          <p className="text-label text-primary">Service Areas</p>
          <h2 className="text-title text-foreground">Chhattisgarh locations I target</h2>
          <p className="max-w-3xl text-sm font-medium leading-7 text-foreground/78">
            These location pages are tailored for businesses searching for website, app, and software development support in specific cities and districts.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/locations/${area.slug}`}
              className="rounded-[1rem] border border-border/50 bg-background/42 px-4 py-3 text-sm font-medium text-foreground/82 transition-colors hover:border-primary/30 hover:text-primary"
            >
              {area.city}
              <span className="mt-1 block text-xs font-medium text-foreground/60">
                {area.district}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
