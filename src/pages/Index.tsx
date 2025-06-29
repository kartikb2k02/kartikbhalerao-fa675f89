
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Animated background pattern inspired by the image */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-purple-100/30 dark:from-slate-800/50 dark:via-blue-800/30 dark:to-indigo-800/40"></div>
        
        {/* Blue gradient border elements inspired by the image */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-400/20 to-transparent rounded-b-3xl"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-l from-blue-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating geometric shapes with blue theme */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 dark:bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-indigo-500/40 dark:bg-indigo-400/50 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-purple-500/30 dark:bg-purple-400/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-blue-400/30 dark:bg-blue-300/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-indigo-400/40 dark:bg-indigo-300/50 rounded-full animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Blue gradient border elements like in the reference image */}
        <div className="absolute top-10 right-10 w-64 h-32 border-2 border-blue-400/30 dark:border-blue-300/40 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-48 h-24 border-2 border-indigo-400/30 dark:border-indigo-300/40 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 backdrop-blur-sm animate-float"></div>
        
        {/* Animated floating cards with blue theme */}
        <div className="absolute top-32 right-1/4 w-16 h-12 bg-blue-500/10 dark:bg-blue-400/15 border border-blue-300/20 dark:border-blue-200/30 rounded-lg backdrop-blur-sm animate-float-slow shadow-lg shadow-blue-500/10"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-16 bg-indigo-500/10 dark:bg-indigo-400/15 border border-indigo-300/20 dark:border-indigo-200/30 rounded-lg backdrop-blur-sm animate-float-slower shadow-lg shadow-indigo-500/10"></div>
        <div className="absolute top-1/2 left-10 w-12 h-20 bg-purple-500/10 dark:bg-purple-400/15 border border-purple-300/20 dark:border-purple-200/30 rounded-lg backdrop-blur-sm animate-float shadow-lg shadow-purple-500/10"></div>
      </div>

      <ThemeToggle />
      
      {/* Hero Section */}
      <div className="relative">
        <HeroSection />
      </div>

      {/* Main content */}
      <div className="relative z-10 space-y-0">
        {/* About Section */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm py-24 transition-colors duration-300 border-y border-blue-200/30 dark:border-blue-700/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-blue-50/60 dark:bg-slate-900/60 backdrop-blur-sm py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ExperienceSection />
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm py-24 transition-colors duration-300 border-y border-blue-200/30 dark:border-blue-700/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-indigo-50/60 dark:bg-slate-900/60 backdrop-blur-sm py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SkillsSection />
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm py-24 transition-colors duration-300 border-y border-blue-200/30 dark:border-blue-700/30">
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
