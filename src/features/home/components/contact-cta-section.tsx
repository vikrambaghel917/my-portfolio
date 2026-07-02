import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/common/section-header";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";

export function ContactCtaSection() {
  return (
    <section className="app-shell section-block">
      <Card className="surface surface-interactive overflow-hidden">
        <CardContent className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            eyebrow="Next step"
            title="Hiring or building something?"
            description="Let’s discuss the scope, timeline, and next step."
          />
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="rounded-full px-5">
              <Link href={ROUTES.contact}>
                Contact Vikram
                <ArrowRightIcon />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-5">
              <Link href={ROUTES.projects}>View project work</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
