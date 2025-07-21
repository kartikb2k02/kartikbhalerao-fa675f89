
import { useEffect, useState } from 'react';
import { X, Sparkles, Heart } from 'lucide-react';

export const WelcomeToast = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show welcome message after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-hide after 8 seconds (increased from 5)
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop with animated gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30 backdrop-blur-md animate-in fade-in duration-500"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Floating particles in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/60 rounded-full animate-pulse [animation-delay:0.5s]" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-indigo-400/60 rounded-full animate-pulse [animation-delay:1s]" />
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-yellow-400/60 rounded-full animate-pulse [animation-delay:2.5s]" />
      </div>
      
      {/* Enhanced Welcome Card */}
      <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-blue-50/90 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-purple-900/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/60 dark:border-slate-600/40 max-w-lg w-full animate-in fade-in slide-in-from-bottom-8 duration-700 transform-gpu">
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl animate-pulse" />
        
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100/80 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 group"
        >
          <X className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
        </button>

        {/* Content */}
        <div className="relative text-center space-y-6">
          {/* Animated Icon Section */}
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" />
            </div>
            
            {/* Main emoji with enhanced animation */}
            <div className="relative text-5xl mb-2 animate-[wiggle_2s_ease-in-out_infinite] hover:scale-110 transition-transform cursor-pointer">
              👋
            </div>
            
            {/* Floating sparkles around the emoji */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse absolute -top-2 -left-8 [animation-delay:0s]" />
              <Sparkles className="w-3 h-3 text-blue-400 animate-pulse absolute -top-1 right-6 [animation-delay:0.7s]" />
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse absolute top-8 -right-4 [animation-delay:1.4s]" />
            </div>
          </div>
          
          {/* Enhanced Title with gradient text */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-in slide-in-from-left duration-500 [animation-delay:0.2s]">
              Hello There! 
            </h2>
            <div className="flex items-center justify-center gap-2 animate-in slide-in-from-right duration-500 [animation-delay:0.4s]">
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="text-xl font-semibold text-slate-700 dark:text-slate-300">
                Welcome to my space
              </span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse [animation-delay:0.5s]" />
            </div>
          </div>
          
          {/* Enhanced Description */}
          <div className="space-y-3 animate-in fade-in duration-500 [animation-delay:0.6s]">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              I'm thrilled you're here! 🚀
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore my journey, discover my work, and let's connect!
            </p>
          </div>

          {/* Enhanced Decorative Elements */}
          <div className="flex justify-center items-center mt-8 space-x-3 animate-in slide-in-from-bottom duration-500 [animation-delay:0.8s]">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse [animation-delay:0.3s]"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse [animation-delay:0.6s]"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full animate-pulse [animation-delay:0.9s]"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-pulse [animation-delay:1.2s]"></div>
          </div>

          {/* New: Interactive hover area */}
          <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/30 hover:shadow-lg transition-all duration-300 cursor-pointer group animate-in scale-in duration-500 [animation-delay:1s]"
               onClick={() => setIsVisible(false)}>
            <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
              ✨ Click anywhere to continue your journey ✨
            </p>
          </div>
        </div>

        {/* Additional floating elements inside the card */}
        <div className="absolute top-6 left-6 w-1 h-1 bg-blue-400/60 rounded-full animate-ping" />
        <div className="absolute bottom-6 right-8 w-2 h-2 bg-purple-400/60 rounded-full animate-ping [animation-delay:1s]" />
      </div>
    </div>
  );
};
