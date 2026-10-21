"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WalkerFigure, WALKER_PALETTES } from "@/components/home/WalkerFigure";

/** How long one crossing takes, in ms. */
const CROSS_MS = 9000;
/** How long he pauses at the far edge before choosing somewhere new. */
const REST_MS = 1400;

interface Spot {
  /** Document-space y for the figure's feet. */
  top: number;
  left: number;
  right: number;
}

/**
 * A figure who wanders the page.
 *
 * He is not pinned to one divider. He picks whichever section you are
 * currently looking at, hops there, walks its width, then picks again
 * — so he turns up wherever you happen to be reading rather than
 * waiting in a place you have already scrolled past.
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
  // A new outfit each time he turns up somewhere else.
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

    const measure = (index: number): Spot | null => {
      const sections = Array.from(document.querySelectorAll("main section"));
      const el = sections[index];
      if (!el) return null;

      const rect = el.getBoundingClientRect();
      const scrollY = window.scrollY;

      return {
        // Feet land on the section's bottom edge.
        top: rect.bottom + scrollY - 42,
        left: rect.left,
        right: rect.right,
      };
    };

    /** The section occupying most of the viewport right now. */
    const sectionInView = () => {
      const sections = Array.from(document.querySelectorAll("main section"));
      let best = 0;
      let bestVisible = -1;

      sections.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const visible =
          Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
        if (visible > bestVisible) {
          bestVisible = visible;
          best = i;
        }
      });

      return best;
    };

    const relocate = () => {
      const next = sectionInView();
      currentIndex.current = next;
      const s = measure(next);
      if (!s) return;

      setSpot(s);
      setFacing((f) => (f === 1 ? -1 : 1));
      setOutfit((o) => (o + 1) % WALKER_PALETTES.length);
      setWalking(true);
    };

    relocate();

    // One crossing, a rest, then he looks for wherever you are now.
    const loop = setInterval(() => {
      setWalking(false);
      window.setTimeout(relocate, REST_MS);
    }, CROSS_MS + REST_MS);

    // Keep him on his own section's edge when the layout reflows.
    const onResize = () => {
      const s = measure(currentIndex.current);
      if (s) setSpot(s);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(loop);
      window.removeEventListener("resize", onResize);
    };
  }, [enabled]);

  if (!enabled || !spot) return null;

  const span = spot.right - spot.left - 34;

  return (
    <motion.div
      className="walker-track pointer-events-none absolute z-[1]"
      // `top` springs so arriving in a new section reads as a hop
      // rather than a cut.
      initial={false}
      animate={{ top: spot.top, left: spot.left }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      style={{ position: "absolute" }}
    >
      <motion.div
        animate={
          walking
            ? { x: facing === 1 ? [0, span] : [span, 0] }
            : { x: facing === 1 ? span : 0 }
        }
        transition={{ duration: CROSS_MS / 1000, ease: "linear" }}
      >
        {/* Flipped to face the direction of travel. */}
        <div className="walker-bob" style={{ transform: `scaleX(${facing})` }}>
          <WalkerFigure palette={WALKER_PALETTES[outfit]} />
        </div>
      </motion.div>
    </motion.div>
  );
}
