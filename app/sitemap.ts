import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";
import { BASE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);

/**
 * Static export, so this is the moment the site was generated. Honest for
 * routes with no date of their own: they changed when the build changed.
 */
const BUILT_AT = new Date();

/** The newest post is the best evidence of when /blog last changed. */
const latestPostDate = publishedPosts.reduce<string | undefined>(
  (newest, post) =>
    !newest || new Date(post.date) > new Date(newest) ? post.date : newest,
  undefined
);

const staticRoutes: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified: string | Date;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1, lastModified: BUILT_AT },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: latestPostDate ?? BUILT_AT,
  },
  {
    path: "/builds",
    changeFrequency: "monthly",
    priority: 0.9,
    lastModified: BUILT_AT,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: BUILT_AT,
  },
  {
    path: "/certifications",
    changeFrequency: "yearly",
    priority: 0.5,
    lastModified: BUILT_AT,
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.6,
    lastModified: BUILT_AT,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ path, ...rest }) => ({
      url: `${BASE_URL}${path}`,
      ...rest,
    })),

    ...publishedPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),

    ...caseStudies.map((cs) => ({
      url: `${BASE_URL}/builds/${cs.id}`,
      lastModified: BUILT_AT,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
