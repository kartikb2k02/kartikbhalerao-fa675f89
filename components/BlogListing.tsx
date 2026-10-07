"use client";

import { useMemo } from "react";
import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";
import { Reveal } from "@/components/Reveal";

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const isNew = (dateStr: string) =>
  Date.now() - new Date(dateStr).getTime() < 1000 * 60 * 60 * 24 * 30;

export function BlogListing({ posts }: { posts: BlogPost[] }) {
  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [posts]
  );

  return (
    <div className="flex flex-col">
      {sorted.map((post, i) => {
        const meta = (
          <div className="flex sm:flex-col items-baseline sm:items-start gap-3 sm:gap-1.5 pt-1">
            <span className="data-mono text-[11px] text-muted-foreground">
              {post.comingSoon ? "Soon" : formatDate(post.date)}
            </span>
            {post.comingSoon ? null : isNew(post.date) ? (
              <span className="label-mono text-[9px] text-primary">New</span>
            ) : (
              <span className="data-mono text-[11px] text-muted-foreground/50">
                {post.readTime.replace(" read", "")}
              </span>
            )}
          </div>
        );

        const body = (
          <div>
            <h2 className="heading-display text-[23px] sm:text-[30px] text-foreground leading-[1.15] group-hover:text-primary transition-colors duration-200">
              {post.title}
            </h2>
            <p className="text-[14.5px] text-muted-foreground leading-relaxed mt-2 max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        );

        const layout = "index-row group grid sm:grid-cols-[132px_1fr] gap-2 sm:gap-8 py-7";

        const row = post.comingSoon ? (
          <div className={`${layout} opacity-50`}>
            {meta}
            {body}
          </div>
        ) : (
          <Link href={`/blog/${post.slug}`} className={layout}>
            {meta}
            {body}
          </Link>
        );

        return (
          <Reveal key={post.id} delay={Math.min(i, 4) * 60}>
            {row}
          </Reveal>
        );
      })}

      {/* Closes the ruled list */}
      <div className="border-t border-border" />
    </div>
  );
}
