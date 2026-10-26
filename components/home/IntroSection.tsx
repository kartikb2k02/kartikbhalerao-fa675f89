"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { IntroProfile, type IntroMode } from "@/components/home/IntroProfile";

const SESSION_KEY = "home-intro-started-v2";
let hasStarted = false;

export function IntroSection({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<IntroMode>(hasStarted ? "skip" : "pending");
  const decided = useRef(false);

  useLayoutEffect(() => {
    if (decided.current) return;
    decided.current = true;

    try {
      hasStarted ||= window.sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      // The module flag still prevents repeats in the current session.
    }

    if (hasStarted) {
      setMode("skip");
      return;
    }

    hasStarted = true;
    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Storage may be unavailable; the intro still plays once per mount.
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
