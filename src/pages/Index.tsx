
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 dark:from-blue-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Enhanced smart background effects */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Primary gradient mesh with blue focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.08),transparent_60%)]"></div>
        
        {/* Smart floating elements */}
        <div className="absolute top-20 left-16 w-24 h-24 bg-white/80 dark:bg-gradient-to-br dark:from-blue-500/15 dark:to-indigo-500/15 rounded-3xl backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/30 rotate-12 animate-float-slow flex items-center justify-center shadow-xl">
          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-500/25 rounded-xl flex items-center justify-center border border-blue-100 dark:border-transparent">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">🎯</span>
          </div>
        </div>
        
        <div className="absolute top-32 right-20 w-28 h-28 bg-white/80 dark:bg-gradient-to-br dark:from-indigo-500/15 dark:to-purple-500/15 rounded-2xl backdrop-blur-sm border border-indigo-200/60 dark:border-indigo-700/30 rotate-45 animate-float shadow-xl">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-500/25 rounded-full border border-indigo-100 dark:border-transparent flex items-center justify-center">
              <span className="text-indigo-600 dark:text-indigo-400 text-sm">💡</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-24 w-32 h-32 bg-white/80 dark:bg-gradient-to-br dark:from-blue-500/15 dark:to-cyan-500/15 rounded-xl backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/30 -rotate-12 animate-float-slower shadow-xl">
          <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-2">
              <div className="w-4 h-4 bg-blue-50 dark:bg-blue-500/25 rounded border border-blue-100 dark:border-transparent"></div>
              <div className="w-4 h-4 bg-cyan-50 dark:bg-cyan-500/25 rounded border border-cyan-100 dark:border-transparent"></div>
              <div className="w-4 h-4 bg-cyan-50 dark:bg-cyan-500/25 rounded border border-cyan-100 dark:border-transparent"></div>
              <div className="w-4 h-4 bg-blue-50 dark:bg-blue-500/25 rounded border border-blue-100 dark:border-transparent"></div>
            </div>
          </div>
        </div>

        {/* Data visualization element */}
        <div className="absolute top-60 right-32 w-40 h-24 bg-white/80 dark:bg-gradient-to-r dark:from-blue-500/15 dark:to-indigo-500/15 rounded-2xl backdrop-blur-sm border border-blue-200/60 dark:border-blue-700/30 animate-float shadow-xl">
          <div className="w-full h-full flex items-center justify-center space-x-2 px-4">
            <div className="w-2 h-8 bg-blue-200 dark:bg-blue-500/40 rounded-full"></div>
            <div className="w-2 h-12 bg-blue-300 dark:bg-blue-500/50 rounded-full"></div>
            <div className="w-2 h-6 bg-blue-200 dark:bg-blue-500/40 rounded-full"></div>
            <div className="w-2 h-14 bg-blue-400 dark:bg-blue-500/60 rounded-full"></div>
            <div className="w-2 h-10 bg-blue-300 dark:bg-blue-500/50 rounded-full"></div>
          </div>
        </div>

        {/* Enhanced grid pattern with blue tint */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        
        {/* Smart ambient effects */}
        <div className="absolute bottom-20 right-40 w-48 h-48 bg-gradient-to-br from-blue-100/40 via-indigo-100/40 to-purple-100/40 dark:from-blue-500/8 dark:via-indigo-500/8 dark:to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-64 h-64 bg-gradient-to-l from-indigo-100/40 via-blue-100/40 to-cyan-100/40 dark:from-indigo-500/8 dark:via-blue-500/8 dark:to-cyan-500/8 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        
        {/* Additional smart overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-indigo-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-indigo-950/15"></div>
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen w-full flex flex-col relative z-10">
        {/* Hero Section - takes most of viewport */}
        <div className="flex-1 flex items-center justify-center pt-16 w-full">
          <HeroSection />
        </div>
        
        {/* Footer */}
        <div className="relative z-10 w-full">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
