
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Main content */}
        <div className="space-y-8">
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Product Manager</span> with <span className="text-blue-600 dark:text-blue-400 font-semibold">1+ years</span> of hands-on experience, 
              passionate about uncovering real customer problems and identifying unmet needs.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              I specialize in making data-driven decisions, working closely with stakeholders, 
              and collaborating across cross-functional teams to deliver impactful solutions that users love.
            </p>
            
            <div className="flex items-center space-x-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <Coffee className="w-5 h-5 text-amber-500" />
                <span className="text-sm">Coffee Enthusiast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm">User Advocate</span>
              </div>
            </div>
          </div>
          
          {/* Personal touch with updated text */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-sm border border-blue-200/30 dark:border-blue-700/30 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">When I'm not building products...</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              You'll find me exploring new technologies 
              or experimenting with the latest design tools. I believe great products 
              are born from the perfect blend of empathy, data, and relentless curiosity.
            </p>
          </div>
        </div>
        
        {/* Contact cards */}
        <div className="space-y-6">
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
