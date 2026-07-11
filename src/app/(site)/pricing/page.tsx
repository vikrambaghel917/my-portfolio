import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { PricingOverview } from "@/features/pricing/components/pricing-overview";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing for Websites, Web Apps, Mobile Apps, and Software Development",
  description:
    "Starting pricing for landing pages, business websites, web app MVPs, e-commerce systems, mobile apps, and monthly support.",
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
};

export default function PricingPage() {
  return (
    <div className="app-shell space-y-8 py-8 sm:py-12 lg:py-16">
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            <span className="text-primary">Project pricing</span>{" "}
            <span>for websites, apps, and product systems</span>
          </>
        }
        description="Starting packages for the most common builds. Final cost depends on product scope, integrations, revisions, and delivery timeline."
      />
      <PricingOverview />
    </div>
  );
}
