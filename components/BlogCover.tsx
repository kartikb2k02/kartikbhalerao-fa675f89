import type { BlogPost } from "@/data/blogPosts";
import { CATEGORY_LABELS } from "@/components/BlogCard";

/**
 * Covers drawn rather than photographed.
 *
 * The supplied banner images could not stay: all thirteen are the same orange
 * gradient, so no two posts were distinguishable; each one has its own title
 * baked into the artwork, which the card then printed again underneath; and
 * the orange belongs to the palette the site has moved off.
 *
 * This draws a halftone field instead, the same motif the rest of the system
 * uses, seeded from the slug so every post gets a field no other post has.
 * Nothing is fetched and nothing is stored.
 */

/** FNV-1a. Small, stable, and the same on server and client — which matters,
 *  because a hydration mismatch here would redraw every cover on load. */
function hash(str: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Deterministic [0,1) stream from a seed. */
function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 0xffffffff;
  };
}

const COLS = 26;
const ROWS = 15;

export function BlogCover({ post, index }: { post: BlogPost; index: number }) {
  const category = CATEGORY_LABELS[post.category] ?? post.category;
  const seed = hash(post.slug);
  const next = rng(seed);

  // One focal point per post. The dots swell towards it and thin out away
  // from it, so the field reads as lit rather than random.
  const fx = 0.2 + next() * 0.6;
  const fy = 0.2 + next() * 0.6;
  const tilt = next() * 0.9 + 0.3;

  const dots: { cx: number; cy: number; r: number; accent: boolean }[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const x = (col + 0.5) / COLS;
      const y = (row + 0.5) / ROWS;
      const d = Math.hypot((x - fx) * tilt, y - fy);
      const fall = Math.max(0, 1 - d * 1.75);
      const r = 1.1 + fall * fall * 7.2;
      if (r < 1.3) continue;
      dots.push({
        cx: x * 100,
        cy: y * 100,
        r,
        // A scatter of accent dots, denser near the focal point.
        accent: next() < fall * 0.22,
      });
    }
  }

  return (
    <div className="relative w-full h-full bg-foreground overflow-hidden">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {dots.map((d, i) => (
          <circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r={d.r / 8}
            fill={
              d.accent ? "hsl(var(--primary))" : "hsl(var(--background) / 0.55)"
            }
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex items-start justify-between p-5">
        <span className="kicker">{category}</span>
        <span className="dateline text-[hsl(var(--background)/0.5)]">
          {post.readTime.replace(" read", "")}
        </span>
      </div>

      <span
        className="nameplate absolute bottom-3 right-5 text-[64px] sm:text-[78px] leading-none text-[hsl(var(--background)/0.22)]"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
