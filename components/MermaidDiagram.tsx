"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { preloadMermaid, renderDiagram } from "@/lib/mermaid";

type Status = "waiting" | "rendering" | "done" | "error";

/**
 * Renders a ```mermaid fence as a diagram.
 *
 * The library is only fetched once per page, and a diagram only renders when
 * it is close to the viewport, so a post with five diagrams does not pay for
 * all five before the reader has scrolled to any of them.
 */
export function MermaidDiagram({ chart }: { chart: string }) {
  const reactId = useId();
  const id = `mermaid-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const hostRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [status, setStatus] = useState<Status>("waiting");
  const [near, setNear] = useState(false);

  // Fetch the library once the browser is idle, so 2.3mb of diagram code does
  // not compete with the article itself for bandwidth on first paint.
  useEffect(() => {
    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number })
        .requestIdleCallback;
    if (idle) {
      const handle = idle(() => preloadMermaid(), { timeout: 2500 });
      return () => {
        const cancel = (window as unknown as { cancelIdleCallback?: (h: number) => void })
          .cancelIdleCallback;
        cancel?.(handle);
      };
    }
    const t = setTimeout(preloadMermaid, 1200);
    return () => clearTimeout(t);
  }, []);

  // Only draw once the diagram is within a screen of the viewport.
  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;
    let cancelled = false;
    setStatus("rendering");

    renderDiagram(id, chart, resolvedTheme === "dark")
      .then((svg) => {
        if (cancelled || !svgRef.current) return;
        svgRef.current.innerHTML = svg;
        setStatus("done");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [near, chart, id, resolvedTheme]);

  // Unparseable diagram: show the source rather than an empty frame.
  if (status === "error") {
    return (
      <figure className="my-8">
        <pre className="bg-muted border border-border p-5 overflow-x-auto text-[13px] font-mono text-foreground/80">
          {chart}
        </pre>
        <figcaption className="label-mono text-[9px] text-muted-foreground mt-2">
          Diagram source
        </figcaption>
      </figure>
    );
  }

  return (
    <div
      ref={hostRef}
      className="my-8 border border-border bg-card overflow-x-auto"
    >
      {status !== "done" && (
        <div className="flex items-center justify-center gap-3 py-14 px-5">
          <span className="w-1.5 h-1.5 bg-primary animate-pulse" aria-hidden="true" />
          <span className="label-mono text-[9px] text-muted-foreground">
            Drawing diagram
          </span>
        </div>
      )}
      <div
        ref={svgRef}
        className={`justify-center p-5 [&_svg]:max-w-full [&_svg]:h-auto ${
          status === "done" ? "flex animate-rise" : "hidden"
        }`}
      />
    </div>
  );
}
