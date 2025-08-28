
import { ExternalLink, Clock, ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Gullak Fintech App",
      subtitle: "Savings-Led Financial Empowerment Platform", 
      tags: ["Product Strategy", "UX Design", "Fintech"],
      link: "https://www.behance.net/gallery/154819469/Gullak-Fintech-App-UIUX-Case-Study",
      duration: "2 weeks",
      type: "Product Requirement Document",
      typeShort: "PRD",
      category: "Fintech",
      achievement: "Complete app design",
      bgGradient: "from-green-400 to-emerald-600",
      image: "/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.png"
    },
    {
      title: "Blinkit Product Analysis",
      subtitle: "Order Efficiency & Conversion Optimization",
      tags: ["Product Analysis", "E-commerce", "UX Research"],
      link: "https://www.canva.com/design/DAGuong-JoM/p1KoI6r5aSNVNdhG64Kd-A/view",
      duration: "3 weeks",
      type: "Product Teardown",
      typeShort: "Analysis",
      category: "E-commerce",
      achievement: "15% conversion improvement",
      bgGradient: "from-orange-400 to-red-500",
      image: "/lovable-uploads/89406d0e-28cd-4dbf-9e94-3244e4646a29.png"
    },
    {
      title: "Google Pay Feature Analysis",
      subtitle: "Strategic Product Improvement Study",
      tags: ["Feature Analysis", "Product Strategy", "Fintech"],
      link: "https://www.behance.net/gallery/154819469/Gullak-Fintech-App-UIUX-Case-Study",
      duration: "2 weeks",
      type: "Feature Analysis",
      typeShort: "Analysis",
      category: "Fintech",
      achievement: "Enhanced UX flow",
      bgGradient: "from-blue-400 to-purple-600",
      image: "/lovable-uploads/3c59e842-8e07-4b56-8918-3fedc5f8a4e0.png"
    },
    {
      title: "E-commerce Platform Redesign",
      subtitle: "User Experience Optimization",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.behance.net/gallery/154819469/Gullak-Fintech-App-UIUX-Case-Study",
      duration: "4 weeks",
      type: "Design Case Study",
      typeShort: "Design",
      category: "E-commerce",
      achievement: "25% increase in conversions",
      bgGradient: "from-purple-400 to-pink-600",
      image: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png"
    },
    {
      title: "Healthcare App UX Research",
      subtitle: "Patient-Centered Design Approach",
      tags: ["UX Research", "Healthcare", "Accessibility"],
      link: "https://www.behance.net/gallery/154819469/Gullak-Fintech-App-UIUX-Case-Study",
      duration: "3 weeks",
      type: "UX Research Study",
      typeShort: "Research",
      category: "Healthcare",
      achievement: "Improved accessibility score by 40%",
      bgGradient: "from-teal-400 to-cyan-600",
      image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png"
    }
  ];

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 relative bg-gradient-to-br from-slate-50/80 via-blue-50/80 to-indigo-50/80 dark:from-slate-950/80 dark:via-slate-900/80 dark:to-indigo-950/80 backdrop-blur-md border-t border-white/20 dark:border-white/10">
      {/* Glass overlay effect */}
      <div className="absolute inset-0 bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl"></div>
      
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
            className="w-full max-w-7xl mx-auto" 
            opts={{ 
              align: "start", 
              loop: true,
              skipSnaps: false,
              dragFree: false
            }}
          >
            <CarouselContent className="-ml-0 md:-ml-0">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-0 md:pl-0 basis-full md:basis-1/2 lg:basis-2/5">
                  <div className="h-full p-2">
                    <div 
                      onClick={() => handleCardClick(study.link)}
                      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col cursor-pointer transform hover:scale-[1.02] border border-white/30 dark:border-gray-700/50 aspect-[4/5]"
                    >
                      {/* Image Section - 70% */}
                      <div className="relative flex-[7] overflow-hidden rounded-t-2xl">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-contain bg-white"
                        />
                        
                        {/* Top Right Arrow */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full border border-white/50 hover:bg-white transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-gray-800" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            <Clock className="w-4 h-4 text-white" />
                            <span className="text-white text-sm font-medium">{study.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Section - 30% */}
                      <div className="flex-[3] p-6 flex flex-col justify-center space-y-3">
                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                          {study.title}
                        </h3>
                        
                        {/* Subtitle */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {study.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-white/30 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-700/90 shadow-lg" />
              <CarouselNext className="relative right-0 top-0 translate-y-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-white/30 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-700/90 shadow-lg" />
            </div>
          </Carousel>
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
