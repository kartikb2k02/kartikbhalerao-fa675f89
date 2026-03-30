
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const roles = ['Product Manager', 'Problem Solver', 'Builder', 'PM & Strategist'];

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
    <section className="min-h-[88vh] w-full flex flex-col justify-center items-center text-center px-6 lg:px-12">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center gap-10 -mt-20">

        {/* Name */}
        <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-black leading-none tracking-tight text-black dark:text-white whitespace-nowrap">
          Kartik Bhalerao
        </h1>

        {/* Rotating Role Tag */}
        <div className="inline-flex items-center gap-5">
          <span className="w-20 h-[1.5px] bg-gradient-to-r from-transparent to-black/30 dark:to-white/30" />
          <span
            className="text-[15px] font-semibold tracking-[0.3em] uppercase text-black/50 dark:text-white/50 transition-all duration-300 min-w-[220px] text-center"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(6px)' }}
          >
            {roles[roleIndex]}
          </span>
          <span className="w-20 h-[1.5px] bg-gradient-to-l from-transparent to-black/30 dark:to-white/30" />
        </div>

        {/* Tagline */}
        <p className="text-[17px] text-black/42 dark:text-white/42 max-w-[460px] leading-[1.9] text-center tracking-[-0.01em]">
          From discovery to launch — turning user problems into products that are{' '}
          <span className="text-black/85 dark:text-white/85 font-semibold italic">simple</span>,{' '}
          <span className="text-black/85 dark:text-white/85 font-semibold italic">scalable</span>, and{' '}
          <span className="text-black/85 dark:text-white/85 font-semibold italic">actually used</span>.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            onClick={() => navigate('/about')}
            className="px-7 py-3 text-[14px] font-semibold rounded-xl bg-black dark:bg-white text-white dark:text-black shadow-sm hover:shadow-md hover:opacity-80 transition-all duration-200"
          >
            About Me
          </button>
          <button
            onClick={() => navigate('/builds')}
            className="px-7 py-3 text-[14px] font-semibold rounded-xl border border-black/20 dark:border-white/20 text-black/70 dark:text-white/70 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-transparent transition-all duration-200"
          >
            View My Builds
          </button>
        </div>


      </div>
    </section>
  );
};
