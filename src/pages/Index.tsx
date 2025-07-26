
import { HeroSection } from "@/components/HeroSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-800 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Animated gradient orbs with enhanced blur and movement */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/30 via-sky-400/30 to-blue-400/30 rounded-full blur-3xl animate-pulse [animation-delay:2s] opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/25 via-blue-400/25 to-cyan-400/25 rounded-full blur-3xl animate-pulse [animation-delay:4s] opacity-50"></div>
        
        {/* Enhanced floating geometric shapes with better animations */}
        <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-blue-400/40 to-indigo-400/40 transform rotate-45 animate-float-slow backdrop-blur-sm border border-blue-300/30 shadow-2xl rounded-lg hover:scale-110 transition-transform duration-700"></div>
        
        <div className="absolute top-60 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-full animate-float backdrop-blur-sm border border-cyan-300/30 shadow-2xl hover:scale-110 transition-transform duration-700"></div>
        
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 transform rotate-12 animate-float-slower backdrop-blur-sm border border-indigo-300/30 shadow-2xl hover:scale-110 transition-transform duration-700" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        
        <div className="absolute top-1/4 right-16 w-18 h-18 bg-gradient-to-br from-sky-400/40 to-cyan-400/40 transform -rotate-12 animate-float backdrop-blur-sm border border-sky-300/30 shadow-2xl hover:scale-110 transition-transform duration-700" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
        
        {/* Enhanced particle-like dots with staggered animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500/60 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-cyan-500/60 rounded-full animate-pulse [animation-delay:1s] shadow-lg"></div>
          <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-indigo-500/60 rounded-full animate-pulse [animation-delay:3s] shadow-lg"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-sky-500/60 rounded-full animate-pulse [animation-delay:2s] shadow-lg"></div>
          <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-purple-500/60 rounded-full animate-pulse [animation-delay:4s] shadow-lg"></div>
          <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-teal-500/60 rounded-full animate-pulse [animation-delay:5s] shadow-lg"></div>
          <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-violet-500/60 rounded-full animate-pulse [animation-delay:1.5s] shadow-lg"></div>
        </div>
        
        {/* Enhanced light wavy lines with better gradients */}
        <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-30" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,300 Q250,200 500,300 T1000,300 L1000,0 L0,0 Z" fill="url(#lightGradient1)" />
            <path d="M0,700 Q250,600 500,700 T1000,700 L1000,1000 L0,1000 Z" fill="url(#lightGradient2)" />
            <path d="M0,500 Q300,400 600,500 T1200,500" stroke="url(#strokeGradient)" strokeWidth="2" fill="none" opacity="0.4" />
            <defs>
              <linearGradient id="lightGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="lightGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2"/>
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.15"/>
                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.2"/>
              </linearGradient>
              <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(139, 92, 246)" stopOpacity="0.6"/>
                <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Enhanced mesh pattern with better opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)]"></div>
        
        {/* Enhanced dynamic light beams with multiple beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse [animation-delay:4s]"></div>
        <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse [animation-delay:6s]"></div>
        
        {/* New animated ring elements */}
        <div className="absolute top-1/3 left-1/6 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse [animation-delay:1s]"></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse [animation-delay:3s]"></div>
        
        {/* Gradient overlay for better depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/5"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-slate-50/20 dark:to-slate-900/20"></div>
      </div>
      
      {/* Main Content Container with enhanced styling */}
      <div className="relative z-10">
        {/* Hero Section with improved spacing and effects */}
        <div className="min-h-screen w-full flex items-center justify-center pt-16 relative">
          {/* Content backdrop for better readability */}
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent dark:from-slate-800/5 rounded-full transform scale-150 blur-3xl"></div>
          <HeroSection />
        </div>
        
        {/* Footer with enhanced styling */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
