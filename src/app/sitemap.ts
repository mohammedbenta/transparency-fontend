import type { MetadataRoute } from "next";
import { services, doctors } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/services",
    "/doctors",
    "/about",
    "/contact",
    "/booking",
    "/faq",
    "/privacy",
    "/terms",
    ...services.map((s) => `/services/${s.slug}`),
    ...doctors.map((d) => `/doctors/${d.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
