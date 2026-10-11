import Link from "next/link";
import { ArrowRight, ArrowUpRight, Rss } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";
import { desk, shortNames, liveProducts } from "@/data/buildMeta";
import { Reveal } from "@/components/Reveal";

/**
 * Kartik's own words. Each point is one sentence, names no project, and uses
 * no dashes.
 */
const focus = [
  "I build AI agents to handle repetitive work, like turning design files into product specs and collecting competitor updates in one place.",
  "I work with MCP to connect AI agents to different tools so they can actually use them to get work done.",
  "I work on AI workflows, deciding which model to use, what it can access, and how to handle things when a step fails.",
  "I explore different AI models, compare what they can do, and figure out which ones are worth using based on performance and cost.",
];

/**
 * Three builds on the front page; the rest are on /builds. Names and
 * descriptions are read from the case studies rather than retyped, so the rail
 * cannot drift from the pages it links to.
 */
const railBuilds = ["blinkit-analysis", "zepto-efficiency", "chatly-prd"]
  .map((id) => {
    const study = caseStudies.find((s) => s.id === id);
    if (!study) return null;
    const isLive = liveProducts.has(id);
    return {
      id,
      name: shortNames[id] ?? study.title,
      subtitle: study.subtitle,
      deskName: desk[id],
      isLive,
      href: isLive ? study.externalLink : `/builds/${id}`,
    };
  })
  .filter((b): b is NonNullable<typeof b> => b !== null);

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

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/kartik-bhalerao",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/kartikbh6614",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/KartikB43758249",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "RSS",
    href: "/index.xml",
    icon: <Rss className="w-full h-full" strokeWidth={2} aria-hidden="true" />,
  },
];

/**
 * The front page opens on who Kartik is, not on a single build — the story
 * takes the lead column and the writing rail stays on the right, the way a
 * newspaper runs its columnist against a Most Read box.
 */
export function StoryLead() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-14 sm:pb-20">
      <div className="max-w-[100rem] mx-auto">
        <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* ── The story ───────────────────────────────────── */}
          <Reveal className="lg:pr-12">
            <div className="mb-4">
              <span className="kicker">About me</span>
            </div>

            {/* The page shows no display heading here, so this carries the
                document's h1 for crawlers and screen-reader navigation. */}
            <h1 className="sr-only">
              Kartik Bhalerao, Product Manager building AI products
            </h1>

            {/* Two columns only once the lead column is wide enough to split
                without dropping under a readable measure.

                No drop cap: the text opens on "I'm", and a one-letter word
                leaves the raised capital standing alone with an orphaned
                apostrophe beside it.

                Paragraphs are allowed to break across the gutter rather than
                held whole, so the two columns balance however many there are.
                Newspapers set continuous columns for exactly this reason. */}
            <div className="lg:columns-2 lg:gap-12">
              <p className="text-[17px] sm:text-[18px] leading-[1.7] text-foreground/80 mb-5">
                I&rsquo;m Kartik, a Product Manager working on fintech products
                and solving business problems. I enjoy understanding user needs
                and finding ways to improve products.
              </p>

              <p className="text-[17px] sm:text-[18px] leading-[1.7] text-foreground/80 mb-5">
                Before this, I worked with a consulting firm across 5 domains
                worldwide. This helped me understand different industries,
                business challenges, and customer needs.
              </p>

              <p className="text-[17px] sm:text-[18px] leading-[1.7] text-foreground/80 mb-5">
                Currently, I&rsquo;m working across product strategy, GTM, AI,
                and growth. I focus on market research, identifying
                opportunities, and finding ways to make products better.
              </p>

              <p className="text-[17px] sm:text-[18px] leading-[1.7] text-foreground/80 mb-5">
                I&rsquo;m currently building AI solutions using the latest
                tools and technologies, working with MCP and AI gateways to
                connect models with real-world workflows and make AI more
                useful.
              </p>
            </div>

            {/* What's current, as a numbered standfirst. The numerals reuse
                `.rank` from the Most Read rail so the page counts things one
                way. Deliberately names no project: the rail already links to
                them, and naming one here says it twice. */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="mb-6">
                <span className="kicker">What I&rsquo;m working on</span>
              </div>

              <ol className="space-y-5">
                {focus.map((item, i) => (
                  <li key={item} className="flex gap-5">
                    <span className="rank shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 text-[17px] sm:text-[18px] leading-[1.6] text-foreground/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-9 pt-8 border-t border-border">
              <Link
                href="/contact"
                className="label-mono inline-flex items-center gap-2.5 h-[52px] px-7 text-[10px] bg-foreground text-background hover:bg-primary transition-colors duration-200"
              >
                Get in touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2.5">
                {socials.map((s) => {
                  const external = s.href.startsWith("http");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      title={s.label}
                      className="w-[52px] h-[52px] flex items-center justify-center border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                    >
                      <span className="sr-only">{s.label}</span>
                      <span className="w-[19px] h-[19px] block">{s.icon}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* ── Right rail ──────────────────────────────────── */}
          <Reveal delay={120} className="lg:col-rule lg:pl-12 mt-14 lg:mt-0">
            <div className="mb-3">
              <span className="kicker">Most read</span>
            </div>

            <ol className="[&>li:first-child>a]:pt-0">
              {mostRead.map((post, i) => (
                <li
                  key={post.slug}
                  className="border-t border-border first:border-t-0"
                >
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

            <Link
              href="/blog"
              className="label-mono inline-flex items-center gap-2 mt-6 text-[10px] text-foreground border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200"
            >
              Read all writeups
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Selected builds. The desk grid moved to /builds, so this rail
                is the homepage's only route into the work. The rule above
                matches the one dividing the story from the focus list, so both
                columns break their sections the same way. */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="mb-3">
                <span className="kicker">Builds</span>
              </div>

              <ul className="[&>li:first-child>a]:pt-0">
                {railBuilds.map((build) => {
                  const row = (
                    <>
                      <span className="flex items-center gap-2 mb-1.5">
                        <span className="kicker">{build.deskName}</span>
                        {build.isLive && (
                          <span className="kicker kicker-muted">· Live</span>
                        )}
                      </span>
                      <span className="flex items-start justify-between gap-4">
                        <span className="min-w-0">
                          <span className="headline block text-foreground text-[18px] sm:text-[20px] leading-[1.2] group-hover:text-primary transition-colors duration-200">
                            {build.name}
                          </span>
                          <span className="dateline block mt-1.5">
                            {build.subtitle}
                          </span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 mt-0.5 shrink-0 text-foreground/40 group-hover:text-primary transition-colors duration-200" />
                      </span>
                    </>
                  );

                  return (
                    <li
                      key={build.id}
                      className="border-t border-border first:border-t-0"
                    >
                      {build.isLive ? (
                        <a
                          href={build.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block py-4"
                        >
                          {row}
                        </a>
                      ) : (
                        <Link href={build.href} className="group block py-4">
                          {row}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/builds"
                className="label-mono inline-flex items-center gap-2 mt-6 text-[10px] text-foreground border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-200"
              >
                More builds
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
