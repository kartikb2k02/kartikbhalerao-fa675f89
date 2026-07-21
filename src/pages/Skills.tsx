import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";
import { SEO } from "@/components/SEO";

const Skills = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">
      <SEO
        title="Capabilities"
        description="Product management capabilities: strategy, execution, AI integration, data-driven decision making, and cross-functional leadership — Kartik Bhalerao."
        path="/capabilities"
      />
      <div className="relative z-10">
        <Header />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <SkillsSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default Skills;
