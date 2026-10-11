import { StoryLead } from "@/components/StoryLead";
import { WorkDesk } from "@/components/WorkDesk";
import { NotebookSection } from "@/components/NotebookSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <StoryLead />
        <WorkDesk />
        <NotebookSection />
      </main>

      <FooterSection />
    </div>
  );
}
