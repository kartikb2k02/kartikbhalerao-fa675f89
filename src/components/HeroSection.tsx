import { useState, useEffect } from "react";
import { ArrowDown, Target, Users, BarChart3, MousePointer2, Sparkles, ChevronRight, Play } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    window.location.href = '/about';
  };

  const scrollToCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 300px)`
        }}
      />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Main Hero Content */}
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight cursor-pointer hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Kartik Bhalerao
              </h1>
              
              <div className="flex items-center justify-center gap-4">
                <span className={`bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl text-2xl font-bold shadow-lg transition-all duration-300 ${isHovering ? 'scale-110 shadow-2xl' : ''}`}>
                  Product Manager
                </span>
              </div>
            </div>
            
            <p className="text-2xl sm:text-3xl text-slate-700 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
              Transforming user insights into product solutions that drive business growth through 
              <span className="text-blue-600 dark:text-blue-400 font-semibold hover:underline cursor-pointer transition-all duration-300"> data-driven decision making</span> and 
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer transition-all duration-300"> strategic thinking</span>
            </p>
          </div>

          {/* Interactive Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <button 
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 flex items-center justify-center space-x-4"
            >
              <Target className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>About Me</span>
            </button>
            
            <button 
              onClick={scrollToCaseStudies}
              className="group bg-white/90 dark:bg-slate-800/90 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 hover:scale-105 flex items-center justify-center space-x-4 backdrop-blur-sm"
            >
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>View My Work</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Interactive Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Target, title: "Strategic Vision", desc: "Product roadmap & strategy", color: "from-blue-500 to-blue-600" },
            { icon: Users, title: "User Research", desc: "25+ interviews conducted", color: "from-green-500 to-green-600" },
            { icon: BarChart3, title: "Data Analysis", desc: "Metrics-driven decisions", color: "from-purple-500 to-purple-600" }
          ].map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={index} 
                className="bg-white/80 dark:bg-slate-800/80 rounded-2xl p-6 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className={`bg-gradient-to-r ${skill.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{skill.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{skill.desc}</p>
              </div>
            );
          })}
        </div>
        
        {/* Scroll Indicator */}
        <div className="pt-8">
          <div className="flex flex-col items-center space-y-4 animate-bounce">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200/30 dark:border-slate-700/30 text-lg cursor-pointer hover:scale-105 transition-transform duration-300">
              <MousePointer2 className="w-5 h-5" />
              <span>Explore my journey</span>
            </div>
            <ArrowDown className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
