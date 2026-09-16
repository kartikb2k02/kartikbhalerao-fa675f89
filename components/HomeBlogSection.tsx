import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { BlogListing } from "@/components/BlogListing";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);
const sinceYear = Math.min(...publishedPosts.map((post) => new Date(post.date).getFullYear()));
const recentPosts = [...publishedPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 4);

export function HomeBlogSection() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-3">
          <h2 className="heading-display text-[32px] sm:text-[44px] text-foreground leading-tight">
            I write.
          </h2>
          <span className="label-mono text-[12px] text-muted-foreground">
            {publishedPosts.length} posts / since {sinceYear}
          </span>
        </div>
        <p className="text-muted-foreground text-[15px] sm:text-[16px] mb-10 max-w-lg">
          Blogs on AI-first product strategy, prioritization, and lessons from building products.
        </p>

        <BlogListing posts={recentPosts} />

        <Link
          href="/blog"
          className="label-mono inline-flex items-center gap-2 mt-8 text-[12px] text-foreground hover:text-primary transition-colors duration-200"
        >
          View all posts
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
