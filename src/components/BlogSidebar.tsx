
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
    <div className="h-full relative">
      <div className="p-6 relative z-10">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KB</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Blog Posts
            </h2>
          </div>
          <div className="h-px bg-gradient-to-r from-blue-200 via-purple-200 to-transparent dark:from-blue-800 dark:via-purple-800"></div>
        </div>

        {/* Enhanced Search */}
        <div className="mb-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-blue-500 transition-colors duration-300" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-white/70 dark:bg-slate-800/70 border-slate-200/60 dark:border-slate-700/60 focus:border-blue-500/60 dark:focus:border-blue-400/60 transition-all duration-300 backdrop-blur-sm relative z-10"
            />
          </div>
        </div>

        {/* Simplified Categories - Only Titles */}
        <Tabs value={selectedCategory} onValueChange={onCategoryChange} className="mb-6">
          <TabsList className="grid w-full grid-cols-2 h-auto bg-slate-100/80 dark:bg-slate-800/80 p-1 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 rounded-xl">
            <TabsTrigger 
              value="all" 
              className="text-sm py-2 px-4 rounded-lg font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-slate-600 dark:data-[state=inactive]:text-slate-400 data-[state=inactive]:hover:text-blue-600 dark:data-[state=inactive]:hover:text-blue-400"
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="strategy" 
              className="text-sm py-2 px-4 rounded-lg font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=inactive]:text-slate-600 dark:data-[state=inactive]:text-slate-400 data-[state=inactive]:hover:text-blue-600 dark:data-[state=inactive]:hover:text-blue-400"
            >
              Strategy
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Enhanced Posts List - Only Titles */}
        <div className="space-y-3">
          {posts.map((post, index) => (
            <article
              key={post.id}
              className={`cursor-pointer transition-all duration-500 p-4 rounded-xl backdrop-blur-sm border group relative overflow-hidden ${
                selectedPost?.id === post.id
                  ? 'bg-gradient-to-br from-blue-50/90 to-indigo-50/80 dark:from-blue-950/60 dark:to-indigo-950/50 border-blue-300/60 dark:border-blue-600/60 shadow-xl shadow-blue-500/20 transform scale-105'
                  : 'bg-white/60 dark:bg-slate-800/60 border-slate-200/40 dark:border-slate-700/40 hover:bg-gradient-to-br hover:from-blue-50/80 hover:to-indigo-50/60 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/40 hover:border-blue-300/60 dark:hover:border-blue-600/60 hover:shadow-xl hover:shadow-blue-500/10 hover:transform hover:scale-102'
              }`}
              onClick={() => onPostClick(post)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content - Only Title */}
              <div className="relative z-10">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-6 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>
              </div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 rounded-xl"></div>
            </article>
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-slate-500 dark:text-slate-400 font-medium">No posts found</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
