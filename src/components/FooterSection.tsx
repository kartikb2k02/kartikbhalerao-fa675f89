import { Heart, Coffee } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5" />
      
      {/* Animated accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-gray-300 text-sm">
              <span className="font-medium">© 2026 Kartik Bhalerao.</span>
              <span>Crafted with</span>
              <span className="relative group/heart cursor-pointer">
                <Heart className="w-4 h-4 text-red-500 animate-[heartbeat_1.2s_ease-in-out_infinite] group-hover/heart:scale-125 transition-transform" />
              </span>
              <span>&</span>
              <span className="relative group/coffee cursor-pointer">
                <Coffee className="w-4 h-4 text-amber-400 group-hover/coffee:rotate-12 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};