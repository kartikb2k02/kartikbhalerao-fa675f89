import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
      <Header />
      <main className="pt-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore my product management journey through detailed case studies showcasing 
              user-centered solutions and data-driven decision making.
            </p>
          </div>
          <CaseStudiesSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default CaseStudies;