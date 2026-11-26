"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import {
  Badge,
  bandIsDark,
  Block,
  Card,
  Figure,
  grad,
  Kicker,
  Pill,
  PillLink,
  Src,
  Step,
} from "@/components/monetization/Chrome";
import {
  DropFunnel,
  EcosystemHub,
  FreemiumTree,
  GrowthEquation,
  LeverMap,
  ModelPicker,
  OutcomeGate,
  PaymentsFlow,
  UsageStaircase,
} from "@/components/monetization/Figures";
import { useCountUp, useInView } from "@/components/monetization/motion";

/**
 * "5 Monetization Models That Are Secretly Growth Engines".
 *
 * Five parallel arguments with identical parts each — lever, loop,
 * proof, metric, how to run it, the catch — a structure the generic
 * markdown article cannot show. So this is its own page, built the way
 * the Notion teardown is: one model per act, the argument carried by
 * eleven figures rather than by prose alone.
 *
 * It is laid out the way Linktree lays out their site: flat saturated
 * colour blocks running edge to edge, chunky 800-weight type in a
 * contrasting brand colour, big radii, pill buttons — and no gradients,
 * hairline borders or glows anywhere. Depth comes from colour alone.
 *
 * Three decisions hold it together.
 *
 * Each model owns one of Linktree's colours, and the order is a rhythm
 * rather than a list: lime, cobalt, cream, purple, maroon — bright,
 * deep, light, deep, deepest. Scrolling the five should feel like five
 * rooms, not one long corridor, and a reader who has met model 04 on
 * purple recognises it on sight in the cheat sheet forty screens later.
 *
 * The colour blocks do not flip between light and dark mode. Lime is
 * lime at 1am. What flips is the connective tissue between them — the
 * masthead's measure, the argument, the sources — which carries no
 * block and follows the reader's theme.
 *
 * Everything else is a flat white tile with a 32px radius. Making all
 * eleven figures, every proof and every callout the same object is what
 * stops a page this long reading as a scrapbook, and pinning the tile
 * white in both themes is what keeps a diagram legible on maroon.
 *
 * Every number, label, link and line of copy is the author's, unchanged.
 */

const MODELS = [
  {
    n: "01",
    title: "Pay for what you use",
    short: "Pay for what you use",
    lever: "Expansion",
    gloss: "grows revenue inside every account.",
    metric:
      "Net revenue retention (NRR). Over 120% means your existing base is a growth engine on its own.",
  },
  {
    n: "02",
    title: "Free for one, paid for the team",
    short: "Free for one, paid for the team",
    lever: "Acquisition",
    gloss: "turns users into your sales team.",
    metric:
      "Product-qualified leads (PQLs), meaning free workspaces showing team signals, plus free-to-paid conversion.",
  },
  {
    n: "03",
    title: "Take a cut of the ecosystem",
    short: "Take a cut of the ecosystem",
    lever: "Acquisition and lock-in",
    gloss: "other people's hustle brings you users.",
    metric:
      "Number of earning creators, and the share of new signups that come from creator content.",
  },
  {
    n: "04",
    title: "Get paid when money moves",
    short: "Get paid when money moves",
    lever: "Expansion that tracks your customers' success",
    gloss: "you grow when your customers grow.",
    metric:
      "Payments penetration (the share of your customers' volume that runs through you) and take rate.",
  },
  {
    n: "05",
    title: "Charge for the result, not the tool",
    short: "Charge for the result",
    lever: "Faster sales and compounding expansion",
    gloss: "removes the risk that blocks the sale.",
    metric: "Success rate (resolution rate, conversion rate) and outcomes per customer per month.",
  },
] as const;

/** The bands the four masthead tiles take: lime, cobalt, purple,
 *  maroon. Cream is skipped, because the masthead is cream. */
const BENTO = [0, 1, 3, 4] as const;

const HEADLINE = [
  ["146%", "Intercom's net revenue retention after it changed how Fin charges", "was 112%"],
  ["76%", "of Shopify's revenue is merchant services, not subscriptions", "FY2025 10-K"],
  ["$5 : $1", "Toast's payments revenue against its software revenue", "FY2025 10-K"],
  ["4 of 5", "of these models drive expansion, so revenue compounds", "the lever map"],
] as const;

const LOOPS: string[][] = [
  [
    "low entry price",
    "more teams try it",
    "they find value",
    "usage climbs",
    "the bill climbs",
    "they find new use cases",
    "usage climbs again",
  ],
  [
    "one person signs up free",
    "they invite a teammate to collaborate",
    "the team adopts it",
    "the company pays",
    "those people take it to their next job",
    "new companies start the loop",
  ],
  [
    "more users",
    "more creators want to sell to them",
    "more apps and templates",
    "creators promote their work (and your platform)",
    "more users",
  ],
  [
    "customer sells more",
    "more volume runs through you",
    "you earn more",
    "you use payments data to offer loans and faster payouts",
    "customer grows faster",
    "sells even more",
  ],
  [
    "no-risk pricing",
    "easy yes from buyers",
    "more volume runs through the product",
    "the team improves the success rate",
    "more outcomes per customer",
    "more revenue",
  ],
];

const CHEAT_SHEET: string[][] = [
  [
    "1. Pay for what you use",
    "Expansion",
    "Customers win, usage grows, bill grows",
    "Net revenue retention",
    "Snowflake: 126% NRR",
  ],
  [
    "2. Free for one, paid for the team",
    "Acquisition",
    "Users invite teammates, companies pay",
    "Product-qualified leads",
    "Figma: 136% NDR, $1.056B revenue",
  ],
  [
    "3. Take a cut of the ecosystem",
    "Acquisition and lock-in",
    "Creators bring users, users attract creators",
    "Earning creators",
    "Apple: $1.4T ecosystem, nearly 3x since 2019",
  ],
  [
    "4. Get paid when money moves",
    "Expansion with customer success",
    "Customers sell more, you earn more",
    "Payments penetration",
    "Shopify: 68% of sales on its payments",
  ],
  [
    "5. Charge for the result",
    "Faster sales and expansion",
    "Better success rate, more revenue",
    "Success rate",
    "Intercom Fin: NRR 112% to 146%",
  ],
];

const SOURCES: [string, string][] = [
  [
    "Snowflake Q1 FY2027 results",
    "https://investors.snowflake.com/news/news-details/2026/Snowflake-Reports-Financial-Results-for-the-First-Quarter-of-Fiscal-2027/default.aspx",
  ],
  ["Figma FY2025 results", "https://www.businesswire.com/news/home/20260218662839/en/"],
  ["Sacra on Figma", "https://sacra.com/c/figma/"],
  [
    "Apple: App Store ecosystem reaches $1.4 trillion",
    "https://www.apple.com/au/newsroom/2026/06/app-store-ecosystem-reaches-1-point-4-trillion-usd-as-developers-thrive-globally/",
  ],
  [
    "Shopify FY2025 10-K",
    "https://www.sec.gov/Archives/edgar/data/1594805/000159480526000007/shop-20251231.htm",
  ],
  [
    "Toast FY2025 10-K",
    "https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm",
  ],
  ["Sacra on Intercom", "https://sacra.com/research/intercom"],
  [
    "Stripe: Intercom on value-based pricing for Fin",
    "https://stripe.com/en-cz/customers/intercom-pricing",
  ],
  ["Sacra on Notion", "https://sacra.com/c/notion/"],
  [
    "Shopify FY2025 highlights",
    "https://finviz.com/news/306926/shopifys-standout-2025-the-launchpad-for-a-new-era-of-commerce-in-2026",
  ],
  [
    "Toast Q4 2025 call highlights",
    "https://finance.yahoo.com/news/toast-q4-earnings-call-highlights-101233713.html",
  ],
  [
    "How Notion does marketing, First Round Review",
    "https://review.firstround.com/how-notion-does-marketing-a-deep-dive-into-its-community-influencers-growth-playbooks/",
  ],
  [
    "Outcome-based pricing, Built In",
    "https://builtin.com/articles/outcome-based-pricing-ai-economy",
  ],
];

/* ── page parts ─────────────────────────────────────────────────────── */

/**
 * Linktree's grid, measured off their own stylesheet: two 720px columns
 * with a 64px gutter inside a 1504px container. It is the single thing
 * that makes a page read as theirs — the colours are only the surface.
 *
 * Below `lg` the two columns stack, which is also what they do.
 */
function Split({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${className}`}>{children}</div>
  );
}

/** The 1504px measure every band's content sits in. */
function Measure({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1504px] px-4 sm:px-8 ${className}`}>{children}</div>;
}

/**
 * The bar that replaces a table of contents: it names the model you are
 * reading, takes that model's gradient, and lets you jump between the
 * five. Hidden until the first section arrives, so it never competes
 * with the title.
 */
function SectionBar({ active, progress }: { active: number; progress: number }) {
  const shown = active >= 0;
  const i = Math.max(0, active);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 px-4 pt-3 transition-all duration-300 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div
        style={grad(i)}
        className="mx-auto max-w-[1100px] overflow-hidden rounded-full bg-white shadow-[0_2px_18px_rgb(0_0_0_/_0.1)]"
      >
        <div className="flex items-center gap-3 py-2 pl-2 pr-4">
          <span className="mz-pop flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold tabular-nums">
            {MODELS[i].n}
          </span>
          <span className="truncate text-[14px] font-semibold tracking-[-0.01em] text-[rgb(var(--slate))]">
            {MODELS[i].short}
          </span>

          <nav aria-label="Models" className="ml-auto flex shrink-0 items-center gap-1">
            {MODELS.map((m, j) => (
              <a
                key={m.n}
                href={`#model-${m.n}`}
                aria-label={`${m.n}. ${m.short}`}
                aria-current={j === active ? "true" : undefined}
                style={grad(j)}
                className="group flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block h-[8px] rounded-full transition-all duration-300 ${
                    j === active
                      ? "w-[22px] bg-[rgb(var(--g1))]"
                      : "w-[8px] bg-[rgb(var(--slate)_/_0.2)] group-hover:bg-[rgb(var(--g1))]"
                  }`}
                />
              </a>
            ))}
          </nav>
        </div>

        <div
          aria-hidden="true"
          className="h-[3px] origin-left bg-[rgb(var(--g1))] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}

/**
 * A model's opening. The index appears twice on purpose: once as the
 * small solid badge that the sticky bar and the cheat sheet echo, and
 * once enormous and ghosted behind the heading, which is what gives a
 * reader scrolling fast a sense of where they are in the five.
 */
function ActHead({ n, title, lever }: { n: string; title: string; lever: string }) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <Badge n={n} />
        <Pill>{lever}</Pill>
      </div>
      {/* Their section headings run 56px at 700. The clamp lands there at
          desktop and stays readable when the columns stack. */}
      <h2 className="mz-display mz-pop-text mt-7 text-[clamp(2.4rem,5.4vw,3.5rem)]">
        {title}
      </h2>
    </div>
  );
}

/** The loop, as a chain of pills. Reading it as steps rather than as a
 *  sentence full of arrows is the whole reason it is pulled out. */
function Loop({ steps }: { steps: string[] }) {
  return (
    <div className="mt-10">
      <Pill>The loop</Pill>
      <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2.5">
        {/* Keyed by position, not by text: the ecosystem loop opens and
            closes on "more users", which is the point of it. */}
        {steps.map((step, i) => (
          <li key={`${i}-${step}`} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden="true" className="text-[13px] text-[rgb(var(--ink)_/_0.45)]">
                →
              </span>
            )}
            <span className="rounded-full bg-[rgb(var(--ink)_/_0.1)] px-4 py-2 text-[13.5px] font-medium leading-tight text-[rgb(var(--ink))]">
              {step}
            </span>
          </li>
        ))}
        <li aria-hidden="true" className="text-[15px] text-[rgb(var(--ink)_/_0.55)]">
          ↻
        </li>
      </ol>
    </div>
  );
}

/** The metric a model is judged on, given the full gradient so it reads
 *  as the section's single instruction. */
function Metric({ children }: { children: React.ReactNode }) {
  return (
    <div className="mz-pop mt-12 rounded-[32px] px-6 py-7 sm:px-8">
      <Kicker className="opacity-70">Metric to watch</Kicker>
      <p className="mt-4 text-[19px] font-semibold leading-[1.5] tracking-[-0.01em]">
        {children}
      </p>
    </div>
  );
}

/** The catch. Plain and set back: it is the counterweight to the model
 *  above it, not a warning sticker. */
function Catch({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 rounded-[32px] bg-[rgb(var(--ink)_/_0.1)] px-6 py-7 sm:px-8">
      <Kicker className="block text-[rgb(var(--ink)_/_0.65)]">The catch</Kicker>
      <p className="mt-4 text-[16px] leading-[1.7] text-[rgb(var(--ink)_/_0.8)]">{children}</p>
    </div>
  );
}

/**
 * The four opening numbers, as one live figure.
 *
 * Built the way the Notion teardown's revenue curve is, and for the same
 * reason: the readout lives in the header rather than in a floating
 * tooltip. A tooltip covers the thing it is describing and moves while
 * you read it; a figure pinned at the top stays in one place, is the
 * largest thing in the card, and leaves the data clear. Pointing at a
 * tile changes that readout; pointing away puts the first one back.
 *
 * So the tiles carry only the number, and the header carries what the
 * number means and where it came from. The duplication of the figure
 * itself is deliberate — it is what ties the readout to the tile you
 * are pointing at.
 *
 * It is reachable without a mouse, as the curve is: the block takes
 * focus, left and right walk the four, Escape lets go.
 */
function HeadlineStats() {
  const [ref, inView] = useInView<HTMLElement>();
  const [active, setActive] = useState<number | null>(null);

  const shown = active ?? 0;
  const [, caption, sub] = HEADLINE[shown];

  // The count-up is always pointed at the first figure, never at the one
  // being read. Two reasons: `useCountUp` holds its value in state keyed
  // to nothing, so handing it a new label mid-life renders the new label
  // carrying the old number; and re-running the animation on every hover
  // would mean the readout is never still long enough to read. So the
  // entrance animates once, and pointing after that is instant.
  const intro = useCountUp(HEADLINE[0][0], inView);
  const counted = active === null ? intro : HEADLINE[active][0];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const step = e.key === "ArrowRight" ? 1 : -1;
      setActive((prev) => {
        if (prev === null) return step > 0 ? 0 : HEADLINE.length - 1;
        return Math.max(0, Math.min(HEADLINE.length - 1, prev + step));
      });
    } else if (e.key === "Escape") {
      setActive(null);
    }
  };

  return (
    <figure ref={ref} className="mz-tile overflow-hidden">
      {/* The readout: the card's largest element, and the only thing that
          changes as you move across the four. */}
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 px-7 pt-7">
        <div className="min-w-0">
          <Kicker className="text-[rgb(var(--slate)_/_0.55)]">The case in four numbers</Kicker>
          <p
            aria-live="polite"
            className="mz-display mt-3 text-[clamp(2.2rem,4.6vw,3rem)] tabular-nums text-[rgb(var(--slate))]"
          >
            {counted}
          </p>
          <p className="mt-3 max-w-[38ch] text-[14.5px] leading-[1.5] text-[rgb(var(--slate)_/_0.72)]">
            {caption}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="rounded-full bg-[rgb(var(--slate)_/_0.07)] px-3 py-1.5 text-[11px] font-semibold leading-none text-[rgb(var(--slate))]">
            {sub}
          </span>
          <Kicker className="text-[rgb(var(--slate)_/_0.45)]">
            {active === null ? "The headline" : `Reading 0${shown + 1}`}
          </Kicker>
        </div>
      </div>

      <div
        tabIndex={0}
        role="img"
        aria-label="Four numbers the piece argues from: Intercom's net revenue retention reached 146% after it changed how Fin charges, up from 112%; 76% of Shopify's revenue is merchant services rather than subscriptions; Toast earns about $5 of payments revenue for every $1 of software revenue; and 4 of the 5 models drive expansion, so revenue compounds."
        onKeyDown={onKeyDown}
        onBlur={() => setActive(null)}
        onPointerLeave={() => setActive(null)}
        className="grid gap-3 p-4 outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--cobalt))] sm:grid-cols-2 sm:gap-4 sm:p-5"
      >
        {HEADLINE.map(([fig], i) => (
          <div
            key={fig}
            onPointerEnter={() => setActive(i)}
            style={grad(BENTO[i])}
            className={`mz-lift relative flex items-end justify-between gap-3 overflow-hidden rounded-[22px] bg-[rgb(var(--surf))] px-5 py-5 text-[rgb(var(--ink))] transition-opacity duration-200 ${
              active !== null && active !== i ? "opacity-55" : "opacity-100"
            }`}
          >
            <p className="mz-display text-[clamp(1.5rem,3.2vw,2rem)] tabular-nums">{fig}</p>
            <span
              aria-hidden="true"
              className="mz-kicker shrink-0 pb-1 text-[rgb(var(--ink)_/_0.5)]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* The active mark, in the tile's own ink: a fifth hue on a
                block of colour would only muddy the four. */}
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-0 h-[3px] bg-[rgb(var(--ink))] transition-all duration-300 motion-reduce:transition-none ${
                active === i ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      <p className="px-7 pb-6 text-[12px] text-[rgb(var(--slate)_/_0.5)]">
        Hover a number, or focus it and use <span aria-hidden="true">← →</span>
      </p>
    </figure>
  );
}

/** Every full-bleed model band shares this shell: the wash, the generous
 *  vertical rhythm, and the 880px measure inside it. */
function Band({
  id,
  index,
  innerRef,
  children,
}: {
  id: string;
  index: number;
  innerRef: (el: HTMLElement | null) => void;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      ref={innerRef}
      style={grad(index)}
      className={`mz-band scroll-mt-20 py-20 sm:py-28 lg:py-32 ${
        bandIsDark(index) ? "mz-ondark" : "mz-onlight"
      }`}
    >
      <Measure>{children}</Measure>
    </section>
  );
}

/* ── the page ───────────────────────────────────────────────────────── */

export function MonetizationGrowthDetail({ post }: { post: BlogPost }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(-1);
  const [showTop, setShowTop] = useState(false);
  const actRefs = useRef<(HTMLElement | null)[]>([]);

  const related = useMemo(
    () =>
      blogPosts
        .filter((p) => p.id !== post.id && !p.comingSoon)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3),
    [post.id]
  );

  // One rAF-coalesced handler for the progress bar, the section bar and
  // the back-to-top button, committed only when a whole percentage
  // actually moves — a setState per scroll event would re-render all
  // nine figures dozens of times a second.
  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
      setProgress((prev) => (prev === pct ? prev : pct));
      setShowTop(window.scrollY > 800);

      // The active model is the last band whose top has passed a line a
      // quarter down the viewport. Before the first one does, the bar
      // stays hidden rather than claiming a section nobody is reading.
      const line = window.innerHeight * 0.25;
      let next = -1;
      actRefs.current.forEach((node, i) => {
        if (node && node.getBoundingClientRect().top <= line) next = i;
      });
      setActive((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="mz min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <SectionBar active={active} progress={progress} />

      <main>
        {/* ── masthead ───────────────────────────────────────────── */}
        {/* The masthead is a colour block like any other, so it is pinned
            light: the nav sitting on it has to read dark on cream whatever
            theme the reader is in. */}
        <header style={grad(2)} className="mz-band mz-onlight relative overflow-hidden pb-20 lg:pb-32">
          {/* Linktree floats their nav as a white pill on the colour
              rather than banding it across the top, and the `!` is there
              because Nav carries its own page padding. */}
          {/* Linktree floats their nav as a white pill on the colour
              rather than banding it across the top. Below `sm` the pill
              is dropped and the nav sits on the colour as it does
              everywhere else on the site: the extra padding a pill needs
              is enough to collide the links with the icons at 390px,
              and Linktree collapses their own nav at that width too. */}
          <Measure className="pt-4 sm:pt-6">
            <div className="sm:rounded-full sm:bg-white sm:px-2 [&>header]:!max-w-none [&>header]:!px-0 [&>header]:!py-4 sm:[&>header]:!px-5">
              <Nav width={99999} />
            </div>
          </Measure>

          <Measure className="pt-16 lg:pt-24">
            <Split className="lg:items-center">
              <div>
            <Link
              href="/blog"
              className="group mb-10 inline-flex items-center gap-1.5 text-[14px] font-medium text-[rgb(var(--ink)_/_0.65)] transition-colors hover:text-[rgb(var(--ink))]"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              All writing
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <Pill>Growth teardown</Pill>
              <Kicker className="text-[rgb(var(--ink)_/_0.6)]">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}{" "}
                · {post.readTime}
              </Kicker>
            </div>

            {/* Linktree's hero proportions: the headline as big as the
                measure will take, 800 weight, and the turn of the sentence
                carried by a second colour rather than by a second line. */}
            <h1 className="mz-display mt-8 max-w-[13ch] text-[clamp(2.9rem,6.6vw,5.5rem)] text-[rgb(var(--ink))]">
              5 monetization models that are{" "}
              <span className="mz-pop-text">secretly growth engines</span>
            </h1>

            <p className="mt-8 max-w-[44ch] text-[20px] leading-[1.5] tracking-[-0.02em] text-[rgb(var(--ink)_/_0.78)]">
              {post.excerpt}
            </p>

            <PillLink href="#model-01" className="mt-10">
              Start with model 01
              <span aria-hidden="true">→</span>
            </PillLink>
              </div>

              {/* The four numbers sit where Linktree puts their product
                  shot: the right half of the hero. */}
              <HeadlineStats />
            </Split>
          </Measure>
        </header>

        {/* ── the argument ───────────────────────────────────────── */}
        <section className="mz-neutral py-20 lg:py-28">
          <Measure>
            <Split className="lg:items-center">
              <div>
            <p className="text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
              Most founders treat pricing as a finance decision: pick a number, put it on the
              pricing page, move on. The fastest-growing platforms treat it as a{" "}
              <strong className="font-bold text-[rgb(var(--ink))]">growth decision</strong>. How you
              charge decides who signs up, how fast they spread you inside a company, and whether
              your revenue grows on its own after the first sale.
            </p>

            <p className="mt-7 text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
              Look at what the right model does:
            </p>

            <ul className="mt-6 space-y-4">
              <Step n={1}>
                Intercom changed <em>how</em> it charges for its AI agent, and net revenue
                retention jumped from 112% to 146% (
                <Src href="https://sacra.com/research/intercom">Sacra</Src>). Same product, way
                more growth.
              </Step>
              <Step n={2}>
                Shopify makes 76% of its revenue from merchant services, not subscriptions, so it
                grows when its merchants grow (
                <Src href="https://www.sec.gov/Archives/edgar/data/1594805/000159480526000007/shop-20251231.htm">
                  Shopify 10-K
                </Src>
                ).
              </Step>
              <Step n={3}>
                Toast earns about $5 from payments for every $1 of software (
                <Src href="https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm">
                  Toast 10-K
                </Src>
                ).
              </Step>
            </ul>
              </div>

              <Figure
                title="Pricing that grows itself"
                takeaway="Pricing isn't a finance decision. It's a growth decision."
              >
                <GrowthEquation />
              </Figure>
            </Split>

            <p className="mt-20 max-w-[62ch] text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
              For each of the 5 models below you get: the{" "}
              <strong className="font-bold text-[rgb(var(--ink))]">growth lever</strong> it pulls, the{" "}
              <strong className="font-bold text-[rgb(var(--ink))]">loop</strong> that makes it
              compound, real <strong className="font-bold text-[rgb(var(--ink))]">proof</strong>, the{" "}
              <strong className="font-bold text-[rgb(var(--ink))]">metric</strong> to watch, and how
              to run it.
            </p>

            {/* The manifest, as five jump cards: one wide row at full
                measure, the way their feature tiles run. */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {MODELS.map((m, i) => (
                <Card key={m.n} hover style={grad(i)} delay={i * 60}>
                  <a href={`#model-${m.n}`} className="flex h-full flex-col gap-4 px-6 py-6">
                    <span className="mz-grad flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-[14px] font-bold tabular-nums mz-on-grad">
                      {m.n}
                    </span>
                    <span className="flex-1 text-[15px] leading-[1.5] text-foreground/75">
                      <strong className="font-bold text-foreground">{m.short}:</strong>{" "}
                      {m.gloss}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[15px] text-[rgb(var(--g1))]"
                    >
                      →
                    </span>
                  </a>
                </Card>
              ))}
            </div>

            <Split className="mt-20 lg:items-center">
              <div>
                <h2 className="mz-display text-[clamp(2rem,4.4vw,2.8rem)] text-[rgb(var(--ink))]">
                  Four of the five drive{" "}
                  <span className="mz-pop-text">expansion</span>
                </h2>
                <p className="mt-6 text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
                  And that&rsquo;s why they compound: revenue keeps growing after the first
                  sale.
                </p>
              </div>

              <Figure
                title="Where each model plugs into growth: acquire, expand, retain"
                takeaway="4 of 5 models drive expansion. That's why they compound."
                scrollAt={560}
              >
                <LeverMap />
              </Figure>
            </Split>
          </Measure>
        </section>

        {/* ── model 01 ───────────────────────────────────────────── */}
        <Band
          id="model-01"
          index={0}
          innerRef={(el) => {
            actRefs.current[0] = el;
          }}
        >          {/* The opener takes Linktree's own grid: the argument on the
              left, the drawing that proves it on the right. */}
          <Split className="lg:items-center">
            <div>
              <ActHead n="01" title="Pay for what you use" lever={MODELS[0].lever} />

              <p className="text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
                Customers pay for compute, API calls, messages or credits. Your revenue grows inside
                every account without a single upsell call.
              </p>

              <Loop steps={LOOPS[0]} />
            </div>

            <Figure
              title="Usage pricing: land small, expand big"
              takeaway="No upsell call needed. Usage does the selling."
              scrollAt={520}
            >
              <UsageStaircase />
            </Figure>
          </Split>

          {/* Below it the same two columns carry different loads: the
              reading matter on the left, the cards and the second figure
              on the right, so neither column ever runs long alone. */}
          <Split className="mt-24 lg:items-start">
            <div>
              <Block label="Proof · Snowflake">
                <p>
                  It charges for compute, not seats. Last quarter it did $1.33B in product revenue, up
                  34%, with net revenue retention of 126% (
                  <Src href="https://investors.snowflake.com/news/news-details/2026/Snowflake-Reports-Financial-Results-for-the-First-Quarter-of-Fiscal-2027/default.aspx">
                    Snowflake Q1 FY27
                  </Src>
                  ). Existing customers alone grow the business by roughly a quarter every year. It
                  still added 616 net new customers that quarter, and 64 customers now spend over $10M
                  a year (
                  <Src href="https://www.fool.com/earnings/call-transcripts/2026/05/27/snowflake-snow-q1-2027-earnings-transcript/">
                    Motley Fool transcript
                  </Src>
                  ). Land small, expand big.
                </p>


                <p>
                  Those 64 accounts didn&rsquo;t sign $10M contracts on day one. Usage pricing let them
                  start small and grow into it.
                </p>
              </Block>

              <Block label="How to run it for growth">
                <ul className="space-y-4">
                  <Step n={1}>
                    Make the first unit free or near-free, so trying you needs no budget approval.
                  </Step>
                  <Step n={2}>
                    Price on the unit that grows when the customer wins: reports run, documents
                    processed, agent runs.
                  </Step>
                  <Step n={3}>
                    Watch accounts whose usage is spiking. That&rsquo;s your expansion sales list,
                    handed to you by the data.
                  </Step>
                  <Step n={4}>
                    Add prepaid credit packs on top of plans. Notion sells agent credits at $10 per
                    1,000 on top of seats (<Src href="https://sacra.com/c/notion/">Sacra</Src>).
                  </Step>
                </ul>
              </Block>
            </div>

            <div>
              <Figure
                title="Snowflake: a tiny slice of customers becomes $10M+ accounts"
                takeaway="Big accounts aren't sold. They grow out of small ones."
                scrollAt={460}
              >
                <DropFunnel
                  rows={[
                    { label: "All customers", value: "13,912", pct: 100 },
                    { label: "Spend $1M+ a year", value: "779", pct: 5.6 },
                    { label: "Spend $10M+ a year", value: "64", pct: 0.46 },
                  ]}
                  steps={["5.6% move up a tier", "8.2% move up a tier"]}
                  note="only 0.5% of customers!"
                />
              </Figure>

              <Metric>{MODELS[0].metric}</Metric>

              <Catch>
                Growth is lumpy and harder to forecast, and surprise bills cause churn. Ship spend
                alerts and caps early.
              </Catch>
            </div>
          </Split>
        </Band>

        {/* ── model 02 ───────────────────────────────────────────── */}
        <Band
          id="model-02"
          index={1}
          innerRef={(el) => {
            actRefs.current[1] = el;
          }}
        >          {/* The opener takes Linktree's own grid: the argument on the
              left, the drawing that proves it on the right. */}
          <Split className="lg:items-center">
            <div>
              <ActHead n="02" title="Free for one, paid for the team" lever={MODELS[1].lever} />

              <p className="text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
                Individuals get the full product free. You charge when they pull in teammates and the
                company needs sharing, admin and security. Your users become your distribution.
              </p>

              <Loop steps={LOOPS[1]} />
            </div>

            <Figure
              title="Freemium: one free user becomes a paying company"
              takeaway="Your free users are your sales team."
              scrollAt={620}
            >
              <FreemiumTree />
            </Figure>
          </Split>

          {/* Below it the same two columns carry different loads: the
              reading matter on the left, the cards and the second figure
              on the right, so neither column ever runs long alone. */}
          <Split className="mt-24 lg:items-start">
            <div>
              <Block label="Proof · Figma">
                <p>
                  It only started charging in 2017, and made $700K that year (
                  <Src href="https://sacra.com/c/figma/">Sacra</Src>). In 2025 it made $1.056B, up 41%,
                  with net dollar retention of 136% and 13,861 paid customers spending over $10K a year
                  (
                  <Src href="https://www.businesswire.com/news/home/20260218662839/en/">
                    Figma FY2025 results
                  </Src>
                  ). The designer came in free. The company paid.
                </p>
                <p>
                  Notion runs the same play: about half of its business customers started as personal
                  users.
                </p>


                <p>
                  The ~4M paying-customer figure is an analyst estimate (
                  <Src href="https://valueaddvc.com/blog/how-does-notion-make-money-freemium-seats-ai-add-ons-and-the-business-model-breakdown">
                    ValueAdd VC
                  </Src>
                  ). A 4% conversion sounds low, but on a 100M base it&rsquo;s millions of customers,
                  and every free user is still spreading the product.
                </p>
              </Block>

              <Block label="How to run it for growth">
                <ul className="space-y-4">
                  <Step n={1}>
                    Make the solo experience genuinely great. A crippled free tier kills the loop at
                    step one.
                  </Step>
                  <Step n={2}>
                    Put the paywall on collaboration: more editors, shared spaces, permissions, SSO.
                  </Step>
                  <Step n={3}>Make inviting a teammate the most natural action in the product.</Step>
                  <Step n={4}>
                    Track team signals (a second collaborator, a work email signup) and send sales only
                    to those accounts.
                  </Step>
                </ul>
              </Block>
            </div>

            <div>
              <Figure
                title="Notion: about 96% of users never pay, and it still works"
                takeaway="Free users aren't the leak. They're the marketing."
                scrollAt={460}
              >
                <DropFunnel
                  rows={[
                    { label: "Notion users", value: "100M", pct: 100 },
                    { label: "Paying customers (est.)", value: "4M", pct: 4 },
                  ]}
                  steps={["4% convert to paid"]}
                  note="still 4M paying customers"
                />
              </Figure>

              <Metric>{MODELS[1].metric}</Metric>

              <Catch>
                Free users cost money, and the loop takes time. You need a big top of funnel and the
                patience to wait for teams to show up.
              </Catch>
            </div>
          </Split>
        </Band>

        {/* ── model 03 ───────────────────────────────────────────── */}
        <Band
          id="model-03"
          index={2}
          innerRef={(el) => {
            actRefs.current[2] = el;
          }}
        >          {/* The opener takes Linktree's own grid: the argument on the
              left, the drawing that proves it on the right. */}
          <Split className="lg:items-center">
            <div>
              <ActHead n="03" title="Take a cut of the ecosystem" lever={MODELS[2].lever} />

              <p className="text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
                Let others build and sell on top of you: apps, templates, plugins, services. You take a
                percentage. Every creator becomes a marketer who brings their own audience.
              </p>

              <Loop steps={LOOPS[2]} />
            </div>

            <Figure
              title="Ecosystem: you're the hub, creators bring the users"
              takeaway="Other people's hustle becomes your growth."
              scrollAt={540}
            >
              <EcosystemHub />
            </Figure>
          </Split>

          {/* Below it the same two columns carry different loads: the
              reading matter on the left, the cards and the second figure
              on the right, so neither column ever runs long alone. */}
          <Split className="mt-24 lg:items-start">
            <div>
              <Block label="Proof · Apple's App Store">
                <p>
                  In 2025 it facilitated $1.4 trillion in billings and sales, nearly 3x since 2019.
                  Over 90% of that paid Apple no commission. Digital goods and services alone were
                  $149B (
                  <Src href="https://www.apple.com/au/newsroom/2026/06/app-store-ecosystem-reaches-1-point-4-trillion-usd-as-developers-thrive-globally/">
                    Apple Newsroom
                  </Src>
                  ), where Apple&rsquo;s standard cut is 15% to 30%. Apple doesn&rsquo;t build those
                  apps. It owns the shelf.
                </p>
                <p>
                  The startup-sized version: Notion&rsquo;s template creators helped push #Notion past
                  1B TikTok views (
                  <Src href="https://review.firstround.com/how-notion-does-marketing-a-deep-dive-into-its-community-influencers-growth-playbooks/">
                    First Round
                  </Src>
                  ), and its Marketplace now takes a 10% fee on template sales (
                  <Src href="https://fungies.io/how-to-sell-notion-templates.md">Fungies</Src>).
                </p>
              </Block>

              <Block label="How to run it for growth">
                <ul className="space-y-4">
                  <Step n={1}>
                    Start with a free gallery of user-made templates or integrations. Distribution
                    first, money later.
                  </Step>
                  <Step n={2}>Let creators charge once there&rsquo;s demand, and take 10% to 30%.</Step>
                  <Step n={3}>
                    Give top creators status: features, early access, a badge. Their wins recruit the
                    next creators.
                  </Step>
                </ul>
              </Block>
            </div>

            <div>
              <Metric>{MODELS[2].metric}</Metric>

              <Catch>
                You need an engaged base first. A marketplace with no buyers is a ghost town, and
                creators leave fast.
              </Catch>
            </div>
          </Split>
        </Band>

        {/* ── model 04 ───────────────────────────────────────────── */}
        <Band
          id="model-04"
          index={3}
          innerRef={(el) => {
            actRefs.current[3] = el;
          }}
        >          {/* The opener takes Linktree's own grid: the argument on the
              left, the drawing that proves it on the right. */}
          <Split className="lg:items-center">
            <div>
              <ActHead n="04" title="Get paid when money moves" lever={MODELS[3].lever} />

              <p className="text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
                If money flows through your product (orders, bookings, invoices, payouts), build
                payments in and earn a small fee on every transaction. Your revenue grows when your
                customers&rsquo; revenue grows, not when they hire.
              </p>

              <Loop steps={LOOPS[3]} />
            </div>

            <Figure
              title="Payments: money flows through you, you keep a slice"
              takeaway="Shopify 2025: $8.8B from merchant solutions vs $2.75B from subscriptions"
              scrollAt={660}
            >
              <PaymentsFlow />
            </Figure>
          </Split>

          {/* Below it the same two columns carry different loads: the
              reading matter on the left, the cards and the second figure
              on the right, so neither column ever runs long alone. */}
          <Split className="mt-24 lg:items-start">
            <div>
              <Block label="Proof · Shopify and Toast">
                <ul className="space-y-4">
                  <Step n={1}>
                    Shopify made $2.75B from subscriptions in 2025 but $8.8B from merchant solutions
                    like payments and capital (
                    <Src href="https://www.sec.gov/Archives/edgar/data/1594805/000159480526000007/shop-20251231.htm">
                      Shopify 10-K
                    </Src>
                    ). Its merchants&rsquo; sales grew 29% and its revenue grew 30%, almost in lockstep
                    (
                    <Src href="https://finviz.com/news/306926/shopifys-standout-2025-the-launchpad-for-a-new-era-of-commerce-in-2026">
                      Shopify FY2025
                    </Src>
                    ).
                  </Step>
                  <Step n={2}>
                    Toast made $936M from software and $5.04B from fintech in 2025 (
                    <Src href="https://www.sec.gov/Archives/edgar/data/1650164/000165016426000057/tost-20251231.htm">
                      Toast 10-K
                    </Src>
                    ), and added about 30,000 net new restaurant locations to reach 164,000 (
                    <Src href="https://finance.yahoo.com/news/toast-q4-earnings-call-highlights-101233713.html">
                      Toast Q4 call
                    </Src>
                    ). The software wins the restaurant. Payments grow the revenue.
                  </Step>
                </ul>
              </Block>

              <Block label="How to run it for growth">
                <ul className="space-y-4">
                  <Step n={1}>
                    Find the money already moving through your product: client invoices, tickets,
                    course sales, vendor payouts.
                  </Step>
                  <Step n={2}>
                    Partner with a provider (Stripe, or Razorpay in India) instead of building rails.
                  </Step>
                  <Step n={3}>Make paying through you the default, not an add-on.</Step>
                  <Step n={4}>
                    Layer on capital and faster payouts once you have the data. They pull customers
                    deeper in.
                  </Step>
                </ul>
              </Block>
            </div>

            <div>
              <Metric>
                Payments penetration (the share of your customers&rsquo; volume that runs through you)
                and take rate. Shopify Payments now carries about 68% of sales on the platform (
                <Src href="https://fourweekmba.com/ai-shopify-filing-shopify-payments-carried-68-of-119b-in-gmv/">
                  FourWeekMBA
                </Src>
                ).
              </Metric>

              <Catch>
                Thin margins and real compliance work. Shopify&rsquo;s merchant solutions run at about
                37% gross margin versus 81% for subscriptions (
                <Src href="https://www.fool.com/earnings/call-transcripts/2026/02/11/shopify-shop-q4-2025-earnings-call-transcript/">
                  Motley Fool transcript
                </Src>
                ). You win on volume.
              </Catch>
            </div>
          </Split>
        </Band>

        {/* ── model 05 ───────────────────────────────────────────── */}
        <Band
          id="model-05"
          index={4}
          innerRef={(el) => {
            actRefs.current[4] = el;
          }}
        >          {/* The opener takes Linktree's own grid: the argument on the
              left, the drawing that proves it on the right. */}
          <Split className="lg:items-center">
            <div>
              <ActHead n="05" title="Charge for the result, not the tool" lever={MODELS[4].lever} />

              <p className="text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
                Charge only when your product gets the job done: a ticket resolved, a lead qualified,
                an invoice collected. The buyer&rsquo;s biggest objection, &ldquo;will this actually
                work?&rdquo;, disappears.
              </p>

              <Loop steps={LOOPS[4]} />
            </div>

            <Figure
              title="Outcome pricing: you only get paid when it works"
              takeaway="When they win, you win. That's the whole pitch."
              scrollAt={660}
            >
              <OutcomeGate />
            </Figure>
          </Split>

          {/* Below it the same two columns carry different loads: the
              reading matter on the left, the cards and the second figure
              on the right, so neither column ever runs long alone. */}
          <Split className="mt-24 lg:items-start">
            <div>
              <Block label="Proof · Intercom's Fin">
                <p>
                  Fin is an AI support agent that costs $0.99 per resolution, charged only when the
                  customer confirms the issue was fixed (
                  <Src href="https://stripe.com/en-cz/customers/intercom-pricing">Stripe</Src>). A
                  human-handled ticket costs roughly $10 to $15 (
                  <Src href="https://sacra.com/chat/h/ea6794a1-b8c6-4d1b-998d-0f9297e7fd59/">Sacra</Src>
                  ).
                </p>

                <ul className="space-y-4">
                  <Step n={1}>
                    Fin passed $100M ARR and is growing 350% a year, used by about 8,000 businesses (
                    <Src href="https://sacra.com/research/intercom">Sacra</Src>).
                  </Step>
                  <Step n={2}>
                    Net revenue retention jumped from 112% to 146% after the switch (
                    <Src href="https://sacra.com/research/intercom">Sacra</Src>).
                  </Step>
                  <Step n={3}>
                    Its resolution rate reportedly climbed from about 25% at launch to 65% to 70% (
                    <Src href="https://enterprisedna.co/resources/ai-pulse/ai-pulse-2026-08-02-intercom-s-fin-ai-agent-is-nearing-100m-arr-roughly-half-of">
                      Enterprise DNA
                    </Src>
                    ). Every point of that is revenue.
                  </Step>
                </ul>


                <p>
                  Rocket Money handles more than 60,000 support conversations a month, and Fin resolves
                  68% of them at $0.99 each (
                  <Src href="https://builtin.com/articles/outcome-based-pricing-ai-economy">Built In</Src>
                  ). The human-cost line uses the market estimate of $10 to $15 per resolution, so
                  treat it as a ballpark.
                </p>
              </Block>

              <Block label="How to run it for growth">
                <ul className="space-y-4">
                  <Step n={1}>Pick one outcome your customer can count and agree on.</Step>
                  <Step n={2}>
                    Price it well below what that outcome costs them today (Fin: $0.99 vs $10+).
                  </Step>
                  <Step n={3}>
                    Put the success rate on every team&rsquo;s dashboard. Product, support and sales
                    all chase the same number.
                  </Step>
                  <Step n={4}>
                    Add a small monthly minimum so a slow month doesn&rsquo;t zero your revenue.
                  </Step>
                </ul>
              </Block>
            </div>

            <div>
              <Figure
                title="Rocket Money: about 40,800 tickets a month resolved for about $40K"
                takeaway="Fin bill: about $40,392 a month"
                footnote="same tickets at $10 to $15 each by humans: $408K to $612K (est.)"
                scrollAt={460}
              >
                <DropFunnel
                  rows={[
                    { label: "Support conversations a month", value: "60,000", pct: 100 },
                    { label: "Resolved by Fin (68%)", value: "40,800", pct: 68 },
                  ]}
                  steps={["68% resolved, $0.99 each"]}
                />
              </Figure>

              <Metric>{MODELS[4].metric}</Metric>

              <Catch>
                You carry the risk. If the product underperforms, you earn less. Intercom&rsquo;s team
                calls unpredictable volume and resolution rates the hard part (
                <Src href="https://stripe.com/en-cz/customers/intercom-pricing">Stripe</Src>).
              </Catch>
            </div>
          </Split>
        </Band>

        {/* ── cheat sheet ────────────────────────────────────────── */}
        <section style={grad(5)} className="mz-band mz-ondark py-24 sm:py-28">
          <Measure>
            <Split className="lg:items-end">
              <div>
                <Pill>Cheat sheet</Pill>
                <h2 className="mz-display mz-pop-text mt-7 text-[clamp(2.4rem,5.4vw,3.5rem)]">
                  All five, side by side
                </h2>
              </div>
              <p className="text-[19px] leading-[1.6] tracking-[-0.01em] text-[rgb(var(--ink)_/_0.85)]">
                Each model pulls a different growth lever. The strongest platforms stack two or
                three on top of a base subscription, so one model feeds the next.
              </p>
            </Split>

            <Card className="mt-14">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] table-fixed border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border">
                      {(
                        [
                          ["Way", "w-[21%]"],
                          ["Growth lever", "w-[17%]"],
                          ["The loop in one line", "w-[23%]"],
                          ["Metric to watch", "w-[17%]"],
                          ["Proof point", "w-[22%]"],
                        ] as const
                      ).map(([h, w]) => (
                        <th
                          key={h}
                          className={`mz-kicker px-4 py-4 align-bottom text-muted-foreground ${w}`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CHEAT_SHEET.map((row, i) => (
                      <tr
                        key={row[0]}
                        style={grad(i)}
                        className="border-b border-border last:border-b-0 transition-colors hover:bg-[rgb(var(--g1)_/_0.05)]"
                      >
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className={`px-4 py-4 align-top text-[13.5px] leading-[1.55] ${
                              j === 0 ? "font-semibold text-foreground" : "text-foreground/70"
                            }`}
                          >
                            {j === 0 ? (
                              <span className="flex items-start gap-2.5">
                                <span className="mz-grad mt-[3px] h-[9px] w-[9px] shrink-0 rounded-full" />
                                {cell}
                              </span>
                            ) : (
                              cell
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Split className="mt-20 lg:items-center">
              <div>
                <h2 className="mz-display text-[clamp(2rem,4.4vw,2.8rem)] text-[rgb(var(--ink))]">
                  Pick yours in <span className="mz-pop-text">four questions</span>
                </h2>
                <p className="mt-6 text-[19px] leading-[1.6] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
                  Work down the questions. The first &ldquo;yes&rdquo; is the model to try
                  first.
                </p>
              </div>

              <Figure
                title="Pick your model in four questions"
                takeaway="Your first yes = the model to try first."
              >
                <ModelPicker />
              </Figure>
            </Split>
          </Measure>
        </section>

        {/* ── sources ────────────────────────────────────────────── */}
        <section className="mz-neutral py-20 lg:py-28">
          <Measure>
            <Pill>Sources</Pill>

            <ul className="mt-8 grid gap-x-10 gap-y-3 text-[rgb(var(--link))] sm:grid-cols-2 lg:grid-cols-3">
              {SOURCES.map(([label, href]) => (
                <li key={href} className="text-[14px] leading-[1.5]">
                  <Src href={href}>{label}</Src>
                </li>
              ))}
            </ul>

            {/* ── read next ──────────────────────────────────────── */}
            <div className="mt-20">
              <Kicker className="text-[rgb(var(--ink)_/_0.6)]">Read next</Kicker>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {related.map((p, i) => (
                  <Card key={p.slug} hover style={grad(i + 2)} delay={i * 70}>
                    <Link href={`/blog/${p.slug}`} className="flex h-full flex-col px-6 py-6">
                      <span className="mz-kicker mz-grad-text">{p.category}</span>
                      <span className="mt-4 text-[17px] font-bold leading-snug tracking-[-0.01em] text-foreground">
                        {p.title}
                      </span>
                      <Kicker className="mt-auto pt-6 text-muted-foreground">{p.readTime}</Kicker>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </Measure>
        </section>
      </main>

      <SiteFooter width={1440} />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`mz-lift mz-lift-hover fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(var(--slate))] text-[rgb(var(--lime))] transition-opacity duration-200 ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
