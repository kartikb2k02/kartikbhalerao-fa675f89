
import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";
import { ScrollArea } from "@/components/ui/scroll-area";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Interactive Header */}
      <Header />
      
      {/* Enhanced Modern Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.12),transparent_50%)]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/15 dark:to-indigo-400/15 rounded-3xl rotate-12 animate-pulse backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-400/15 dark:to-pink-400/15 rounded-2xl -rotate-12 animate-pulse [animation-delay:1s] backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30"></div>
        <div className="absolute bottom-40 left-32 w-28 h-28 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-400/15 dark:to-teal-400/15 rounded-xl rotate-45 animate-pulse [animation-delay:2s] backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30"></div>
        
        {/* Dynamic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Animated blur elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 via-indigo-400/5 to-purple-400/5 dark:from-blue-300/8 dark:via-indigo-300/8 dark:to-purple-300/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-emerald-400/5 via-teal-400/5 to-cyan-400/5 dark:from-emerald-300/8 dark:via-teal-300/8 dark:to-cyan-300/8 rounded-full blur-3xl animate-pulse [animation-delay:3s]"></div>
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen pt-16 relative z-10">
        <ScrollArea className="h-full">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <SkillsSection />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Skills;
