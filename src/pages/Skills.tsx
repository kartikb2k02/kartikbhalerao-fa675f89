import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";

const Skills = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-[#FEFDF9] dark:bg-[#111111]">
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
