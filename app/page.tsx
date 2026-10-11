import { StoryLead } from "@/components/StoryLead";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <StoryLead />
      </main>

      <FooterSection />
    </div>
  );
}
