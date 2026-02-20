import { useState, useEffect, useMemo } from "react";
import { ArrowLeft, Calendar, Clock, ArrowRight, ArrowUp, Tag, Linkedin, Link2, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { toast } from "sonner";

interface BlogPostDetailProps {
  post: BlogPost;
  content: string;
  onBack: () => void;
}

export const BlogPostDetail = ({ post, content, onBack }: BlogPostDetailProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${post.id}` : "";

  const goToX = () => {
    window.open("https://x.com/kartikbhalerao", "_blank", "noopener,noreferrer");
  };

  const goToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kartik-bhalerao/", "_blank", "noopener,noreferrer");
  };

  const copyLink = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true);
        toast.success("Link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const el = document.createElement("textarea");
      el.value = shareUrl;
      el.style.position = "fixed";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.focus();
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const readTimeMinutes = useMemo(() => {
    const match = post.readTime.match(/(\d+)/);
    return match ? parseInt(match[1]) : 5;
  }, [post.readTime]);

  const timeRemaining = useMemo(() => {
    const remaining = Math.ceil(readTimeMinutes * (1 - scrollProgress / 100));
    return remaining > 0 ? remaining : 0;
  }, [readTimeMinutes, scrollProgress]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      setShowBackToTop(scrollTop > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-border/40">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Reading progress pill */}
      <div
        className={`fixed top-20 right-4 z-40 flex items-center gap-2 transition-all duration-300 ${
          scrollProgress > 5 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm border border-border/50 shadow-md">
          <Clock className="w-3 h-3 text-violet-500" />
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
            {timeRemaining > 0 ? `${timeRemaining} min left` : "Done!"}
          </span>
          <span className="w-px h-3 bg-slate-200 dark:bg-slate-600" />
          <span className="text-xs font-semibold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 text-slate-600 dark:text-slate-300 text-sm font-medium shadow hover:bg-white/80 dark:hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to posts
        </button>

        {/* Header Card */}
        <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl overflow-hidden mb-6 group">

          {/* Banner Image */}
          {post.image && (
            <div className="relative w-full h-52 sm:h-72 lg:h-88 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-violet-700 dark:text-violet-300 border-0 shadow-md px-3 py-1 text-xs font-semibold">
                  {post.category}
                </Badge>
              </div>

              {/* Title overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-lg">
                  {post.title}
                </h1>
              </div>
            </div>
          )}

          {/* Post Meta */}
          <div className="p-6 sm:p-8">
            {/* Excerpt */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 border-l-4 border-violet-400 pl-4 italic">
              {post.excerpt}
            </p>

            {/* Author Row */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-base shadow-md shadow-violet-500/20 flex-shrink-0">
                KB
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-sm">Kartik Bhalerao</div>
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-5" />

            {/* Tags + Share */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-violet-200 dark:border-violet-700/50 text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 text-xs cursor-default hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goToX}
                  title="X (Twitter)"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-semibold bg-transparent hover:bg-slate-900 hover:border-slate-900 hover:text-white dark:hover:bg-white dark:hover:border-white dark:hover:text-slate-900 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Post</span>
                </button>
                <button
                  onClick={goToLinkedIn}
                  title="LinkedIn"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#0A66C2] text-[#0A66C2] text-xs font-semibold bg-transparent hover:bg-[#0A66C2] hover:text-white active:scale-95 transition-all duration-200"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
                <div
                  className="p-[1.5px] rounded-lg bg-gradient-to-r from-[#22c55e] via-[#3b82f6] to-[#8b5cf6] active:scale-95 transition-transform duration-200 cursor-pointer"
                >
                  <button
                    onClick={copyLink}
                    title="Copy link"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-xs font-semibold w-full transition-colors duration-200 ${
                      copied
                        ? "bg-transparent text-white"
                        : "bg-white dark:bg-card text-violet-600 dark:text-violet-400 hover:bg-transparent hover:text-white"
                    }`}
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied!" : "Copy link"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-8 mb-4 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 pb-2 border-b border-slate-200 dark:border-slate-700">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-slate-100 mt-6 mb-3">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 mt-4 mb-2">
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className="text-base text-slate-700 dark:text-slate-300 leading-7 mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside ml-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside ml-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="text-base leading-7 pl-1">{children}</li>,
              img: ({ src, alt }) => (
                <figure className="my-6">
                  <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                    <img src={src} alt={alt || ""} className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                  {alt && alt !== "image" && (
                    <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">{alt}</figcaption>
                  )}
                </figure>
              ),
              table: ({ children }) => (
                <div className="my-6 overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-slate-100 dark:bg-slate-700">{children}</thead>,
              tbody: ({ children }) => <tbody className="bg-card">{children}</tbody>,
              tr: ({ children }) => (
                <tr className="border-b border-slate-200 dark:border-slate-600 last:border-b-0">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-600 last:border-r-0">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-600 last:border-r-0">
                  {children}
                </td>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-violet-400 bg-violet-50/50 dark:bg-violet-900/20 pl-4 py-3 my-6 rounded-r-lg">
                  <div className="text-slate-700 dark:text-slate-300 italic">{children}</div>
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-violet-600 dark:text-violet-400 hover:underline"
                >
                  {children}
                </a>
              ),
              code: ({ children, className }) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm text-slate-800 dark:text-slate-200">
                    {children}
                  </code>
                ) : (
                  <code className={className}>{children}</code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-slate-900 dark:bg-slate-950 p-4 rounded-lg overflow-x-auto my-4 text-sm">
                  {children}
                </pre>
              ),
              iframe: ({ src, title, ...props }) => (
                <div className="my-6 relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={src}
                    title={title || ""}
                    className="absolute inset-0 w-full h-full rounded-lg border border-slate-200 dark:border-slate-700"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ),
              hr: () => <hr className="border-slate-200 dark:border-slate-700 my-8" />,
              strong: ({ children }) => (
                <strong className="font-semibold text-slate-900 dark:text-white">{children}</strong>
              ),
              em: ({ children }) => <em className="italic text-slate-600 dark:text-slate-400">{children}</em>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        title="Back to top"
      >
        <div className="relative w-11 h-11 rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-[2px] shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300">
          <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
            <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>
      </button>
    </>
  );
};
