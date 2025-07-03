import { useState, useEffect } from "react";
import { ArrowDown, Target, Briefcase, TrendingUp, Users, BarChart3, Lightbulb, Zap, Sparkles, ChevronRight, Play } from "lucide-react";

export const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    { label: "User Satisfaction", value: "94%", color: "from-green-500 to-emerald-600" },
    { label: "Feature Adoption", value: "78%", color: "from-blue-500 to-cyan-600" },
    { label: "Time to Market", value: "-40%", color: "from-purple-500 to-pink-600" },
    { label: "Revenue Growth", value: "+25%", color: "from-orange-500 to-red-600" }
  ];

  const skills = [
    { icon: Target, label: "Strategic Vision", description: "Product roadmap & strategy" },
    { icon: Users, label: "User Research", description: "25+ interviews conducted" },
    { icon: BarChart3, label: "Data Analysis", description: "Metrics-driven decisions" },
    { icon: Lightbulb, label: "Innovation", description: "MVP scoping & ideation" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
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
        
        {/* Interactive Header Card */}
        <div className={`bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-12 border border-white/30 dark:border-slate-700/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header with Product Manager Badge */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
            <div className="text-left lg:text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <img
                      src="/lovable-uploads/9fcfee71-4f00-4d9b-81a1-24e215cf0996.png"
                      alt="Kartik Bhalerao"
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                    Kartik Bhalerao
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-lg">
                      Product Manager
                    </span>
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Metrics Display */}
            <div className="mt-6 lg:mt-0">
              <div className="bg-white/60 dark:bg-slate-700/60 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm min-w-[200px]">
                <div className="text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${metrics[currentMetric].color} bg-clip-text text-transparent mb-2 transition-all duration-500`}>
                    {metrics[currentMetric].value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                    {metrics[currentMetric].label}
                  </div>
                  <div className="flex justify-center mt-2 gap-1">
                    {metrics.map((_, index) => (
                      <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentMetric ? 'bg-blue-500' : 'bg-slate-300 dark:bg-slate-600'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interactive Value Proposition */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transforming user insights into product solutions that drive business growth through 
              <span className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer"> data-driven decision making</span> and 
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer"> strategic thinking</span>
            </p>
            
            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <button 
                onClick={scrollToAbout}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <span>About Me</span>
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={scrollToProjects}
                className="group bg-white/80 dark:bg-slate-800/80 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>View Projects</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className={`group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 text-center hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-500 cursor-pointer hover:-translate-y-3 shadow-xl hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-400/20 dark:to-indigo-400/20 rounded-2xl p-4 mb-4 mx-auto w-fit group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-blue-500 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.label}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Product Manager Mindset Showcase */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-700/50 backdrop-blur-sm">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Product Manager Mindset</h3>
              <Sparkles className="w-6 h-6 text-blue-500 dark:text-blue-400" />
            </div>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Every decision backed by data, every feature driven by user needs, every sprint focused on business impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "User-Centric", desc: "Always start with user problems", icon: Users },
              { title: "Data-Driven", desc: "Metrics guide every decision", icon: BarChart3 },
              { title: "Business Impact", desc: "Focus on measurable outcomes", icon: TrendingUp }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white/60 dark:bg-slate-800/60 rounded-xl p-4 mb-3 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="pt-8">
          <div className="flex flex-col items-center space-y-3 animate-bounce">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/30 dark:border-slate-700/30">
              Explore my journey
            </span>
            <ArrowDown className="w-6 h-6 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
