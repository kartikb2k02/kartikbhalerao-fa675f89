import type { ReactNode } from "react";

/**
 * The measure, shared by every page: a 640px column with 56px of air top
 * and bottom. Sections handle their own horizontal padding, so nothing
 * here does, and a full-bleed child can reach the column edge.
 */
export function Shell({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <main className={`mx-auto w-full ${wide ? "max-w-[1267px]" : "max-w-[640px]"} py-14 ${className}`}>
      {children}
    </main>
  );
}

/**
 * A band within the column. The label follows the reference's compact
 * Inter Display hierarchy.
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
          className="text-[20px] font-semibold leading-none tracking-[-0.02em] text-foreground"
        >
          {label}
        </h2>
      )}
      {children}
    </section>
  );
}
