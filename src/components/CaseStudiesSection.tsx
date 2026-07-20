import { useNavigate } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";
import { TenzoCardBanner } from "@/components/TenzoCardBanner";

// Short display names for the card grid — full titles live on the detail page
const shortNames: Record<string, string> = {
  "figprd": "figprd",
  "tenzo-product-discovery": "Tenzo",
  "pm-copilot": "PM Co-Pilot",
  "chatly-prd": "Chatly PRD",
  "blinkit-analysis": "Blinkit",
  "google-pay-analysis": "Google Pay",
  "google-pay-prd": "Google Pay PRD",
  "gullak-fintech": "Gullak",
  "zepto-efficiency": "Zepto",
  "airbnb-ux": "Airbnb UX",
  "cloudeagle-ai": "Cloudeagle",
  "metis-improvement": "Metis",
  "codeant-ai": "CodeAnt AI",
  "ether-prd": "Ether",
};

export const CaseStudiesSection = () => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    const study = caseStudies.find((s) => s.id === id);
    if ((study?.id === "pm-copilot" || study?.id === "figprd") && study.externalLink) {
      window.open(study.externalLink, "_blank", "noopener,noreferrer");
      return;
    }
    navigate(`/builds/${id}`);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-[106rem] mx-auto px-8 space-y-16 relative z-10 -mt-10">
        {/* Outer frame — header and grid live in the same connected box, joined by a divider */}
        <div className="border" style={{ borderColor: "rgba(128,128,128,0.4)" }}>
          {/* Header */}
          <div className="text-center space-y-3 py-16 px-6 border-b" style={{ borderColor: "rgba(128,128,128,0.4)" }}>
            <span className="label-mono text-[13px] text-black/50 dark:text-white/50">Builds</span>
            <h2 className="heading-display text-[42px] lg:text-[56px] leading-none text-black dark:text-white">
              Real Products, Real Impact
            </h2>
            <p className="text-[16px] text-black/40 dark:text-white/40 max-w-lg mx-auto leading-relaxed">
              Real-world products built from discovery to launch — strategy, design, and execution.
            </p>
          </div>

          {/* Grid wrapper — same padding treatment as before, still inside the connected outer frame */}
          <div className="p-8 sm:p-20">
        {/* Case Studies Grid — grid-line border pattern (Missing Piece Studio portfolio spec) */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border"
          style={{ borderColor: "rgba(128,128,128,0.4)" }}
        >
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group border-r border-b p-6 overflow-hidden transition-colors duration-300 hover:bg-blue-50 dark:hover:bg-blue-500/[0.06]"
              style={{ borderColor: "rgba(128,128,128,0.4)", fontFamily: "Switzer, Arial, sans-serif" }}
            >
              {/* Image Section — every card gets the identical frame, same aspect ratio */}
              <div className="border border-black/10 dark:border-white/10 overflow-hidden">
                {/* Content area — fixed aspect ratio, full-bleed so custom banners keep their native layout */}
                <div
                  onClick={() => handleCardClick(study.id)}
                  className="relative aspect-[18/10] overflow-hidden cursor-pointer"
                >
                  {study.id === "chatly-prd" ? (
                    <ChatlyCardBanner />
                  ) : study.id === "pm-copilot" ? (
                    <PMCopilotCardBanner />
                  ) : study.id === "tenzo-product-discovery" ? (
                    <TenzoCardBanner />
                  ) : study.id === "figprd" ? (
                    <FigPRDCardBanner />
                  ) : (
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>

              {/* Content below image — exact reference rhythm: 16px pt, 16px after title row, 32px before tag */}
              <div className="pt-4">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-[36px] font-normal leading-[1.2] text-black dark:text-white truncate transition-colors duration-300 group-hover:text-blue-600">
                    {shortNames[study.id] ?? study.title}
                  </h3>
                  <a
                    onClick={(e) => { e.preventDefault(); handleCardClick(study.id); }}
                    href={`/builds/${study.id}`}
                    className="shrink-0 inline-flex items-center rounded-lg bg-black dark:bg-white text-white dark:text-black text-[18px] font-normal px-[18px] py-[10px] hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    View Case Study
                  </a>
                </div>

                <p className="text-[18px] font-normal leading-[1.5] text-[#575757] dark:text-white/50 max-w-2xl line-clamp-2">
                  {study.overview}
                </p>

                <span className="text-[16px] font-normal mt-8 block text-blue-600 dark:text-blue-400">
                  #{study.tags[0].replace(/\s+/g, '')}
                </span>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-5">
          <p className="text-[15px] text-black/40 dark:text-white/40">
            Interested in seeing more or discussing a project?
          </p>
          <button
            className="label-mono px-7 py-3 text-[13px] bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-opacity duration-200"
            onClick={() => window.open("mailto:kartikbhalerao948@gmail.com", "_blank")}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
