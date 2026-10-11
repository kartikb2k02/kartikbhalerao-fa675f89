"use client";

import { useEffect, useState } from "react";
import { HeroFeed } from "@/components/HeroFeed";

const VERBS = ["BUILD", "SHIP", "SCALE", "FIX", "RETHINK"];

/**
 * Each line gets its own size so both optically fill their column. "Kartik" is
 * six characters, "Bhalerao" is eight, so a single font size would leave one
 * line short. Tuned against Bricolage Grotesque 800.
 *
 * Sized in `cqw` against the text column, not `vw` against the viewport: the
 * feed takes a fixed 400px out of the row, so the column is not a constant
 * fraction of the screen and a viewport-based size clips "Bhalerao" at some
 * widths. The ratios come from measuring the rendered glyph widths.
 */
const LINE_ONE = "clamp(58px, 25cqw, 360px)";
const LINE_TWO = "clamp(43px, 17.6cqw, 252px)";

export const HeroSection = () => {
  const [verb, setVerb] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setVerb((v) => (v + 1) % VERBS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden px-3 sm:px-5 lg:px-6 py-8 sm:py-10">
      <div className="relative w-full grid xl:grid-cols-[minmax(0,1fr)_400px] gap-8 2xl:gap-14 items-center">
        <div className="min-w-0" style={{ containerType: "inline-size" }}>
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
            className="display-mega text-foreground/80 fade-up mt-5 sm:mt-7 px-1"
            style={{ fontSize: "clamp(16px, 3.1vw, 44px)", animationDelay: "420ms" }}
          >
            I{" "}
            <span key={verb} className="word-swap text-primary">
              {VERBS[verb]}
            </span>{" "}
            products people actually use
          </p>
        </div>

        {/* Reserves the column so the wordmark keeps its measure; the feed
            itself is positioned against the section, directly under the header. */}
        <div className="hidden xl:block" aria-hidden="true" />
      </div>

      <HeroFeed className="hidden xl:flex absolute top-4 right-3 sm:right-5 lg:right-6 w-[400px]" />
    </section>
  );
};
