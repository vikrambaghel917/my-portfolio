import {
  BotMessageSquareIcon,
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  PackageCheckIcon,
  ServerCogIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SparklesIcon,
} from "lucide-react";
import {
  SERVICE_CATEGORIES,
  SERVICE_PACKAGES,
  SERVICE_POSITIONING,
} from "@/constants/services";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

const serviceIcons = [
  GlobeIcon,
  LayoutDashboardIcon,
  BriefcaseBusinessIcon,
  SmartphoneIcon,
  ServerCogIcon,
  CodeXmlIcon,
  SparklesIcon,
  ShieldCheckIcon,
  PackageCheckIcon,
  BotMessageSquareIcon,
] as const;

export function ServicesOverview() {
  return (
    <div className="grid gap-8">
      <Card className="surface surface-interactive overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl">
        <CardHeader className="relative space-y-4 p-6 lg:p-8">
          <div aria-hidden className="hero-orb -top-16 right-0 size-32 bg-primary/14" />
          <Badge variant="outline" className="w-fit rounded-full border-primary/20 bg-background/36 px-3 py-1 font-medium text-primary">
            Service Positioning
          </Badge>
          <CardTitle className="max-w-4xl text-2xl sm:text-3xl">
            Product-focused development services for startups, businesses, and custom internal tools.
          </CardTitle>
          <p className="max-w-4xl text-sm font-medium leading-7 text-foreground/82">
            {SERVICE_POSITIONING}
          </p>
        </CardHeader>
      </Card>

      <section className="grid gap-5 lg:grid-cols-2">
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
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Service Area
                    </p>
                    <CardTitle className="mt-1 text-xl">{category.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} variant="secondary" className="font-medium">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-5">
        <div className="space-y-2">
          <p className="text-label text-primary">Productized Packages</p>
          <h2 className="text-title text-foreground">Fixed-scope packages for faster delivery</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_PACKAGES.map((servicePackage) => (
            <Card
              key={servicePackage.name}
              className="surface-subtle surface-interactive h-full border-primary/12 bg-background/34"
            >
              <CardHeader className="p-5">
                <CardTitle className="text-lg">{servicePackage.name}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 px-5 pb-5">
                {servicePackage.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-border/50 bg-background/50 px-3 py-2 text-sm font-medium text-foreground/80"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
