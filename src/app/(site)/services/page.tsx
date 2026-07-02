import { PageHeader } from "@/components/common/page-header";
import { ServicesOverview } from "@/features/services/components/services-overview";

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
        description="A structured list of independent development services, productized packages, and delivery areas across websites, SaaS, mobile apps, APIs, dashboards, e-commerce, and architecture work."
      />
      <ServicesOverview />
    </div>
  );
}
