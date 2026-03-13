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

  const shareUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${post.slug}` : "";

  const goToX = () => {
    const text = encodeURIComponent(`${post.title} by Kartik Bhalerao`);
    const url = encodeURIComponent(shareUrl);
    window.open(`https://x.com/intent/post?text=${text}&url=${url}`, "_blank", "noopener,noreferrer");
  };

  const goToLinkedIn = () => {
    const url = encodeURIComponent(shareUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "noopener,noreferrer");
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
            <div className="relative w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto block"
              />
              {/* Dark gradient overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

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
            {/* Excerpt / Tagline */}
            <div className="relative mb-6">
              <div className="absolute -top-2 left-2 text-6xl leading-none text-slate-300/60 dark:text-slate-500/50 font-serif select-none z-0">"</div>
              <p className="relative z-10 text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium px-6 pt-4 pb-5 rounded-lg backdrop-blur-md bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.06)] dark:shadow-[0_4px_24px_0_rgba(255,255,255,0.04)]">
                {post.excerpt}
              </p>
              <div className="absolute -bottom-3 right-3 text-6xl leading-none text-slate-300/60 dark:text-slate-500/50 font-serif select-none z-0">"</div>
            </div>

            {/* Author + Date + Tags row */}
            <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
              {/* Top: KB + Name + Date + ReadTime */}
              <div className="flex items-center gap-3">
                {/* KB Avatar */}
                <div className="w-11 h-11 rounded-full bg-black flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  KB
                </div>

                {/* Name + meta */}
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">Kartik Bhalerao</div>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                    <span className="w-px h-3 bg-slate-300 dark:bg-slate-600" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200 dark:bg-slate-700 my-3" />

              {/* Tags row */}
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 bg-black/5 dark:bg-white/10 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-5" />

            {/* Share Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/40">
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-white">Enjoyed this article?</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Share it with your network</p>
              </div>
              <div className="flex items-center gap-2.5">
                {/* X / Twitter */}
                <button
                  onClick={goToX}
                  title="Share on X"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-xs font-semibold shadow-sm hover:bg-slate-800 hover:shadow-md active:scale-95 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Post</span>
                </button>

                {/* LinkedIn */}
                <button
                  onClick={goToLinkedIn}
                  title="Share on LinkedIn"
                  className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold shadow-sm hover:bg-[#0958a8] hover:shadow-md active:scale-95 transition-all duration-200"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </button>

                {/* Copy Link */}
                <button
                  onClick={copyLink}
                  title="Copy link"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold shadow-sm border transition-all duration-200 active:scale-95 ${
                    copied
                      ? "bg-green-500 border-green-500 text-white hover:bg-green-600"
                      : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-400 hover:shadow-md"
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy link"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl p-6 sm:p-10 lg:p-12 mb-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-10 mb-5 first:mt-0 tracking-tight leading-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-12 mb-5 tracking-tight">
                  <span className="inline-block w-1 h-6 rounded-full bg-black dark:bg-white flex-shrink-0" />
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3 uppercase tracking-widest">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-5 mb-2">
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className="text-[16px] text-slate-600 dark:text-slate-300 leading-[1.85] mb-5">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="my-5 space-y-2.5 ml-1">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="my-5 space-y-2.5 ml-1 list-decimal list-outside pl-5 text-slate-600 dark:text-slate-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                  <span>{children}</span>
                </li>
              ),
              img: ({ src, alt }) => (
                <figure className="my-8">
                  <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-md">
                    <img src={src} alt={alt || ""} className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                  {alt && alt !== "image" && (
                    <figcaption className="text-center text-xs text-slate-400 dark:text-slate-500 mt-3 font-medium tracking-wide uppercase">{alt}</figcaption>
                  )}
                </figure>
              ),
              table: ({ children }) => (
                <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <table className="w-full text-sm border-collapse">
                    {children}
                  </table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-black dark:bg-white">{children}</thead>,
              tbody: ({ children }) => <tbody className="bg-card divide-y divide-slate-100 dark:divide-slate-800">{children}</tbody>,
              tr: ({ children }) => (
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">{children}</tr>
              ),
              th: ({ children }) => (
                <th className="px-5 py-3 text-left text-xs font-bold text-white dark:text-black uppercase tracking-widest border-r border-white/20 dark:border-black/20 last:border-r-0">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-5 py-3.5 text-sm text-slate-700 dark:text-slate-300 border-r border-slate-100 dark:border-slate-800 last:border-r-0">
                  {children}
                </td>
              ),
              blockquote: ({ children }) => (
                <blockquote className="relative border-l-[3px] border-black dark:border-white bg-slate-50 dark:bg-white/5 pl-5 pr-4 py-4 my-6 rounded-r-xl">
                  <div className="text-slate-700 dark:text-slate-200 text-[15px] leading-relaxed font-medium not-italic">{children}</div>
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-slate-900 dark:text-white font-semibold underline underline-offset-2 decoration-slate-300 dark:decoration-slate-600 hover:decoration-black dark:hover:decoration-white transition-all"
                >
                  {children}
                </a>
              ),
              code: ({ children, className }) => {
                const isInline = !className;
                return isInline ? (
                  <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded-md text-[13px] font-mono text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {children}
                  </code>
                ) : (
                  <code className={`${className} text-slate-200 text-[13px] font-mono`}>{children}</code>
                );
              },
              pre: ({ children }) => (
                <div className="relative my-6 group">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-zinc-800 dark:bg-zinc-900 rounded-t-xl border-b border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-500/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <span className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 text-xs text-zinc-400 font-mono">prompt</span>
                  </div>
                  <pre className="bg-zinc-900 dark:bg-zinc-950 px-5 py-4 rounded-b-xl overflow-x-auto text-[13px] leading-relaxed">
                    {children}
                  </pre>
                </div>
              ),
              iframe: ({ src, title, ...props }) => (
                <div className="my-8 relative w-full rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={src}
                    title={title || ""}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ),
              hr: () => (
                <div className="flex items-center gap-4 my-10">
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                  <div className="flex gap-1">
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  </div>
                  <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                </div>
              ),
              strong: ({ children }) => (
                <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>
              ),
              em: ({ children }) => <em className="italic text-slate-500 dark:text-slate-400">{children}</em>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-6 z-50 group transition-all duration-500 ${
          showBackToTop ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
        }`}
        title="Back to top"
      >
        {/* Circular SVG progress ring */}
        <div className="relative w-14 h-14">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
            {/* Track */}
            <circle
              cx="28" cy="28" r="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="text-slate-200 dark:text-slate-700"
            />
            {/* Progress */}
            <circle
              cx="28" cy="28" r="24"
              fill="none"
              stroke="url(#progressGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 24}`}
              strokeDashoffset={`${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`}
              className="transition-all duration-150 ease-out"
            />
            <defs>
              <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner button */}
          <div className="absolute inset-[6px] rounded-full bg-black dark:bg-slate-900 shadow-lg flex flex-col items-center justify-center gap-0.5 group-hover:bg-slate-800 dark:group-hover:bg-slate-700 transition-colors duration-200">
            <ArrowUp className="w-3.5 h-3.5 text-white group-hover:-translate-y-0.5 transition-transform duration-300" />
            <span className="text-[8px] font-bold text-white/70 leading-none tracking-wide uppercase">Top</span>
          </div>
        </div>
      </button>
    </>
  );
};
