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
      themeVariables: themeVariables(isDark),
    });
    initialisedFor = key;
  }

  // Serialise renders: mermaid mounts a temporary node per render and
  // concurrent calls can trip over each other.
  const run = queue.then(() => mermaid.render(id, chart));
  queue = run.catch(() => undefined);
  const { svg } = await run;
  return svg;
}
