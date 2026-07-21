import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { SEO } from "@/components/SEO";

const CaseStudies = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">
      <SEO
        title="Builds"
        description="Real-world products built from discovery to launch — strategy, design, and execution. Case studies and PRDs by Product Manager Kartik Bhalerao."
        path="/builds"
      />

      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <div className="py-20">
            <CaseStudiesSection />
          </div>
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default CaseStudies;
