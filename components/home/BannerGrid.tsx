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
  /** Optional video artwork for a homepage banner. */
  video?: string;
  /** Optional Work-grid metadata shown below angled tiles. */
  title?: string;
  description?: string;
  href: string;
  external: boolean;
}

function BannerCard({
  banner,
  columns,
  isWorkVariant,
  showFrame = false,
  hasHoverFade,
  fillFace = false,
  tabIndex,
}: {
  banner: Banner;
  columns: 1 | 2 | 3;
  isWorkVariant: boolean;
  showFrame?: boolean;
  hasHoverFade: boolean;
  fillFace?: boolean;
  tabIndex?: number;
}) {
  const b = banner;

  return (
    <Link
      href={b.href}
      target={b.external ? "_blank" : undefined}
      rel={b.external ? "noopener noreferrer" : undefined}
      aria-label={b.name}
      tabIndex={tabIndex}
      className={`relative flex w-full items-center justify-center overflow-hidden opacity-100 transition-opacity duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        fillFace ? "h-full aspect-auto" : "aspect-[372/225]"
      } ${isWorkVariant ? "work-banner" : "bg-secondary rounded-xl"} ${hasHoverFade ? "group-hover/list:opacity-40 hover:!opacity-100" : ""}`}
    >
      <div className={isWorkVariant ? "work-banner-media" : "relative h-full w-full"}>
        {BUILD_BANNERS[b.id] ? (
          <ScaledBanner>{BUILD_BANNERS[b.id]}</ScaledBanner>
        ) : b.video ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={b.image || undefined}
            aria-label={b.name}
          >
            <source src={b.video} type="video/mp4" />
          </video>
        ) : b.image && b.image.startsWith("http") ? (
          // External reference artwork cannot use next/image without
          // adding a host allow-list to the static export config.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={b.image} alt={b.name} className="h-full w-full object-cover" loading="lazy" />
        ) : b.image ? (
          <Image
            src={b.image}
            alt={b.name}
            fill
            sizes={
              columns === 2
                ? "(max-width: 680px) 92vw, 600px"
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
      </div>
      {isWorkVariant && showFrame && (
        <>
          <svg className="work-banner-top-stripes" viewBox="0 0 229 53" aria-hidden="true">
            <path d="M 0 0 L 52.925 52.974 L 61.747 52.974 L 8.781 0 Z M 20.799 0 L 73.766 52.974 L 82.547 52.974 L 29.58 0 Z M 41.598 0 L 94.564 52.974 L 103.344 52.974 L 50.378 0 Z M 62.398 0 L 115.364 52.974 L 124.144 52.974 L 71.219 0 L 62.397 0 Z M 83.234 0 L 136.2 52.974 L 144.981 52.974 L 92.014 0 Z M 104.032 0 L 156.998 52.974 L 165.779 52.974 L 112.813 0 Z M 124.83 0 L 177.796 52.974 L 186.576 52.974 L 133.651 0 Z M 145.669 0 L 198.594 52.974 L 207.415 52.974 L 154.448 0 Z M 166.47 0 L 219.436 52.974 L 228.216 52.974 L 175.25 0 Z" fill="#404040" />
          </svg>
          <svg className="work-banner-bottom-accent" viewBox="0 0 67 67" aria-hidden="true">
            <path d="m0 0 66.835 66.835H0V0Z" fill="#383838" />
          </svg>
        </>
      )}
      {isWorkVariant && (
        <span className="work-banner-view-button reference-button reference-button-secondary" aria-hidden="true">
          View
        </span>
      )}
    </Link>
  );
}

/**
 * Banner grids are used in three modes: plain artwork-only tiles, the wider
 * Work-grid tiles, and the compact homepage version of the same treatment.
 *
 * Where a build has no artwork the tile falls back to its name on the
 * muted fill, which looks deliberate; an empty frame looks broken.
 */
export function BannerGrid({
  banners,
  columns = 1,
  variant = "default",
}: {
  banners: Banner[];
  /** 3 matches the wide Work-style grid; 2 keeps narrower layouts readable. */
  columns?: 1 | 2 | 3;
  variant?: "default" | "work" | "work-home";
}) {
  const isWorkVariant = variant === "work" || variant === "work-home";
  const hasHoverFade = variant === "default" || variant === "work-home";
  const isFlippable = variant === "work-home";

  return (
    <ul
      className={`group/list ${
        columns === 3
          ? "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16"
          : columns === 2
          ? variant === "work"
            ? "grid gap-6 sm:grid-cols-2 xl:gap-16"
            : "grid gap-3 sm:grid-cols-2"
          : "space-y-3"
      }`}
    >
      {banners.map((b) => (
        <li key={b.id} className={isWorkVariant ? "work-banner-card" : undefined}>
          {isFlippable ? (
            <div
              className={`work-banner-flip ${
                hasHoverFade ? "group-hover/list:opacity-40 hover:!opacity-100" : ""
              }`}
            >
              <div className="work-banner-flip-inner">
                <div className="work-banner-flip-face">
                  <BannerCard
                    banner={b}
                    columns={columns}
                    isWorkVariant={isWorkVariant}
                    showFrame={isWorkVariant}
                    hasHoverFade={false}
                    fillFace
                  />
                </div>
                <div className="work-banner-flip-face work-banner-flip-back" aria-hidden="true">
                  <BannerCard
                    banner={b}
                    columns={columns}
                    isWorkVariant={isWorkVariant}
                    showFrame={isWorkVariant}
                    hasHoverFade={false}
                    fillFace
                    tabIndex={-1}
                  />
                </div>
              </div>
            </div>
          ) : (
            <BannerCard
              banner={b}
              columns={columns}
              isWorkVariant={isWorkVariant}
              showFrame={variant === "work"}
              hasHoverFade={hasHoverFade}
            />
          )}
          {isWorkVariant && (b.title || b.description) && (
            <div className="mt-2.5 flex flex-col gap-2.5">
              {b.title && <h3 className="text-[18px] font-medium leading-tight tracking-[-0.02em] text-foreground">{b.title}</h3>}
              {b.description && <p className="text-[14px] leading-relaxed text-muted-foreground">{b.description}</p>}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
