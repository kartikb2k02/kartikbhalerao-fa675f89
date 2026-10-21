"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { industriesDetailed } from "@/data/profile";
import { caseStudies } from "@/data/caseStudies";
import { shortNames } from "@/data/buildMeta";

/**
 * Sectors, each opening to what was actually built there and what it
 * moved.
 *
 * Expanding in place rather than linking away: the question "has he
 * worked in my industry" is answered by the list, and the follow-up
 * "doing what" should not cost a page load. The builds inside are read
 * from `caseStudies`, so this cannot name something that is not on the
 * site.
 */
export function IndustryList() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="group/list divide-y divide-border">
      {industriesDetailed.map((industry) => {
        const isOpen = open === industry.name;
        const builds = industry.builds
          .map((id) => {
            const study = caseStudies.find((s) => s.id === id);
            return study ? { id, name: shortNames[id] ?? study.title } : null;
          })
          .filter((b): b is { id: string; name: string } => b !== null);

        return (
          <div
            key={industry.name}
            className="w-full py-4 opacity-100 transition-opacity duration-150 group-hover/list:opacity-30 hover:!opacity-100"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : industry.name)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 text-left"
            >
              <span className="min-w-0">
                <span className="block text-[15px] font-medium leading-snug text-foreground">
                  {industry.name}
                </span>
                <span className="mt-0.5 block text-[14px] leading-snug text-muted-foreground">
                  {industry.note}
                </span>
              </span>

              <span className="mt-0.5 flex shrink-0 items-center gap-2">
                <span className="text-[12px] tabular-nums text-muted-foreground">
                  {builds.length}
                </span>
                <Plus
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.76, 0, 0.24, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[68ch] pt-4 text-[14px] leading-relaxed text-muted-foreground">
                    {industry.impact}
                  </p>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {builds.map((build) => (
                      <li key={build.id}>
                        <Link
                          href={`/builds/${build.id}`}
                          className="inline-flex items-center rounded-md border border-border px-2 py-1 text-[12px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                        >
                          {build.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
