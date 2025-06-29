
import { ArrowDown, Check, Linkedin } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-8">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <SkillsSection />
        <CertificationsSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
