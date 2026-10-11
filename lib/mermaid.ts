/**
 * One shared mermaid instance for the whole page.
 *
 * Every diagram used to import and re-initialise the library itself, which
 * meant five separate initialise calls and five serial renders on a post like
 * the Gemma one. Here the import happens once, initialise runs only when the
 * theme actually changes, and renders are queued so they cannot interleave
 * and corrupt each other's temporary DOM nodes.
 */
type MermaidApi = typeof import("mermaid")["default"];

let loader: Promise<MermaidApi> | null = null;
let initialisedFor: string | null = null;
let queue: Promise<unknown> = Promise.resolve();

const themeVariables = (isDark: boolean) =>
  isDark
    ? {
        background: "transparent",
        primaryColor: "#1c1b1d",
        primaryTextColor: "#ecebe8",
        primaryBorderColor: "#f2740f",
        lineColor: "#6d6a68",
        secondaryColor: "#242326",
        tertiaryColor: "#242326",
        mainBkg: "#1c1b1d",
        nodeBorder: "#f2740f",
        clusterBkg: "#141315",
        titleColor: "#ecebe8",
        edgeLabelBackground: "#141315",
        textColor: "#ecebe8",
      }
    : {
        background: "transparent",
        primaryColor: "#faf6ee",
        primaryTextColor: "#17161a",
        primaryBorderColor: "#c4420f",
        lineColor: "#8a847c",
        secondaryColor: "#f2ece1",
        tertiaryColor: "#f2ece1",
        mainBkg: "#faf6ee",
        nodeBorder: "#c4420f",
        clusterBkg: "#f2ece1",
        titleColor: "#17161a",
        edgeLabelBackground: "#faf6ee",
        textColor: "#17161a",
      };

/** Begin downloading the library without waiting for it. */
export function preloadMermaid(): void {
  if (!loader) loader = import("mermaid").then((m) => m.default);
}

export async function renderDiagram(
  id: string,
  chart: string,
  isDark: boolean
): Promise<string> {
  preloadMermaid();
  const mermaid = await loader!;

  const key = isDark ? "dark" : "light";
  if (initialisedFor !== key) {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: "strict",
      theme: "base",
      fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif",
      // Mermaid's 14px default is squeezed small once a wide diagram is scaled
      // down into the article column; 15.5px keeps labels readable at that size.
      fontSize: 15.5,
      themeVariables: themeVariables(isDark),
    });
    initialisedFor = key;
  }

  // Serialise renders: mermaid mounts a temporary node per render and
  // concurrent calls can trip over each other.
  const run = queue.then(() => mermaid.render(id, chart));
  queue = run.catch(() => undefined);
  const { svg } = await run;
  return normalise(svg);
}

/**
 * Mermaid pins the diagram to its natural pixel width with an inline
 * `max-width`, so on a wide column it sits small in the middle of its frame
 * instead of using the space. The markup is vector, so letting it fill the
 * container is sharper at any size, not just bigger.
 */
function normalise(svg: string): string {
  return svg
    .replace(/style="[^"]*max-width:\s*[\d.]+px;?[^"]*"/, 'style="max-width:100%"')
    .replace(/<svg /, '<svg width="100%" ');
}
