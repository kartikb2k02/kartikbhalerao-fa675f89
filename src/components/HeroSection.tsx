
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
      
      {/* Enhanced Clean Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* PM card - enhanced with better shadows and animations */}
        <div className="absolute top-16 left-16 w-28 h-28 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-3xl shadow-2xl flex items-center justify-center rotate-6 animate-float-slow hover:rotate-12 hover:scale-110 transition-all duration-700">
          <div className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">PM</div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-sm opacity-60"></div>
        </div>
        
        {/* Grid pattern card - enhanced design */}
        <div className="absolute bottom-32 left-20 w-24 h-24 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-3xl shadow-2xl -rotate-12 animate-float-slower hover:-rotate-6 hover:scale-110 transition-all duration-700">
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-indigo-400 dark:from-blue-500 dark:to-indigo-500 rounded-sm shadow-sm"></div>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-sm shadow-sm"></div>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-indigo-400 dark:from-blue-500 dark:to-indigo-500 rounded-sm shadow-sm"></div>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-sm shadow-sm"></div>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-blue-400 to-indigo-400 dark:from-blue-500 dark:to-indigo-500 rounded-sm shadow-sm"></div>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-sm shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Chart visualization - enhanced with better bars */}
        <div className="absolute top-48 right-16 w-32 h-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-slate-200/50 dark:border-slate-700/50 rounded-3xl shadow-2xl animate-float hover:scale-110 transition-all duration-700">
          <div className="w-full h-full flex items-center justify-center space-x-1.5 px-4">
            <div className="w-2 h-5 bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-400 dark:to-blue-300 rounded-full shadow-sm"></div>
            <div className="w-2 h-7 bg-gradient-to-t from-indigo-500 to-indigo-400 dark:from-indigo-400 dark:to-indigo-300 rounded-full shadow-sm"></div>
            <div className="w-2 h-4 bg-gradient-to-t from-purple-500 to-purple-400 dark:from-purple-400 dark:to-purple-300 rounded-full shadow-sm"></div>
            <div className="w-2 h-9 bg-gradient-to-t from-cyan-500 to-cyan-400 dark:from-cyan-400 dark:to-cyan-300 rounded-full shadow-sm"></div>
            <div className="w-2 h-6 bg-gradient-to-t from-sky-500 to-sky-400 dark:from-sky-400 dark:to-sky-300 rounded-full shadow-sm"></div>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400/60 to-emerald-400/60 rounded-full blur-sm"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Main Content with enhanced animations */}
        <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Name with enhanced styling */}
          <div className="space-y-8">
            <h1 
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight cursor-pointer hover:scale-105 transition-all duration-500 relative group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="relative inline-block">
                Kartik Bhalerao
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </span>
            </h1>
            
            {/* Enhanced Creative Glass Product Manager Badge */}
            <div className="flex justify-center">
              <div className={`group relative px-14 py-6 rounded-3xl transition-all duration-700 ${isHovering ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}`}>
                {/* Multiple enhanced glass layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-purple-500/15 dark:from-blue-400/20 dark:via-indigo-400/20 dark:to-purple-400/20 rounded-3xl backdrop-blur-2xl border border-white/40 dark:border-white/30 shadow-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-white/25 dark:via-white/10 dark:to-transparent rounded-3xl"></div>
                
                {/* Enhanced animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-[1px] group-hover:animate-pulse">
                  <div className="h-full w-full rounded-3xl bg-gradient-to-r from-blue-500/8 via-indigo-500/8 to-purple-500/8 dark:from-blue-400/12 dark:via-indigo-400/12 dark:to-purple-400/12 backdrop-blur-2xl"></div>
                </div>
                
                {/* Enhanced floating particles effect */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-3 left-6 w-1.5 h-1.5 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse opacity-70 shadow-lg"></div>
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-400 dark:bg-purple-300 rounded-full animate-pulse opacity-50 [animation-delay:1s] shadow-lg"></div>
                  <div className="absolute bottom-4 left-10 w-1.5 h-1.5 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-pulse opacity-60 [animation-delay:2s] shadow-lg"></div>
                  <div className="absolute bottom-6 right-6 w-1.5 h-1.5 bg-blue-300 dark:bg-blue-400 rounded-full animate-pulse opacity-40 [animation-delay:0.5s] shadow-lg"></div>
                </div>
                
                {/* Enhanced main text */}
                <div className="relative z-10 flex items-center space-x-4">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent tracking-wide">
                    Product Manager
                  </span>
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse [animation-delay:1s] shadow-lg"></div>
                </div>
                
                {/* Enhanced inner glow */}
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-r from-blue-500/3 via-indigo-500/3 to-purple-500/3 dark:from-blue-400/8 dark:via-indigo-400/8 dark:to-purple-400/8"></div>
              </div>
            </div>

          </div>
          
          {/* Enhanced Tagline */}
          <div className="space-y-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-slate-800 dark:text-slate-200 font-medium">Building Products That </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold relative">
                Customers Truly Love
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
              </span>
            </p>

            {/* Enhanced Social Links */}
            <div className="flex justify-center items-center gap-8">
              <a 
                href="https://linkedin.com/in/kartik-bhalerao" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl hover:bg-blue-50/70 dark:hover:bg-slate-700/70 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Linkedin className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <div className="absolute -inset-1 bg-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="https://medium.com/@kartikbhalerao948" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-2xl border border-slate-200/60 dark:border-slate-700/60 rounded-3xl hover:bg-slate-50/70 dark:hover:bg-slate-700/70 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-7 h-7 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-lg">
                  <span className="text-white dark:text-slate-900 text-sm font-bold">M</span>
                </div>
                <div className="absolute -inset-1 bg-slate-500/20 rounded-3xl blur opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button 
              onClick={scrollToAbout}
              className="group relative bg-white/60 dark:bg-slate-800/60 border-2 border-blue-200/60 dark:border-blue-700/60 text-blue-600 dark:text-blue-400 px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl hover:bg-blue-50/60 dark:hover:bg-slate-700/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">About Me</span>
              <div className="absolute -inset-1 bg-blue-500/10 blur rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToCaseStudies}
              className="group relative bg-white/60 dark:bg-slate-800/60 border-2 border-blue-200/60 dark:border-blue-700/60 text-blue-600 dark:text-blue-400 px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl hover:bg-blue-50/60 dark:hover:bg-slate-700/60 transition-all duration-300 hover:-translate-y-2 hover:scale-105 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">View My Work</span>
              <div className="absolute -inset-1 bg-blue-500/10 blur rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
