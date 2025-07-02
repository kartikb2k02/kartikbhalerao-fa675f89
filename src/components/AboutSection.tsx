
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
        {/* Main content */}
        <div className="space-y-8">
...
        </div>
        
        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Email</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Let's discuss your next product</p>
              </div>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium break-all hover:underline cursor-pointer transition-colors">
              Kartikbhalerao948@gmail.com
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Phone</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Available for quick calls</p>
              </div>
            </div>
            <p className="text-green-600 dark:text-green-400 font-medium hover:underline cursor-pointer transition-colors">
              +91 9561438502
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-lg">Location</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Based in India</p>
              </div>
            </div>
            <p className="text-purple-600 dark:text-purple-400 font-medium">
              Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
