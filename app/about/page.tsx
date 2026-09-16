import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Kartik Bhalerao — a Product Manager focused on building customer-centric products, driving growth through data-driven decisions, and crafting AI-powered product strategies. Explore capabilities across product strategy, analytics, UX, and technical leadership.",
  path: "/about",
});

export default function About() {
  return (
    <div className="min-h-screen w-full text-foreground relative bg-background">
      <Header />

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="text-center mb-16 space-y-3">
            <span className="label-mono text-[13px] text-black/50 dark:text-white/50">About</span>
            <h1 className="heading-display text-[42px] sm:text-[56px] leading-none text-black dark:text-white">
              About Me
            </h1>
          </div>

          <AboutSection />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
          <SkillsSection />

          {/* Call to Action */}
          <div className="text-center mt-20 pt-16 border-t border-black/10 dark:border-white/10 space-y-5">
            <p className="text-[15px] text-black/40 dark:text-white/40">
              Want to discuss product, ideas, or opportunities?
            </p>
            <a
              href="https://www.linkedin.com/in/kartik-bhalerao/"
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono inline-block px-7 py-3 text-[13px] bg-foreground text-white dark:text-black hover:opacity-80 transition-opacity duration-200"
            >
              Let's Talk
            </a>
          </div>
        </div>

        <FooterSection />
      </div>
    </div>
  );
}
