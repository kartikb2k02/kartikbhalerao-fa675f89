
import { Linkedin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Let's Build Something Amazing Together! 🚀
        </h2>
        
        <p className="text-emerald-100 mb-8 text-lg">
          Ready to discuss your next product challenge or just want to connect? I'd love to hear from you.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <a
            href="https://linkedin.com/in/kartikbhalerao"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-200 hover:scale-105 transform"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </a>
          
          <a
            href="https://kartik-pm-blog.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-400 transition-colors duration-200 border-2 border-white hover:scale-105 transform"
          >
            <span className="text-lg">📝</span>
            <span>Read My Blog</span>
          </a>
        </div>
        
        <div className="border-t border-emerald-500 pt-6">
          <p className="text-emerald-200 text-sm">
            © 2024 Kartik Bhalerao. Crafted with 💚 and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};
