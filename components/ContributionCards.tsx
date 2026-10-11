import type { Contribution } from "@/data/contributions";
import { Reveal } from "@/components/Reveal";

type Kpi = NonNullable<Contribution["kpis"]>[number];

/** Figures where one exists, named metrics where none does. */
function KpiPanel({ items }: { items: Kpi[] }) {
  return (
    <div className="grid grid-cols-2 gap-px bg-border border border-border">
      {items.map((k) => (
        <div
          key={k.label}
          className={`bg-card p-3.5 flex flex-col min-h-[76px] ${
            k.value ? "justify-end" : "justify-center"
          }`}
        >
          {k.value ? (
            <>
              <p className="headline text-foreground text-[28px] leading-none mb-1.5">
                {k.value}
              </p>
              <p className="kicker kicker-muted leading-tight">{k.label}</p>
            </>
          ) : (
            <p className="kicker kicker-muted leading-snug">{k.label}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * The work, stated outright. These were click-to-expand notes, which hid the
 * detail that makes the experience worth reading and left a page of teasers
 * behind plus signs. Everything is on the card now, so nothing needs opening
 * and the whole section is readable by a crawler and in print.
 */
export function ContributionCards({ items }: { items: Contribution[] }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
      {items.map((c, i) => {
        const hasKpis = Boolean(c.kpis?.length);

        return (
          <Reveal key={c.id} delay={Math.min(i, 4) * 70}>
            <article className="hard-card-static h-full p-6 sm:p-7 flex flex-col">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {c.where.map((w) => (
                  <span
                    key={w}
                    className="kicker kicker-muted border border-border px-2 py-1"
                  >
                    {w}
                  </span>
                ))}
              </div>

              <h3 className="headline text-foreground text-[24px] sm:text-[28px] leading-[1.15] mb-2">
                {c.topic}
              </h3>

              <p className="text-[15px] leading-[1.55] text-foreground/70">
                {c.teaser}
              </p>

              <div className="border-t border-border mt-5 pt-5 space-y-3.5">
                {c.detail.map((para, n) => (
                  <p
                    key={n}
                    className="text-[15px] leading-[1.7] text-foreground/80"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {c.how && (
                <div className="mt-5">
                  <p className="kicker mb-2">How I work</p>
                  <p className="text-[15px] leading-[1.7] text-foreground/80 border-l-2 border-primary pl-4">
                    {c.how}
                  </p>
                </div>
              )}

              {hasKpis && (
                <div className="mt-6">
                  <p className="kicker mb-3">What I track</p>
                  <KpiPanel items={c.kpis!} />
                </div>
              )}

              {c.result && (
                <div className="mt-auto pt-6">
                  <p className="kicker mb-2">Outcome</p>
                  <p className="headline text-foreground text-[18px] sm:text-[20px] leading-[1.3]">
                    {c.result}
                  </p>
                </div>
              )}
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
