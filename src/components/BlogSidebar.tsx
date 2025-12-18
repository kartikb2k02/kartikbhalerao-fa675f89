import { Search, BookOpen, Sparkles, Clock, Calendar, SortAsc, Sun, Moon, Monitor, TrendingUp, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/data/blogPosts";
import { cn } from "@/lib/utils";
import type { SortOption } from "@/pages/Blog";

interface BlogSidebarProps {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  onPostClick: (post: BlogPost) => void;
  categories: Record<string, string>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  blogTheme: "light" | "dark" | "system";
  onThemeChange: (theme: "light" | "dark" | "system") => void;
}

const sortOptions: { value: SortOption; label: string; icon: typeof Calendar }[] = [
  { value: "date", label: "Latest", icon: Calendar },
  { value: "readTime", label: "Quick Reads", icon: Clock },
  { value: "title", label: "A-Z", icon: SortAsc },
];

const themeOptions = [
  { value: "light" as const, label: "Light", icon: Sun },
  { value: "dark" as const, label: "Dark", icon: Moon },
  { value: "system" as const, label: "System", icon: Monitor },
];

export const BlogSidebar = ({
  posts,
  selectedPost,
  onPostClick,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  blogTheme,
  onThemeChange,
}: BlogSidebarProps) => {
  const categoryList = [
    { key: "all", label: "All Posts", count: posts.length },
    { key: "strategy", label: "Strategy" },
    { key: "analysis", label: "Analysis" },
    { key: "design", label: "Design" },
  ];


  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-white via-slate-50/30 to-white dark:from-slate-900 dark:via-slate-800/30 dark:to-slate-900">
      {/* Header */}
      <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/50">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Blog
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {posts.length} articles
              </p>
            </div>
          </div>
          
          {/* Theme Toggle */}
          <div className="flex items-center gap-1 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
            {themeOptions.map(({ value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => onThemeChange(value)}
                className={cn(
                  "p-2 rounded-lg transition-all duration-200",
                  blogTheme === value
                    ? "bg-white dark:bg-slate-700 shadow-md text-violet-600 dark:text-violet-400"
                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-700/50"
                )}
                title={value.charAt(0).toUpperCase() + value.slice(1)}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/40 to-fuchsia-500/40 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-md transition-all duration-300" />
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-11 h-11 bg-slate-100/80 dark:bg-slate-800/80 border-0 focus:ring-2 focus:ring-violet-500/30 rounded-xl text-sm placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>


      {/* Sorting & Categories */}
      <div className="px-5 py-4 space-y-4 border-b border-slate-200/60 dark:border-slate-700/50">
        {/* Sort Options */}
        <div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">Sort By</span>
          <div className="flex items-center gap-2">
            {sortOptions.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => onSortChange(value)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200",
                  sortBy === value
                    ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 shadow-sm"
                    : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 block">Categories</span>
          <div className="flex flex-wrap gap-2">
            {categoryList.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => onCategoryChange(key)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 backdrop-blur-md border",
                  selectedCategory === key
                    ? "bg-gradient-to-r from-violet-500/90 to-fuchsia-500/90 text-white shadow-lg shadow-violet-500/30 border-white/20 scale-105"
                    : "bg-white/40 dark:bg-white/10 text-slate-700 dark:text-slate-300 border-white/30 dark:border-white/10 hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-md hover:scale-[1.02] hover:border-violet-300/50 dark:hover:border-violet-400/30"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-2">
          {posts.map((post, index) => {
            const isSelected = selectedPost?.id === post.id;
            
            return (
              <article
                key={post.id}
                onClick={() => onPostClick(post)}
                className={cn(
                  "group relative cursor-pointer rounded-xl p-4 transition-all duration-200",
                  isSelected
                    ? "bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 shadow-md"
                    : "hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-sm"
                )}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Selection Indicator */}
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-200",
                    isSelected
                      ? "h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500"
                      : "h-0 bg-transparent group-hover:h-4 group-hover:bg-slate-300 dark:group-hover:bg-slate-600"
                  )}
                />

                <div className="pl-3 flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3
                      className={cn(
                        "text-sm font-medium leading-snug transition-colors line-clamp-2",
                        isSelected
                          ? "text-violet-700 dark:text-violet-300"
                          : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      )}
                    >
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                  </div>
                  
                  <ChevronRight className={cn(
                    "w-4 h-4 mt-1 flex-shrink-0 transition-all duration-200",
                    isSelected
                      ? "text-violet-500 translate-x-0"
                      : "text-slate-300 dark:text-slate-600 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  )} />
                </div>
              </article>
            );
          })}

          {posts.length === 0 && (
            <div className="text-center py-10 px-4">
              <div className="w-14 h-14 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                <Search className="w-6 h-6 text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                No articles found
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Try different filters
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200/60 dark:border-slate-700/50 bg-gradient-to-r from-slate-50/80 to-slate-100/80 dark:from-slate-800/30 dark:to-slate-800/50">
        <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            {posts.length} articles
          </span>
          <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-violet-500" />
            Updated daily
          </span>
        </div>
      </div>
    </div>
  );
};
