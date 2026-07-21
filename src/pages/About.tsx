import { AboutSection } from "@/components/AboutSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">
      <SEO
        title="About"
        description="About Kartik Bhalerao — a Product Manager focused on building customer-centric products, driving growth through data-driven decisions, and crafting AI-powered product strategies."
        path="/about"
      />

      {/* Header */}
      <Header />

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* About Me Header */}
          <div className="text-center mb-16 space-y-3">
            <span className="label-mono text-[13px] text-black/50 dark:text-white/50">About</span>
            <h1 className="heading-display text-[42px] sm:text-[56px] leading-none text-black dark:text-white">
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

