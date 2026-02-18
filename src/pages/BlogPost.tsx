import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Linkedin, Link2, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { BlogPostContent } from "@/components/BlogPostContent";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";
import { getMarkdownContent } from "@/utils/blogContent";
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(id || ""));
    if (foundPost) {
      setPost(foundPost);
      getMarkdownContent(foundPost.slug, foundPost).then(content => {
        setMarkdownContent(content);
      });
    }
  }, [id]);

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success("Link copied!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#f8f9fc' }}>
        <div className="text-center">
          <p className="text-gray-500 mb-4">Post not found</p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-foreground" style={{ backgroundColor: '#f8f9fc' }}>
      <Header />

      <div className="pt-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-10">

          {/* Back button */}
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          {/* Header */}
          <div className="mb-8">
            {/* Category */}
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Meta + Share row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={shareOnTwitter}
                  className="p-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-80 transition-opacity"
                  title="Share on X"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="p-2 rounded-lg bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={copyLink}
                  className={`p-2 rounded-lg transition-all ${copied ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          {/* Banner image */}
          {post.image && (
            <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-8">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          <BlogPostContent content={markdownContent} />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-xs text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-700">
                  #{tag}
                </Badge>
              ))}
            </div>
          )}

          {/* Read more on Medium */}
          <div className="mt-10 text-center">
            <a
              href="https://medium.com/@kartikbhalerao948"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
            >
              Read More on Medium
            </a>
          </div>
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default BlogPost;
