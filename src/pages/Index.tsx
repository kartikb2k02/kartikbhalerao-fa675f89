
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300">
      <ThemeToggle />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 dark:from-blue-400/5 dark:to-indigo-400/5"></div>
        <HeroSection />
      </div>

      {/* Main content with alternating backgrounds */}
      <div className="space-y-0">
        {/* About Section */}
        <div className="bg-white dark:bg-slate-800 py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ExperienceSection />
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-white dark:bg-slate-800 py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SkillsSection />
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white dark:bg-slate-800 py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CertificationsSection />
          </div>
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
