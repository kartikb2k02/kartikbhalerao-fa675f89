import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { DESKS } from "@/data/buildMeta";

const PAGES = [
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kartik-bhalerao" },
  { label: "GitHub", href: "https://github.com/kartikbh6614" },
  { label: "X", href: "https://x.com/KartikB43758249" },
  { label: "RSS", href: "/index.xml" },
];

const latest = blogPosts
  .filter((p) => !p.comingSoon)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 4);

function Column({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="bomb-label mb-4 text-[11px] text-muted-foreground">{heading}</p>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function Row({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "group inline-flex items-start gap-1.5 text-[15px] text-foreground/75 transition-colors hover:text-foreground";

  if (external) {
    return (
      <li>
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
          <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 opacity-50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link href={href} className={className}>
        {children}
      </Link>
    </li>
  );
}

/**
 * The footer carries the site's whole link graph — every page, every desk,
 * the latest writing and the off-site profiles. On a site this small that
 * is the single biggest thing available for crawl depth, and it also means
 * a reader who hits the bottom of any page never has to scroll back up.
 *
 * The wordmark underneath is set to bleed: `9vw` with negative tracking, so
 * it spans the measure at any width and gets clipped rather than wrapped.
 */
export const FooterSection = () => {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Column heading="Pages">
            {PAGES.map((p) => (
              <Row key={p.href} href={p.href}>
                {p.label}
              </Row>
            ))}
          </Column>

          <Column heading="Desks">
            {DESKS.map((d) => (
              <Row key={d} href="/builds">
                {d}
              </Row>
            ))}
          </Column>

          <Column heading="Latest writing">
            {latest.map((post) => (
              <Row key={post.slug} href={`/blog/${post.slug}`}>
                <span className="line-clamp-2">{post.title}</span>
              </Row>
            ))}
          </Column>

          <Column heading="Elsewhere">
            {SOCIALS.map((s) => (
              <Row key={s.label} href={s.href} external={s.href.startsWith("http")}>
                {s.label}
              </Row>
            ))}
          </Column>
        </div>

        <div className="mt-14 flex flex-wrap items-baseline justify-between gap-4 border-t border-border pt-6">
          <p className="bomb-label text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Kartik Bhalerao
          </p>
          <Link
            href="/contact"
            className="bomb-label inline-flex items-center gap-1.5 border-b-2 border-primary pb-0.5 text-[11px] text-foreground transition-colors hover:text-primary"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Wordmark bleed. `aria-hidden` because the name is already the
          site title and the h1 of the homepage — a screen reader reading
          it again at the foot of every page is noise. */}
      <div aria-hidden="true" className="overflow-hidden px-4 pb-6 sm:px-6 lg:px-8">
        <p
          className="bomb-mega whitespace-nowrap leading-none text-foreground/10"
          style={{ fontSize: "clamp(3rem, 15.5vw, 16rem)" }}
        >
          KARTIK BHALERAO
        </p>
      </div>
    </footer>
  );
};
