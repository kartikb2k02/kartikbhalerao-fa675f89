
import { HeroSection } from "@/components/HeroSection";
import { CompactSkillsSection } from "@/components/CompactSkillsSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />
      <WelcomeToast />
      
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl">
          <div className="w-72 h-72 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl">
          <div className="w-72 h-72 bg-gradient-to-tr from-primary/15 via-primary/3 to-transparent rounded-full" />
        </div>
      </div>

      <main className="relative">
        {/* Hero Section */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-muted/30">
          <CompactSkillsSection />
        </section>

        {/* Case Studies Section */}
        <section id="work" className="py-24">
          <CaseStudiesSection />
        </section>

        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
