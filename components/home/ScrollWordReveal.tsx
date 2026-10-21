"use client";

import { Fragment, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

const START_OPACITY = 0.2;
const SPREAD = 0.9;
const WORD_DURATION = 0.16;

function getWordRange(index: number, count: number) {
  const start = count <= 1 ? 0 : (index / (count - 1)) * SPREAD;
  return { start, end: Math.min(1, start + WORD_DURATION) };
}

function Word({
  children,
  progress,
  index,
  count,
  reducedMotion,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  count: number;
  reducedMotion: boolean;
}) {
  const range = getWordRange(index, count);
  const opacity = useTransform(progress, (latest) => {
    if (reducedMotion || latest >= range.end) return 1;
    if (latest <= range.start) return START_OPACITY;

    const wordProgress = (latest - range.start) / (range.end - range.start);
    return START_OPACITY + (1 - START_OPACITY) * wordProgress;
  });

  return (
    <motion.span aria-hidden="true" style={reducedMotion ? undefined : { opacity }}>
      {children}
    </motion.span>
  );
}

/**
 * Reveals the homepage introduction word by word across its scroll range.
 * The paragraph label keeps the full copy accessible without duplicating it
 * visually beside the animated words.
 */
export function ScrollWordReveal({ paragraphs }: { paragraphs: readonly string[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.84", "end 0.3"],
  });
  const progressScale = reducedMotion ? 1 : scrollYProgress;

  return (
    <div ref={sectionRef} className="grid grid-cols-[2px_minmax(0,1fr)] gap-4">
      <div aria-hidden="true" className="relative mt-1 h-32 w-[2px] overflow-hidden bg-border">
        <motion.span
          className="absolute inset-0 block origin-top bg-foreground/70"
          style={{ scaleY: progressScale }}
        />
      </div>

      <div className="space-y-3.5">
        {paragraphs.map((paragraph) => {
          const words = paragraph.split(" ");

          return (
            <p
              key={paragraph.slice(0, 32)}
              aria-label={paragraph}
              className="text-[15px] leading-relaxed text-muted-foreground"
            >
              <span aria-hidden="true">
                {words.map((word, index) => (
                  <Fragment key={`${word}-${index}`}>
                    <Word
                      progress={scrollYProgress}
                      index={index}
                      count={words.length}
                      reducedMotion={Boolean(reducedMotion)}
                    >
                      {word}
                    </Word>
                    {index < words.length - 1 ? " " : null}
                  </Fragment>
                ))}
              </span>
            </p>
          );
        })}
      </div>
    </div>
  );
}
