import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground relative">

      {/* Dotted background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(100 116 139 / 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative z-10">
        <Header />
        <WelcomeToast />

        <div className="min-h-screen w-full flex items-center justify-center pt-16">
          <HeroSection />
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default Index;

