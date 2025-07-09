
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogPosts";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BlogComments } from "./BlogComments";

interface BlogPostDetailProps {
  post: BlogPost;
  content: string;
  onBack: () => void;
}

export const BlogPostDetail = ({ post, content, onBack }: BlogPostDetailProps) => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to posts
      </Button>

      {/* Blog Banner */}
      <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 shadow-lg">
        <img
          src={`https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=600&q=80`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <Badge 
            variant="secondary" 
            className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30"
          >
            {post.category}
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Post Content */}
      <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-p:mb-6 prose-headings:mt-8 prose-headings:mb-4 mb-12">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-slate-700/30 shadow-lg">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
              h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3 text-slate-900 dark:text-white">{children}</h3>,
              ul: ({ children }) => <ul className="mb-6 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="mb-6 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              blockquote: ({ children }) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-slate-600 dark:text-slate-400">{children}</blockquote>,
              code: ({ children }) => <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm">{children}</code>,
              pre: ({ children }) => <pre className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg overflow-x-auto mb-6">{children}</pre>,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Liquid Glass Read More Button */}
      <div className="mb-12 flex justify-center">
          <a
            href="https://medium.com/@kartikbhalerao948/ai-first-product-strategy-how-to-build-with-intelligence-at-the-core-e04cf442cbae"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-lg border border-blue-200/30 dark:border-blue-700/30 text-blue-600 dark:text-blue-400 font-medium text-base transition-all duration-300 hover:from-blue-500/20 hover:to-indigo-500/20 hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
            Read Full Blog
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
      </div>

      {/* Comments Section */}
      <BlogComments postId={post.id} />
    </div>
  );
};
