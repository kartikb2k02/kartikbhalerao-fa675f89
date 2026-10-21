/**
 * A stack as small muted items with slash separators.
 *
 * Not pills: at a dozen entries a row of chips outweighs the role above
 * it. These sit at 70% and lift to full on hover, so the list reads as
 * an aside until you look directly at it.
 */
export function TechStack({ items }: { items: readonly string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1">
      {items.map((item, i) => (
        <div key={item} className="flex items-center gap-1">
          <span className="flex w-fit cursor-default items-center justify-center font-mono text-[12px] text-secondary-foreground opacity-70 transition-opacity hover:opacity-100">
            {item}
          </span>
          {i !== items.length - 1 && (
            <span aria-hidden="true" className="text-[12px] text-secondary-foreground opacity-50">
              /
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
