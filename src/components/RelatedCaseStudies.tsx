import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";

interface RelatedCaseStudiesProps {
  currentStudyId: string;
}

export const RelatedCaseStudies = ({ currentStudyId }: RelatedCaseStudiesProps) => {
  const navigate = useNavigate();
  const relatedStudies = caseStudies.filter((s) => s.id !== currentStudyId).slice(0, 4);

  if (relatedStudies.length === 0) return null;

  const handleCardClick = (id: string) => {
    const study = caseStudies.find((s) => s.id === id);
    if ((study?.id === "pm-copilot" || study?.id === "figprd") && study.externalLink) {
      window.open(study.externalLink, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(`/builds/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 mt-16 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-5 mb-3">
          <span className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-black/30 dark:to-white/30" />
          <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">Explore More</span>
          <span className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-black/30 dark:to-white/30" />
        </div>
        <p className="text-[15px] text-black/40 dark:text-white/40 max-w-sm mx-auto">
          More product work and design explorations
        </p>
      </div>

      {/* Cards grid — same layout as builds page */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {relatedStudies.map((study) => (
          <div key={study.id} onClick={() => handleCardClick(study.id)} className="group cursor-pointer relative">

            {/* figprd outer glow */}
            {study.id === "figprd" && (
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(37,99,235,0.45) 0%, rgba(109,40,217,0.35) 100%)",
                  filter: "blur(18px)",
                  zIndex: 0,
                }}
              />
            )}

            <div
              className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 border border-border/50 hover:border-primary/30"
              style={{ zIndex: 1 }}
            >
              {/* Inner glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${study.bgGradient} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

              {/* Banner / Image */}
              <div
                className={`relative aspect-[18/10] overflow-hidden ${
                  study.id === "chatly-prd" || study.id === "pm-copilot" || study.id === "figprd"
                    ? ""
                    : `bg-gradient-to-br ${study.bgGradient}`
                }`}
                style={
                  study.id === "pm-copilot"
                    ? { background: "linear-gradient(135deg, rgba(59,130,246,0.05) 0%, #ffffff 60%)" }
                    : study.id === "chatly-prd"
                    ? { background: "white" }
                    : study.id === "figprd"
                    ? { background: "#0b1730" }
                    : {}
                }
              >
                {study.id === "chatly-prd" ? (
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                    <ChatlyCardBanner />
                  </div>
                ) : study.id === "pm-copilot" ? (
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                    <PMCopilotCardBanner />
                  </div>
                ) : study.id === "figprd" ? (
                  <div className="relative w-full h-full">
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                      <FigPRDCardBanner />
                    </div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.18) 0%, rgba(109,40,217,0.12) 100%)" }}
                    />
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

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Arrow button */}
                <div className="absolute top-4 right-4">
                  <div className="bg-background/80 backdrop-blur-md p-2.5 rounded-full shadow-lg group-hover:bg-background group-hover:shadow-xl transition-all duration-300 border border-border/50 group-hover:border-primary/30 group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>

              {/* Footer */}
              {study.id === "pm-copilot" ? (
                <div style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.07)" }} className="px-5 py-4 relative overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                  <div className="relative z-10 flex items-center gap-2 pr-8">
                    <div style={{ width: 20, height: 20, borderRadius: 6, background: "#f0f0f0", border: "1px solid rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, color: "#111", flexShrink: 0 }}>✦</div>
                    <div>
                      <h3 className="text-base font-black leading-tight" style={{ color: "#111", letterSpacing: "-0.02em" }}>{study.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(0,0,0,0.4)" }}>{study.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div style={{ width: 28, height: 28, background: "#111", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }} className="group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ) : study.id === "figprd" ? (
                <div style={{ background: "#0b1730", borderTop: "1px solid rgba(255,255,255,0.08)" }} className="px-5 py-4 relative overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                  <div className="relative z-10 flex items-center gap-2 pr-8">
                    <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 900, color: "#fff", flexShrink: 0 }}>⌘</div>
                    <div>
                      <h3 className="text-base font-black leading-tight" style={{ color: "#fff", letterSpacing: "-0.02em" }}>{study.title}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>{study.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div style={{ width: 28, height: 28, background: "rgba(37,99,235,0.7)", border: "1px solid rgba(96,165,250,0.4)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }} className="group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              ) : study.id === "chatly-prd" ? (
                <div className="bg-white border-t border-slate-100 px-5 py-4 relative overflow-hidden">
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-black/[0.07] pointer-events-none" />
                  <div className="relative z-10 flex items-center gap-2 pr-8">
                    <img src="/lovable-uploads/chatly-logo.webp" alt="Chatly" className="w-5 h-5 object-contain flex-shrink-0" />
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
    </section>
  );
};
