
import { Search, Calendar, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <Card
              key={post.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedPost?.id === post.id
                  ? 'ring-2 ring-blue-500 shadow-lg bg-blue-50/50 dark:bg-blue-900/20'
                  : 'hover:shadow-md bg-white/80 dark:bg-slate-700/80'
              }`}
              onClick={() => onPostClick(post)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-sm font-semibold line-clamp-2 leading-5 text-slate-900 dark:text-white">
                      {post.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-4 mb-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <Badge 
                    variant="secondary" 
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {categories[post.category as keyof typeof categories]}
                  </Badge>
                </div>
              </CardContent>
            </Card>
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
