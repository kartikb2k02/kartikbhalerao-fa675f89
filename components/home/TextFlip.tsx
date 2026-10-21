"use client";

import { Children, useEffect, useState } from "react";
import { AnimatePresence, motion, type Transition, type Variants } from "motion/react";

const defaultTransition: Transition = { duration: 0.3 };

/** Blur on the way in and out, so the swap reads as a focus pull. */
const defaultVariants: Variants = {
  initial: { filter: "blur(1px)", opacity: 0, y: "-20%" },
  animate: { filter: "blur(0px)", opacity: 1, y: "0%" },
  exit: { filter: "blur(1px)", opacity: 0, y: "40%", transition: { ease: "easeOut" } },
};

/**
 * Cycles through its children, one at a time.
 *
 * `mode="wait"` so the outgoing item finishes leaving before the next
 * arrives — overlapping them at this size reads as a flicker.
 *
 * Adapted from the MIT-licensed aniketpawar.com by Aniket Pawar.
 */
export function TextFlip({
  children,
  className = "",
  interval = 2,
  play = true,
  transition = defaultTransition,
  variants = defaultVariants,
}: {
  children: React.ReactNode[];
  className?: string;
  /** Seconds between flips. */
  interval?: number;
  play?: boolean;
  transition?: Transition;
  variants?: Variants;
}) {
  const [index, setIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (!play || items.length < 2) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % items.length),
      interval * 1000
    );
    return () => clearInterval(timer);
  }, [play, interval, items.length]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={index}
        className={`inline-block ${className}`}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        {items[index]}
      </motion.span>
    </AnimatePresence>
  );
}
