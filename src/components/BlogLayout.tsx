
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogSidebar } from "./BlogSidebar";
import { BlogPostDetail } from "./BlogPostDetail";
import { BlogPost } from "@/data/blogPosts";

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
        fixed top-16 left-0 bottom-0 w-80 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl 
        border-r border-slate-200/60 dark:border-slate-700/60 shadow-2xl z-50
        transform transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:top-0 lg:z-30
      `}>
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/30 to-purple-50/50 dark:from-blue-950/30 dark:via-slate-900/50 dark:to-purple-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.12),transparent_50%)]" />
        
        {/* Close Button for Mobile */}
        <div className="lg:hidden absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Sidebar Content */}
        <div className="relative z-10 h-full overflow-y-auto">
          <BlogSidebar
            posts={posts}
            selectedPost={selectedPost}
            onPostClick={onPostClick}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-60 transition-all duration-300">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-2xl animate-pulse"></div>
                  
                  {/* Content Card */}
                  <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/60 dark:border-slate-700/60 shadow-2xl">
                    {/* Floating Orbs */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500/60 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-500/60 rounded-full animate-pulse delay-300"></div>
                    
                    <div className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
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
