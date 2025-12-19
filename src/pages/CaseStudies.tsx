import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Unified Animated Background */}
      <AnimatedBackground intensity="medium" />

      <Header />
      <main className="pt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <CaseStudiesSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default CaseStudies;
