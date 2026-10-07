import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Kartik Bhalerao, a Product Manager focused on building customer-centric products, driving growth through data-driven decisions, and crafting AI-powered product strategies. Explore capabilities across product strategy, analytics, UX, and technical leadership.",
  path: "/about",
});

export default function About() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <PageHeader
          label="About"
          title={
            <>
              The long version<span className="text-primary">.</span>
            </>
          }
          lede="Where I've worked, what I actually do there, and the notes I'd write in the margin if this were on paper."
          meta="Product Manager · Pune, India"
          container="max-w-[94rem]"
        />

        <div className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <AboutSection />

          {/* 06 Tools */}
          <section className="border-t border-border py-12 sm:py-16">
            <Reveal>
              <div className="flex items-baseline gap-4 mb-5">
                <span className="data-mono text-[11px] text-primary">06</span>
                <span className="label-mono text-[10px] text-muted-foreground">
                  Tools
                </span>
              </div>
            </Reveal>
            <SkillsSection />
          </section>

          {/* Close */}
          <section className="border-t border-border py-14 sm:py-20">
            <Reveal>
              <h2
                className="heading-display text-foreground leading-[1.04] mb-6"
                style={{ fontSize: "clamp(28px, 4.2vw, 50px)" }}
              >
                Want to talk product<span className="text-primary">?</span>
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="label-mono inline-flex items-center gap-2.5 h-[52px] px-7 text-[11px] bg-foreground text-background hover:bg-primary transition-colors duration-200"
                >
                  Get in touch
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://www.linkedin.com/in/kartik-bhalerao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-2.5 h-[52px] px-7 text-[11px] border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
