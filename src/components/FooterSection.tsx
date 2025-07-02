
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
