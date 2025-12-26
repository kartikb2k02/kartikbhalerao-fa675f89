import { Heart, Coffee, Linkedin, Mail, ArrowUp } from "lucide-react";

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden border-t border-gray-200/50 dark:border-gray-800/50">
      
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),transparent)]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.1),transparent)] dark:bg-[radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.05),transparent)]"></div>
      </div>

      {/* Geometric accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-12 left-1/4 w-24 h-24 border border-blue-200/30 dark:border-blue-800/30 rounded-full"></div>
        <div className="absolute -bottom-8 right-1/3 w-16 h-16 border border-purple-200/30 dark:border-purple-800/30 rounded-full"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 border border-emerald-200/20 dark:border-emerald-800/20 rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Top section with brand and links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
            
            {/* Brand section */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                KB
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs text-center md:text-left">
                Building products that matter
              </p>
            </div>

            {/* Quick links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com/in/kartik-bhalerao" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://medium.com/@kartikbhalerao948" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/10"
              >
                <div className="w-5 h-5 bg-gray-700 dark:bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors">
                  <span className="text-white dark:text-gray-900 text-[10px] font-bold">M</span>
                </div>
              </a>
              <a 
                href="mailto:kartikbhalerao948@gmail.com"
                className="group relative p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
              </a>
            </div>

            {/* Scroll to top */}
            <button 
              onClick={scrollToTop}
              className="group p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </button>
          </div>

          {/* Divider */}
          <div className="relative h-px mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent blur-sm"></div>
          </div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>© 2025 Kartik Bhalerao</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                Made with 
                <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse" /> 
                & 
                <Coffee className="w-3.5 h-3.5 text-amber-500" />
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
                Product Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
