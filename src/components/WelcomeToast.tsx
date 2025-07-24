
import { useEffect, useState } from 'react';
import { X, Heart } from 'lucide-react';

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
      {/* Simple backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Classic Welcome Card */}
      <div className="relative bg-white dark:bg-slate-800 rounded-lg p-6 shadow-xl border border-slate-200 dark:border-slate-700 max-w-md w-full animate-in fade-in slide-in-from-bottom-4 duration-300">
        
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4 text-slate-400" />
        </button>

        {/* Content */}
        <div className="text-center space-y-4">
          {/* Simple emoji */}
          <div className="text-4xl">👋</div>
          
          {/* Classic Title */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Welcome!
            </h2>
            <div className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              <span className="text-lg text-slate-700 dark:text-slate-300">
                Thanks for visiting
              </span>
              <Heart className="w-4 h-4 text-red-500" />
            </div>
          </div>
          
          {/* Simple Description */}
          <div className="space-y-2">
            <p className="text-slate-600 dark:text-slate-400">
              I'm excited to share my journey with you!
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Explore my work and let's connect.
            </p>
          </div>

          {/* Simple decorative line */}
          <div className="flex justify-center items-center space-x-2">
            <div className="w-8 h-px bg-slate-300 dark:bg-slate-600"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-px bg-slate-300 dark:bg-slate-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
