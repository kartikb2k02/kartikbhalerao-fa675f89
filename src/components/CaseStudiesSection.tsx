import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";

export const CaseStudiesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/case-studies/${id}`);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-[90rem] mx-auto px-6 space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="text-gray-900 dark:text-white">Case Studies </span>
            <span className="animate-gradient-text">& Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects showcasing product strategy, design thinking, and user-centered solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study) => (
            <div key={study.id} onClick={() => handleCardClick(study.id)} className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-border/50 hover:border-primary/30">
                {/* Glow effect on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${study.bgGradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                
                {/* Image Section */}
                <div className={`relative aspect-[18/10] overflow-hidden ${study.id === "chatly-prd" ? "bg-white" : `bg-gradient-to-br ${study.bgGradient}`}`}>
                  {study.id === "chatly-prd" ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <ChatlyCardBanner />
                    </div>
                  ) : (
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    style={{
                      imageRendering: "auto",
                      backfaceVisibility: "hidden",
                      transform: "translateZ(0)",
                    }}
                    loading="lazy"
                  />
                  )}
                  
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Top Right Arrow */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/80 backdrop-blur-md p-2.5 rounded-full shadow-lg group-hover:bg-background group-hover:shadow-xl transition-all duration-300 border border-border/50 group-hover:border-primary/30 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                {study.id === "chatly-prd" ? (
                  /* Chatly — black & white footer matching banner */
                  <div className="bg-white border-t border-slate-100 px-5 py-4 relative overflow-hidden">
                    {/* Dot grid background */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}/>
                    {/* Corner ring */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-black/[0.07] pointer-events-none"/>

                    {/* Logo + title row */}
                    <div className="relative z-10 flex items-center gap-2 pr-8">
                      <img src="/lovable-uploads/chatly-logo.png" alt="Chatly" className="w-5 h-5 object-contain flex-shrink-0"/>
                      <div>
                        <h3 className="text-base font-bold text-black leading-tight">{study.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{study.subtitle}</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* All other cards — original colored footer */
                  <div className={`bg-gradient-to-r ${study.bgGradient} px-5 py-4 relative`}>
                    <div className="absolute inset-0 overflow-hidden opacity-25">
                      <div className="absolute top-2 right-3 w-6 h-6 border-2 border-white rounded-full" />
                      <div className="absolute bottom-2 left-3 w-4 h-4 border-2 border-white rounded-full" />
                    </div>
                    <div className="relative z-10 pr-8">
                      <h3 className="text-lg font-bold text-white leading-tight">{study.title}</h3>
                      <p className="text-sm text-white/90 mt-1">{study.subtitle}</p>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-7 h-7 bg-white/30 rounded-full flex items-center justify-center group-hover:bg-white/50 transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <button
            className="bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open("mailto:kartikbhalerao948@gmail.com", "_blank")}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
