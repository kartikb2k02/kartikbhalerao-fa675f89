import { StoryLead } from "@/components/StoryLead";
import { NotebookSection } from "@/components/NotebookSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <StoryLead />
        <NotebookSection />
      </main>

      <FooterSection />
    </div>
  );
}
