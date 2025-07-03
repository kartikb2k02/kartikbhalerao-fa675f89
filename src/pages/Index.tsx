
import { HeroSection } from "@/components/HeroSection";



import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50/30 dark:from-rose-950 dark:via-slate-900 dark:to-amber-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Interactive Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Enhanced background with product-focused elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient mesh with warm color scheme */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,113,133,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(251,113,133,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.06),transparent_50%)]"></div>
        
        {/* Floating product management icons with warm color scheme */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/60 dark:bg-gradient-to-br dark:from-rose-500/10 dark:to-pink-500/10 rounded-2xl backdrop-blur-sm border border-rose-200/60 dark:border-rose-700/20 rotate-12 animate-float-slow flex items-center justify-center shadow-lg">
          <div className="w-8 h-8 bg-rose-50 dark:bg-rose-500/20 rounded-lg flex items-center justify-center border border-rose-100 dark:border-transparent">
            <span className="text-rose-600 dark:text-rose-400 text-xs font-bold">PM</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-20 h-20 bg-white/60 dark:bg-gradient-to-br dark:from-orange-500/10 dark:to-amber-500/10 rounded-xl backdrop-blur-sm border border-orange-200/60 dark:border-orange-700/20 rotate-45 animate-float shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 bg-orange-50 dark:bg-orange-500/20 rounded-full border border-orange-100 dark:border-transparent"></div>
          </div>
        </div>
        
        <div className="absolute bottom-40 left-32 w-28 h-28 bg-white/60 dark:bg-gradient-to-br dark:from-amber-500/10 dark:to-yellow-500/10 rounded-lg backdrop-blur-sm border border-amber-200/60 dark:border-amber-700/20 -rotate-12 animate-float-slower shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-amber-50 dark:bg-amber-500/20 rounded-sm border border-amber-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-yellow-50 dark:bg-yellow-500/20 rounded-sm border border-yellow-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-yellow-50 dark:bg-yellow-500/20 rounded-sm border border-yellow-100 dark:border-transparent"></div>
              <div className="w-3 h-3 bg-amber-50 dark:bg-amber-500/20 rounded-sm border border-amber-100 dark:border-transparent"></div>
            </div>
          </div>
        </div>

        {/* Data visualization elements with warm color scheme */}
        <div className="absolute top-60 right-20 w-32 h-16 bg-white/60 dark:bg-gradient-to-r dark:from-orange-500/10 dark:to-red-500/10 rounded-full backdrop-blur-sm border border-orange-200/60 dark:border-orange-700/20 animate-float shadow-lg">
          <div className="w-full h-full flex items-center justify-center space-x-1">
            <div className="w-1 h-6 bg-orange-200 dark:bg-orange-500/30 rounded-full"></div>
            <div className="w-1 h-8 bg-orange-300 dark:bg-orange-500/40 rounded-full"></div>
            <div className="w-1 h-4 bg-orange-200 dark:bg-orange-500/30 rounded-full"></div>
            <div className="w-1 h-10 bg-orange-400 dark:bg-orange-500/50 rounded-full"></div>
          </div>
        </div>

        {/* Grid pattern overlay with warm theme integration */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,113,133,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,113,133,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(251,113,133,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,113,133,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Additional decorative elements with warm color scheme */}
        <div className="absolute bottom-20 right-40 w-40 h-40 bg-gradient-to-br from-rose-100/30 via-pink-100/30 to-orange-100/30 dark:from-rose-500/5 dark:via-pink-500/5 dark:to-orange-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 left-1/2 w-60 h-60 bg-gradient-to-l from-orange-100/30 via-amber-100/30 to-yellow-100/30 dark:from-orange-500/5 dark:via-amber-500/5 dark:to-yellow-500/5 rounded-full blur-3xl animate-pulse [animation-delay:3s]"></div>
      </div>
      
      {/* Hero Section with top padding for fixed header */}
      <div className="pt-16">
        <HeroSection />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
