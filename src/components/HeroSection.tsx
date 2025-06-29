
import { ArrowDown, Target } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile Image */}
        <div className="relative inline-block mb-8">
          <img
            src="/lovable-uploads/3c59e842-8e07-4b56-8918-3fedc5f8a4e0.png"
            alt="Kartik Bhalerao"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto shadow-2xl border-4 border-blue-400 hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-3 -right-3 bg-blue-500 text-white p-3 rounded-full shadow-xl">
            <Target className="w-6 h-6" />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight">
            Kartik Bhalerao
          </h1>
          
          <h2 className="text-2xl sm:text-3xl text-blue-400 font-medium">
            Associate Product Manager
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Building Products That Customers Truly Love
          </p>
        </div>
        
        {/* Key Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-semibold text-white mb-2">Strategic Thinker</h3>
            <p className="text-slate-300 text-sm">Data-driven product decisions</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Analytics-Focused</h3>
            <p className="text-slate-300 text-sm">User-centric approach</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">Innovation-Driven</h3>
            <p className="text-slate-300 text-sm">Continuous improvement mindset</p>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-20">
          <ArrowDown className="w-8 h-8 text-blue-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};
