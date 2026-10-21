/**
 * The motion vocabulary.
 *
 * Every animation on the site draws its curve and its duration from
 * here. That constraint is the whole point: a handful of shared
 * curves is what makes a set of animations read as one designed
 * system rather than as a pile of separate effects.
 *
 * Reduced motion is NOT handled here — it is handled once, globally,
 * by the `<MotionConfig reducedMotion="user">` in Providers. Do not
 * add per-component media queries on top of it.
 */

import type { Transition, Variants } from "motion/react";

/* ── Curves ────────────────────────────────────────────────────
   Four easings, each with a job. Anything that needs a fifth is
   probably doing something the system should not be doing. */
export const ease = {
  /** Things entering the page. Fast out of the gate, long settle. */
  out: [0.22, 1, 0.36, 1],
  /** Things leaving. Mirror of `out`, so exits feel like rewinds. */
  in: [0.64, 0, 0.78, 0],
  /** Both ends — height changes, filter reflows, anything in place. */
  inOut: [0.76, 0, 0.24, 1],
  /** Overshoots slightly. Stickers, pills, anything that should feel
      stuck on by hand rather than placed. */
  back: [0.34, 1.56, 0.64, 1],
} as const;

/* ── Durations ─────────────────────────────────────────────────
   In seconds, because that is what `motion` takes. */
export const dur = {
  /** Hover states, colour swaps. Below this it reads as a glitch. */
  fast: 0.18,
  /** The default. Row expansion, fades, most entrances. */
  base: 0.42,
  /** Big moves across the viewport. */
  slow: 0.72,
  /** The starburst. Long enough to register as a deliberate beat. */
  entry: 1.15,
} as const;

/* ── Springs ───────────────────────────────────────────────────
   Only for things that track a pointer or get thrown. Everything
   else uses a duration and a curve, which is predictable. */
export const spring = {
  /** The cursor trail. Loose enough to visibly lag behind. */
  trail: { type: "spring", stiffness: 420, damping: 32, mass: 0.7 },
  /** Snappier — for elements that follow but must not feel sloppy. */
  snap: { type: "spring", stiffness: 700, damping: 40, mass: 0.5 },
} as const satisfies Record<string, Transition>;

/* ── Shared variants ───────────────────────────────────────────
   The three entrances used across the site. */

/** Rise and fade. The default way anything arrives. */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease: ease.out },
  },
};

/** Same, but as a parent that walks its children in one after the
 *  other. Pair with `riseIn` on each child. */
export const stagger = (step = 0.07, delay = 0): Variants => ({
  hidden: {},
  shown: {
    transition: { staggerChildren: step, delayChildren: delay },
  },
});

/** A line of display type rising out of a clipped mask. The parent
 *  needs `overflow: hidden` for the mask to read. */
export const maskRise: Variants = {
  hidden: { y: "110%" },
  shown: {
    y: "0%",
    transition: { duration: dur.slow, ease: ease.out },
  },
};

/** When something scrolls into view. Shared so every section on the
 *  site trips at the same point rather than each picking its own. */
export const inView = {
  once: true,
  amount: 0.25,
} as const;
