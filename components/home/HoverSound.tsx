"use client";

import { useEffect, useRef } from "react";
import { useSound } from "@/components/home/SoundProvider";
import { playTick } from "@/lib/sounds";

/** What counts as hoverable. Anything else is just page. */
const INTERACTIVE = "a, button, [role='button'], [role='menuitem'], summary";

/** Never fire two ticks closer together than this. */
const MIN_GAP_MS = 60;

/**
 * Plays a tick when the pointer enters something interactive.
 *
 * One delegated `pointerover` listener on the document rather than a
 * handler per element: there are well over a hundred links across these
 * pages, and binding each would cost more than the sound is worth.
 *
 * Two guards keep it from becoming a machine gun — the tick only fires
 * on entering a *different* element than last time, and never twice
 * within 60ms, so dragging the cursor across a dense list produces a
 * run of distinct ticks rather than a buzz.
 *
 * Mounted always but silent until the sound toggle is on; the listener
 * is only attached while it is, and never on touch devices, which have
 * no hover to speak of.
 */
export function HoverSound() {
  const { enabled } = useSound();
  const lastEl = useRef<Element | null>(null);
  const lastAt = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const hit = target?.closest?.(INTERACTIVE);
      if (!hit || hit === lastEl.current) return;

      const now = performance.now();
      if (now - lastAt.current < MIN_GAP_MS) return;

      lastEl.current = hit;
      lastAt.current = now;
      playTick();
    };

    // Clear the memo on the way out so re-entering the same element ticks.
    const onOut = (e: PointerEvent) => {
      const related = e.relatedTarget as Element | null;
      if (!related?.closest?.(INTERACTIVE)) lastEl.current = null;
    };

    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, [enabled]);

  return null;
}
