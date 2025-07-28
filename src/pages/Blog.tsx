
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
import { BlogSidebar } from "@/components/BlogSidebar";
import { BlogPostDetail } from "@/components/BlogPostDetail";

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

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative">
      {/* Enhanced Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.1) 1px, transparent 1px),
            radial-gradient(circle 600px at 30% 40%, rgba(99,102,241,0.15), transparent),
            radial-gradient(circle 800px at 70% 80%, rgba(168,85,247,0.1), transparent),
            radial-gradient(circle 400px at 40% 100%, rgba(59,130,246,0.1), transparent)
          `,
          backgroundSize: "60px 60px, 60px 60px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 shadow-xl shadow-slate-900/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleTitleClick}
              className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300"
                   style={{
                     clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                   }}>
                <img
                  src="/lovable-uploads/b0e13af0-105a-4724-ad69-d72b85aaf0a1.png"
                  alt="Kartik Bhalerao"
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                  }}
                />
              </div>
              <span className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Kartik Bhalerao
              </span>
            </button>
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group hover:bg-blue-50/80 dark:hover:bg-blue-900/20 px-6 py-3 rounded-xl border border-transparent hover:border-blue-200/50 dark:hover:border-blue-700/50"
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 flex min-h-screen relative z-10">
        {/* Enhanced Sidebar with Effects */}
        <div className="w-96 bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl border-r border-slate-200/50 dark:border-slate-700/50 shadow-2xl relative overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/3 to-emerald-500/5 animate-pulse"></div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-8 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-40 right-12 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce [animation-delay:1s]"></div>
            <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-emerald-400/35 rounded-full animate-bounce [animation-delay:2s]"></div>
          </div>
          
          <BlogSidebar
            posts={filteredPosts}
            selectedPost={selectedPost}
            onPostClick={handleBlogPostClick}
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>

        {/* Enhanced Main Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-white/30 via-slate-50/50 to-blue-50/30 dark:from-slate-800/30 dark:via-slate-900/50 dark:to-slate-800/30">
          {selectedPost ? (
            <BlogPostDetail
              post={selectedPost}
              content={markdownContent}
              onBack={handleBackToList}
            />
          ) : (
            <div className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  {/* Enhanced decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl blur-xl animate-pulse"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full animate-bounce"></div>
                  <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-400/25 rounded-full animate-bounce [animation-delay:1s]"></div>
                  <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-emerald-400/30 rounded-full animate-bounce [animation-delay:2s]"></div>
                  
                  <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl">
                    <div className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
                      Ready to explore? 
                    </div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                      Click any article in the sidebar to get started and join the conversation in the comments!
                    </p>
                    
                    {/* Enhanced animated icon */}
                    <div className="relative mb-8">
                      <div className="text-8xl animate-bounce">📝</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-full blur-2xl animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
