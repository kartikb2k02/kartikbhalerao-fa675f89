"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { IntroProfile, type IntroMode } from "@/components/home/IntroProfile";

const SESSION_KEY = "home-intro-started";

/**
 * Module scope, not state: it has to survive both a client-side
 * navigation back to the homepage and StrictMode's double mount, so the
 * welcome plays once and does not replay on every return.
 */
let hasStarted = false;

/**
 * Decides whether the welcome plays, before first paint.
 *
 * `useLayoutEffect` rather than `useEffect` so the decision lands before
 * the browser paints — on `useEffect` the settled header shows for a
 * frame and the intro then covers it, which reads as a glitch.
 */
export function IntroSection({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<IntroMode>(hasStarted ? "skip" : "pending");

  // StrictMode runs this effect, its cleanup, then the effect again on the
  // same instance. Without this guard the first pass sets `hasStarted` and
  // the second pass reads it back and skips the intro it just scheduled —
  // so it never played at all. The ref survives the double invoke; the
  // module flag below still catches genuine repeat visits.
  const decided = useRef(false);

  useLayoutEffect(() => {
    if (decided.current) return;
    decided.current = true;

    try {
      hasStarted ||= window.sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      // Storage blocked: the module flag still prevents repeats in-session.
    }

    if (hasStarted) {
      setMode("skip");
      return;
    }

    hasStarted = true;
    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      /* nothing to do */
    }
    setMode("play");
  }, []);

  return (
    <section className="space-y-4 px-4 py-6">
      <IntroProfile mode={mode} />
      {children}
    </section>
  );
}
