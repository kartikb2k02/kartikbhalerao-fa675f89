import type React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { desk, shortNames, liveProducts } from "@/data/buildMeta";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";
import { TenzoCardBanner } from "@/components/TenzoCardBanner";

const customBanners: Record<string, React.ComponentType> = {
  "chatly-prd": ChatlyCardBanner,
  "pm-copilot": PMCopilotCardBanner,
  "tenzo-product-discovery": TenzoCardBanner,
  figprd: FigPRDCardBanner,
};

/**
 * Cover art, in order of preference: the hand-made banner four builds ship,
 * then the case study's own image, then a typographic plate for anything with
 * neither. Every build currently has one of the first two.
 */
function Cover({
  id,
  index,
  image,
  title,
}: {
  id: string;
  index: number;
  image: string;
  title: string;
}) {
  const Custom = customBanners[id];
  if (Custom) return <Custom />;

  if (image) {
    return (
      // Plain <img>: the site is a static export with `images.unoptimized`
      // set, so next/image would add a wrapper and no optimisation.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    );
  }

  return (
    <div className="w-full h-full bg-muted flex flex-col justify-between p-5">
      <span className="kicker">{desk[id]}</span>
      <span
        className="nameplate text-[76px] self-end leading-none text-[hsl(var(--foreground)/0.12)]"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

/**
 * One build, as a hard-edged card: flat fill, 2px rule, solid offset shadow
 * that snaps up and turns signal-red on hover.
 */
export function BuildCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const isLive = liveProducts.has(study.id);
  const href = isLive ? study.externalLink : `/builds/${study.id}`;
  const name = shortNames[study.id] ?? study.title;

  const inner = (
    <>
      <div className="relative aspect-[18/10] overflow-hidden border-b-2 border-foreground">
        <Cover
          id={study.id}
          index={index}
          image={study.image}
          title={study.title}
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="kicker">{desk[study.id]}</span>
          {isLive && <span className="kicker kicker-muted">· Live</span>}
        </div>

        <h3 className="headline text-foreground text-[23px] sm:text-[26px] mb-2 transition-colors duration-200 group-hover:text-primary">
          {name}
        </h3>

        <p className="text-[14px] leading-[1.5] text-foreground/70 mb-4">
          {study.subtitle}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="dateline truncate">
            {study.tags.slice(0, 2).join(" · ")}
          </span>
          <ArrowUpRight className="w-4 h-4 shrink-0 text-foreground/40 transition-colors duration-200 group-hover:text-primary" />
        </div>
      </div>
    </>
  );

  const className = "hard-card group flex flex-col overflow-hidden h-full";

  return isLive ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
