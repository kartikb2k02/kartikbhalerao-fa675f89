import { useEffect, useRef } from "react";

/**
 * Fires on a single unmodified key press.
 *
 * Ignores the event when focus is in a field or on a contenteditable
 * element — a page-level "d" shortcut that fires while someone is typing
 * their name into a form is a bug, not a feature — and ignores it when
 * any modifier is held, so it never shadows a browser shortcut.
 *
 * The handler is held in a ref so passing an inline arrow function does
 * not rebind the listener on every render.
 */
export function useHotkey(key: string, handler: () => void) {
  const saved = useRef(handler);
  saved.current = handler;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.toLowerCase() !== key.toLowerCase()) return;

      const el = document.activeElement as HTMLElement | null;
      if (el) {
        const tag = el.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
        if (el.isContentEditable) return;
      }

      e.preventDefault();
      saved.current();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [key]);
}
