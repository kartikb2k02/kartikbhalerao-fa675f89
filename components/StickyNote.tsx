/**
 * A margin note — the aside that sits beside a chapter rather than inside it.
 * Slightly rotated so it reads as something stuck onto the page; straightens
 * on hover.
 */
export function StickyNote({
  title = "Kartik's note",
  children,
  tilt = -1.6,
}: {
  title?: string;
  children: React.ReactNode;
  tilt?: number;
}) {
  return (
    <aside
      className="note-card relative p-5 sm:p-6 max-w-[380px]"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <p className="label-mono text-[9px] opacity-60 mb-3">{title}</p>
      <p className="handwritten text-[20px] sm:text-[21px] leading-[1.35]">
        {children}
      </p>
    </aside>
  );
}
