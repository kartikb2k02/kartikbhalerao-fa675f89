"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import { useTheme } from "next-themes";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  /** Explicit colour. Omit to use the site's signal colour for the active theme. */
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  /** Draw only once the text is scrolled into view. */
  isView?: boolean;
}

// rough-notation paints a real SVG and cannot read a CSS custom property, so
// the palette is resolved here per theme.
const SIGNAL = { light: "#c4420f", dark: "#f2740f" };
// Marker colour for `highlight`, matching the sticky notes used on /about.
const MARKER = "#fbe7a1";
// A highlight block is drawn BEHIND the text (rough-notation inserts the svg
// `beforebegin`), with no blend mode — so on the dark theme near-white text
// would sit on a pale marker and disappear. Highlighted text takes ink colour
// for as long as the marker is showing, which is what a real highlighter does.
const MARKED_INK = "#17161a";

export function Highlighter({
  children,
  action = "highlight",
  color,
  strokeWidth = 1.6,
  animationDuration = 700,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = true,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const annotationRef = useRef<RoughAnnotation | null>(null);
  const { resolvedTheme } = useTheme();

  const isInView = useInView(elementRef, { once: true, margin: "-8%" });
  const shouldShow = !isView || isInView;

  const isMarker = action === "highlight";
  const resolvedColor =
    color ??
    (isMarker ? MARKER : resolvedTheme === "dark" ? SIGNAL.dark : SIGNAL.light);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !shouldShow) return;

    const draw = () => {
      annotationRef.current?.remove();
      const annotation = annotate(element, {
        type: action,
        color: resolvedColor,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      });
      annotationRef.current = annotation;
      annotation.show();
      if (isMarker) element.style.color = MARKED_INK;
    };

    draw();

    // The drawing is absolutely positioned over the text, so a reflow leaves it
    // stranded — redraw (without the animation) whenever the box changes.
    const observer = new ResizeObserver(() => {
      annotationRef.current?.remove();
      const annotation = annotate(element, {
        type: action,
        color: resolvedColor,
        strokeWidth,
        animationDuration: 0,
        iterations,
        padding,
        multiline,
      });
      annotationRef.current = annotation;
      annotation.show();
    });
    observer.observe(element);

    return () => {
      observer.disconnect();
      annotationRef.current?.remove();
      annotationRef.current = null;
      element.style.removeProperty("color");
    };
  }, [
    shouldShow,
    action,
    isMarker,
    resolvedColor,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ]);

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}
