import { PageHeader } from "@/components/common/page-header";
import { AboutOverview } from "@/features/about/components/about-overview";
import { ExperienceSection } from "@/features/home/components/experience-section";

export default function AboutPage() {
  return (
    <div className="app-shell space-y-8 py-8 sm:py-12 lg:py-16">
      <PageHeader
        eyebrow="About"
        title={
          <>
            <span className="text-primary">Frontend and backend</span>{" "}
            <span>full stack developer</span>
          </>
        }
        description="A concise view of who I am, how I build, and the product systems I focus on across web, mobile, and backend-connected delivery."
      />
      <AboutOverview />
      <ExperienceSection embedded />
    </div>
  );
}

