
export const CompactSkillsSection = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Certification Style Badge */}
        <div className="flex justify-center mb-8">
          <div className="relative px-12 py-4 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 border-2 border-slate-700 dark:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-slate-800/30 overflow-hidden" style={{clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'}}>
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-900/80 to-slate-800/50 dark:from-slate-700/50 dark:via-slate-800/80 dark:to-slate-700/50"></div>
            
            {/* Border styling */}
            <div className="absolute inset-0 border-2 border-slate-600 dark:border-slate-500 opacity-50" style={{clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'}}></div>
            
            <span className="relative z-10 text-xl font-bold text-white tracking-wide">
              Skills & Expertise
            </span>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Product Management
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
            Excellence
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          Comprehensive expertise across the full product lifecycle with unwavering focus on 
          <span className="text-blue-600 dark:text-blue-400 font-semibold"> user-centric solutions </span>
          and measurable 
          <span className="text-purple-600 dark:text-purple-400 font-semibold"> business impact</span>
        </p>
      </div>
    </div>
  );
};
