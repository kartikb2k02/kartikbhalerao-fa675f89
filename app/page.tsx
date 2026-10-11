import { FeaturedStory } from "@/components/FeaturedStory";
import { WorkDesk } from "@/components/WorkDesk";
import { NotebookSection } from "@/components/NotebookSection";
import { AboutStorySection } from "@/components/AboutStorySection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />

      <main className="pt-16">
        {/* The visible page opens straight on the lead story, so the only h1
            left is this one. It stays in the document for crawlers and for
            screen-reader heading navigation — without it the page's top
            heading would be an h2 about a single build, which describes the
            story rather than the site. */}
        <h1 className="sr-only">
          Kartik Bhalerao — Product Manager, AI products
        </h1>

        <FeaturedStory />
        <WorkDesk />
        <NotebookSection />
        <AboutStorySection />
      </main>

      <FooterSection />
    </div>
  );
}
