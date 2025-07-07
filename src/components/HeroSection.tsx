
import { useState, useEffect } from "react";
import { Linkedin } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    window.location.href = '/about';
  };

  const scrollToCaseStudies = () => {
    window.location.href = '/case-studies';
  };

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 lg:px-8 relative overflow-hidden">
      
      {/* Clean Floating Elements matching the image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* PM card - top left */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/40 dark:border-slate-700/40 rounded-3xl shadow-lg flex items-center justify-center rotate-6 animate-float-slow">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400">PM</div>
        </div>
        
        {/* Grid pattern card - bottom left */}
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/40 dark:border-slate-700/40 rounded-2xl shadow-lg -rotate-12 animate-float-slower">
          <div className="w-full h-full flex items-center justify-center p-3">
            <div className="grid grid-cols-3 gap-1">
              <div className="w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-sm"></div>
              <div className="w-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-sm"></div>
              <div className="w-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-sm"></div>
              <div className="w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-sm"></div>
              <div className="w-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Chart visualization - top right */}
        <div className="absolute top-48 right-16 w-28 h-16 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border border-slate-200/40 dark:border-slate-700/40 rounded-2xl shadow-lg animate-float">
          <div className="w-full h-full flex items-center justify-center space-x-1 px-3">
            <div className="w-1 h-4 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
            <div className="w-1 h-6 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
            <div className="w-1 h-3 bg-blue-300 dark:bg-blue-600 rounded-full"></div>
            <div className="w-1 h-8 bg-blue-600 dark:bg-blue-300 rounded-full"></div>
            <div className="w-1 h-5 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-8 relative z-10">
        
        {/* Main Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Name */}
          <div className="space-y-6">
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight cursor-pointer hover:scale-105 transition-all duration-500"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Kartik Bhalerao
            </h1>
            
            {/* Product Manager Badge */}
            <div className="flex justify-center">
              <div className={bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg transition-all duration-500 ${isHovering ? 'scale-105 shadow-xl' : ''}}>
                Product Manager
              </div>
            </div>

          </div>
          
          {/* Tagline */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-slate-800 dark:text-slate-200 font-medium">Building Products That </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">Customers Truly love</span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6">
              <a 
                href="https://linkedin.com/in/kartik-bhalerao" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 rounded-2xl hover:bg-blue-50/90 dark:hover:bg-slate-700/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://medium.com/@kartikbhalerao948" 
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 rounded-2xl hover:bg-slate-50/90 dark:hover:bg-slate-700/90 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white dark:text-slate-900 text-xs font-bold">M</span>
                </div>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={scrollToAbout}
              className="group bg-white/90 dark:bg-slate-800/90 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
            >
              About Me
            </button>
            
            <button 
              onClick={scrollToCaseStudies}
              className="group bg-white/90 dark:bg-slate-800/90 border-2 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
            >
              View My Work
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
