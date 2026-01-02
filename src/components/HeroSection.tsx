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
  return <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 lg:px-8 relative overflow-hidden">
      
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
        <div className={`absolute top-16 left-16 w-24 h-24 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl flex items-center justify-center rotate-6 transition-all duration-700 hover:rotate-12 hover:scale-110 animate-float ${activeCard === 1 ? 'scale-110 rotate-12' : ''}`} onMouseEnter={() => setActiveCard(1)} onMouseLeave={() => setActiveCard(null)}>
          <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PM</div>
        </div>
        
        {/* Analytics chart */}
        <div className={`absolute bottom-32 left-20 w-28 h-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-110 animate-float-slow ${activeCard === 2 ? 'scale-110 rotate-0' : ''}`} onMouseEnter={() => setActiveCard(2)} onMouseLeave={() => setActiveCard(null)}>
          <div className="w-full h-full flex items-center justify-center space-x-1 px-3">
            <div className="w-1.5 h-4 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-1.5 h-6 bg-purple-400 rounded-full animate-pulse [animation-delay:0.5s]"></div>
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse [animation-delay:1s]"></div>
            <div className="w-1.5 h-7 bg-orange-400 rounded-full animate-pulse [animation-delay:1.5s]"></div>
            <div className="w-1.5 h-5 bg-pink-400 rounded-full animate-pulse [animation-delay:2s]"></div>
          </div>
        </div>

        {/* Product icon */}
        <div className={`absolute top-48 right-16 w-20 h-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl rotate-12 transition-all duration-700 hover:rotate-6 hover:scale-110 animate-float-slower ${activeCard === 3 ? 'scale-110 rotate-6' : ''}`} onMouseEnter={() => setActiveCard(3)} onMouseLeave={() => setActiveCard(null)}>
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
            <div className="flex justify-center items-center gap-4">
              {/* LinkedIn */}
              <a href="https://linkedin.com/in/kartik-bhalerao" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/20">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </a>
              
              {/* Medium */}
              <a href="https://medium.com/@kartikbhalerao948" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-300 dark:to-white rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative p-3 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-100 dark:to-white rounded-xl shadow-lg shadow-gray-500/20">
                  <span className="w-5 h-5 flex items-center justify-center text-white dark:text-gray-900 text-sm font-bold">M</span>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/kartikbh6614" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="relative p-3 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-400 rounded-xl shadow-lg shadow-gray-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-white dark:text-gray-900">
                    <path fillRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.23-3.23-.12-.3-.53-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.3-1.23 3.3-1.23.65 1.64.24 2.86.12 3.16.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button onClick={scrollToAbout} className="group relative px-8 py-3 rounded-xl font-medium text-base transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-visible cursor-pointer">
              {/* Custom tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none scale-90 group-hover:scale-100">
                ✨ Discover my journey
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-600 rotate-45"></div>
              </div>
              
              {/* Background with gradient and glass effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent rounded-xl"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl border border-blue-200/50 dark:border-blue-700/50 group-hover:border-blue-400/80 transition-colors duration-300"></div>
              
              {/* Sweeping shine effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
              </div>
              
              {/* Pulsing outer glow */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400/0 via-blue-400/20 to-purple-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-pulse"></div>
              
              {/* Text */}
              <div className="relative z-10 text-blue-700 dark:text-blue-300 group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">About Me</div>
            </button>

            <button onClick={scrollToCaseStudies} className="group relative px-8 py-3 rounded-xl font-medium text-base transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-visible cursor-pointer">
              {/* Custom tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none scale-90 group-hover:scale-100">
                🚀 See my projects
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-teal-600 rotate-45"></div>
              </div>
              
              {/* Background with gradient and glass effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent rounded-xl"></div>
              
              {/* Border */}
              <div className="absolute inset-0 rounded-xl border border-emerald-200/50 dark:border-emerald-700/50 group-hover:border-emerald-300/70 transition-colors duration-300"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Text */}
              <div className="relative z-10 text-emerald-700 dark:text-emerald-300 group-hover:text-emerald-800 dark:group-hover:text-emerald-200 transition-colors duration-300">Explore My Builds</div>
            </button>
          </div>
        </div>
      </div>
    </section>;
};