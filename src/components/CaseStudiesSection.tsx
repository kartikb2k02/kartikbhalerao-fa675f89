
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Blinkit Product Analysis",
      subtitle: "Order Efficiency and Conversion Optimization",
      description: "Comprehensive analysis of Blinkit's order flow, identifying key conversion bottlenecks and proposing strategic improvements for enhanced user experience.",
      tags: ["Product Teardown", "UX Analysis", "Conversion Optimization", "Metrics Analysis"],
      image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png",
      gradient: "from-yellow-400 to-orange-500",
      details: "Conducted an in-depth analysis of Blinkit's product ecosystem, focusing on order efficiency metrics and user conversion patterns. Identified critical pain points in the checkout flow and proposed data-driven solutions to improve overall user experience and business metrics.",
      canvaLink: "https://www.canva.com/design/DAGn_zTvLsc/32wrzjqf5YSnIj15-cvUFA/view",
      isCanvaEmbed: true,
      outcomes: [
        "Identified 3 major conversion bottlenecks in the order flow",
        "Proposed solutions that could potentially increase conversion by 15%",
        "Created comprehensive user journey mapping",
        "Developed actionable recommendations for product team"
      ]
    },
    {
      title: "Google Pay Feature Enhancement",
      subtitle: "Strategic Product Improvement Analysis",
      description: "Strategic analysis of Google Pay's feature set with focus on user engagement and retention improvements through data-driven insights.",
      tags: ["Product Strategy", "Feature Analysis", "User Research", "Competitive Analysis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      gradient: "from-blue-500 to-indigo-600",
      details: "Deep dive into Google Pay's product features, analyzing user flows and identifying strategic improvements through comprehensive teardown methodology. Focused on enhancing user engagement and streamlining payment processes.",
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
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Product Case Studies
        </h2>
        <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto rounded-full"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          Real-world product analysis and strategic thinking in action
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {caseStudies.map((study, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="group cursor-pointer bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Eye className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.gradient} text-white`}>
                      Case Study
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {study.title}
                  </h3>
                  
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                    {study.subtitle}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 3 && (
                      <span className="text-slate-400 text-xs self-center">+{study.tags.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            </DialogTrigger>
            
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
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
                      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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
                            className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
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
        ))}
      </div>
      
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          View All Case Studies
        </button>
      </div>
    </section>
  );
};
