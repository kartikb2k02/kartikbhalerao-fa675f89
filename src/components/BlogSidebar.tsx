import { useState } from "react";
import {
  Search, Bookmark, BookmarkCheck, X,
  PanelLeftClose, PanelLeft, History, Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogPosts";
import { cn } from "@/lib/utils";
import type { SortOption } from "@/pages/Blog";

interface BlogSidebarProps {
  posts: BlogPost[];
  allPosts: BlogPost[];
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
  bookmarkedPosts: number[];
  onToggleBookmark: (postId: number) => void;
  readPosts: number[];
  recentSearches: string[];
  onClearSearchHistory: () => void;
  onAddRecentSearch: (term: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  viewMode: "list" | "archive";
  onViewModeChange: (mode: "list" | "archive") => void;
}

const categoryStyle: Record<string, { dot: string; bar: string; label: string; badge: string }> = {
  strategy:   { dot: "bg-violet-400",  bar: "bg-violet-500",  label: "text-violet-600 dark:text-violet-400",  badge: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400"  },
  analytics:  { dot: "bg-blue-400",    bar: "bg-blue-500",    label: "text-blue-600 dark:text-blue-400",      badge: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"          },
  research:   { dot: "bg-emerald-400", bar: "bg-emerald-500", label: "text-emerald-600 dark:text-emerald-400",badge: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"},
  leadership: { dot: "bg-rose-400",    bar: "bg-rose-500",    label: "text-rose-600 dark:text-rose-400",      badge: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"          },
  design:     { dot: "bg-amber-400",   bar: "bg-amber-500",   label: "text-amber-600 dark:text-amber-400",    badge: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400"      },
  ai:         { dot: "bg-cyan-400",    bar: "bg-cyan-500",    label: "text-cyan-600 dark:text-cyan-400",      badge: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"          },
};
const fallbackStyle = { dot: "bg-slate-400", bar: "bg-slate-400", label: "text-slate-500", badge: "bg-slate-100 dark:bg-slate-800 text-slate-500" };

export const BlogSidebar = ({
  posts,
  selectedPost,
  onPostClick,
  searchTerm,
  onSearchChange,
  bookmarkedPosts,
  onToggleBookmark,
  readPosts,
  recentSearches,
  onClearSearchHistory,
  onAddRecentSearch,
  isCollapsed,
  onToggleCollapse,
}: BlogSidebarProps) => {

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) onAddRecentSearch(searchTerm.trim());
  };

  // ── Collapsed state ───────────────────────────────────────────────────────
  if (isCollapsed) {
    return (
      <div className="h-full flex flex-col items-center py-4 px-2 bg-background border-r border-border/40 gap-3">
        <Button
          variant="ghost" size="sm"
          onClick={onToggleCollapse}
          className="p-2 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-xl"
        >
          <PanelLeft className="w-4 h-4 text-violet-500" />
        </Button>

        <div className="w-6 h-px bg-border/60" />

        <div className="flex flex-col items-center leading-none gap-0.5">
          <span className="text-[10px] font-extrabold bg-gradient-to-br from-violet-600 to-purple-500 dark:from-violet-400 dark:to-purple-300 bg-clip-text text-transparent">KB</span>
          <span className="text-[8px] font-semibold text-muted-foreground">Blog</span>
        </div>

        <div className="flex-1 flex flex-col gap-1.5 items-center w-full mt-1">
          {posts.slice(0, 8).map(post => {
            const style = categoryStyle[post.category] ?? fallbackStyle;
            return (
              <button
                key={post.id}
                onClick={() => onPostClick(post)}
                title={post.title}
                className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold transition-all duration-200",
                  selectedPost?.id === post.id
                    ? "bg-violet-500 text-white shadow-md shadow-violet-200 dark:shadow-violet-900/30"
                    : "bg-muted/60 text-muted-foreground hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-500"
                )}
              >
                {post.title.charAt(0)}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Full sidebar ──────────────────────────────────────────────────────────
  return (
    <div className="h-full flex flex-col bg-background border-r border-border/40">

      {/* ── Header ── */}
      <div className="px-4 pt-5 pb-3 border-b border-border/40">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="flex items-baseline gap-1">
              <span className="text-base font-extrabold tracking-tight bg-gradient-to-br from-violet-600 to-purple-500 dark:from-violet-400 dark:to-purple-300 bg-clip-text text-transparent">
                KB
              </span>
              <span className="text-base font-extrabold tracking-tight text-foreground">Blog</span>
            </div>
            <span className="px-1.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-[10px] font-bold text-violet-600 dark:text-violet-400 tabular-nums leading-none">
              {posts.length}
            </span>
          </div>
          <Button
            variant="ghost" size="sm"
            onClick={onToggleCollapse}
            className="p-1.5 hover:bg-muted rounded-lg h-auto"
          >
            <PanelLeftClose className="w-3.5 h-3.5 text-muted-foreground" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60" />
          <Input
            placeholder="Search articles…"
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSearchSubmit()}
            className="pl-9 h-8 bg-muted/40 border-border/50 focus-visible:ring-violet-400/40 focus-visible:border-violet-300 dark:focus-visible:border-violet-700 rounded-lg text-xs placeholder:text-muted-foreground/50 transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Recent searches */}
        {recentSearches.length > 0 && !searchTerm && (
          <div className="mt-2.5 flex flex-wrap gap-1 items-center">
            <History className="w-2.5 h-2.5 text-muted-foreground/50 flex-shrink-0" />
            {recentSearches.slice(0, 3).map((term, i) => (
              <button
                key={i}
                onClick={() => onSearchChange(term)}
                className="px-2 py-0.5 text-[10px] bg-muted/60 text-muted-foreground rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {term}
              </button>
            ))}
            <button onClick={onClearSearchHistory} className="ml-auto text-muted-foreground/50 hover:text-destructive transition-colors">
              <X className="w-2.5 h-2.5" />
            </button>
          </div>
        )}
      </div>

      {/* ── Posts list ── */}
      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5 scrollbar-thin scrollbar-thumb-border/60 scrollbar-track-transparent">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            isSelected={selectedPost?.id === post.id}
            isBookmarked={bookmarkedPosts.includes(post.id)}
            onPostClick={onPostClick}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
        {posts.length === 0 && (
          <div className="text-center py-14 px-4">
            <div className="w-10 h-10 rounded-xl bg-muted/60 flex items-center justify-center mx-auto mb-3">
              <Search className="w-4 h-4 text-muted-foreground/50" />
            </div>
            <p className="text-xs font-medium text-muted-foreground">No articles found</p>
            <p className="text-[10px] text-muted-foreground/60 mt-1">Try a different search term</p>
          </div>
        )}
      </div>

    </div>
  );
};

// ── PostCard ──────────────────────────────────────────────────────────────────
interface PostCardProps {
  post: BlogPost;
  isSelected: boolean;
  isBookmarked: boolean;
  onPostClick: (post: BlogPost) => void;
  onToggleBookmark: (postId: number) => void;
}

const PostCard = ({
  post,
  isSelected,
  isBookmarked,
  onPostClick,
  onToggleBookmark,
}: PostCardProps) => {
  const style = categoryStyle[post.category] ?? fallbackStyle;

  return (
    <article
      onClick={() => onPostClick(post)}
      className={cn(
        "group relative cursor-pointer rounded-xl px-3 py-3 transition-all duration-200 select-none",
        isSelected
          ? "bg-violet-50 dark:bg-violet-900/20 shadow-sm ring-1 ring-violet-200/80 dark:ring-violet-800/50"
          : "hover:bg-muted/50"
      )}
    >
      {/* Left accent bar */}
      <div className={cn(
        "absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-200",
        isSelected
          ? "bg-violet-500 opacity-100"
          : cn("opacity-0 group-hover:opacity-60", style.bar)
      )} />

      <div className="pl-3">
        {/* Title + bookmark */}
        <div className="flex items-start justify-between gap-1.5 mb-2">
          <h3 className={cn(
            "text-[11.5px] font-semibold leading-snug line-clamp-2 flex-1 transition-colors duration-150",
            isSelected
              ? "text-violet-700 dark:text-violet-300"
              : "text-foreground/85 group-hover:text-foreground"
          )}>
            {post.title}
          </h3>
          <button
            onClick={e => { e.stopPropagation(); onToggleBookmark(post.id); }}
            className={cn(
              "p-0.5 rounded transition-all duration-150 flex-shrink-0 mt-0.5",
              isBookmarked
                ? "text-violet-500"
                : "text-muted-foreground opacity-0 group-hover:opacity-100 hover:text-violet-500"
            )}
          >
            {isBookmarked
              ? <BookmarkCheck className="w-3 h-3" />
              : <Bookmark className="w-3 h-3" />
            }
          </button>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-1.5">
          <span className={cn("px-1.5 py-0.5 rounded-md text-[9.5px] font-semibold capitalize", style.badge)}>
            {post.category}
          </span>
          <span className="flex items-center gap-0.5 text-[9.5px] text-muted-foreground/60 ml-auto">
            <Clock className="w-2.5 h-2.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </article>
  );
};
