import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://kartikbhalerao.com';

// NOTE: og:image must be PNG or JPG — LinkedIn and Twitter/X do not support SVG.
// Each post has its own PNG for OG sharing. Replace with proper blog banner PNGs when available.

// ── Blog post data (mirrors src/data/blogPosts.ts) ──────────────────────────
const blogPosts = [
  { slug: "ai-first-product-strategy",              title: "AI-First Product Strategy: How to Build with Intelligence at the Core",              excerpt: "The rise of generative AI has changed how we build products. AI is no longer just a feature — it's the foundation.",                                                               image: "/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.png" },
  { slug: "moscow-prioritization-method",           title: "MoSCoW: The Prioritization Method That Saves Your Sanity (and Your Sprint)",         excerpt: "As a PM, it often feels like you're building a rocket ship with IKEA instructions. MoSCoW is the framework that brings clarity to chaos.",                                       image: "/lovable-uploads/product-development-workflow.png" },
  { slug: "ai-copilot-decision-making",             title: "AI as Your Co-Pilot: How Product Managers Can Supercharge Decision-Making with AI",  excerpt: "AI is revolutionizing product management by providing deep insights, automating processes, and enhancing forecasting accuracy.",                                               image: "/lovable-uploads/ai-product-discovery-workflow.png" },
  { slug: "data-driven-decision-making-experience", title: "Data-Driven Decision Making: My Experience at Decision Machine",                     excerpt: "How to balance quantitative insights with qualitative user feedback",                                                                                                    image: "/lovable-uploads/ai-feedback-pipeline.png" },
  { slug: "idea-to-mvp-product-manager-journey",    title: "From Idea to MVP: A Product Manager's Journey",                                     excerpt: "Step-by-step guide to building your first product from concept to launch",                                                                                               image: "/lovable-uploads/product-development-workflow.png" },
  { slug: "user-research-that-matters",             title: "User Research That Actually Matters",                                                excerpt: "Moving beyond vanity metrics to insights that drive product decisions",                                                                                             image: "/lovable-uploads/ai-feedback-pipeline.png" },
  { slug: "scaling-product-teams-lessons",          title: "Scaling Product Teams: Lessons Learned",                                            excerpt: "How to maintain product quality while growing your team",                                                                                                         image: "/lovable-uploads/ai-product-discovery-workflow.png" },
  { slug: "ai-replaced-pm-workflow-7-days",         title: "I Replaced My Product Manager Workflow with AI for 7 Days — Here's What Happened",  excerpt: "For 7 days, I replaced key parts of my PM workflow with AI tools. Here's where AI genuinely helped, where it struggled, and what it means for the future of Product Management.", image: "/lovable-uploads/traditional-vs-ai-workflow.png" },
  { slug: "build-competitive-intelligence-system",  title: "Build a Competitive Intelligence System That Updates Itself",                        excerpt: "Stop manually checking G2, pricing pages, and app store reviews every week. Here's how I built a system using Apify, Notion, Claude, and Slack that delivers competitor signals automatically — with AI analysis included.", image: "/lovable-uploads/competitive-intel-banner.png" },
  { slug: "forward-deployed-ai-pms",                title: "Forward-Deployed AI PMs Are Changing How Products Get Built",                       excerpt: "A new breed of product manager is emerging — one who doesn't just spec features, but deploys AI directly into workflows, decisions, and customer interactions. Here's what that shift means for the future of product.", image: "/lovable-uploads/ai-pm-forward-deployed-banner.png" },
  { slug: "ai-user-personas-experiment",            title: "I Tried Replacing Traditional User Personas with AI — Here's What I Learned",       excerpt: "Most personas describe users. Very few help teams understand them. I replaced traditional personas with AI-generated behavioral archetypes — and it permanently changed how I think about user research.", image: "/lovable-uploads/ai-personas-banner.svg" },
  { slug: "llm-loops-production-ai-products",       title: "LLM Loops for Product Development: How to Increase AI Efficiency",                    excerpt: "The best AI products aren't the ones that make the most LLM calls, they're the ones that make the fewest calls needed to get the job done. A breakdown of the loop patterns behind production AI products, what they actually cost in tokens, and how to keep them efficient at scale.", image: "/lovable-uploads/llm-loops-banner.svg" },
];

// ── Case study data (mirrors src/data/caseStudies.ts) ────────────────────────
const caseStudies = [
  {
    id: "figprd",
    title: "figprd",
    subtitle: "Figma → PRD Generator",
    image: "/favicon.png",
  },
  {
    id: "tenzo-product-discovery",
    title: "Tenzo Product Discovery and Problem Ideation",
    subtitle: "Instant + Scheduled Order Assignment Engine",
    image: "/lovable-uploads/tenzo-prd-01.webp",
  },
  {
    id: "pm-copilot",
    title: "PM Co-Pilot",
    subtitle: "AI-Powered PM Workspace",
    image: "/favicon.png",
  },
  {
    id: "blinkit-analysis",
    title: "Blinkit Product Analysis",
    subtitle: "Order Efficiency & Conversion Optimization",
    image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png",
  },
  {
    id: "google-pay-analysis",
    title: "Google Pay Feature Analysis",
    subtitle: "Strategic Product Improvement Study",
    image: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png",
  },
  {
    id: "google-pay-prd",
    title: "Google Pay PRD",
    subtitle: "Strategic Product Improvement Study",
    image: "/lovable-uploads/9b4dd787-aeb2-4969-8fc0-a1dd907efea8.png",
  },
  {
    id: "gullak-fintech",
    title: "Gullak Fintech App",
    subtitle: "Savings-Led Financial Empowerment Platform",
    image: "/lovable-uploads/b1ba7330-6bbc-43d5-a1d2-56baa716c077.png",
  },
  {
    id: "zepto-efficiency",
    title: "Zepto Order Efficiency",
    subtitle: "User Experience Optimization",
    image: "/lovable-uploads/zepto.png",
  },
  {
    id: "airbnb-ux",
    title: "Airbnb UX",
    subtitle: "Patient-Centered Design Approach",
    image: "/lovable-uploads/b6681943-085f-4f56-ad98-ba1fac93c64a.png",
  },
  {
    id: "cloudeagle-ai",
    title: "Cloudeagle AI Efficiency",
    subtitle: "User Experience Optimization",
    image: "/lovable-uploads/Cloudeagle.png",
  },
  {
    id: "metis-improvement",
    title: "Metis Feature Improvement",
    subtitle: "User Experience Optimization",
    image: "/lovable-uploads/Metis.png",
  },
  {
    id: "codeant-ai",
    title: "CodeAnt AI",
    subtitle: "Product Launch Narrative",
    image: "/lovable-uploads/Codeant.png",
  },
  {
    id: "ether-prd",
    title: "Ether Feature PRD",
    subtitle: "Product Improvement",
    image: "/lovable-uploads/Ether.png",
  },
  {
    id: "chatly-prd",
    title: "Chatly PRD",
    subtitle: "AI Conversation Operationalization Platform",
    image: "/lovable-uploads/Chatly.png",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function escape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function injectOgTags(html, { title, description, image, url, type = 'website' }) {
  const t = escape(title);
  const d = escape(description);
  const i = image.startsWith('http') ? image : `${BASE_URL}${image}`;
  const u = escape(url);

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${d}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${i}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${u}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${i}" />`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
const distIndexHtml = fs.readFileSync('dist/index.html', 'utf-8');

// Blog posts — flat .html files so Netlify serves /blog/slug directly as 200 (no redirect)
fs.mkdirSync('dist/blog', { recursive: true });
for (const post of blogPosts) {
  const html = injectOgTags(distIndexHtml, {
    title: `${post.title} | Kartik Bhalerao`,
    description: post.excerpt,
    image: post.image,
    url: `${BASE_URL}/blog/${post.slug}`,
    type: 'article',
  });
  fs.writeFileSync(`dist/blog/${post.slug}.html`, html);
  console.log(`✓ /blog/${post.slug}`);
}

// Case studies — flat .html files, served at /builds/:id (matches the React route)
fs.mkdirSync('dist/builds', { recursive: true });
for (const cs of caseStudies) {
  const html = injectOgTags(distIndexHtml, {
    title: `${cs.title} | Kartik Bhalerao`,
    description: cs.subtitle,
    image: cs.image,
    url: `${BASE_URL}/builds/${cs.id}`,
    type: 'article',
  });
  fs.writeFileSync(`dist/builds/${cs.id}.html`, html);
  console.log(`✓ /builds/${cs.id}`);
}

console.log('\n✅ OG pre-render complete.');

// ── Sitemap ──────────────────────────────────────────────────────────────────
// Generated from the same post/case-study lists above so it can't drift out of sync.
const staticRoutes = ['/', '/about', '/capabilities', '/builds', '/certifications', '/blog', '/contact'];

const urls = [
  ...staticRoutes.map(path => ({ loc: `${BASE_URL}${path}` })),
  ...blogPosts.map(post => ({ loc: `${BASE_URL}/blog/${post.slug}` })),
  ...caseStudies.map(cs => ({ loc: `${BASE_URL}/builds/${cs.id}` })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>\n    <loc>${escape(u.loc)}</loc>\n  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log(`✅ sitemap.xml written (${urls.length} URLs)`);
