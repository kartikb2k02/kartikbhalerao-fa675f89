import { useState, useEffect } from "react";
import { ArrowDown, Target, Users, BarChart3, Lightbulb, Zap, Sparkles, ChevronRight, Play, Code, Database, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    { icon: Target, label: "Strategic Vision", description: "Product roadmap & strategy" },
    { icon: Users, label: "User Research", description: "25+ interviews conducted" },
    { icon: BarChart3, label: "Data Analysis", description: "Metrics-driven decisions" },
    { icon: Lightbulb, label: "Innovation", description: "MVP scoping & ideation" }
  ];

  const technologies = [
    { name: "Product Analytics", level: 90, color: "from-blue-500 to-blue-600" },
    { name: "User Research", level: 85, color: "from-green-500 to-green-600" },
    { name: "A/B Testing", level: 80, color: "from-purple-500 to-purple-600" },
    { name: "Agile/Scrum", level: 95, color: "from-indigo-500 to-indigo-600" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    window.location.href = '/about';
  };

  const scrollToProjects = () => {
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-8 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Main Hero Content */}
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                Kartik Bhalerao
              </h1>
              
              <div className="flex items-center justify-center gap-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg">
                  Product Manager
                </span>
              </div>
            </div>
            
            <p className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
              Transforming user insights into product solutions that drive business growth through 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> data-driven decision making</span> and 
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> strategic thinking</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <button 
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex items-center justify-center space-x-4"
            >
              <span>About Me</span>
              <Target className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={scrollToProjects}
              className="group bg-white/90 dark:bg-slate-800/90 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 flex items-center justify-center space-x-4 backdrop-blur-sm"
            >
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>View Projects</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
        

        {/* Product Impact Showcase */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl p-12 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-blue-500 dark:text-blue-400" />
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Product Impact</h3>
              <Sparkles className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
            </div>
            <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Every decision backed by data, every feature driven by user needs, every sprint focused on measurable business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "User-Centric Approach", desc: "Always start with user problems and pain points", icon: Users, stat: "25+ interviews" },
              { title: "Data-Driven Decisions", desc: "Metrics and analytics guide every product choice", icon: BarChart3, stat: "100% backed" },
              { title: "Business Impact Focus", desc: "Measurable outcomes and ROI in every initiative", icon: TrendingUp, stat: "Growth-focused" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/70 dark:bg-slate-800/70 rounded-2xl p-8 mb-4 group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl p-4 mb-4 mx-auto w-fit">
                      <IconComponent className="w-10 h-10 text-blue-500 dark:text-blue-400 mx-auto" />
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3 text-lg">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">{item.desc}</p>
                    <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-bold">
                      {item.stat}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="pt-8">
          <div className="flex flex-col items-center space-y-4 animate-bounce">
            <span className="text-slate-500 dark:text-slate-400 font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200/30 dark:border-slate-700/30 text-lg">
              Explore my journey
            </span>
            <ArrowDown className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
