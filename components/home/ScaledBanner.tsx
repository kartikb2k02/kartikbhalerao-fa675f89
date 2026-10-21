"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { BANNER_DESIGN_WIDTH } from "@/components/home/buildBanners";

/**
 * Renders a fixed-width banner scaled to fit its cell.
 *
 * The banners are composed at one width with fixed type sizes and
 * padding. Letting them reflow into a 300px cell wraps every label and
 * breaks the composition, so the whole thing is drawn at its design
 * width and scaled down as one object.
 *
 * The scale is measured rather than expressed in CSS: `calc(100cqw /
 * 720px)` looks like it should work but CSS cannot divide by a length,
 * so the custom property was invalid and the transform silently did
 * nothing — the banner rendered full size with only its top-left
 * corner visible.
 */
export function ScaledBanner({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const measure = () => {
      const width = node.getBoundingClientRect().width;
      if (width > 0) setScale(width / BANNER_DESIGN_WIDTH);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: BANNER_DESIGN_WIDTH,
          height: (BANNER_DESIGN_WIDTH * 9) / 16,
          transform: `scale(${scale})`,
          // Hidden until measured, so the first paint is not a full-size
          // banner flashing before it shrinks.
          visibility: scale === 0 ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </div>
  );
}
