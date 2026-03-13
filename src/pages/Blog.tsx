import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { blogPosts, BlogPost } from "@/data/blogPosts";
import { BlogLayout } from "@/components/BlogLayout";
import { Header } from "@/components/Header";
import { useBlogPreferences } from "@/hooks/useBlogPreferences";

export type SortOption = "date" | "readTime" | "title";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost] = useState<BlogPost | null>(null);
  const [markdownContent] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("date");
  const [blogTheme, setBlogTheme] = useState<"light" | "dark" | "system">("system");

  // Blog preferences from localStorage
  const {
    bookmarkedPosts,
    readPosts,
    recentSearches,
    isCollapsed,
    viewMode,
    toggleBookmark,
    markAsRead,
    addRecentSearch,
    clearSearchHistory,
    toggleCollapsed,
    setViewMode,
  } = useBlogPreferences();

  const categories = {
    all: "All Posts",
    bookmarks: "Bookmarks",
    analysis: "Product Analysis",
    design: "Product Design",
    analytics: "Data & Analytics",
    strategy: "Product Strategy",
    research: "User Research",
    leadership: "Leadership",
  };

  // Parse reading time to number for sorting
  const parseReadTime = (readTime: string): number => {
    const match = readTime.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredAndSortedPosts = useMemo(() => {
    let posts = blogPosts.filter((post) => {
      // Handle bookmarks category specially
      if (selectedCategory === "bookmarks") {
        if (!bookmarkedPosts.includes(post.id)) return false;
      } else {
        const matchesCategory =
          selectedCategory === "all" || post.category === selectedCategory;
        if (!matchesCategory) return false;
      }

      const matchesSearch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesSearch;
    });

    // Sort posts
    posts.sort((a, b) => {
      switch (sortBy) {
        case "date":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "readTime":
          return parseReadTime(a.readTime) - parseReadTime(b.readTime);
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return posts;
  }, [selectedCategory, searchTerm, sortBy, bookmarkedPosts]);

  const handleBlogPostClick = (post: BlogPost) => {
    markAsRead(post.id);
    navigate(`/blog/${post.slug}`);
  };

  // Auto-open post when arriving from header dropdown (?slug=X)
  useEffect(() => {
    const slug = searchParams.get("slug");
    if (slug) {
      navigate(`/blog/${slug}`, { replace: true });
    }
  }, []);

  const handleBackToList = () => {
    navigate("/blog");
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  // Determine blog-specific theme class
  const blogThemeClass =
    blogTheme === "system" ? "" : blogTheme === "dark" ? "dark" : "light-theme";

  return (
    <div className={`min-h-screen w-full text-foreground relative bg-white dark:bg-zinc-900 ${blogThemeClass}`}>
      <Header />
      <div className="pt-16">
        <BlogLayout
          posts={filteredAndSortedPosts}
          allPosts={blogPosts}
          selectedPost={selectedPost}
          onPostClick={handleBlogPostClick}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          markdownContent={markdownContent}
          onBackToList={handleBackToList}
          sortBy={sortBy}
          onSortChange={setSortBy}
          blogTheme={blogTheme}
          onThemeChange={setBlogTheme}
          // New props for enhanced features
          bookmarkedPosts={bookmarkedPosts}
          onToggleBookmark={toggleBookmark}
          readPosts={readPosts}
          recentSearches={recentSearches}
          onClearSearchHistory={clearSearchHistory}
          onAddRecentSearch={addRecentSearch}
          isCollapsed={isCollapsed}
          onToggleCollapse={toggleCollapsed}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>
    </div>
  );
};

export default Blog;
