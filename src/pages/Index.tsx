
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Interactive Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Enhanced background with product-focused elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient mesh for better light theme */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.06),transparent_50%)]"></div>
        
        {/* Floating product management icons with better light theme colors */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/60 dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-indigo-500/10 rounded-2xl backdrop-blur-sm border border-slate-200/60 dark:border-blue-200/20 dark:dark:border-blue-700/20 rotate-12 animate-float-slow flex items-center justify-center shadow-lg light-shadow-lg">
          <div className="w-8 h-8 bg-blue-50 dark:bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-100 dark:border-transparent">
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold">PM</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-20 h-20 bg-white/60 dark:bg-gradient-to-br dark:from-purple-500/10 dark:to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-200/60 dark:border-purple-200/20 dark:dark:border-purple-700/20 rotate-45 animate-float shadow-lg light-shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 bg-purple-50 dark:bg-purple-500/20 rounded-full border border-purple-100 dark:border-transparent"></div>
          </div>
        </div>
        
        <div className="absolute bottom-40 left-32 w-28 h-28 bg-white/60 dark:bg-gradient-to-br dark:from-indigo-500/10 dark:to-cyan-500/10 rounded-lg backdrop-blur-sm border border-indigo-200/60 dark:border-indigo-200/20 dark:dark:border-indigo-700/20 -rotate-12 animate-float-slower shadow-lg light-shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-indigo-50 dark:bg-indigo-500/20 rounded-sm border border-indigo-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-cyan-50 dark:bg-cyan-500/20 rounded-sm border border-cyan-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-cyan-50 dark:bg-cyan-500/20 rounded-sm border border-cyan-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-indigo-50 dark:bg-indigo-500/20 rounded-sm border border-indigo-100 dark:border-transparent"></div>
            </div>
          </div>
        </div>

        {/* Data visualization elements with better light theme styling */}
        <div className="absolute top-60 right-20 w-32 h-16 bg-white/60 dark:bg-gradient-to-r dark:from-green-500/10 dark:to-blue-500/10 rounded-full backdrop-blur-sm border border-green-200/60 dark:border-green-200/20 dark:dark:border-green-700/20 animate-float shadow-lg light-shadow">
          <div className="w-full h-full flex items-center justify-center space-x-1">
            <div className="w-1 h-6 bg-green-200 dark:bg-green-500/30 rounded-full"></div>
            <div className="w-1 h-8 bg-green-300 dark:bg-green-500/40 rounded-full"></div>
            <div className="w-1 h-4 bg-green-200 dark:bg-green-500/30 rounded-full"></div>
            <div className="w-1 h-10 bg-green-400 dark:bg-green-500/50 rounded-full"></div>
          </div>
        </div>

        {/* Grid pattern overlay with better light theme integration */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Additional decorative elements with improved light theme colors */}
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-indigo-100/30 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-indigo-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 left-1/2 w-60 h-60 bg-gradient-to-l from-indigo-100/30 via-blue-100/30 to-cyan-100/30 dark:from-indigo-500/5 dark:via-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl animate-pulse [animation-delay:3s]"></div>
      </div>
      
      {/* Hero Section with top padding for fixed header */}
      <div className="pt-16">
        <HeroSection />
      </div>

      {/* Main content with enhanced spacing and better light theme sections */}
      <div className="relative z-10">
        {/* About Section */}
        <section id="about" className="py-32 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>


        {/* Case Studies Section */}
        <section id="case-studies" className="py-32 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </section>

        {/* Skills Section with improved light theme background */}
        <section id="skills" className="py-32 bg-white/80 dark:bg-slate-800/30 backdrop-blur-sm scroll-mt-16 border-y border-slate-200/60 dark:border-blue-200/20 dark:dark:border-blue-700/20">
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
