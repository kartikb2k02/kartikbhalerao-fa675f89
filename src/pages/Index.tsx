import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Unified Animated Background */}
      <AnimatedBackground intensity="rich" />

      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen w-full flex items-center justify-center pt-16 relative">
          <HeroSection />
        </div>

        {/* Footer */}
        <div className="relative">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;

