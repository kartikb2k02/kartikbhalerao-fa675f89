import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogPosts";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";
import { Reveal } from "@/components/Reveal";

const featured = caseStudies.find((study) => study.id === "figprd");

const mostRead = blogPosts
  .filter((post) => !post.comingSoon)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function FeaturedStory() {
  if (!featured) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-14 sm:pb-20">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* ── Lead story ──────────────────────────────────── */}
          <Reveal className="lg:pr-10">
            <article>
              <div className="flex items-center gap-3 mb-4">
                <span className="kicker">Lead</span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <span className="dateline">Shipped 2026</span>
              </div>

              <a
                href={featured.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="hard-card hard-card-signal relative aspect-[18/10] overflow-hidden mb-6">
                  <FigPRDCardBanner />
                </div>

                <h2 className="headline text-foreground text-[34px] sm:text-[52px] lg:text-[62px] mb-4 group-hover:text-primary transition-colors duration-200">
                  Figma goes in. A full PRD comes out.
                </h2>
              </a>

              {/* Written out rather than reusing `overview`, which opens on the
                  lowercase brand "figprd" — a drop cap needs a capital to set
                  against, and a lowercase f floats as a stray mark. */}
              <p className="drop-cap text-[17px] sm:text-[18px] leading-[1.65] text-foreground/80 max-w-[62ch] mb-5">
                Product managers spend hours turning Figma screens into
                requirements, and the design intent leaks out somewhere in the
                retyping. figprd connects an agent straight to the file over
                MCP, reads the whole design tree, and streams back a structured
                PRD — user stories, acceptance criteria, flows, edge cases — in
                seconds, from the terminal.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <span className="dateline">Kartik Bhalerao</span>
                <span className="dateline">
                  {featured.tags.slice(0, 3).join(" · ")}
                </span>
                <a
                  href={featured.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex items-center gap-1.5 text-[10px] text-foreground border-b-2 border-primary pb-0.5 hover:text-primary transition-colors duration-200"
                >
                  View on GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          </Reveal>

          {/* ── Right rail ──────────────────────────────────── */}
          <Reveal delay={120} className="lg:col-rule lg:pl-10 mt-12 lg:mt-0">
            <div className="flex items-center gap-3 mb-5">
              <span className="kicker">Most read</span>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>

            <ol>
              {mostRead.map((post, i) => (
                <li key={post.slug} className="border-t border-border first:border-t-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex gap-4 py-4 sm:py-5"
                  >
                    <span className="rank shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="headline block text-foreground text-[18px] sm:text-[20px] leading-[1.2] group-hover:text-primary transition-colors duration-200">
                        {post.title}
                      </span>
                      <span className="dateline block mt-2">
                        {formatDate(post.date)} · {post.readTime}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            {/* ── Standing "Now" box — the stop-press corner ─── */}
            <div className="hard-card mt-8 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 bg-primary shrink-0"
                  aria-hidden="true"
                />
                <span className="kicker">Now</span>
              </div>
              <p className="text-[15px] leading-[1.55] text-foreground/80 mb-4">
                Open to product roles — AI product work especially. Also happy
                to argue about what to cut from your roadmap.
              </p>
              <Link
                href="/contact"
                className="label-mono inline-flex items-center gap-1.5 text-[10px] text-foreground border-b-2 border-primary pb-0.5 hover:text-primary transition-colors duration-200"
              >
                Get in touch
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
