
import { Mail, Phone, MapPin, Heart, Coffee, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          Product Manager with a 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"> User-First </span>
          Mindset
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-12">
        {/* Main content - Enhanced design */}
        <div className="space-y-8">
          {/* Primary content card */}
          <div className="relative group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              {/* Main description with better typography */}
              <div className="space-y-6 mb-10">
                <p className="text-2xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  I'm a{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">
                      Product Manager
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full"></div>
                  </span>{" "}
                  with{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">
                      1+ years
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full"></div>
                  </span>{" "}
                  of hands-on experience, passionate about uncovering real customer problems and identifying unmet needs.
                </p>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  I specialize in making data-driven decisions, working closely with stakeholders, 
                  and collaborating across cross-functional teams to deliver impactful solutions that users love.
                </p>
              </div>
              
              {/* Enhanced badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="group/badge flex items-center space-x-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 px-5 py-3 rounded-full border border-amber-200/50 dark:border-amber-700/30 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-sm group-hover/badge:scale-110 transition-transform duration-300">
                    <Coffee className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-amber-700 dark:text-amber-300 font-medium text-sm">Coffee Enthusiast</span>
                </div>
                
                <div className="group/badge flex items-center space-x-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 px-5 py-3 rounded-full border border-red-200/50 dark:border-red-700/30 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-sm group-hover/badge:scale-110 transition-transform duration-300">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-red-700 dark:text-red-300 font-medium text-sm">User Advocate</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
