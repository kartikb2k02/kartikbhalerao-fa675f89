import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { BlogListing } from "@/components/BlogListing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Blogs on AI-first product strategy, prioritization, user research, and lessons from building products — written by Product Manager Kartik Bhalerao.",
  path: "/blog",
});

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-28 space-y-14">
        <div className="flex flex-col items-center text-center space-y-4">
          <span className="label-mono text-[13px] text-black/50 dark:text-white/50">Writing</span>
          <h1 className="heading-display text-[42px] lg:text-[56px] text-black dark:text-white leading-none">
            Product Thinking
          </h1>
          <p className="text-[16px] text-black/42 dark:text-white/42 leading-relaxed max-w-[440px]">
            Thoughts on{' '}
            <span className="text-black/80 dark:text-white/80 font-semibold italic">product strategy</span>,{' '}
            <span className="text-black/80 dark:text-white/80 font-semibold italic">AI</span>, and building things people{' '}
            <span className="text-black/80 dark:text-white/80 font-semibold italic">actually love</span>.
          </p>
          <span className="label-mono text-[12px] text-black/25 dark:text-white/25 tabular-nums">
            {blogPosts.length} posts
          </span>
        </div>

        <BlogListing posts={blogPosts} />
      </main>

      <FooterSection />
    </div>
  );
}
