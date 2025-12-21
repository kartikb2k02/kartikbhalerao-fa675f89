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
      <AnimatedBackground intensity="medium" />
      <Header />
      
      <main className="pt-24 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          {/* Hero Section */}
          <div className="relative rounded-3xl overflow-hidden mb-12">
            <div className={`aspect-[21/9] bg-gradient-to-br ${caseStudy.bgGradient}`}>
              <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Title & Tags */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{caseStudy.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map(tag => <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>)}
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid gap-12">
            {/* Overview */}
            

            {/* Challenge */}
            

            {/* Solution */}
            

            {/* Outcome */}
            

            {/* Gallery Section */}
            {caseStudy.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-6">Gallery</h2>
                <div className={`grid gap-6 ${id === 'ether-prd' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                  {caseStudy.gallery.map((item, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm">
                        <img
                          src={item.src}
                          alt={item.caption}
                          className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${id === 'ether-prd' ? 'aspect-[1/1.414]' : 'aspect-video'}`}
                        />
                        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn className="w-10 h-10 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      {item.caption && (
                        <p className="text-sm text-muted-foreground mt-3 text-center">
                          {item.caption}
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
              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {caseStudy.keyFeatures.map(feature => <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${caseStudy.bgGradient}`} />
                      {feature}
                    </li>)}
                </ul>
              </section>

              <section className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-4">Tools Used</h2>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools.map(tool => <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>)}
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