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
  Star,
};

const Certifications = () => {
  const [activeTab, setActiveTab] = useState<"certifications" | "achievements">("certifications");

  const tabData = [
    { id: "certifications" as const, label: "Professional Certifications", count: certifications.length, icon: Trophy },
    { id: "achievements" as const, label: "Notable Achievements", count: achievements.length, icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
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
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional credentials and milestone achievements that showcase expertise, leadership, and continuous learning journey
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          {/* Interactive Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-2 border border-border/50 shadow-xl">
              {tabData.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                        : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      activeTab === tab.id 
                        ? "bg-white/20 text-white" 
                        : "bg-primary/10 text-primary"
                    }`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Certifications Grid */}
          {activeTab === "certifications" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {certifications.map((cert) => {
                const IconComponent = iconMap[cert.icon] || Trophy;
                return (
                  <Link
                    key={cert.id}
                    to={`/certifications/${cert.id}`}
                    className="group bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
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
                        {cert.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full font-medium">
                            +{cert.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Achievements Grid */}
          {activeTab === "achievements" && (
            <div className="space-y-6 animate-fade-in">
              {achievements.map((achievement) => {
                const IconComponent = iconMap[achievement.icon] || Award;
                return (
                  <Link
                    key={achievement.id}
                    to={`/achievements/${achievement.id}`}
                    className="group block bg-card/90 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="p-8">
                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-8 h-8" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-foreground mb-2">{achievement.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="font-medium">{achievement.organization}</span>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {achievement.year}
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </div>

                          <div className="mb-4">
                            <span className="inline-block bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                              {achievement.category}
                            </span>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Certifications", value: certifications.length, icon: Trophy, color: "from-blue-500 to-blue-600" },
              { label: "Leadership Roles", value: achievements.filter(a => a.category === "Leadership").length, icon: Users, color: "from-indigo-500 to-indigo-600" },
              { label: "Years Learning", value: "5+", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
              { label: "Skills Mastered", value: "20+", icon: Target, color: "from-green-500 to-green-600" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-card/80 rounded-2xl p-6 border border-border/50 hover:bg-card transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Certifications;
