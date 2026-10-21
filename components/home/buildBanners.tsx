import type { ReactNode } from "react";
import { FigPRDCardBanner } from "@/components/FigPRDCardBanner";
import { PMCopilotCardBanner } from "@/components/PMCopilotCardBanner";
import { ChatlyCardBanner } from "@/components/ChatlyCardBanner";
import { TenzoCardBanner } from "@/components/TenzoCardBanner";

/**
 * Builds whose banner is drawn rather than photographed.
 *
 * These four already existed for the detail pages and were the reason
 * `figprd` and `PM Co-Pilot` rendered as empty grey tiles in the grid:
 * their `image` field is blank because the art is a component, not a
 * file. Chatly had a file, but it was a logo rather than a cover.
 *
 * The components were drawn for a full-width detail banner, so each is
 * laid out at that width and scaled down to fit the grid cell. Letting
 * them reflow instead would wrap their labels and break the
 * composition.
 */
export const BUILD_BANNERS: Record<string, ReactNode> = {
  figprd: <FigPRDCardBanner />,
  "pm-copilot": <PMCopilotCardBanner />,
  "chatly-prd": <ChatlyCardBanner />,
  "tenzo-product-discovery": <TenzoCardBanner />,
};

/** The width these banners were composed at. */
export const BANNER_DESIGN_WIDTH = 720;
