"use client";

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring" as const, stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
  /**
   * Keep cycling once the last child has been shown, instead of stopping on a
   * full list. Pair with `maxVisible` for a rolling feed.
   */
  loop?: boolean;
  /** Cap how many items are on screen; the oldest animates out as a new one arrives. */
  maxVisible?: number;
}

export const AnimatedList = React.memo(
  ({
    children,
    className,
    delay = 1000,
    loop = false,
    maxVisible,
    ...props
  }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    useEffect(() => {
      if (!loop && index >= childrenArray.length - 1) return;
      const timeout = setTimeout(() => {
        setIndex((prev) =>
          loop ? (prev + 1) % childrenArray.length : prev + 1
        );
      }, delay);
      return () => clearTimeout(timeout);
    }, [index, delay, loop, childrenArray.length]);

    const itemsToShow = useMemo(() => {
      const total = childrenArray.length;
      if (!loop) {
        const result = childrenArray.slice(0, index + 1).reverse();
        return maxVisible ? result.slice(0, maxVisible) : result;
      }
      // Rolling window, newest first: one arrives at the top each tick and the
      // oldest drops off the bottom, so the feed never stops or piles up.
      const count = Math.min(maxVisible ?? total, total);
      return Array.from(
        { length: count },
        (_, i) => childrenArray[(index - i + total * 2) % total]
      );
    }, [index, childrenArray, loop, maxVisible]);

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";
