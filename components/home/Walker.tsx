"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { DogFigure, DOG_PALETTES } from "@/components/home/WalkerFigure";

/** How long one crossing takes, in ms. */
const CROSS_MS = 9000;
/** How long the dog pauses at the far edge before choosing somewhere new. */
const REST_MS = 1400;
const DOG_WIDTH = 58;

interface Spot {
  /** Document-space y for the dog's paws. */
  top: number;
  left: number;
  right: number;
}

/**
 * A dog who wanders the page.
 *
 * The destination pool includes the header and every homepage section.
 * From whatever is visible, he picks a different place, hops there,
 * trots across it, and picks again.
 *
 * Positioned in document space rather than fixed to the viewport: a
 * fixed figure slides over the text as you scroll, which reads as an
 * overlay. This one belongs to the page and stays with its section.
 *
 * Hidden entirely under reduced motion, and on touch devices, where
 * there is no cursor and the figure would just be a moving distraction
 * over the content.
 */
export function Walker() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [spot, setSpot] = useState<Spot | null>(null);
  const [facing, setFacing] = useState<1 | -1>(1);
  const [walking, setWalking] = useState(true);
  const [jump, setJump] = useState(0);
  // A new coat each time the dog turns up somewhere else.
  const [outfit, setOutfit] = useState(0);

  // The section he is currently in, so a re-measure on resize does not
  // teleport him somewhere else mid-stride.
  const currentIndex = useRef(-1);

  useEffect(() => {
    if (reduced) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const getTargets = () =>
      Array.from(document.querySelectorAll("header, main section"));

    const visibleTargets = () =>
      getTargets()
        .map((el, index) => {
          const rect = el.getBoundingClientRect();
          const amount = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
          return { index, amount };
        })
        .filter(({ amount }) => amount > 0);

    const measure = (index: number): Spot | null => {
      const targets = getTargets();
      const el = targets[index];
      if (!el) return null;

      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY;

      return {
        // Paws land on the target's bottom edge, so the dog reads as
        // standing on the same ground as the content.
        top: rect.bottom + scrollY - 48,
        left: rect.left,
        right: rect.right,
      };
    };

    /** Pick another target from the part of the page currently visible. */
    const targetInView = () => {
      const visible = visibleTargets();

      if (!visible.length) return 0;

      const alternatives = visible.filter(({ index }) => index !== currentIndex.current);
      const choices = alternatives.length ? alternatives : visible;
      return choices[Math.floor(Math.random() * choices.length)].index;
    };

    /** The section with the most screen space gets the dog immediately. */
    const dominantTarget = () => {
      const visible = visibleTargets();
      return visible.reduce(
        (best, target) => (target.amount > best.amount ? target : best),
        { index: 0, amount: -1 },
      ).index;
    };

    const relocate = (requestedIndex?: number) => {
      const next = requestedIndex ?? targetInView();
      currentIndex.current = next;
      const s = measure(next);
      if (!s) return;

      setSpot(s);
      setFacing((f) => (f === 1 ? -1 : 1));
      setOutfit((o) => (o + 1) % DOG_PALETTES.length);
      setJump((j) => j + 1);
      setWalking(true);
    };

    relocate();

    // One crossing, a rest, then the dog looks for wherever you are now.
    let restTimeout: number | null = null;
    const loop = window.setInterval(() => {
      setWalking(false);
      restTimeout = window.setTimeout(() => {
        restTimeout = null;
        relocate();
      }, REST_MS);
    }, CROSS_MS + REST_MS);

    // Scrolling into a new section is a direct cue: jump there now rather
    // than making the reader wait for the next 10-second wander cycle.
    let scrollFrame: number | null = null;
    const onScroll = () => {
      if (scrollFrame !== null) return;
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = null;
        const next = dominantTarget();
        if (next === currentIndex.current) return;
        if (restTimeout !== null) {
          window.clearTimeout(restTimeout);
          restTimeout = null;
        }
        relocate(next);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Keep him on his target's edge when the layout reflows.
    const onResize = () => {
      const s = measure(currentIndex.current);
      if (s) setSpot(s);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearInterval(loop);
      if (restTimeout !== null) window.clearTimeout(restTimeout);
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled]);

  if (!enabled || !spot) return null;

  const span = Math.max(50, spot.right - spot.left - DOG_WIDTH);

  return (
    <motion.div
      className="dog-track pointer-events-none absolute z-[1]"
      initial={false}
      animate={{ top: spot.top, left: spot.left }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      style={{ position: "absolute" }}
    >
      <motion.div
        key={jump}
        initial={jump === 0 ? false : { y: 0, rotate: 0 }}
        animate={jump === 0 ? { y: 0, rotate: 0 } : { y: [0, -28, 0], rotate: [0, -7, 6, 0] }}
        transition={{
          y: { duration: 0.78, times: [0, 0.42, 1], ease: "easeOut" },
          rotate: { duration: 0.78, times: [0, 0.34, 0.72, 1], ease: "easeOut" },
        }}
      >
        <motion.div
          initial={{ x: facing === 1 ? 0 : span }}
          animate={
            walking
              ? { x: facing === 1 ? [0, span] : [span, 0] }
              : { x: facing === 1 ? span : 0 }
          }
          transition={{ duration: CROSS_MS / 1000, ease: "linear" }}
        >
          <div
            className="dog-hover-target group pointer-events-auto relative flex h-[52px] w-[58px] items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-foreground/35 focus-visible:ring-offset-2"
            tabIndex={0}
            role="img"
            aria-label="A roaming dog says: don't stop me"
          >
            <span className="dog-message pointer-events-none absolute bottom-full left-1/2 mb-2 whitespace-nowrap rounded-lg bg-foreground px-2.5 py-1.5 text-[12px] font-medium text-background opacity-0 shadow-lg transition-[opacity,transform] duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
              don&apos;t stop me
            </span>
            <div style={{ transform: `scaleX(${facing})`, transformOrigin: "center" }}>
              <div className="dog-bob">
                <DogFigure palette={DOG_PALETTES[outfit]} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
