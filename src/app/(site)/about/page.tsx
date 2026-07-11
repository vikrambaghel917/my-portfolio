import type { Metadata } from "next";
import { PageHeader } from "@/components/common/page-header";
import { AboutOverview } from "@/features/about/components/about-overview";
import { ExperienceSection } from "@/features/home/components/experience-section";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Vikram Baghel",
  description:
    "Learn about Vikram Baghel, a full stack developer in Chhattisgarh focused on React, Next.js, React Native, Node.js, Firebase, and scalable product delivery.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <div className="app-shell space-y-8 py-8 sm:py-12 lg:py-16">
      <PageHeader
        eyebrow="About"
        title={
          <>
            <span className="text-primary">full stack</span>{" "}
            <span>developer</span>
          </>
        }
        description="A concise view of who I am, how I build, and the product systems I focus on across web, mobile, and backend-connected delivery."
      />
      <AboutOverview />
      <ExperienceSection embedded />
    </div>
  );
}
