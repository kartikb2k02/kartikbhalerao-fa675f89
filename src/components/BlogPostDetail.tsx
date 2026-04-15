import { useState, useEffect, useMemo } from "react";
import React from "react";
import { ArrowLeft, Clock, ArrowUp, Linkedin, Link2, Check, Calendar, BookOpen } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { toast } from "sonner";

// Recursively extract plain text from React children
const extractText = (node: React.ReactNode): string => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (React.isValidElement(node)) return extractText((node.props as any).children);
  return '';
};

// Recursively find the first href in a React tree
const extractLinkHref = (node: React.ReactNode): string => {
  if (!node) return '';
  if (React.isValidElement(node)) {
    const p = node.props as any;
    if (p.href) return p.href;
    return extractLinkHref(p.children);
  }
  if (Array.isArray(node)) {
    for (const n of node) { const h = extractLinkHref(n); if (h) return h; }
  }
  return '';
};

type CalloutType = { border: string; bg: string; pill: string; label: string };
const CALLOUT_MAP: { emoji: string; config: CalloutType }[] = [
  { emoji: '⚠', config: { border: 'border-amber-400', bg: 'bg-amber-50 dark:bg-amber-950/25', pill: 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300', label: '⚠️ Note' } },
  { emoji: '💡', config: { border: 'border-blue-400', bg: 'bg-blue-50 dark:bg-blue-950/25', pill: 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300', label: '💡 Insight' } },
  { emoji: '✅', config: { border: 'border-green-400', bg: 'bg-green-50 dark:bg-green-950/25', pill: 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300', label: '✅ Pro Tip' } },
  { emoji: '💰', config: { border: 'border-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-950/25', pill: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300', label: '💰 Cost' } },
  { emoji: '🎬', config: { border: 'border-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/25', pill: 'bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300', label: '🎬 Watch' } },
  { emoji: '📸', config: { border: 'border-slate-300 border-dashed', bg: 'bg-slate-50 dark:bg-slate-800/40', pill: 'bg-slate-100 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400', label: '📸 Screenshot' } },
  { emoji: '⏱', config: { border: 'border-cyan-400', bg: 'bg-cyan-50 dark:bg-cyan-950/25', pill: 'bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300', label: '⏱ At a glance' } },
  { emoji: '📦', config: { border: 'border-orange-400', bg: 'bg-orange-50 dark:bg-orange-950/25', pill: 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300', label: '📦 Resource' } },
];

interface BlogPostDetailProps {
  post: BlogPost;
  content: string;
  onBack: () => void;
}

export const BlogPostDetail = ({ post, content, onBack }: BlogPostDetailProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');

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

      <div className="max-w-3xl mx-auto p-4 sm:p-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/70 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/15 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/30 active:scale-95 transition-all duration-200 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
          All posts
        </button>

        {/* Unified Hero Card */}
        <div className="mb-6 rounded-2xl overflow-hidden border border-black/8 dark:border-white/8 shadow-xl">
          {/* Banner Image */}
          {post.image && (
            <div className="relative w-full overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-auto block" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
              {/* Category pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/25 text-white text-[11px] font-bold tracking-widest uppercase">
                  {post.category === 'ai' ? 'AI' : post.category}
                </span>
              </div>
              {/* Title on image */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pt-8 pb-5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
                  {post.title}
                </h1>
              </div>
            </div>
          )}

          {/* Author + meta + share — unified bottom bar */}
          <div className="bg-white dark:bg-zinc-900 px-5 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Author + date + read time */}
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                    KB
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-zinc-900" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-slate-900 dark:text-white leading-tight">Kartik Bhalerao</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
                      <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </span>
                    <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">
                      <BookOpen className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{post.readTime}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Share buttons */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium mr-1">Share</span>
                <button onClick={goToX} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black text-white text-[12px] font-bold hover:bg-slate-800 active:scale-95 transition-all duration-200">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Post on X
                </button>
                <button onClick={goToLinkedIn} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white text-[12px] font-bold hover:bg-[#0958a8] active:scale-95 transition-all duration-200">
                  <Linkedin className="w-3 h-3" />
                  LinkedIn
                </button>
                <button onClick={copyLink} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold border active:scale-95 transition-all duration-200 ${copied ? "bg-green-500 border-green-500 text-white" : "bg-white dark:bg-zinc-800 border-black/10 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-black/25"}`}>
                  {copied ? <Check className="w-3 h-3" /> : <Link2 className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy link"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 border-l-2 border-black/20 dark:border-white/20 pl-4 italic">
          {post.excerpt}
        </p>

        {/* Thin divider */}
        <div className="h-px bg-black/8 dark:bg-white/8 mb-6" />

        {/* Post Content */}
        <div className="bg-white dark:bg-zinc-800/80 rounded-2xl border border-black/8 dark:border-white/8 shadow-sm p-6 sm:p-10 mb-6">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => {
                // Skip duplicate title already shown on banner
                if (extractText(children as React.ReactNode).trim() === post.title.trim()) return null;
                return (
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-10 mb-5 first:mt-0 tracking-tight leading-tight">
                    {children}
                  </h1>
                );
              },
              h2: ({ children }) => (
                <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-12 mb-5 tracking-tight">
                  <span className="inline-block w-1 h-6 rounded-full bg-black dark:bg-white flex-shrink-0" />
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 mt-8 mb-3 tracking-tight">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-5 mb-2">
                  {children}
                </h4>
              ),
              p: ({ children }) => {
                const text = extractText(children as React.ReactNode);

                // ── Notion DB Schema diagram ──────────────────────────────────
                if (text.trim() === '{{notion-db-schema}}') {
                  const TitleIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>;
                  const TextIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>;
                  const NumberIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>;
                  const DateIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
                  const SelectIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 12 16 16 12"/></svg>;

                  return (
                    <div className="my-8 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm text-sm">
                      {/* Notion DB title bar */}
                      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 dark:bg-zinc-900 border-b border-slate-200 dark:border-slate-700">
                        <span className="text-base">🗃️</span>
                        <span className="font-semibold text-slate-700 dark:text-slate-200 text-[13px]">Competitor Intelligence DB</span>
                        <span className="ml-auto text-[11px] text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md font-medium">Notion Database</span>
                      </div>

                      {/* Column headers */}
                      <div className="flex items-center px-4 py-2 bg-slate-50 dark:bg-zinc-900 border-b border-slate-200 dark:border-slate-700">
                        <div className="w-5 mr-3" />
                        <div className="flex-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Property</div>
                        <div className="w-28 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Type</div>
                        <div className="w-48 text-[11px] font-semibold text-slate-400 uppercase tracking-wider hidden sm:block">Purpose</div>
                      </div>

                      {/* ── Section: Identity ── */}
                      <div className="flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-950/20 border-b border-slate-200 dark:border-slate-700">
                        <span className="w-2 h-2 rounded-sm bg-blue-400 inline-block"/>
                        <span className="text-[11px] font-bold text-blue-500 dark:text-blue-400 uppercase tracking-widest">Identity</span>
                      </div>
                      <div className="flex items-center px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="w-5 mr-3 text-slate-400"><TitleIcon /></div>
                        <div className="flex-1 font-medium text-slate-800 dark:text-slate-100 text-[13px]">Competitor Name</div>
                        <div className="w-28 flex items-center gap-1.5">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded font-medium">Title</span>
                        </div>
                        <div className="w-48 text-[11px] text-slate-400 hidden sm:block">Primary key / row label</div>
                      </div>

                      {/* ── Section: Weekly Scraped Data ── */}
                      <div className="flex items-center gap-2 px-4 py-1.5 bg-amber-50 dark:bg-amber-950/20 border-b border-slate-200 dark:border-slate-700">
                        <span className="w-2 h-2 rounded-sm bg-amber-400 inline-block"/>
                        <span className="text-[11px] font-bold text-amber-500 dark:text-amber-400 uppercase tracking-widest">Weekly Scraped Data</span>
                        <span className="text-[10px] text-amber-500 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-0.5 rounded-full font-semibold ml-1">via Apify + n8n</span>
                      </div>
                      {[
                        { name: 'Pricing Snapshot',  type: 'Text',   icon: <TextIcon />,   purpose: 'Latest scraped pricing page (2000 chars)' },
                        { name: 'Previous Pricing',  type: 'Text',   icon: <TextIcon />,   purpose: "Last week's snapshot for diffing" },
                        { name: 'G2 Rating',         type: 'Number', icon: <NumberIcon />, purpose: 'Current avg star rating on G2' },
                        { name: 'Recent Reviews',    type: 'Text',   icon: <TextIcon />,   purpose: 'Latest 5 reviews (pros + cons)' },
                        { name: 'App Store Rating',  type: 'Number', icon: <NumberIcon />, purpose: 'Current app store rating' },
                        { name: 'Last Updated',      type: 'Date',   icon: <DateIcon />,   purpose: 'Timestamp of last automation run' },
                      ].map((row, i, arr) => (
                        <div key={row.name} className={`flex items-center px-4 py-3 hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors ${i < arr.length - 1 ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
                          <div className="w-5 mr-3 text-slate-400">{row.icon}</div>
                          <div className="flex-1 font-medium text-slate-800 dark:text-slate-100 text-[13px]">{row.name}</div>
                          <div className="w-28">
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded font-medium">{row.type}</span>
                          </div>
                          <div className="w-48 text-[11px] text-slate-400 hidden sm:block">{row.purpose}</div>
                        </div>
                      ))}

                      {/* ── Section: AI Analysis ── */}
                      <div className="flex items-center gap-2 px-4 py-1.5 bg-purple-50 dark:bg-purple-950/20 border-b border-slate-200 dark:border-slate-700 border-t border-t-slate-200 dark:border-t-slate-700">
                        <span className="w-2 h-2 rounded-sm bg-purple-400 inline-block"/>
                        <span className="text-[11px] font-bold text-purple-500 dark:text-purple-400 uppercase tracking-widest">AI Analysis</span>
                        <span className="text-[10px] text-purple-500 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-0.5 rounded-full font-semibold ml-1">via Claude</span>
                      </div>
                      <div className="flex items-center px-4 py-3 border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="w-5 mr-3 text-slate-400"><TextIcon /></div>
                        <div className="flex-1 font-medium text-slate-800 dark:text-slate-100 text-[13px]">Claude Analysis</div>
                        <div className="w-28">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded font-medium">Text</span>
                        </div>
                        <div className="w-48 text-[11px] text-slate-400 hidden sm:block">Output stored for historical reference</div>
                      </div>
                      <div className="flex items-center px-4 py-3 hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                        <div className="w-5 mr-3 text-slate-400"><SelectIcon /></div>
                        <div className="flex-1 font-medium text-slate-800 dark:text-slate-100 text-[13px]">Signal Flag</div>
                        <div className="w-28">
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded font-medium">Select</span>
                        </div>
                        <div className="w-48 hidden sm:flex items-center gap-1.5">
                          <span className="text-[10px] font-semibold bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400 px-2 py-0.5 rounded-full">🔴 HIGH</span>
                          <span className="text-[10px] font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400 px-2 py-0.5 rounded-full">🟡 MED</span>
                          <span className="text-[10px] font-semibold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 px-2 py-0.5 rounded-full">🟢 LOW</span>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Style "Tools used:" line as a floating badge strip
                if (text.startsWith('Tools used:')) {
                  const tools = text.replace('Tools used:', '').split('·').map(t => t.trim()).filter(Boolean);
                  const ApifyLogo = () => (
                    <img src="/logos/apify.png" alt="Apify" className="w-5 h-5 object-contain" />
                  );
                  const SlackLogo = () => (
                    <img src="/logos/slack.png" alt="Slack" className="w-5 h-5 object-contain" />
                  );
                  const toolMeta: Record<string, { logoEl?: React.ReactNode; logoUrl?: string; category: string; iconBg: string; border: string }> = {
                    'Apify':        { logoEl: <ApifyLogo />,                                     category: 'Web Scraping',  iconBg: 'bg-orange-50 dark:bg-orange-900/20',  border: 'border-orange-200 dark:border-orange-800/40' },
                    'Notion':       { logoUrl: 'https://cdn.simpleicons.org/notion/000000',       category: 'Database',      iconBg: 'bg-slate-100 dark:bg-slate-800',      border: 'border-slate-200 dark:border-slate-700' },
                    'Claude API':   { logoUrl: 'https://cdn.simpleicons.org/anthropic/7C3AED',    category: 'AI Analysis',   iconBg: 'bg-violet-50 dark:bg-violet-900/20',  border: 'border-violet-200 dark:border-violet-800/40' },
                    'Slack':        { logoEl: <SlackLogo />,                                      category: 'Notifications', iconBg: 'bg-slate-50 dark:bg-slate-800',       border: 'border-slate-200 dark:border-slate-700' },
                    'n8n / Zapier': { logoUrl: 'https://cdn.simpleicons.org/n8n/EA4B71',          category: 'Automation',    iconBg: 'bg-rose-50 dark:bg-rose-900/20',      border: 'border-rose-200 dark:border-rose-800/40' },
                  };
                  const fallbackMeta = { category: 'Tool', iconBg: 'bg-slate-100 dark:bg-slate-800', border: 'border-slate-200 dark:border-slate-700' };
                  return (
                    <div className="my-8">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="h-px flex-1 bg-black/8 dark:bg-white/8" />
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em]">Built with</span>
                        <div className="h-px flex-1 bg-black/8 dark:bg-white/8" />
                      </div>
                      <div className="flex flex-wrap gap-3 justify-center">
                        {tools.map(tool => {
                          const m = toolMeta[tool] ?? fallbackMeta;
                          return (
                            <div
                              key={tool}
                              className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${m.border} bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 min-w-[130px]`}
                            >
                              <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${m.iconBg}`}>
                                {m.logoEl
                                  ? m.logoEl
                                  : m.logoUrl
                                    ? <img src={m.logoUrl} alt={tool} className="w-5 h-5 object-contain" />
                                    : <span className="text-lg">🔧</span>
                                }
                              </div>
                              <div>
                                <p className="text-[13px] font-bold text-slate-800 dark:text-slate-100 leading-tight">{tool}</p>
                                <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-tight mt-0.5">{m.category}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return <p className="text-[16px] text-slate-600 dark:text-slate-300 leading-[1.85] mb-5">{children}</p>;
              },
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
              li: ({ children, ordered }: any) => (
                ordered ? (
                  <li className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                    {children}
                  </li>
                ) : (
                  <li className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black dark:bg-white flex-shrink-0" />
                    <span>{children}</span>
                  </li>
                )
              ),
              img: ({ src, alt }) => (
                <figure className="my-8">
                  <div
                    className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-md cursor-zoom-in relative group"
                    onClick={() => { setLightboxSrc(src || ''); setLightboxAlt(alt || ''); }}
                  >
                    <img src={src} alt={alt || ""} className="w-full h-auto object-contain" loading="lazy" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 rounded-full p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                      </div>
                    </div>
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
              blockquote: ({ children }) => {
                const text = extractText(children);

                // ── ⚠️ The Problem — split editorial card ────────────────────
                if (text.includes('⚠') && /the problem/i.test(text)) {
                  const body = text
                    .replace(/⚠[️\uFE0F\s]*/g, '')
                    .replace(/The Problem\s*/i, '')
                    .trim();
                  const sentences = body.match(/[^.!?]+[.!?]+/g) || [body];
                  const impactLine = sentences[sentences.length - 1]?.trim() ?? '';
                  const mainText = sentences.slice(0, -1).join(' ').trim();
                  return (
                    <div className="my-10 rounded-2xl overflow-hidden shadow-lg border border-red-200 dark:border-red-900/50">
                      {/* Gradient header */}
                      <div className="bg-gradient-to-r from-red-600 to-rose-500 px-6 py-4 flex items-center gap-3">
                        <div className="bg-white/20 rounded-lg w-9 h-9 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl leading-none">⚠️</span>
                        </div>
                        <div>
                          <p className="text-white/70 text-[9px] font-bold tracking-[0.4em] uppercase leading-none mb-0.5">Identifying</p>
                          <p className="text-white text-[15px] font-black tracking-wide leading-none">The Problem</p>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="bg-gradient-to-b from-red-50 to-white dark:from-red-950/20 dark:to-zinc-900 px-6 py-6">
                        <p className="text-[15px] sm:text-[16px] text-slate-600 dark:text-slate-300 leading-[1.85] mb-5">
                          {mainText}
                        </p>
                        {impactLine && (
                          <div className="flex items-start gap-3 bg-red-100/70 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 rounded-xl px-4 py-3.5">
                            <span className="text-red-500 text-lg leading-none mt-0.5 flex-shrink-0">↳</span>
                            <p className="text-[14px] sm:text-[15px] font-semibold text-red-700 dark:text-red-400 leading-relaxed m-0">
                              {impactLine}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }

                // ── ⏱ At a glance — colored stat cards ───────────────────────
                if (text.includes('⏱')) {
                  const body = text.replace(/⏱\s*At a glance\s*/i, '').trim();
                  const stats = body.split('·').map(s => s.trim()).filter(Boolean).map(part => {
                    const idx = part.indexOf(':');
                    return idx === -1
                      ? { label: part, value: '' }
                      : { label: part.slice(0, idx).trim(), value: part.slice(idx + 1).trim() };
                  });
                  const accents = [
                    { icon: '⏱', bg: 'bg-violet-50 dark:bg-violet-950/25', border: 'border-violet-200 dark:border-violet-800/40', val: 'text-violet-700 dark:text-violet-300', lbl: 'text-violet-500/70 dark:text-violet-400/60' },
                    { icon: '🔧', bg: 'bg-emerald-50 dark:bg-emerald-950/25', border: 'border-emerald-200 dark:border-emerald-800/40', val: 'text-emerald-700 dark:text-emerald-300', lbl: 'text-emerald-600/70 dark:text-emerald-400/60' },
                    { icon: '💰', bg: 'bg-amber-50 dark:bg-amber-950/25', border: 'border-amber-200 dark:border-amber-800/40', val: 'text-amber-700 dark:text-amber-400', lbl: 'text-amber-600/70 dark:text-amber-400/60' },
                  ];
                  return (
                    <div className="my-7">
                      <p className="text-[10px] font-black tracking-[0.35em] text-slate-400 dark:text-slate-500 uppercase mb-3">At a glance</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {stats.map((s, i) => {
                          const a = accents[i] ?? accents[0];
                          return (
                            <div key={i} className={`flex-1 rounded-xl border ${a.border} ${a.bg} px-5 pt-4 pb-5`}>
                              <span className="text-lg mb-3 block">{a.icon}</span>
                              <div className={`text-[26px] sm:text-[30px] font-black leading-none tracking-tight mb-1.5 ${a.val}`}>{s.value}</div>
                              <div className={`text-[12px] leading-snug font-medium ${a.lbl}`}>{s.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                // ── 🔴🟣🟢 Article cards ──────────────────────────────────────
                const circleColors: Record<string, { border: string; labelBg: string; labelText: string; dot: string }> = {
                  '🔴': { border: 'border-red-200 dark:border-red-800/50',    labelBg: 'bg-red-100 dark:bg-red-900/40',     labelText: 'text-red-600 dark:text-red-400',     dot: 'bg-red-400' },
                  '🟣': { border: 'border-violet-200 dark:border-violet-800/50', labelBg: 'bg-violet-100 dark:bg-violet-900/40', labelText: 'text-violet-600 dark:text-violet-400', dot: 'bg-violet-400' },
                  '🟢': { border: 'border-emerald-200 dark:border-emerald-800/50', labelBg: 'bg-emerald-100 dark:bg-emerald-900/40', labelText: 'text-emerald-600 dark:text-emerald-400', dot: 'bg-emerald-400' },
                };
                const circleEmoji = ['🔴', '🟣', '🟢'].find(e => text.trimStart().startsWith(e));
                if (circleEmoji) {
                  const c = circleColors[circleEmoji];
                  const parts = text.split(' | ').map(s => s.trim());
                  // parts: [emoji, label, title, source, stack]
                  const label = parts[1] ?? '';
                  const title = parts[2] ?? '';
                  const source = parts[3] ?? '';
                  const stackItems = (parts[4] ?? '').split('·').map(s => s.trim()).filter(Boolean);
                  const href = extractLinkHref(children);
                  return (
                    <div
                      onClick={() => href && window.open(href, '_blank', 'noopener,noreferrer')}
                      className={`group my-3 flex items-center gap-4 px-5 py-4 rounded-xl border ${c.border} bg-white dark:bg-zinc-900 cursor-pointer hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
                    >
                      {/* Colored dot */}
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`text-[10px] font-black px-2 py-0.5 rounded-full tracking-wide ${c.labelBg} ${c.labelText}`}>
                            {label}
                          </span>
                          <span className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">{source}</span>
                        </div>
                        <p className="text-[14px] sm:text-[15px] font-semibold text-slate-900 dark:text-white leading-snug line-clamp-2 mb-2">
                          {title}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {stackItems.map(s => (
                            <span key={s} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <span className="flex-shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors text-lg leading-none">
                        ↗
                      </span>
                    </div>
                  );
                }

                // ── Other emoji callouts ───────────────────────────────────────
                const match = CALLOUT_MAP.find(({ emoji }) => text.includes(emoji));
                if (match) {
                  const { border, bg, pill, label } = match.config;
                  return (
                    <div className={`border-l-4 ${border} ${bg} rounded-r-xl px-5 pt-3.5 pb-4 my-6`}>
                      <span className={`inline-flex items-center text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${pill}`}>
                        {label}
                      </span>
                      <div className="text-slate-700 dark:text-slate-200 text-[15px] leading-relaxed [&_p]:mb-1.5 [&_p:last-child]:mb-0 [&_strong]:font-bold [&_strong]:text-slate-900 dark:[&_strong]:text-white">
                        {children}
                      </div>
                    </div>
                  );
                }

                // ── Default — pull quote style ────────────────────────────────
                return (
                  <blockquote className="my-8 pl-6 border-l-[3px] border-black dark:border-white">
                    <div className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 italic leading-relaxed font-medium [&_p]:mb-0">
                      {children}
                    </div>
                  </blockquote>
                );
              },
              a: ({ href, children, style, ...rest }: any) => {
                if (style) {
                  return (
                    <a href={href} style={style} {...rest}>
                      {children}
                    </a>
                  );
                }
                return (
                  <a
                    href={href}
                    target={href?.startsWith("http") ? "_blank" : undefined}
                    rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-slate-900 dark:text-white font-semibold underline underline-offset-2 decoration-slate-300 dark:decoration-slate-600 hover:decoration-black dark:hover:decoration-white transition-all"
                  >
                    {children}
                  </a>
                );
              },
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
              pre: ({ children }) => {
                let language = '';
                React.Children.forEach(children as React.ReactNode, (child) => {
                  if (React.isValidElement(child)) {
                    const cls = (child.props as any).className || '';
                    const m = cls.match(/language-(\w+)/);
                    if (m) language = m[1];
                  }
                });
                const langLabel: Record<string, string> = {
                  js: 'JavaScript', ts: 'TypeScript', jsx: 'JSX', tsx: 'TSX',
                  json: 'JSON', bash: 'Bash', sh: 'Shell', css: 'CSS',
                  html: 'HTML', python: 'Python', py: 'Python', sql: 'SQL',
                };
                const label = langLabel[language] || language?.toUpperCase() || '';
                const [codeCopied, setCodeCopied] = React.useState(false);
                const handleCopy = () => {
                  const el = document.createElement('div');
                  el.innerHTML = '';
                  const getText = (node: React.ReactNode): string => {
                    if (!node) return '';
                    if (typeof node === 'string') return node;
                    if (Array.isArray(node)) return node.map(getText).join('');
                    if (React.isValidElement(node)) return getText((node.props as any).children);
                    return '';
                  };
                  navigator.clipboard.writeText(getText(children));
                  setCodeCopied(true);
                  setTimeout(() => setCodeCopied(false), 2000);
                };
                return (
                  <div className="relative my-8 rounded-xl overflow-hidden shadow-2xl border border-white/5" style={{background:'#1e1e2e'}}>
                    {/* Mac window header */}
                    <div className="flex items-center px-4 py-3 border-b border-white/8" style={{background:'#2a2a3d'}}>
                      {/* Traffic lights */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full flex items-center justify-center" style={{background:'#ff5f57'}} />
                        <span className="w-3 h-3 rounded-full" style={{background:'#ffbd2e'}} />
                        <span className="w-3 h-3 rounded-full" style={{background:'#28c840'}} />
                      </div>
                      {/* Centered language label */}
                      <div className="flex-1 flex justify-center">
                        {label && (
                          <span className="text-xs font-medium px-3 py-0.5 rounded-md font-mono" style={{color:'#a9b1d6',background:'#1e1e2e',border:'1px solid rgba(255,255,255,0.08)'}}>{label}</span>
                        )}
                      </div>
                      {/* Copy button */}
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md transition-all"
                        style={{color: codeCopied ? '#28c840' : '#a9b1d6', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.08)'}}
                      >
                        {codeCopied ? (
                          <><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied</>
                        ) : (
                          <><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy</>
                        )}
                      </button>
                    </div>
                    <pre className="px-5 py-5 overflow-x-auto text-[13px] leading-relaxed font-mono" style={{background:'#1e1e2e',color:'#cdd6f4',margin:0}}>
                      {children}
                    </pre>
                  </div>
                );
              },
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

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={e => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute -top-10 right-0 flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              Close
            </button>
            <img
              src={lightboxSrc}
              alt={lightboxAlt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            {lightboxAlt && (
              <p className="text-center text-white/50 text-xs mt-3 font-medium uppercase tracking-wide">{lightboxAlt}</p>
            )}
          </div>
        </div>
      )}

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
