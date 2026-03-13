const BASE = "https://kartikbhalerao.com";

// NOTE: og:image must be PNG or JPG — SVG is not supported by LinkedIn or Twitter/X.
// For posts whose display banner is SVG, provide a PNG fallback here.
const FALLBACK_OG_IMG = "/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.png";

function ogImg(path: string): string {
  return path.endsWith(".svg") ? FALLBACK_OG_IMG : path;
}

const BLOG: Record<number, { title: string; desc: string; img: string }> = {
  1: { title: "AI-First Product Strategy: How to Build with Intelligence at the Core", desc: "The rise of generative AI has changed how we build products. AI is no longer just a feature — it's the foundation.", img: ogImg("/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.png") },
  2: { title: "MoSCoW: The Prioritization Method That Saves Your Sanity (and Your Sprint)", desc: "As a PM, it often feels like you're building a rocket ship with IKEA instructions. MoSCoW is the framework that brings clarity to chaos.", img: ogImg("/lovable-uploads/moscow-banner.svg") },
  3: { title: "AI as Your Co-Pilot: How Product Managers Can Supercharge Decision-Making with AI", desc: "AI is revolutionizing product management by providing deep insights, automating processes, and enhancing forecasting accuracy.", img: ogImg("/lovable-uploads/ai-copilot-banner.svg") },
  4: { title: "Data-Driven Decision Making: My Experience at Decision Machine", desc: "How to balance quantitative insights with qualitative user feedback", img: ogImg("/lovable-uploads/data-driven-banner.svg") },
  5: { title: "From Idea to MVP: A Product Manager's Journey", desc: "Step-by-step guide to building your first product from concept to launch", img: ogImg("/lovable-uploads/idea-to-mvp-banner.svg") },
  6: { title: "User Research That Actually Matters", desc: "Moving beyond vanity metrics to insights that drive product decisions", img: ogImg("/lovable-uploads/user-research-banner.svg") },
  7: { title: "Scaling Product Teams: Lessons Learned", desc: "How to maintain product quality while growing your team", img: ogImg("/lovable-uploads/scaling-teams-banner.svg") },
  8: { title: "I Replaced My Product Manager Workflow with AI for 7 Days — Here's What Happened", desc: "For 7 days, I replaced key parts of my PM workflow with AI tools. Here's where AI genuinely helped, where it struggled, and what it means for the future of Product Management.", img: ogImg("/lovable-uploads/ai-pm-7days-banner.svg") },
};

const CASES: Record<string, { title: string; desc: string; img: string }> = {
  "blinkit-analysis":    { title: "Blinkit Product Analysis", desc: "Order Efficiency & Conversion Optimization", img: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png" },
  "google-pay-analysis": { title: "Google Pay Feature Analysis", desc: "Strategic Product Improvement Study", img: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png" },
  "google-pay-prd":      { title: "Google Pay PRD", desc: "Strategic Product Improvement Study", img: "/lovable-uploads/9b4dd787-aeb2-4969-8fc0-a1dd907efea8.png" },
  "gullak-fintech":      { title: "Gullak Fintech App", desc: "Savings-Led Financial Empowerment Platform", img: "/lovable-uploads/b1ba7330-6bbc-43d5-a1d2-56baa716c077.png" },
  "zepto-efficiency":    { title: "Zepto Order Efficiency", desc: "User Experience Optimization", img: "/lovable-uploads/zepto.png" },
  "airbnb-ux":           { title: "Airbnb UX", desc: "Patient-Centered Design Approach", img: "/lovable-uploads/b6681943-085f-4f56-ad98-ba1fac93c64a.png" },
  "cloudeagle-ai":       { title: "Cloudeagle AI Efficiency", desc: "User Experience Optimization", img: "/lovable-uploads/Cloudeagle.png" },
  "metis-improvement":   { title: "Metis Feature Improvement", desc: "User Experience Optimization", img: "/lovable-uploads/Metis.png" },
  "codeant-ai":          { title: "CodeAnt AI", desc: "Product Launch Narrative", img: "/lovable-uploads/Codeant.png" },
  "ether-prd":           { title: "Ether Feature PRD", desc: "Product Improvement", img: "/lovable-uploads/Ether.png" },
  "chatly-prd":          { title: "Chatly PRD", desc: "AI Conversation Operationalization Platform", img: "/lovable-uploads/Chatly.png" },
};

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  // Normalize path: strip trailing slash for lookup (but keep /blog/1/ and /blog/1 equivalent)
  const rawPath = new URL(request.url).pathname;
  const path = rawPath.replace(/\/$/, "") || "/";

  let data: { title: string; desc: string; img: string } | undefined;

  const blogMatch = path.match(/^\/blog\/(\d+)$/);
  const caseMatch = path.match(/^\/case-studies\/([^/]+)$/);

  if (blogMatch) data = BLOG[parseInt(blogMatch[1])];
  else if (caseMatch) data = CASES[caseMatch[1]];

  // No matching data — serve normally
  if (!data) return context.next();

  const response = await context.next();

  // Only rewrite 200 HTML responses.
  // If Netlify returns a 3xx (e.g. /blog/1 → /blog/1/ directory redirect),
  // pass it through — the redirect target will be caught by this same edge function.
  const contentType = response.headers.get("content-type") ?? "";
  if (response.status !== 200 || !contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();

  const title = `${data.title} | Kartik Bhalerao`;
  const img = data.img.startsWith("http") ? data.img : `${BASE}${data.img}`;
  // Use the canonical URL (no trailing slash) so og:url is consistent
  const pageUrl = `${BASE}${path}`;
  const desc = data.desc;

  const esc = (s: string) => s.replace(/"/g, "&quot;");

  const modified = html
    .replace(/<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${esc(desc)}" />`)
    .replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${esc(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${esc(desc)}" />`)
    .replace(/<meta property="og:image"[^>]*>/i, `<meta property="og:image" content="${img}" />`)
    .replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${pageUrl}" />`)
    .replace(/<meta property="og:type"[^>]*>/i, `<meta property="og:type" content="article" />`)
    .replace(/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${esc(title)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${esc(desc)}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${img}" />`);

  const headers = new Headers(response.headers);
  headers.set("content-type", "text/html; charset=utf-8");
  headers.set("cache-control", "no-store");

  return new Response(modified, { status: 200, headers });
};
