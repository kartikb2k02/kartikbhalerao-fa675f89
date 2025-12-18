import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogSidebar } from "./BlogSidebar";
import { BlogPostDetail } from "./BlogPostDetail";
import { BlogPost } from "@/data/blogPosts";
import type { SortOption } from "@/pages/Blog";

interface BlogLayoutProps {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  onPostClick: (post: BlogPost) => void;
  categories: Record<string, string>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  markdownContent: string;
  onBackToList: () => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  blogTheme: "light" | "dark" | "system";
  onThemeChange: (theme: "light" | "dark" | "system") => void;
}

export const BlogLayout = ({
  posts,
  selectedPost,
  onPostClick,
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  markdownContent,
  onBackToList,
  sortBy,
  onSortChange,
  blogTheme,
  onThemeChange,
}: BlogLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 bottom-0 w-72 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl 
        border-r border-slate-200/60 dark:border-slate-700/60 shadow-2xl z-50
        transform transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:top-0 lg:z-30
      `}>
        {/* Close Button for Mobile */}
        <div className="lg:hidden absolute top-3 right-3 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="h-8 w-8 p-0 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Sidebar Content */}
        <div className="h-full overflow-hidden">
          <BlogSidebar
            posts={posts}
            selectedPost={selectedPost}
            onPostClick={(post) => {
              onPostClick(post);
              setSidebarOpen(false);
            }}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            sortBy={sortBy}
            onSortChange={onSortChange}
            blogTheme={blogTheme}
            onThemeChange={onThemeChange}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 transition-all duration-300">
        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-20 left-4 z-40">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleSidebar}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/60 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Content Area */}
        <div className="min-h-screen bg-gradient-to-br from-white/40 via-slate-50/60 to-blue-50/40 dark:from-slate-800/40 dark:via-slate-900/60 dark:to-slate-800/40">
          {/* Enhanced Grid Background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          
          {selectedPost ? (
            <BlogPostDetail
              post={selectedPost}
              content={markdownContent}
              onBack={onBackToList}
            />
          ) : (
            <div className="p-8 lg:p-12 text-center relative z-10">
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                  
                  {/* Content Card */}
                  <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/60 dark:border-slate-700/60 shadow-2xl">
                    {/* Floating Orbs */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-violet-500/60 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-fuchsia-500/60 rounded-full animate-pulse delay-300"></div>
                    
                    <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-violet-800 to-fuchsia-800 dark:from-white dark:via-violet-200 dark:to-fuchsia-200 bg-clip-text text-transparent mb-6">
                      Ready to explore? 
                    </div>
                    
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      Select any article from the sidebar to start reading and join the conversation!
                    </p>
                    
                    {/* Interactive Elements */}
                    <div className="relative mb-8">
                      <div className="text-8xl animate-bounce">📚</div>
                      <div className="absolute -top-2 -right-2 text-2xl animate-ping">✨</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
