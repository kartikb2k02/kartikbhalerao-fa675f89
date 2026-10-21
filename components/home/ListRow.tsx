import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface RowLink {
  label: string;
  href: string;
}

/**
 * One item in a list: title left, description beneath, optional links or
 * plain meta in the right margin.
 *
 * Give it `href` and the title itself becomes the link — which is the
 * right default, since the title is the thing a reader is already
 * looking at and it gives a far bigger hit target than an arrow. `links`
 * stays for rows that lead to more than one place.
 */
export function ListRow({
  title,
  href,
  description,
  meta,
  links = [],
}: {
  title: string;
  /** Makes the title a link. */
  href?: string;
  description?: string;
  /** Plain text in the right margin — a date, a count. Not a link. */
  meta?: string;
  links?: RowLink[];
}) {
  const titleNode = href ? (
    <Link href={href} className="underline-offset-4 hover:underline">
      {title}
    </Link>
  ) : (
    title
  );

  return (
    <div className="w-full space-y-1 py-4 opacity-100 transition-opacity duration-150 group-hover/list:opacity-30 hover:!opacity-100">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[15px] font-medium leading-snug text-foreground">
          {titleNode}
        </h3>

        {meta && (
          <p className="shrink-0 text-[13px] tabular-nums text-muted-foreground">
            {meta}
          </p>
        )}

        {links.length > 0 && (
          <div className="flex shrink-0 items-center gap-3">
            {links.map((link) => {
              const external = link.href.startsWith("http");
              const className =
                "group inline-flex items-center gap-0.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground";
              const inner = (
                <>
                  {link.label}
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </>
              );

              return external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={className}>
                  {inner}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {description && (
        <p className="max-w-[60ch] text-[14px] leading-snug text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Rows separated by hairlines.
 *
 * Named group, so a row can dim its siblings on hover without a nested
 * list elsewhere on the page also reacting.
 */
export function RowList({ children }: { children: React.ReactNode }) {
  return <div className="group/list divide-y divide-border">{children}</div>;
}
