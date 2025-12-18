import { Search, BookOpen, Sparkles, Clock, Calendar, SortAsc, Tag, Sun, Moon, Monitor, X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BlogPost } from "@/data/blogPosts";
import { cn } from "@/lib/utils";
import { useState } from "react";
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
  allTags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
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
  allTags,
  selectedTags,
  onTagToggle,
  blogTheme,
  onThemeChange,
}: BlogSidebarProps) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const displayedTags = showAllTags ? allTags : allTags.slice(0, 6);

  const categoryList = [
    { key: "all", label: "All" },
    { key: "strategy", label: "Strategy" },
    { key: "analysis", label: "Analysis" },
    { key: "design", label: "Design" },
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
      {/* Header */}
      <div className="p-5 border-b border-slate-200/60 dark:border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-900" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Blog
              </h2>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                {posts.length} articles
              </p>
            </div>
          </div>
          
          {/* Theme Toggle */}
          <div className="flex items-center gap-0.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {themeOptions.map(({ value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => onThemeChange(value)}
                className={cn(
                  "p-1.5 rounded-md transition-all duration-200",
                  blogTheme === value
                    ? "bg-white dark:bg-slate-700 shadow-sm text-violet-600 dark:text-violet-400"
                    : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                )}
                title={value.charAt(0).toUpperCase() + value.slice(1)}
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/50 to-fuchsia-500/50 rounded-xl opacity-0 group-focus-within:opacity-100 blur transition-all duration-300" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-violet-500 transition-colors" />
            <Input
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 h-9 bg-slate-100/80 dark:bg-slate-800/80 border-0 focus:ring-2 focus:ring-violet-500/30 rounded-xl text-sm placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Sorting & Categories */}
      <div className="px-4 py-3 space-y-3 border-b border-slate-200/60 dark:border-slate-700/50">
        {/* Sort Options */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">Sort</span>
          {sortOptions.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => onSortChange(value)}
              className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium transition-all duration-200",
                sortBy === value
                  ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categoryList.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onCategoryChange(key)}
              className={cn(
                "px-2.5 py-1 rounded-full text-[10px] font-medium transition-all duration-300",
                selectedCategory === key
                  ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md shadow-violet-500/25"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className="px-4 py-3 border-b border-slate-200/60 dark:border-slate-700/50">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-slate-400" />
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tags</span>
          </div>
          {selectedTags.length > 0 && (
            <button
              onClick={() => selectedTags.forEach(tag => onTagToggle(tag))}
              className="text-[10px] text-violet-600 dark:text-violet-400 hover:underline"
            >
              Clear all
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {displayedTags.map(tag => (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={cn(
                "group flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] transition-all duration-200 border",
                selectedTags.includes(tag)
                  ? "bg-violet-100 dark:bg-violet-900/40 border-violet-300 dark:border-violet-700 text-violet-700 dark:text-violet-300"
                  : "bg-transparent border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400"
              )}
            >
              {tag}
              {selectedTags.includes(tag) && (
                <X className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
              )}
            </button>
          ))}
          {allTags.length > 6 && (
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="flex items-center gap-0.5 px-2 py-0.5 text-[10px] text-violet-600 dark:text-violet-400 hover:underline"
            >
              {showAllTags ? "Show less" : `+${allTags.length - 6} more`}
              <ChevronDown className={cn("w-3 h-3 transition-transform", showAllTags && "rotate-180")} />
            </button>
          )}
        </div>
      </div>

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <div className="space-y-1.5">
          {posts.map((post, index) => {
            const isSelected = selectedPost?.id === post.id;
            
            return (
              <article
                key={post.id}
                onClick={() => onPostClick(post)}
                className={cn(
                  "group relative cursor-pointer rounded-lg p-3 transition-all duration-200",
                  isSelected
                    ? "bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/30 dark:to-fuchsia-900/30 shadow-sm"
                    : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                )}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Selection Indicator */}
                <div
                  className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-200",
                    isSelected
                      ? "h-6 bg-gradient-to-b from-violet-500 to-fuchsia-500"
                      : "h-0 bg-transparent group-hover:h-3 group-hover:bg-slate-300 dark:group-hover:bg-slate-600"
                  )}
                />

                <div className="pl-2">
                  <h3
                    className={cn(
                      "text-xs font-medium leading-snug transition-colors line-clamp-2",
                      isSelected
                        ? "text-violet-700 dark:text-violet-300"
                        : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
                    )}
                  >
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="flex items-center gap-1 text-[9px] text-slate-400">
                      <Clock className="w-2.5 h-2.5" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-[9px] text-slate-400">
                      <Calendar className="w-2.5 h-2.5" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}

          {posts.length === 0 && (
            <div className="text-center py-8 px-4">
              <div className="w-12 h-12 mx-auto mb-3 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                No articles found
              </p>
              <p className="text-[10px] text-slate-400 mt-1">
                Try different filters
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-200/60 dark:border-slate-700/50 bg-slate-50/80 dark:bg-slate-800/30">
        <div className="flex items-center justify-center gap-4 text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {posts.length} articles
          </span>
        </div>
      </div>
    </div>
  );
};
