import { Heart, Coffee } from "lucide-react";
export const FooterSection = () => {
  return <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden border-t border-gray-700/50">
      
      {/* Dark glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/40 via-gray-900/20 to-gray-800/40 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-600/15 to-blue-600/15 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-indigo-600/15 to-violet-600/15 rounded-full blur-2xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-cyan-600/15 to-teal-600/15 rounded-full blur-2xl animate-pulse [animation-delay:4s]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-8 left-1/4 w-1 h-1 bg-purple-400/80 rounded-full animate-float"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-blue-400/80 rounded-full animate-float-slow"></div>
        <div className="absolute top-12 right-1/3 w-1 h-1 bg-cyan-400/80 rounded-full animate-float-slower"></div>
      </div>

      {/* Dark Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,193,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,193,0.08)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]"></div>

      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Enhanced Footer Content */}
          <div className="text-center">
            <div className="flex justify-center items-center">
              <div className="group relative px-8 py-4 rounded-2xl transition-all duration-500 hover:scale-105">
                
                {/* Dark glass background */}
                <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-600/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Dark glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700"></div>
                
                <div className="relative z-10 text-gray-300 text-sm flex items-center gap-2">
                  <span className="font-medium">© 2026 Kartik Bhalerao. Crafted with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">and lots of</span>
                  <Coffee className="w-5 h-5 text-amber-400 cursor-pointer hover:text-amber-300 transition-all duration-300 hover:-rotate-12 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced dark bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
    </footer>;
};