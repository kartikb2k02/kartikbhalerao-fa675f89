import type { ReactNode } from "react";

/**
 * The measure, shared by every page: a 640px column with 56px of air top
 * and bottom. Sections handle their own horizontal padding, so nothing
 * here does, and a full-bleed child can reach the column edge.
 */
export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={`mx-auto w-full max-w-[640px] py-14 ${className}`}>{children}</main>;
}

/**
 * A band within the column. The label is set in an italic serif,
 * lowercase, with a full stop — the one typographic flourish in an
 * otherwise plain page, which is why it is the thing that marks a
 * section rather than a rule or a weight change.
 */
export function Section({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`space-y-4 px-4 py-6 ${className}`}>
      {label && (
        <h2
          className="text-[20px] font-medium italic leading-none text-foreground"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {label}.
        </h2>
      )}
      {children}
    </section>
  );
}
