
import { useState, useEffect } from "react";
import { Linkedin, Award } from "lucide-react";

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
          
          {/* Name Section with Enhanced Hover Effects */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="group relative cursor-pointer bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent transition-all duration-700 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 hover:scale-105">
                Kartik Bhalerao
                
                {/* Enhanced glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-emerald-400/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-80 transition-all duration-1000 scale-125"></div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute top-0 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce [animation-delay:0.5s]"></div>
                  <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-bounce [animation-delay:1s]"></div>
                  <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce [animation-delay:1.5s]"></div>
                </div>
              </span>
            </h1>
            
            {/* Enhanced Product Manager Badge */}
            <div className="flex justify-center mt-6">
              <div className="group relative px-10 py-5 rounded-3xl transition-all duration-700 hover:scale-110 hover:rotate-1 cursor-pointer select-none">
                {/* Multiple glass layers for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/25 via-sky-500/25 to-indigo-500/25 dark:from-blue-400/30 dark:via-sky-400/30 dark:to-indigo-400/30 rounded-3xl backdrop-blur-2xl border-2 border-white/50 dark:border-white/40 shadow-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/25 to-white/10 dark:from-white/40 dark:via-white/20 dark:to-white/5 rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 dark:from-transparent dark:via-white/5 dark:to-white/10 rounded-3xl"></div>

                {/* Enhanced animated border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-500 p-[2px] group-hover:animate-pulse group-hover:shadow-2xl">
                  <div className="h-full w-full rounded-3xl bg-gradient-to-r from-blue-500/15 via-sky-500/15 to-indigo-500/15 dark:from-blue-400/20 dark:via-sky-400/20 dark:to-indigo-400/20 backdrop-blur-2xl"></div>
                </div>

                {/* Multiple glow layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-1000"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-300/10 to-indigo-300/10 blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-1200"></div>

                {/* Enhanced floating particles */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div className="absolute top-3 left-6 w-1.5 h-1.5 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse opacity-70 group-hover:animate-bounce"></div>
                  <div className="absolute top-6 right-8 w-1 h-1 bg-sky-400 dark:bg-sky-300 rounded-full animate-pulse opacity-50 [animation-delay:1s] group-hover:animate-bounce"></div>
                  <div className="absolute bottom-4 left-10 w-1.5 h-1.5 bg-indigo-400 dark:bg-indigo-300 rounded-full animate-pulse opacity-60 [animation-delay:2s] group-hover:animate-bounce"></div>
                  <div className="absolute bottom-6 right-6 w-1 h-1 bg-blue-300 dark:bg-blue-400 rounded-full animate-pulse opacity-40 [animation-delay:0.5s] group-hover:animate-bounce"></div>
                  <div className="absolute top-8 left-1/2 w-1 h-1 bg-sky-300 dark:bg-sky-400 rounded-full animate-pulse opacity-50 [animation-delay:1.5s] group-hover:animate-bounce"></div>
                  <div className="absolute bottom-8 right-1/2 w-1 h-1 bg-indigo-300 dark:bg-indigo-400 rounded-full animate-pulse opacity-60 [animation-delay:2.5s] group-hover:animate-bounce"></div>
                </div>

                {/* Text with enhanced gradient */}
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent tracking-wide group-hover:from-blue-900 group-hover:via-indigo-900 group-hover:to-purple-900 dark:group-hover:from-blue-100 dark:group-hover:via-indigo-100 dark:group-hover:to-purple-100 transition-all duration-700">
                    Product Manager
                  </span>
                </div>

                {/* Enhanced inner glow */}
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-r from-blue-500/8 via-sky-500/8 to-indigo-500/8 dark:from-blue-400/15 dark:via-sky-400/15 dark:to-indigo-400/15 group-hover:from-blue-500/15 group-hover:via-sky-500/15 group-hover:to-indigo-500/15 transition-all duration-700"></div>
              </div>
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
            <button 
              onClick={scrollToAbout}
              className="group relative px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background with gradient and glass effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent rounded-2xl"></div>
              
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-blue-200/50 dark:border-blue-700/50 group-hover:border-blue-300/70 transition-colors duration-300"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text */}
              <div className="relative z-10 text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                About Me
              </div>
            </button>

            <button 
              onClick={scrollToCaseStudies}
              className="group relative px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Background with gradient and glass effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent rounded-2xl"></div>
              
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-emerald-200/50 dark:border-emerald-700/50 group-hover:border-emerald-300/70 transition-colors duration-300"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text */}
              <div className="relative z-10 text-emerald-700 dark:text-emerald-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-200 transition-colors duration-300">
                View My Work
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
