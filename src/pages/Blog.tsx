
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { blogPosts } from "@/data/blogPosts";
import { getMarkdownContent } from "@/utils/blogContent";
import { ResizableBlogLayout } from "@/components/ResizableBlogLayout";

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

      <div className="pt-16 relative z-10">
        <ResizableBlogLayout
          posts={filteredPosts}
          selectedPost={selectedPost}
          onPostClick={handleBlogPostClick}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          markdownContent={markdownContent}
          onBackToList={handleBackToList}
        />
      </div>
    </div>
  );
};

export default Blog;
