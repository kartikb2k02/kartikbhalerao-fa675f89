/** One outfit. Each hop puts him in a different one. */
export interface WalkerPalette {
  head: string;
  torso: string;
  limb: string;
}

/**
 * Five outfits, cycled as he moves between sections.
 *
 * Kept vivid rather than tinted, because he is 34px tall against body
 * text; anything subtle at that size just reads as grey. Lightness is
 * mid-range so the same values hold up on paper and on the dark ground
 * without a second palette.
 */
export const WALKER_PALETTES: WalkerPalette[] = [
  { head: "hsl(14 85% 58%)", torso: "hsl(200 80% 52%)", limb: "hsl(42 90% 55%)" },
  { head: "hsl(266 70% 62%)", torso: "hsl(160 65% 45%)", limb: "hsl(330 80% 62%)" },
  { head: "hsl(42 90% 55%)", torso: "hsl(266 70% 62%)", limb: "hsl(200 80% 52%)" },
  { head: "hsl(330 80% 62%)", torso: "hsl(42 90% 55%)", limb: "hsl(160 65% 45%)" },
  { head: "hsl(200 80% 52%)", torso: "hsl(14 85% 58%)", limb: "hsl(266 70% 62%)" },
];

/**
 * The character.
 *
 * Built from filled capsules rather than strokes so it reads as a
 * figure at 34px instead of a diagram. Each limb sits in its own group
 * rotated about its joint.
 *
 * Back limbs are drawn first and dimmed so the figure has depth rather
 * than looking like four legs in a line.
 */
export function WalkerFigure({
  size = 34,
  palette,
}: {
  size?: number;
  palette: WalkerPalette;
}) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 30 42"
      aria-hidden="true"
    >
      <g opacity="0.5" fill={palette.limb}>
        <g className="walker-arm-b" style={{ transformOrigin: "15px 14px" }}>
          <rect x="13.4" y="13" width="3.2" height="10" rx="1.6" />
        </g>
        <g className="walker-leg-b" style={{ transformOrigin: "15px 24px" }}>
          <rect x="13.2" y="23" width="3.6" height="17" rx="1.8" />
        </g>
      </g>

      <circle cx="15" cy="6" r="4.6" fill={palette.head} />
      <rect x="11.4" y="11.2" width="7.2" height="13.6" rx="3.6" fill={palette.torso} />

      <g fill={palette.limb}>
        <g className="walker-arm-a" style={{ transformOrigin: "15px 14px" }}>
          <rect x="13.4" y="13" width="3.2" height="10" rx="1.6" />
        </g>
        <g className="walker-leg-a" style={{ transformOrigin: "15px 24px" }}>
          <rect x="13.2" y="23" width="3.6" height="17" rx="1.8" />
        </g>
      </g>
    </svg>
  );
}
