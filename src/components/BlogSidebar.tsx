import { useState, useMemo } from "react";
import {
  Search, Clock, Calendar, SortAsc, TrendingUp, Zap, Flame, Star,
  Layers, Bookmark, BookmarkCheck, X, History, Mail, Send, CheckCircle,
  PanelLeftClose, PanelLeft, Eye, Sparkles, BookOpen,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogPosts";
import { cn } from "@/lib/utils";
import type { SortOption } from "@/pages/Blog";
import { toast } from "sonner";

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

const sortOptions: { value: SortOption; label: string; icon: typeof Calendar }[] = [
  { value: "date",     label: "Latest",      icon: Flame   },
  { value: "readTime", label: "Quick reads",  icon: Zap     },
  { value: "title",    label: "A–Z",          icon: SortAsc },
];

const categoryList = [
  { key: "all",       label: "All",       icon: Layers    },
  { key: "bookmarks", label: "Saved",     icon: Bookmark  },
  { key: "strategy",  label: "Strategy",  icon: Star      },
  { key: "analysis",  label: "Analysis",  icon: TrendingUp },
  { key: "design",    label: "Design",    icon: Sparkles  },
];

export const BlogSidebar = ({
  posts,
  allPosts,
  selectedPost,
  onPostClick,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  bookmarkedPosts,
  onToggleBookmark,
  readPosts,
  recentSearches,
  onClearSearchHistory,
  onAddRecentSearch,
  isCollapsed,
  onToggleCollapse,
  viewMode,
  onViewModeChange,
}: BlogSidebarProps) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const totalReadingTime = useMemo(() => {
    return posts.reduce((total, post) => {
      const match = post.readTime.match(/(\d+)/);
      return total + (match ? parseInt(match[1]) : 0);
    }, 0);
  }, [posts]);

  const archivedPosts = useMemo(() => {
    const groups: Record<string, BlogPost[]> = {};
    posts.forEach(post => {
      const date = new Date(post.date);
      const key = date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
      if (!groups[key]) groups[key] = [];
      groups[key].push(post);
    });
    return groups;
  }, [posts]);

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) onAddRecentSearch(searchTerm.trim());
  };

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Successfully subscribed!");
    setNewsletterEmail("");
    setIsSubscribing(false);
  };

  // ── Collapsed state ──────────────────────────────────────────────────────────
  if (isCollapsed) {
    return (
      <div className="h-full flex flex-col items-center py-4 px-2 bg-white dark:bg-slate-950 border-r border-slate-100 dark:border-slate-800">
        <Button variant="ghost" size="sm" onClick={onToggleCollapse} className="mb-5 p-2 hover:bg-violet-50 dark:hover:bg-violet-900/20">
          <PanelLeft className="w-4 h-4 text-violet-500" />
        </Button>
        <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-5 shadow-md shadow-violet-500/20">
          <BookOpen className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center w-full">
          {posts.slice(0, 6).map(post => (
            <button
              key={post.id}
              onClick={() => onPostClick(post)}
              title={post.title}
              className={cn(
                "w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all",
                selectedPost?.id === post.id
                  ? "bg-violet-500 text-white shadow-md"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-violet-100 dark:hover:bg-violet-900/30"
              )}
            >
              {post.title.charAt(0)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ── Full sidebar ─────────────────────────────────────────────────────────────
  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-950">

      {/* ── Header ── */}
      <div className="px-4 pt-4 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-md shadow-violet-500/20">
                <BookOpen className="w-4.5 h-4.5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-950 flex items-center justify-center">
                <span className="text-[8px] text-white font-bold">{posts.length}</span>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">Articles</h2>
              <p className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                <Clock className="w-2.5 h-2.5" />
                ~{totalReadingTime} min total reading
              </p>
            </div>
          </div>
          <Button
            variant="ghost" size="sm"
            onClick={onToggleCollapse}
            className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            <PanelLeftClose className="w-4 h-4 text-slate-400" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
          <Input
            placeholder="Search articles…"
            value={searchTerm}
            onChange={e => onSearchChange(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSearchSubmit()}
            className="pl-9 h-8 bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 focus-visible:ring-violet-400/40 rounded-lg text-xs"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Recent searches */}
        {recentSearches.length > 0 && !searchTerm && (
          <div className="mt-2 flex flex-wrap gap-1 items-center">
            <History className="w-3 h-3 text-slate-400 flex-shrink-0" />
            {recentSearches.slice(0, 3).map((term, i) => (
              <button
                key={i}
                onClick={() => onSearchChange(term)}
                className="px-2 py-0.5 text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 transition-colors"
              >
                {term}
              </button>
            ))}
            <button onClick={onClearSearchHistory} className="ml-auto text-slate-400 hover:text-red-400 transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>

      {/* ── Category filters ── */}
      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Category</p>
        <div className="flex flex-wrap gap-1.5">
          {categoryList.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onCategoryChange(key)}
              className={cn(
                "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-150",
                selectedCategory === key
                  ? "bg-violet-500 text-white shadow-sm shadow-violet-500/30"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600"
              )}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Sort + View toggle ── */}
      <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1">
          {sortOptions.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => onSortChange(value)}
              className={cn(
                "inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium transition-all duration-150",
                sortBy === value
                  ? "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400"
                  : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              )}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
        </div>

        {/* List / Archive toggle */}
        <div className="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800 rounded-md p-0.5">
          <button
            onClick={() => onViewModeChange("list")}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] font-medium transition-all",
              viewMode === "list"
                ? "bg-white dark:bg-slate-700 text-slate-700 dark:text-white shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            )}
          >
            List
          </button>
          <button
            onClick={() => onViewModeChange("archive")}
            className={cn(
              "px-2 py-0.5 rounded text-[10px] font-medium transition-all",
              viewMode === "archive"
                ? "bg-white dark:bg-slate-700 text-slate-700 dark:text-white shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            )}
          >
            Archive
          </button>
        </div>
      </div>

      {/* ── Posts list ── */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1">
        {viewMode === "archive" ? (
          <div className="space-y-4">
            {Object.entries(archivedPosts).map(([month, monthPosts]) => (
              <div key={month}>
                <div className="flex items-center gap-2 mb-2 px-1">
                  <Calendar className="w-3 h-3 text-violet-400" />
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">{month}</span>
                  <span className="text-[9px] text-slate-400 ml-auto">{monthPosts.length} posts</span>
                </div>
                <div className="space-y-1 pl-3 border-l-2 border-violet-100 dark:border-violet-900/40">
                  {monthPosts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      isSelected={selectedPost?.id === post.id}
                      isRead={readPosts.includes(post.id)}
                      isBookmarked={bookmarkedPosts.includes(post.id)}
                      onPostClick={onPostClick}
                      onToggleBookmark={onToggleBookmark}
                      compact
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {posts.map(post => (
              <PostCard
                key={post.id}
                post={post}
                isSelected={selectedPost?.id === post.id}
                isRead={readPosts.includes(post.id)}
                isBookmarked={bookmarkedPosts.includes(post.id)}
                onPostClick={onPostClick}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
            {posts.length === 0 && (
              <div className="text-center py-10 px-4">
                <div className="w-12 h-12 mx-auto mb-3 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <p className="text-xs font-medium text-slate-400">No articles found</p>
                <p className="text-[10px] text-slate-400 mt-1">Try a different search or category</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Newsletter footer ── */}
      <div className="px-4 py-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
        <div className="flex items-center gap-1.5 mb-2">
          <Mail className="w-3 h-3 text-violet-500" />
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Newsletter</span>
        </div>
        <p className="text-[10px] text-slate-400 mb-2">Get new articles delivered to your inbox.</p>
        <div className="flex gap-1.5">
          <Input
            type="email"
            placeholder="your@email.com"
            value={newsletterEmail}
            onChange={e => setNewsletterEmail(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleNewsletterSubmit()}
            className="h-8 text-xs bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg"
          />
          <Button
            size="sm"
            onClick={handleNewsletterSubmit}
            disabled={isSubscribing}
            className="h-8 w-8 p-0 flex-shrink-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white hover:opacity-90 rounded-lg shadow-sm"
          >
            {isSubscribing ? <Sparkles className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
          </Button>
        </div>
      </div>
    </div>
  );
};

// ── PostCard ──────────────────────────────────────────────────────────────────
interface PostCardProps {
  post: BlogPost;
  isSelected: boolean;
  isRead: boolean;
  isBookmarked: boolean;
  onPostClick: (post: BlogPost) => void;
  onToggleBookmark: (postId: number) => void;
  compact?: boolean;
}

const PostCard = ({
  post,
  isSelected,
  isRead,
  isBookmarked,
  onPostClick,
  onToggleBookmark,
  compact = false,
}: PostCardProps) => {
  if (compact) {
    return (
      <button
        onClick={() => onPostClick(post)}
        className={cn(
          "w-full text-left px-2 py-1.5 rounded-lg transition-all flex items-center gap-2",
          isSelected
            ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
            : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        )}
      >
        {isRead
          ? <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0" />
          : <span className="w-3 h-3 flex-shrink-0" />
        }
        <span className="text-[11px] font-medium line-clamp-1 flex-1">{post.title}</span>
        <span className="text-[9px] text-slate-400 flex-shrink-0">{post.readTime.replace(" read", "")}</span>
      </button>
    );
  }

  return (
    <article
      onClick={() => onPostClick(post)}
      className={cn(
        "group relative cursor-pointer rounded-xl p-3 transition-all duration-200 border",
        isSelected
          ? "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700/40 shadow-sm"
          : "bg-white dark:bg-slate-900/40 border-transparent hover:border-slate-200 dark:hover:border-slate-700/60 hover:shadow-sm"
      )}
    >
      {/* Left accent bar */}
      <div
        className={cn(
          "absolute left-0 top-3 bottom-3 w-0.5 rounded-full transition-all duration-200",
          isSelected ? "bg-violet-500" : "bg-transparent group-hover:bg-slate-200 dark:group-hover:bg-slate-700"
        )}
      />

      <div className="pl-2 flex items-start gap-2.5">
        {/* Thumbnail */}
        {post.image && (
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700">
            <img src={post.image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1 mb-1">
            <h3
              className={cn(
                "text-xs font-semibold leading-snug line-clamp-2 transition-colors",
                isSelected
                  ? "text-violet-700 dark:text-violet-300"
                  : "text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white"
              )}
            >
              {post.title}
            </h3>
            <button
              onClick={e => { e.stopPropagation(); onToggleBookmark(post.id); }}
              className={cn(
                "p-1 rounded-md transition-all flex-shrink-0 -mt-0.5",
                isBookmarked
                  ? "text-violet-500 bg-violet-100 dark:bg-violet-900/40"
                  : "text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100 hover:text-violet-500"
              )}
            >
              {isBookmarked ? <BookmarkCheck className="w-3 h-3" /> : <Bookmark className="w-3 h-3" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            {isRead && (
              <span className="flex items-center gap-0.5 text-[9px] text-emerald-500 font-medium">
                <Eye className="w-2.5 h-2.5" /> Read
              </span>
            )}
            {post.featured && <Star className="w-2.5 h-2.5 text-amber-400 fill-current" />}
            <span
              className={cn(
                "ml-auto flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-md",
                isSelected
                  ? "bg-violet-100 dark:bg-violet-800/40 text-violet-600 dark:text-violet-300"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-400"
              )}
            >
              <Clock className="w-2.5 h-2.5" />
              {post.readTime.replace(" read", "")}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
