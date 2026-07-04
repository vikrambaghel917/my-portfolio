import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRightIcon,
  BriefcaseBusinessIcon,
  GlobeIcon,
  MapPinIcon,
  SmartphoneIcon,
} from "lucide-react";
import { PageHeader } from "@/components/common/page-header";
import { SERVICE_AREAS, getServiceAreaBySlug } from "@/constants/local-seo";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { absoluteUrl } from "@/lib/site";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

const LOCATION_SERVICES = [
  {
    title: "Website Development",
    description: "Business websites, service pages, portfolios, and company websites built for conversion and local search visibility.",
    icon: GlobeIcon,
  },
  {
    title: "Web App Development",
    description: "Custom admin dashboards, internal tools, SaaS MVPs, and client portals with clean frontend and backend integration.",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Mobile App Development",
    description: "React Native and Expo apps for Android and iOS with production-ready UI, API integration, and scalable app structure.",
    icon: SmartphoneIcon,
  },
];

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return {};
  }

  const title = `Website Developer in ${area.city}, ${area.district}`;
  const description = `Website developer, web app developer, and mobile app developer serving ${area.city}, ${area.district}, Chhattisgarh for business websites, dashboards, e-commerce, and custom software projects.`;

  return {
    title,
    description,
    keywords: [
      `website developer in ${area.city}`,
      `web developer in ${area.city}`,
      `website development in ${area.district}`,
      `full stack developer in ${area.city}`,
      `mobile app developer in ${area.city}`,
    ],
    alternates: {
      canonical: absoluteUrl(`/locations/${area.slug}`),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(`/locations/${area.slug}`),
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="app-shell space-y-8 py-8 sm:py-12 lg:py-16">
      <PageHeader
        eyebrow="Service Area"
        title={
          <>
            <span className="text-primary">Website developer in {area.city}</span>{" "}
            <span>{area.district}, Chhattisgarh</span>
          </>
        }
        description={`I work with businesses in ${area.city}, ${area.district}, and nearby areas on websites, web applications, mobile apps, e-commerce systems, and backend-supported product development.`}
        actions={
          <Button asChild size="lg" className="rounded-full">
            <Link href={ROUTES.contact}>
              Hire for {area.city}
              <ArrowRightIcon />
            </Link>
          </Button>
        }
      />

      <Card className="surface surface-interactive overflow-hidden border-primary/14 bg-background/34 backdrop-blur-2xl">
        <CardContent className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[auto_1fr] lg:items-center">
          <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <MapPinIcon className="size-5" />
          </span>
          <p className="text-sm font-medium leading-7 text-foreground/82">
            Businesses searching for a developer in {area.city} usually need a clear website, a scalable dashboard,
            an e-commerce flow, or a mobile app MVP. This page exists to make that service fit explicit for{" "}
            {area.district} and nearby Chhattisgarh clients.
          </p>
        </CardContent>
      </Card>

      <section className="grid gap-5 lg:grid-cols-3">
        {LOCATION_SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <Card
              key={service.title}
              className="surface-subtle surface-interactive border-primary/12 bg-background/34"
            >
              <CardHeader className="space-y-4">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-medium leading-7 text-foreground/80">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <Card className="surface-subtle border-primary/12 bg-background/34">
        <CardHeader>
          <CardTitle>What clients in {area.city} can hire me for</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          {[
            `Business website development in ${area.city}`,
            `Custom web application development in ${area.district}`,
            `React and Next.js frontend development for ${area.city} businesses`,
            `Mobile app MVP development for startups in ${area.city}`,
            `Dashboard, admin panel, and backend integration work in ${area.district}`,
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1rem] border border-border/50 bg-background/50 px-4 py-3 text-sm font-medium text-foreground/82"
            >
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
