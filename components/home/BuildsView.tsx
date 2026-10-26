"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BannerGrid, type Banner } from "@/components/home/BannerGrid";
import type { CaseStudy } from "@/data/caseStudies";
import { DESKS, desk, shortNames } from "@/data/buildMeta";

const FILTERS = ["All", ...DESKS] as const;
type Filter = (typeof FILTERS)[number];

const FEATURED_BUILD_ORDER = [
  "neo-health",
  "monosend",
  "blinkit-analysis",
  "zepto-efficiency",
  "chatly-prd",
] as const;

/**
 * Every build in one two-column banner grid, narrowed by a dropdown rather
 * than split into a section per desk.
 *
 * Sections meant four headings and four short grids; a single grid with
 * a filter keeps the page one object and lets someone look at everything
 * at once, which is the common case.
 *
 * The count beside the label updates with the filter, so the control
 * says what it did without needing to be read twice.
 */
export function BuildsView({ builds }: { builds: CaseStudy[] }) {
  const [filter, setFilter] = useState<Filter>("All");

  const counts = useMemo(() => {
    const base: Record<string, number> = { All: builds.length };
    for (const d of DESKS) base[d] = builds.filter((b) => desk[b.id] === d).length;
    return base;
  }, [builds]);

  const visible = useMemo(() => {
    const filtered = filter === "All" ? builds : builds.filter((b) => desk[b.id] === filter);
    const originalOrder = new Map(builds.map((build, index) => [build.id, index]));
    const featuredOrder = new Map<string, number>(
      FEATURED_BUILD_ORDER.map((id, index) => [id, index])
    );

    return [...filtered].sort(
      (a, b) =>
        (featuredOrder.get(a.id) ?? FEATURED_BUILD_ORDER.length) -
          (featuredOrder.get(b.id) ?? FEATURED_BUILD_ORDER.length) ||
        (originalOrder.get(a.id) ?? 0) - (originalOrder.get(b.id) ?? 0)
    );
  }, [builds, filter]);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[14px] text-muted-foreground">
          {visible.length} {visible.length === 1 ? "build" : "builds"}
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-[14px] text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            {filter}
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="min-w-[10rem]">
            <DropdownMenuRadioGroup
              value={filter}
              onValueChange={(v) => setFilter(v as Filter)}
            >
              {FILTERS.map((f) => (
                <DropdownMenuRadioItem
                  key={f}
                  value={f}
                  className="text-[14px]"
                >
                  <span className="flex w-full items-center justify-between gap-4">
                    {f}
                    <span className="tabular-nums text-muted-foreground">
                      {counts[f]}
                    </span>
                  </span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Keyed on the filter so the grid remounts and the browser does not
          try to reuse tiles across two different sets of images. */}
      <div className="mx-auto w-full max-w-[864px]">
        <BannerGrid
          key={filter}
          columns={2}
          variant="work"
          banners={visible.map<Banner>((study) => ({
            id: study.id,
            name: shortNames[study.id] ?? study.title,
            title: study.title,
            description: study.subtitle,
            image: study.image,
            href: `/builds/${study.id}`,
            external: false,
          }))}
        />
      </div>
    </>
  );
}
