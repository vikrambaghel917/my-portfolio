import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { getFeaturedProjects } from "@/services/portfolio-service";
import { ContactCtaSection } from "@/features/home/components/contact-cta-section";
import { FeaturedProjectsSection } from "@/features/home/components/featured-projects-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website Developer in Chhattisgarh",
  description:
    "Website developer and full stack developer in Chhattisgarh building business websites, web apps, mobile apps, and e-commerce systems for clients across Raipur, Jagdalpur, Bilaspur, Durg, Korba, and nearby districts.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <SiteShell>
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ContactCtaSection />
    </SiteShell>
  );
}
