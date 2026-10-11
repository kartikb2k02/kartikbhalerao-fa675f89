import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Reveal } from "@/components/Reveal";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);

/**
 * The three most recent, skipping the three already standing in the Most Read
 * rail — the rail and this row are both "latest", so without the skip the
 * homepage prints the same three headlines twice.
 */
const sorted = [...publishedPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
const recent = sorted.slice(3, 6);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function NotebookSection() {
  if (recent.length === 0) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      <div className="max-w-[100rem] mx-auto">
        <div className="rule-heavy" />

        <div className="flex flex-wrap items-end justify-between gap-6 pt-6 pb-8">
          <div>
            <span className="kicker">The notebook</span>
            <h2 className="headline text-foreground text-[40px] sm:text-[68px] lg:text-[84px] mt-2">
              I write it down
            </h2>
          </div>
          <span className="dateline">
            {publishedPosts.length} essays · updated{" "}
            {formatDate(sorted[0].date)}
          </span>
        </div>

        <div className="grid md:grid-cols-3">
          {recent.map((post, i) => (
            <Reveal
              key={post.slug}
              delay={i * 90}
              className={
                i > 0
                  ? "md:col-rule md:pl-8 border-t border-border md:border-t-0 pt-8 md:pt-0 mt-8 md:mt-0"
                  : "md:pr-8"
              }
            >
              <article className="h-full">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <span className="kicker">{post.category}</span>

                  <h3 className="headline text-foreground text-[24px] sm:text-[28px] mt-2.5 mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>

                  <p className="text-[15px] leading-[1.6] text-foreground/70 mb-4 line-clamp-4">
                    {post.excerpt}
                  </p>

                  <span className="dateline">
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          href="/blog"
          className="label-mono inline-flex items-center gap-2 mt-10 text-[10px] text-foreground border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200"
        >
          All {publishedPosts.length} essays
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}
