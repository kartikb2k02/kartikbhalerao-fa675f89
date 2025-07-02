
import { Linkedin, Heart, Mail, MapPin, ExternalLink } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-300 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Interactive Footer Content */}
        <div className="text-center mb-16">
          {/* Animated Social Link */}
          <div className="flex justify-center mb-12">
            <a
              href="https://www.linkedin.com/in/kartik-bhalerao/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-110 transform"
            >
              {/* Animated background pulse */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              
              {/* LinkedIn icon with rotation */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              
              {/* Animated text */}
              <div className="relative z-10 mt-4">
                <h3 className="text-white font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                  Connect on LinkedIn
                </h3>
                <p className="text-blue-100 text-sm mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  Let's build something together
                </p>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Interactive Contact Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12">
            {/* Email with hover animation */}
            <a 
              href="mailto:kartikbhalerao29@gmail.com"
              className="group flex items-center space-x-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors duration-300">
                <Mail className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors duration-300">kartikbhalerao29@gmail.com</span>
            </a>
            
            {/* Location with pulse animation */}
            <div className="group flex items-center space-x-3 px-6 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="p-2 bg-purple-500/20 rounded-lg group-hover:animate-pulse">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors duration-300">Mumbai, India</span>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="/lovable-uploads/9fcfee71-4f00-4d9b-81a1-24e215cf0996.png"
                  alt="Kartik Bhalerao"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Kartik Bhalerao</span>
                <p className="text-xs text-blue-400 font-medium">Product Manager</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© 2025 Designed with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and endless</span>
              <span className="text-lg">☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
