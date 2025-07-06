
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* New Dynamic Background Effects */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse [animation-delay:4s]"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-purple-400/30 to-pink-400/30 transform rotate-45 animate-float-slow backdrop-blur-sm border border-purple-300/20 shadow-lg"></div>
        
        <div className="absolute top-60 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full animate-float backdrop-blur-sm border border-cyan-300/20 shadow-lg"></div>
        
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 transform rotate-12 animate-float-slower backdrop-blur-sm border border-emerald-300/20 shadow-lg" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        
        <div className="absolute top-1/4 right-16 w-18 h-18 bg-gradient-to-br from-amber-400/30 to-orange-400/30 transform -rotate-12 animate-float backdrop-blur-sm border border-amber-300/20 shadow-lg" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
        
        {/* Particle-like dots */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse [animation-delay:1s]"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-pink-400/60 rounded-full animate-pulse [animation-delay:3s]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-pulse [animation-delay:2s]"></div>
          <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-amber-400/60 rounded-full animate-pulse [animation-delay:4s]"></div>
        </div>
        
        {/* Wavy lines */}
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,300 Q250,200 500,300 T1000,300 L1000,0 L0,0 Z" fill="url(#gradient1)" />
            <path d="M0,700 Q250,600 500,700 T1000,700 L1000,1000 L0,1000 Z" fill="url(#gradient2)" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="rgb(139, 69, 19)" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Subtle mesh pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        
        {/* Dynamic light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse [animation-delay:2s]"></div>
        
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-slate-900/20"></div>
      </div>
      
      {/* Main Content */}
      <div className="min-h-screen w-full flex flex-col relative z-10">
        {/* Hero Section - takes most of viewport */}
        <div className="flex-1 flex items-center justify-center pt-16 w-full">
          <HeroSection />
        </div>
        
        {/* Footer */}
        <div className="relative z-10 w-full">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
