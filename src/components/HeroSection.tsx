
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="text-center py-16 animate-fade-in">
      <div className="relative inline-block mb-8">
        <img
          src="/lovable-uploads/3c59e842-8e07-4b56-8918-3fedc5f8a4e0.png"
          alt="Kartik Bhalerao"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto shadow-xl border-4 border-blue-200 hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
          🎯
        </div>
      </div>
      
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
        Kartik Bhalerao
      </h1>
      
      <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
        Associate Product Manager
      </h2>
      
      <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
        Building Products That Customers Truly Love 💙
      </p>
      
      <div className="flex justify-center items-center space-x-6 mb-12">
        <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <span className="text-2xl">🧠</span>
          <span className="text-gray-700 font-medium">Strategic Thinker</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <span className="text-2xl">📊</span>
          <span className="text-gray-700 font-medium">Data-Driven</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <span className="text-2xl">🚀</span>
          <span className="text-gray-700 font-medium">Innovation-Focused</span>
        </div>
      </div>
      
      <ArrowDown className="w-6 h-6 text-blue-500 mx-auto animate-bounce" />
    </section>
  );
};
