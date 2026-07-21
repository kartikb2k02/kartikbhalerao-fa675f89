import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ZoomIn, ArrowUp } from "lucide-react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { getCaseStudyById } from "@/data/caseStudies";
import { ImageLightbox } from "@/components/ImageLightbox";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";
import { ChatlyPRDDetail } from "@/components/ChatlyPRDDetail";
import { ChatlyBanner } from "@/components/ChatlyBanner";
import { TenzoCardBanner } from "@/components/TenzoCardBanner";
import { SEO, BASE_URL } from "@/components/SEO";

const A4_GALLERY_IDS = ['ether-prd', 'gullak-fintech', 'google-pay-prd', 'cloudeagle-ai', 'metis-improvement', 'codeant-ai', 'tenzo-product-discovery'];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : undefined;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      setShowBackToTop(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (!caseStudy) {
    return (
      <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">
        <SEO
          title="Case Study Not Found"
          description="The case study you're looking for doesn't exist."
          path={`/builds/${id ?? ""}`}
          noindex
        />
        <Header />
        <main className="pt-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/builds" className="text-blue-600 hover:underline">← Back to Builds</Link>
        </main>
        <FooterSection />
      </div>
    );
  }

  const ogImage = caseStudy.image?.startsWith("http")
    ? caseStudy.image
    : `${BASE_URL}${caseStudy.image || "/favicon.png"}`;
  const ogDescription = caseStudy.subtitle || caseStudy.overview?.slice(0, 160) || "A product case study by Kartik Bhalerao";

  // First sentence of the challenge, used as a pull-quote
  const challengeQuote = caseStudy.challenge.match(/[^.!?]+[.!?]+/)?.[0]?.trim() || caseStudy.challenge;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: ogDescription,
    image: ogImage,
    creator: {
      "@type": "Person",
      name: "Kartik Bhalerao",
      url: BASE_URL,
    },
    keywords: caseStudy.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/builds/${caseStudy.id}`,
    },
  };

  return (
    <>
    <SEO
      title={caseStudy.title}
      description={ogDescription}
      path={`/builds/${caseStudy.id}`}
      image={caseStudy.image || "/favicon.png"}
      type="article"
      jsonLd={jsonLd}
    />
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">

      <Header scrollProgress={scrollProgress} />

      <main className="pt-24 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <Link
            to="/builds"
            className="label-mono mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 border border-black/10 dark:border-white/15 text-slate-500 dark:text-slate-400 text-[12px] hover:text-slate-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/30 transition-all duration-200 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            All Builds
          </Link>

          {/* Title & Subtitle */}
          <h1 className="heading-display text-[32px] sm:text-[44px] leading-[1.05] text-slate-900 dark:text-white mb-3 max-w-3xl">
            {caseStudy.title}
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-lg max-w-2xl mb-8">{caseStudy.subtitle}</p>

          {/* Hero Image / Banner */}
          {id === "chatly-prd" ? (
            <ChatlyBanner />
          ) : id === "tenzo-product-discovery" ? (
            <div className="overflow-hidden mb-12 border border-black/10 dark:border-white/10 bg-white dark:bg-black aspect-[18/10]">
              <TenzoCardBanner />
            </div>
          ) : (
            <div className="overflow-hidden mb-12 border border-black/10 dark:border-white/10 bg-white dark:bg-black">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full object-cover"
              />
            </div>
          )}

          {/* Chatly PRD — Full document content */}
          {id === "chatly-prd" && (
            <div className="mb-12 bg-white border border-black/10 overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-black" />
              <div className="p-6 sm:p-10">
                <ChatlyPRDDetail />
              </div>
            </div>
          )}

          {/* Narrative — Overview / Challenge / Solution / Outcome */}
          {id !== "chatly-prd" && (
          <div className="space-y-14 mb-14">

            {/* Overview */}
            <section>
              <span className="label-mono text-[12px] text-black/40 dark:text-white/40 mb-2 block">Overview</span>
              <h2 className="heading-display text-2xl sm:text-[28px] text-slate-900 dark:text-white mb-4">
                The Background
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 text-[16px] leading-[1.8] max-w-3xl">
                {caseStudy.overview}
              </p>
            </section>

            {/* Challenge */}
            <section>
              <span className="label-mono text-[12px] text-black/40 dark:text-white/40 mb-2 block">Problem</span>
              <h2 className="heading-display text-2xl sm:text-[28px] text-slate-900 dark:text-white mb-4">
                The Challenge
              </h2>
              <blockquote className="border-l-2 border-black dark:border-white pl-5 py-1 mb-5 max-w-3xl">
                <p className="text-[17px] sm:text-[19px] italic font-medium text-slate-800 dark:text-zinc-100 leading-snug">
                  {challengeQuote}
                </p>
              </blockquote>
              <p className="text-slate-600 dark:text-zinc-300 text-[16px] leading-[1.8] max-w-3xl">
                {caseStudy.challenge}
              </p>
            </section>

            {/* Solution */}
            <section>
              <span className="label-mono text-[12px] text-black/40 dark:text-white/40 mb-2 block">Approach</span>
              <h2 className="heading-display text-2xl sm:text-[28px] text-slate-900 dark:text-white mb-4">
                The Solution
              </h2>
              <p className="text-slate-600 dark:text-zinc-300 text-[16px] leading-[1.8] max-w-3xl mb-6">
                {caseStudy.solution}
              </p>
              <ul className="space-y-3 max-w-3xl">
                {caseStudy.keyFeatures.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-zinc-300 leading-relaxed">
                    <span className="mt-[0.5rem] w-1.5 h-1.5 bg-black dark:bg-white flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcome */}
            <section>
              <span className="label-mono text-[12px] text-black/40 dark:text-white/40 mb-2 block">Impact</span>
              <h2 className="heading-display text-2xl sm:text-[28px] text-slate-900 dark:text-white mb-4">
                The Outcome
              </h2>
              <div className="border-l-2 border-black dark:border-white pl-5 py-1 max-w-3xl">
                <p className="text-[16px] sm:text-[17px] font-medium text-slate-800 dark:text-zinc-100 leading-[1.8]">
                  {caseStudy.outcome}
                </p>
              </div>
            </section>

            {/* Tools Used */}
            <section>
              <span className="label-mono text-[12px] text-black/40 dark:text-white/40 mb-3 block">Stack</span>
              <h2 className="heading-display text-2xl sm:text-[28px] text-slate-900 dark:text-white mb-5">
                Tools Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tools.map(tool => (
                  <span
                    key={tool}
                    className="label-mono px-3 py-1.5 text-[11px] border border-black/12 dark:border-white/15 text-black/55 dark:text-white/55"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </div>
          )}

          {/* Gallery */}
          {id !== "chatly-prd" && caseStudy.gallery.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <ZoomIn className="w-5 h-5 text-slate-400 dark:text-zinc-500" />
                <div>
                  <h2 className="label-mono text-[13px] text-slate-900 dark:text-white">Gallery</h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-500">Click any image to view full size</p>
                </div>
              </div>

              {A4_GALLERY_IDS.includes(id || '') ? (
                /* A4 Document Style */
                <div className="flex flex-col items-center gap-10">
                  {caseStudy.gallery.map((item, index) => (
                    <div
                      key={index}
                      className="group w-full max-w-4xl cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative overflow-hidden bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 hover:shadow-xl transition-all duration-300">
                        <div className="p-4 md:p-6 bg-gradient-to-br from-slate-50 to-white dark:from-zinc-900 dark:to-zinc-900">
                          <img
                            src={item.src}
                            alt={item.caption}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 flex items-center justify-center shadow-lg">
                            <ZoomIn className="w-5 h-5 text-slate-700 dark:text-zinc-200" />
                          </div>
                        </div>
                        {/* Page badge */}
                        <div className="label-mono absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/10 text-[10px] text-slate-600 dark:text-zinc-400">
                          {index + 1} / {caseStudy.gallery.length}
                        </div>
                      </div>
                      {item.caption && (
                        <p className="text-sm text-slate-500 dark:text-zinc-500 mt-3 text-center">{item.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                /* Standard Grid */
                <div className="flex flex-col gap-6">
                  {caseStudy.gallery.map((item, index) => (
                    <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
                      <div className="relative overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 hover:shadow-lg transition-all duration-300">
                        <img
                          src={item.src}
                          alt={item.caption}
                          className="w-full aspect-video object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/90 dark:bg-zinc-900/90 flex items-center justify-center shadow-lg">
                            <ZoomIn className="w-5 h-5 text-slate-700 dark:text-zinc-200" />
                          </div>
                        </div>
                        <div className="label-mono absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-zinc-900/90 border border-black/10 dark:border-white/10 text-[10px] text-slate-600 dark:text-zinc-400">
                          {index + 1} / {caseStudy.gallery.length}
                        </div>
                      </div>
                      {item.caption && (
                        <p className="text-sm text-slate-500 dark:text-zinc-500 mt-2 text-center">{item.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Lightbox */}
          <ImageLightbox
            images={caseStudy.gallery}
            initialIndex={lightboxIndex}
            open={lightboxOpen}
            onOpenChange={setLightboxOpen}
          />

          {/* Related Case Studies */}
          <RelatedCaseStudies currentStudyId={id || ""} />
        </div>
      </main>

      <FooterSection />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 shadow-lg flex items-center justify-center text-slate-600 dark:text-zinc-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
        {/* Progress ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-200 dark:text-zinc-700" />
          <circle
            cx="24" cy="24" r="22" fill="none"
            stroke="url(#topGrad)" strokeWidth="1.5" strokeLinecap="round"
            strokeDasharray={`${scrollProgress * 1.382} 138.2`}
          />
          <defs>
            <linearGradient id="topGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
    </>
  );
};

export default CaseStudyDetail;
