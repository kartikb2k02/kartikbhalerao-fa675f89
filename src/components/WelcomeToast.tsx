
import { useEffect, useState } from 'react';
import { X, ArrowRight, Briefcase, TrendingUp, Users } from 'lucide-react';

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
        className={`absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Card */}
      <div
        className={`relative pointer-events-auto w-full max-w-[380px] bg-white dark:bg-[#161616] border border-black/8 dark:border-white/10 rounded-3xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-all duration-500 ease-out ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'
        }`}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-black/5 dark:bg-white/8 flex items-center justify-center text-black/35 dark:text-white/35 hover:bg-black/10 dark:hover:bg-white/15 hover:text-black/60 dark:hover:text-white/60 transition-all duration-200 z-10"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Content */}
        <div className="relative px-7 pt-9 pb-7 flex flex-col items-center text-center gap-5">

          {/* Avatar with status badge */}
          <div className="relative">
            <div className="w-[72px] h-[72px] rounded-full p-[2.5px] bg-black/10 dark:bg-white/15 shadow-sm">
              <img
                src="/lovable-uploads/profile-header.webp"
                alt="Kartik Bhalerao"
                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-[#161616]"
              />
            </div>
            {/* Wave badge */}
            <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white dark:bg-[#1f1f1f] border-2 border-white dark:border-[#161616] shadow-md flex items-center justify-center text-[15px]">
              👋
            </span>
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-[22px] font-black tracking-tight text-black dark:text-white leading-tight">
              Hey, welcome!
            </h2>
            <p className="text-[13.5px] text-black/45 dark:text-white/45 leading-relaxed max-w-[270px] mx-auto">
              I'm{' '}
              <span className="font-bold text-black dark:text-white">
                Kartik
              </span>
              {' '}— a Product Manager who turns user problems into products people actually use.
            </p>
          </div>

          {/* Stats row — icon-led for extra polish */}
          <div className="flex w-full divide-x divide-black/8 dark:divide-white/10 border border-black/8 dark:border-white/10 rounded-2xl overflow-hidden">
            {[
              { icon: Briefcase, value: '2.5+', label: 'Years PM' },
              { icon: TrendingUp, value: '3×', label: 'Avg ROI' },
              { icon: Users, value: '20+', label: 'Interviews' },
            ].map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 py-3.5 bg-black/[0.02] dark:bg-white/[0.03]">
                <Icon className="w-3.5 h-3.5 text-black/30 dark:text-white/30" strokeWidth={2} />
                <span className="text-[16px] font-black text-black dark:text-white leading-none">{value}</span>
                <span className="text-[10.5px] text-black/35 dark:text-white/35 font-medium">{label}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['AI Products', 'Solo-built Tools', 'Growth Strategy'].map((label) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-full border border-black/12 dark:border-white/15 text-black/55 dark:text-white/55 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-black/30 dark:bg-white/40" />
                {label}
              </span>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleClose}
            className="group w-full flex items-center justify-center gap-2 py-3 rounded-xl text-[13.5px] font-semibold bg-black dark:bg-white text-white dark:text-black hover:opacity-80 active:scale-[0.99] transition-all duration-200"
          >
            Let's go
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-[3px] bg-black/6 dark:bg-white/6">
          <div
            className="h-full bg-black/25 dark:bg-white/25 transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
