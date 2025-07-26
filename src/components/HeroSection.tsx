
import { useState, useEffect } from "react";
import { Linkedin, ArrowRight, Sparkles, Award } from "lucide-react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
      
      {/* Moving background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse opacity-80 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse [animation-delay:3s] opacity-70 animate-float-slow"></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce animate-float"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-purple-400/40 rounded-full animate-bounce [animation-delay:1s] animate-float-slower"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-emerald-400/40 rounded-full animate-bounce [animation-delay:2s] animate-float"></div>
        
        {/* Moving geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl rotate-12 animate-pulse animate-float"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full animate-pulse [animation-delay:2s] animate-float-slow"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-pink-500/10 transform rotate-45 animate-pulse [animation-delay:4s] animate-float-slower"></div>
      </div>
      
      {/* Modern floating cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Clean PM badge */}
        <div 
          className={`absolute top-16 left-16 w-24 h-24 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl flex items-center justify-center rotate-6 transition-all duration-700 hover:rotate-12 hover:scale-110 animate-float ${activeCard === 1 ? 'scale-110 rotate-12' : ''}`}
          onMouseEnter={() => setActiveCard(1)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PM</div>
        </div>
        
        {/* Analytics chart */}
        <div 
          className={`absolute bottom-32 left-20 w-28 h-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-110 animate-float-slow ${activeCard === 2 ? 'scale-110 rotate-0' : ''}`}
          onMouseEnter={() => setActiveCard(2)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="w-full h-full flex items-center justify-center space-x-1 px-3">
            <div className="w-1.5 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-6 bg-purple-400 rounded-full animate-pulse [animation-delay:0.5s]"></div>
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse [animation-delay:1s]"></div>
            <div className="w-1.5 h-7 bg-orange-400 rounded-full animate-pulse [animation-delay:1.5s]"></div>
            <div className="w-1.5 h-5 bg-pink-400 rounded-full animate-pulse [animation-delay:2s]"></div>
          </div>
        </div>

        {/* Product icon */}
        <div 
          className={`absolute top-48 right-16 w-20 h-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl rotate-12 transition-all duration-700 hover:rotate-6 hover:scale-110 animate-float-slower ${activeCard === 3 ? 'scale-110 rotate-6' : ''}`}
          onMouseEnter={() => setActiveCard(3)}
          onMouseLeave={() => setActiveCard(null)}
        >
          <div className="w-full h-full flex items-center justify-center">
            <Award className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Main Content */}
        <div className={`space-y-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Name Section - Single Line */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Kartik Bhalerao
              </span>
            </h1>
            
            {/* Product Manager Badge with Glassmorphism */}
            
  <div className="flex justify-center mt-6">
  <div 
    onClick={() => console.log("Product Manager clicked")}
    className="group relative px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:rotate-1 cursor-pointer select-none"
  >
    {/* Glass layer and border */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-indigo-500/20 dark:from-blue-400/25 dark:via-sky-400/25 dark:to-indigo-400/25 rounded-2xl backdrop-blur-xl border border-white/40 dark:border-white/30 shadow-2xl"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-white/30 dark:via-white/10 dark:to-transparent rounded-2xl"></div>

    {/* Glow border */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 p-[1px] group-hover:animate-pulse">
      <div className="h-full w-full rounded-2xl bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-blue-400/15 dark:via-sky-400/15 dark:to-indigo-400/15 backdrop-blur-xl"></div>
    </div>

    {/* Animated floating particles */}
    <div className="absolute inset-0 rounded-2xl overflow-hidden">
      <div className="absolute top-2 left-4 w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-4 right-6 w-1 h-1 bg-sky-400 dark:bg-sky-300 rounded-full animate-pulse opacity-50 [animation-delay:1s]"></div>
      <div className="absolute bottom-3 left-8 w-1 h-1 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-pulse opacity-60 [animation-delay:2s]"></div>
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-blue-300 dark:bg-blue-400 rounded-full animate-pulse opacity-40 [animation-delay:0.5s]"></div>
    </div>

    {/* Text content */}
    <div className="relative z-10 flex items-center justify-center">
      <span className="text-lg font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent tracking-wide">
        Product Manager
      </span>
    </div>

    {/* Subtle inner glow */}
    <div className="absolute inset-2 rounded-xl bg-gradient-to-r from-blue-500/5 via-sky-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:via-sky-400/10 dark:to-indigo-400/10"></div>
  </div>
</div>


          
          {/* Tagline */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-gray-800 dark:text-gray-200 font-medium">Building Products That </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
                Customers Truly Love
              </span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6">
              <a 
                href="https://linkedin.com/in/kartik-bhalerao" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:bg-blue-50/80 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://medium.com/@kartikbhalerao948" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:bg-gray-50/80 dark:hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 hover:shadow-xl"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white dark:text-gray-900 text-xs font-bold">M</span>
                </div>
              </a>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
  {/* About Me button */}
  <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
  <button 
    onClick={scrollToAbout}
    className="group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-400"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative flex items-center justify-center">
      <span>About Me</span>
    </div>
  </button>

  <button 
    onClick={scrollToCaseStudies}
    className="group relative overflow-hidden bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-300 dark:border-blue-600 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-blue-400"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative flex items-center justify-center">
      <span>View My Work</span>
    </div>
  </button>
</div>


        </div>

      </div>
    </section>
  );
};
