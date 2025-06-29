
import { Linkedin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together! 🚀
          </h2>
          
          <p className="text-slate-300 mb-12 text-xl max-w-2xl mx-auto">
            Ready to discuss your next product challenge or just want to connect? I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/kartik-bhalerao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 transform shadow-2xl"
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
            
            <a
              href="/blog"
              className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 transform shadow-2xl"
            >
              <span className="text-lg">📝</span>
              <span>Read My Blog</span>
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Kartik Bhalerao. Crafted with 💙 and lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
