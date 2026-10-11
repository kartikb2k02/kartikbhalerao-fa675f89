"use client";

import type React from "react";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";
import { TenzoCardBanner } from "@/components/TenzoCardBanner";
import { Reveal } from "@/components/Reveal";

/**
 * Newspaper desks. A build belongs to exactly one, the way a story is filed to
 * one section — deriving this from `tags` put the same build under three
 * filters at once, which made the counts meaningless.
 */
const DESKS = ["AI", "Fintech", "Commerce", "Strategy"] as const;
type Desk = (typeof DESKS)[number];

const desk: Record<string, Desk> = {
  figprd: "AI",
  "pm-copilot": "AI",
  "chatly-prd": "AI",
  "google-pay-analysis": "Fintech",
  "google-pay-prd": "Fintech",
  "gullak-fintech": "Fintech",
  "blinkit-analysis": "Commerce",
  "zepto-efficiency": "Commerce",
  "metis-improvement": "Commerce",
  "cloudeagle-ai": "Commerce",
  "tenzo-product-discovery": "Strategy",
  "codeant-ai": "Strategy",
  "ether-prd": "Strategy",
  "airbnb-ux": "Strategy",
};

// Short display names — full titles live on the detail page.
const shortNames: Record<string, string> = {
  figprd: "figprd",
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
const liveProducts = new Set(["pm-copilot", "figprd"]);

const customBanners: Record<string, React.ComponentType> = {
  "chatly-prd": ChatlyCardBanner,
  "pm-copilot": PMCopilotCardBanner,
  "tenzo-product-discovery": TenzoCardBanner,
  figprd: FigPRDCardBanner,
};

/**
 * Cover art. Four builds ship a hand-made banner; the rest get a typographic
 * plate rather than a stock image, so a filtered row never mixes rich cards
 * with empty grey boxes.
 */
function Cover({ id, index }: { id: string; index: number }) {
  const Custom = customBanners[id];
  if (Custom) return <Custom />;

  return (
    <div className="w-full h-full bg-muted flex flex-col justify-between p-5">
      <span className="kicker">{desk[id]}</span>
      <span
        className="nameplate text-[76px] self-end leading-none text-[hsl(var(--foreground)/0.12)]"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function WorkDesk() {
  const [active, setActive] = useState<Desk | "All">("All");

  const counts = useMemo(() => {
    const base: Record<string, number> = { All: caseStudies.length };
    for (const d of DESKS) {
      base[d] = caseStudies.filter((s) => desk[s.id] === d).length;
    }
    return base;
  }, []);

  const visible = useMemo(
    () =>
      active === "All"
        ? caseStudies
        : caseStudies.filter((study) => desk[study.id] === active),
    [active]
  );

  return (
    <section
      id="the-desk"
      className="w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 scroll-mt-20"
    >
      <div className="max-w-[100rem] mx-auto">
        <div className="rule-heavy" />

        {/* Section head + filters */}
        <div className="flex flex-wrap items-end justify-between gap-6 pt-6 pb-8">
          <div>
            <span className="kicker">The desk</span>
            <h2 className="headline text-foreground text-[40px] sm:text-[68px] lg:text-[84px] mt-2">
              Everything I&apos;ve built
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {(["All", ...DESKS] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setActive(d)}
                aria-pressed={active === d}
                className="chip"
              >
                {d}
                <span className="ml-1.5 opacity-55">{counts[d]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((study, i) => {
            const isLive = liveProducts.has(study.id);
            const href = isLive ? study.externalLink : `/builds/${study.id}`;
            const name = shortNames[study.id] ?? study.title;
            const index = caseStudies.indexOf(study);

            const card = (
              <>
                <div className="relative aspect-[18/10] overflow-hidden border-b-2 border-foreground">
                  <Cover id={study.id} index={index} />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="kicker">{desk[study.id]}</span>
                    {isLive && (
                      <span className="kicker kicker-muted">· Live</span>
                    )}
                  </div>

                  <h3 className="headline text-foreground text-[23px] sm:text-[26px] mb-2 transition-colors duration-200 group-hover:text-primary">
                    {name}
                  </h3>

                  <p className="text-[14px] leading-[1.5] text-foreground/70 mb-4">
                    {study.subtitle}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="dateline truncate">
                      {study.tags.slice(0, 2).join(" · ")}
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/40 transition-colors duration-200 group-hover:text-primary" />
                  </div>
                </div>
              </>
            );

            const className =
              "hard-card group flex flex-col overflow-hidden h-full";

            return (
              <Reveal key={study.id} delay={Math.min(i, 5) * 60}>
                {isLive ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {card}
                  </a>
                ) : (
                  <Link href={href} className={className}>
                    {card}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
