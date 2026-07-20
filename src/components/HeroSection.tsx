
import { useNavigate } from 'react-router-dom';
import { Cpu, Building2, Compass } from 'lucide-react';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full flex flex-col justify-center items-center text-center px-6 lg:px-12 py-8 sm:py-10">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center gap-5 sm:gap-7 lg:gap-10 mt-20 sm:mt-24">

        {/* Headline */}
        <h1
          className="heading-display leading-[1.05] text-center w-full"
          style={{ fontSize: 'clamp(28px, 4.6vw, 64px)' }}
        >
          <span className="block text-black/40 dark:text-white/40 whitespace-nowrap">Building Products That</span>
          <span className="block text-black dark:text-white">
            Solve Real Problems
          </span>
        </h1>

        {/* Highlight Cards */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-[640px]">
          {[
            { title: 'AI Products', desc: 'Built & shipped end-to-end', icon: Cpu },
            { title: 'Enterprise', desc: 'Scaled B2B solutions', icon: Building2 },
            { title: 'Product Discovery', desc: 'Research · Insights · Clarity', icon: Compass },
          ].map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="glass-sm group relative flex flex-col items-center gap-3 px-3 py-6 rounded-2xl overflow-hidden hover:-translate-y-1.5 cursor-default"
            >
              {/* top shimmer on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black/25 dark:via-white/25 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />

              {/* icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-white/60 dark:bg-white/10 border border-black/8 dark:border-white/10">
                <Icon size={18} strokeWidth={1.8} className="text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
              </div>

              {/* text */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-[13px] sm:text-[14px] font-bold tracking-tight text-black/90 dark:text-white/90 leading-tight">{title}</span>
                <span className="text-[10px] sm:text-[11px] font-medium text-black/40 dark:text-white/50 leading-snug group-hover:text-black/60 dark:group-hover:text-white/70 transition-colors duration-300 text-center">{desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/about')}
            className="label-mono px-6 py-2.5 sm:px-7 sm:py-3 text-[12px] sm:text-[13px] bg-black dark:bg-white text-white dark:text-black hover:opacity-80 transition-all duration-200"
          >
            About Me
          </button>
          <button
            onClick={() => navigate('/builds')}
            className="label-mono px-6 py-2.5 sm:px-7 sm:py-3 text-[12px] sm:text-[13px] border border-black/70 dark:border-white/70 text-black/70 dark:text-white/70 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent transition-all duration-200"
          >
            View My Builds
          </button>
        </div>

      </div>
    </section>
  );
};
