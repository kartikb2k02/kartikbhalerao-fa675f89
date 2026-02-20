import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
      {/* Dotted background — same as home page */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(100 116 139 / 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Header */}
      <Header />

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* About Me Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              About <span className="animate-gradient-text">Me</span>
            </h1>
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

