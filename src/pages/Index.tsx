import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";
import { SocialDock } from "@/components/SocialDock";

const Index = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-[#EFEFEF] dark:bg-[#111111]">


      <div className="relative z-10">
        <Header />
        <WelcomeToast />

        <div className="min-h-[calc(100vh-5rem)] w-full flex items-center justify-center">
          <HeroSection />
        </div>

        <FooterSection />
      </div>

      <SocialDock />
    </div>
  );
};

export default Index;

