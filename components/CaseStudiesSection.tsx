"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { PageHeader } from "@/components/PageHeader";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";
import { TenzoCardBanner } from "@/components/TenzoCardBanner";

// Short display names for the grid. Full titles live on the detail page.
const shortNames: Record<string, string> = {
  "figprd": "figprd",
  "tenzo-product-discovery": "Tenzo",
  "pm-copilot": "PM Co-Pilot",
  "chatly-prd": "Chatly PRD",
  "blinkit-analysis": "Blinkit",
  "google-pay-analysis": "Google Pay",
  "google-pay-prd": "Google Pay PRD",
  "gullak-fintech": "Gullak",
  "zepto-efficiency": "Zepto",
  "airbnb-ux": "Airbnb UX",
  "cloudeagle-ai": "Cloudeagle",
  "metis-improvement": "Metis",
  "codeant-ai": "CodeAnt AI",
  "ether-prd": "Ether",
};

// These two are live products, so the card goes to the real thing.
const livePr0ducts = new Set(["pm-copilot", "figprd"]);

function Banner({ id, image, title }: { id: string; image: string; title: string }) {
  if (id === "chatly-prd") return <ChatlyCardBanner />;
  if (id === "pm-copilot") return <PMCopilotCardBanner />;
  if (id === "tenzo-product-discovery") return <TenzoCardBanner />;
  if (id === "figprd") return <FigPRDCardBanner />;
  return (
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover object-center"
      loading="lazy"
    />
  );
}

export const CaseStudiesSection = () => {
  return (
    <section>
      <PageHeader
        label="Builds"
        title={<>Things I&apos;ve made<span className="text-primary">.</span></>}
        lede="Products shipped, specs written, and teardowns of products worth studying, from discovery through launch."
        meta={`${caseStudies.length} builds`}
        container="max-w-[94rem]"
      />

      <div className="max-w-[94rem] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border border border-border">
          {caseStudies.map((study, i) => {
            const isLive = livePr0ducts.has(study.id);
            const href = isLive ? study.externalLink : `/builds/${study.id}`;
            const name = shortNames[study.id] ?? study.title;

            const inner = (
              <>
                {/* Banner */}
                <div className="relative aspect-[18/10] overflow-hidden border border-border">
                  <Banner id={study.id} image={study.image} title={study.title} />
                </div>

                {/* Meta */}
                <div className="pt-5 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span className="data-mono text-[11px] text-muted-foreground/60 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="heading-display text-[25px] sm:text-[28px] leading-[1.1] text-foreground truncate transition-colors duration-200 group-hover:text-primary">
                        {name}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 mt-1.5 shrink-0 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </div>

                  <p className="label-mono text-[10px] text-primary mb-3">
                    {study.subtitle}
                  </p>

                  <p className="text-[14.5px] text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                    {study.overview}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="label-mono text-[9px] text-muted-foreground border border-border px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                    {isLive && (
                      <span className="label-mono text-[9px] text-primary border border-primary/40 px-2 py-1">
                        Live
                      </span>
                    )}
                  </div>
                </div>
              </>
            );

            const className =
              "group flex flex-col bg-background p-5 sm:p-6 hover:bg-primary/[0.035] transition-colors duration-200";

            return isLive ? (
              <a
                key={study.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <Link key={study.id} href={href} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>

        {/* Close */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="label-mono text-[10px] text-muted-foreground mb-4">Next</p>
          <h2 className="heading-display text-[30px] sm:text-[38px] text-foreground leading-[1.05] mb-6">
            Want to see more<span className="text-primary">?</span>
          </h2>
          <Link
            href="/contact"
            className="label-mono inline-flex items-center gap-2 px-6 py-3.5 text-[11px] bg-foreground text-background hover:bg-primary transition-colors duration-200"
          >
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
