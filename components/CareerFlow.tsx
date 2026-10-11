import { Reveal } from "@/components/Reveal";

const TIMELINE = [
  { when: "2022", what: "Open source contributor", where: "Rocket.Chat" },
  { when: "2023", what: "Moved into product management", where: "The switch" },
  { when: "2024", what: "Product Manager Intern", where: "Ocius · Remote" },
  {
    when: "Mid 2024",
    what: "Associate Product Manager",
    where: "Decision Machine · Pune",
  },
  {
    when: "2025",
    what: "Founding PM, consumer tech app",
    where: "Side projects for enterprise",
  },
  { when: "2026", what: "AI agents and products", where: "Now" },
];

/**
 * The career as a flow rather than a table: six nodes joined by a line, read
 * left to right on a wide screen and top to bottom on a narrow one. Rows gave
 * the six steps equal weight and no direction; a flow says the obvious thing a
 * list cannot, which is that one step led to the next.
 *
 * The connector is a flex sibling rather than a pseudo-element so it can
 * change axis with the container and never trails past the last node.
 */
export function CareerFlow() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-stretch">
      {TIMELINE.map((row, i) => {
        const isCurrent = i === TIMELINE.length - 1;

        return (
          <Reveal
            key={row.what}
            delay={i * 70}
            className="flex flex-col lg:flex-row lg:flex-1 lg:min-w-0"
          >
            <div
              className={`relative flex-1 min-w-0 p-5 ${
                isCurrent
                  ? "hard-card-static"
                  : "border-2 border-border bg-card"
              }`}
            >
              <div className="flex items-center gap-2 mb-2.5">
                {isCurrent && (
                  <span
                    className="w-1.5 h-1.5 bg-primary shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span
                  className={`kicker ${isCurrent ? "" : "kicker-muted"}`}
                >
                  {row.when}
                </span>
              </div>

              <p
                className={`text-[15px] sm:text-[16px] leading-[1.35] mb-2 ${
                  isCurrent
                    ? "text-foreground font-medium"
                    : "text-foreground/85"
                }`}
              >
                {row.what}
              </p>

              <p className="dateline leading-[1.4]">{row.where}</p>
            </div>

            {/* The join. Vertical when stacked, horizontal when in a row. */}
            {!isCurrent && (
              <div
                className="flex items-center justify-center shrink-0 self-center h-7 w-full lg:h-full lg:w-7"
                aria-hidden="true"
              >
                <span className="bg-border w-px h-full lg:w-full lg:h-px" />
              </div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
