import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { FooterSection } from "@/components/FooterSection";
import { Header } from "@/components/Header";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Highlighter } from "@/components/magicui/highlighter";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "About Kartik Bhalerao, a Product Manager focused on building customer-centric products, driving growth through data-driven decisions, and crafting AI-powered product strategies. Explore capabilities across product strategy, analytics, UX, and technical leadership.",
  path: "/about",
});

const NEXT_STOPS = [
  {
    title: "The builds",
    note: "The AI tooling I wanted as a PM, built and still running. Each one says what it is for and what broke.",
    href: "/builds",
    target: "/builds",
  },
  {
    title: "The writing",
    note: "Longer arguments with the reasoning left in — prompt, context and harness engineering, and what I got wrong.",
    href: "/blog",
    target: "/blog",
  },
  {
    title: "LinkedIn",
    note: "Where I post what I am building, and the shorter version of most of this.",
    href: "https://www.linkedin.com/in/kartik-bhalerao/",
    target: "External",
  },
];

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
          lede={
            <>
              Where I&apos;ve worked, what I actually do there, and{" "}
              <Highlighter action="highlight" padding={3}>
                the notes I&apos;d write in the margin
              </Highlighter>{" "}
              if this were on paper.
            </>
          }
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

          {/* Close: the end of the document should route somewhere, not stop */}
          <section className="border-t border-border py-14 sm:py-20">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-8">
              <Reveal className="min-w-0">
                <p className="label-mono text-[10px] text-muted-foreground flex items-center gap-2.5 mb-6">
                  <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
                  End of the long version
                </p>
                <h2
                  className="heading-display text-foreground leading-[1.04]"
                  style={{ fontSize: "clamp(30px, 5vw, 62px)" }}
                >
                  Want to talk product<span className="text-primary">?</span>
                </h2>
                <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-[1.6] max-w-[52ch] mt-5">
                  Product roles, AI product work, or an argument about what to
                  cut from the roadmap. Send a note and I will come back to you.
                </p>
              </Reveal>

              <Reveal delay={90}>
                <p className="data-mono text-[11px] text-muted-foreground/70">
                  Pune, India · usually replies within a day
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group label-mono inline-flex items-center gap-2.5 h-[52px] px-7 text-[11px] bg-foreground text-background hover:bg-primary transition-colors duration-200"
                >
                  Get in touch
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/contact#book"
                  className="label-mono inline-flex items-center gap-2.5 h-[52px] px-7 text-[11px] border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  Book a call
                  <Calendar className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Reveal>

            {/* Or keep reading — the rest of the site, indexed like everything else */}
            <p className="label-mono text-[10px] text-muted-foreground/60 mt-14 mb-1">
              Or keep going
            </p>

            <div className="border-t border-border">
              {NEXT_STOPS.map((stop, i) => {
                const external = stop.href.startsWith("http");
                const Row = external ? "a" : Link;
                return (
                  <Reveal key={stop.href} delay={i * 70}>
                    <Row
                      href={stop.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="index-row group grid sm:grid-cols-[88px_1fr_auto] gap-1 sm:gap-8 items-baseline py-5"
                    >
                      <span className="data-mono text-[12px] text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[17px] sm:text-[19px] text-foreground group-hover:text-primary transition-colors duration-200">
                          {stop.title}
                        </span>
                        <span className="block text-[14.5px] text-muted-foreground leading-[1.55] mt-1.5 max-w-[58ch]">
                          {stop.note}
                        </span>
                      </span>
                      <span className="label-mono text-[10px] text-muted-foreground/70 inline-flex items-center gap-2 whitespace-nowrap">
                        {stop.target}
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Row>
                  </Reveal>
                );
              })}
              <div className="border-t border-border" />
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
