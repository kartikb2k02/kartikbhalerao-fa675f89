import { ExternalLink, Clock, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export const CaseStudiesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const caseStudies = [
    {
      title: "Gullak Fintech App",
      subtitle: "Savings-Led Financial Empowerment Platform", 
      tags: ["Product Strategy", "UX Design", "Fintech"],
      link: "https://www.canva.com/design/DAGxiFuK6mo/lSD7Z6WwaqX6hDFwYuQ2gQ/view",
      duration: "2 weeks",
      type: "Product Requirement Document",
      typeShort: "PRD",
      category: "Fintech",
      achievement: "Complete app design",
      bgGradient: "from-[#4ade80] to-[#059669]",
      image: "/lovable-uploads/b1ba7330-6bbc-43d5-a1d2-56baa716c077.png"
    },
    {
      title: "Blinkit Product Analysis",
      subtitle: "Order Efficiency & Conversion Optimization",
      tags: ["Product Analysis", "E-commerce", "UX Research"],
      link: "https://www.canva.com/design/DAGxiHLuc1A/cdCbIj30b6LODnEBr_bT-Q/view",
      duration: "3 weeks",
      type: "Product Teardown",
      typeShort: "Analysis",
      category: "E-commerce",
      achievement: "15% conversion improvement",
      bgGradient: "from-[#facc15] to-[#f97316]",
      image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png"
    },
    {
      title: "Google Pay Feature Analysis",
      subtitle: "Strategic Product Improvement Study",
      tags: ["Feature Analysis", "Product Strategy", "Fintech"],
      link: "https://www.canva.com/design/DAGxiBL7YzA/Xk77mzvr9YaEsuEbvQ9bWg/view",
      duration: "2 weeks",
      type: "Feature Analysis",
      typeShort: "Analysis",
      category: "Fintech",
      achievement: "Enhanced UX flow",
      bgGradient: "from-[#60a5fa] to-[#2563eb]",
      image: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png"
    },
    {
      title: "Google Pay PRD",
      subtitle: "Strategic Product Improvement Study",
      tags: ["Feature Analysis", "Product Strategy", "Fintech"],
      link: "https://www.canva.com/design/DAGxiRLzpnQ/iE96wDgatXY99zuZnHBt4g/view",
      duration: "2 weeks",
      type: "PRD",
      typeShort: "Analysis",
      category: "Fintech",
      achievement: "Enhanced UX flow",
      bgGradient: "from-[#60a5fa] to-[#9333ea]",
      image: "/lovable-uploads/9b4dd787-aeb2-4969-8fc0-a1dd907efea8.png"
    },
    {
      title: "Zepto Order effiency",
      subtitle: "User Experience Optimization",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGxiRyvVFQ/-YhV-xynX1b2K6ewewp3yQ/view",
      duration: "4 weeks",
      type: "Design Case Study",
      typeShort: "Design",
      category: "E-commerce",
      achievement: "25% increase in conversions",
      bgGradient: "from-[#c084fc] to-[#db2777]",
      image: "/lovable-uploads/zepto.png"
    },   
    {
      title: "Airbnb Ux",
      subtitle: "Patient-Centered Design Approach",
      tags: ["UX Research", "Healthcare", "Accessibility"],
      link: "https://www.canva.com/design/DAGxiIQik8Y/eWceLnISnpERQ_jx5kK0Uw/view",
      duration: "3 weeks",
      type: "UX Research Study",
      typeShort: "Research",
      category: "Hotel",
      achievement: "Improved accessibility score by 40%",
      bgGradient: "from-[#FF5A5F] to-[#FF5A5F]",
      image: "/lovable-uploads/b6681943-085f-4f56-ad98-ba1fac93c64a.png"
    },
    {
      title: "Cloudeagle Ai Efficeincy",
      subtitle: "User Experience Optimization",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGsMTJF8rQ/spC9-A66wGenPorZ0VkcmA/view",
      duration: "4 weeks",
      type: "Design Case Study",
      typeShort: "Design",
      category: "E-commerce",
      achievement: "25% increase in conversions",
      bgGradient: "from-[#004AAD] to-[#00000]",
      image: "/lovable-uploads/Cloudeagle banner.png"
    },
    {
      title: "Metis Feature Improvement",
      subtitle: "User Experience Optimization",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGvsNeBU9A/fT2cPDGb3P_sHKunt_xa3g/view",
      duration: "4 weeks",
      type: "Design Case Study",
      typeShort: "Design",
      category: "E-commerce",
      achievement: "25% increase in conversions",
      bgGradient: "from-[#c084fc] to-[#db2777]",
      image: "/lovable-uploads/Metis Banner.png"
    },
    {
      title: "CodeAnt AI ",
      subtitle: "Product Launch Narrative",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGuong-JoM/p1KoI6r5aSNVNdhG64Kd-A/view",
      duration: "4 weeks",
      type: "Design Case Study",
      typeShort: "Design",
      category: "E-commerce",
      achievement: "25% increase in conversions",
      bgGradient: "from-[#c084fc] to-[#db2777]",
      image: "/lovable-uploads/Codeant ai banner.png"
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const scrollToSlide = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <section className="py-20 relative bg-white/30 dark:bg-gray-900/30 backdrop-blur-3xl border-t border-white/30 dark:border-white/20">
      {/* Enhanced Glass overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-blue-50/20 to-indigo-50/20 dark:from-slate-950/20 dark:via-slate-900/20 dark:to-indigo-950/20 backdrop-blur-3xl"></div>
      
      <div className="container mx-auto px-4 space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Case Studies & Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world projects showcasing product strategy, design thinking, and user-centered solutions
          </p>
        </div>

        {/* Case Studies Carousel */}
        <div className="relative">
          <Carousel 
            setApi={setApi}
            className="w-full max-w-7xl mx-auto" 
            opts={{ 
              align: "start", 
              loop: true,
              skipSnaps: false,
              dragFree: false
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              })
            ]}
          >
            <CarouselContent className="-ml-0 md:-ml-0">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-0 md:pl-0 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="h-full p-4">
                    <div 
                      onClick={() => handleCardClick(study.link)}
                      className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group h-full flex flex-col cursor-pointer transform hover:scale-[1.02] border border-white/30 dark:border-gray-700/30 aspect-[4/3]"
                    >
                      {/* Image Section - 75% */}
                      <div className="relative flex-[3] overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover object-top"
                        />
                        
                        {/* Top Right Arrow */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/70 backdrop-blur-sm p-2 rounded-full border border-white/40 hover:bg-white/80 transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-gray-800" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <Clock className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-medium">{study.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Colored Footer Section - 25% */}
                      <div className={`flex-[1] bg-gradient-to-r ${study.bgGradient} p-4 flex flex-col justify-center relative overflow-hidden`}>
                        {/* Background pattern overlay */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/50 rounded-full"></div>
                          <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                          <div className="absolute top-1/2 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
                        </div>
                        
                        {/* Content */}
                        <div className="relative z-10 space-y-1">
                          <h3 className="text-base font-bold text-white leading-tight">
                            {study.title}
                          </h3>
                          <p className="text-xs text-white/90 leading-relaxed">
                            {study.subtitle}
                          </p>
                        </div>

                        {/* Arrow Icon */}
                        <div className="absolute bottom-3 right-3">
                          <div className="w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <ArrowUpRight className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-blue-600 dark:bg-blue-400 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="mailto:kartikbhalerao948@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/90 hover:bg-blue-700/90 backdrop-blur-sm border border-white/20 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
