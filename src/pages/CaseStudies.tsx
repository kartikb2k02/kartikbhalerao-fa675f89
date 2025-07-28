
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/10 via-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse [animation-delay:2s] opacity-50"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-400/10 via-yellow-400/10 to-red-400/10 rounded-full blur-3xl animate-pulse [animation-delay:4s] opacity-40"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-3xl rotate-12 animate-pulse animate-float shadow-2xl"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-2xl rotate-45 animate-pulse [animation-delay:2s] animate-float-slow shadow-xl"></div>
        <div className="absolute top-1/2 right-16 w-20 h-20 bg-gradient-to-br from-orange-500/15 to-pink-500/15 rounded-xl -rotate-12 animate-pulse [animation-delay:3s] animate-float-slower shadow-lg"></div>
        
        {/* Moving particles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-blue-400/50 rounded-full animate-bounce animate-float"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-purple-400/50 rounded-full animate-bounce [animation-delay:1s] animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-emerald-400/50 rounded-full animate-bounce [animation-delay:2s] animate-float-slower"></div>
        
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-300/20 to-transparent"></div>
      </div>
      
      <Header />
      <main className="pt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <CaseStudiesSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default CaseStudies;
