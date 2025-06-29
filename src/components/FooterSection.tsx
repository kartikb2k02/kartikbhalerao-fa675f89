
import { Linkedin, Mail, MapPin, Code, Heart } from "lucide-react";

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
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/20 dark:border-blue-700/20 mb-6">
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-semibold text-sm">Let's Connect</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Build Something 
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Amazing?</span>
          </h2>
          
          <p className="text-slate-300 mb-12 text-xl max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss product challenges, share insights, or explore new opportunities. 
            Let's create impactful solutions together.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <a
              href="https://www.linkedin.com/in/kartik-bhalerao/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl backdrop-blur-sm"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Connect on LinkedIn</span>
            </a>
            
            <a
              href="/blog"
              className="group inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl"
            >
              <Code className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Read My Blog</span>
            </a>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-3 w-fit mx-auto mb-4">
              <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-slate-300 text-sm">Available for opportunities</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-3 w-fit mx-auto mb-4">
              <MapPin className="w-6 h-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-slate-300 text-sm">Open to remote work</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-3 w-fit mx-auto mb-4">
              <Linkedin className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-white font-semibold mb-2">Social</h3>
            <p className="text-slate-300 text-sm">Let's network & share ideas</p>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">KB</span>
              </div>
              <div>
                <span className="font-bold text-white text-lg">Kartik Bhalerao</span>
                <p className="text-xs text-blue-400 font-medium">Associate Product Manager</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© 2024 Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <span className="text-lg">☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
