import { useState, useEffect } from "react";
import { ArrowDown, Target, Users, BarChart3, MousePointer2, Sparkles, ChevronRight, Play, Linkedin } from "lucide-react";

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
          <div className="space-y-12">
            <div className="space-y-8">
              
              <h1 
                className="text-6xl sm:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent leading-tight tracking-tight cursor-pointer hover:scale-105 transition-all duration-500"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Kartik Bhalerao
              </h1>
              
              <div className="flex items-center justify-center">
                <div className={`relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-5 rounded-3xl text-2xl font-bold shadow-2xl transition-all duration-500 ${isHovering ? 'scale-110 shadow-blue-500/25 shadow-2xl' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur opacity-30 animate-pulse"></div>
                  <span className="relative z-10">Product Manager</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 dark:text-slate-300 max-w-6xl mx-auto leading-relaxed font-light">
                Transforming user insights into product solutions that drive business growth through 
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold hover:from-blue-700 hover:to-indigo-700 cursor-pointer transition-all duration-300"> data-driven decision making</span> and 
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold hover:from-indigo-700 hover:to-purple-700 cursor-pointer transition-all duration-300"> strategic thinking</span>
              </p>

              {/* Enhanced Social Links */}
              <div className="flex justify-center items-center gap-8">
                <a 
                  href="https://linkedin.com/in/kartik-bhalerao" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 rounded-3xl hover:bg-blue-50/80 dark:hover:bg-slate-700/80 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Linkedin className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </a>
                
                <a 
                  href="https://medium.com/@kartik-bhalerao" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 rounded-3xl hover:bg-slate-50/80 dark:hover:bg-slate-700/80 transition-all duration-500 hover:scale-125 hover:shadow-2xl hover:shadow-slate-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-slate-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-7 h-7 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <span className="text-white dark:text-slate-900 text-sm font-bold">M</span>
                  </div>
                </a>
              </div>
            </div>
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

      </div>
    </section>
  );
};
