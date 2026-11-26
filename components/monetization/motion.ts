"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Motion helpers for the monetization teardown.
 *
 * Both hooks latch: once something has been seen it stays seen, so
 * scrolling back up to re-read a section does not replay its animation.
 * Both also rest in the finished state rather than the empty one, so a
 * crawler, a reader with JavaScript off, and anyone who has asked for
 * reduced motion all get the real page.
 */

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** True once the element has scrolled into view. */
export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No observer: show everything on the next frame rather than
    // synchronously, which would cascade a render out of this effect.
    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        observer.disconnect();
      },
      { rootMargin, threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}

/**
 * Counts the leading number of a label up from zero, leaving every other
 * character alone: "146%" counts, and so does the 5 in "$5 : $1" while
 * the rest of the string holds still. Eased, so it decelerates into the
 * figure instead of stopping dead on it.
 *
 * It rests at the real value and only drops to zero on the first
 * animation frame after the card comes into view — by which point the
 * card is still at zero opacity, so the reset is never seen. That order
 * is what lets the server-rendered HTML carry the true number.
 */
export function useCountUp(label: string, run: boolean, ms = 1200) {
  const match = label.match(/\d[\d,]*/);
  const digits = match ? match[0] : "";
  const target = digits ? Number(digits.replace(/,/g, "")) : 0;

  const [value, setValue] = useState(target);

  useEffect(() => {
    if (!digits || !run || reducedMotion()) return;

    let frame = 0;
    let started = 0;

    const tick = (now: number) => {
      if (!started) started = now;
      const t = Math.min(1, (now - started) / ms);
      setValue(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [digits, run, target, ms]);

  if (!digits) return label;
  return label.replace(digits, value.toLocaleString("en-US"));
}

/**
 * Points a card's spotlight at the cursor. The coordinates go straight
 * onto the node as custom properties rather than into state: a pointer
 * move should cost a paint, not a React render of nine figures.
 */
export function spotlight(event: React.PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  const box = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - box.left}px`);
  el.style.setProperty("--my", `${event.clientY - box.top}px`);
}
