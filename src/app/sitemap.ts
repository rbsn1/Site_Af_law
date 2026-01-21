import type { MetadataRoute } from "next";

import { services } from "@/data/services";
import { segments } from "@/data/segments";

const baseUrl = "https://www.exemplo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/servicos",
    "/para-quem-e",
    "/conteudos",
    "/materiais",
    "/sobre",
    "/agendar",
    "/privacidade",
    "/termos",
    "/cookies"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/servicos/${service.slug}`,
    lastModified: new Date()
  }));

  const segmentRoutes = segments.map((segment) => ({
    url: `${baseUrl}/para-quem-e/${segment.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...serviceRoutes, ...segmentRoutes];
}
