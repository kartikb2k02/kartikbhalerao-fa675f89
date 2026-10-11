"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import {
  BlogCard,
  CATEGORY_LABELS,
  formatDate,
  isNew,
} from "@/components/BlogCard";
import { BlogCover } from "@/components/BlogCover";
import { Reveal } from "@/components/Reveal";

/**
 * The lead story: newest published post, run wide with its banner beside the
 * headline. A flat grid of thirteen equal cards gives a reader no way in; the
 * lead says where to start and the filters say what else there is.
 */
function LeadPost({ post, index }: { post: BlogPost; index: number }) {
  const category = CATEGORY_LABELS[post.category] ?? post.category;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="hard-card group grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] overflow-hidden mb-10 sm:mb-14"
    >
      <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px] overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-foreground">
        <BlogCover post={post} index={index} />
      </div>

      <div className="p-6 sm:p-9 flex flex-col justify-center">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="kicker">Latest</span>
          <span className="kicker kicker-muted">· {category}</span>
          {isNew(post.date) && <span className="kicker">· New</span>}
        </div>

        <h2 className="headline text-foreground text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.1] mb-4 transition-colors duration-200 group-hover:text-primary">
          {post.title}
        </h2>

        <p className="text-[15px] sm:text-[16px] leading-[1.65] text-foreground/75 mb-5 max-w-[58ch]">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-3">
          <span className="dateline">
            {formatDate(post.date)} · {post.readTime}
          </span>
          <ArrowUpRight className="w-4 h-4 text-foreground/40 transition-colors duration-200 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
}

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<string>("All");

  const sorted = useMemo(
    () =>
      [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [posts]
  );

  // Categories in descending volume, so the biggest desk reads first.
  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of posts) {
      if (p.comingSoon) continue;
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    }
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [posts]);

  const publishedCount = posts.filter((p) => !p.comingSoon).length;

  const lead = active === "All" ? sorted.find((p) => !p.comingSoon) : undefined;

  const rest = useMemo(
    () =>
      sorted.filter((p) => {
        if (lead && p.id === lead.id) return false;
        return active === "All" || p.category === active;
      }),
    [sorted, active, lead]
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 pb-8 sm:pb-10">
        <button
          type="button"
          onClick={() => setActive("All")}
          aria-pressed={active === "All"}
          className="chip"
        >
          All<span className="ml-1.5 opacity-55">{publishedCount}</span>
        </button>
        {categories.map(([key, count]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            aria-pressed={active === key}
            className="chip"
          >
            {CATEGORY_LABELS[key] ?? key}
            <span className="ml-1.5 opacity-55">{count}</span>
          </button>
        ))}
      </div>

      {lead && (
        <Reveal>
          <LeadPost post={lead} index={0} />
        </Reveal>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
        {rest.map((post, i) => (
          <Reveal key={post.id} delay={Math.min(i, 5) * 60}>
            <BlogCard post={post} index={sorted.indexOf(post)} />
          </Reveal>
        ))}
      </div>

      {rest.length === 0 && !lead && (
        <p className="dateline py-10">Nothing filed under this yet.</p>
      )}
    </>
  );
}
