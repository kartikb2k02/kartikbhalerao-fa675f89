import { ArrowDown, Target, Briefcase, TrendingUp, Users, BarChart3, Lightbulb } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-8 py-20 relative">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Enhanced Main Content Card */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 border border-white/30 dark:border-slate-700/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-500">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                Kartik Bhalerao
              </h1>
              
              
              <h2 className="text-2xl sm:text-4xl text-blue-600 font-bold mb-4">
                Product Manager
              </h2>
            </div>
            
            <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transforming user insights into product solutions that drive business growth through 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> data-driven decision making</span> and 
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> strategic thinking</span>
            </p>
            
            {/* Single CTA Button */}
            <div className="flex justify-center pt-6">
              <button 
                onClick={scrollToAbout}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <span>About Me</span>
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        
        {/* Enhanced Scroll Indicator */}
        <div className="pt-12">
          <div className="flex flex-col items-center space-y-3 animate-bounce">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/30 dark:border-slate-700/30">
              Explore my journey
            </span>
            <ArrowDown className="w-6 h-6 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
