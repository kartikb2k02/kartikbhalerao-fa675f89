
import { Linkedin, Heart, Github, ExternalLink, Sparkles, Code, Palette, Target , Coffee } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white overflow-hidden border-t border-slate-700/50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-xl animate-pulse [animation-delay:4s]"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Enhanced Footer Content */}
          <div className="text-center space-y-8">
            
            {/* Main Footer Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    src="/lovable-uploads/b0e13af0-105a-4724-ad69-d72b85aaf0a1.png"
                    alt="Kartik Bhalerao"
                    className="w-full h-full rounded-2xl object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">Kartik Bhalerao</h3>
              </div>
              
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Product Manager passionate about building user-centric solutions and driving innovation through data-driven decisions.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://linkedin.com/in/kartikbhalerao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://github.com/kartikbhalerao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 hover:bg-slate-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-slate-500/25"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex justify-center items-center">
                <div className="text-slate-400 text-sm flex items-center">
                  © 2025 Kartik Bhalerao. Crafted with 
                  <Heart className="w-4 h-4 text-red-400 inline mx-1 animate-pulse" />
                  and lots of 
                  <Coffee className="w-5 h-5 text-amber-500 inline mx-1 cursor-pointer hover:text-amber-400 transition-all duration-300 hover:-rotate-12 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
