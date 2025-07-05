import { useState, useEffect } from "react";
import { ArrowDown, Target, Users, BarChart3, MousePointer2, Sparkles, ChevronRight, Play, Linkedin, TrendingUp, Star, Rocket, Heart } from "lucide-react";

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
    <section className="h-full flex flex-col justify-center items-center text-center px-6 lg:px-8 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 300px)`
        }}
      />
      
      {/* Floating Elements to match uploaded image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating PM card - top left */}
        <div className="absolute top-20 left-20 w-20 h-20 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-xl flex items-center justify-center rotate-12 animate-float-slow">
          <div className="text-lg font-bold text-blue-600 dark:text-blue-400">PM</div>
        </div>
        
        {/* Small floating element - bottom left */}
        <div className="absolute bottom-40 left-32 w-16 h-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-xl shadow-xl -rotate-12 animate-float-slower">
          <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-blue-200 dark:bg-blue-700 rounded-sm"></div>
              <div className="w-2 h-2 bg-purple-200 dark:bg-purple-700 rounded-sm"></div>
              <div className="w-2 h-2 bg-purple-200 dark:bg-purple-700 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-200 dark:bg-blue-700 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Data visualization chart - top right */}
        <div className="absolute top-60 right-20 w-24 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-full shadow-xl animate-float">
          <div className="w-full h-full flex items-center justify-center space-x-1">
            <div className="w-1 h-4 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
            <div className="w-1 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
            <div className="w-1 h-3 bg-blue-300 dark:bg-blue-600 rounded-full"></div>
            <div className="w-1 h-7 bg-blue-600 dark:bg-blue-300 rounded-full"></div>
            <div className="w-1 h-5 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Main Hero Content */}
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Header Section */}
          <div className="space-y-12">
            <div className="space-y-8">
              
              <div className="flex justify-center mb-8">
                <h1 
                  className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight cursor-pointer hover:scale-105 transition-all duration-500"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  Kartik Bhalerao
                </h1>
              </div>
              
              <div className="flex items-center justify-center">
                <div className={`relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-6 rounded-3xl text-2xl font-bold shadow-lg transition-all duration-500 ${isHovering ? 'scale-105 shadow-xl' : ''} border border-white/20`}>
                  <span className="relative z-10">Product Manager</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 dark:text-slate-300 max-w-6xl mx-auto leading-relaxed font-light">
                <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-slate-100 dark:via-white dark:to-slate-100 bg-clip-text text-transparent font-semibold">Building Products That</span> 
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 cursor-pointer transition-all duration-300"> Customers Truly love</span>
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
                  href="https://medium.com/@kartikbhalerao948" 
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
              className="group relative bg-white/95 dark:bg-slate-800/95 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-12 py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 hover:scale-105 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">About Me</span>
            </button>
            
            <button 
              onClick={scrollToCaseStudies}
              className="group relative bg-white/95 dark:bg-slate-800/95 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-12 py-6 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-2 hover:scale-105 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">View My Work</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
