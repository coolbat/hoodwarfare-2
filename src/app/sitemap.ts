import type { MetadataRoute } from "next";
import { pages, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: site.verifiedIso,
    changeFrequency: page.path === "/updates/" ? "daily" : "weekly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
