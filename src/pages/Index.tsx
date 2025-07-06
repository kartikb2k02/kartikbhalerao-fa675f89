
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Minimal background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.02),transparent_50%)]"></div>
        
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col">
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
