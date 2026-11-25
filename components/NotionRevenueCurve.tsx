"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * Notion's revenue curve, drawn rather than charted.
 *
 * A library would cost 50kb and still need overriding to look like the rest of
 * the page, so this is plain SVG against the site's own tokens: `--signal` for
 * the line, border for the grid, muted ink for every label. Text never wears
 * the data colour.
 *
 * The readout is in the header, not in a floating tooltip. A tooltip covers
 * the curve it is describing and moves while you read it; a figure pinned at
 * the top stays in one place, is the largest thing in the card, and leaves the
 * plot clear. Pointing at the chart changes that figure; pointing away puts
 * the latest number back.
 *
 * The honesty rules the data forces:
 *   · a filled dot is a figure someone reported, a hollow one is an estimate,
 *     and the header says which every time it changes;
 *   · the interpolation is monotone cubic (Fritsch–Carlson), which smooths the
 *     line without inventing a dip between two rising points the way a plain
 *     cardinal spline would.
 */

type Kind = "reported" | "company" | "estimate";

interface Point {
  /** Decimal year, so Sept 2025 and July 2026 sit where they belong. */
  x: number;
  /** $M of annual recurring revenue. */
  value: number;
  when: string;
  kind: Kind;
  /** Printed on the plot itself. Only the points that carry the story. */
  label?: string;
}

const DATA: Point[] = [
  { x: 2019.0, value: 3, when: "2019", kind: "reported", label: "$3M" },
  { x: 2020.0, value: 13, when: "2020", kind: "reported" },
  { x: 2021.0, value: 31, when: "2021", kind: "reported" },
  { x: 2023.0, value: 240, when: "2023", kind: "estimate" },
  { x: 2025.7, value: 500, when: "Sept 2025", kind: "company", label: "$500M" },
  { x: 2025.99, value: 610, when: "End 2025", kind: "estimate" },
  { x: 2026.54, value: 865, when: "July 2026", kind: "estimate", label: "$865M" },
];

const KIND_COPY: Record<Kind, string> = {
  reported: "Reported",
  company: "Company-stated",
  estimate: "Analyst estimate",
};

const LATEST = DATA.length - 1;
const AI_LAUNCH = 2023.08;

const X_MIN = 2018.75;
const X_MAX = 2026.85;
const Y_MAX = 900;
/** Three lines, not five: the shape is the point, not the gridding. */
const Y_TICKS = [0, 400, 800];
const YEARS = [2019, 2021, 2023, 2025];

const PAD = { top: 30, right: 18, bottom: 28, left: 46 };

const money = (m: number) => (m >= 1000 ? `$${(m / 1000).toFixed(2)}B` : `$${m}M`);

/**
 * Fritsch–Carlson monotone cubic, as an SVG path. Tangents are clamped so a
 * segment can never overshoot its own endpoints — the curve stays inside the
 * data it is drawn from.
 */
function monotonePath(pts: { x: number; y: number }[]): string {
  const n = pts.length;
  if (n < 2) return "";

  const dx: number[] = [];
  const slope: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx.push(pts[i + 1].x - pts[i].x);
    slope.push((pts[i + 1].y - pts[i].y) / (pts[i + 1].x - pts[i].x));
  }

  const m: number[] = new Array(n);
  m[0] = slope[0];
  m[n - 1] = slope[n - 2];
  for (let i = 1; i < n - 1; i++) {
    if (slope[i - 1] * slope[i] <= 0) {
      m[i] = 0;
    } else {
      const w1 = 2 * dx[i] + dx[i - 1];
      const w2 = dx[i] + 2 * dx[i - 1];
      m[i] = (w1 + w2) / (w1 / slope[i - 1] + w2 / slope[i]);
    }
  }

  let d = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < n - 1; i++) {
    const h = dx[i] / 3;
    d += ` C ${pts[i].x + h} ${pts[i].y + m[i] * h}, ${pts[i + 1].x - h} ${
      pts[i + 1].y - m[i + 1] * h
    }, ${pts[i + 1].x} ${pts[i + 1].y}`;
  }
  return d;
}

export function NotionRevenueCurve() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.round(entry.contentRect.width))
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Rendered at real pixel size rather than scaled from a fixed viewBox, so
  // the labels stay 11px on a phone instead of shrinking to 5px.
  const height = width ? Math.max(210, Math.min(Math.round(width * 0.42), 300)) : 250;
  const plotW = Math.max(width - PAD.left - PAD.right, 1);
  const plotH = Math.max(height - PAD.top - PAD.bottom, 1);
  const dense = width > 0 && width < 520;

  const sx = useCallback(
    (x: number) => PAD.left + ((x - X_MIN) / (X_MAX - X_MIN)) * plotW,
    [plotW]
  );
  const sy = useCallback((v: number) => PAD.top + (1 - v / Y_MAX) * plotH, [plotH]);

  const pts = useMemo(
    () => DATA.map((d) => ({ ...d, cx: sx(d.x), cy: sy(d.value) })),
    [sx, sy]
  );

  const linePath = useMemo(
    () => monotonePath(pts.map((p) => ({ x: p.cx, y: p.cy }))),
    [pts]
  );

  const areaPath = useMemo(() => {
    if (!linePath) return "";
    const base = PAD.top + plotH;
    return `${linePath} L ${pts[pts.length - 1].cx} ${base} L ${pts[0].cx} ${base} Z`;
  }, [linePath, pts, plotH]);

  /** The pointer only has to be closest, never dead-centre on a 9px dot. */
  const nearest = useCallback(
    (clientX: number) => {
      const box = wrapRef.current?.getBoundingClientRect();
      if (!box) return null;
      const x = clientX - box.left;
      let best = 0;
      for (let i = 1; i < pts.length; i++) {
        if (Math.abs(pts[i].cx - x) < Math.abs(pts[best].cx - x)) best = i;
      }
      return best;
    },
    [pts]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const step = e.key === "ArrowRight" ? 1 : -1;
      setActive((prev) => {
        if (prev === null) return step > 0 ? 0 : pts.length - 1;
        return Math.max(0, Math.min(pts.length - 1, prev + step));
      });
    } else if (e.key === "Escape") {
      setActive(null);
    }
  };

  const shown = active === null ? LATEST : active;
  const hot = pts[shown];
  const hovering = active !== null;

  return (
    <figure className="my-7 overflow-hidden rounded-xl border border-border bg-card">
      {/* The readout: the chart's largest element, and the only thing that
          changes as you move across it. */}
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 border-b border-border px-5 py-4">
        <div>
          <p className="label-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Annual recurring revenue
          </p>
          <p className="mt-2 text-[clamp(1.75rem,4.5vw,2.25rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums text-foreground">
            {money(hot.value)}
          </p>
          <p className="mt-2 flex items-center gap-2 text-[12.5px] leading-none text-muted-foreground">
            <span className="text-foreground/80">{hot.when}</span>
            <span aria-hidden="true" className="text-foreground/25">
              ·
            </span>
            <span>{KIND_COPY[hot.kind]}</span>
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-1 text-[11px] font-medium leading-none text-foreground">
            ×288 since 2019
          </span>
          <span className="label-mono text-[9.5px] uppercase tracking-[0.12em] text-muted-foreground">
            {hovering ? "Reading the chart" : "Latest figure"}
          </span>
        </div>
      </div>

      <div
        ref={wrapRef}
        className="relative px-1 pb-1 pt-1 outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
        role="img"
        aria-label="Line chart of Notion's annual recurring revenue: $3M in 2019, $13M in 2020, $31M in 2021, an estimated $240M in 2023, a company-stated $500M in September 2025, an estimated $610M by the end of 2025 and an estimated $865M by July 2026. Notion AI launched in February 2023."
        onKeyDown={onKeyDown}
        onBlur={() => setActive(null)}
        onPointerMove={(e) => setActive(nearest(e.clientX))}
        onPointerLeave={() => setActive(null)}
      >
        {width > 0 && (
          <svg width={width} height={height} className="block">
            <defs>
              <linearGradient id="notion-rev-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--signal))" stopOpacity="0.22" />
                <stop offset="100%" stopColor="hsl(var(--signal))" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* The AI era as a region rather than a single rule — the claim is
                about everything after February 2023, not about that month. */}
            <rect
              x={sx(AI_LAUNCH)}
              y={PAD.top - 8}
              width={Math.max(PAD.left + plotW - sx(AI_LAUNCH), 0)}
              height={plotH + 8}
              fill="hsl(var(--foreground))"
              opacity={0.035}
            />
            <line
              x1={sx(AI_LAUNCH)}
              x2={sx(AI_LAUNCH)}
              y1={PAD.top - 8}
              y2={PAD.top + plotH}
              stroke="hsl(var(--foreground))"
              strokeWidth={1}
              strokeDasharray="2 3"
              opacity={0.3}
            />
            <text
              x={sx(AI_LAUNCH) + 7}
              y={PAD.top - 14}
              className="label-mono fill-muted-foreground text-[9.5px] uppercase tracking-[0.1em]"
            >
              {dense ? "After AI" : "After Notion AI"}
            </text>

            {Y_TICKS.map((t) => (
              <g key={t}>
                <line
                  x1={PAD.left}
                  x2={PAD.left + plotW}
                  y1={sy(t)}
                  y2={sy(t)}
                  stroke="hsl(var(--border))"
                  strokeWidth={1}
                />
                <text
                  x={PAD.left - 9}
                  y={sy(t)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="fill-muted-foreground text-[10.5px] tabular-nums"
                >
                  {t === 0 ? "$0" : `${t}M`}
                </text>
              </g>
            ))}

            {YEARS.map((y) => (
              <text
                key={y}
                x={sx(y)}
                y={PAD.top + plotH + 17}
                textAnchor="middle"
                className="fill-muted-foreground text-[10.5px] tabular-nums"
              >
                {y}
              </text>
            ))}

            <path d={areaPath} fill="url(#notion-rev-fill)" />
            <path
              d={linePath}
              fill="none"
              stroke="hsl(var(--signal))"
              strokeWidth={2.25}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Crosshair, snapped to the nearest point rather than the pointer. */}
            {hovering && (
              <line
                x1={hot.cx}
                x2={hot.cx}
                y1={PAD.top - 8}
                y2={PAD.top + plotH}
                stroke="hsl(var(--foreground))"
                strokeWidth={1}
                opacity={0.3}
              />
            )}

            {pts.map((p, i) => {
              const hollow = p.kind === "estimate";
              const on = shown === i;
              const last = i === LATEST;
              return (
                <g key={p.when}>
                  {(on || last) && (
                    <circle
                      cx={p.cx}
                      cy={p.cy}
                      r={on ? 11 : 8}
                      fill="hsl(var(--signal))"
                      opacity={on ? 0.18 : 0.12}
                    />
                  )}
                  <circle
                    cx={p.cx}
                    cy={p.cy}
                    r={on ? 5.5 : 4}
                    fill={hollow ? "hsl(var(--card))" : "hsl(var(--signal))"}
                    stroke={hollow ? "hsl(var(--signal))" : "hsl(var(--card))"}
                    strokeWidth={2}
                    className="transition-all duration-150"
                  />
                </g>
              );
            })}

            {/* Two direct labels only: where it started and where it ends.
                Everything between them is in the header on hover. */}
            {pts.map((p, i) => {
              if (!p.label || i === 4) return null;
              const first = i === 0;
              return (
                <text
                  key={`l-${p.when}`}
                  x={first ? p.cx + 10 : p.cx - 2}
                  y={first ? p.cy - 9 : p.cy - 16}
                  textAnchor={first ? "start" : "end"}
                  className="fill-foreground text-[12px] font-medium tabular-nums"
                >
                  {p.label}
                </text>
              );
            })}
          </svg>
        )}
      </div>

      {/* Legend as marks, not as a sentence. */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border px-5 py-3 text-[11.5px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-[9px] w-[9px] rounded-full bg-signal ring-2 ring-card"
          />
          Reported
        </span>
        <span className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-[9px] w-[9px] rounded-full border-2 border-signal bg-card"
          />
          Analyst estimate
        </span>
        <span className="ml-auto hidden sm:inline">Hover the chart, or focus it and use ← →</span>
      </div>
    </figure>
  );
}
