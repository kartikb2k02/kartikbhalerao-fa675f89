import type { Metadata } from "next";
import { blogPosts } from "@/data/blogPosts";
import { getMarkdownContent } from "@/lib/getMarkdownContent";
import { BlogPostDetail } from "@/components/BlogPostDetail";
import { pageMetadata, toOgImage, absoluteUrl, BASE_URL } from "@/lib/seo";

const publishedPosts = blogPosts.filter((post) => !post.comingSoon);

export function generateStaticParams() {
  return publishedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return pageMetadata({
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
      path: `/blog/${slug}`,
      noindex: true,
    });
  }

  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: toOgImage(post.image, post.ogImage),
    type: "article",
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 mb-4">Post not found</p>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  const content = getMarkdownContent(post.slug, post);
  const ogImage = absoluteUrl(toOgImage(post.image, post.ogImage));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: ogImage,
    datePublished: post.date,
    author: { "@type": "Person", name: "Kartik Bhalerao", url: BASE_URL },
    publisher: { "@type": "Person", name: "Kartik Bhalerao", url: BASE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/blog/${post.slug}` },
  };

  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <div className="min-h-screen w-full text-foreground relative bg-background">
        <div className="relative z-10 pt-16">
          <BlogPostDetail post={post} content={content} />
        </div>
      </div>
    </>
  );
}
