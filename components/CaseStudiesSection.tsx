"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { DESKS, desk, type Desk } from "@/data/buildMeta";
import { PageHeader } from "@/components/PageHeader";
import { BuildCard } from "@/components/BuildCard";
import { Reveal } from "@/components/Reveal";

export const CaseStudiesSection = () => {
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
    <section>
      <PageHeader
        label="Builds"
        title={
          <>
            Things I&apos;ve made<span className="text-primary">.</span>
          </>
        }
        lede="Products shipped, specs written, and teardowns of products worth studying, from discovery through launch."
        meta={`${caseStudies.length} builds`}
        container="max-w-[100rem]"
      />

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 pb-8">
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((study, i) => (
            <Reveal key={study.id} delay={Math.min(i, 5) * 60}>
              <BuildCard study={study} index={caseStudies.indexOf(study)} />
            </Reveal>
          ))}
        </div>

        {/* Close */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="kicker mb-4">Next</p>
          <h2 className="headline text-[30px] sm:text-[38px] text-foreground leading-[1.05] mb-6">
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
