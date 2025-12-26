import { Heart, Coffee, Sparkles } from "lucide-react";
export const FooterSection = () => {
  return <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden border-t border-gray-700/50">
      
      {/* Animated wave pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-24 opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z" className="fill-primary animate-[wave_8s_ease-in-out_infinite]" />
          <path d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,40 L1200,120 L0,120 Z" className="fill-primary/50 animate-[wave_12s_ease-in-out_infinite_reverse]" />
        </svg>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-4 left-[10%] w-2 h-2 bg-primary/60 rounded-full animate-[float_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-8 left-[30%] w-1.5 h-1.5 bg-primary/40 rounded-full animate-[float_5s_ease-in-out_infinite_0.5s]" />
        <div className="absolute bottom-6 right-[25%] w-2.5 h-2.5 bg-primary/50 rounded-full animate-[float_6s_ease-in-out_infinite_1s]" />
        <div className="absolute bottom-10 right-[10%] w-1 h-1 bg-primary/70 rounded-full animate-[float_4.5s_ease-in-out_infinite_1.5s]" />
      </div>

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4">
            
            {/* Animated divider */}
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            {/* Main content with glass card */}
            <div className="group relative px-8 py-5 bg-gray-800/80 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)] border border-gray-600/50">
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
              
              <div className="relative z-10 flex items-center gap-3 text-gray-300">
                <span className="text-sm font-medium">© 2026 Kartik Bhalerao</span>
                <span className="text-gray-500">•</span>
                <span className="text-sm flex items-center gap-2">
                  Crafted with
                  <span className="relative group/heart cursor-pointer">
                    <Heart className="w-4 h-4 text-red-500 animate-[heartbeat_1.2s_ease-in-out_infinite] group-hover/heart:scale-150 transition-transform" />
                    <Heart className="absolute inset-0 w-4 h-4 text-red-400/50 animate-[ping_1.5s_ease-out_infinite]" />
                  </span>
                  &
                  <span className="relative group/coffee cursor-pointer">
                    <Coffee className="w-4 h-4 text-amber-400 group-hover/coffee:rotate-[20deg] group-hover/coffee:scale-125 transition-all duration-300" />
                    <span className="absolute -top-1 left-1/2 w-1 h-1 bg-amber-300/80 rounded-full animate-[steam_2s_ease-out_infinite] opacity-0 group-hover/coffee:opacity-100" />
                    <span className="absolute -top-1.5 left-1/3 w-0.5 h-0.5 bg-amber-200/60 rounded-full animate-[steam_2.5s_ease-out_infinite_0.3s] opacity-0 group-hover/coffee:opacity-100" />
                  </span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>;
};