
import { Heart, Coffee } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white/80 via-blue-50/80 to-purple-50/80 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-slate-900/80 backdrop-blur-2xl text-gray-900 dark:text-white overflow-hidden border-t border-white/40 dark:border-gray-700/40">
      
      {/* Enhanced glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/15 to-white/30 dark:from-white/10 dark:via-white/5 dark:to-white/10 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-indigo-500/8 to-pink-500/8 rounded-full blur-2xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500/8 to-teal-500/8 rounded-full blur-2xl animate-pulse [animation-delay:4s]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-8 left-1/4 w-1 h-1 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-float-slow"></div>
        <div className="absolute top-12 right-1/3 w-1 h-1 bg-emerald-400/60 rounded-full animate-float-slower"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Enhanced Footer Content */}
          <div className="text-center">
            <div className="flex justify-center items-center">
              <div className="group relative px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105">
                
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/20 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                
                <div className="relative z-10 text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                  <span className="font-medium">© 2025 Kartik Bhalerao. Crafted with</span>
                  <Heart className="w-4 h-4 text-red-500 dark:text-red-400 animate-pulse hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">and lots of</span>
                  <Coffee className="w-5 h-5 text-amber-600 dark:text-amber-400 cursor-pointer hover:text-amber-500 dark:hover:text-amber-300 transition-all duration-300 hover:-rotate-12 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
    </footer>
  );
};
