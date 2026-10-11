"use client";

import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  /** Hide the Light/Dark label and show the icon alone. */
  iconOnly?: boolean;
};

/**
 * Theme toggle that reveals the new theme as a circle growing out of the
 * button, using the View Transitions API.
 *
 * Differs from the Magic UI original in one important way: the original
 * toggles `documentElement.classList` itself, which would fight next-themes and
 * lose the choice on the next navigation. Here next-themes stays the source of
 * truth and the class is only set directly so the transition snapshot captures
 * the new theme synchronously.
 */
export const AnimatedThemeToggler = ({ className, iconOnly }: Props) => {
  const { setTheme, resolvedTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleTheme = useCallback(async () => {
    // Read the theme at click time rather than keeping a mounted flag: the
    // server does not know the theme, so rendering from it would flash the
    // wrong icon on first paint. The icons below are swapped in CSS instead.
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const button = buttonRef.current;

    const canAnimate =
      typeof document !== "undefined" &&
      "startViewTransition" in document &&
      // The API rejects outright on a hidden document, and a wipe nobody can
      // see is not worth the risk of a half-applied theme.
      document.visibilityState === "visible" &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canAnimate || !button) {
      setTheme(next);
      return;
    }

    try {
      await document.startViewTransition(() => {
        flushSync(() => {
          document.documentElement.classList.toggle("dark", next === "dark");
          setTheme(next);
        });
      }).ready;
    } catch {
      // Aborted by the browser — the tab was hidden, or another transition was
      // already running. Make sure the theme still lands, then skip the wipe.
      setTheme(next);
      return;
    }

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 620,
        easing: "cubic-bezier(0.2, 0, 0, 1)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [resolvedTheme, setTheme]);

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Toggle colour theme"
      className={cn(
        "label-mono flex items-center gap-1.5 text-[11px] text-foreground/60 hover:text-primary transition-colors duration-150",
        className
      )}
    >
      <Sun className="h-3.5 w-3.5 dark:hidden" />
      <Moon className="hidden h-3.5 w-3.5 dark:block" />
      {!iconOnly && (
        <>
          <span className="dark:hidden">Light</span>
          <span className="hidden dark:inline">Dark</span>
        </>
      )}
    </button>
  );
};
