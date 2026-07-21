import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { BlogPostDetail } from "@/components/BlogPostDetail";
import { blogPosts } from "@/data/blogPosts";
import { getMarkdownContent } from "@/utils/blogContent";
import { ArrowLeft } from "lucide-react";
import { SEO, BASE_URL } from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      getMarkdownContent(post.slug, post).then(setMarkdownContent);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <SEO
          title="Post Not Found"
          description="The blog post you're looking for doesn't exist."
          path={`/blog/${slug ?? ""}`}
          noindex
        />
        <div className="text-center">
          <p className="text-slate-500 mb-4">Post not found</p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const ogImage = post.image?.startsWith("http") ? post.image : `${BASE_URL}${post.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: ogImage,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Kartik Bhalerao",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Kartik Bhalerao",
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <>
    <SEO
      title={post.title}
      description={post.excerpt}
      path={`/blog/${post.slug}`}
      image={post.image}
      type="article"
      jsonLd={jsonLd}
    />
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">
      <div className="relative z-10">
        <Header scrollProgress={scrollProgress} />
        <div className="pt-16">
          <BlogPostDetail
            post={post}
            content={markdownContent}
            onBack={() => navigate("/blog")}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPost;
