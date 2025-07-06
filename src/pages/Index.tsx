
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Wide background effects covering full layout */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Subtle wide gradient overlays covering full width */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_100%_60%_at_20%_0%,rgba(59,130,246,0.12),transparent_80%)]"></div>
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_80%_100%,rgba(99,102,241,0.08),transparent_80%)]"></div>
        
        {/* Wide grid pattern covering full layout */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_0%,#000_50%,transparent_100%)]"></div>
        
        {/* Additional wide ambient light effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50/25 via-transparent to-slate-50/15"></div>
        
        {/* Extra wide coverage gradient */}
        <div className="absolute -inset-10 w-[calc(100%+80px)] h-[calc(100%+80px)] bg-gradient-to-br from-blue-50/10 via-slate-50/5 to-indigo-50/10"></div>
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
