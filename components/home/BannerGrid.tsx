import Link from "next/link";
import Image from "next/image";
import { BUILD_BANNERS } from "@/components/home/buildBanners";
import { ScaledBanner } from "@/components/home/ScaledBanner";

export interface Banner {
  id: string;
  /** Not drawn — carries the link's accessible name and the image alt. */
  name: string;
  /** Empty when the build has no artwork yet. */
  image: string;
  href: string;
  external: boolean;
}

/**
 * Builds shown as banners and nothing else.
 *
 * No title and no description on the face, so the artwork does all the
 * talking. The name still reaches a screen reader and a crawler through
 * `aria-label` and `alt` — a link announced as nothing but "link" is
 * unusable, and an untitled one tells a crawler nothing about where it
 * goes.
 *
 * Where a build has no artwork the tile falls back to its name on the
 * muted fill, which looks deliberate; an empty frame looks broken.
 */
export function BannerGrid({
  banners,
  columns = 1,
}: {
  banners: Banner[];
  /** 2 keeps a long list to a sensible page height. */
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`group/list gap-3 ${
        columns === 2 ? "grid sm:grid-cols-2" : "space-y-3"
      }`}
    >
      {banners.map((b) => (
        <li key={b.id}>
          <Link
            href={b.href}
            target={b.external ? "_blank" : undefined}
            rel={b.external ? "noopener noreferrer" : undefined}
            aria-label={b.name}
            className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary opacity-100 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group-hover/list:opacity-40 hover:!opacity-100"

          >
            {BUILD_BANNERS[b.id] ? (
              <ScaledBanner>{BUILD_BANNERS[b.id]}</ScaledBanner>
            ) : b.image ? (
              <Image
                src={b.image}
                alt={b.name}
                fill
                sizes={
                  columns === 2
                    ? "(max-width: 680px) 92vw, 300px"
                    : "(max-width: 680px) 92vw, 608px"
                }
                className="object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="px-4 text-center text-[15px] font-medium text-muted-foreground"
              >
                {b.name}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
