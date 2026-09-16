"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import type { BlogPost } from "@/data/blogPosts";

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const isNew = (dateStr: string) =>
  Date.now() - new Date(dateStr).getTime() < 1000 * 60 * 60 * 24 * 30;

export function BlogListing({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();

  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts]
  );

  return (
    <div className="flex flex-col">
      {sorted.map((post) => (
        <article
          key={post.id}
          onClick={() => !post.comingSoon && router.push(`/blog/${post.slug}`)}
          className={`group grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-8 py-7 border-t border-border last:border-b ${
            post.comingSoon ? "cursor-default opacity-60" : "cursor-pointer"
          }`}
        >
          <div className="label-mono text-[11px] text-muted-foreground pt-1">
            {post.comingSoon ? "Coming soon" : formatDate(post.date)}
            {!post.comingSoon && isNew(post.date) && (
              <span className="text-primary"> · New</span>
            )}
          </div>

          <div>
            <h2 className="heading-display text-[22px] sm:text-[28px] text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
              {post.title}
            </h2>
            <p className="text-[14px] text-muted-foreground leading-relaxed mt-2 max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
