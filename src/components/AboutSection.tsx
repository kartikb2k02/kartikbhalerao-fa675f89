
import { Mail, Phone, MapPin, Heart, Coffee, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 font-medium text-sm mb-8">
          <Target className="w-4 h-4" />
          <span>About Me</span>
        </div>
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
              {/* Main description with better typography */}
              <div className="space-y-6 mb-10">
                <p className="text-2xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                  I'm a{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">
                      Product Manager
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full"></div>
                  </span>{" "}
                  with{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">
                      1+ years
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full"></div>
                  </span>{" "}
                  of hands-on experience, passionate about uncovering real customer problems and identifying unmet needs.
                </p>
                
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  I specialize in making data-driven decisions, working closely with stakeholders, 
                  and collaborating across cross-functional teams to deliver impactful solutions that users love.
                </p>
              </div>
              
              {/* Enhanced badges */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="group/badge flex items-center space-x-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 px-5 py-3 rounded-full border border-amber-200/50 dark:border-amber-700/30 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-sm group-hover/badge:scale-110 transition-transform duration-300">
                    <Coffee className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-amber-700 dark:text-amber-300 font-medium text-sm">Coffee Enthusiast</span>
                </div>
                
                <div className="group/badge flex items-center space-x-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 px-5 py-3 rounded-full border border-red-200/50 dark:border-red-700/30 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-sm group-hover/badge:scale-110 transition-transform duration-300">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-red-700 dark:text-red-300 font-medium text-sm">User Advocate</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Secondary content card - Enhanced */}
          <div className="relative group bg-gradient-to-br from-blue-50/80 via-indigo-50/80 to-purple-50/80 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 backdrop-blur-xl border border-blue-200/50 dark:border-blue-700/40 rounded-2xl p-8 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-600/20 dark:to-purple-600/20 rounded-full blur-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center space-x-2">
                <span>When I'm not building products...</span>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                You'll find me exploring new technologies or experimenting with the latest design tools. I believe great products 
                are born from the perfect blend of{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">empathy</span>, {" "}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">data</span>, and{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">relentless curiosity</span>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact cards - Modern horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Let's discuss your next product</p>
                <div className="pt-2">
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline break-all">
                    Kartikbhalerao948@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-400/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all duration-300 group-hover:scale-110">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Phone</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Available for quick calls</p>
                <div className="pt-2">
                  <p className="text-green-600 dark:text-green-400 font-semibold text-lg hover:underline">
                    +91 9561438502
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/20 transition-all duration-500 hover:-translate-y-1 cursor-pointer">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Location</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Based in India</p>
                <div className="pt-2">
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
