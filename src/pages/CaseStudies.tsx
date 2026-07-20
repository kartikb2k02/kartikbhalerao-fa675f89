import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

const CaseStudies = () => {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-white dark:bg-black">

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
