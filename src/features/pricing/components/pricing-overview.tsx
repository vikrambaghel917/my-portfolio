import { IndianRupeeIcon, TimerIcon } from "lucide-react";
import { SERVICE_PACKAGES } from "@/constants/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";

export function PricingOverview() {
  return (
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
  );
}
