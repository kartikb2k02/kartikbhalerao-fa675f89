
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
        if (prev <= 0) { clearInterval(progressTimer); return 0; }
        return prev - step;
      });
    }, interval);
    const hideTimer = setTimeout(() => handleClose(), duration);
    return () => { clearInterval(progressTimer); clearTimeout(hideTimer); };
  }, [isVisible]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/25 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Card */}
      <div
        className={`relative pointer-events-auto w-full max-w-[360px] bg-white dark:bg-[#1c1c1c] rounded-3xl shadow-2xl overflow-hidden transition-all duration-400 ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-3'
        }`}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/5 dark:bg-white/8 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70 hover:bg-black/10 dark:hover:bg-white/15 transition-all duration-200 z-10"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Content */}
        <div className="px-8 pt-8 pb-7 flex flex-col items-center text-center gap-5">

          {/* Wave emoji */}
          <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white flex items-center justify-center text-2xl shadow-sm">
            👋
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-[22px] font-black tracking-tight text-black dark:text-white leading-tight">
              Hey, welcome!
            </h2>
            <p className="text-[14px] text-black/45 dark:text-white/45 leading-relaxed max-w-[260px] mx-auto">
              I'm <span className="text-black/80 dark:text-white/80 font-semibold">Kartik</span> — a Product Manager who turns user problems into products people actually use.
            </p>
          </div>

          {/* Divider with label */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-black/8 dark:bg-white/8" />
            <span className="text-[11px] font-medium tracking-widest uppercase text-black/25 dark:text-white/25">explore</span>
            <div className="flex-1 h-px bg-black/8 dark:bg-white/8" />
          </div>

          {/* Button */}
          <button
            onClick={handleClose}
            className="w-full py-3 rounded-xl text-[14px] font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-75 transition-opacity duration-200"
          >
            Let's go →
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] bg-black/6 dark:bg-white/6">
          <div
            className="h-full bg-black/20 dark:bg-white/20 transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
