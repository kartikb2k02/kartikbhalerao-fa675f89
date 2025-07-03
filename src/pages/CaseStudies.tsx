import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <CaseStudiesSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default CaseStudies;