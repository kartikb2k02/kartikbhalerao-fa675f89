"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { SiNotion } from "react-icons/si";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { NotionFlywheel } from "@/components/NotionFlywheel";
import { NotionRevenueCurve } from "@/components/NotionRevenueCurve";
import { NotionUserGrowth } from "@/components/NotionUserGrowth";
import type { CaseStudy } from "@/data/caseStudies";

/**
 * Notion growth teardown.
 *
 * Research-heavy rather than screenshot-heavy, so it does not use the generic
 * Overview/Challenge/Solution template: the argument lives in three figures
 * and four tables, and the thing worth preserving is which numbers the company
 * stated and which an analyst estimated — every table carries that distinction
 * in its own column, and the revenue figure in the shape of its dots.
 */

type Row = (string | null)[];

/** Links inside a cell are written as [text](href) and expanded here, so the
 *  tables below stay readable as data. */
function Cell({ value }: { value: string }) {
  const parts = value.split(/(\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!link) return <span key={i}>{part}</span>;
        return (
          <a
            key={i}
            href={link[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 underline decoration-sky-600/35 underline-offset-2 transition-colors hover:decoration-sky-600 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:decoration-sky-300"
          >
            {link[1]}
          </a>
        );
      })}
    </>
  );
}

function Table({ head, rows }: { head: string[]; rows: Row[] }) {
  return (
    <div className="my-7 overflow-x-auto border border-border">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-foreground">
            {head.map((h) => (
              <th
                key={h}
                className="label-mono whitespace-nowrap border-r border-background/15 px-3 py-2.5 text-[10px] uppercase tracking-[0.12em] text-background last:border-r-0"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border even:bg-secondary/40">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3 py-2.5 align-top text-[14px] leading-[1.6] ${
                    j === 0 ? "font-medium text-foreground" : "text-foreground/75"
                  }`}
                >
                  {cell ? <Cell value={cell} /> : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Section wrapper: kicker and heading on the left, argument on the right —
 *  the same two-column rhythm the Neo Health case study uses.
 *
 *  `icon` fills the empty foot of the left column on the sections that earn
 *  one. It sits straight on the page rather than in a tile: the art is already
 *  a closed line drawing, and a box around a box reads as chrome. Black line
 *  work on a transparent ground, so it inverts in dark mode rather than
 *  disappearing. */
function Act({
  kicker,
  title,
  icon,
  iconAlt,
  children,
}: {
  kicker: string;
  title: string;
  icon?: string;
  iconAlt?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20 grid gap-8 sm:grid-cols-[0.8fr_2fr]">
      <div>
        <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {kicker}
        </span>
        <h2 className="mt-3 text-[clamp(1.6rem,3.6vw,2.4rem)] font-medium leading-tight tracking-[-0.03em]">
          {title}
        </h2>
        {icon && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={icon}
            alt={iconAlt ?? ""}
            aria-hidden={iconAlt ? undefined : true}
            className="mt-7 h-[72px] w-[72px] select-none opacity-85 transition-opacity duration-200 hover:opacity-100 dark:invert"
            loading="lazy"
          />
        )}
      </div>
      <div className="space-y-5 text-[16px] leading-[1.8] text-foreground/75">{children}</div>
    </section>
  );
}

/** One beat of an act: a bolded claim, then the evidence. */
function Beat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="border-l-2 border-foreground/15 pl-5">
      <span className="font-medium text-foreground">{label}</span>{" "}
      <span className="text-foreground/75">{children}</span>
    </li>
  );
}

function Source({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sky-700 underline decoration-sky-600/35 underline-offset-2 transition-colors hover:decoration-sky-600 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:decoration-sky-300"
    >
      {children}
    </a>
  );
}

/**
 * The revenue tile carries the latest figure rather than the last one Notion
 * confirmed itself, so it has to say "estimate" plainly: $865M is Sacra's
 * number, where the $500M+ beneath it in the Numbers section is the company's.
 */
const HEADLINE_STATS = [
  ["100M", "users, passed August 2024", "Company-stated"],
  ["$865M", "ARR, July 2026", "Estimate · Sacra"],
  ["$11B", "valuation, January 2026", "Reported"],
  ["~50%", "of B2B customers started personal", "Company-stated"],
] as const;

const QUOTES = [
  ["Nobody wakes up wanting to make software.", "Ivan Zhao", "Why v1 failed"],
  ["It was not really a product.", "Ivan Zhao, on the first version", "Act 1"],
  ["We were just, code, code, code.", "Ivan Zhao, on Kyoto", "Act 1"],
  ["It's a craft central.", "Ivan Zhao, on Kyoto", "Why Kyoto"],
  ["LEGO-style software blocks", "Ivan Zhao", "The product idea"],
  ["Humans are toolmakers by nature", "Ivan Zhao", "The mission"],
  [
    "Community is a force that should power every stage of the funnel.",
    "Olivia Nottebohm, former CRO",
    "The flywheel",
  ],
  ["This changes everything.", "Ivan Zhao, on first trying GPT-4", "Act 3"],
  [
    "Notion could be the front-end infrastructure for the world.",
    "Ivan Zhao",
    "The closing line",
  ],
] as const;

/**
 * Ten of these, laid out as a bento. `wide` is set on items 1 and 7 only:
 * at three columns that is 12 cells over 4 rows with no holes, so the grid
 * packs without `dense` reordering the reading order behind the reader's back.
 */
const FUN_FACTS: { title: string; body: string; wide?: boolean }[] = [
  {
    title: "Shoji-screen startup",
    body: "In Kyoto the founders' bedrooms were split only by a paper Shoji screen, in a rented two-story house. Neither of them spoke Japanese, which removed the last excuse not to work.",
    wide: true,
  },
  {
    title: "The repo name",
    body: 'Notion\'s main git repo is still called "notion-next," from the Kyoto rewrite.',
  },
  {
    title: "30 shades of white",
    body: "The team tested 30 warm whites for one office wall. Akshay Kothari painted office #3 himself.",
  },
  {
    title: "DIY merch",
    body: "They made their own work jackets because no merch felt right.",
  },
  {
    title: "Lighting rant",
    body: 'Ivan calls overhead fluorescent lighting "hell" and picked every piece of office furniture himself.',
  },
  {
    title: "Tiny team, big bet",
    body: "Notion had 58 people when it decided to invest in Japan.",
  },
  {
    title: "The 1,000 users photo",
    body: "Ivan still has the photo he took the day Notion hit 1,000 users — four digits, on a product that now counts nine.",
    wide: true,
  },
  {
    title: "Korean textbooks",
    body: "Before Notion launched in Korean, users there had already written 4 textbooks about it.",
  },
  {
    title: "The 10-year marketplace",
    body: "The 2013 pitch deck promised a template marketplace in 15 months. It took about 10 years.",
  },
  {
    title: "Template millionaires",
    body: "Some creators made $1M from Notion templates in 2023, per Ivan.",
  },
];

const PLAYBOOK = [
  [
    "Let users show the product, not just explain it",
    "Templates fixed the blank-page problem that no amount of marketing copy could.",
  ],
  [
    "Use personal use as a trojan horse for teams",
    "Free for individuals and students, then teams pay. About half of Notion's B2B customers arrived this way.",
  ],
  [
    "Give superusers status, not cash",
    "Ambassadors, consultants and creators who earn from your product rather than from your payroll.",
  ],
  [
    "Pick activation metrics you can see on day one",
    "Notion's growth lead watches for a second collaborator invited, a document edited, a second document created within a day of signup, and a work email at signup.",
  ],
] as const;

const SOURCES = [
  ["100 Million of You, Ivan Zhao", "https://notion.com/blog/100-million-of-you"],
  [
    "How Notion does marketing, First Round Review",
    "https://review.firstround.com/how-notion-does-marketing-a-deep-dive-into-its-community-influencers-growth-playbooks/",
  ],
  [
    "Design on a deadline, Figma",
    "https://figma.com/blog/design-on-a-deadline-how-notion-pulled-itself-back-from-the-brink-of-failure/",
  ],
  ["Notion spotlight, Sequoia", "https://sequoiacap.com/article/notion-spotlight"],
  ["Lenny's Podcast with Ivan Zhao", "https://www.lennysnewsletter.com/p/ivan-zhao"],
  ["Sacra on Notion", "https://sacra.com/c/notion/"],
  [
    "AI Magazine on Notion agents",
    "https://aimagazine.com/news/notion-ai-agents-for-a-workspace-used-by-100-million-people",
  ],
  [
    "TechCrunch on the free personal plan",
    "https://techcrunch.com/2020/05/19/notion-drops-usage-limit-on-its-its-personal-free-tier/amp/",
  ],
  ["Notion in Japanese, Notion blog", "https://notion.com/blog/notion-launching-in-japanese"],
  ["Notion AI history, Latent Space", "https://latent.space/wiki/notion-ai-adfc0b84/"],
  [
    "Template creator earnings, Kajabi",
    "https://kajabi.com/blog/can-you-make-money-selling-notion-templates",
  ],
] as const;

export function NotionGrowthDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Nav width={860} />

      <main className="py-14">
        <div className="mx-auto max-w-[860px] px-4">
          <Link
            href="/builds"
            className="group mb-8 inline-flex items-center gap-1.5 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            All builds
          </Link>

          <div className="mb-10">
            <p className="label-mono mb-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Growth teardown · Desk research
            </p>

            {/* Logo, title and one of Notion's own illustrations on one line.
                The mark comes from react-icons rather than a CDN or a copied
                file: it inherits `currentColor`, so it needs no dark variant. */}
            <div className="flex items-center gap-4">
              <SiNotion
                aria-hidden="true"
                className="h-7 w-7 shrink-0 text-foreground sm:h-9 sm:w-9"
              />
              <h1 className="text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
                {caseStudy.title}
              </h1>
              {/* Black line art on a transparent ground, so dark mode inverts
                  it to white rather than hiding it. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lovable-uploads/notion-boat.webp"
                alt=""
                aria-hidden="true"
                className="ml-auto hidden h-[92px] w-auto select-none dark:invert sm:block lg:h-[108px]"
                loading="eager"
              />
            </div>

            <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              {caseStudy.subtitle}
            </p>
          </div>

          {/* The whole argument in four numbers, before any of the detail.
              Four separate tiles rather than one divided strip: each number
              comes from a different source and carries its own provenance
              line, so they should not read as one table. */}
          <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HEADLINE_STATS.map(([figure, caption, status]) => (
              <div
                key={figure}
                className="flex flex-col rounded-lg border border-border bg-secondary px-4 py-5 transition-colors duration-200 hover:border-foreground/25"
              >
                <p className="text-[clamp(1.5rem,3.4vw,2.1rem)] font-semibold leading-none tracking-[-0.04em] text-foreground">
                  {figure}
                </p>
                <p className="mt-2.5 text-[13px] leading-[1.45] text-foreground/70">{caption}</p>
                <p className="label-mono mt-auto pt-3 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  {status}
                </p>
              </div>
            ))}
          </div>

          {/* Panelled like the sources block at the foot of the page, so the
              claim and the evidence behind it bracket the piece. It takes the
              site's own note colour rather than another Tailwind hue — the
              warm tone the sticky notes already use. */}
          <div className="mb-16 grid gap-8 rounded-xl border border-[hsl(var(--note-edge))] bg-[hsl(var(--note))] px-5 py-6 sm:grid-cols-[0.8fr_2fr] sm:px-7 sm:py-7">
            <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-[hsl(var(--note-ink)/0.55)]">
              The thesis
            </span>
            <div className="space-y-5 text-[17px] leading-[1.8] text-[hsl(var(--note-ink)/0.85)]">
              <p>
                Most founders explain their product. Notion let users show it. Templates, YouTube
                setups and &ldquo;How I use Notion&rdquo; TikToks did the selling, and for a product
                that is genuinely hard to explain, the community became the onboarding.
              </p>
              <p>
                These are my research notes on how that happened: the numbers, the three acts, the
                funding, and the places where the sources disagree. Where a figure is Notion&apos;s
                own claim I say so, and where it is an analyst estimate I say that too, because the
                gap between the two is wide enough to change the story.
              </p>
            </div>
          </div>

          <Act kicker="Numbers" title="$3M to $500M+ in six years">
            <p>
              Notion went from $3M ARR in 2019 to past $500M in 2025 with a bottom-up, mostly
              organic engine, and was profitable for most of its life. The valuation moved faster
              than the revenue: $800M in July 2019 on $3M ARR, $2B in April 2020 on $13M, $10B in
              October 2021 on $31M (
              <Source href="https://unanswered.io/guide/notion-company-valuation-revenue-business-model">
                source
              </Source>
              ).
            </p>

            <NotionRevenueCurve />

            <p>
              Revenue crawled for years and then took off: the jump from about $240M to $500M+
              lands after Notion AI. The user curve has the same shape, and the biggest leg — 20M to
              100M — took under three years.
            </p>

            <NotionUserGrowth />

            <p className="text-[14px] text-muted-foreground">
              Revenue sources: Getlatka, ValueAdd VC, AI Magazine, Builtin and{" "}
              <Source href="https://sacra.com/c/notion/">Sacra</Source>, whose figures past $500M
              are estimates. User sources: Wikipedia, Bullet, Ness Labs and{" "}
              <Source href="https://notion.com/blog/100-million-of-you">
                Notion&apos;s own blog
              </Source>
              .
            </p>
          </Act>

          {/* Full width rather than in the two-column rhythm: a ring needs the
              whole measure, and this is the one diagram the page argues from. */}
          <section className="mb-20">
            <div className="mb-6 max-w-2xl">
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                The loop
              </span>
              <h2 className="mt-3 text-[clamp(1.8rem,4.2vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.035em]">
                Every shared template recruits the next user
              </h2>
              <p className="mt-5 text-[16px] leading-[1.8] text-foreground/75">
                The flywheel is the whole company. A user builds something for themselves, shares
                it, and that artefact does the explaining Notion&apos;s marketing could not. Money
                enters at one step only, and it pays for the free plan that starts the loop again.
              </p>
            </div>

            <NotionFlywheel />

            <p className="mt-6 max-w-2xl text-[16px] leading-[1.8] text-foreground/75">
              Notion curated the gallery instead of building templates in-house, and the gallery now
              holds tens of thousands of them (
              <Source href="https://review.firstround.com/how-notion-does-marketing-a-deep-dive-into-its-community-influencers-growth-playbooks/">
                First Round
              </Source>
              ). The creators were not volunteers: Thomas Frank made $1M from two templates by 2022,
              and Easlo passed $500K (
              <Source href="https://kajabi.com/blog/can-you-make-money-selling-notion-templates">
                Kajabi
              </Source>
              ).
            </p>
          </section>

          <Act
            kicker="01 · Act one, 2013 to 2016"
            title="Near death and the Kyoto rebuild"
            icon="/lovable-uploads/notion-icon-laptop.webp"
          >
            <p>
              Notion nearly died in 2015, and a full rewrite in Kyoto saved it. This is the part of
              the story that makes the rest legible: the product idea was right before the company
              could carry it.
            </p>
            <ul className="space-y-4">
              <Beat label="The crash:">
                Ivan Zhao and Simon Last built the app on a weak tech stack, and it crashed
                constantly (
                <Source href="https://figma.com/blog/design-on-a-deadline-how-notion-pulled-itself-back-from-the-brink-of-failure/">
                  Figma
                </Source>
                ).
              </Beat>
              <Beat label="The reset:">
                They laid off the whole team and moved to Kyoto to rebuild from zero (
                <Source href="https://www.techflowpost.com/en-US/article/31756">TechFlow</Source>),
                coding 18 hours a day (
                <Source href="https://sequoiacap.com/article/notion-spotlight">Sequoia</Source>).
              </Beat>
              <Beat label="Ivan&apos;s own words:">
                right product, wrong tech stack, so the two of them went to Japan to rewrite it. The
                main git repo is still called &ldquo;notion-next&rdquo; (
                <Source href="https://notion.com/blog/100-million-of-you">100 Million of You</Source>
                ).
              </Beat>
              <Beat label="Mom&apos;s help:">
                Ivan thanks his mother for &ldquo;the bridge.&rdquo; Many blogs call it a $150K loan,
                but his post does not say so, so the number stays out of this.
              </Beat>
              <Beat label="Notion 1.0:">
                launched March 2016 and took #1 Product of the Day, Week and Month on Product Hunt (
                <Source href="https://bullet.so/blog/history-of-notion-everything-from-users-funding-and-more">
                  Bullet
                </Source>
                ).
              </Beat>
            </ul>
          </Act>

          <Act
            kicker="02 · Act two, 2018 to 2022"
            title="Templates and the community flywheel"
            icon="/lovable-uploads/notion-icon-photos.webp"
          >
            <p>
              Real traction began with the Notion 2.0 launch on Product Hunt in 2018 — Ivan dates it
              there himself — and then templates and creators carried it for four years.
            </p>
            <ul className="space-y-4">
              <Beat label="Free personal plan, May 2020:">
                the old free plan capped content at 1,000 blocks; the new one had no cap. Students
                and teachers got Personal Pro free too (
                <Source href="https://techcrunch.com/2020/05/19/notion-drops-usage-limit-on-its-its-personal-free-tier/amp/">
                  TechCrunch
                </Source>
                ).
              </Beat>
              <Beat label="Ambassadors:">
                300+ superusers run groups and events, and about 1,000 applied in the first few
                weeks. The perks were early access, AMAs, a private Slack and swag — status, not
                cash.
              </Beat>
              <Beat label="Consultants:">
                the directory grew from two or three people to 60+, which gave teams cheap
                onboarding Notion never had to staff.
              </Beat>
              <Beat label="TikTok:">
                #Notion reached 1B views across 80,000+ videos, and the servers crashed after
                &ldquo;How I use Notion&rdquo; videos went viral (
                <Source href="https://review.firstround.com/how-notion-does-marketing-a-deep-dive-into-its-community-influencers-growth-playbooks/">
                  First Round
                </Source>
                ).
              </Beat>
              <Beat label="Going local:">
                Korean came first in August 2020 because Korean users had already written four Notion
                textbooks (
                <Source href="https://www.notion.com/da/releases/2020-08-10">release notes</Source>
                ). Japan followed, with 4x daily active user growth in a year (
                <Source href="https://notion.com/blog/notion-launching-in-japanese">
                  Notion blog
                </Source>
                ).
              </Beat>
              <Beat label="The Covid scare:">
                Notion nearly ran out of database space (
                <Source href="https://www.lennysnewsletter.com/p/ivan-zhao">Lenny&apos;s Podcast</Source>
                ) — a second near-death, this time from winning too fast.
              </Beat>
            </ul>
          </Act>

          <Act kicker="03 · Act three, 2023 to 2026" title="AI, agents, and revenue not sold by the seat">
            <p>
              AI turned a slow curve into a steep one. Notion sat around $240M ARR in 2023 and took
              nearly two years to double, then added about $100M in four months once the AI upgrades
              landed (
              <Source href="https://valueaddvc.com/blog/how-does-notion-make-money-freemium-seats-ai-add-ons-and-the-business-model-breakdown">
                ValueAdd VC
              </Source>
              , an estimate).
            </p>
            <ul className="space-y-4">
              <Beat label="The trigger:">
                at an offsite in Cancún, Ivan got early GPT-4 access and realised &ldquo;this changes
                everything&rdquo; (
                <Source href="https://www.techflowpost.com/en-US/article/31756">TechFlow</Source>).
              </Beat>
              <Beat label="Notion AI:">
                opened to everyone on 22 February 2023 as a $10 per member monthly add-on (
                <Source href="https://latent.space/wiki/notion-ai-adfc0b84/">Latent Space</Source>).
              </Beat>
              <Beat label="Notion 3.0:">
                launched September 2025 with the line &ldquo;You assign the tasks. Your Agents do the
                work.&rdquo;
              </Beat>
              <Beat label="Custom Agents:">
                users built 1M+ agents in the two months after the February 2026 launch (
                <Source href="https://aimagazine.com/news/notion-ai-agents-for-a-workspace-used-by-100-million-people">
                  AI Magazine
                </Source>
                ), and credits at $10 per 1,000 are Notion&apos;s first revenue not priced per seat (
                <Source href="https://sacra.com/c/notion/">Sacra</Source>).
              </Beat>
            </ul>
          </Act>

          <Act kicker="Capital" title="Six years and one near-death on a $2M seed">
            <p>
              Notion raised only about $345M in primary rounds, plus a 2026 employee tender. The
              shape of the story: six years on a seed, then $800M to $10B in about 27 months.
            </p>
            <Table
              head={["Date", "Round", "Amount", "Valuation", "Notable"]}
              rows={[
                [
                  "Jan 2026",
                  "Employee tender",
                  "$270M",
                  "$11B",
                  "GIC joined Sequoia and Index ([AI Magazine](https://aimagazine.com/news/notion-ai-agents-for-a-workspace-used-by-100-million-people))",
                ],
                [
                  "Oct 2021",
                  "Series C",
                  "$275M",
                  "$10B",
                  "Coatue and Sequoia; 20M users at the time",
                ],
                [
                  "Apr 2020",
                  "Series B",
                  "$50M",
                  "$2B",
                  "Index Ventures ([TechCrunch](https://techcrunch.com/2020/04/01/notion-hits-2-billion-valuation-in-new-raise))",
                ],
                [
                  "Jul 2019",
                  "Series A",
                  "$10M to $18.2M",
                  "$800M",
                  "Angels incl. Elad Gil and Daniel Gross; reports vary on size",
                ],
                [
                  "Mar 2013",
                  "Seed",
                  "$2M",
                  "Not disclosed",
                  "First Round wrote the biggest check, plus SV Angel",
                ],
              ]}
            />
          </Act>

          <Act kicker="M&A" title="Buy small teams, make them daily surfaces">
            <p>
              Every acquisition turned into something a user touches every day — calendar, mail,
              integrations — rather than a feature buried in settings.
            </p>
            <Table
              head={["Date", "Company", "What it was", "What it became"]}
              rows={[
                [
                  "Feb 2024",
                  "[Skiff](https://techcrunch.com/2024/02/09/notion-acquires-privacy-focused-productivity-platform-skiff/)",
                  "Encrypted docs, calendar and email; raised about $14.2M",
                  "The team behind Notion Mail",
                ],
                ["Jul 2022", "FlowDash", "Workflow management tool", "Not detailed publicly"],
                [
                  "Jun 2022",
                  "[Cron](https://www.themiddlemarket.com/latest-news/notion-acquires-cron)",
                  "Calendar app Ivan himself had switched to",
                  "Notion Calendar, launched Jan 2024",
                ],
                [
                  "Sep 2021",
                  "[Automate.io](https://techcrunch.com/2021/09/08/notion-acquires-indias-automate-io-in-push-to-accelerate-product-expansion)",
                  "Hyderabad startup, about 40 people, 200+ integrations, profitable",
                  "Notion's first engineering hub outside the US",
                ],
              ]}
            />
            <p>
              The India angle: Automate.io made Hyderabad Notion&apos;s fifth office, after San
              Francisco, New York, Dublin and Tokyo (
              <Source href="https://www.notion.com/ko/blog/taking-building-blocks-beyond-the-workspace-welcome-automate-io">
                Notion blog
              </Source>
              ).
            </p>
          </Act>

          <Act kicker="Pricing" title="A freer free tier, with AI pushed upmarket">
            <p>
              The pattern is consistent: make the free plan harder to outgrow, then put the new
              value in the plans above it. Today Plus is $10 and Business $20 per seat a month,
              billed annually (
              <Source href="https://pricingsaas.com/companies/notion/diffs/2024Q1">
                PricingSaaS, Oct 2026
              </Source>
              ).
            </p>
            <Table
              head={["Date", "Change", "Why it matters"]}
              rows={[
                [
                  "May 2026",
                  "Notion credits: $10 per 1,000, used by Custom Agents",
                  "First revenue not tied to seats",
                ],
                [
                  "May 2025",
                  "AI no longer sold standalone to new customers; bundled into Business and Enterprise",
                  "Teams wanting AI move the whole workspace up a tier",
                ],
                [
                  "Jun 2024",
                  "First-ever Plus price rise: $10 annual, $12 monthly per member",
                  "Notion cited 90 updates in 2023 alone",
                ],
                [
                  "Feb 2023",
                  "Notion AI launches as a $10 per member add-on",
                  "AI starts as an upsell on any plan",
                ],
                [
                  "Dec 2022",
                  "Personal Pro dropped; free plan gets a team trial; Business plan added",
                  "Free users can try it with colleagues before paying",
                ],
                [
                  "May 2020",
                  "Free personal plan loses its 1,000-block cap; Personal Pro at $5",
                  "Landed two months into Covid lockdowns",
                ],
              ]}
            />
          </Act>

          <Act kicker="Benchmark" title="Why investors pay 18x for Notion and 3x for Asana">
            <p>
              Notion is growing several times faster than the older work-software cohort, and the
              multiple follows the growth rate rather than the revenue. All figures are Sacra
              estimates or public filings as quoted by{" "}
              <Source href="https://sacra.com/research/notion-at-865m-year-growing-82-yoy/">
                Sacra
              </Source>
              .
            </p>
            <Table
              head={["Company", "Revenue", "Growth", "Valuation", "Multiple"]}
              rows={[
                ["Notion", "$865M ARR (Jul 2026, est.)", "+82%", "$11B", "about 18x"],
                ["monday.com", "$1.37B TTM (Jun 2026)", "+24%", "$4.34B", "3.2x"],
                ["Asana", "$809M TTM (Apr 2026)", "+9%", "$2.2B", "2.7x"],
                [
                  "Airtable",
                  "$480M ARR (Jun 2026)",
                  "+20%",
                  "Bought by Bending Spoons, Aug 2026",
                  "Acquired",
                ],
                ["Glean", "$300M ARR (May 2026)", "+89% (2025)", "$7.2B", "about 45x"],
              ]}
            />
            <p>
              Grammarly, which merged with Coda, sat at about $700M ARR in May 2025 and grows far
              slower. One caution: Sacra quotes Notion&apos;s growth as both +53% and +82% on
              different pages, so &ldquo;growing over 50%&rdquo; is the safe way to say it.
            </p>
          </Act>

          <section className="mb-20">
            <div className="mb-8 max-w-2xl">
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                The playbook
              </span>
              <h2 className="mt-3 text-[clamp(1.8rem,4.2vw,2.8rem)] font-medium leading-[1.05] tracking-[-0.035em]">
                Four moves a smaller SaaS can copy
              </h2>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {PLAYBOOK.map(([title, body], i) => (
                <div key={title} className="bg-background p-6">
                  <span className="label-mono text-[11px] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2.5 text-[17px] font-medium leading-snug">{title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-foreground/70">{body}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-[14px] leading-[1.7] text-muted-foreground">
              The activation metrics come from Notion&apos;s growth lead, via{" "}
              <Source href="https://review.firstround.com/how-notion-does-marketing-a-deep-dive-into-its-community-influencers-growth-playbooks/">
                First Round
              </Source>
              .
            </p>
          </section>

          <Act
            kicker="Caveats"
            title="Where the sources disagree"
            icon="/lovable-uploads/notion-icon-book.webp"
          >
            <p>
              Four of these numbers do not line up across sources, so the notes above phrase them
              carefully. Anyone reusing this research should keep the hedges.
            </p>
            <ul className="space-y-4">
              <Beat label="When it hit 1M users:">
                Wikipedia says September 2019; Ivan says 2020, &ldquo;right before Covid.&rdquo;
                Safest phrasing is &ldquo;around 2019 to 2020.&rdquo;
              </Beat>
              <Beat label="ARR:">
                the company-stated figure is &ldquo;over $500M (Sept 2025).&rdquo; The $610M and
                $865M figures are analyst estimates.
              </Beat>
              <Beat label="The 2021 round:">
                blogs disagree on Series C or Series D. &ldquo;$275M at a $10B valuation&rdquo;
                avoids the problem.
              </Beat>
              <Beat label="Unverified:">
                &ldquo;80% organic traffic&rdquo; and &ldquo;90% organic growth&rdquo; appear only in
                secondary blogs, so they are left out.
              </Beat>
            </ul>
          </Act>

          {/* The third panel: grey, between the thesis at the top and the
              sources at the foot. Quotes are other people's words, so they get
              their own ground rather than sitting loose in the page. */}
          <section className="relative mb-20 overflow-hidden rounded-xl border border-border bg-secondary px-5 py-6 sm:px-7 sm:py-7">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 right-2 select-none font-serif text-[150px] leading-none text-foreground/[0.055]"
            >
              &rdquo;
            </span>

            <div className="relative mb-7 max-w-2xl">
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                In their words
              </span>
              <h2 className="mt-3 text-[clamp(1.6rem,3.6vw,2.4rem)] font-medium leading-tight tracking-[-0.03em]">
                Lines worth keeping
              </h2>
            </div>

            <div className="relative border-t border-border/80">
              {QUOTES.map(([quote, who, where]) => (
                <div
                  key={quote}
                  className="group grid gap-2 border-b border-border/80 py-5 transition-colors sm:grid-cols-[2fr_1fr] sm:gap-8"
                >
                  <p className="flex gap-3 text-[17px] leading-snug text-foreground/90">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-[1px] w-5 shrink-0 bg-foreground/25 transition-all duration-200 group-hover:w-8 group-hover:bg-signal"
                    />
                    <span>&ldquo;{quote}&rdquo;</span>
                  </p>
                  <p className="pl-8 text-[13px] leading-[1.6] text-muted-foreground sm:pl-0">
                    {who}
                    <span className="label-mono mt-1 block text-[10px] uppercase tracking-[0.12em] text-foreground/40">
                      {where}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <div className="mb-8 max-w-2xl">
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Details
              </span>
              <h2 className="mt-3 text-[clamp(1.6rem,3.6vw,2.4rem)] font-medium leading-tight tracking-[-0.03em]">
                The small human things
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">
                Ten details that say more about how Notion was built than any of the numbers above.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {FUN_FACTS.map((fact, i) => (
                <article
                  key={fact.title}
                  className={`hard-card group relative overflow-hidden p-5 ${
                    fact.wide ? "lg:col-span-2" : ""
                  }`}
                >
                  {/* The index as furniture, not information — it sits under
                      the text and warms up when the card is pointed at. */}
                  <span
                    aria-hidden="true"
                    className="nameplate pointer-events-none absolute -top-3 right-1 select-none text-[56px] leading-none text-foreground/[0.06] transition-colors duration-200 group-hover:text-foreground/[0.13]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="relative text-[14.5px] font-medium leading-snug text-foreground">
                    {fact.title}
                  </h3>
                  <p
                    className={`relative mt-2 leading-[1.65] text-muted-foreground ${
                      fact.wide ? "max-w-[46ch] text-[14.5px]" : "text-[13.5px]"
                    }`}
                  >
                    {fact.body}
                  </p>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-signal transition-all duration-300 group-hover:w-full"
                  />
                </article>
              ))}
            </div>
            <p className="mt-6 text-[13px] text-muted-foreground">
              Mostly from{" "}
              <Source href="https://sequoiacap.com/article/notion-spotlight">Sequoia</Source>,{" "}
              <Source href="https://nira.com/notion-history/">Nira</Source> and Notion&apos;s own
              release notes.
            </p>
          </section>

          {/* The sources sit in a panel rather than trailing off the bottom of
              the page as grey text — this is a research piece, so where it came
              from is part of the work, not an afterthought. Blue is the one
              tint the page spends nowhere else — and `blue-*` is not available
              here: the Tailwind config replaces that scale with one desk token. */}
          <section className="mb-10 rounded-xl border border-sky-200 bg-sky-100 px-5 py-6 dark:border-sky-500/30 dark:bg-sky-500/10 sm:px-7 sm:py-7">
            <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-sky-700 dark:text-sky-300">
              Sources
            </span>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {SOURCES.map(([label, href]) => (
                <li key={href} className="text-[14px] leading-[1.6]">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-800 underline decoration-sky-600/40 underline-offset-2 transition-colors hover:decoration-sky-700 dark:text-sky-300 dark:decoration-sky-300/40"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <SiteFooter width={860} />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-foreground/40 hover:text-foreground ${
          showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
