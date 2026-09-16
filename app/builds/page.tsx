import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Builds",
  description:
    "Real-world products built from discovery to launch — strategy, design, and execution. Case studies and PRDs by Product Manager Kartik Bhalerao.",
  path: "/builds",
});

export default function CaseStudies() {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-background">
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
}
