
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Wide background effects matching the image */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle wide gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgba(59,130,246,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(99,102,241,0.06),transparent_70%)]"></div>
        
        {/* Very subtle wide grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]"></div>
        
        {/* Additional wide ambient light effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/20 via-transparent to-slate-50/10"></div>
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col relative z-10">
        {/* Hero Section - takes most of viewport */}
        <div className="flex-1 flex items-center justify-center pt-16">
          <HeroSection />
        </div>
        
        {/* Footer */}
        <div className="relative z-10">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
