
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogPost } from "@/data/blogPosts";

interface BlogSidebarProps {
  posts: BlogPost[];
  selectedPost: BlogPost | null;
  onPostClick: (post: BlogPost) => void;
  categories: Record<string, string>;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const BlogSidebar = ({
  posts,
  selectedPost,
  onPostClick,
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}: BlogSidebarProps) => {
  return (
    <div className="w-96 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-r border-blue-200/30 dark:border-blue-700/30 overflow-y-auto relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-purple-900/10"></div>
      
      <div className="p-6 relative z-10">
        {/* Enhanced Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Recent Posts
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {new Date().getFullYear()}
          </p>
        </div>

        {/* Enhanced Search */}
        <div className="mb-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors duration-300" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-white/90 dark:bg-slate-700/90 border-blue-200/50 dark:border-blue-700/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 backdrop-blur-xl"
            />
          </div>
        </div>

        {/* Enhanced Categories */}
        <Tabs value={selectedCategory} onValueChange={onCategoryChange} className="mb-6">
          <TabsList className="grid w-full grid-cols-2 h-auto bg-white/90 dark:bg-slate-700/90 p-1 backdrop-blur-xl border border-blue-200/30 dark:border-blue-700/30">
            <TabsTrigger value="all" className="text-xs py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300">All</TabsTrigger>
            <TabsTrigger value="strategy" className="text-xs py-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-300">Strategy</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Enhanced Posts List */}
        <div className="space-y-3">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`cursor-pointer transition-all duration-500 p-4 rounded-2xl backdrop-blur-lg border group hover:scale-105 ${
                selectedPost?.id === post.id
                  ? 'bg-gradient-to-br from-blue-50/90 to-indigo-50/70 dark:from-blue-900/40 dark:to-indigo-900/30 border-blue-300/60 dark:border-blue-600/60 shadow-xl shadow-blue-500/20'
                  : 'bg-white/70 dark:bg-slate-800/70 border-white/40 dark:border-slate-700/40 hover:bg-gradient-to-br hover:from-blue-50/70 hover:to-indigo-50/50 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/20 hover:border-blue-300/50 dark:hover:border-blue-600/50 hover:shadow-xl hover:shadow-blue-500/10'
              }`}
              onClick={() => onPostClick(post)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-6 line-clamp-2 relative z-10 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                {post.title}
              </h3>
              
              {/* Subtle shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
            </div>
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate-500 dark:text-slate-400">No posts found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
