
import { useState } from "react";
import { Award, Trophy, Star, CheckCircle, Calendar, ExternalLink, Medal, Target, Users, TrendingUp, Zap } from "lucide-react";

export const CertificationsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certifications = [
    {
      title: "Atlassian Professional Product Management Certification",
      issuer: "Atlassian",
      year: "2024",
      category: "product",
      icon: Trophy,
      color: "blue",
      description: "Advanced product management methodologies and best practices",
      skills: ["Product Strategy", "Agile", "User Research"]
    },
    {
      title: "AI in Product Management",
      issuer: "Pendo.ai",
      year: "2024",
      category: "ai",
      icon: Zap,
      color: "purple",
      description: "Leveraging AI and machine learning in product development",
      skills: ["AI Integration", "Data Analysis", "Product Innovation"]
    },
    {
      title: "Product Analytics Certification",
      issuer: "Pendo.ai", 
      year: "2024",
      category: "analytics",
      icon: TrendingUp,
      color: "green",
      description: "Advanced analytics for product optimization and growth",
      skills: ["Analytics", "Metrics", "User Behavior"]
    },
    {
      title: "Product-Led Certification",
      issuer: "MindTheProduct",
      year: "2024",
      category: "strategy",
      icon: Target,
      color: "indigo",
      description: "Product-led growth strategies and implementation",
      skills: ["Growth Strategy", "PLG", "User Onboarding"]
    }
  ];

  const achievements = [
    {
      title: "GDSC Facilitator",
      description: "Conducted and mentored a 40-student cohort as a Facilitator for the Google Developer Student Clubs (GDSC) program",
      year: "2024",
      icon: Users,
      category: "leadership"
    },
    {
      title: "IETE Management Lead",
      description: "IETE x Diems Management Lead, responsible for organizing technical events and workshops",
      year: "2023", 
      icon: Medal,
      category: "leadership"
    },
    {
      title: "Academic Excellence",
      description: "College Topper—1st Year, Electronics & Telecommunication Engineering",
      year: "2020",
      icon: Trophy,
      category: "academic"
    },
    {
      title: "NCC Certificate",
      description: "Completed 'A' Certificate in NCC (Air Wing), demonstrating leadership and discipline",
      year: "2017",
      icon: Award,
      category: "leadership"
    },
    {
      title: "Swimming Championship",
      description: "School Champion in Swimming, qualified for State-Level Championship",
      year: "2016",
      icon: Star,
      category: "sports"
    }
  ];

  const categories = [
    { id: "all", label: "All", count: certifications.length + achievements.length },
    { id: "product", label: "Product Management", count: certifications.filter(c => c.category === "product").length },
    { id: "ai", label: "AI & Tech", count: certifications.filter(c => c.category === "ai").length },
    { id: "leadership", label: "Leadership", count: achievements.filter(a => a.category === "leadership").length }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600", 
      green: "from-green-500 to-green-600",
      indigo: "from-indigo-500 to-indigo-600"
    };
    return colors[color] || colors.blue;
  };

  const filteredCertifications = selectedCategory === "all" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const filteredAchievements = selectedCategory === "all" 
    ? achievements 
    : selectedCategory === "leadership" 
      ? achievements.filter(ach => ach.category === selectedCategory)
      : [];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Certifications & Achievements
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Professional certifications and notable achievements that showcase my expertise and growth
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
      </div>

      {/* Interactive Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`group px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                : "bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-white/90 dark:hover:bg-slate-800/90 border border-slate-200/60 dark:border-slate-700/60"
            }`}
          >
            <span className="flex items-center gap-2">
              {category.label}
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
              }`}>
                {category.count}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications Column */}
        {filteredCertifications.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Trophy className="w-7 h-7 text-blue-500 dark:text-blue-400 mr-3" />
              Professional Certifications
            </h3>
            
            {filteredCertifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm cursor-pointer hover:-translate-y-2 ${
                    hoveredCard === index ? "scale-[1.02]" : ""
                  }`}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(cert.color)} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${getColorClasses(cert.color)} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-2">
                          <span className="font-medium">{cert.issuer}</span>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {cert.year}
                          </div>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-3">
                          {cert.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Achievements Column */}
        {filteredAchievements.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Star className="w-7 h-7 text-indigo-500 dark:text-indigo-400 mr-3" />
              Notable Achievements
            </h3>
            
            {filteredAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const cardIndex = filteredCertifications.length + index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(cardIndex)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative bg-white/80 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm cursor-pointer hover:-translate-y-2 ${
                    hoveredCard === cardIndex ? "scale-[1.02]" : ""
                  }`}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {achievement.title}
                        </h4>
                        <div className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 mb-3">
                          <Calendar className="w-4 h-4" />
                          {achievement.year}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Stats Counter */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Certifications", value: certifications.length, icon: Trophy },
          { label: "Years Experience", value: "1+", icon: Calendar },
          { label: "Leadership Roles", value: achievements.filter(a => a.category === "leadership").length, icon: Users },
          { label: "Skills Acquired", value: "15+", icon: Target }
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center group">
              <div className="bg-white/60 dark:bg-slate-800/60 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
