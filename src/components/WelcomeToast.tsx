
import { useEffect, useState } from 'react';
import { X, Sparkles, Star } from 'lucide-react';

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
    // Auto-hide after 3 seconds
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Enhanced Welcome Card */}
      <div className="relative bg-gradient-to-br from-white/95 via-white/90 to-slate-50/95 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/30 max-w-md w-full animate-in fade-in slide-in-from-bottom-8 duration-500">
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-sm opacity-60 animate-pulse [animation-delay:1s]"></div>
        
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-slate-700/30 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        >
          <X className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Enhanced icon section */}
          <div className="relative">
            <div className="text-6xl mb-2 relative">
              <span className="relative z-10">👋</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl scale-150 animate-pulse"></div>
            </div>
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <Star className="w-4 h-4 animate-pulse" />
              <Sparkles className="w-5 h-5 animate-pulse [animation-delay:0.5s]" />
              <Star className="w-4 h-4 animate-pulse [animation-delay:1s]" />
            </div>
          </div>
          
          {/* Enhanced Title */}
          <div className="space-y-3">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Welcome!
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
          </div>
          
          {/* Enhanced Description */}
          <div className="space-y-3">
            <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">
              I'm excited to share my journey with you!
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Explore my work, skills, and let's connect to create something amazing together.
            </p>
          </div>

          {/* Enhanced decorative elements */}
          <div className="flex justify-center items-center space-x-3 pt-2">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="relative">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm animate-pulse"></div>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
