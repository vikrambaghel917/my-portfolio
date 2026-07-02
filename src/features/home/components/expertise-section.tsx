import {
  BoxesIcon,
  DatabaseZapIcon,
  Layers3Icon,
  RocketIcon,
  SmartphoneIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { CAPABILITIES } from "@/constants/portfolio";
import { Badge } from "@/src/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

const capabilityIcons = [
  RocketIcon,
  SmartphoneIcon,
  DatabaseZapIcon,
  BoxesIcon,
  Layers3Icon,
] as const;

export function ExpertiseSection() {
  const slidingCapabilities = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className="section-block">
      <div className="space-y-8">
        <div className="app-shell">
          <SectionHeader
            eyebrow="What I optimize for"
            title="Sharper systems, better product delivery"
            description="Frontend quality, backend efficiency, and codebase structure aligned for products that are easier to ship and easier to scale."
          />
        </div>

        <div className="pause-on-hover relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-linear-to-r from-background via-background/70 to-transparent sm:block sm:w-24"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-linear-to-l from-background via-background/70 to-transparent sm:block sm:w-24"
          />
          <div className="animate-marquee flex w-max gap-5 py-2">
            {slidingCapabilities.map((capability, index) => {
              const Icon = capabilityIcons[index % CAPABILITIES.length] ?? Layers3Icon;

              return (
                <Card
                  key={`${capability.title}-${index}`}
                  className="surface surface-interactive relative w-[19rem] shrink-0 overflow-hidden border-primary/14 bg-background/34 backdrop-blur-xl sm:w-[23rem] lg:w-[25rem]"
                >
                  <CardHeader className="relative space-y-5 p-6">
                    <div
                      aria-hidden
                      className="hero-orb -top-16 right-0 hidden size-32 bg-primary/14 sm:block"
                    />
                    <div className="relative flex items-center justify-between gap-4">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-theme-subtle">
                        <Icon className="size-5" />
                      </span>
                      <Badge variant="outline" className="border-primary/20 bg-background/36 text-primary">
                        0{(index % CAPABILITIES.length) + 1}
                      </Badge>
                    </div>
                    <div className="relative space-y-3">
                      <CardTitle className="text-xl text-foreground sm:text-2xl">
                        {capability.title}
                      </CardTitle>
                      <p className="text-sm leading-7 text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {capability.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[1.2rem] border border-border/50 bg-background/46 px-4 py-3 text-sm font-medium text-foreground backdrop-blur-xl"
                      >
                        {bullet}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
