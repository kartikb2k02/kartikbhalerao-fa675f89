
import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FooterSection } from "@/components/FooterSection";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Product Teardowns: Learning from Industry Giants",
      excerpt: "How analyzing products like Blinkit and Google Pay can make you a better Product Manager",
      content: "Product teardowns are one of the most effective ways to learn product management...",
      category: "analysis",
      date: "2024-06-15",
      readTime: "8 min read",
      tags: ["Product Management", "Analysis", "Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Building User-Centric Fintech Products: Lessons from Gullak",
      excerpt: "Key insights from designing a savings app that users actually want to use",
      content: "When building Gullak, we learned that fintech success isn't just about features...",
      category: "design",
      date: "2024-06-10",
      readTime: "6 min read",
      tags: ["Fintech", "User Experience", "Product Design"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Data-Driven Decision Making: My Experience at Decision Machine",
      excerpt: "How to balance quantitative insights with qualitative user feedback",
      content: "Working as a Product Analyst taught me the importance of data in product decisions...",
      category: "analytics",
      date: "2024-06-05",
      readTime: "7 min read",
      tags: ["Data Analytics", "Product Strategy", "Decision Making"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop"
    },
    {
      id: 4,
      title: "From Idea to MVP: A Product Manager's Journey",
      excerpt: "Step-by-step guide to building your first product from concept to launch",
      content: "Building an MVP is both an art and a science. Here's what I learned...",
      category: "strategy",
      date: "2024-05-28",
      readTime: "10 min read",
      tags: ["MVP", "Product Strategy", "Startup"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
    },
    {
      id: 5,
      title: "User Research That Actually Matters",
      excerpt: "Moving beyond vanity metrics to insights that drive product decisions",
      content: "User research is the foundation of great product management...",
      category: "research",
      date: "2024-05-20",
      readTime: "9 min read",
      tags: ["User Research", "Product Management", "Insights"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Scaling Product Teams: Lessons Learned",
      excerpt: "How to maintain product quality while growing your team",
      content: "Scaling a product team is one of the biggest challenges in product management...",
      category: "leadership",
      date: "2024-05-15",
      readTime: "12 min read",
      tags: ["Team Management", "Leadership", "Scaling"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop"
    }
  ];

  const categories = {
    all: "All Posts",
    analysis: "Product Analysis",
    design: "Product Design", 
    analytics: "Data & Analytics",
    strategy: "Product Strategy",
    research: "User Research",
    leadership: "Leadership"
  };

  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced background - matching main page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl backdrop-blur-sm border border-blue-200/20 dark:border-blue-700/20 rotate-12 animate-float-slow flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">PM</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-200/20 dark:border-purple-700/20 rotate-45 animate-float">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 bg-purple-500/20 rounded-full"></div>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <ThemeToggle />
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-blue-200/30 dark:border-blue-700/30 transition-all duration-300 shadow-lg shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">KB</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-lg">Kartik Bhalerao</span>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Product Manager</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <Button 
                variant="ghost" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group"
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 font-medium text-sm mb-8">
              <span>📝 Blog</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Product Insights 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Blog</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Sharing my learnings, insights, and experiences in product management, design, and strategy
            </p>
          </div>

          {/* Enhanced Tabs Section */}
          <div className="mb-16">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 lg:grid-cols-7 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-xl p-1">
                {Object.entries(categories).map(([key, label]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="text-sm font-medium transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg rounded-lg"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Blog Posts Content */}
              {Object.keys(categories).map((category) => (
                <TabsContent key={category} value={category} className="mt-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                      <Card 
                        key={post.id} 
                        className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg capitalize">
                              {categories[post.category as keyof typeof categories]}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardHeader>
                          <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="text-xs border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
                              >
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs text-slate-500 dark:text-slate-400">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Empty State */}
                  {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                      <div className="text-6xl mb-6">📝</div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No posts found</h3>
                      <p className="text-slate-600 dark:text-slate-400">Try selecting a different category</p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        {/* Footer Section - matching home page */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Blog;
