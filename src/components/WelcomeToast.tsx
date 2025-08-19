
import { useEffect, useState } from 'react';
import { X, Sparkles, Star, Heart, Zap } from 'lucide-react';

export const WelcomeToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show welcome message after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-hide after 4 seconds
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      {/* Enhanced backdrop with animated blur */}
      <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Enhanced Welcome Card with better animations */}
      <div className={`relative pointer-events-auto bg-gradient-to-br from-white/98 via-white/95 to-slate-50/98 dark:from-slate-800/98 dark:via-slate-800/95 dark:to-slate-900/98 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/30 dark:border-slate-700/40 max-w-lg w-full transform transition-all duration-500 ${
        isAnimating 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      }`}>
        
        {/* Animated decorative elements */}
        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full blur-sm opacity-70 animate-pulse [animation-delay:1.5s]"></div>
        <div className="absolute top-1/4 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-sm opacity-60 animate-pulse [animation-delay:3s]"></div>
        
        {/* Enhanced Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/20 hover:bg-white/30 dark:bg-slate-700/30 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm group border border-white/20 dark:border-slate-600/30"
        >
          <X className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-200" />
        </button>

        {/* Content */}
        <div className="text-center space-y-8">
          {/* Enhanced icon section with multiple animated elements */}
          <div className="relative flex flex-col items-center">
            <div className="text-7xl mb-4 relative">
              <span className="relative z-10 inline-block animate-bounce" style={{animationDuration: '2s'}}>👋</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl scale-150 animate-pulse opacity-60"></div>
            </div>
            
            {/* Floating animated icons */}
            <div className="flex items-center justify-center gap-4 text-yellow-400 mb-2">
              <Sparkles className="w-5 h-5 animate-pulse [animation-delay:0.5s]" />
              <Heart className="w-4 h-4 animate-bounce [animation-delay:1s] text-pink-400" />
              <Zap className="w-5 h-5 animate-pulse [animation-delay:1.5s] text-blue-400" />
              <Star className="w-4 h-4 animate-bounce [animation-delay:2s]" />
            </div>
          </div>
          
          {/* Enhanced Title with better gradient */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              Welcome to My World!
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto animate-pulse"></div>
          </div>
          
          {/* Enhanced Description with better typography */}
          <div className="space-y-4">
            <p className="text-xl text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
              I'm thrilled to share my journey with you! ✨
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md mx-auto">
              Dive into my portfolio, explore my skills, and let's connect to create something extraordinary together.
            </p>
          </div>

          {/* Enhanced call-to-action */}
          <div className="flex justify-center items-center space-x-2 pt-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="relative">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md animate-pulse opacity-60"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
          </div>

          {/* Fun emoji trail */}
          <div className="flex justify-center items-center gap-2 text-2xl opacity-80">
            <span className="animate-bounce [animation-delay:0.1s]">🚀</span>
            <span className="animate-bounce [animation-delay:0.3s]">💫</span>
            <span className="animate-bounce [animation-delay:0.5s]">🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
};
