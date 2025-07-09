
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
    <div className="w-96 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-r border-blue-200/30 dark:border-blue-700/30 overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Recent Posts
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {new Date().getFullYear()}
          </p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-white/80 dark:bg-slate-700/80 border-blue-200/30 dark:border-blue-700/30"
            />
          </div>
        </div>

        {/* Categories */}
        <Tabs value={selectedCategory} onValueChange={onCategoryChange} className="mb-6">
          <TabsList className="grid w-full grid-cols-2 h-auto bg-white/90 dark:bg-slate-700/90 p-1">
            <TabsTrigger value="all" className="text-xs py-2">All</TabsTrigger>
            <TabsTrigger value="strategy" className="text-xs py-2">Strategy</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Posts List - Clean List Design */}
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`cursor-pointer transition-all duration-300 p-4 rounded-2xl backdrop-blur-lg border ${
                selectedPost?.id === post.id
                  ? 'bg-gradient-to-br from-blue-50/80 to-indigo-50/60 dark:from-blue-900/30 dark:to-indigo-900/20 border-blue-200/50 dark:border-blue-700/50 shadow-lg shadow-blue-500/10'
                  : 'bg-white/60 dark:bg-slate-800/60 border-white/30 dark:border-slate-700/30 hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-indigo-50/40 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/10 hover:border-blue-200/40 dark:hover:border-blue-700/40 hover:shadow-lg hover:shadow-blue-500/5'
              }`}
              onClick={() => onPostClick(post)}
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white leading-6 line-clamp-2">
                {post.title}
              </h3>
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
