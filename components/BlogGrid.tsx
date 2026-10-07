"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const isNew = (dateStr: string) =>
  Date.now() - new Date(dateStr).getTime() < 1000 * 60 * 60 * 24 * 30;

/**
 * The same card shape as /builds: banner in a fixed frame, then the meta
 * underneath. Banners come straight from each post's `image`.
 */
export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
      {sorted.map((post, i) => {
        const inner = (
          <>
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>

            <div className="pt-4 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="data-mono text-[11px] text-muted-foreground/60 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="data-mono text-[11px] text-muted-foreground truncate">
                    {post.comingSoon ? "Coming soon" : formatDate(post.date)}
                  </span>
                  {!post.comingSoon && isNew(post.date) && (
                    <span className="label-mono text-[9px] text-primary shrink-0">New</span>
                  )}
                </div>
                <ArrowUpRight className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground/50 group-hover:text-primary transition-colors" />
              </div>

              <h2 className="heading-display text-[23px] sm:text-[26px] leading-[1.1] text-foreground mb-3 transition-colors duration-200 group-hover:text-primary">
                {post.title}
              </h2>

              <p className="text-[14.5px] text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                {post.excerpt}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="label-mono text-[9px] text-primary">
                  {post.category}
                </span>
                <span className="data-mono text-[11px] text-muted-foreground/60">
                  {post.readTime}
                </span>
              </div>
            </div>
          </>
        );

        const className = "group flex flex-col";

        if (post.comingSoon) {
          return (
            <div key={post.id} className={`${className} opacity-55 cursor-default`}>
              {inner}
            </div>
          );
        }

        return (
          <Link key={post.id} href={`/blog/${post.slug}`} className={className}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
