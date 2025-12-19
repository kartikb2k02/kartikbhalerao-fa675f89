import { Header } from "@/components/Header";
import { SkillsSection } from "@/components/SkillsSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Skills = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
      {/* Interactive Header */}
      <Header />

      {/* Unified Animated Background */}
      <AnimatedBackground intensity="medium" />

      {/* Main Content */}
      <div className="min-h-screen pt-20 relative z-10">
        <ScrollArea className="h-full">
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            <SkillsSection />
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Skills;
