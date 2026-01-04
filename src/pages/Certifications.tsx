import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { certifications, achievements } from "@/data/certifications";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Zap, TrendingUp, Target, Users, Medal, Award, Star, ArrowRight, Sparkles, Calendar } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<"certifications" | "achievements">("certifications");
  const tabData = [{
    id: "certifications" as const,
    label: "Professional Certifications",
    count: certifications.length,
    icon: Trophy
  }, {
    id: "achievements" as const,
    label: "Notable Achievements",
    count: achievements.length,
    icon: Star
  }];
  return <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
      <Header />
      <AnimatedBackground intensity="light" />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                Certifications & Achievements
              </h1>
              <Sparkles className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          {/* Interactive Tabs */}
          

          {/* Certifications Grid */}
          {activeTab === "certifications" && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          {certifications.map(cert => {
            return <div key={cert.id} className="group bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Certificate Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium mb-2">
                          {cert.category}
                        </span>
                        <h3 className="text-white text-lg font-bold">{cert.title}</h3>
                        <p className="text-white/80 text-sm">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  </div>;
          })}
            </div>}

          {/* Achievements Grid */}
          {activeTab === "achievements" && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {achievements.map(achievement => {
                const IconComponent = iconMap[achievement.icon] || Award;
                return (
                  <Link key={achievement.id} to={`/achievements/${achievement.id}`} className="group bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Achievement Header */}
                    <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                      
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                            <p className="text-white/80 text-sm">{achievement.organization} • {achievement.year}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>

                    {/* Achievement Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-full text-sm font-medium">
                          {achievement.category}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      <div className="text-sm text-primary font-medium">
                        {achievement.impact}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>}

          {/* Summary Stats */}
          
        </div>
      </main>

      <FooterSection />
    </div>;
};
export default Certifications;