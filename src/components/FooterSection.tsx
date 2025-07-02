
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
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Let's Build Something 
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Extraordinary </span>
            Together
          </h2>
          
          <p className="text-slate-300 mb-12 text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate about product innovation and user-centric solutions. Always open to discussing new opportunities, 
            collaborations, and exciting product challenges.
          </p>
          
          {/* Enhanced Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kartik-bhalerao/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Connect</h3>
              <p className="text-slate-300 text-sm">Let's connect on LinkedIn</p>
              <ExternalLink className="w-4 h-4 text-blue-400 mx-auto mt-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Email */}
            <a
              href="mailto:kartikbhalerao29@gmail.com"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
              <p className="text-slate-300 text-sm">kartikbhalerao29@gmail.com</p>
              <ExternalLink className="w-4 h-4 text-emerald-400 mx-auto mt-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Location */}
            <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-xl mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
              <p className="text-slate-300 text-sm">Mumbai, India</p>
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
