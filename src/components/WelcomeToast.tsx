
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
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Welcome Card */}
      <div className={`relative pointer-events-auto overflow-hidden rounded-3xl max-w-md w-full transform transition-all duration-500 ${
        isAnimating 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      }`}>
        
        {/* Animated gradient border */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[spin_4s_linear_infinite] blur-sm" style={{ padding: '2px' }} />
        
        {/* Inner card */}
        <div className="relative bg-white dark:bg-slate-900 m-[2px] rounded-[22px] p-8">
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-tl-[22px]" />
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-br-[22px]" />
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors z-10"
          >
            <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </button>

          {/* Content */}
          <div className="relative z-10 text-center space-y-6">
            {/* Animated wave with glow */}
            <div className="relative inline-block">
              <span className="text-6xl inline-block animate-[wave_2s_ease-in-out_infinite]" style={{ transformOrigin: '70% 70%' }}>👋</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 rounded-full blur-2xl scale-150 animate-pulse" />
            </div>
            
            {/* Title with gradient */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Welcome!
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                Thanks for stopping by ✨
              </p>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore my portfolio and discover my journey as a Product Manager.
            </p>

            {/* Animated icons row */}
            <div className="flex justify-center items-center gap-4 pt-2">
              <span className="text-2xl animate-bounce [animation-delay:0s]">🚀</span>
              <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-purple-400" />
              <span className="text-2xl animate-bounce [animation-delay:0.2s]">💡</span>
              <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-pink-400" />
              <span className="text-2xl animate-bounce [animation-delay:0.4s]">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
