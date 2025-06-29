
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero with background image */}
      <div 
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1920&h=1080&fit=crop')"
        }}
      >
        <HeroSection />
      </div>

      {/* Main content with alternating backgrounds */}
      <div className="space-y-0">
        {/* About Section */}
        <div 
          className="relative py-24 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.95), rgba(30, 41, 59, 0.95)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AboutSection />
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-slate-800 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ExperienceSection />
          </div>
        </div>

        {/* Case Studies Section */}
        <div 
          className="relative py-24 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-slate-800 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SkillsSection />
          </div>
        </div>

        {/* Certifications Section */}
        <div 
          className="relative py-24 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(rgba(30, 41, 59, 0.95), rgba(30, 41, 59, 0.95)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <CertificationsSection />
          </div>
        </div>

        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
