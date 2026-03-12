import type { Context } from "https://edge.netlify.com";

const BASE = "https://kartikbhalerao.com";

const BLOG: Record<number, { title: string; desc: string; img: string }> = {
  1: { title: "AI-First Product Strategy: How to Build with Intelligence at the Core", desc: "The rise of generative AI has changed how we build products. AI is no longer just a feature — it's the foundation.", img: "/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.png" },
  2: { title: "MoSCoW: The Prioritization Method That Saves Your Sanity (and Your Sprint)", desc: "As a PM, it often feels like you're building a rocket ship with IKEA instructions. MoSCoW is the framework that brings clarity to chaos.", img: "/lovable-uploads/moscow-banner.svg" },
  3: { title: "AI as Your Co-Pilot: How Product Managers Can Supercharge Decision-Making with AI", desc: "AI is revolutionizing product management by providing deep insights, automating processes, and enhancing forecasting accuracy.", img: "/lovable-uploads/ai-copilot-banner.svg" },
  4: { title: "Data-Driven Decision Making: My Experience at Decision Machine", desc: "How to balance quantitative insights with qualitative user feedback", img: "/lovable-uploads/data-driven-banner.svg" },
  5: { title: "From Idea to MVP: A Product Manager's Journey", desc: "Step-by-step guide to building your first product from concept to launch", img: "/lovable-uploads/idea-to-mvp-banner.svg" },
  6: { title: "User Research That Actually Matters", desc: "Moving beyond vanity metrics to insights that drive product decisions", img: "/lovable-uploads/user-research-banner.svg" },
  7: { title: "Scaling Product Teams: Lessons Learned", desc: "How to maintain product quality while growing your team", img: "/lovable-uploads/scaling-teams-banner.svg" },
  8: { title: "I Replaced My Product Manager Workflow with AI for 7 Days — Here's What Happened", desc: "For 7 days, I replaced key parts of my PM workflow with AI tools. Here's where AI genuinely helped, where it struggled, and what it means for the future of Product Management.", img: "/lovable-uploads/ai-pm-7days-banner.svg" },
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

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inject(html: string, d: { title: string; desc: string; img: string }, pageUrl: string) {
  const t = esc(`${d.title} | Kartik Bhalerao`);
  const de = esc(d.desc);
  const img = d.img.startsWith("http") ? d.img : `${BASE}${d.img}`;
  const u = esc(pageUrl);

  return html
    .replace(/<title>[^<]*<\/title>/i, `<title>${t}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${de}" />`)
    .replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${de}" />`)
    .replace(/<meta property="og:image"[^>]*>/i, `<meta property="og:image" content="${img}" />`)
    .replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${u}" />`)
    .replace(/<meta property="og:type"[^>]*>/i, `<meta property="og:type" content="article" />`)
    .replace(/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${de}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/i, `<meta name="twitter:image" content="${img}" />`);
}

export default async (request: Request, context: Context) => {
  const path = new URL(request.url).pathname;

  let data: { title: string; desc: string; img: string } | undefined;

  const blogMatch = path.match(/^\/blog\/(\d+)/);
  const caseMatch = path.match(/^\/case-studies\/([^/]+)/);

  if (blogMatch) data = BLOG[parseInt(blogMatch[1])];
  else if (caseMatch) data = CASES[caseMatch[1]];

  if (!data) return context.next();

  const response = await context.next();
  const ct = response.headers.get("content-type") ?? "";
  if (!ct.includes("text/html")) return response;

  const html = await response.text();
  const modified = inject(html, data, request.url);

  return new Response(modified, {
    status: response.status,
    headers: response.headers,
  });
};

export const config = { path: ["/blog/*", "/case-studies/*"] };
