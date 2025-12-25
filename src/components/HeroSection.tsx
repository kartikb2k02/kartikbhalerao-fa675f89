
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
              <div className="group relative cursor-pointer">
                {/* Main badge */}
                <div className="relative px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl transform -skew-x-12 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div className="absolute top-1 left-3 w-1 h-1 bg-white/60 rounded-full animate-bounce"></div>
                    <div className="absolute top-2 right-4 w-1 h-1 bg-white/60 rounded-full animate-bounce [animation-delay:0.5s]"></div>
                    <div className="absolute bottom-1 left-1/2 w-1 h-1 bg-white/60 rounded-full animate-bounce [animation-delay:1s]"></div>
                    <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-white/60 rounded-full animate-bounce [animation-delay:1.5s]"></div>
                  </div>
                  
                  <span className="relative z-10 text-xl font-bold text-white">
                    Product Manager
                  </span>
                </div>
                
                {/* Outer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-xl blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-700 scale-125"></div>
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

              <a 
                href="https://github.com/kartikbh6614" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl hover:bg-blue-50/80 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
               >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-900 dark:text-gray-200 group-hover:scale-110 transition-transform duration-300"
                                    >
    <path
      fillRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58
      0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73
      1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96
      0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.3-1.23
      3.3-1.23.65 1.64.24 2.86.12 3.16.77.84 1.23 1.91 1.23 3.23
      0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22
      0 1.6-.01 2.89-.01 3.28 0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
      clipRule="evenodd"
    />
  </svg>
</a>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button 
              onClick={scrollToAbout}
              className="group relative px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl transition-all duration-500 group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-2xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/50 via-indigo-600/50 to-purple-600/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Inner highlight */}
              <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl"></div>
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute top-2 left-4 w-1 h-1 bg-white/80 rounded-full animate-bounce"></div>
                <div className="absolute top-3 right-6 w-1 h-1 bg-white/80 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                <div className="absolute bottom-3 left-8 w-1 h-1 bg-white/80 rounded-full animate-bounce [animation-delay:0.6s]"></div>
              </div>
              
              {/* Text with icon */}
              <div className="relative z-10 flex items-center gap-2 text-white font-semibold">
                <span>About Me</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>

            <button 
              onClick={scrollToCaseStudies}
              className="group relative px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl transition-all duration-500 group-hover:from-emerald-500 group-hover:via-teal-500 group-hover:to-cyan-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-2xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/50 via-teal-600/50 to-cyan-600/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Inner highlight */}
              <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-2xl"></div>
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute top-2 left-4 w-1 h-1 bg-white/80 rounded-full animate-bounce"></div>
                <div className="absolute top-3 right-6 w-1 h-1 bg-white/80 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                <div className="absolute bottom-3 left-8 w-1 h-1 bg-white/80 rounded-full animate-bounce [animation-delay:0.6s]"></div>
              </div>
              
              {/* Text with icon */}
              <div className="relative z-10 flex items-center gap-2 text-white font-semibold">
                <span>View My Work</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
