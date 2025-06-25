import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Product Case Study—Blinkit",
      subtitle: "Order Efficiency and Conversion Analysis",
      description: "Comprehensive analysis of Blinkit's order flow and conversion optimization strategies",
      tags: ["Product teardown", "uiux", "Learning", "Metrics", "MoScow", "Product Thinking"],
      image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png",
      gradient: "from-yellow-400 to-orange-500",
      details: "Analyzed Blinkit's entire order efficiency system and identified key conversion bottlenecks. Focused on improving user experience through data-driven insights and strategic product improvements.",
      canvaLink: "https://www.canva.com/design/DAGn_zTvLsc/32wrzjqf5YSnIj15-cvUFA/view",
      isCanvaEmbed: true
    },
    {
      title: "Product Teardown—Feature Improvement",
      subtitle: "Google Pay Analysis",
      description: "Strategic analysis of Google Pay's feature set and improvement opportunities",
      tags: ["Product teardown", "Metrics", "MoScow", "Trade-off"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      gradient: "from-blue-400 to-blue-600",
      details: "Deep dive into Google Pay's product features, analyzing user flows and identifying strategic improvements through comprehensive teardown methodology."
    },
    {
      title: "Product Teardown—User Experience",
      subtitle: "Airbnb Analysis", 
      description: "Comprehensive UX analysis of Airbnb's booking and host experience",
      tags: ["Product teardown", "uiux", "Metrics", "Product Thinking", "Learning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      gradient: "from-pink-400 to-red-500",
      details: "Analyzed Airbnb's user experience from both guest and host perspectives, focusing on trust-building mechanisms and conversion optimization."
    },
    {
      title: "Product Requirement Document—GPay",
      subtitle: "Feature Specification & Requirements",
      description: "Detailed PRD for new GPay feature implementation",
      tags: ["PRD", "Product Thinking", "Trade-off", "Metrics", "uiux"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      gradient: "from-indigo-400 to-purple-600",
      details: "Created comprehensive Product Requirements Document for GPay feature enhancement, including user stories, acceptance criteria, and success metrics."
    },
    {
      title: "Product Design—Gullak",
      subtitle: "Fintech Product Development",
      description: "End-to-end product design for fintech savings application",
      tags: ["PRD", "Product Thinking", "MoScow", "Metrics", "uiux"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      gradient: "from-green-400 to-emerald-600",
      details: "Designed and developed Gullak fintech product from concept to MVP, focusing on user-centric savings features and financial wellness tools."
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
        Product Case Studies <span className="text-2xl">📱</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-emerald-600 mb-3">
                    {study.subtitle}
                  </p>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-emerald-200 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 3 && (
                      <span className="text-gray-500 text-xs">+{study.tags.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </DialogTrigger>
            
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                  {study.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {study.isCanvaEmbed ? (
                  <div className="w-full">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src={study.canvaLink}
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                        allowFullScreen
                        title={study.title}
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                        <a 
                          href={study.canvaLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View Full Presentation
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`} />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                        {study.subtitle}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {study.details}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills & Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Outcomes</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start space-x-2">
                          <span className="text-emerald-500 mt-1">✓</span>
                          <span>Comprehensive product analysis and strategic recommendations</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-emerald-500 mt-1">✓</span>
                          <span>Data-driven insights for product improvement</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span className="text-emerald-500 mt-1">✓</span>
                          <span>User experience optimization strategies</span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold">
          View All Case Studies
        </Button>
      </div>
    </section>
  );
};
