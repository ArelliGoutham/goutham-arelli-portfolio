import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://goutham-arelli.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  return [
    { url: siteUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${siteUrl}/goutham_arelli_resume.pdf`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/llms.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/llms-full.txt`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
