import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 text-slate-900 transition-colors duration-500 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_50%)] animate-pulse [animation-delay:1s]"></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl backdrop-blur-sm border border-blue-200/20 rotate-12 animate-float-slow flex items-center justify-center shadow-lg">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl flex items-center justify-center">
            <span className="text-blue-600 text-lg font-bold">👋</span>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl backdrop-blur-sm border border-purple-200/20 rotate-45 animate-float shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-sm">💡</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl backdrop-blur-sm border border-green-200/20 -rotate-12 animate-float-slower shadow-lg">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 bg-green-500/20 rounded-lg"></div>
          </div>
        </div>

        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-blue-200/30 transition-all duration-300 shadow-xl shadow-blue-500/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <img
                  src="/lovable-uploads/9fcfee71-4f00-4d9b-81a1-24e215cf0996.png"
                  alt="Kartik Bhalerao"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-slate-900 text-xl">Kartik Bhalerao</span>
                <p className="text-sm text-blue-600 font-medium">Product Manager</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group hover:bg-blue-50 px-6 py-3 rounded-xl"
                onClick={() => window.location.href = '/'}
              >
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Back to Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Modern Card-based Header */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <img
                      src="/lovable-uploads/9fcfee71-4f00-4d9b-81a1-24e215cf0996.png"
                      alt="Kartik Bhalerao"
                      className="w-full h-full rounded-2xl object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-blue-600 font-semibold text-lg">👋 Hi, I'm</span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                      Kartik Bhalerao
                    </h1>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Product Manager</h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Passionate about building user-centric products that drive real business impact through data-driven decisions and strategic thinking.
                  </p>
                </div>
              </div>

              {/* Right side - Visual Element */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-white rounded-3xl p-8 h-80 flex flex-col justify-center items-center space-y-6">
                    <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
                      <div className="h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">Strategy</span>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center">
                        <span className="text-indigo-600 font-bold text-sm">Research</span>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                        <span className="text-purple-600 font-bold text-sm">Analytics</span>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center col-span-2">
                        <span className="text-green-600 font-bold text-sm">User Experience</span>
                      </div>
                      <div className="h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-sm">MVP</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-600 font-medium">Building Products That Matter</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section Content */}
          <AboutSection />
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default About;