
import { HeroSection } from "@/components/HeroSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { WelcomeToast } from "@/components/WelcomeToast";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Header */}
      <Header />
      
      {/* Welcome Toast */}
      <WelcomeToast />

      {/* Enhanced Dynamic Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Animated grid with wave effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] animate-pulse"></div>
        
        {/* Floating geometric shapes with different animations */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full animate-float-slow [animation-delay:2s]"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-pink-500/15 transform rotate-45 animate-float-slower [animation-delay:4s]"></div>
        
        {/* Rotating hexagons */}
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 transform rotate-0 animate-spin [animation-duration:20s] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-gradient-to-r from-pink-400/10 to-violet-400/10 transform animate-spin [animation-duration:15s] [animation-direction:reverse] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"></div>
        
        {/* Morphing gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/8 via-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse opacity-90 [animation-duration:4s]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 via-teal-400/8 to-cyan-400/8 rounded-full blur-3xl animate-pulse [animation-delay:2s] opacity-80 [animation-duration:6s]"></div>
        
        {/* Particle trail effect */}
        <div className="absolute top-1/6 left-1/3 w-3 h-3 bg-blue-400/50 rounded-full animate-bounce [animation-duration:3s]"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-purple-400/50 rounded-full animate-bounce [animation-delay:1s] [animation-duration:2.5s]"></div>
        <div className="absolute top-2/3 right-1/5 w-4 h-4 bg-emerald-400/50 rounded-full animate-bounce [animation-delay:2s] [animation-duration:3.5s]"></div>
        <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-orange-400/50 rounded-full animate-bounce [animation-delay:0.5s] [animation-duration:2s]"></div>
        
        {/* Diagonal light streaks */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-300/25 to-transparent transform rotate-12"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-300/25 to-transparent transform -rotate-12"></div>
        
        {/* Pulsing rings */}
        <div className="absolute top-1/3 left-1/2 w-32 h-32 border border-indigo-400/20 rounded-full animate-ping [animation-duration:4s]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-rose-400/20 rounded-full animate-ping [animation-delay:2s] [animation-duration:5s]"></div>
        
        {/* Floating triangular elements */}
        <div className="absolute top-20 right-20 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-violet-400/15 animate-float [animation-delay:1s]"></div>
        <div className="absolute bottom-40 left-32 w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-emerald-400/15 animate-float-slow [animation-delay:3s]"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="min-h-screen w-full flex items-center justify-center pt-16 relative">
          <HeroSection />
        </div>
        
        {/* Footer */}
        <div className="relative">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
