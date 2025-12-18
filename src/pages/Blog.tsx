import { useState, useMemo } from "react";

import { blogPosts, BlogPost } from "@/data/blogPosts";
import { getMarkdownContent } from "@/utils/blogContent";
import { BlogLayout } from "@/components/BlogLayout";
import { Header } from "@/components/Header";

export type SortOption = "date" | "readTime" | "title";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("date");
  const [blogTheme, setBlogTheme] = useState<"light" | "dark" | "system">("system");

  const categories = {
    all: "All Posts",
    analysis: "Product Analysis",
    design: "Product Design", 
    analytics: "Data & Analytics",
    strategy: "Product Strategy",
    research: "User Research",
    leadership: "Leadership"
  };

  // Parse reading time to number for sorting
  const parseReadTime = (readTime: string): number => {
    const match = readTime.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  const filteredAndSortedPosts = useMemo(() => {
    let posts = blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch = searchTerm === "" || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
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
  }, [selectedCategory, searchTerm, sortBy]);

  const handleBlogPostClick = async (post: BlogPost) => {
    setSelectedPost(post);
    const content = await getMarkdownContent(post.slug, post);
    setMarkdownContent(content);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setMarkdownContent("");
  };

  // Determine blog-specific theme class
  const blogThemeClass = blogTheme === "system" 
    ? "" 
    : blogTheme === "dark" 
      ? "dark" 
      : "light-theme";

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative ${blogThemeClass}`}>
      {/* Enhanced Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px),
            radial-gradient(circle 600px at 30% 40%, rgba(99,102,241,0.15), transparent),
            radial-gradient(circle 800px at 70% 80%, rgba(168,85,247,0.1), transparent),
            radial-gradient(circle 400px at 40% 100%, rgba(59,130,246,0.1), transparent)
          `,
          backgroundSize: "60px 60px, 60px 60px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />
      
      {/* Header - Same as home page */}
      <Header />

      <div className="pt-16 relative z-10">
        <BlogLayout
          posts={filteredAndSortedPosts}
          selectedPost={selectedPost}
          onPostClick={handleBlogPostClick}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          markdownContent={markdownContent}
          onBackToList={handleBackToList}
          sortBy={sortBy}
          onSortChange={setSortBy}
          blogTheme={blogTheme}
          onThemeChange={setBlogTheme}
        />
      </div>
    </div>
  );
};

export default Blog;
