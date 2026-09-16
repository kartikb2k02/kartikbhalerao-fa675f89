import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";
import { BASE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);

const staticRoutes = ["/", "/about", "/builds", "/certifications", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({ url: `${BASE_URL}${route}` })),
    ...publishedPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.date,
    })),
    ...caseStudies.map((cs) => ({ url: `${BASE_URL}/builds/${cs.id}` })),
  ];
}
