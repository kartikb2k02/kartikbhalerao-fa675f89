import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { BarChart3, Target, FileText, Zap, ArrowUpRight, Calendar, Tag } from "lucide-react";

export const CaseStudiesSection = () => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const caseStudies = [
    {
      id: 1,
      title: "Blinkit Product Analysis",
      subtitle: "Order Efficiency & Conversion Optimization",
      description: "Comprehensive analysis of Blinkit's order flow, identifying key conversion bottlenecks and proposing strategic improvements for enhanced user experience.",
      type: "Product Teardown",
      category: "E-commerce",
      tags: ["Product Analysis", "UX Research", "Conversion Optimization", "Data Analytics"],
      image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png",
      gradient: "from-amber-400 via-orange-500 to-red-500",
      cardColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      canvaLink: "https://www.canva.com/design/DAGn_zTvLsc/32wrzjqf5YSnIj15-cvUFA/view",
      icon: <BarChart3 className="w-5 h-5" />,
      duration: "3 weeks",
      impact: "15% conversion improvement",
      featured: true
    },
    {
      id: 2,
      title: "Google Pay Feature Analysis",
      subtitle: "Strategic Product Improvement Study",
      description: "Strategic analysis of Google Pay's feature set with focus on user engagement and retention improvements through data-driven insights.",
      type: "Feature Analysis",
      category: "Fintech",
      tags: ["Product Strategy", "Feature Analysis", "User Research", "Competitive Analysis"],
      image: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png",
      gradient: "from-blue-500 via-indigo-600 to-purple-600",
      cardColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      canvaLink: "https://www.canva.com/design/DAGo6sk1mOw/RmYlhZ2SZIClh48yToNORg/view",
      icon: <Target className="w-5 h-5" />,
      duration: "2 weeks",
      impact: "Enhanced UX flow",
      featured: true
    },
    {
      id: 3,
      title: "User Experience Research",
      subtitle: "Behavioral Analysis & Insight Generation",
      description: "Led comprehensive user research studies to understand customer pain points and identify opportunities for product improvement.",
      type: "UX Research",
      category: "Research",
      tags: ["User Research", "Behavioral Analysis", "Data Analytics", "Customer Insights"],
      image: "/lovable-uploads/b6681943-085f-4f56-ad98-ba1fac93c64a.png",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      cardColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      canvaLink: "https://www.canva.com/design/DAGp85VdazI/QqEN-1mCN8dEuaW-PtOIbQ/view",
      icon: <Target className="w-5 h-5" />,
      duration: "4 weeks",
      impact: "12 key insights",
      featured: true
    },
    {
      id: 4,
      title: "Google Pay PRD",
      subtitle: "Product Requirements Documentation",
      description: "Comprehensive PRD outlining strategic improvements for Google Pay's core features and user engagement mechanisms.",
      type: "PRD",
      category: "Documentation",
      tags: ["Product Strategy", "Requirements", "Documentation", "Feature Planning"],
      image: "/lovable-uploads/9b4dd787-aeb2-4969-8fc0-a1dd907efea8.png",
      gradient: "from-emerald-500 via-teal-600 to-cyan-600",
      cardColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      canvaLink: "https://www.canva.com/design/DAGotvS1P4Y/SczH9ACLAO3FxM0iSaf44Q/view",
      icon: <FileText className="w-5 h-5" />,
      duration: "1 week",
      impact: "Complete feature spec",
      featured: true
    },
    {
      id: 5,
      title: "Gullak Fintech App",
      subtitle: "Savings-Led Financial Empowerment Platform",
      description: "Complete PRD for a goal-based savings application designed to empower rural women with financial independence through intuitive micro-saving mechanisms.",
      type: "PRD",
      category: "Fintech",
      tags: ["Fintech", "Savings App", "User Research", "Financial Inclusion"],
      image: "/lovable-uploads/b1ba7330-6bbc-43d5-a1d2-56baa716c077.png",
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      cardColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      canvaLink: "https://www.canva.com/design/DAGpBZlI3X0/nX9u0jm9rawlh7BAOT2btQ/view",
      icon: <Zap className="w-5 h-5" />,
      duration: "2 weeks",
      impact: "Complete app design",
      featured: true
    }
  ];

  const featuredStudies = caseStudies.filter(study => study.featured);

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!api || !isPlaying) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [api, isPlaying])

  const openCaseStudy = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const WorkCard = ({ study }: { study: any }) => (
    <div 
      onClick={() => openCaseStudy(study.canvaLink)}
      className="group cursor-pointer transition-all duration-500 hover:-translate-y-2 h-full"
    >
      <div className={`h-full rounded-2xl ${study.cardColor} dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col backdrop-blur-sm bg-white/80 dark:bg-slate-800/80`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
          
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
              {study.icon}
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{study.type}</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-2 rounded-full shadow-lg">
              <ArrowUpRight className="w-4 h-4 text-slate-700 dark:text-slate-300" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4">
            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
              {study.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>{study.duration}</span>
            </div>
            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {study.impact}
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
            {study.title}
          </h3>
          
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
            {study.subtitle}
          </p>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
            {study.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {study.tags.slice(0, 3).map((tag: string, i: number) => (
              <span
                key={i}
                className="flex items-center space-x-1 bg-slate-100/80 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-md text-xs font-medium"
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            ))}
            {study.tags.length > 3 && (
              <span className="text-slate-400 text-xs self-center font-medium">
                +{study.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative max-w-7xl mx-auto space-y-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-indigo-50/80 dark:from-slate-950/90 dark:via-slate-900/80 dark:to-indigo-950/90 -z-10" />
      
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 via-indigo-200/20 to-purple-200/30 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-200/25 via-sky-200/20 to-blue-200/25 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-200/20 via-blue-200/15 to-cyan-200/20 rounded-full blur-3xl animate-float-slower" />
        
        <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-blue-300/40 to-indigo-300/40 transform rotate-45 animate-float-slow backdrop-blur-sm border border-blue-200/30 shadow-lg"></div>
        <div className="absolute top-60 right-32 w-16 h-16 bg-gradient-to-br from-cyan-300/40 to-blue-300/40 rounded-full animate-float backdrop-blur-sm border border-cyan-200/30 shadow-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-300/40 to-purple-300/40 transform rotate-12 animate-float-slower backdrop-blur-sm border border-indigo-200/30 shadow-lg" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-indigo-400/60 rounded-full animate-pulse [animation-delay:3s]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-sky-400/60 rounded-full animate-pulse [animation-delay:2s]"></div>
        
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent animate-pulse [animation-delay:2s]"></div>
      </div>

      <div className="text-center relative z-10">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:to-indigo-400/10 px-6 py-3 rounded-full backdrop-blur-sm mb-6 border border-blue-200/20 dark:border-blue-700/20">
          <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">My Work Portfolio</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Product Impact Stories
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Real-world product analysis and strategic thinking that drives meaningful business outcomes
        </p>
      </div>

      <div className="space-y-8 relative z-10">
        <div className="flex items-center justify-center">
          <div className="flex space-x-1 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm rounded-full p-1 border border-white/20 dark:border-slate-700/20">
            {featuredStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current - 1 
                    ? 'bg-blue-500 w-6' 
                    : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        <Carousel 
          setApi={setApi}
          className="w-full" 
          opts={{ 
            align: "center", 
            loop: true,
            skipSnaps: false,
          }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <CarouselContent className="-ml-6">
            {featuredStudies.map((study, index) => (
              <CarouselItem key={study.id} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <WorkCard study={study} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="text-center relative z-10">
        <div className="bg-gradient-to-r from-slate-50/80 to-blue-50/80 dark:from-slate-800/80 dark:to-slate-700/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/20 dark:border-slate-700/20 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to collaborate?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on challenging product problems and create impactful solutions. Let's discuss your next project!
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
