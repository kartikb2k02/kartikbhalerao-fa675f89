
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 text-slate-900 dark:text-white transition-colors duration-500">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />
      
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
