
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

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
      {/* Subtle backdrop */}
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Clean Welcome Card */}
      <div className={`relative pointer-events-auto bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-slate-700 max-w-md w-full transform transition-all duration-500 ${
        isAnimating 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      }`}>
        
        {/* Accent gradient bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
        </button>

        {/* Content */}
        <div className="text-center space-y-5">
          {/* Wave emoji */}
          <div className="text-5xl">
            <span className="inline-block animate-bounce" style={{animationDuration: '2s'}}>👋</span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome to My World!
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm thrilled to share my journey with you! Explore my portfolio and let's create something extraordinary together.
          </p>

          {/* Emoji trail */}
          <div className="flex justify-center items-center gap-3 text-xl pt-2">
            <span className="animate-bounce [animation-delay:0.1s]">🚀</span>
            <span className="animate-bounce [animation-delay:0.3s]">💫</span>
            <span className="animate-bounce [animation-delay:0.5s]">🎯</span>
          </div>
        </div>
      </div>
    </div>
  );
};
