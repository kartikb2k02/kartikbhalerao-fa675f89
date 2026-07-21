import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";
import { SocialDock } from "@/components/SocialDock";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">
      <SEO
        title="Kartik Bhalerao"
        description="Kartik Bhalerao is a Product Manager focused on building customer-centric products, driving growth through data-driven decisions, and crafting AI-powered product strategies."
        path="/"
      />

      <div className="relative z-10">
        <Header />
        <WelcomeToast />

        <div className="min-h-screen w-full flex items-center justify-center">
          <HeroSection />
        </div>

        <FooterSection />
      </div>

      <SocialDock />
    </div>
  );
};

export default Index;

