
import { Linkedin, Heart, Mail, MapPin, ExternalLink } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left - About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Kartik Bhalerao</h2>
            <p className="text-slate-300 leading-relaxed">
              Senior Product Manager passionate about building products 
              that solve real problems and create meaningful impact for 
              users and businesses.
            </p>
          </div>
          
          {/* Center - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <a href="/about" className="text-slate-300 hover:text-white transition-colors">About Me</a>
              <a href="#case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</a>
              <a href="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</a>
            </div>
          </div>
          
          {/* Right - Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">kartik@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300">Mumbai, India</span>
              </div>
              <span className="text-slate-300">Available for opportunities</span>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <a href="mailto:kartik@example.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/kartik-bhalerao" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-slate-400 text-sm">
              © 2024 Kartik Bhalerao. All rights reserved. Built with React and Tailwind CSS.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
