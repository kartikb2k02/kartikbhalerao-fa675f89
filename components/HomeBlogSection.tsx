import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { BlogListing } from "@/components/BlogListing";
import { Reveal } from "@/components/Reveal";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);
const sinceYear = Math.min(...publishedPosts.map((post) => new Date(post.date).getFullYear()));
const recentPosts = [...publishedPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6);

export function HomeBlogSection() {
  return (
    <section className="w-full py-16 sm:py-24 border-t border-border">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex items-end justify-between flex-wrap gap-4 mb-10 sm:mb-14">
          <div>
            <p className="label-mono text-[10px] text-muted-foreground flex items-center gap-2.5 mb-6">
              <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
              What I think
            </p>
            <h2
              className="display-mega text-foreground"
              style={{ fontSize: "clamp(38px, 8vw, 118px)" }}
            >
              I write it down
            </h2>
          </div>
          <span className="data-mono text-[11px] text-muted-foreground">
            {publishedPosts.length} posts · since {sinceYear}
          </span>
        </Reveal>

        <BlogListing posts={recentPosts} />

        <Link
          href="/blog"
          className="label-mono inline-flex items-center gap-2 mt-10 text-[10px] text-foreground hover:text-primary transition-colors duration-200 border-b border-primary pb-1"
        >
          All {publishedPosts.length} posts
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
