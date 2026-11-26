"use client";

import React from "react";

import { useInView } from "./motion";

/**
 * Shared parts for the monetization teardown.
 *
 * The page is built the way Linktree builds theirs: flat saturated
 * colour blocks, chunky type, big radii, pill buttons, and no
 * gradients, hairlines or glows anywhere.
 *
 * Colour arrives in two layers, and keeping them apart is the whole
 * trick. `--surf` / `--ink` / `--pop` belong to the BAND — a section
 * sets them once and anything sitting directly on the colour reads
 * them. `--g1` belongs to the FIGURES, which always sit on a white
 * tile, so it is always a hue dark enough to hold on white.
 *
 * Nothing here picks a colour for itself, so re-ordering the models
 * re-colours them.
 */

/**
 * The five bands, in reading order, in Linktree's own colours:
 * lime, cobalt, cream, purple, maroon. The rhythm is deliberate —
 * bright, deep, light, deep, deepest — so scrolling the five feels
 * like five rooms rather than one long corridor.
 *
 * `g` is the figure hue for that band. It is set on both `--g1` and
 * `--g2`, which collapses every gradient inside the eleven drawings to
 * a flat fill without touching a line of Figures.tsx.
 */
type Band = {
  surf: string;
  ink: string;
  pop: string;
  popInk: string;
  g: string;
  /** True when the band is dark enough that shared, theme-aware
   *  components sitting on it have to be pinned to dark-mode tokens. */
  dark?: boolean;
};

export const BANDS: Band[] = [
  // 01 — lime, with the dark green Linktree itself sets on lime.
  { surf: "var(--lime)", ink: "var(--leaf)", pop: "var(--leaf)", popInk: "var(--lime)", g: "var(--leaf)" },
  // 02 — cobalt, headline in lime, exactly as their second section runs.
  { surf: "var(--cobalt)", ink: "255 255 255", pop: "var(--lime)", popInk: "var(--navy)", g: "var(--cobalt)", dark: true },
  // 03 — cream, the light beat between two deep ones.
  { surf: "var(--cream)", ink: "var(--slate)", pop: "var(--navy)", popInk: "255 255 255", g: "var(--navy)" },
  // 04 — purple, accented in their blush pink.
  { surf: "var(--purple)", ink: "var(--paper)", pop: "var(--blush)", popInk: "var(--purple)", g: "var(--purple)", dark: true },
  // 05 — maroon, the deepest, saved for the closing model.
  { surf: "var(--maroon)", ink: "var(--paper)", pop: "var(--blush)", popInk: "var(--maroon)", g: "var(--maroon)", dark: true },
  // 06 — deep navy. Not a model: the cheat sheet, which belongs to all
  // five and so takes a colour none of them has.
  { surf: "var(--navy)", ink: "255 255 255", pop: "var(--lime)", popInk: "var(--navy)", g: "var(--navy)", dark: true },
];

/**
 * Sets a subtree's band. Cast because `style` has no idea custom
 * properties exist.
 *
 * Still called `grad` because a page and eleven figures call it that;
 * there is no gradient left in it.
 */
export function grad(i: number): React.CSSProperties {
  const b = BANDS[i % BANDS.length] ?? BANDS[0];
  return {
    ["--surf"]: b.surf,
    ["--ink"]: b.ink,
    ["--pop"]: b.pop,
    ["--pop-ink"]: b.popInk,
    ["--g1"]: b.g,
    ["--g2"]: b.g,
  } as React.CSSProperties;
}

/** Whether band `i` needs shared components pinned to the dark theme. */
export function bandIsDark(i: number) {
  return Boolean((BANDS[i % BANDS.length] ?? BANDS[0]).dark);
}

/** Small-caps monospace label. The one piece of the old page kept as it
 *  was: it is the quiet counterweight to type this heavy. */
export function Kicker({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`mz-kicker ${className}`}>{children}</span>;
}

/**
 * A Linktree pill: fully rounded, solid accent fill, sentence case, and
 * no border. It labels almost everything on the page — a lever, a
 * stage, a section — and it is the page's smallest unit of colour.
 */
export function Pill({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`mz-pop inline-flex shrink-0 items-center rounded-full px-4 py-[7px] text-[13px] font-semibold leading-none tracking-[-0.005em] ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * A pill that does something: the jump links and the call to action.
 * Same shape as `Pill`, sized for a hand rather than for a label.
 */
export function PillLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`mz-pop mz-lift mz-lift-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold tracking-[-0.01em] ${className}`}
    >
      {children}
    </a>
  );
}

/**
 * The page's one container: a flat tile with a 32px radius, no border
 * and no shadow. It is white on every band and in both themes, which is
 * what keeps the figures legible on cobalt, purple and maroon alike —
 * `.mz-tile` pins the site's theme tokens light inside itself.
 */
export function Card({
  children,
  hover = false,
  className = "",
  innerClassName = "",
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
  innerClassName?: string;
  /** Usually the result of `grad(i)`, when a card sets its own band
   *  rather than inheriting the section's. */
  style?: React.CSSProperties;
  /** Stagger, in ms, for a card in a row of them. */
  delay?: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
    >
      <div
        className={`mz-tile mz-lift relative h-full overflow-hidden ${
          hover ? "mz-lift-hover" : ""
        } ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

/** A rounded square carrying a model's index, in the band's accent. */
export function Badge({ n, className = "" }: { n: string; className?: string }) {
  return (
    <span
      className={`mz-pop inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] text-[19px] font-extrabold tabular-nums ${className}`}
    >
      {n}
    </span>
  );
}

/**
 * A figure, as one white tile: a heading, the drawing, and the takeaway
 * as a solid lime strip across the bottom. Making all eleven one object
 * type is what stops the page reading as a scrapbook, and the lime
 * strip is what makes the takeaways findable when you are skimming.
 *
 * `scrollAt` puts the drawing in its own horizontal scroller at a floor
 * width. A diagram whose labels have shrunk to 7px is not responsive,
 * it is just small, so the wide ones scroll instead.
 */
export function Figure({
  title,
  takeaway,
  footnote,
  children,
  scrollAt,
}: {
  title: string;
  takeaway?: string;
  footnote?: string;
  children: React.ReactNode;
  scrollAt?: number;
}) {
  return (
    <figure className="my-12">
      <Card hover>
        <figcaption className="px-6 pt-7 sm:px-8">
          <span className="mz-display block text-[21px] leading-[1.25] text-[rgb(var(--slate))]">
            {title}
          </span>
        </figcaption>

        <div className="px-6 py-8 sm:px-8">
          {scrollAt ? (
            <div className="-mx-6 overflow-x-auto px-6 sm:-mx-8 sm:px-8">
              <div style={{ minWidth: scrollAt }}>{children}</div>
            </div>
          ) : (
            children
          )}
        </div>

        {takeaway && (
          /* Inset rather than run to the tile's edge: on the lime band a
             full-width lime strip would merge with the background behind
             it and the tile would lose its bottom corner. */
          <div className="m-3 rounded-[22px] bg-[rgb(var(--lime))] px-5 py-4 sm:mx-5 sm:mb-5 sm:px-6">
            <p className="text-[15px] font-bold leading-snug tracking-[-0.01em] text-[rgb(var(--leaf))]">
              {takeaway}
            </p>
            {footnote && (
              <p className="mt-1.5 text-[13px] leading-snug text-[rgb(var(--leaf)_/_0.75)]">
                {footnote}
              </p>
            )}
          </div>
        )}
      </Card>
    </figure>
  );
}

/** Section sub-heading: a pill over whatever follows it. */
export function Block({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mt-12 ${className}`}>
      <Pill>{label}</Pill>
      <div className="mt-7 max-w-[66ch] space-y-5 text-[18.5px] leading-[1.65] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)] [&>ul]:max-w-none">
        {children}
      </div>
    </div>
  );
}

/** A numbered instruction. The numeral sits in a solid disc of the
 *  band's accent, so a run of them reads as a sequence. */
export function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mz-pop mt-[3px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold tabular-nums">
        {n}
      </span>
      <span className="flex-1 text-[17.5px] leading-[1.65] tracking-[-0.015em] text-[rgb(var(--ink)_/_0.88)]">
        {children}
      </span>
    </li>
  );
}

/** Outbound citation. Underlined in the ink it is already set in, so it
 *  reads as a link without introducing a sixth colour to the band. */
export function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold underline decoration-[2px] underline-offset-[3px] transition-opacity hover:opacity-70"
    >
      {children}
    </a>
  );
}

/** The pencil annotation the source figures use for the one number each
 *  drawing exists to make. Always maroon, whatever the band, so it never
 *  reads as part of the data. */
export function Note({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-[12.5px] font-medium leading-snug text-[rgb(var(--maroon))] ${className}`}>
      {children}
    </span>
  );
}
