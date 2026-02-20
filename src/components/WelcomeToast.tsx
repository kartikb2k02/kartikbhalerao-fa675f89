
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const WelcomeToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 4000;
    const interval = 30;
    const step = (interval / duration) * 100;

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(progressTimer);
          return 0;
        }
        return prev - step;
      });
    }, interval);

    const hideTimer = setTimeout(() => handleClose(), duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Subtle backdrop */}
      <div
        className={`absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Card */}
      <div
        className={`relative pointer-events-auto w-full max-w-sm bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2'
        }`}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center px-8 pt-8 pb-6 gap-4">
          {/* Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Kartik</span>
            <span className="text-xl font-bold tracking-tight animate-gradient-text">Bhalerao</span>
          </div>

          {/* Text */}
          <div className="space-y-1.5">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Hey there! 👋
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Thanks for visiting — explore my work as a Product Manager.
            </p>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleClose}
            className="mt-1 px-5 py-2 rounded-lg text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
          >
            Let's go
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-gray-100 dark:bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-[#22c55e] via-[#3b82f6] to-[#8b5cf6] transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
