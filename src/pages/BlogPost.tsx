import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { BlogPostDetail } from "@/components/BlogPostDetail";
import { blogPosts } from "@/data/blogPosts";
import { getMarkdownContent } from "@/utils/blogContent";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (post) {
      getMarkdownContent(post.slug, post).then(setMarkdownContent);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
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

  const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://kartikbhalerao.com";
  const ogImage = post.image?.startsWith("http") ? post.image : `${baseUrl}${post.image}`;
  const ogUrl = `${baseUrl}/blog/${post.slug}`;

  return (
    <>
    <Helmet>
      <title>{post.title} | Kartik Bhalerao</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Productfolio | Kartik Bhalerao" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Dotted background — same as home/skills page */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgb(100 116 139 / 0.2) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10">
        <Header />
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
