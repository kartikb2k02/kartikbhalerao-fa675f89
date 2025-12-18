import { Search, BookOpen, Sparkles, Clock, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/data/blogPosts";
import { cn } from "@/lib/utils";

interface BlogSidebarProps {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  onPostClick: (post: BlogPost) => void;
  categories: Record<string, string>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const BlogSidebar = ({
  posts,
  selectedPost,
  onPostClick,
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}: BlogSidebarProps) => {
  const categoryList = [
    { key: "all", label: "All Posts", icon: BookOpen },
    { key: "strategy", label: "Strategy", icon: TrendingUp },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header Section */}
      <div className="p-5 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center gap-3 mb-1">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Knowledge Base
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {posts.length} articles available
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="p-4">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-all duration-300" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-10 bg-slate-100/80 dark:bg-slate-800/80 border-0 focus:ring-2 focus:ring-violet-500/50 rounded-xl text-sm placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="px-4 pb-4">
        <div className="flex gap-2">
          {categoryList.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onCategoryChange(key)}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
                selectedCategory === key
                  ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto px-3 pb-4">
        <div className="space-y-2">
          {posts.map((post, index) => {
            const isSelected = selectedPost?.id === post.id;
            
            return (
              <article
                key={post.id}
                onClick={() => onPostClick(post)}
                className={cn(
                  "group relative cursor-pointer rounded-xl p-3 transition-all duration-300",
                  isSelected
                    ? "bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/20 dark:to-fuchsia-500/20"
                    : "hover:bg-slate-100/80 dark:hover:bg-slate-800/50"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Selection Indicator */}
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300",
                    isSelected
                      ? "h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500"
                      : "h-0 bg-transparent group-hover:h-4 group-hover:bg-slate-300 dark:group-hover:bg-slate-600"
                  )}
                />

                {/* Content */}
                <div className="pl-2">
                  <h3
                    className={cn(
                      "text-sm font-medium leading-snug transition-colors duration-300 line-clamp-2",
                      isSelected
                        ? "text-violet-700 dark:text-violet-300"
                        : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                    )}
                  >
                    {post.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] px-1.5 py-0.5 rounded-md",
                        isSelected
                          ? "bg-violet-500/20 text-violet-600 dark:text-violet-400"
                          : "bg-slate-200/60 dark:bg-slate-700/60 text-slate-500 dark:text-slate-400"
                      )}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none",
                    isSelected
                      ? "opacity-100 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5"
                      : "opacity-0 group-hover:opacity-50 bg-gradient-to-r from-slate-200/50 to-slate-100/50 dark:from-slate-700/50 dark:to-slate-800/50"
                  )}
                />
              </article>
            );
          })}

          {posts.length === 0 && (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <Search className="w-7 h-7 text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                No articles found
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Try a different search term
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/30">
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {posts.length} articles
          </span>
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            Updated weekly
          </span>
        </div>
      </div>
    </div>
  );
};
