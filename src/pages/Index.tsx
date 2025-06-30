import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced background with product-focused elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>
        
        {/* Floating product management icons */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl backdrop-blur-sm border border-blue-200/20 dark:border-blue-700/20 rotate-12 animate-float-slow flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">PM</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-200/20 dark:border-purple-700/20 rotate-45 animate-float">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 bg-purple-500/20 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-40 left-32 w-28 h-28 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-lg backdrop-blur-sm border border-indigo-200/20 dark:border-indigo-700/20 -rotate-12 animate-float-slower">
          <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-indigo-500/20 rounded-sm"></div>
              <div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div>
              <div className="w-3 h-3 bg-cyan-500/20 rounded-sm"></div>
              <div className="w-3 h-3 bg-indigo-500/20 rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Data visualization elements */}
        <div className="absolute top-60 right-20 w-32 h-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-green-200/20 dark:border-green-700/20 animate-float">
          <div className="w-full h-full flex items-center justify-center space-x-1">
            <div className="w-1 h-6 bg-green-500/30 rounded-full"></div>
            <div className="w-1 h-8 bg-green-500/40 rounded-full"></div>
            <div className="w-1 h-4 bg-green-500/30 rounded-full"></div>
            <div className="w-1 h-10 bg-green-500/50 rounded-full"></div>
          </div>
        </div>

        {/* Grid pattern overlay with product focus */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 left-1/2 w-60 h-60 bg-gradient-to-l from-indigo-500/5 via-blue-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse [animation-delay:3s]"></div>
      </div>
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-blue-200/30 dark:border-blue-700/30 transition-all duration-300 shadow-lg shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">KB</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-lg">Kartik Bhalerao</span>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Product Manager</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group">
                Experience
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#case-studies" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group">
                Case Studies
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/blog" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Blog
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <HeroSection />
      </div>

      {/* Main content with enhanced spacing */}
      <div className="relative z-10">
        {/* About Section */}
        <section id="about" className="py-32 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm scroll-mt-16 border-y border-blue-200/20 dark:border-blue-700/20">
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
        <section id="skills" className="py-32 bg-white/60 dark:bg-slate-800/30 backdrop-blur-sm scroll-mt-16 border-y border-blue-200/20 dark:border-blue-700/20">
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
