
import { ExternalLink, Calendar, Tag, Clock } from "lucide-react";
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
      description: "Complete PRD for a goal-based savings application designed to empower rural women with financial independence through intuitive micro-saving mechanisms.",
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
      description: "Comprehensive analysis of Blinkit's order flow, identifying key conversion bottlenecks and proposing strategic improvements for enhanced user experience.",
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
      description: "Strategic analysis of Google Pay's feature set with focus on user engagement and retention improvements through data-driven insights.",
      tags: ["Feature Analysis", "Product Strategy", "Fintech"],
      link: "#",
      duration: "2 weeks",
      type: "Feature Analysis",
      typeShort: "Analysis",
      category: "Fintech",
      achievement: "Enhanced UX flow",
      bgGradient: "from-blue-400 to-purple-600",
      image: "/lovable-uploads/89406d0e-28cd-4dbf-9e94-3244e4646a29.png"
    }
  ];

  return (
    <section className="py-20">
      <div className="space-y-16">
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
        <div className="max-w-7xl mx-auto px-4">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {caseStudies.map((study, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group">
                    {/* Card Header with Gradient Background */}
                    <div className={`relative h-48 bg-gradient-to-br ${study.bgGradient} p-6 flex flex-col justify-between`}>
                      {/* Type Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-white text-sm font-medium">
                              {study.typeShort}
                            </span>
                          </div>
                          <span className="text-white/90 text-sm font-medium">
                            {study.type}
                          </span>
                        </div>
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Category and Achievement */}
                      <div className="space-y-2">
                        <div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                          <span className="text-white font-semibold text-lg">
                            {study.category}
                          </span>
                        </div>
                        <div className="bg-green-500/80 backdrop-blur-sm px-4 py-1 rounded-full inline-block">
                          <span className="text-white text-sm font-medium">
                            ✓ {study.achievement}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4">
                      {/* Duration */}
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{study.duration}</span>
                      </div>

                      {/* Title and Subtitle */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {study.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                          {study.subtitle}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {study.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {study.tags.slice(0, 3).map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                          >
                            <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="mailto:kartikbhalerao948@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
