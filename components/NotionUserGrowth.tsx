"use client";

import { useState } from "react";

/**
 * The user milestones, as bars rather than a second line chart.
 *
 * Three readings five years apart are not a curve — drawing them as one would
 * imply a shape nobody measured. Bars say "these are the moments Notion
 * published a number" and nothing more.
 *
 * Built to pair with the revenue figure above it: same card, same header
 * readout, same footer. The readout is where the detail lives, so the rows
 * stay clean and nothing opens on top of the data. Plain HTML, no SVG — the
 * bars are percentage widths, so the whole thing reflows at any width with no
 * measuring.
 */

interface Milestone {
  when: string;
  /** Millions of users. */
  value: number;
  display: string;
  status: string;
  note: string;
}

const MILESTONES: Milestone[] = [
  {
    when: "2019 to 2020",
    value: 1,
    display: "1M",
    status: "Date disputed",
    note: "Reached on a seed round alone. Wikipedia says Sept 2019; Ivan Zhao says 2020.",
  },
  {
    when: "Oct 2021",
    value: 20,
    display: "20M",
    status: "Reported",
    note: "The headline figure at the $275M round.",
  },
  {
    when: "Aug 2024",
    value: 100,
    display: "100M",
    status: "Company-stated",
    note: "Announced in Ivan Zhao's “100 Million of You”.",
  },
];

const MAX = 100;
const LATEST = MILESTONES.length - 1;

/**
 * One hue, stepped light to full, because these are three readings of the
 * same measure. Categorical colours here would say the bars are three
 * different things. The step also does the work the length cannot: 1M is 1%
 * of 100M, a sliver three pixels wide, and the tint keeps it on the page.
 */
const RAMP = ["hsl(var(--signal) / 0.32)", "hsl(var(--signal) / 0.6)", "hsl(var(--signal))"];

export function NotionUserGrowth() {
  const [active, setActive] = useState<number | null>(null);

  const shown = active === null ? LATEST : active;
  const hot = MILESTONES[shown];
  const reading = active !== null;

  return (
    <figure className="my-7 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-border px-5 py-4">
        <div>
          <p className="label-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Total users
          </p>
          <p className="mt-2 text-[clamp(1.75rem,4.5vw,2.25rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums text-foreground">
            {hot.display}
          </p>
          <p className="mt-2 flex items-center gap-2 text-[12.5px] leading-none text-muted-foreground">
            <span className="text-foreground/80">{hot.when}</span>
            <span aria-hidden="true" className="text-foreground/25">
              ·
            </span>
            <span>{hot.status}</span>
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 text-[11px] font-medium leading-none text-foreground">
            ×100 in five years
          </span>
          <span className="label-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground">
            {reading ? "Reading the chart" : "Latest milestone"}
          </span>
        </div>
      </div>

      <div className="px-5 py-5">
        {MILESTONES.map((m, i) => {
          const on = active === i;
          return (
            <div
              key={m.when}
              className="group grid cursor-default grid-cols-[76px_1fr] items-center gap-3 rounded-lg py-2.5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring sm:grid-cols-[104px_1fr] sm:gap-4"
              tabIndex={0}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
            >
              <span
                className={`text-[12.5px] leading-tight transition-colors ${
                  on ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {m.when}
              </span>

              <div className="flex items-center gap-2.5">
                {/* 4px rounded data-end, square against the baseline. */}
                <div
                  className="h-[20px] min-w-[4px] rounded-r-[4px] transition-all duration-200"
                  style={{
                    width: `${(m.value / MAX) * 100}%`,
                    background: RAMP[i],
                    transform: on ? "scaleY(1.12)" : undefined,
                    boxShadow: on ? "0 0 0 1px hsl(var(--signal) / 0.45)" : undefined,
                  }}
                />
                <span
                  className={`shrink-0 text-[13px] font-medium tabular-nums transition-colors ${
                    on ? "text-foreground" : "text-foreground/70"
                  }`}
                >
                  {m.display}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* A reserved line rather than a floating tooltip: a box that opens over
          the next bar hides the data it is explaining. */}
      <div className="flex min-h-[44px] items-center border-t border-border px-5 py-3">
        <p className="text-[12px] leading-[1.5] text-muted-foreground">
          {reading ? hot.note : "Hover or focus a milestone for where the number comes from."}
        </p>
      </div>
    </figure>
  );
}
