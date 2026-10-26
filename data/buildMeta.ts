/**
 * Presentation metadata for the case studies: which desk each one is filed to,
 * what it's called in a grid, and whether the card should point at a live
 * product instead of a write-up.
 *
 * Kept beside the case studies rather than inside them because none of it is
 * part of the work itself — it only exists to lay the grid out.
 */

/** Newspaper desks. A build belongs to exactly one, the way a story is filed
 *  to one section — deriving this from `tags` put the same build under three
 *  filters at once, which made the counts meaningless. */
export const DESKS = ["AI", "Fintech", "Commerce", "Strategy"] as const;
export type Desk = (typeof DESKS)[number];

export const desk: Record<string, Desk> = {
  figprd: "AI",
  "pm-copilot": "AI",
  "neo-health": "Strategy",
  monosend: "Fintech",
  "chatly-prd": "AI",
  "google-pay-analysis": "Fintech",
  "google-pay-prd": "Fintech",
  "gullak-fintech": "Fintech",
  "blinkit-analysis": "Commerce",
  "zepto-efficiency": "Commerce",
  "metis-improvement": "Commerce",
  "cloudeagle-ai": "Commerce",
  "tenzo-product-discovery": "Strategy",
  "codeant-ai": "Strategy",
  "ether-prd": "Strategy",
  "airbnb-ux": "Strategy",
};

/** Short display names — full titles live on the detail page. */
export const shortNames: Record<string, string> = {
  figprd: "figprd",
  "tenzo-product-discovery": "Tenzo",
  "pm-copilot": "PM Co-Pilot",
  "neo-health": "Neo Health",
  monosend: "Monosend",
  "chatly-prd": "Chatly PRD",
  "blinkit-analysis": "Blinkit",
  "google-pay-analysis": "Google Pay",
  "google-pay-prd": "Google Pay PRD",
  "gullak-fintech": "Gullak",
  "zepto-efficiency": "Zepto",
  "airbnb-ux": "Airbnb UX",
  "cloudeagle-ai": "Cloudeagle",
  "metis-improvement": "Metis",
  "codeant-ai": "CodeAnt AI",
  "ether-prd": "Ether",
};

/** These two are live products, so the card goes to the real thing. */
export const liveProducts = new Set(["pm-copilot", "figprd"]);
