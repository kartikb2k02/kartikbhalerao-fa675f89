import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { ImageLightbox } from "@/components/ImageLightbox";
import { certifications, achievements } from "@/data/certifications";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Zap, TrendingUp, Target, Users, Medal, Award, Star, ArrowRight, Sparkles, ZoomIn } from "lucide-react";
const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Zap,
  TrendingUp,
  Target,
  Users,
  Medal,
  Award,
  Star
};
const Certifications = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const certificationImages = certifications.map(cert => ({
    src: cert.image || "",
    caption: cert.title
  }));

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return <div className="min-h-screen bg-[#EFEFEF] dark:bg-[#111111] text-foreground relative">
      <Header />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-5 mb-7">
              <span className="w-14 h-[1.5px] bg-gradient-to-r from-transparent to-black/25 dark:to-white/25" />
              <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">
                Credentials
              </span>
              <span className="w-14 h-[1.5px] bg-gradient-to-l from-transparent to-black/25 dark:to-white/25" />
            </div>

            <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-black leading-none tracking-tight text-black dark:text-white mb-5">
              Certifications &<br />Achievements
            </h1>

            <p className="text-[17px] text-black/42 dark:text-white/42 max-w-[420px] mx-auto leading-[1.9] tracking-[-0.01em]">
              Credentials that validate the{" "}
              <span className="text-black/75 dark:text-white/75 font-semibold italic">journey</span>.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {certifications.map((cert, index) => {
            return <div key={cert.id} className="group bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Certificate Image */}
                    <div 
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => handleImageClick(index)}
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Zoom Icon */}
                      <div className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="group/badge relative inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold mb-2 border border-white/30 shadow-lg overflow-hidden">
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></span>
                          <span className={`w-2 h-2 rounded-full animate-pulse ${
                            cert.category === "Product Management" ? "bg-blue-400" :
                            cert.category === "AI & Innovation" ? "bg-purple-400" :
                            cert.category === "Analytics" ? "bg-emerald-400" :
                            cert.category === "Growth Strategy" ? "bg-indigo-400" :
                            "bg-amber-400"
                          }`}></span>
                          {cert.category}
                        </span>
                        <h3 className="text-white text-lg font-bold">{cert.title}</h3>
                        <p className="text-white/80 text-sm">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  </div>;
          })}
            </div>


          {/* Summary Stats */}
          
        </div>
      </main>

      <ImageLightbox
        images={certificationImages}
        initialIndex={selectedImageIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />

      <FooterSection />
    </div>;
};
export default Certifications;