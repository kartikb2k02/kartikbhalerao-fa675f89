"use client";

import { useEffect, useState } from "react";

const VERBS = ["BUILD", "SHIP", "SCALE", "FIX", "RETHINK"];

/**
 * Each line gets its own size so both optically fill the viewport width.
 * "Kartik" is six characters, "Bhalerao" is eight, so a single font size
 * would leave one line short. Tuned against Bricolage Grotesque 800.
 */
const LINE_ONE = "clamp(58px, 23vw, 420px)";
const LINE_TWO = "clamp(43px, 17.2vw, 314px)";

export const HeroSection = () => {
  const [verb, setVerb] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setVerb((v) => (v + 1) % VERBS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden px-3 sm:px-5 lg:px-6 py-16">
      <div className="relative w-full">
        <h1 className="display-mega text-foreground select-none">
          <span className="mega-line">
            <span style={{ fontSize: LINE_ONE }}>Kartik</span>
          </span>
          <span className="mega-line">
            <span
              className="text-stroke"
              style={{ fontSize: LINE_TWO, animationDelay: "130ms" }}
            >
              Bhalerao
            </span>
          </span>
        </h1>

        <p
          className="display-mega text-foreground/80 fade-up mt-6 sm:mt-8 px-1"
          style={{ fontSize: "clamp(16px, 3.1vw, 44px)", animationDelay: "420ms" }}
        >
          I{" "}
          <span key={verb} className="word-swap text-primary">
            {VERBS[verb]}
          </span>{" "}
          products people actually use
        </p>
      </div>
    </section>
  );
};
