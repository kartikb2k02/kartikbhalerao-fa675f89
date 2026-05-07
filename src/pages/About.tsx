import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-[#FEFDF9] dark:bg-[#111111]">

      {/* Header */}
      <Header />

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* About Me Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-5">
              <span className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-black/30 dark:to-white/30" />
              <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">About</span>
              <span className="w-16 h-[1.5px] bg-gradient-to-l from-transparent to-black/30 dark:to-white/30" />
            </div>
            <h1 className="text-[42px] sm:text-[56px] font-black tracking-tight text-black dark:text-white leading-none">
              About Me
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

