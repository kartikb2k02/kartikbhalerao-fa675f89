import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { BlogGrid } from "@/components/BlogGrid";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Blogs on AI-first product strategy, prioritization, user research, and lessons from building products, written by Product Manager Kartik Bhalerao.",
  path: "/blog",
});

export default function Blog() {
  const published = blogPosts.filter((p) => !p.comingSoon).length;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <PageHeader
          label="Writing"
          title={<>What I&apos;ve figured out<span className="text-primary">.</span></>}
          lede="Notes on building products: AI, prioritisation, user research, and the things that went wrong on the way."
          meta={`${published} posts`}
          container="max-w-[94rem]"
        />

        <div className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <BlogGrid posts={blogPosts} />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
