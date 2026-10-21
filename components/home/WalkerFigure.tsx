/** One coat/collar combination. Each hop puts the dog in a different one. */
export interface DogPalette {
  fur: string;
  muzzle: string;
  collar: string;
  leg: string;
}

export const DOG_PALETTES: DogPalette[] = [
  { fur: "hsl(27 75% 48%)", muzzle: "hsl(34 78% 70%)", collar: "hsl(347 74% 54%)", leg: "hsl(27 68% 40%)" },
  { fur: "hsl(210 65% 48%)", muzzle: "hsl(204 72% 76%)", collar: "hsl(42 90% 52%)", leg: "hsl(210 58% 38%)" },
  { fur: "hsl(43 82% 52%)", muzzle: "hsl(42 95% 77%)", collar: "hsl(160 62% 38%)", leg: "hsl(36 76% 40%)" },
  { fur: "hsl(13 67% 54%)", muzzle: "hsl(20 80% 76%)", collar: "hsl(260 60% 56%)", leg: "hsl(13 58% 43%)" },
  { fur: "hsl(155 48% 43%)", muzzle: "hsl(153 55% 72%)", collar: "hsl(330 74% 56%)", leg: "hsl(155 44% 34%)" },
];

/**
 * A tiny side-view dog. It is deliberately drawn inline so it stays
 * crisp at any DPR and never needs a separate asset request.
 */
export function DogFigure({
  size = 58,
  palette,
}: {
  size?: number;
  palette: DogPalette;
}) {
  return (
    <svg
      width={size}
      height={size * 0.86}
      viewBox="0 0 56 48"
      aria-hidden="true"
    >
      <g className="dog-tail" fill="none" stroke={palette.fur} strokeLinecap="round" strokeWidth="4">
        <path d="M17 25C9 24 8 15 14 11" />
      </g>

      <g fill={palette.leg} opacity="0.62">
        <g className="dog-leg-b" style={{ transformOrigin: "22px 33px" }}>
          <rect x="20" y="30" width="4" height="14" rx="2" />
        </g>
        <g className="dog-leg-b" style={{ transformOrigin: "34px 33px" }}>
          <rect x="32" y="30" width="4" height="14" rx="2" />
        </g>
      </g>

      <rect x="14" y="18" width="25" height="17" rx="8.5" fill={palette.fur} />
      <rect x="34" y="20" width="3" height="12" rx="1.5" fill={palette.collar} />

      <g className="dog-head">
        <path d="M37 14L39 4L45 11Z" fill={palette.fur} />
        <path d="M43 15C42 10 46 8 50 12L53 18C54 20 52 22 49 22H40C37 22 36 19 37 16Z" fill={palette.fur} />
        <path d="M47 17C50 17 53 18 53 20C53 22 50 23 47 22Z" fill={palette.muzzle} />
        <circle cx="45.5" cy="14.5" r="1.35" fill="hsl(222 35% 15%)" />
        <circle cx="52" cy="19.5" r="1.2" fill="hsl(222 35% 15%)" />
      </g>

      <g fill={palette.leg}>
        <g className="dog-leg-a" style={{ transformOrigin: "22px 33px" }}>
          <rect x="20" y="30" width="4" height="14" rx="2" />
        </g>
        <g className="dog-leg-a" style={{ transformOrigin: "34px 33px" }}>
          <rect x="32" y="30" width="4" height="14" rx="2" />
        </g>
      </g>
    </svg>
  );
}
