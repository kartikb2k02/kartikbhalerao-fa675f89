import { HeroSection } from "@/components/HeroSection";
import { HomeBlogSection } from "@/components/HomeBlogSection";
import { ConnectCTASection } from "@/components/ConnectCTASection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <HeroSection />
        <HomeBlogSection />
        <ConnectCTASection />
      </main>

      <FooterSection />
    </div>
  );
}
