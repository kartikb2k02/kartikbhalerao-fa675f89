
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
            
            {/* Enhanced Unique Product Manager Badge */}
            <div className="flex justify-center mt-6">
              <div className="group relative px-12 py-6 rounded-full transition-all duration-700 hover:scale-110 cursor-pointer select-none">
                
                {/* Animated rotating border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 animate-spin opacity-75 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
                
                {/* Multiple glass layers for depth */}
                <div className="absolute inset-1 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-blue-500/20 rounded-full backdrop-blur-3xl"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white/60 via-white/30 to-white/10 dark:from-gray-800/80 dark:via-gray-900/60 dark:to-gray-800/40 rounded-full backdrop-blur-2xl"></div>
                
                {/* Holographic effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/30 via-pink-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                
                {/* Multiple layered glows */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/40 via-pink-500/40 to-blue-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 via-pink-400/20 to-blue-400/20 blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-1000"></div>
                
                {/* Floating magical particles */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute top-4 left-8 w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute top-8 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-50 [animation-delay:0.5s]"></div>
                  <div className="absolute bottom-6 left-12 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70 [animation-delay:1s]"></div>
                  <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-violet-300 rounded-full animate-ping opacity-40 [animation-delay:1.5s]"></div>
                  <div className="absolute top-10 left-1/2 w-1 h-1 bg-pink-300 rounded-full animate-ping opacity-50 [animation-delay:2s]"></div>
                  <div className="absolute bottom-10 right-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping opacity-60 [animation-delay:2.5s]"></div>
                </div>

                {/* Sparkle effects */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute top-3 left-6 w-3 h-3 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-bounce blur-sm"></div>
                  <div className="absolute top-6 right-8 w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full animate-bounce [animation-delay:0.3s] blur-sm"></div>
                  <div className="absolute bottom-4 left-10 w-3 h-3 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full animate-bounce [animation-delay:0.6s] blur-sm"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full animate-bounce [animation-delay:0.9s] blur-sm"></div>
                </div>

                {/* Text with enhanced magical gradient */}
                <div className="relative z-10 flex items-center justify-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-violet-800 via-pink-800 to-blue-800 dark:from-violet-100 dark:via-pink-100 dark:to-blue-100 bg-clip-text text-transparent tracking-wide group-hover:from-violet-900 group-hover:via-pink-900 group-hover:to-blue-900 dark:group-hover:from-white dark:group-hover:via-pink-50 dark:group-hover:to-violet-50 transition-all duration-700">
                    Product Manager
                  </span>
                </div>

                {/* Inner magical glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-violet-500/15 via-pink-500/15 to-blue-500/15 group-hover:from-violet-500/25 group-hover:via-pink-500/25 group-hover:to-blue-500/25 transition-all duration-700"></div>
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
