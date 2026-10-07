"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { Contribution } from "@/data/contributions";

type Kpi = NonNullable<Contribution["kpis"]>[number];

/**
 * Collapsed state: the names of what gets tracked, with no figures. The
 * numbers themselves are held back for the open card.
 */
function KpiChips({ items, align }: { items: Kpi[]; align: "right" | "left" }) {
  return (
    <div
      className={`flex flex-wrap gap-1.5 ${
        align === "right" ? "justify-end max-w-[260px]" : ""
      }`}
    >
      {items.map((k) => (
        <span
          key={k.label}
          className="label-mono text-[9px] opacity-65 border border-[hsl(var(--note-edge))] px-2 py-1 whitespace-nowrap"
        >
          {k.label}
        </span>
      ))}
    </div>
  );
}

/** The fuller panel that fills the right rail once a card is open. */
function KpiPanel({ items }: { items: Kpi[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-[hsl(var(--note-edge))] border border-[hsl(var(--note-edge))]">
      {items.map((k) => (
        <div
          key={k.label}
          className={`bg-[hsl(var(--note))] p-3.5 flex flex-col min-h-[78px] ${
            k.value ? "justify-end" : "justify-center"
          }`}
        >
          {k.value ? (
            <>
              <p className="heading-display text-[30px] leading-none mb-1.5">
                {k.value}
              </p>
              <p className="label-mono text-[9px] opacity-70 leading-tight">
                {k.label}
              </p>
            </>
          ) : (
            <p className="label-mono text-[10px] opacity-80 leading-snug">
              {k.label}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function ContributionNotes({ items }: { items: Contribution[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
      {items.map((c) => {
        const isOpen = openId === c.id;
        const hasRail = Boolean(c.kpis?.length || c.result);

        return (
          <article
            key={c.id}
            className={`note-card note-ruled note-tone-${c.tone} relative overflow-hidden transition-[transform,box-shadow] duration-300 ${
              isOpen ? "sm:col-span-2" : ""
            }`}
            style={{ transform: isOpen ? "rotate(0deg)" : `rotate(${c.tilt}deg)` }}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : c.id)}
              aria-expanded={isOpen}
              className="w-full text-left p-5 sm:p-7"
            >
              <div className="flex items-start justify-between gap-5 sm:gap-8">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    {c.where.map((w) => (
                      <span
                        key={w}
                        className="label-mono text-[9px] px-2 py-0.5 border border-[hsl(var(--note-edge))] opacity-70"
                      >
                        {w}
                      </span>
                    ))}
                  </div>

                  <h3 className="handwritten text-[28px] sm:text-[33px] leading-[1.12]">
                    {c.topic}
                  </h3>
                  <p
                    className={`text-[13.5px] leading-snug opacity-70 mt-1.5 ${
                      isOpen ? "max-w-[70ch]" : "max-w-[44ch]"
                    }`}
                  >
                    {c.teaser}
                  </p>

                  {/* Narrow screens, collapsed: KPIs sit under the teaser */}
                  {c.kpis && !isOpen && (
                    <div className="sm:hidden mt-4">
                      <KpiChips items={c.kpis} align="left" />
                    </div>
                  )}
                </div>

                <div className="shrink-0 flex items-start gap-5 sm:gap-7">
                  {/* Once open, the KPIs move into the right rail below */}
                  {c.kpis && !isOpen && (
                    <div className="hidden sm:block pt-0.5">
                      <KpiChips items={c.kpis} align="right" />
                    </div>
                  )}

                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center border border-[hsl(var(--note-edge))] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </button>

            <div className={`note-expand ${isOpen ? "is-open" : ""}`}>
              <div>
                <div className="note-expand-body px-5 sm:px-7 pb-6 sm:pb-7">
                  <div
                    className={`border-t border-[hsl(var(--note-edge))] pt-6 grid gap-8 lg:gap-14 ${
                      hasRail ? "lg:grid-cols-[minmax(0,1fr)_300px]" : ""
                    }`}
                  >
                    {/* Narrative */}
                    <div className="space-y-4 min-w-0">
                      {c.detail.map((para, i) => (
                        <p
                          key={i}
                          className="text-[15px] leading-[1.72] opacity-90 max-w-[78ch]"
                        >
                          {para}
                        </p>
                      ))}

                      {c.how && (
                        <div className="pt-3">
                          <p className="label-mono text-[9px] opacity-60 mb-2.5">
                            How I work
                          </p>
                          <p className="text-[15px] leading-[1.72] opacity-90 border-l-2 border-[hsl(var(--note-edge))] pl-4 max-w-[78ch]">
                            {c.how}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right rail: the numbers and the outcome */}
                    {hasRail && (
                      <aside className="space-y-7 lg:border-l lg:border-[hsl(var(--note-edge))] lg:pl-10">
                        {c.kpis && c.kpis.length > 0 && (
                          <div>
                            <p className="label-mono text-[9px] opacity-60 mb-3">
                              What I track
                            </p>
                            <KpiPanel items={c.kpis} />
                          </div>
                        )}

                        {c.result && (
                          <div>
                            <p className="label-mono text-[9px] opacity-60 mb-2.5">
                              Outcome
                            </p>
                            <p className="handwritten text-[22px] leading-[1.3]">
                              {c.result}
                            </p>
                          </div>
                        )}

                        <div>
                          <p className="label-mono text-[9px] opacity-60 mb-3">
                            Worked with
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {c.where.map((w) => (
                              <span
                                key={w}
                                className="label-mono text-[9px] px-2 py-1 border border-[hsl(var(--note-edge))] opacity-75"
                              >
                                {w}
                              </span>
                            ))}
                          </div>
                        </div>
                      </aside>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
