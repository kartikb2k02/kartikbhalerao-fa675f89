import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FooterSection } from "@/components/FooterSection";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Product Teardowns: Learning from Industry Giants",
      excerpt: "How analyzing products like Blinkit and Google Pay can make you a better Product Manager",
      category: "analysis",
      date: "2024-06-15",
      readTime: "8 min read",
      tags: ["Product Management", "Analysis", "Learning"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      slug: "product-teardowns-learning-from-giants"
    },
    {
      id: 2,
      title: "Building User-Centric Fintech Products: Lessons from Gullak",
      excerpt: "Key insights from designing a savings app that users actually want to use",
      category: "design",
      date: "2024-06-10",
      readTime: "6 min read",
      tags: ["Fintech", "User Experience", "Product Design"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
      slug: "user-centric-fintech-gullak-lessons"
    },
    {
      id: 3,
      title: "Data-Driven Decision Making: My Experience at Decision Machine",
      excerpt: "How to balance quantitative insights with qualitative user feedback",
      category: "analytics",
      date: "2024-06-05",
      readTime: "7 min read",
      tags: ["Data Analytics", "Product Strategy", "Decision Making"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      slug: "data-driven-decision-making-experience"
    },
    {
      id: 4,
      title: "From Idea to MVP: A Product Manager's Journey",
      excerpt: "Step-by-step guide to building your first product from concept to launch",
      category: "strategy",
      date: "2024-05-28",
      readTime: "10 min read",
      tags: ["MVP", "Product Strategy", "Startup"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      slug: "idea-to-mvp-product-manager-journey"
    },
    {
      id: 5,
      title: "User Research That Actually Matters",
      excerpt: "Moving beyond vanity metrics to insights that drive product decisions",
      category: "research",
      date: "2024-05-20",
      readTime: "9 min read",
      tags: ["User Research", "Product Management", "Insights"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      slug: "user-research-that-matters"
    },
    {
      id: 6,
      title: "Scaling Product Teams: Lessons Learned",
      excerpt: "How to maintain product quality while growing your team",
      category: "leadership",
      date: "2024-05-15",
      readTime: "12 min read",
      tags: ["Team Management", "Leadership", "Scaling"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      slug: "scaling-product-teams-lessons"
    }
  ];

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === parseInt(id || ""));
    if (foundPost) {
      setPost(foundPost);
      // Load markdown content - in a real app, this would fetch from a file or API
      loadMarkdownContent(foundPost.slug);
    }
  }, [id]);

  const loadMarkdownContent = async (slug: string) => {
    // Sample markdown content - in a real app, you'd fetch this from a .md file
    const sampleContent = `
# ${post?.title || "Blog Post"}

${post?.excerpt || ""}

## Introduction

Product management is an art that combines analytical thinking with creative problem-solving. In today's competitive landscape, understanding how successful products work is crucial for any aspiring or current product manager.

## Key Insights

### 1. User-Centric Approach
- Always start with user needs
- Validate assumptions through research
- Iterate based on feedback

### 2. Data-Driven Decisions
- Use analytics to guide product decisions
- Set up proper tracking and metrics
- Balance quantitative and qualitative insights

### 3. Strategic Thinking
- Align product goals with business objectives
- Think long-term while executing short-term
- Understand market dynamics

## Case Study Example

Let's examine how successful products approach these challenges:

\`\`\`javascript
// Example of tracking user engagement
const trackUserEngagement = (action, metadata) => {
  analytics.track('user_engagement', {
    action,
    timestamp: Date.now(),
    ...metadata
  });
};
\`\`\`

## Conclusion

Building great products requires a combination of strategic thinking, user empathy, and data-driven decision making. The key is to continuously learn and adapt based on user feedback and market changes.

---

*What are your thoughts on this approach? Share your experiences in the comments below.*
`;
    
    setMarkdownContent(sampleContent);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500">
      <ThemeToggle />
      
      {/* Navigation */}
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
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => navigate('/blog')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
              <Button 
                variant="ghost" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => navigate('/')}
              >
                Home
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="mb-12">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg capitalize mb-2">
                  {post.category}
                </Badge>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
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

          {/* Markdown Content */}
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
};

export default BlogPost;
