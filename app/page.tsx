import { Masthead } from "@/components/Masthead";
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
        <Masthead />
        <FeaturedStory />
        <WorkDesk />
        <NotebookSection />
        <AboutStorySection />
      </main>

      <FooterSection />
    </div>
  );
}
