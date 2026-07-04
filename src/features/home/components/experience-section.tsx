import { SectionHeader } from "@/components/common/section-header";
import { EXPERIENCE } from "@/constants/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";

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
        <div className="grid gap-5">
          {EXPERIENCE.map((item) => (
            <Card key={`${item.company}-${item.period}`} className="surface-subtle surface-interactive">
              <CardHeader className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <CardTitle className="text-xl">{item.role}</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{item.period}</p>
              </CardHeader>
              <CardContent className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                <p className="text-sm leading-7 text-muted-foreground">{item.summary}</p>
                <ul className="grid gap-3">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-[1.2rem] border border-border/70 bg-background/75 px-4 py-3 text-sm leading-6 text-foreground"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
