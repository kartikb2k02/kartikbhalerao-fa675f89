import type { ReactNode } from "react";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";
import { TenzoCardBanner } from "@/components/TenzoCardBanner";

/**
 * Builds whose banner is drawn rather than photographed.
 *
 * These already existed for the detail pages and were the reason
 * `figprd` and `PM Co-Pilot` rendered as empty grey tiles in the grid:
 * their `image` field is blank because the art is a component, not a
 * file.
 *
 * Chatly used to be here too, back when its only file was a logo rather
 * than a cover. It now has a real cover image, so it falls through to the
 * `image` path like any photographed build — `ChatlyCardBanner` is no
 * longer rendered anywhere.
 *
 * The components were drawn for a full-width detail banner, so each is
 * laid out at that width and scaled down to fit the grid cell. Letting
 * them reflow instead would wrap their labels and break the
 * composition.
 */
export const BUILD_BANNERS: Record<string, ReactNode> = {
  figprd: <FigPRDCardBanner />,
  "pm-copilot": <PMCopilotCardBanner />,
  "tenzo-product-discovery": <TenzoCardBanner />,
};

/** The width these banners were composed at. */
export const BANNER_DESIGN_WIDTH = 720;
