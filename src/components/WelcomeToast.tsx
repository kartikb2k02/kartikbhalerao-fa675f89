
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

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
    // Auto-hide after 5 seconds
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Welcome Message */}
      <div className="relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40 dark:border-slate-700/40 max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Animated Wave Emoji */}
          <div className="text-4xl mb-4 animate-[wiggle_1s_ease-in-out_infinite]">
            👋
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Welcome to my Portfolio!
          </h2>
          
          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Thanks for visiting! Feel free to explore my work and get in touch.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
