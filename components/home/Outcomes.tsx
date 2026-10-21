import { outcomes } from "@/data/profile";

/**
 * The numbers, one card each.
 *
 * Three lines per card: the figure, what it moved, and how it moved.
 * The third line is what separates a result from a claim — a card that
 * said only "+20%" would be a decoration.
 *
 * Two up on a phone, three on anything wider, so the six fill the grid
 * evenly either way and no card is left orphaned on its own row.
 */
export function Outcomes() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {outcomes.map((item) => (
        <div key={item.label} className="surface content-start p-4">
          <p className="text-[clamp(1.25rem,3.4vw,1.5rem)] font-semibold leading-none tracking-tight tabular-nums text-foreground">
            {item.value}
          </p>
          <p className="mt-2 text-[13px] font-medium leading-snug text-foreground">
            {item.label}
          </p>
          <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
            {item.note}
          </p>
        </div>
      ))}
    </div>
  );
}
