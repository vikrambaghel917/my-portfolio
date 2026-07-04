import type { MetadataRoute } from "next";
import { SERVICE_AREAS } from "@/constants/local-seo";
import { ROUTES } from "@/constants/routes";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: ROUTES.home, priority: 1, changeFrequency: "weekly" as const },
    { path: ROUTES.services, priority: 0.9, changeFrequency: "weekly" as const },
    { path: ROUTES.projects, priority: 0.8, changeFrequency: "monthly" as const },
    { path: ROUTES.about, priority: 0.7, changeFrequency: "monthly" as const },
    { path: ROUTES.contact, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const areaRoutes = SERVICE_AREAS.map((area) => ({
    url: absoluteUrl(`/locations/${area.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...areaRoutes,
  ];
}
