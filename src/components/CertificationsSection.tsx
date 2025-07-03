
import { useState } from "react";
import { Award, Trophy, Star, CheckCircle, Calendar, Medal, Target, Users, TrendingUp, Zap, ChevronDown, ChevronUp, ExternalLink, Sparkles } from "lucide-react";

export const CertificationsSection = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const certifications = [
    {
      title: "Atlassian Professional Product Management",
      issuer: "Atlassian",
      year: "2024",
      category: "Product Management",
      icon: Trophy,
      color: "from-blue-500 to-blue-600",
      description: "Comprehensive product management methodology covering agile practices, stakeholder alignment, and strategic planning.",
      skills: ["Product Strategy", "Agile Methodology", "Stakeholder Management", "Strategic Planning"],
      credentialId: "PM-2024-001",
      link: "#"
    },
    {
      title: "AI in Product Management Certification",
      issuer: "Pendo.ai",
      year: "2024",
      category: "AI & Innovation",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      description: "Advanced certification in integrating AI technologies into product development cycles and decision-making processes.",
      skills: ["AI Integration", "Machine Learning", "Product Innovation", "Data Science"],
      credentialId: "AI-PM-2024-078",
      link: "#"
    },
    {
      title: "Product Analytics Master Class",
      issuer: "Pendo.ai",
      year: "2024",
      category: "Analytics",
      icon: TrendingUp,
      color: "from-green-500 to-green-600",
      description: "Deep dive into product analytics, user behavior analysis, and metrics-driven product optimization strategies.",
      skills: ["Product Analytics", "User Behavior", "A/B Testing", "Metrics Design"],
      credentialId: "PA-2024-156",
      link: "#"
    },
    {
      title: "Product-Led Growth Certification",
      issuer: "MindTheProduct",
      year: "2024",
      category: "Growth Strategy",
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
      description: "Strategic framework for implementing product-led growth methodologies and user acquisition strategies.",
      skills: ["PLG Strategy", "User Onboarding", "Growth Metrics", "Retention Optimization"],
      credentialId: "PLG-2024-089",
      link: "#"
    }
  ];

  const achievements = [
    {
      title: "Google Developer Student Clubs Facilitator",
      organization: "Google for Education",
      year: "2024",
      category: "Leadership",
      icon: Users,
      description: "Led and mentored a cohort of 40+ students in technology workshops, product development sessions, and career guidance programs.",
      impact: "Facilitated 12+ workshops, mentored 40+ students, organized 3 major tech events",
      recognition: "Outstanding Facilitator Award"
    },
    {
      title: "IETE Management Lead",
      organization: "IETE x DIEMS",
      year: "2023",
      category: "Leadership",
      icon: Medal,
      description: "Spearheaded technical event management and cross-functional team coordination for engineering society initiatives.",
      impact: "Organized 8+ technical events, managed team of 15+ members",
      recognition: "Excellence in Leadership"
    },
    {
      title: "Academic Excellence - College Topper",
      organization: "DIEMS College",
      year: "2020",
      category: "Academic",
      icon: Trophy,
      description: "Achieved highest academic performance in Electronics & Telecommunication Engineering first year with distinction.",
      impact: "GPA: 9.2/10, Top 1% of class",
      recognition: "Dean's List, Merit Scholarship"
    },
    {
      title: "NCC 'A' Certificate",
      organization: "National Cadet Corps",
      year: "2017",
      category: "Service",
      icon: Award,
      description: "Completed rigorous military training program demonstrating leadership, discipline, and service commitment.",
      impact: "Air Wing specialization, Leadership training",
      recognition: "Certificate of Excellence"
    },
    {
      title: "State-Level Swimming Championship",
      organization: "State Sports Association",
      year: "2016",
      category: "Sports",
      icon: Star,
      description: "Qualified for state-level swimming championship after winning school and district competitions.",
      impact: "School champion, District qualifier",
      recognition: "Sports Excellence Award"
    }
  ];

  const tabData = [
    { id: "certifications", label: "Professional Certifications", count: certifications.length, icon: Trophy },
    { id: "achievements", label: "Notable Achievements", count: achievements.length, icon: Star }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Certifications & Achievements
          </h2>
          <Sparkles className="w-8 h-8 text-blue-500 dark:text-blue-400" />
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional credentials and milestone achievements that showcase expertise, leadership, and continuous learning journey
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
          {tabData.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                }`}
              >
                <IconComponent className="w-6 h-6" />
                <span>{tab.label}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  activeTab === tab.id 
                    ? "bg-white/20 text-white" 
                    : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative">
        
        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <div
                  key={index}
                  className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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
                      <button
                        onClick={() => toggleCard(index)}
                        className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
                      >
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {cert.category}
                      </span>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Credential ID:</span>
                            <span className="font-mono text-slate-800 dark:text-slate-200">{cert.credentialId}</span>
                          </div>
                          <button className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 py-3 rounded-xl transition-colors">
                            <ExternalLink className="w-4 h-4" />
                            <span>View Credential</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="space-y-6 animate-fade-in">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const isExpanded = expandedCard === index;
              
              return (
                <div
                  key={index}
                  className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
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
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{achievement.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                              <span className="font-medium">{achievement.organization}</span>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {achievement.year}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleCard(index)}
                            className="p-2 bg-slate-100 dark:bg-slate-700 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                          >
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </div>

                        <div className="mb-4">
                          <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-medium">
                            {achievement.category}
                          </span>
                        </div>

                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {achievement.description}
                        </p>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Impact & Results</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{achievement.impact}</p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Recognition</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{achievement.recognition}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

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
              <div className="bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/95 dark:hover:bg-slate-800/95 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
