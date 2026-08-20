import { Heart, Coffee, Rss } from "lucide-react";
export const FooterSection = () => {
  return <footer className="relative bg-black dark:bg-[#0a0a0a] text-white overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/8" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative z-10 py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1.5 text-gray-300 text-sm">
              <span className="font-medium">© 2026 Kartik Bhalerao.</span>
              <span>Crafted with</span>
              <span className="relative group/heart cursor-pointer">
                <Heart className="w-4 h-4 text-red-500 animate-[heartbeat_1.2s_ease-in-out_infinite] group-hover/heart:scale-125 transition-transform" />
              </span>
              <span>& lots of</span>
              <span className="relative group/coffee cursor-pointer">
                <Coffee className="w-4 h-4 text-amber-400 group-hover/coffee:rotate-12 transition-transform" />
              </span>
            </div>
            <a
              href="/index.xml"
              className="flex items-center gap-1.5 text-gray-400 hover:text-orange-400 text-xs transition-colors"
              aria-label="RSS feed"
            >
              <Rss className="w-3.5 h-3.5" />
              <span>RSS feed</span>
            </a>
          </div>
        </div>
      </div>
    </footer>;
};