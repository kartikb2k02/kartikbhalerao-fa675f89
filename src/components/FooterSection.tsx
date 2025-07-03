
import { Linkedin, Heart, Github, ExternalLink, Sparkles, Code, Palette, Target } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-xl animate-pulse [animation-delay:4s]"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="relative z-10 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Main Content - Centered Design */}
          <div className="text-center space-y-12">
            
            {/* Header Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Kartik Bhalerao
                </h2>
                <Sparkles className="w-8 h-8 text-purple-400 animate-pulse [animation-delay:1s]" />
              </div>
              
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-medium text-slate-200">Available for new opportunities</span>
              </div>
            </div>

            {/* Skills Icons */}
            <div className="flex justify-center items-center gap-8 py-8">
              {[
                { icon: Target, color: "from-blue-400 to-blue-600", label: "Strategy" },
                { icon: Palette, color: "from-purple-400 to-purple-600", label: "Design" },
                { icon: Code, color: "from-green-400 to-green-600", label: "Technical" },
              ].map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={index} className="group cursor-pointer">
                    <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-xs text-slate-400 mt-2 group-hover:text-white transition-colors">{skill.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6">
              <a 
                href="https://linkedin.com/in/kartik-bhalerao" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 font-medium">LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
              
              <a 
                href="https://github.com/kartik-bhalerao" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Github className="w-6 h-6 text-slate-300 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Bottom Section */}
            <div className="pt-12 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-400 text-sm">
                  © 2024 Kartik Bhalerao. Crafted with 
                  <Heart className="w-4 h-4 text-red-400 inline mx-1" />
                  and modern technology.
                </div>
                
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Built with React</span>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  <span>Powered by Tailwind CSS</span>
                  <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                  <span>Hosted on Lovable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
