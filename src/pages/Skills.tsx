
import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";
import { ScrollArea } from "@/components/ui/scroll-area";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50/30 dark:from-emerald-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Interactive Header */}
      <Header />
      
      {/* Enhanced background with skills-focused elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06),transparent_50%)]"></div>
        
        {/* Floating skill-related icons */}
        <div className="absolute top-24 left-16 w-20 h-20 bg-white/60 dark:bg-gradient-to-br dark:from-emerald-500/10 dark:to-green-500/10 rounded-2xl backdrop-blur-sm border border-emerald-200/60 dark:border-emerald-700/20 rotate-12 animate-float-slow flex items-center justify-center shadow-lg">
          <div className="w-6 h-6 bg-emerald-50 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-100 dark:border-transparent">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold">📊</span>
          </div>
        </div>
        
        <div className="absolute top-32 right-20 w-24 h-24 bg-white/60 dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-indigo-500/10 rounded-xl backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/20 rotate-45 animate-float shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 bg-blue-50 dark:bg-blue-500/20 rounded-full border border-blue-100 dark:border-transparent flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 text-xs">🎯</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-24 w-28 h-28 bg-white/60 dark:bg-gradient-to-br dark:from-purple-500/10 dark:to-pink-500/10 rounded-lg backdrop-blur-sm border border-purple-200/60 dark:border-purple-700/20 -rotate-12 animate-float-slower shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-purple-50 dark:bg-purple-500/20 rounded-sm border border-purple-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-pink-50 dark:bg-pink-500/20 rounded-sm border border-pink-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-pink-50 dark:bg-pink-500/20 rounded-sm border border-pink-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-purple-50 dark:bg-purple-500/20 rounded-sm border border-purple-100 dark:border-transparent"></div>
            </div>
          </div>
        </div>

        {/* Skills visualization elements */}
        <div className="absolute top-60 right-32 w-36 h-20 bg-white/60 dark:bg-gradient-to-r dark:from-cyan-500/10 dark:to-teal-500/10 rounded-full backdrop-blur-sm border border-cyan-200/60 dark:border-cyan-700/20 animate-float shadow-lg">
          <div className="w-full h-full flex items-center justify-center space-x-1">
            <div className="w-1 h-6 bg-cyan-200 dark:bg-cyan-500/30 rounded-full"></div>
            <div className="w-1 h-8 bg-cyan-300 dark:bg-cyan-500/40 rounded-full"></div>
            <div className="w-1 h-4 bg-cyan-200 dark:bg-cyan-500/30 rounded-full"></div>
            <div className="w-1 h-10 bg-cyan-400 dark:bg-cyan-500/50 rounded-full"></div>
            <div className="w-1 h-7 bg-cyan-300 dark:bg-cyan-500/40 rounded-full"></div>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-gradient-to-br from-emerald-100/30 via-green-100/30 to-teal-100/30 dark:from-emerald-500/5 dark:via-green-500/5 dark:to-teal-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-gradient-to-l from-blue-100/30 via-indigo-100/30 to-purple-100/30 dark:from-blue-500/5 dark:via-indigo-500/5 dark:to-purple-500/5 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>
      
      {/* Scrollable Content */}
      <div className="h-screen pt-16 relative z-10">
        <ScrollArea className="h-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <SkillsSection />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Skills;
