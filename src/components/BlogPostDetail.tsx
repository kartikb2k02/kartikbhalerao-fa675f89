
import { useState, useEffect, useMemo } from "react";
import { ArrowLeft, Calendar, Clock, ArrowRight, User, Linkedin, Link2, Check, ArrowUp, BookOpen, Eye, Heart, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogPosts";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { toast } from "sonner";

interface BlogPostDetailProps {
  post: BlogPost;
  content: string;
  onBack: () => void;
}

export const BlogPostDetail = ({ post, content, onBack }: BlogPostDetailProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);

  // Calculate reading time remaining
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
    if (!liked) {
      toast.success("Thanks for the love! 💜");
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;


  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <>
      {/* Reading Progress Bar - Enhanced */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-slate-200/30 dark:bg-slate-800/50 backdrop-blur-sm overflow-hidden">
        {/* Progress fill */}
        <div 
          className="h-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 transition-all duration-150 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite] -skew-x-12" />
          {/* Glow effect at the end */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-cyan-400 blur-md opacity-80" />
        </div>
      </div>

      {/* Enhanced Progress & Reading Stats */}
      <div 
        className={`fixed top-20 right-4 z-40 flex items-center gap-3 transition-all duration-300 ${
          scrollProgress > 5 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        {/* Time remaining */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
          <Clock className="w-3.5 h-3.5 text-violet-500" />
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
            {timeRemaining > 0 ? `${timeRemaining} min left` : 'Done!'}
          </span>
        </div>
        
        {/* Progress percentage */}
        <div className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
          <span className="text-xs font-medium bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div 
        className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          scrollProgress > 10 && scrollProgress < 95 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 shadow-2xl">
          {/* Like Button */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200 ${
              liked 
                ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400' 
                : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400'
            }`}
          >
            <Heart className={`w-4 h-4 transition-transform ${liked ? 'fill-current scale-110' : ''}`} />
            <span className="text-xs font-medium">{likeCount}</span>
          </button>
          
          {/* Divider */}
          <div className="w-px h-5 bg-slate-200 dark:bg-slate-700" />
          
          {/* Share Button */}
          <button
            onClick={copyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-all duration-200"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
            <span className="text-xs font-medium">{copied ? 'Copied!' : 'Share'}</span>
          </button>
          
          {/* Divider */}
          <div className="w-px h-5 bg-slate-200 dark:bg-slate-700" />
          
          {/* Reading indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500 dark:text-slate-400">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs font-medium">{post.readTime}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/50 dark:bg-white/10 backdrop-blur-md border border-white/40 dark:border-white/20 text-slate-700 dark:text-slate-200 font-medium shadow-lg hover:shadow-xl hover:bg-white/70 dark:hover:bg-white/20 hover:scale-[1.02] hover:border-violet-300/50 dark:hover:border-violet-400/30 active:scale-95 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to posts</span>
        </button>

        {/* Blog Header Card - Enhanced */}
        <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl overflow-hidden mb-8 group">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-transparent rounded-br-3xl z-10" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-3xl z-10" />
          
          {/* Banner Image */}
          {post.image && (
            <div className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Category badge on image */}
              <div className="absolute top-4 left-4 z-10">
                <Badge 
                  className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-violet-700 dark:text-violet-300 border-0 shadow-lg px-3 py-1"
                >
                  {post.category}
                </Badge>
              </div>
              
              {/* Reading time badge on image */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg">
                <Eye className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{post.readTime}</span>
              </div>
            </div>
          )}
          
          {/* Category & Meta */}
          <div className="p-6 sm:p-8 relative">
            {/* Decorative line */}
            <div className="absolute left-6 sm:left-8 top-0 w-12 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight mt-2">
              {post.title}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700/50 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/20">
                KB
              </div>
              <div className="flex-1">
                <div className="font-semibold text-slate-900 dark:text-white">Kartik Bhalerao</div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Tags & Share */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800/50 text-xs hover:border-violet-300 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-default animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Share Buttons - Enhanced */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100/80 dark:bg-slate-700/50 border border-slate-200/50 dark:border-slate-600/50">
                <button
                  onClick={shareOnTwitter}
                  className="p-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all hover:shadow-sm"
                  title="Share on X"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="p-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:shadow-sm"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={copyLink}
                  className="p-2.5 rounded-lg hover:bg-white dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-all hover:shadow-sm"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
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
                <p className="text-base text-slate-700 dark:text-slate-300 leading-7 mb-4">
                  {children}
                </p>
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
              li: ({ children }) => (
                <li className="text-base leading-7 pl-1">
                  {children}
                </li>
              ),
              img: ({ src, alt }) => (
                <figure className="my-6">
                  <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                    <img 
                      src={src} 
                      alt={alt || ''} 
                      className="w-full h-auto max-h-80 object-cover"
                      loading="lazy"
                    />
                  </div>
                  {alt && alt !== 'image' && (
                    <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                      {alt}
                    </figcaption>
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
              thead: ({ children }) => (
                <thead className="bg-slate-100 dark:bg-slate-700">
                  {children}
                </thead>
              ),
              tbody: ({ children }) => (
                <tbody className="bg-white dark:bg-slate-800">
                  {children}
                </tbody>
              ),
              tr: ({ children }) => (
                <tr className="border-b border-slate-200 dark:border-slate-600 last:border-b-0">
                  {children}
                </tr>
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
                <blockquote className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 pl-4 py-3 my-6 rounded-r-lg">
                  <div className="text-slate-700 dark:text-slate-300 italic">
                    {children}
                  </div>
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a 
                  href={href} 
                  target={href?.startsWith('http') ? '_blank' : undefined}
                  rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
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
              hr: () => (
                <hr className="border-slate-200 dark:border-slate-700 my-8" />
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-slate-900 dark:text-white">
                  {children}
                </strong>
              ),
              em: ({ children }) => (
                <em className="italic text-slate-600 dark:text-slate-400">
                  {children}
                </em>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center">
          <a
            href="https://medium.com/@kartikbhalerao948"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Read More on Medium
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Back to Top Button - Unique Design */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
        title="Back to top"
      >
        {/* Outer ring with gradient */}
        <div className="relative w-14 h-14">
          {/* Animated rotating border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 animate-spin-slow opacity-80 group-hover:opacity-100 transition-opacity" />
          
          {/* Inner background */}
          <div className="absolute inset-[2px] rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-200 dark:text-slate-700"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${scrollProgress * 1.57} 157`}
                className="transition-all duration-150"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Arrow icon with animation */}
            <div className="relative z-10 flex flex-col items-center">
              <ArrowUp className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
      </button>
    </>
  );
};
