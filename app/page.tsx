import { HeroSection } from "@/components/HeroSection";
import { HomeBlogSection } from "@/components/HomeBlogSection";
import { ConnectSection } from "@/components/ConnectSection";
import { ConnectCTASection } from "@/components/ConnectCTASection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

export default function Index() {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-background">
      <div className="relative z-10">
        <Header />
        <WelcomeToast />

        <div className="w-full min-h-[100vh] flex items-center justify-center">
          <HeroSection />
        </div>

        <div className="w-full border-t border-border" />

        <HomeBlogSection />

        <div className="w-full border-t border-border" />

        <ConnectSection />

        <ConnectCTASection />

        <FooterSection />
      </div>
    </div>
  );
}
