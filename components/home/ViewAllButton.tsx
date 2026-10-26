import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * The end-of-section call to action.
 *
 * Same shape as the contact buttons but neutral — it is a way onward,
 * not an action, so it takes the border and the muted ink rather than a
 * colour. The arrow nudges right on hover, which is the only movement.
 */
export function ViewAllButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="reference-button reference-button-secondary group inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
