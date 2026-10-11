import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { BlogCover } from "@/components/BlogCover";

/** Lowercase keys in the data; these are what a reader should see. */
export const CATEGORY_LABELS: Record<string, string> = {
  ai: "AI",
  strategy: "Strategy",
  analytics: "Analytics",
  research: "Research",
  leadership: "Leadership",
};

export const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export const isNew = (dateStr: string) =>
  Date.now() - new Date(dateStr).getTime() < 1000 * 60 * 60 * 24 * 30;

/**
 * One post as a hard-edged card, the same object the builds grid uses, so a
 * reader moving between /builds and /blog is looking at one system.
 */
export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const category = CATEGORY_LABELS[post.category] ?? post.category;

  const inner = (
    <>
      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-foreground">
        <BlogCover post={post} index={index} />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="kicker">{category}</span>
          {post.comingSoon ? (
            <span className="kicker kicker-muted">· Soon</span>
          ) : (
            isNew(post.date) && <span className="kicker">· New</span>
          )}
        </div>

        <h2 className="headline text-foreground text-[21px] sm:text-[23px] leading-[1.2] mb-2.5 transition-colors duration-200 group-hover:text-primary">
          {post.title}
        </h2>

        <p className="text-[14px] leading-[1.55] text-foreground/70 line-clamp-3 mb-4">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="dateline truncate">
            {post.comingSoon
              ? "Coming soon"
              : `${formatDate(post.date)} · ${post.readTime.replace(" read", "")}`}
          </span>
          {!post.comingSoon && (
            <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/40 transition-colors duration-200 group-hover:text-primary" />
          )}
        </div>
      </div>
    </>
  );

  if (post.comingSoon) {
    return (
      <div className="hard-card-static h-full flex flex-col overflow-hidden opacity-55">
        {inner}
      </div>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="hard-card group flex flex-col overflow-hidden h-full"
    >
      {inner}
    </Link>
  );
}
