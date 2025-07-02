
import { Mail, Phone, MapPin, Heart, Coffee, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          Product Manager with a 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"> User-First </span>
          Mindset
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-12">
        {/* Main content - Enhanced design */}
        <div className="space-y-8">
          {/* Primary content card */}
          <div className="relative group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="space-y-6 mb-10">
                <p className="text-2xl text-slate-800 leading-relaxed font-medium">
                  Hi there! 👋 I'm{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">
                      Kartik Bhalerao
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full"></div>
                  </span>
                  , a Product Manager passionate about building user-centric products that drive real business impact. With a background in data analytics and product strategy, I specialize in translating complex problems into simple, scalable solutions.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  My experience spans across fintech, SaaS, and AI-enabled platforms, where I've led cross-functional teams through the entire product lifecycle—from discovery to launch. I'm a strong advocate of hypothesis-driven development and love using data, user insights, and rapid experimentation (A/B testing, MVPs) to inform product decisions.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Beyond product building, I document my thought process, case studies, and learnings through detailed blogs and product breakdowns. I'm also exploring the intersection of AI and product management to build smarter tools that empower PMs and teams.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  If you're equally obsessed with building meaningful products or just want to talk product, let's connect—I'm always up for great conversations!
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
