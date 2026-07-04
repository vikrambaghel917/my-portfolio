import type { Metadata } from "next";
import { appHeading, appMono, appSans } from "@/app/fonts";
import { SERVICE_AREAS } from "@/constants/local-seo";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { PROFILE } from "@/constants/portfolio";
import { AppProviders } from "@/components/providers/app-providers";
import { absoluteUrl, getSiteUrl } from "@/lib/site";
import "./globals.css";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  url: absoluteUrl("/"),
  email: "mailto:baghelvikram917@gmail.com",
  jobTitle: PROFILE.role,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jagdalpur",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: PROFILE.name,
  },
  knowsAbout: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Firebase",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vikram Baghel Portfolio",
  url: absoluteUrl("/"),
  author: {
    "@type": "Person",
    name: PROFILE.name,
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: PROFILE.name,
  url: absoluteUrl("/"),
  image: absoluteUrl("/me.png"),
  email: "baghelvikram917@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jagdalpur",
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": "City",
    name: area.city,
  })),
  sameAs: SOCIAL_LINKS.filter((item) => item.label !== "Email").map((item) => item.href),
  knowsAbout: [
    "Website Development",
    "Web Application Development",
    "Mobile App Development",
    "E-Commerce Development",
    "Backend Development",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Firebase",
    "TypeScript",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Vikram Baghel | Full Stack Developer in Chhattisgarh",
    template: "%s | Vikram Baghel",
  },
  description:
    "Vikram Baghel is a full stack developer in Chhattisgarh building websites, web apps, mobile apps, e-commerce platforms, and backend systems for businesses across Raipur, Jagdalpur, Bilaspur, Durg, Korba, and nearby districts.",
  keywords: [
    "Vikram Baghel",
    "Vikram Baghel developer",
    "Vikram Baghel portfolio",
    "website developer in Chhattisgarh",
    "web developer in Raipur",
    "website development in Jagdalpur",
    "full stack developer in Bilaspur",
    "mobile app developer in Chhattisgarh",
    "React developer in Chhattisgarh",
    "Next.js developer in Raipur",
    "freelance web developer in Bastar",
  ],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    title: "Vikram Baghel | Full Stack Developer in Chhattisgarh",
    description:
      "Web, mobile, e-commerce, and backend development services for businesses across Chhattisgarh.",
    siteName: "Vikram Baghel Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikram Baghel | Full Stack Developer in Chhattisgarh",
    description:
      "Web, mobile, e-commerce, and backend development services for businesses across Chhattisgarh.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${appSans.variable} ${appHeading.variable} ${appMono.variable} h-full max-w-full overflow-x-clip antialiased`}
    >
      <body className="min-h-full max-w-full overflow-x-clip bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
