import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
      {/* Unified Animated Background */}
      <AnimatedBackground intensity="medium" />

      {/* Header */}
      <Header />

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* About Me Header */}
          <div className="text-center mb-20">
            <div className="relative inline-flex items-center gap-3 bg-primary/10 px-8 py-4 rounded-2xl text-primary font-medium text-base mb-8 shadow-xl backdrop-blur-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-primary/20">
              <span className="text-xl animate-bounce">👋</span>
              <span>About Me</span>
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

