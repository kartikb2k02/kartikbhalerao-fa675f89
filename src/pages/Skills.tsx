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
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_0%_0%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_0%_0%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_100%_0%,rgba(139,92,246,0.12),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_100%_0%,rgba(139,92,246,0.08),transparent_50%)]" />
          <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(ellipse_at_50%_100%,rgba(16,185,129,0.1),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_50%_100%,rgba(16,185,129,0.06),transparent_50%)]" />
        </div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-16 w-20 h-20 border-2 border-blue-300/20 dark:border-blue-500/20 rounded-xl rotate-12 animate-[spin_30s_linear_infinite]" />
        <div className="absolute top-48 right-24 w-16 h-16 border-2 border-purple-300/20 dark:border-purple-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 border-2 border-emerald-300/20 dark:border-emerald-500/20 rounded-2xl -rotate-12 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute top-1/3 right-16 w-12 h-12 bg-gradient-to-br from-amber-400/10 to-orange-400/10 dark:from-amber-500/10 dark:to-orange-500/10 rounded-lg rotate-45 animate-bounce [animation-duration:4s]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen pt-20 relative z-10">
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
