import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg capitalize mb-2">
            {post.category}
          </Badge>
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
        {post.title}
      </h1>
      
      <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400 mb-6">
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
      
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag: string) => (
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
  );
};