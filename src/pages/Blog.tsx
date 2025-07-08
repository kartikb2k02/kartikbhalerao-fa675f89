import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Tag, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { FooterSection } from "@/components/FooterSection";
import { blogPosts } from "@/data/blogPosts";
import { getMarkdownContent } from "@/utils/blogContent";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const navigate = useNavigate();

  const categories = {
    all: "All Posts",
    analysis: "Product Analysis",
    design: "Product Design", 
    analytics: "Data & Analytics",
    strategy: "Product Strategy",
    research: "User Research",
    leadership: "Leadership"
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleBlogPostClick = async (post: any) => {
    setSelectedPost(post);
    const content = await getMarkdownContent(post.slug, post);
    setMarkdownContent(content);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setMarkdownContent("");
  };

  const handleTitleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a post is selected, show the full post view
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-blue-200/30 dark:border-blue-700/30 transition-all duration-300 shadow-xl shadow-blue-500/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <button
                onClick={handleTitleClick}
                className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <img
                    src="/lovable-uploads/b0e13af0-105a-4724-ad69-d72b85aaf0a1.png"
                    alt="Kartik Bhalerao"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
                Kartik Bhalerao
              </button>
              <div className="flex items-center space-x-6">
                <Button 
                  variant="ghost" 
                  className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-xl"
                  onClick={handleBackToList}
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                  Back to Blog
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div className="pt-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
            {/* Post Header */}
            <div className="mb-12">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg capitalize mb-2">
                    {selectedPost.category}
                  </Badge>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {selectedPost.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedPost.tags.map((tag: string) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Post Content */}
            <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 dark:border-slate-700/30 shadow-lg">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {markdownContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <FooterSection />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)] animate-pulse [animation-delay:1s]"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl backdrop-blur-sm border border-blue-200/20 dark:border-blue-700/20 rotate-12 animate-float-slow flex items-center justify-center shadow-lg">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">📝</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-purple-200/20 dark:border-purple-700/20 rotate-45 animate-float shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-400 text-sm">💡</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl backdrop-blur-sm border border-green-200/20 dark:border-green-700/20 -rotate-12 animate-float-slower shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 bg-green-500/20 rounded-lg"></div>
          </div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      {/* Enhanced Navigation - Updated to match home page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-blue-200/30 dark:border-blue-700/30 transition-all duration-300 shadow-xl shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Name matching home page */}
            <button
              onClick={handleTitleClick}
              className="text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="/lovable-uploads/b0e13af0-105a-4724-ad69-d72b85aaf0a1.png"
                  alt="Kartik Bhalerao"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              Kartik Bhalerao
            </button>
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-xl"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-6 py-3 rounded-full text-blue-600 dark:text-blue-400 font-medium text-base mb-8 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-xl animate-bounce">📝</span>
              <span>Blog</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-none">
              Product Insights{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Blog
              </span>
            </h1>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full mb-8 shadow-lg"></div>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
              Sharing my learnings, insights, and experiences in product management, 
              <br className="hidden sm:block" />
              design, and strategy
            </p>
          </div>

          {/* Enhanced Search and Filter Section */}
          <div className="mb-16 space-y-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  placeholder="Search articles, tags, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-blue-200/30 dark:border-blue-700/30 rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                />
              </div>
            </div>

            {/* Enhanced Tabs Section */}
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full max-w-5xl mx-auto grid-cols-3 lg:grid-cols-7 h-14 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-blue-200/30 dark:border-blue-700/30 rounded-2xl p-2 shadow-xl">
                {Object.entries(categories).map(([key, label]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-xl rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Blog Posts Content */}
              {Object.keys(categories).map((category) => (
                <TabsContent key={category} value={category} className="mt-16">
                  {/* Results Counter */}
                  <div className="text-center mb-8">
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                      Found <span className="font-bold text-blue-600 dark:text-blue-400">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
                      {searchTerm && <span> matching "<span className="font-medium">{searchTerm}</span>"</span>}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredPosts.map((post, index) => (
                      <Card 
                        key={post.id} 
                        className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-2 border-white/40 dark:border-slate-700/40 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 overflow-hidden hover:-translate-y-3 cursor-pointer rounded-2xl"
                        onClick={() => handleBlogPostClick(post)}
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <div className="relative h-56 overflow-hidden rounded-t-2xl">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl capitalize px-3 py-1 hover:shadow-2xl transition-all duration-300">
                              {categories[post.category as keyof typeof categories]}
                            </Badge>
                          </div>
                          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2">
                              <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-blue-400 rotate-180" />
                            </div>
                          </div>
                        </div>
                        
                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-bold">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                          <p className="text-slate-600 dark:text-slate-400 text-base line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="text-xs border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-200">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Enhanced Empty State */}
                  {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                      <div className="text-8xl mb-8 animate-bounce">📝</div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">No articles found</h3>
                      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                        {searchTerm 
                          ? `No articles match "${searchTerm}". Try different keywords or browse all categories.`
                          : "Try selecting a different category or search for specific topics."
                        }
                      </p>
                      {searchTerm && (
                        <Button 
                          onClick={() => setSearchTerm("")}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Clear Search
                        </Button>
                      )}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default Blog;
