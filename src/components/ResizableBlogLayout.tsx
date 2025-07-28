
import { useState } from "react";
import { PanelLeft, PanelRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { BlogSidebar } from "./BlogSidebar";
import { BlogPostDetail } from "./BlogPostDetail";
import { BlogPost } from "@/data/blogPosts";

interface ResizableBlogLayoutProps {
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

export const ResizableBlogLayout = ({
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
}: ResizableBlogLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-screen">
      {/* Sidebar Panel */}
      <ResizablePanel
        defaultSize={25}
        minSize={sidebarCollapsed ? 0 : 20}
        maxSize={40}
        collapsible={true}
        onCollapse={() => setSidebarCollapsed(true)}
        onExpand={() => setSidebarCollapsed(false)}
      >
        <div className="h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl border-r border-slate-200/50 dark:border-slate-700/50 shadow-2xl relative overflow-hidden">
          {/* Toggle Button */}
          <div className="absolute top-4 right-4 z-20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-slate-500 hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
            >
              {sidebarCollapsed ? <PanelRight className="w-4 h-4" /> : <PanelLeft className="w-4 h-4" />}
            </Button>
          </div>

          {!sidebarCollapsed && (
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
          )}
        </div>
      </ResizablePanel>

      {/* Resize Handle */}
      <ResizableHandle withHandle />

      {/* Main Content Panel */}
      <ResizablePanel defaultSize={75} minSize={60}>
        <div className="h-full overflow-y-auto bg-gradient-to-br from-white/30 via-slate-50/50 to-blue-50/30 dark:from-slate-800/30 dark:via-slate-900/50 dark:to-slate-800/30">
          {selectedPost ? (
            <BlogPostDetail
              post={selectedPost}
              content={markdownContent}
              onBack={onBackToList}
            />
          ) : (
            <div className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-xl animate-pulse"></div>
                  <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
                    <div className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                      Ready to explore? 
                    </div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      {sidebarCollapsed ? "Expand the sidebar to browse articles" : "Click any article in the sidebar to get started and join the conversation in the comments!"}
                    </p>
                    <div className="relative mb-8">
                      <div className="text-8xl animate-bounce">📝</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
