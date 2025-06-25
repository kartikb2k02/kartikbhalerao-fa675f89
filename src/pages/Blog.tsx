
import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Product Teardowns: Learning from Industry Giants",
      excerpt: "How analyzing products like Blinkit and Google Pay can make you a better Product Manager",
      content: "Product teardowns are one of the most effective ways to learn product management...",
      category: "Product Analysis",
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
      category: "Product Design",
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
      category: "Data & Analytics",
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
      category: "Product Strategy",
      date: "2024-05-28",
      readTime: "10 min read",
      tags: ["MVP", "Product Strategy", "Startup"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Product Analysis", "Product Design", "Data & Analytics", "Product Strategy"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4 text-emerald-600 hover:text-emerald-700"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Product Insights Blog <span className="text-3xl">📝</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sharing my learnings, insights, and experiences in product management
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full ${
                selectedCategory === category 
                  ? "bg-emerald-600 hover:bg-emerald-700" 
                  : "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600 text-white">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg leading-tight line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
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
                      className="text-xs border-emerald-200 text-emerald-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs text-gray-500">
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
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No posts found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Want to collaborate or discuss product ideas?</h2>
          <p className="text-emerald-100 mb-6">I'm always excited to connect with fellow product enthusiasts!</p>
          <div className="space-x-4">
            <Button 
              className="bg-white text-emerald-600 hover:bg-emerald-50"
              onClick={() => window.open('https://www.linkedin.com/in/kartik-bhalerao/', '_blank')}
            >
              Connect on LinkedIn
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-emerald-600"
              onClick={() => window.location.href = '/'}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
