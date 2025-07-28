
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/15 via-teal-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse [animation-delay:2s] opacity-60"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-400/15 via-yellow-400/15 to-red-400/15 rounded-full blur-3xl animate-pulse [animation-delay:4s] opacity-50"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rotate-12 animate-float-slow flex items-center justify-center shadow-xl">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/40 to-indigo-500/40 rounded-2xl flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">👋</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30 rotate-45 animate-float shadow-xl">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-full flex items-center justify-center">
              <span className="text-purple-600 dark:text-purple-400 text-sm">💡</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl backdrop-blur-sm border border-green-200/30 dark:border-green-700/30 -rotate-12 animate-float-slower shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 bg-green-500/30 rounded-lg flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 text-xs">🚀</span>
            </div>
          </div>
        </div>

        {/* Enhanced moving particles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce animate-float"></div>
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 bg-purple-400/60 rounded-full animate-bounce [animation-delay:1s] animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-emerald-400/60 rounded-full animate-bounce [animation-delay:2s] animate-float-slower"></div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-300/30 to-transparent"></div>
      </div>
      
      {/* Use the same Header component as home page */}
      <Header />

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Enhanced About Me Header */}
          <div className="text-center mb-20">
            <div className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100/90 to-indigo-100/90 dark:from-blue-900/30 dark:to-indigo-900/30 px-8 py-4 rounded-2xl text-blue-600 dark:text-blue-400 font-medium text-base mb-8 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-blue-200/50 dark:border-blue-700/50">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl animate-pulse"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000 rounded-2xl"></div>
              
              <span className="text-xl animate-bounce relative z-10">👋</span>
              <span className="relative z-10">About Me</span>
            </div>
          </div>

          {/* About Section Content */}
          <AboutSection />
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default About;
