
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Animated background pattern inspired by Shortcut */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-indigo-400/30 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-blue-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-60 left-20 w-2 h-2 bg-indigo-300/30 rounded-full animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Subtle lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Animated floating cards */}
        <div className="absolute top-32 right-1/4 w-16 h-12 bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm animate-float-slow"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-16 bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm animate-float-slower"></div>
        <div className="absolute top-1/2 left-10 w-12 h-20 bg-white/5 dark:bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm animate-float"></div>
      </div>

      <ThemeToggle />
      
      {/* Hero Section */}
      <div className="relative">
        <HeroSection />
      </div>

      {/* Main content */}
      <div className="relative z-10 space-y-0">
        {/* About Section */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm py-24 transition-colors duration-300 border-y border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-sm py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ExperienceSection />
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm py-24 transition-colors duration-300 border-y border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-sm py-24 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SkillsSection />
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm py-24 transition-colors duration-300 border-y border-slate-200/50 dark:border-slate-700/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CertificationsSection />
          </div>
        </div>

        {/* Footer */}
        <FooterSection />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
