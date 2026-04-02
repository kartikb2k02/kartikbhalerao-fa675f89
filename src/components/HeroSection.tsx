
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const roles = ['Builder'];

export const HeroSection = () => {
  const navigate = useNavigate();
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex(i => (i + 1) % roles.length);
        setVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center text-center px-6 lg:px-12 py-8 sm:py-10">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center gap-5 sm:gap-7 lg:gap-10 mt-20 sm:mt-24">

        {/* Headline */}
        <h1
          className="font-black leading-[1.15] tracking-tight text-center w-full"
          style={{ fontSize: 'clamp(22px, 3.5vw, 50px)' }}
        >
          <span className="block text-black dark:text-white whitespace-nowrap">Building Products That</span>
          <span className="block bg-gradient-to-r from-black to-gray-400 dark:from-white dark:to-gray-500 bg-clip-text text-transparent">
            Solve Real Problems
          </span>
        </h1>

        {/* Tagline */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {['AI Products', 'Solo-built Tools', 'Growth Strategy'].map((tag) => (
              <span key={tag} className="px-3 py-1 sm:px-4 sm:py-1.5 text-[12px] sm:text-[13px] font-medium rounded-md border border-black/25 dark:border-white/25 text-black/60 dark:text-white/60 tracking-wide hover:border-black/60 dark:hover:border-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 hover:scale-105 transition-all duration-200 cursor-default">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-[14px] sm:text-[15px] font-semibold text-black/70 dark:text-white/70 tracking-wide">
            PM with a builder mentality.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/about')}
            className="px-6 py-2.5 sm:px-7 sm:py-3 text-[13px] sm:text-[14px] font-semibold rounded-xl bg-black dark:bg-white text-white dark:text-black shadow-sm hover:shadow-md hover:opacity-80 transition-all duration-200"
          >
            About Me
          </button>
          <button
            onClick={() => navigate('/builds')}
            className="px-6 py-2.5 sm:px-7 sm:py-3 text-[13px] sm:text-[14px] font-semibold rounded-xl border border-black/70 dark:border-white/70 text-black/70 dark:text-white/70 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent transition-all duration-200"
          >
            View My Builds
          </button>
        </div>

        {/* Highlight Cards */}
        <div className="flex items-start justify-center gap-0 w-full max-w-[620px] divide-x divide-black/10 dark:divide-white/10">
          {[
            { title: 'AI Products', desc: 'Built & shipped end-to-end' },
            { title: 'Enterprise', desc: 'Scaled B2B solutions' },
            { title: 'Growth Strategy', desc: '0→1 strategy & guidance' },
          ].map((card) => (
            <div key={card.title} className="group flex flex-col items-center gap-1.5 px-4 sm:px-6 lg:px-8 text-center cursor-default">
              <span className="w-4 h-[2px] rounded-full bg-black/20 dark:bg-white/20 group-hover:w-7 group-hover:bg-black/60 dark:group-hover:bg-white/60 transition-all duration-300" />
              <span className="text-[13px] sm:text-[15px] lg:text-[18px] font-extrabold tracking-tight text-black dark:text-white group-hover:opacity-80 transition-opacity duration-200">{card.title}</span>
              <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-medium text-black/38 dark:text-white/38 leading-snug group-hover:text-black/60 dark:group-hover:text-white/60 transition-colors duration-200">{card.desc}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
