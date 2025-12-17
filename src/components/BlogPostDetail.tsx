
import { useState, useEffect } from "react";
import { ArrowLeft, Calendar, Clock, ArrowRight, User, Twitter, Linkedin, Link2, Check, ArrowUp } from "lucide-react";
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
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-slate-200/50 dark:bg-slate-700/50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to posts
        </Button>

        {/* Blog Header Card */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl overflow-hidden mb-8">
          {/* Category & Meta */}
          <div className="p-6 sm:p-8">
            <Badge 
              variant="secondary" 
              className="mb-4 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
            >
              {post.category}
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Kartik Bhalerao</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 text-xs"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-400 mr-1">Share:</span>
                <button
                  onClick={shareOnTwitter}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  title="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button
                  onClick={copyLink}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-green-100 dark:hover:bg-green-900/50 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  title="Copy link"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
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

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};
