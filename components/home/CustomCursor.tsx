"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { spring } from "@/lib/motion";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, [role="button"], [data-cursor="interactive"]';

/**
 * A simple dot-and-ring cursor for fine pointers. The front dot stays close
 * to the pointer while the ring lags behind, making the interaction feel
 * physical without making the click target hard to read.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 700, damping: 40, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 700, damping: 40, mass: 0.5 });
  const trailX = useSpring(rawX, { stiffness: 260, damping: 30, mass: 0.7 });
  const trailY = useSpring(rawY, { stiffness: 260, damping: 30, mass: 0.7 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
      setVisible(true);

      const target = event.target instanceof Element ? event.target : null;
      setInteractive(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };
    const onLeave = (event: PointerEvent) => {
      if (!event.relatedTarget) setVisible(false);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onLeave, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("pointercancel", onUp, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [rawX, rawY, reduced]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: trailX, y: trailY }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.16 }}
      >
        <motion.div
          className="custom-cursor-orbit -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: interactive ? 1.28 : 1,
            opacity: interactive ? 0.9 : 0.42,
          }}
          transition={spring.snap}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000]"
        style={{ x, y }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.16 }}
      >
        <motion.div
          className="custom-cursor-dot -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: pressed ? 0.78 : interactive ? 1.15 : 1 }}
          transition={spring.snap}
        />
      </motion.div>
    </>
  );
}
