"use client";

import React from "react";
import { grad, Kicker, Note, Pill } from "./Chrome";
import { useInView } from "./motion";

/**
 * The nine drawings in the monetization teardown.
 *
 * They arrived as flat PNGs on a white ground. They are rebuilt as
 * markup and SVG because a white plate punches a hole in the page in
 * dark mode, because a diagram that is text can be read aloud and
 * selected, and because the type in them should be the page's type.
 *
 * Every label, number and caption is carried over from the source
 * figures unchanged. Only the drawing is new: rounded shapes, the
 * section's gradient on whichever node the figure is an argument about,
 * a flat tint on the rest, neutral grey for the connective tissue, and
 * pink kept for the one pencil annotation each drawing carries.
 */

/** An SVG gradient matching the section's `--g1`/`--g2`. Each diagram
 *  declares its own under its own id: a cross-SVG `url(#id)` reference
 *  resolves silently to nothing if the other diagram is ever removed. */
function GradDef({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" style={{ stopColor: "rgb(var(--g1))" }} />
        <stop offset="100%" style={{ stopColor: "rgb(var(--g2))" }} />
      </linearGradient>
    </defs>
  );
}

/* ── 01 · the equation ──────────────────────────────────────────────── */

const EQUATION = [
  ["pick the", "right model"],
  ["build the", "growth loop"],
  ["watch one", "metric"],
] as const;

export function GrowthEquation() {
  return (
    <div>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row">
        {EQUATION.map(([a, b], i) => (
          <React.Fragment key={a}>
            {i > 0 && (
              <span
                aria-hidden="true"
                className="self-center text-[17px] font-light text-muted-foreground"
              >
                +
              </span>
            )}
            <div className="flex-1 rounded-xl border border-border bg-background px-4 py-6 text-center">
              <span className="text-[11px] font-semibold tabular-nums text-[rgb(var(--g1))]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2.5 text-[15px] leading-[1.35] text-foreground">
                {a}
                <br />
                {b}
              </p>
            </div>
          </React.Fragment>
        ))}

        <span
          aria-hidden="true"
          className="self-center text-[17px] font-light text-muted-foreground"
        >
          =
        </span>

        {/* The only solid tile in the figure, because it is the only one
            that is a result rather than an input. */}
        <div className="mz-grad mz-lift flex-1 rounded-xl px-4 py-6 text-center">
          <span className="mz-kicker mz-on-grad-dim">Result</span>
          <p className="mz-display mz-on-grad mt-2.5 text-[19px]">
            growth
            <br />
            engine
          </p>
        </div>
      </div>

      <Note className="mt-3 block">
        <span aria-hidden="true">↑ </span>most founders stop at this one
      </Note>
    </div>
  );
}

/* ── 02 · the lever map ─────────────────────────────────────────────── */

type Mark = "main" | "also" | null;

const LEVERS: { name: string; hue: number; cells: [Mark, Mark, Mark] }[] = [
  { name: "1. Pay for what you use", hue: 0, cells: ["also", "main", null] },
  {
    name: "2. Free for one, paid for the team",
    hue: 1,
    cells: ["main", "also", null],
  },
  { name: "3. Take a cut of the ecosystem", hue: 2, cells: ["main", null, "also"] },
  { name: "4. Get paid when money moves", hue: 3, cells: [null, "main", "also"] },
  { name: "5. Charge for the result", hue: 4, cells: ["also", "main", null] },
];

function Dot({ mark }: { mark: Mark }) {
  if (!mark) return null;
  return mark === "main" ? (
    <span className="block h-[13px] w-[13px] rounded-full bg-[rgb(var(--g1))]" />
  ) : (
    <span className="block h-[13px] w-[13px] rounded-full border border-dashed border-[rgb(var(--g1))]" />
  );
}

export function LeverMap() {
  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="flex items-center gap-2 text-[12px] text-muted-foreground">
          <span className="h-[11px] w-[11px] rounded-full bg-foreground/70" /> main lever
        </span>
        <span className="flex items-center gap-2 text-[12px] text-muted-foreground">
          <span className="h-[11px] w-[11px] rounded-full border border-dashed border-foreground/70" />{" "}
          also helps
        </span>
        <Note className="ml-auto">
          the magic column <span aria-hidden="true">↓</span>
        </Note>
      </div>

      <div className="grid grid-cols-[minmax(200px,1fr)_repeat(3,86px)]">
        <span />
        {["Acquire", "Expand", "Retain"].map((h) => (
          <Kicker
            key={h}
            className={`pb-3 pt-3 text-center ${
              h === "Expand"
                ? "rounded-t-xl bg-[rgb(var(--amber)_/_0.1)] text-foreground"
                : "text-muted-foreground"
            }`}
          >
            {h}
          </Kicker>
        ))}

        {LEVERS.map((row, r) => (
          <React.Fragment key={row.name}>
            <div
              style={grad(row.hue)}
              className="flex items-center border-t border-border py-3 pr-5"
            >
              <span className="mr-3 h-[22px] w-[2px] shrink-0 bg-[rgb(var(--g1))]" />
              <span className="text-[13.5px] leading-tight text-foreground">{row.name}</span>
            </div>
            {row.cells.map((mark, i) => (
              <div
                key={i}
                style={grad(row.hue)}
                className={`flex items-center justify-center border-t border-border py-3 ${
                  i === 1 ? "bg-[rgb(var(--amber)_/_0.1)]" : ""
                } ${i === 1 && r === LEVERS.length - 1 ? "rounded-b-xl" : ""}`}
              >
                <Dot mark={mark} />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── 03 · the usage staircase ───────────────────────────────────────── */

const STAIRS = [
  ["Land", "small first bill", 20],
  ["Adopt", "usage keeps rising", 42],
  ["Spread", "other teams join", 61],
  ["Expand", "new use cases", 79],
  ["Anchor account", "$10M+ a year", 100],
] as const;

export function UsageStaircase() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Note className="mb-3 block pr-1 text-right">
        64 of these at Snowflake <span aria-hidden="true">→</span>
      </Note>

      <div className="flex h-[250px] items-end gap-3 border-b border-foreground/25">
        {STAIRS.map(([name, sub, pct], i) => (
          <div key={name} className="flex h-full flex-1 flex-col justify-end">
            <p className="text-[13px] font-semibold leading-tight tracking-[-0.01em] text-foreground">
              {name}
            </p>
            <p className="mb-2 text-[11.5px] leading-tight text-muted-foreground">{sub}</p>
            {/* An alpha ramp of one hue rather than five tints, because
                these are five readings of the same measure. The last
                step takes the full gradient: it is the one the figure
                is pointing at. */}
            <div
              className={`mz-grow rounded-t-xl ${
                i === STAIRS.length - 1 ? "mz-grad mz-lift" : ""
              }`}
              style={{
                height: inView ? `${pct}%` : 0,
                transitionDelay: `${i * 90}ms`,
                ...(i === STAIRS.length - 1
                  ? null
                  : { background: `rgb(var(--g1) / ${(0.12 + i * 0.15).toFixed(2)})` }),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 04 · 06 · 10 · the drop funnels ────────────────────────────────── */

/**
 * Three of the source figures are the same drawing with different rows,
 * so they are one component. The bar floor is 5px: Snowflake's top tier
 * is 0.46% of the base and would otherwise render as nothing, which
 * reads as missing data rather than as a very small number.
 */
export function DropFunnel({
  rows,
  steps,
  note,
}: {
  rows: { label: string; value: string; pct: number }[];
  steps: string[];
  note?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div ref={ref}>
      {rows.map((row, i) => (
        <React.Fragment key={row.label}>
          {i > 0 && (
            <div className="grid grid-cols-[minmax(140px,0.8fr)_2fr] gap-x-5 py-2.5">
              <span />
              <span className="text-[12px] text-muted-foreground">
                <span aria-hidden="true">↓ </span>
                {steps[i - 1]}
              </span>
            </div>
          )}

          <div className="grid grid-cols-[minmax(140px,0.8fr)_2fr] items-center gap-x-5">
            <div className="text-right">
              <p className="text-[13.5px] font-semibold leading-tight text-foreground">
                {row.label}
              </p>
              <p className="mt-1 text-[16px] tabular-nums text-muted-foreground">
                {row.value}
              </p>
            </div>
            <div className="flex items-center">
              {/* The first row is the whole population, so it takes the
                  gradient; the tiers under it are the same hue, lighter. */}
              <div
                className={`mz-run h-[42px] rounded-lg ${
                  i === 0
                    ? "mz-grad mz-lift"
                    : "border border-[rgb(var(--g1)_/_0.5)] bg-[rgb(var(--g1)_/_0.28)]"
                }`}
                style={{
                  width: inView ? `max(5px, ${row.pct}%)` : 0,
                  transitionDelay: `${i * 160}ms`,
                }}
              />
              {i === rows.length - 1 && note && (
                <Note className="ml-3 shrink-0">
                  <span aria-hidden="true">← </span>
                  {note}
                </Note>
              )}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ── 05 · the freemium tree ─────────────────────────────────────────── */

const LEAVES = [300, 342, 384, 438, 480, 522, 576, 618, 660];
const BRANCHES = [362, 480, 598];

export function FreemiumTree() {
  return (
    <svg
      viewBox="0 0 700 392"
      role="img"
      aria-label="One free signup branches into three teammates, then nine, and the company pays for seats. When those users switch jobs the loop restarts."
      className="h-auto w-full"
    >
      <GradDef id="mz-grad-tree" />

      <text x="0" y="66" className="fill-foreground" fontSize="14" fontWeight="600">
        1 user signs up free
      </text>
      <text x="0" y="182" className="fill-foreground" fontSize="14" fontWeight="600">
        Invites teammates
      </text>
      <text x="0" y="288" className="fill-foreground" fontSize="14" fontWeight="600">
        Whole team adopts it
      </text>
      <text x="0" y="309" className="fill-[rgb(var(--m5a))]" fontSize="13">
        nobody from sales involved yet!
      </text>

      {/* Edges first, so every node paints over its own lines. */}
      <g className="stroke-foreground/25" strokeWidth="1" fill="none">
        {BRANCHES.map((x) => (
          <path key={x} d={`M480 62 L${x} 176`} />
        ))}
        {BRANCHES.map((bx, bi) =>
          LEAVES.slice(bi * 3, bi * 3 + 3).map((lx) => (
            <path key={`${bx}-${lx}`} d={`M${bx} 176 L${lx} 282`} />
          ))
        )}
        {LEAVES.map((x) => (
          <path key={`s-${x}`} d={`M${x} 282 L${x} 334`} />
        ))}
      </g>

      {/* The return edge is dashed because it is the only one that is a
          claim about the future rather than a step in the diagram. */}
      <g className="stroke-foreground/40" strokeWidth="1" fill="none" strokeDasharray="4 4">
        <path d="M676 354 L694 354 L694 56 L506 56" />
      </g>
      <path d="M506 56 l8 -4 v8 z" className="fill-foreground/40" />
      <text x="694" y="30" textAnchor="end" className="fill-foreground/60" fontSize="12.5">
        users switch jobs, loop restarts
      </text>

      {/* Nodes lighten as the team fans out: one hue, three depths. */}
      {LEAVES.map((x) => (
        <circle
          key={`l-${x}`}
          cx={x}
          cy={282}
          r={9}
          className="fill-[rgb(var(--g1)_/_0.2)] stroke-[rgb(var(--g1))]"
          strokeWidth="1"
        />
      ))}
      {BRANCHES.map((x) => (
        <circle
          key={`b-${x}`}
          cx={x}
          cy={176}
          r={12}
          className="fill-[rgb(var(--g1)_/_0.5)] stroke-[rgb(var(--g1))]"
          strokeWidth="1.25"
        />
      ))}
      <circle cx={480} cy={62} r={16} fill="url(#mz-grad-tree)" />

      <rect
        x="292"
        y="334"
        width="384"
        height="42"
        rx="12"
        className="fill-[rgb(var(--g1)_/_0.14)] stroke-[rgb(var(--g1)_/_0.5)]"
        strokeWidth="1.25"
      />
      <text
        x="484"
        y="361"
        textAnchor="middle"
        className="fill-foreground"
        fontSize="14.5"
        fontWeight="600"
      >
        Company pays for seats
      </text>
    </svg>
  );
}

/* ── 07 · the ecosystem hub ─────────────────────────────────────────── */

const SATELLITES = [
  { x: 350, y: 96, lines: ["template", "makers"], dots: [[350, 22], [374, 26], [326, 26]] },
  { x: 120, y: 190, lines: ["course", "creators"], dots: [[46, 170], [40, 194], [50, 218]] },
  { x: 580, y: 190, lines: ["app", "developers"], dots: [[654, 170], [660, 194], [650, 218]] },
  { x: 168, y: 408, lines: ["consultants"], dots: [[100, 428], [108, 450], [126, 464]] },
  { x: 532, y: 408, lines: ["plugin", "builders"], dots: [[600, 428], [592, 450], [574, 464]] },
] as const;

/** Trims a spoke to the two circle edges, so a line stops at a node
 *  instead of disappearing under it. */
function spoke(x: number, y: number, rFrom = 76, rTo = 52) {
  const dx = x - 350;
  const dy = y - 250;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  return `M${(350 + ux * rFrom).toFixed(1)} ${(250 + uy * rFrom).toFixed(1)} L${(
    x -
    ux * rTo
  ).toFixed(1)} ${(y - uy * rTo).toFixed(1)}`;
}

export function EcosystemHub() {
  return (
    <svg
      viewBox="0 0 700 512"
      role="img"
      aria-label="Your platform at the centre, taking 10% to 30%, with template makers, course creators, app developers, consultants and plugin builders around it. Each creator brings their own audience."
      className="h-auto w-full"
    >
      <GradDef id="mz-grad-hub" />

      <g className="stroke-foreground/25" strokeWidth="1" fill="none">
        {SATELLITES.map((s) => (
          <path key={`${s.x}-${s.y}`} d={spoke(s.x, s.y)} />
        ))}
      </g>

      {SATELLITES.map((s) => (
        <g key={`n-${s.x}-${s.y}`}>
          {s.dots.map(([dx, dy]) => (
            <circle key={`${dx}-${dy}`} cx={dx} cy={dy} r="5.5" className="fill-foreground/25" />
          ))}
          <circle
            cx={s.x}
            cy={s.y}
            r="52"
            className="fill-[rgb(var(--g1)_/_0.07)] stroke-[rgb(var(--g1)_/_0.45)]"
            strokeWidth="1.25"
          />
          {s.lines.map((line, i) => (
            <text
              key={line}
              x={s.x}
              y={s.y + (s.lines.length === 1 ? 5 : i * 17 - 3)}
              textAnchor="middle"
              className="fill-foreground"
              fontSize="13.5"
            >
              {line}
            </text>
          ))}
        </g>
      ))}

      {/* The hub is the only filled node, because the whole figure is an
          argument about who sits in the middle. */}
      <circle cx="350" cy="250" r="76" fill="url(#mz-grad-hub)" />
      <text
        x="350"
        y="243"
        textAnchor="middle"
        className="mz-fill-on-grad"
        fontSize="15.5"
        fontWeight="600"
      >
        your platform
      </text>
      <text x="350" y="268" textAnchor="middle" className="mz-fill-on-grad-dim" fontSize="12.5">
        takes 10% to 30%
      </text>

      <text
        x="350"
        y="500"
        textAnchor="middle"
        className="fill-[rgb(var(--m5a))]"
        fontSize="12.5"
      >
        grey dots = each creator&rsquo;s own audience
      </text>
    </svg>
  );
}

/* ── 08 · 09 · shared flow parts ────────────────────────────────────── */

/** The arrowhead the two flow diagrams share. Each renders its own copy
 *  under its own id, so removing one cannot strip the other's arrows —
 *  a cross-SVG `url(#id)` reference resolves silently to nothing. */
function ArrowHead({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0 0 L10 5 L0 10 z" className="fill-foreground/40" />
      </marker>
    </defs>
  );
}

/** Shared node box for the two flow diagrams. */
function FlowBox({
  x,
  y,
  w,
  h,
  lines,
  tone = "accent",
  gradId = "",
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  lines: { text: string; bold?: boolean; dim?: boolean }[];
  tone?: "accent" | "solid" | "muted";
  gradId?: string;
}) {
  const shape =
    tone === "muted"
      ? "fill-background stroke-border"
      : "fill-[rgb(var(--g1)_/_0.12)] stroke-[rgb(var(--g1)_/_0.45)]";
  const top = y + h / 2 - ((lines.length - 1) * 19) / 2 + 5;

  /* Ink on a gradient flips with the theme — the gradients run deep in
     light mode and light in dark mode, so white would fail in one of
     the two. Everywhere else the normal foreground applies. */
  const ink = (dim?: boolean) =>
    tone === "solid"
      ? dim
        ? "mz-fill-on-grad-dim"
        : "mz-fill-on-grad"
      : dim
        ? "fill-foreground/60"
        : "fill-foreground";

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="12"
        fill={tone === "solid" ? `url(#${gradId})` : undefined}
        className={tone === "solid" ? undefined : shape}
        strokeWidth="1.25"
      />
      {lines.map((line, i) => (
        <text
          key={line.text}
          x={x + w / 2}
          y={top + i * 19}
          textAnchor="middle"
          className={ink(line.dim)}
          fontSize={line.dim ? 12 : 13.5}
          fontWeight={line.bold ? 600 : 400}
        >
          {line.text}
        </text>
      ))}
    </g>
  );
}

/* ── 08 · the payments flow ─────────────────────────────────────────── */

export function PaymentsFlow() {
  return (
    <svg
      viewBox="0 0 790 330"
      role="img"
      aria-label="A buyer pays, the money passes through your platform to the merchant, and you keep a small fee. The payment data then unlocks instant payouts, working-capital loans, and cards and banking, which helps the merchant grow faster."
      className="h-auto w-full"
    >
      <ArrowHead id="mz-arrow-pay" />
      <GradDef id="mz-grad-pay" />

      <g
        className="stroke-foreground/35"
        strokeWidth="1.25"
        fill="none"
        markerEnd="url(#mz-arrow-pay)"
      >
        <path d="M210 44 L284 44" />
        <path d="M488 44 L562 44" />
        <path d="M388 70 L388 120" />
        <path d="M388 176 L388 210" />
        <path d="M110 218 L110 244" />
        <path d="M388 218 L388 244" />
        <path d="M666 218 L666 244" />
      </g>
      <path d="M110 214 L666 214" className="stroke-foreground/35" strokeWidth="1.25" fill="none" />

      <path
        d="M766 270 L782 270 L782 44 L772 44"
        className="stroke-foreground/35"
        strokeWidth="1.25"
        fill="none"
        strokeDasharray="4 4"
        markerEnd="url(#mz-arrow-pay)"
      />
      <text x="760" y="110" textAnchor="end" className="fill-foreground/60" fontSize="12.5">
        merchant grows faster
      </text>

      <FlowBox x={10} y={18} w={200} h={52} lines={[{ text: "buyer pays" }]} tone="muted" />
      <FlowBox
        x={288}
        y={18}
        w={200}
        h={52}
        lines={[{ text: "your platform", bold: true }]}
        tone="solid"
        gradId="mz-grad-pay"
      />
      <FlowBox x={566} y={18} w={200} h={52} lines={[{ text: "merchant gets paid" }]} tone="muted" />

      <FlowBox
        x={288}
        y={120}
        w={200}
        h={52}
        lines={[{ text: "you keep a small fee", bold: true }]}
      />
      <text x={510} y={140} className="fill-[rgb(var(--m5a))]" fontSize="12.5">
        Toast keeps ~1% of payment
      </text>
      <text x={510} y={158} className="fill-[rgb(var(--m5a))]" fontSize="12.5">
        volume as gross profit
      </text>

      <text x={398} y={206} className="fill-foreground/60" fontSize="12.5">
        payment data unlocks...
      </text>

      <FlowBox x={10} y={244} w={200} h={52} lines={[{ text: "instant payouts" }]} />
      <FlowBox x={288} y={244} w={200} h={52} lines={[{ text: "working-capital loans" }]} />
      <FlowBox x={566} y={244} w={200} h={52} lines={[{ text: "cards and banking" }]} />
    </svg>
  );
}

/* ── 09 · the outcome gate ──────────────────────────────────────────── */

export function OutcomeGate() {
  return (
    <div>
      <svg
        viewBox="0 0 790 250"
        role="img"
        aria-label="A customer asks, the AI agent tries, and the question is whether it was fixed. Yes bills $0.99, Intercom Fin's price, versus about $10 to $15 for a human. No hands it to a human and you charge nothing."
        className="h-auto w-full"
      >
        <ArrowHead id="mz-arrow-gate" />
        <GradDef id="mz-grad-gate" />

        <g
          className="stroke-foreground/35"
          strokeWidth="1.25"
          fill="none"
          markerEnd="url(#mz-arrow-gate)"
        >
          <path d="M172 60 L196 60" />
          <path d="M366 60 L390 60" />
          <path d="M550 60 L592 60" />
          <path d="M470 106 L470 164" />
        </g>

        <FlowBox x={6} y={34} w={166} h={52} lines={[{ text: "customer asks" }]} tone="muted" />
        <FlowBox x={200} y={34} w={166} h={52} lines={[{ text: "AI agent tries" }]} />

        <path
          d="M396 60 L470 14 L544 60 L470 106 z"
          className="fill-[rgb(var(--amber)_/_0.14)] stroke-[rgb(var(--amber))]"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
        <text
          x="470"
          y="65"
          textAnchor="middle"
          className="fill-foreground"
          fontSize="14"
          fontWeight="600"
        >
          fixed?
        </text>

        <text x="562" y="48" className="fill-foreground/60" fontSize="12.5">
          yes
        </text>
        <text x="482" y="140" className="fill-foreground/60" fontSize="12.5">
          no
        </text>

        <FlowBox
          x={596}
          y={28}
          w={188}
          h={64}
          lines={[
            { text: "you bill $0.99", bold: true },
            { text: "Intercom Fin's price", dim: true },
          ]}
          tone="solid"
          gradId="mz-grad-gate"
        />
        <text x={596} y={114} className="fill-[rgb(var(--m5a))]" fontSize="12.5">
          vs ~$10 to $15 for a human
        </text>

        <FlowBox
          x={366}
          y={164}
          w={208}
          h={58}
          lines={[{ text: "handed to a human" }, { text: "you charge nothing", dim: true }]}
          tone="muted"
        />
      </svg>

      {/* The two pricing shapes side by side. HTML rather than SVG so the
          pair stacks on a phone instead of scrolling. */}
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-background px-4 py-5 text-center">
          <p className="text-[14px] font-semibold text-foreground/60">seat pricing</p>
          <p className="mt-1 text-[13px] text-muted-foreground">pay every month, works or not</p>
        </div>
        <div className="mz-lift rounded-xl border border-[rgb(var(--g1)_/_0.45)] bg-[rgb(var(--g1)_/_0.1)] px-4 py-5 text-center">
          <p className="text-[14px] font-semibold text-foreground">outcome pricing</p>
          <p className="mt-1 text-[13px] text-foreground/70">
            pay only when it&rsquo;s actually solved
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── 11 · pick your model ───────────────────────────────────────────── */

const QUESTIONS = [
  {
    q: "Does money flow through your product?",
    answer: "4. Get paid when money moves",
    like: "like Shopify, Toast",
    hue: 3,
  },
  {
    q: "Can customers count a clear result?",
    answer: "5. Charge for the result",
    like: "like Intercom Fin",
    hue: 4,
  },
  {
    q: "Do others want to build on you?",
    answer: "3. Take a cut of the ecosystem",
    like: "like Apple, Notion templates",
    hue: 2,
  },
  {
    q: "Does usage vary a lot by customer?",
    answer: "1. Pay for what you use",
    like: "like Snowflake",
    hue: 0,
  },
] as const;

function Outcome({ answer, like, hue }: { answer: string; like: string; hue: number }) {
  return (
    <div
      style={grad(hue)}
      className="mz-lift mz-lift-hover rounded-xl border border-[rgb(var(--g1)_/_0.45)] bg-[rgb(var(--g1)_/_0.1)] px-4 py-3.5"
    >
      <p className="text-[14px] font-semibold leading-tight text-foreground">{answer}</p>
      <p className="mt-1 text-[12.5px] text-foreground/60">{like}</p>
    </div>
  );
}

export function ModelPicker() {
  return (
    <div>
      {QUESTIONS.map(({ q, answer, like, hue }, i) => (
        <React.Fragment key={q}>
          {i > 0 && (
            <p className="py-2 pl-4 text-[12px] text-muted-foreground sm:w-[46%]">
              no <span aria-hidden="true">↓</span>
            </p>
          )}
          <div className="grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
            <div className="rounded-xl border border-border bg-background px-4 py-3.5 text-[14px] leading-tight text-foreground">
              {q}
            </div>
            <span style={grad(i === 0 ? 3 : i === 1 ? 4 : i === 2 ? 2 : 0)}>
              <Pill>
                yes <span aria-hidden="true">→</span>
              </Pill>
            </span>
            <Outcome answer={answer} like={like} hue={hue} />
          </div>
        </React.Fragment>
      ))}

      <p className="py-2 pl-4 text-[12px] text-muted-foreground sm:w-[46%]">
        no <span aria-hidden="true">↓</span>
      </p>

      <div className="grid items-center gap-2 sm:grid-cols-[1fr_auto_1fr] sm:gap-4">
        <Outcome
          answer="2. Free for one, paid for the team"
          like="like Figma, Notion"
          hue={1}
        />
        <span className="hidden sm:block" />
        <Note>then stack them! Notion runs 1, 2 and 3</Note>
      </div>
    </div>
  );
}
