
import { ArrowDown, Target, Briefcase, TrendingUp, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-8 py-20 relative">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Profile Image with enhanced styling */}
        <div className="relative inline-block mb-8">
          <div className="relative">
            <img
              src="/lovable-uploads/3c59e842-8e07-4b56-8918-3fedc5f8a4e0.png"
              alt="Kartik Bhalerao"
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto shadow-2xl border-4 border-white dark:border-slate-800 hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl"></div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-xl animate-bounce">
            <Target className="w-5 h-5" />
          </div>
        </div>
        
        {/* Main Content Card */}
        <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-12 border border-white/20 dark:border-slate-700/20 shadow-2xl shadow-blue-500/10">
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl sm:text-8xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
                Kartik Bhalerao
              </h1>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400 font-semibold">
                  Associate Product Manager
                </h2>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Transforming user insights into product solutions that drive business growth
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                View My Work
              </button>
              <button className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1">
                Download Resume
              </button>
            </div>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 text-center hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2">
            <TrendingUp className="w-8 h-8 text-blue-500 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">1+</div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Years Experience</p>
          </div>
          
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 text-center hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2">
            <Briefcase className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">2+</div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Products Managed</p>
          </div>
          
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 text-center hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all duration-300 group hover:-translate-y-2">
            <Users className="w-8 h-8 text-purple-500 dark:text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">25+</div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">User Interviews</p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="pt-12">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 text-blue-500 dark:text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};
