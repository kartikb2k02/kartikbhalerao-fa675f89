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
        fixed top-16 left-0 bottom-0 w-80 bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl 
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
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
          {/* Ambient Gradient Orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-violet-200/40 via-purple-200/30 to-transparent dark:from-violet-900/20 dark:via-purple-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/40 via-cyan-200/30 to-transparent dark:from-blue-900/20 dark:via-cyan-900/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-fuchsia-200/20 to-pink-200/20 dark:from-fuchsia-900/10 dark:to-pink-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-[15%] w-16 h-16 border border-violet-300/30 dark:border-violet-600/20 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '6s' }} />
          <div className="absolute top-40 right-[20%] w-12 h-12 border border-blue-300/30 dark:border-blue-600/20 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-[25%] w-8 h-8 bg-gradient-to-br from-purple-300/20 to-pink-300/20 dark:from-purple-700/10 dark:to-pink-700/10 rounded-md rotate-45 animate-bounce" style={{ animationDuration: '7s', animationDelay: '2s' }} />
          <div className="absolute top-[60%] right-[10%] w-6 h-6 border-2 border-cyan-300/30 dark:border-cyan-600/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          
          {/* Decorative Lines */}
          <div className="absolute top-32 left-0 w-48 h-px bg-gradient-to-r from-transparent via-violet-300/40 dark:via-violet-600/20 to-transparent" />
          <div className="absolute bottom-40 right-0 w-64 h-px bg-gradient-to-r from-transparent via-blue-300/40 dark:via-blue-600/20 to-transparent" />
          
          {/* Subtle Dot Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.3] dark:opacity-[0.1]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.4) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          
          {/* Cross Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgb(139 92 246 / 0.1) 1px, transparent 1px),
                linear-gradient(-45deg, rgb(59 130 246 / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          
          {/* Top Fade Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 dark:via-slate-600/50 to-transparent" />
          
          {/* Side Accent Bars */}
          <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-transparent via-violet-400/30 dark:via-violet-500/20 to-transparent rounded-r-full" />
          <div className="absolute right-0 top-2/3 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/30 dark:via-blue-500/20 to-transparent rounded-l-full" />
          
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
