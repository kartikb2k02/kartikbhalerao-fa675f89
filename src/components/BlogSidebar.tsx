import { useState, useMemo } from "react";
import { Search, BookOpen, Sparkles, Clock, Calendar, SortAsc, TrendingUp, ChevronRight, Zap, Flame, Star, ArrowUpRight, Hash, Layers, Bookmark, BookmarkCheck, X, History, Mail, Send, CheckCircle, PanelLeftClose, PanelLeft, Eye, ListFilter, Archive } from "lucide-react";
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
  // New props for enhanced features
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
  onViewModeChange
}: BlogSidebarProps) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Category list
  const categoryList = [{
    key: "all",
    label: "All",
    icon: Layers
  }, {
    key: "bookmarks",
    label: "Saved",
    icon: Bookmark
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

  // Calculate total reading time
  const totalReadingTime = useMemo(() => {
    return posts.reduce((total, post) => {
      const match = post.readTime.match(/(\d+)/);
      return total + (match ? parseInt(match[1]) : 0);
    }, 0);
  }, [posts]);

  // Archive grouped by month
  const archivedPosts = useMemo(() => {
    const groups: Record<string, BlogPost[]> = {};
    posts.forEach(post => {
      const date = new Date(post.date);
      const key = date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      });
      if (!groups[key]) groups[key] = [];
      groups[key].push(post);
    });
    return groups;
  }, [posts]);

  // Related posts based on selected post tags
  const relatedPosts = useMemo(() => {
    if (!selectedPost) return [];
    return allPosts.filter(p => p.id !== selectedPost.id).map(post => ({
      post,
      score: post.tags.filter(t => selectedPost.tags.includes(t)).length + (post.category === selectedPost.category ? 1 : 0)
    })).filter(item => item.score > 0).sort((a, b) => b.score - a.score).slice(0, 3).map(item => item.post);
  }, [selectedPost, allPosts]);

  // Handle search with history
  const handleSearchChange = (term: string) => {
    onSearchChange(term);
  };
  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      onAddRecentSearch(searchTerm.trim());
    }
  };

  // Newsletter submit
  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success("Successfully subscribed to newsletter!");
    setNewsletterEmail("");
    setIsSubscribing(false);
  };

  // Collapsed view
  if (isCollapsed) {
    return <div className="h-full flex flex-col items-center py-4 px-2 bg-white dark:bg-gray-950">
        <Button variant="ghost" size="sm" onClick={onToggleCollapse} className="mb-4 p-2">
          <PanelLeft className="w-5 h-5 text-violet-500" />
        </Button>
        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center mb-4">
          <span className="text-lg font-bold text-white">B</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 items-center">
          {posts.slice(0, 5).map(post => <button key={post.id} onClick={() => onPostClick(post)} className={cn("w-10 h-10 rounded-lg flex items-center justify-center transition-all", selectedPost?.id === post.id ? "bg-violet-500 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-violet-100")} title={post.title}>
              {post.title.charAt(0)}
            </button>)}
        </div>
      </div>;
  }
  return <div className="h-full flex flex-col bg-white dark:bg-gray-950">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-xl font-bold text-white">B</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center">
                  <span className="text-[8px] text-white font-bold">{posts.length}</span>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-slate-900 via-violet-800 to-slate-900 dark:from-white dark:via-violet-300 dark:to-white bg-clip-text text-transparent">
                  Blog
                </h2>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  ~{totalReadingTime} min total
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onToggleCollapse} className="p-2 hover:bg-violet-100 dark:hover:bg-violet-900/30">
              <PanelLeftClose className="w-4 h-4 text-slate-500" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Search..." value={searchTerm} onChange={e => handleSearchChange(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSearchSubmit()} className="pl-9 h-9 bg-slate-100/80 dark:bg-slate-800/80 border-0 focus:ring-2 focus:ring-violet-500/30 rounded-lg text-sm" />
          </div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && !searchTerm && <div className="mt-2 flex flex-wrap gap-1 items-center">
              <History className="w-3 h-3 text-slate-400" />
              {recentSearches.slice(0, 3).map((term, i) => <button key={i} onClick={() => onSearchChange(term)} className="px-2 py-0.5 text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full hover:bg-violet-100 dark:hover:bg-violet-900/30">
                  {term}
                </button>)}
              <button onClick={onClearSearchHistory} className="p-0.5 text-slate-400 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </div>}
        </div>

        {/* Sorting & View Mode */}
        


        {/* Posts List */}
        <div className="flex-1 overflow-y-auto px-3 py-3">
          {selectedPost && relatedPosts.length > 0 && <div className="mb-3 p-2 bg-violet-50/50 dark:bg-violet-900/20 rounded-lg border border-violet-200/50 dark:border-violet-700/30">
              <div className="flex items-center gap-1 mb-2 text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase">
                <Sparkles className="w-3 h-3" /> Related Posts
              </div>
              <div className="space-y-1">
                {relatedPosts.map(post => <button key={`related-${post.id}`} onClick={() => onPostClick(post)} className="w-full text-left p-1.5 rounded-lg text-[11px] text-slate-600 dark:text-slate-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors line-clamp-1">
                    <ChevronRight className="w-3 h-3 inline mr-1" />
                    {post.title}
                  </button>)}
              </div>
            </div>}

          {/* Archive View */}
          {viewMode === "archive" ? <div className="space-y-3">
              {Object.entries(archivedPosts).map(([month, monthPosts]) => <div key={month}>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] font-bold text-slate-500">{month}</span>
                    <span className="text-[9px] text-slate-400">({monthPosts.length})</span>
                  </div>
                  <div className="space-y-1 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
                    {monthPosts.map(post => <PostCard key={post.id} post={post} isSelected={selectedPost?.id === post.id} isRead={readPosts.includes(post.id)} isBookmarked={bookmarkedPosts.includes(post.id)} onPostClick={onPostClick} onToggleBookmark={onToggleBookmark} compact />)}
                  </div>
                </div>)}
            </div> : (/* List View */
        <div className="space-y-1.5">
              {posts.map(post => <PostCard key={post.id} post={post} isSelected={selectedPost?.id === post.id} isRead={readPosts.includes(post.id)} isBookmarked={bookmarkedPosts.includes(post.id)} onPostClick={onPostClick} onToggleBookmark={onToggleBookmark} showThumbnail />)}

              {posts.length === 0 && <div className="text-center py-8 px-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl flex items-center justify-center">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <p className="text-xs font-medium text-slate-500">No articles found</p>
                </div>}
            </div>)}
        </div>

        {/* Newsletter Footer */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-1 mb-2 text-[10px] font-bold text-slate-500">
            <Mail className="w-3 h-3" /> Newsletter
          </div>
          <div className="flex gap-1">
            <Input type="email" placeholder="your@email.com" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleNewsletterSubmit()} className="h-8 text-xs bg-white/80 dark:bg-slate-800/80 border-slate-200/60" />
            <Button size="sm" onClick={handleNewsletterSubmit} disabled={isSubscribing} className="h-8 px-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
              {isSubscribing ? <Sparkles className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
            </Button>
          </div>
      </div>
    </div>
  </div>;
};

// Post Card Component
interface PostCardProps {
  post: BlogPost;
  isSelected: boolean;
  isRead: boolean;
  isBookmarked: boolean;
  onPostClick: (post: BlogPost) => void;
  onToggleBookmark: (postId: number) => void;
  showThumbnail?: boolean;
  compact?: boolean;
}
const PostCard = ({
  post,
  isSelected,
  isRead,
  isBookmarked,
  onPostClick,
  onToggleBookmark,
  showThumbnail = false,
  compact = false
}: PostCardProps) => {
  if (compact) {
    return <button onClick={() => onPostClick(post)} className={cn("w-full text-left p-2 rounded-lg transition-all flex items-center gap-2", isSelected ? "bg-violet-100 dark:bg-violet-900/40" : "hover:bg-slate-100 dark:hover:bg-slate-800/60")}>
        {isRead && <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />}
        <span className={cn("text-[11px] line-clamp-1 flex-1", isSelected ? "text-violet-700 dark:text-violet-300 font-medium" : "text-slate-600 dark:text-slate-400")}>
          {post.title}
        </span>
        <span className="text-[9px] text-slate-400">{post.readTime.replace(" read", "")}</span>
      </button>;
  }
  return <article onClick={() => onPostClick(post)} className={cn("group relative cursor-pointer rounded-xl p-3 transition-all duration-200", isSelected ? "bg-gradient-to-r from-violet-100 via-purple-50 to-fuchsia-100 dark:from-violet-900/40 dark:via-purple-900/30 dark:to-fuchsia-900/40 shadow-md border border-violet-200/50 dark:border-violet-700/30" : "bg-white/50 dark:bg-slate-800/30 hover:bg-white/80 dark:hover:bg-slate-800/60 hover:shadow-md border border-transparent hover:border-slate-200/60 dark:hover:border-slate-700/50")}>
      {/* Selection Indicator */}
      <div className={cn("absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-full transition-all duration-200", isSelected ? "h-8 bg-gradient-to-b from-violet-500 to-fuchsia-500" : "h-0 bg-transparent group-hover:h-5 group-hover:bg-slate-300")} />

      <div className="pl-2 flex items-start gap-2">
        {/* Thumbnail */}
        {showThumbnail && post.image && <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-800">
            <img src={post.image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-1">
            <h3 className={cn("text-[12px] font-semibold leading-snug transition-colors line-clamp-2", isSelected ? "text-violet-700 dark:text-violet-300" : "text-slate-700 dark:text-slate-300 group-hover:text-slate-900")}>
              {isRead && <Eye className="w-3 h-3 inline mr-1 text-green-500" />}
              {post.title}
            </h3>
            
            {/* Bookmark Button */}
            <button onClick={e => {
            e.stopPropagation();
            onToggleBookmark(post.id);
          }} className={cn("p-1 rounded-md transition-all flex-shrink-0", isBookmarked ? "text-violet-500 bg-violet-100 dark:bg-violet-900/40" : "text-slate-400 opacity-0 group-hover:opacity-100 hover:text-violet-500")}>
              {isBookmarked ? <BookmarkCheck className="w-3 h-3" /> : <Bookmark className="w-3 h-3" />}
            </button>
          </div>
          
          <div className="flex items-center gap-2 mt-1.5">
            <span className={cn("flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded", isSelected ? "bg-violet-200/60 dark:bg-violet-800/40 text-violet-600 dark:text-violet-300" : "bg-slate-100 dark:bg-slate-700/50 text-slate-500")}>
              <Clock className="w-2.5 h-2.5" />
              {post.readTime.replace(" read", "")}
            </span>
            {post.featured && <Star className="w-3 h-3 text-amber-500 fill-current" />}
          </div>
        </div>
      </div>
    </article>;
};