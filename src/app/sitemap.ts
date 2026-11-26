import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: "2026-11-26", changeFrequency: "monthly", priority: 1 }];
}
