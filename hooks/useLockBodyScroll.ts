import { useLayoutEffect } from "react";

/**
 * Freezes the page while an overlay owns the screen.
 *
 * Restores whatever `overflow` was there before rather than clearing it,
 * so nesting two locks does not leave the page permanently scrollable.
 */
export function useLockBodyScroll(locked: boolean) {
  useLayoutEffect(() => {
    if (!locked) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}
