/**
 * One colour per primary destination.
 *
 * Two things paint with these: the route curtain that covers the screen
 * during navigation, and the active item in the nav. Keeping them in one
 * place is what makes the slab you just watched and the highlighted word
 * in the header read as the same colour rather than two near-misses.
 *
 * The hex values are the dark-ground form — bright, pastel, made to be
 * seen as a full-bleed slab. The nav needs the same hues darkened for
 * white, which a stylesheet can do per theme and a constant cannot, so
 * those live beside `.mark-*` in `globals.css` and are labelled there.
 */
export const ROUTE_THEME = {
  "/": { color: "#FBD509", word: "" },
  "/about": { color: "#A5B4FC", word: "ABOUT" },
  "/builds": { color: "#52CD86", word: "BUILDS" },
  /** The site calls /blog "writing" everywhere a reader can see it. */
  "/blog": { color: "#F767C1", word: "WRITING" },
} as const;

const FALLBACK = ROUTE_THEME["/"];

function themeFor(pathname: string) {
  if (pathname.startsWith("/about")) return ROUTE_THEME["/about"];
  if (pathname.startsWith("/builds")) return ROUTE_THEME["/builds"];
  if (pathname.startsWith("/blog")) return ROUTE_THEME["/blog"];
  return FALLBACK;
}

export const getRouteColor = (pathname: string) => themeFor(pathname).color;
export const getRouteWord = (pathname: string) => themeFor(pathname).word;
