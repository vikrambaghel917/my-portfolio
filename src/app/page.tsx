import { SiteShell } from "@/components/layout/site-shell";
import { getFeaturedProjects } from "@/services/portfolio-service";
import { ContactCtaSection } from "@/features/home/components/contact-cta-section";
import { ExperienceHighlightsSection } from "@/features/home/components/experience-highlights-section";
import { ExpertiseSection } from "@/features/home/components/expertise-section";
import { FeaturedProjectsSection } from "@/features/home/components/featured-projects-section";
import { HeroSection } from "@/features/home/components/hero-section";

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <SiteShell>
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <ExpertiseSection />
      <ExperienceHighlightsSection />
      <ContactCtaSection />
    </SiteShell>
  );
}
