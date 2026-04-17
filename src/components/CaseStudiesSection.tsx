import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";

export const CaseStudiesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    const study = caseStudies.find((s) => s.id === id);
    if (study?.id === "pm-copilot" && study.externalLink) {
      window.open(study.externalLink, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(`/builds/${id}`);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-[90rem] mx-auto px-6 space-y-16 relative z-10 -mt-10">
        {/* Header */}
        <div className="text-center space-y-4 pb-4">
          <div className="inline-flex items-center gap-5">
            <span className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-black/30 dark:to-white/30" />
            <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">Builds</span>
            <span className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-black/30 dark:to-white/30" />
          </div>
          <h2 className="text-[42px] lg:text-[56px] font-black leading-none tracking-tight text-black dark:text-white">
            Real Products, Real Impact
          </h2>
          <p className="text-[16px] text-black/40 dark:text-white/40 max-w-lg mx-auto leading-relaxed">
            Real-world products built from discovery to launch — strategy, design, and execution.
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
                <div className={`relative aspect-[18/10] overflow-hidden ${study.id === "chatly-prd" || study.id === "pm-copilot" ? "" : `bg-gradient-to-br ${study.bgGradient}`}`}
                  style={study.id === "pm-copilot" ? { background: "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, #ffffff 60%)" } : study.id === "chatly-prd" ? { background: "white" } : {}}>
                  {study.id === "chatly-prd" ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <ChatlyCardBanner />
                    </div>
                  ) : study.id === "pm-copilot" ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <PMCopilotCardBanner />
                    </div>
                  ) : (
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      style={{ imageRendering: "auto", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                      loading="lazy"
                    />
                  )}
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  {/* Top Right Arrow */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-background/80 backdrop-blur-md p-2.5 rounded-full shadow-lg group-hover:bg-background group-hover:shadow-xl transition-all duration-300 border border-border/50 group-hover:border-primary/30 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                {study.id === "pm-copilot" ? (
                  <div style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.07)" }} className="px-5 py-4 relative overflow-hidden">
                    <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "16px 16px" }}/>
                    <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)" }}/>
                    <div className="relative z-10 flex items-center gap-2 pr-8">
                      <div style={{ width: 20, height: 20, borderRadius: 6, background: "#f0f0f0", border: "1px solid rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, color: "#111", flexShrink: 0 }}>✦</div>
                      <div>
                        <h3 className="text-base font-black leading-tight" style={{ color: "#111", letterSpacing: "-0.02em" }}>{study.title}</h3>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(0,0,0,0.4)" }}>{study.subtitle}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div style={{ width: 28, height: 28, background: "#111", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
                        className="group-hover:scale-110 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ) : study.id === "chatly-prd" ? (
                  <div className="bg-white border-t border-slate-100 px-5 py-4 relative overflow-hidden">
                    <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "18px 18px" }}/>
                    <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-black/[0.07] pointer-events-none"/>
                    <div className="relative z-10 flex items-center gap-2 pr-8">
                      <img src="/lovable-uploads/chatly-logo.webp" alt="Chatly" className="w-5 h-5 object-contain flex-shrink-0"/>
                      <div>
                        <h3 className="text-base font-bold text-black leading-tight">{study.title}</h3>
                        <p className="text-xs text-slate-500 mt-0.5">{study.subtitle}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <div className="w-7 h-7 bg-black rounded-full flex items-center justify-center group-hover:bg-zinc-700 transition-colors duration-300">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                ) : (
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
        <div className="text-center space-y-5">
          <p className="text-[15px] text-black/40 dark:text-white/40">
            Interested in seeing more or discussing a project?
          </p>
          <button
            className="px-7 py-3 text-[14px] font-semibold rounded-xl bg-black dark:bg-white text-white dark:text-black shadow-sm hover:shadow-md hover:opacity-80 transition-all duration-200"
            onClick={() => window.open("mailto:kartikbhalerao948@gmail.com", "_blank")}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
