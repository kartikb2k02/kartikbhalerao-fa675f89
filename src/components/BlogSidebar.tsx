import { Search, BookOpen, Sparkles, Clock, Calendar, SortAsc, Sun, Moon, Monitor, TrendingUp, ChevronRight, Zap, Flame, Star, ArrowUpRight, Hash, Layers } from "lucide-react";
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

const sortOptions: {
  value: SortOption;
  label: string;
  icon: typeof Calendar;
}[] = [{
  value: "date",
  label: "Latest",
  icon: Flame
}, {
  value: "readTime",
  label: "Quick Reads",
  icon: Zap
}, {
  value: "title",
  label: "A-Z",
  icon: SortAsc
}];

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
  onThemeChange
}: BlogSidebarProps) => {
  const categoryList = [{
    key: "all",
    label: "All Posts",
    icon: Layers,
    count: posts.length
  }, {
    key: "strategy",
    label: "Strategy",
    icon: Star
  }, {
    key: "analysis",
    label: "Analysis",
    icon: TrendingUp
  }, {
    key: "design",
    label: "Design",
    icon: Sparkles
  }];

  return (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/20 to-white dark:from-slate-900 dark:via-violet-950/20 dark:to-slate-900" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 dark:from-violet-600/10 dark:to-fuchsia-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-400/15 to-cyan-400/15 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-200/60 dark:border-slate-700/50">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full border-2 border-white dark:border-slate-900 animate-pulse flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">{posts.length}</span>
                </div>
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-slate-900 via-violet-800 to-slate-900 dark:from-white dark:via-violet-300 dark:to-white bg-clip-text text-transparent">
                  Blog
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Flame className="w-3 h-3 text-orange-500 animate-pulse" />
                  {posts.length} trending articles
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Search */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500/50 via-fuchsia-500/50 to-pink-500/50 rounded-2xl opacity-0 group-focus-within:opacity-100 blur-lg transition-all duration-500 animate-pulse" />
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-violet-500 transition-colors duration-300" />
              <Input 
                placeholder="Search articles..." 
                value={searchTerm} 
                onChange={e => onSearchChange(e.target.value)} 
                className="pl-11 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/50 focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 rounded-xl text-sm placeholder:text-slate-400 transition-all duration-300 shadow-sm hover:shadow-md" 
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md">
                <span className="text-[10px] font-medium text-slate-400">⌘K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sorting & Categories */}
        <div className="px-5 py-5 space-y-5 border-b border-slate-200/60 dark:border-slate-700/50">
          {/* Sort Options */}
          <div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Hash className="w-3 h-3" />
              Sort By
            </span>
            <div className="flex items-center gap-2">
              {sortOptions.map(({ value, label, icon: Icon }) => (
                <button 
                  key={value} 
                  onClick={() => onSortChange(value)} 
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 overflow-hidden group",
                    sortBy === value 
                      ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30" 
                      : "bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 border border-slate-200/60 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-600 hover:shadow-md"
                  )}
                >
                  <Icon className={cn("w-4 h-4 transition-transform duration-300", sortBy === value && "animate-pulse")} />
                  {label}
                  {sortBy === value && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Category Pills */}
          <div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-3 h-3" />
              Categories
            </span>
            <div className="grid grid-cols-2 gap-2">
              {categoryList.map(({ key, label, icon: Icon }) => (
                <button 
                  key={key} 
                  onClick={() => onCategoryChange(key)} 
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold transition-all duration-300 overflow-hidden group",
                    selectedCategory === key 
                      ? "bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30 scale-[1.02]" 
                      : "bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50 hover:border-violet-300/60 dark:hover:border-violet-500/40 hover:shadow-lg hover:scale-[1.02]"
                  )}
                >
                  <Icon className={cn("w-4 h-4", selectedCategory === key ? "text-white" : "text-violet-500")} />
                  <span>{label}</span>
                  {selectedCategory === key && (
                    <>
                      <Sparkles className="w-3 h-3 ml-auto animate-pulse" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </>
                  )}
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
                    "group relative cursor-pointer rounded-2xl p-4 transition-all duration-300 animate-fade-in",
                    isSelected 
                      ? "bg-gradient-to-r from-violet-100 via-purple-50 to-fuchsia-100 dark:from-violet-900/40 dark:via-purple-900/30 dark:to-fuchsia-900/40 shadow-lg shadow-violet-200/50 dark:shadow-violet-900/30 border border-violet-200/50 dark:border-violet-700/30" 
                      : "bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-slate-800/60 hover:shadow-lg border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/50"
                  )} 
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Selection Indicator */}
                  <div className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-300",
                    isSelected 
                      ? "h-10 bg-gradient-to-b from-violet-500 via-purple-500 to-fuchsia-500 shadow-lg shadow-violet-500/50" 
                      : "h-0 bg-transparent group-hover:h-6 group-hover:bg-gradient-to-b group-hover:from-slate-300 group-hover:to-slate-400 dark:group-hover:from-slate-500 dark:group-hover:to-slate-600"
                  )} />

                  <div className="pl-3 flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className={cn(
                        "text-sm font-semibold leading-snug transition-colors line-clamp-2",
                        isSelected 
                          ? "text-violet-700 dark:text-violet-300" 
                          : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                      )}>
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 mt-2.5">
                        <span className={cn(
                          "flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-lg transition-colors",
                          isSelected 
                            ? "bg-violet-200/60 dark:bg-violet-800/40 text-violet-600 dark:text-violet-300" 
                            : "bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400"
                        )}>
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                    
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                      isSelected 
                        ? "bg-violet-500 text-white shadow-lg shadow-violet-500/30" 
                        : "bg-slate-100 dark:bg-slate-700 text-slate-400 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 group-hover:text-violet-500"
                    )}>
                      <ArrowUpRight className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isSelected ? "rotate-0" : "-rotate-45 group-hover:rotate-0"
                      )} />
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  {isSelected && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-fuchsia-500/5 pointer-events-none" />
                  )}
                </article>
              );
            })}

            {posts.length === 0 && (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center shadow-inner">
                  <Search className="w-7 h-7 text-slate-400" />
                </div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  No articles found
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Try adjusting your filters
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="p-4 border-t border-slate-200/60 dark:border-slate-700/50 bg-gradient-to-r from-violet-50/50 via-purple-50/30 to-fuchsia-50/50 dark:from-violet-950/30 dark:via-purple-950/20 dark:to-fuchsia-950/30">
          <div className="flex items-center justify-center gap-4 text-xs">
            <span className="flex items-center gap-2 px-3 py-1.5 bg-white/80 dark:bg-slate-800/80 rounded-full shadow-sm border border-slate-200/50 dark:border-slate-700/50">
              <BookOpen className="w-4 h-4 text-violet-500" />
              <span className="font-medium text-slate-600 dark:text-slate-300">{posts.length} articles</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-full border border-violet-200/50 dark:border-violet-700/30">
              <Sparkles className="w-4 h-4 text-violet-500 animate-pulse" />
              <span className="font-medium text-violet-600 dark:text-violet-400">Fresh daily</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
