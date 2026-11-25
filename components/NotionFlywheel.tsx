"use client";

import { useState } from "react";
import { Blocks, Copy, Gift, Share2, Users, type LucideIcon } from "lucide-react";

/**
 * The template loop, drawn as a ring.
 *
 * A list of steps says "this happened, then this." A ring says the last step
 * feeds the first, which is the only claim worth making about Notion's growth,
 * so the diagram has to close.
 *
 * Five cards sit on an ellipse and five connectors sweep between them, all in
 * one 1000×530 coordinate space: the SVG uses it as a viewBox and the cards are
 * positioned as percentages of it, so arrows and cards stay registered at any
 * width without measuring anything.
 *
 * This is the one place on the page that carries colour. A loop is the one
 * thing here that is genuinely five things rather than one argument, and a
 * tint per step is what lets you follow it round without reading. The money
 * step keeps the site's own green, so the accent still means what it means
 * everywhere else.
 *
 * Below `sm` the ring is replaced by the same five steps stacked — a ring of
 * readable cards does not fit a phone, and shrinking one until it does just
 * makes an unreadable ring.
 */

interface Step {
  title: string;
  sub: string;
  /** Shown in the readout while this step is active. */
  why: string;
  icon: LucideIcon;
  /** Static class strings: Tailwind cannot see interpolated names. */
  card: string;
  tile: string;
  /** The step where money enters. */
  pays?: boolean;
}

const STEPS: Step[] = [
  {
    title: "Free for individuals",
    sub: "Free plan, free for students",
    why: "Free removes the decision to try.",
    icon: Gift,
    card: "border-sky-200 bg-sky-100 dark:border-sky-500/30 dark:bg-sky-500/10",
    tile: "bg-sky-500/20 text-sky-700 dark:text-sky-300",
  },
  {
    title: "Users build setups",
    sub: "Their own templates and systems",
    why: "The blank page becomes something personal.",
    icon: Blocks,
    card: "border-violet-200 bg-violet-100/70 dark:border-violet-500/30 dark:bg-violet-500/10",
    tile: "bg-violet-500/20 text-violet-700 dark:text-violet-300",
  },
  {
    title: "Creators share them",
    sub: "YouTube, TikTok, the gallery",
    why: "Every shared setup is a demo Notion never had to make.",
    icon: Share2,
    card: "border-amber-200 bg-amber-100/70 dark:border-amber-500/30 dark:bg-amber-500/10",
    tile: "bg-amber-500/25 text-amber-700 dark:text-amber-300",
  },
  {
    title: "New users copy one",
    sub: "Duplicate, get value fast",
    why: "A copy skips the blank page that killed v1.",
    icon: Copy,
    card: "border-rose-200 bg-rose-100/70 dark:border-rose-500/30 dark:bg-rose-500/10",
    tile: "bg-rose-500/20 text-rose-700 dark:text-rose-300",
  },
  {
    title: "Teams adopt and pay",
    sub: "Users bring it to work",
    why: "Half of Notion's B2B customers started personal.",
    icon: Users,
    card: "border-emerald-300 bg-emerald-100/70 dark:border-emerald-500/40 dark:bg-emerald-500/10",
    tile: "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300",
    pays: true,
  },
];

const HUB_DEFAULT = "Every shared template is a free demo";

const W = 1000;
const H = 530;
const CX = W / 2;
const CY = H / 2;
/** Card centres. */
const RX = 342;
const RY = 196;
/** Degrees of clearance either side of a card before a connector starts. */
const GAP = 23;
/** How far past the ring each connector bows. */
const BOW = 1.2;

const ANGLES = [-90, -18, 54, 126, 198];

const rad = (deg: number) => (deg * Math.PI) / 180;
const onEllipse = (deg: number, rx: number, ry: number) => ({
  x: CX + rx * Math.cos(rad(deg)),
  y: CY + ry * Math.sin(rad(deg)),
});

const NODES = ANGLES.map((a) => onEllipse(a, RX, RY));

/**
 * One connector per transition. Both ends sit on the card ring itself, in the
 * gap between two cards, and only the control point is pushed outward — an arc
 * on a wider ellipse looks detached at the bottom, where the two cards are
 * closest together and the ellipse bows furthest away from them.
 */
const ARCS = ANGLES.map((a, i) => {
  const next = ANGLES[(i + 1) % ANGLES.length] + (i === ANGLES.length - 1 ? 360 : 0);
  const from = onEllipse(a + GAP, RX, RY);
  const to = onEllipse(next - GAP, RX, RY);
  const ctrl = onEllipse((a + next) / 2, RX * BOW, RY * BOW);
  const f = (n: number) => n.toFixed(1);
  return `M ${f(from.x)} ${f(from.y)} Q ${f(ctrl.x)} ${f(ctrl.y)} ${f(to.x)} ${f(to.y)}`;
});

function Card({
  step,
  active,
  dim,
  onEnter,
  onLeave,
}: {
  step: Step;
  active: boolean;
  dim: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = step.icon;
  return (
    <div
      tabIndex={0}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className={`flex w-full cursor-default items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200 focus-visible:outline-none ${
        step.card
      } ${
        active
          ? "-translate-y-0.5 shadow-lg ring-2 ring-foreground/70"
          : "shadow-sm ring-0"
      } ${dim ? "opacity-40" : "opacity-100"}`}
    >
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${step.tile}`}
        aria-hidden="true"
      >
        <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
      </span>

      <span className="min-w-0">
        <span className="block text-[13px] font-semibold leading-tight text-foreground">
          {step.title}
        </span>
        <span className="mt-1 block text-[12px] leading-[1.4] text-foreground/65">{step.sub}</span>
        {step.pays && (
          <span className="label-mono mt-1.5 block text-[9px] uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
            Money in
          </span>
        )}
      </span>
    </div>
  );
}

export function NotionFlywheel() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <figure className="my-9">
      {/* The ring. */}
      <div
        className="relative mx-auto hidden w-full sm:block"
        style={{ aspectRatio: `${W} / ${H}` }}
        role="img"
        aria-label="A five-step loop: free for individuals, users build setups, creators share them, new users copy one, teams adopt and pay — and paying funds the free plan that starts it again."
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <marker
              id="fw-head"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--foreground))" />
            </marker>
            <marker
              id="fw-head-on"
              viewBox="0 0 10 10"
              refX="8.5"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="hsl(var(--signal))" />
            </marker>
          </defs>

          {ARCS.map((d, i) => {
            // The connector leaving the card you are pointing at is the one
            // that answers "and then what?", so that is the one that lights up.
            const on = active === i;
            return (
              <path
                key={d}
                d={d}
                fill="none"
                stroke={on ? "hsl(var(--signal))" : "hsl(var(--foreground))"}
                strokeWidth={on ? 2.6 : 1.8}
                strokeLinecap="round"
                opacity={on ? 1 : active === null ? 0.45 : 0.18}
                markerEnd={on ? "url(#fw-head-on)" : "url(#fw-head)"}
                className="transition-all duration-200"
              />
            );
          })}
        </svg>

        {/* The hub is the readout. Putting it here rather than under the
            diagram means the answer appears inside the ring you are already
            looking at, and the eye never leaves the thing it is reading. */}
        <div
          className="absolute flex aspect-square w-[25%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-signal/30 bg-signal/[0.07] px-[6%] text-center"
          style={{ left: "50%", top: "50%" }}
        >
          <span className="label-mono mb-2 block text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
            {active === null ? "The loop" : `Step ${active + 1} of 5`}
          </span>
          <p
            key={active ?? -1}
            className="animate-rise text-[13px] font-medium leading-[1.4] text-foreground"
          >
            {active === null ? HUB_DEFAULT : STEPS[active].why}
          </p>
          {active === null && (
            <span className="mt-2 block text-[10.5px] leading-tight text-muted-foreground">
              Hover a step
            </span>
          )}
        </div>

        {NODES.map((n, i) => (
          <div
            key={STEPS[i].title}
            className="absolute w-[25%] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
          >
            <Card
              step={STEPS[i]}
              active={active === i}
              dim={active !== null && active !== i}
              onEnter={() => setActive(i)}
              onLeave={() => setActive(null)}
            />
          </div>
        ))}
      </div>

      {/* Phones get the same five steps, stacked. */}
      <ol className="space-y-1 sm:hidden">
        <li className="rounded-xl border border-signal/25 bg-signal/10 px-3.5 py-3 text-center text-[13px] font-medium text-foreground">
          {HUB_DEFAULT}
        </li>
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <li key={s.title}>
              <span
                aria-hidden="true"
                className="block py-1 text-center text-[13px] text-muted-foreground"
              >
                ↓
              </span>
              <div className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 ${s.card}`}>
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${s.tile}`}
                  aria-hidden="true"
                >
                  <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold leading-tight text-foreground">
                    {String(i + 1).padStart(2, "0")} · {s.title}
                    {s.pays && (
                      <span className="label-mono ml-2 text-[9px] uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                        Money in
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-[1.5] text-foreground/65">{s.why}</p>
                </div>
              </div>
            </li>
          );
        })}
        <li className="pt-2 text-center text-[12px] text-muted-foreground">
          ↻ and the free plan takes the next one in at 01.
        </li>
      </ol>

    </figure>
  );
}
