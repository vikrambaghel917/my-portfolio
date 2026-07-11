import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { ServicesOverview } from "@/features/services/components/services-overview";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website, App, and Software Development Services in Chhattisgarh",
  description:
    "Website development, web app development, mobile app development, e-commerce builds, and backend development services for businesses across Chhattisgarh.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
};

export default function ServicesPage() {
  return (
    <div className="app-shell space-y-8 py-8 sm:py-12 lg:py-16">
      <PageHeader
        eyebrow="Services"
        title={
          <>
            <span className="text-primary">Development services</span>{" "}
            <span>for web, mobile, backend, and product systems</span>
          </>
        }
        description="A client-focused overview of what I build, how each engagement is positioned, and which service is the right fit for the problem."
      />
      <ServicesOverview />
    </div>
  );
}
