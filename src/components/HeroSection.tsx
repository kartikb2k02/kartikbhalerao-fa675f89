import { ArrowDown, Target, Briefcase, TrendingUp, Users, BarChart3, Lightbulb } from "lucide-react";

export const HeroSection = () => {
  const scrollToCaseStudies = () => {
    const caseStudiesSection = document.getElementById('case-studies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-8 py-20 relative">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Enhanced Profile Image with PM-focused styling */}
        <div className="relative inline-block mb-8">
          <div className="relative">
            <div className="w-52 h-52 sm:w-60 sm:h-60 mx-auto relative">
              <img
                src="/lovable-uploads/3c59e842-8e07-4b56-8918-3fedc5f8a4e0.png"
                alt="Kartik Bhalerao - Associate Product Manager"
                className="w-full h-full rounded-full shadow-2xl border-4 border-white dark:border-slate-800 hover:scale-105 transition-all duration-500 object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-xl"></div>
            </div>
          </div>
          
          {/* PM Badge */}
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-2xl shadow-xl animate-bounce">
            <Briefcase className="w-6 h-6" />
          </div>
          
          {/* Floating metrics */}
          <div className="absolute -top-4 -left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-xl p-3 shadow-lg animate-float">
            <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          
          <div className="absolute -top-2 -right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30 rounded-xl p-3 shadow-lg animate-float-slow">
            <Lightbulb className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        
        {/* Enhanced Main Content Card */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 border border-white/30 dark:border-slate-700/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-500">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
                Kartik Bhalerao
              </h1>
              
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-400/10 dark:to-indigo-400/10 px-4 py-2 rounded-full border border-blue-200/30 dark:border-blue-700/30">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Product Manager</span>
                </div>
              </div>
              
              <h2 className="text-2xl sm:text-4xl text-blue-600 dark:text-blue-400 font-bold mb-4">
                Associate Product Manager
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
                onClick={scrollToCaseStudies}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-3"
              >
                <span>View My Work</span>
                <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Key Metrics with PM focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 rounded-2xl p-8 text-center hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 group hover:-translate-y-3 shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20">
            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 dark:from-blue-400/20 dark:to-indigo-400/20 rounded-2xl p-4 mb-4 mx-auto w-fit">
              <TrendingUp className="w-8 h-8 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">1+</div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Years in Product</p>
          </div>
          
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 rounded-2xl p-8 text-center hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 group hover:-translate-y-3 shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 dark:from-indigo-400/20 dark:to-purple-400/20 rounded-2xl p-4 mb-4 mx-auto w-fit">
              <Target className="w-8 h-8 text-indigo-500 dark:text-indigo-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">2+</div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">Products Managed</p>
          </div>
          
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/40 dark:border-slate-700/40 rounded-2xl p-8 text-center hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 group hover:-translate-y-3 shadow-xl shadow-purple-500/10 hover:shadow-purple-500/20">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-400/20 dark:to-pink-400/20 rounded-2xl p-4 mb-4 mx-auto w-fit">
              <Users className="w-8 h-8 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">25+</div>
            <p className="text-slate-600 dark:text-slate-300 font-medium">User Interviews</p>
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
