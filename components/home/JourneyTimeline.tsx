"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { journey } from "@/data/profile";

/**
 * The career as a line of stops you can click.
 *
 * The written detail used to sit below as five stacked paragraphs,
 * which said everything the line said and then said it again. Here the
 * line is the control and one panel underneath answers it, so the
 * section is short enough to take in at once and the reader chooses
 * what to open.
 *
 * Defaults to the last stop — where he is now is the thing most people
 * are looking for, and an empty panel on arrival would make the whole
 * section look broken.
 *
 * Horizontal on a wide screen, where left-to-right does the chronology
 * for free; below `sm` it scrolls sideways rather than squashing to
 * 50px a stop, because the line is the point.
 */
export function JourneyTimeline() {
  const [active, setActive] = useState(journey.length - 1);
  const current = journey[active];

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 pb-1">
        <ol className="flex min-w-[560px] items-start">
          {journey.map((stop, i) => {
            const first = i === 0;
            const last = i === journey.length - 1;
            const on = i === active;

            return (
              <li key={stop.year} className="flex flex-1 flex-col items-center">
                <p
                  className={`mb-2 whitespace-nowrap text-[11px] tabular-nums transition-colors ${
                    on ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {stop.year}
                </p>

                {/* The rail. Half-width segments at the ends so the line
                    starts and stops at the first and last dot rather
                    than running off into nothing. */}
                <div className="flex w-full items-center">
                  <span
                    aria-hidden="true"
                    className={`h-px flex-1 ${first ? "bg-transparent" : "bg-border"}`}
                  />

                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={on}
                    aria-label={`${stop.year} — ${stop.short}`}
                    className="group relative grid h-7 w-7 shrink-0 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span
                      className="block rounded-full transition-all duration-200"
                      style={{
                        width: on ? 16 : 12,
                        height: on ? 16 : 12,
                        backgroundColor: `hsl(${stop.hue} 75% 72%)`,
                        boxShadow: on
                          ? `0 0 0 4px hsl(${stop.hue} 70% 55% / 0.22)`
                          : "none",
                        opacity: on ? 1 : 0.65,
                      }}
                    />
                  </button>

                  <span
                    aria-hidden="true"
                    className={`h-px flex-1 ${last ? "bg-transparent" : "bg-border"}`}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`mt-2 max-w-[11ch] text-center text-[13px] leading-tight transition-colors ${
                    on
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {stop.short}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* One panel, swapped on selection. `mode="wait"` so the outgoing
          text clears before the next arrives — crossfading two
          paragraphs of different lengths reads as a glitch. */}
      <div className="surface mt-5 p-5">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.year}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[15px] font-medium leading-snug text-foreground">
                {current.title}
              </h3>
              <p className="shrink-0 text-[13px] tabular-nums text-muted-foreground">
                {current.year}
              </p>
            </div>
            <p className="mt-2 max-w-[68ch] text-[14px] leading-relaxed text-muted-foreground">
              {current.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
