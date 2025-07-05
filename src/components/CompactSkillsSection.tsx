import { Target } from "lucide-react";

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
        {/* Header Badge */}
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-6 py-3 rounded-full text-blue-600 dark:text-blue-400 font-bold text-lg mb-8 border border-blue-200/50 dark:border-blue-700/50 shadow-lg backdrop-blur-sm">
          <Target className="w-5 h-5" />
          <span>Skills & Expertise</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
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