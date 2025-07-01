import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Eye, BarChart3, Users, Target, ArrowRight } from "lucide-react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Product Case Study-Blinkit",
      subtitle: "Order Efficiency and Conversion Optimization",
      description: "Comprehensive analysis of Blinkit's order flow, identifying key conversion bottlenecks and proposing strategic improvements for enhanced user experience.",
      tags: ["Product Teardown", "UX Analysis", "Conversion Optimization", "Metrics Analysis"],
      image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png",
      gradient: "from-yellow-400 to-orange-500",
      details: "Conducted an in-depth analysis of Blinkit's product ecosystem, focusing on order efficiency metrics and user conversion patterns. Identified critical pain points in the checkout flow and proposed data-driven solutions to improve overall user experience and business metrics.",
      canvaLink: "https://www.canva.com/design/DAGn_zTvLsc/32wrzjqf5YSnIj15-cvUFA/view",
      isCanvaEmbed: true,
      icon: <BarChart3 className="w-6 h-6" />,
      outcomes: [
        "Identified 3 major conversion bottlenecks in the order flow",
        "Proposed solutions that could potentially increase conversion by 15%",
        "Created comprehensive user journey mapping",
        "Developed actionable recommendations for product team"
      ]
    },
    {
      title: "Product Teardown-Feature improvement ",
      subtitle: "Strategic Product Improvement Analysis",
      description: "Strategic analysis of Google Pay's feature set with focus on user engagement and retention improvements through data-driven insights.",
      tags: ["Product Strategy", "Feature Analysis", "User Research", "Competitive Analysis"],
      image: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png",
      gradient: "from-blue-500 to-indigo-600",
      details: "Deep dive into Google Pay's product features, analyzing user flows and identifying strategic improvements through comprehensive teardown methodology. Focused on enhancing user engagement and streamlining payment processes.",
      canvaLink: "https://www.canva.com/design/DAGo6sk1mOw/RmYlhZ2SZIClh48yToNORg/view",
      isCanvaEmbed: true,
      icon: <Target className="w-6 h-6" />,
      outcomes: [
        "Comprehensive competitive analysis of payment platforms",
        "User flow optimization recommendations",
        "Feature prioritization using MoSCoW method",
        "Data-driven improvement proposals"
      ]
    },
    {
      title: "Product Teardown— User Experience",
      subtitle: "Behavioral Analysis & Insight Generation",
      description: "Led comprehensive user research studies to understand customer pain points and identify opportunities for product improvement across multiple touchpoints.",
      tags: ["Product Teardown", "Behavioral Analysis", "Data Analytics", "Customer Insights"],
      image: "/lovable-uploads/b6681943-085f-4f56-ad98-ba1fac93c64a.png",
      gradient: "from-purple-500 to-pink-500",
      details: "Designed and executed user research methodologies to capture actionable insights from customer behavior patterns. Utilized both qualitative and quantitative approaches to inform product decisions.",
      canvaLink: "https://www.canva.com/design/DAGp85VdazI/QqEN-1mCN8dEuaW-PtOIbQ/view",
      isCanvaEmbed: true,
      icon: <Target className="w-6 h-6" />,
      outcomes: [
        "Conducted 25+ in-depth user interviews",
        "Analyzed behavioral patterns across 3 user segments",
        "Generated 12 key product insights",
        "Created data-driven product roadmap recommendations"
      ]
    },
    {
      title: "Product Requirement Document - Gpay",
      subtitle: "Strategic Product Improvement Analysis", 
      description: "Strategic analysis of Google Pay's feature set with focus on user engagement and retention improvements through data-driven insights.",
      tags: ["Product Strategy", "Feature Analysis", "User Research", "Competitive Analysis"],
      image: "/lovable-uploads/9b4dd787-aeb2-4969-8fc0-a1dd907efea8.png",
      gradient: "from-blue-500 to-indigo-600",
      details: "Deep dive into Google Pay's product features, analyzing user flows and identifying strategic improvements through comprehensive teardown methodology. Focused on enhancing user engagement and streamlining payment processes.",
      canvaLink: "https://www.canva.com/design/DAGotvS1P4Y/SczH9ACLAO3FxM0iSaf44Q/view",
      isCanvaEmbed: true,
      icon: <Target className="w-6 h-6" />,
      outcomes: [
        "Comprehensive competitive analysis of payment platforms",
        "User flow optimization recommendations", 
        "Feature prioritization using MoSCoW method",
        "Data-driven improvement proposals"
      ]
    },
    {
      title: "Product Requirement Document - Gullak(Fintech Product)",
      subtitle: "A savings-led fintech app designed to empower rural women with financial independence.", 
      description: "This PRD outlines the core features, user flows, and business logic for Gullak — a goal-based savings application that enables underserved users, especially rural women, to manage and grow their finances through intuitive micro-saving mechanisms, personalized nudges, and trust-building features.",
      tags: ["Product Strategy", "Savings App", "Fintech", "User Research", "Competitive Analysis"],
      image: "/lovable-uploads/b1ba7330-6bbc-43d5-a1d2-56baa716c077.png",
      gradient: "from-blue-500 to-indigo-600",
      details: "Deep dive into Google Pay's product features, analyzing user flows and identifying strategic improvements through comprehensive teardown methodology. Focused on enhancing user engagement and streamlining payment processes.",
      canvaLink: "https://www.canva.com/design/DAGpBZlI3X0/nX9u0jm9rawlh7BAOT2btQ/view",
      isCanvaEmbed: true,
      icon: <Target className="w-6 h-6" />,
      outcomes: [
        "Comprehensive competitive analysis of payment platforms",
        "User flow optimization recommendations", 
        "Feature prioritization using MoSCoW method",
        "Data-driven improvement proposals"
      ]
    }
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:to-indigo-400/10 px-6 py-3 rounded-full border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm mb-6">
          <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Case Studies</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Product Impact Stories
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Real-world product analysis and strategic thinking that drives meaningful business outcomes
        </p>
      </div>
      
      {/* Slideable Case Studies Carousel */}
      <div className="relative">
        <Carousel className="w-full" opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {caseStudies.map((study, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group cursor-pointer h-full">
                      <div className="bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden hover:-translate-y-3 backdrop-blur-sm h-full flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                          
                          {/* Floating icon */}
                          <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            {study.icon}
                          </div>
                          
                          {/* View indicator */}
                          <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Eye className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                          </div>
                          
                          {/* Gradient overlay */}
                          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        
                        <div className="p-8 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${study.gradient} text-white shadow-lg`}>
                              Case Study
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                            {study.title}
                          </h3>
                          
                          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                            {study.subtitle}
                          </p>
                          
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                            {study.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {study.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-full text-xs font-medium border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                            {study.tags.length > 3 && (
                              <span className="text-slate-400 text-xs self-center font-medium">+{study.tags.length - 3}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-slate-900/95 border-slate-200/50 dark:border-slate-700/50 backdrop-blur-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-3">
                        {study.icon}
                        <span>{study.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {study.isCanvaEmbed ? (
                        <div className="w-full">
                          {/* Replace iframe with a preview image and button */}
                          <div className="relative w-full h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl overflow-hidden shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`} />
                            
                            {/* Overlay with call-to-action */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <div className="text-center text-white">
                                <h3 className="text-2xl font-bold mb-4">View Complete Case Study</h3>
                                <p className="text-lg mb-6 opacity-90">Click below to view the full presentation</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 text-center">
                            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg">
                              <a 
                                href={study.canvaLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2"
                              >
                                <ExternalLink className="w-5 h-5" />
                                <span>View Case Study Presentation</span>
                              </a>
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="relative h-64 rounded-xl overflow-hidden shadow-xl">
                            <img
                              src={study.image}
                              alt={study.title}
                              className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20`} />
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                              {study.subtitle}
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                              {study.details}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Skills & Methods Used</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {study.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="bg-blue-100/80 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-slate-50/80 dark:bg-slate-800/80 rounded-xl p-6 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Key Outcomes</h4>
                            <ul className="space-y-2">
                              {study.outcomes.map((outcome, i) => (
                                <li key={i} className="flex items-start space-x-2 text-slate-700 dark:text-slate-300">
                                  <span className="text-blue-500 dark:text-blue-400 mt-1">✓</span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/90 dark:bg-slate-800/90 border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm shadow-lg" />
          <CarouselNext className="bg-white/90 dark:bg-slate-800/90 border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm shadow-lg" />
        </Carousel>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Want to see more of my work?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            These case studies represent just a glimpse of my product management approach. Let's discuss how I can help drive your product's success.
          </p>
          <Button 
            asChild 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <a href="https://www.linkedin.com/in/kartik-bhalerao/" target="_blank" rel="noopener noreferrer">
              Let's Talk
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
