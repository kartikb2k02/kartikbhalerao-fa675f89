"use client";

import { motion } from "motion/react";
import { ease } from "@/lib/motion";

const letterVariants = {
  rest: { y: "0%" },
  hover: (index: number) => ({
    y: "-50%",
    transition: {
      duration: 0.3,
      ease: ease.out,
      delay: index * 0.025,
    },
  }),
};

/** Two-line character roll for compact navigation labels. */
export function RollingText({ text }: { text: string }) {
  return (
    <motion.span
      aria-label={text}
      className="inline-flex h-[1.2em] overflow-hidden align-bottom"
      initial="rest"
      whileHover="hover"
    >
      <span aria-hidden="true" className="inline-flex">
        {Array.from(text).map((character, index) => {
          const glyph = character === " " ? "\u00a0" : character;

          return (
            <span key={`${character}-${index}`} className="relative block h-[1.2em] overflow-hidden">
              <motion.span
                className="block"
                custom={index}
                variants={letterVariants}
              >
                <span className="block h-[1.2em]">{glyph}</span>
                <span className="block h-[1.2em]">{glyph}</span>
              </motion.span>
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
