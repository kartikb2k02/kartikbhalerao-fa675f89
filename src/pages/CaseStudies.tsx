import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">

      {/* Dotted background — same as home page */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgb(100 116 139 / 0.2) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
            <CaseStudiesSection />
          </div>
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default CaseStudies;
