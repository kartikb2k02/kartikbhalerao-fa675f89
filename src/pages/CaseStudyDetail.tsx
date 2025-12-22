import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, ZoomIn } from "lucide-react";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { getCaseStudyById } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "@/components/ImageLightbox";
const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : undefined;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      <AnimatedBackground intensity="rich" />
      
      {/* Additional decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Radial gradient spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[60vh] bg-gradient-radial from-primary/10 via-primary/5 to-transparent" />
        
        {/* Side accent gradients */}
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        
        {/* Decorative lines */}
        <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
      </div>

      <Header />
      
      <main className="pt-24 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/case-studies" 
            className="group inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 mb-10 hover:-translate-x-1"
          >
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
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
              
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
              {caseStudy.tags.map((tag, index) => (
                <Badge 
                  key={tag} 
                  variant="secondary" 
                  className="text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Content Sections with visual divider */}
          <div className="grid gap-12 relative">
            {/* Decorative side line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-border/30 to-transparent hidden lg:block" />
            

            {/* Gallery Section */}
            {caseStudy.gallery.length > 0 && (
              <section className="relative">
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
                  {caseStudy.gallery.map((item, index) => (
                    <div
                      key={index}
                      className="group animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm cursor-pointer shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500">
                        <img
                          src={item.src}
                          alt={item.caption}
                          className={`w-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ${id === 'ether-prd' ? 'aspect-[1/1.414]' : 'aspect-video'}`}
                        />
                        {/* Hover overlay with click prompt */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                            <ZoomIn className="w-7 h-7 text-primary-foreground" />
                          </div>
                          <span className="text-sm font-medium text-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
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
                      {item.caption && (
                        <p className="text-sm text-muted-foreground mt-4 text-center flex items-center justify-center gap-2">
                          <span className="w-8 h-px bg-gradient-to-r from-transparent to-border" />
                          {item.caption}
                          <span className="w-8 h-px bg-gradient-to-l from-transparent to-border" />
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Lightbox */}
            <ImageLightbox
              images={caseStudy.gallery}
              initialIndex={lightboxIndex}
              open={lightboxOpen}
              onOpenChange={setLightboxOpen}
            />

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
                  {caseStudy.keyFeatures.map((feature, index) => (
                    <li 
                      key={feature} 
                      className="flex items-center gap-3 text-muted-foreground group/item hover:text-foreground transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${caseStudy.bgGradient} group-hover/item:scale-125 transition-transform`} />
                      {feature}
                    </li>
                  ))}
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
                  {caseStudy.tools.map((tool, index) => (
                    <Badge 
                      key={tool} 
                      variant="outline" 
                      className="hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default animate-fade-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>

            {/* View Full Presentation */}
            <div className="text-center pt-8">
              <Button size="lg" className={`bg-gradient-to-r ${caseStudy.bgGradient} text-white hover:opacity-90`} onClick={() => window.open(caseStudy.externalLink, "_blank")}>
                <ExternalLink className="w-5 h-5 mr-2" />
                View Full Presentation
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>;
};
export default CaseStudyDetail;