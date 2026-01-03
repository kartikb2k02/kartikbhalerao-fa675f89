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
            const IconComponent = iconMap[cert.icon] || Trophy;
            return <Link key={cert.id} to={`/certifications/${cert.id}`} className="group bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Certificate Header */}
                    <div className={`bg-gradient-to-r ${cert.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                      
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                            <p className="text-white/80 text-sm">{cert.issuer} • {cert.year}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>

                    {/* Certificate Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {cert.category}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.slice(0, 3).map((skill, i) => <span key={i} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                            {skill}
                          </span>)}
                        {cert.skills.length > 3 && <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                            +{cert.skills.length - 3} more
                          </span>}
                      </div>
                    </div>
                  </Link>;
          })}
            </div>}

          {/* Achievements Grid */}
          {activeTab === "achievements" && <div className="space-y-6 animate-fade-in">
              {achievements.map(achievement => {
            const IconComponent = iconMap[achievement.icon] || Award;
            return;
          })}
            </div>}

          {/* Summary Stats */}
          
        </div>
      </main>

      <FooterSection />
    </div>;
};
export default Certifications;