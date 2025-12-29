import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, ZoomIn, ArrowUp } from "lucide-react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { getCaseStudyById } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "@/components/ImageLightbox";
import { RelatedCaseStudies } from "@/components/RelatedCaseStudies";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  if (!caseStudy) {
    return <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <AnimatedBackground intensity="medium" />
        <Header />
        <main className="pt-32 relative z-10 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary hover:underline">
            ← Back to Case Studies
          </Link>
        </main>
        <FooterSection />
      </div>;
  }
  return <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Reading Progress Bar - Theme Matched */}
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-slate-200/30 dark:bg-slate-800/50 backdrop-blur-sm overflow-hidden">
        {/* Progress fill with case study theme */}
        <div 
          className={`h-full bg-gradient-to-r ${caseStudy.bgGradient} transition-all duration-150 ease-out relative`}
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite] -skew-x-12" />
          {/* Glow effect at the end */}
          <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-8 h-4 bg-gradient-to-r ${caseStudy.bgGradient} blur-md opacity-80`} />
        </div>
      </div>

      {/* Progress percentage indicator */}
      <div 
        className={`fixed top-20 right-4 z-40 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg transition-all duration-300 ${
          scrollProgress > 5 && scrollProgress < 100 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}
      >
        <span className="text-xs font-medium bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
          {Math.round(scrollProgress)}% viewed
        </span>
      </div>

      <AnimatedBackground intensity="rich" />
      
      {/* Additional decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Radial gradient spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60vh] bg-gradient-radial from-primary/10 via-primary/5 to-transparent" />
        
        {/* Side accent gradients */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{
        animationDuration: '4s'
      }} />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" style={{
        animationDuration: '5s'
      }} />
        
        {/* Decorative lines */}
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      <Header />
      
      <main className="pt-24 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/case-studies" className="group inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 mb-10 hover:-translate-x-1">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 border border-border/50 group-hover:border-primary/30 group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
              <ArrowLeft className="w-4 h-4 transition-all duration-300 group-hover:-translate-x-0.5" />
              <div className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="relative font-medium">
              Back to Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full" />
            </span>
          </Link>

          {/* Hero Section */}
          <div className="relative rounded-3xl overflow-hidden mb-12 group">
            {/* Decorative gradient border */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${caseStudy.bgGradient} rounded-[1.75rem] blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
            
            <div className={`relative aspect-[4/3] lg:aspect-[16/9] bg-gradient-to-br ${caseStudy.bgGradient}`}>
              <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              
              {/* Corner accents */}
              <div className={`absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/40 rounded-tl-xl`} />
              <div className={`absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/40 rounded-br-xl`} />
            </div>
          </div>

          {/* Title & Tags with enhanced styling */}
          <div className="mb-12 relative">
            {/* Decorative accent */}
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full" />
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{caseStudy.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, index) => <Badge key={tag} variant="secondary" className="text-sm animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  {tag}
                </Badge>)}
            </div>
          </div>

          {/* Content Sections with visual divider */}
          <div className="grid gap-12 relative">
            {/* Decorative side line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-border/30 to-transparent hidden lg:block" />
            

            {/* Gallery Section */}
            {caseStudy.gallery.length > 0 && <section className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20">
                    <ZoomIn className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                    <p className="text-sm text-muted-foreground">Click any image to view full size</p>
                  </div>
                </div>
                
                <div className="grid gap-8 grid-cols-1">
                  {caseStudy.gallery.map((item, index) => <div key={index} className="group animate-fade-in" style={{
                animationDelay: `${index * 50}ms`
              }} onClick={() => openLightbox(index)}>
                      <div className="relative rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm cursor-pointer shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                        <img src={item.src} alt={item.caption} className={`w-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ${id === 'ether-prd' ? 'aspect-[1/1.414]' : 'aspect-video'}`} />
                        {/* Hover overlay with click prompt */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-md shadow-primary/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <span className="text-xs font-medium text-foreground bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full border border-border/50 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            Click to enlarge
                          </span>
                        </div>
                        {/* Glowing border effect on hover */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/40 transition-colors duration-300 pointer-events-none" />
                        
                        {/* Image number indicator */}
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border text-xs font-medium text-muted-foreground">
                          {index + 1} / {caseStudy.gallery.length}
                        </div>
                      </div>
                      {item.caption && <p className="text-sm text-muted-foreground mt-4 text-center flex items-center justify-center gap-2">
                          <span className="w-8 h-px bg-gradient-to-r from-transparent to-border" />
                          {item.caption}
                          <span className="w-8 h-px bg-gradient-to-l from-transparent to-border" />
                        </p>}
                    </div>)}
                </div>
              </section>}

            {/* Lightbox */}
            <ImageLightbox images={caseStudy.gallery} initialIndex={lightboxIndex} open={lightboxOpen} onOpenChange={setLightboxOpen} />

            {/* Key Features & Tools */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border overflow-hidden group hover:border-primary/30 transition-colors duration-300">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20">
                    <span className="text-lg">✨</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Key Features</h2>
                </div>
                
                <ul className="space-y-3 relative">
                  {caseStudy.keyFeatures.map((feature, index) => <li key={feature} className="flex items-center gap-3 text-muted-foreground group/item hover:text-foreground transition-colors animate-fade-in" style={{
                  animationDelay: `${index * 100}ms`
                }}>
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${caseStudy.bgGradient} group-hover/item:scale-125 transition-transform`} />
                      {feature}
                    </li>)}
                </ul>
              </section>

              <section className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-2xl p-8 border border-border overflow-hidden group hover:border-primary/30 transition-colors duration-300">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-3xl" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center border border-accent/20">
                    <span className="text-lg">🛠️</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Tools Used</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools.map((tool, index) => <Badge key={tool} variant="outline" className="hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default animate-fade-in" style={{
                  animationDelay: `${index * 50}ms`
                }}>
                      {tool}
                    </Badge>)}
                </div>
              </section>
            </div>

            {/* View Full Presentation */}
            

            {/* Related Case Studies Carousel */}
            <RelatedCaseStudies currentStudyId={id || ""} />
          </div>
        </div>
      </main>
      
      <FooterSection />

      {/* Back to Top Button - Unique Design */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 group transition-all duration-500 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
        title="Back to top"
      >
        {/* Outer ring with gradient */}
        <div className="relative w-14 h-14">
          {/* Animated rotating border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 animate-spin-slow opacity-80 group-hover:opacity-100 transition-opacity" />
          
          {/* Inner background */}
          <div className="absolute inset-[2px] rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-200 dark:text-slate-700"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="url(#caseStudyProgressGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${scrollProgress * 1.57} 157`}
                className="transition-all duration-150"
              />
              <defs>
                <linearGradient id="caseStudyProgressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Arrow icon with animation */}
            <div className="relative z-10 flex flex-col items-center">
              <ArrowUp className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
      </button>
    </div>;
};
export default CaseStudyDetail;