import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 22,
        height: 22,
        marginLeft: -4,
        marginTop: -3,
        backgroundImage: "url('/cursor.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none",
        zIndex: 999999,
        willChange: "transform",
        filter: isDark ? "invert(1)" : "none",
        transition: "filter 0.2s ease",
      }}
    />
  );
};
