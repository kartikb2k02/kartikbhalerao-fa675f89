
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500">
      {/* Enhanced background with subtle patterns */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Main gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-indigo-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-200/20 dark:border-blue-700/20 rounded-2xl rotate-12 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-purple-200/20 dark:border-purple-700/20 rounded-xl rotate-45 animate-float"></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 border border-indigo-200/20 dark:border-indigo-700/20 rounded-lg -rotate-12 animate-float-slower"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <ThemeToggle />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-blue-200/20 dark:border-blue-700/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">KB</span>
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">Kartik Bhalerao</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Experience</a>
              <a href="#case-studies" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Case Studies</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Skills</a>
              <a href="/blog" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">Blog</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <HeroSection />
      </div>

      {/* Main content with better spacing and section separation */}
      <div className="relative z-10">
        {/* About Section */}
        <section id="about" className="py-32 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 bg-white/40 dark:bg-slate-800/20 backdrop-blur-sm scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ExperienceSection />
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-32 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-white/40 dark:bg-slate-800/20 backdrop-blur-sm scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SkillsSection />
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-32 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CertificationsSection />
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
