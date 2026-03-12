import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://kartikbhalerao.com';

// ── Blog post data (mirrors src/data/blogPosts.ts) ──────────────────────────
const blogPosts = [
  {
    id: 1,
    title: "AI-First Product Strategy: How to Build with Intelligence at the Core",
    excerpt: "The rise of generative AI has changed how we build products. AI is no longer just a feature — it's the foundation.",
    image: "/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.png",
  },
  {
    id: 2,
    title: "MoSCoW: The Prioritization Method That Saves Your Sanity (and Your Sprint)",
    excerpt: "As a PM, it often feels like you're building a rocket ship with IKEA instructions. MoSCoW is the framework that brings clarity to chaos.",
    image: "/lovable-uploads/moscow-banner.svg",
  },
  {
    id: 3,
    title: "AI as Your Co-Pilot: How Product Managers Can Supercharge Decision-Making with AI",
    excerpt: "AI is revolutionizing product management by providing deep insights, automating processes, and enhancing forecasting accuracy.",
    image: "/lovable-uploads/ai-copilot-banner.svg",
  },
  {
    id: 4,
    title: "Data-Driven Decision Making: My Experience at Decision Machine",
    excerpt: "How to balance quantitative insights with qualitative user feedback",
    image: "/lovable-uploads/data-driven-banner.svg",
  },
  {
    id: 5,
    title: "From Idea to MVP: A Product Manager's Journey",
    excerpt: "Step-by-step guide to building your first product from concept to launch",
    image: "/lovable-uploads/idea-to-mvp-banner.svg",
  },
  {
    id: 6,
    title: "User Research That Actually Matters",
    excerpt: "Moving beyond vanity metrics to insights that drive product decisions",
    image: "/lovable-uploads/user-research-banner.svg",
  },
  {
    id: 7,
    title: "Scaling Product Teams: Lessons Learned",
    excerpt: "How to maintain product quality while growing your team",
    image: "/lovable-uploads/scaling-teams-banner.svg",
  },
  {
    id: 8,
    title: "I Replaced My Product Manager Workflow with AI for 7 Days — Here's What Happened",
    excerpt: "For 7 days, I replaced key parts of my PM workflow with AI tools. Here's where AI genuinely helped, where it struggled, and what it means for the future of Product Management.",
    image: "/lovable-uploads/ai-pm-7days-banner.svg",
  },
];

// ── Case study data (mirrors src/data/caseStudies.ts) ────────────────────────
const caseStudies = [
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

function injectOgTags(html, { title, description, image, url }) {
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
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
    .replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${i}" />`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
const distIndexHtml = fs.readFileSync('dist/index.html', 'utf-8');

// Blog posts
for (const post of blogPosts) {
  const dir = `dist/blog/${post.id}`;
  fs.mkdirSync(dir, { recursive: true });
  const html = injectOgTags(distIndexHtml, {
    title: `${post.title} | Kartik Bhalerao`,
    description: post.excerpt,
    image: post.image,
    url: `${BASE_URL}/blog/${post.id}`,
  });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✓ /blog/${post.id}`);
}

// Case studies
for (const cs of caseStudies) {
  const dir = `dist/case-studies/${cs.id}`;
  fs.mkdirSync(dir, { recursive: true });
  const html = injectOgTags(distIndexHtml, {
    title: `${cs.title} | Kartik Bhalerao`,
    description: cs.subtitle,
    image: cs.image,
    url: `${BASE_URL}/case-studies/${cs.id}`,
  });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✓ /case-studies/${cs.id}`);
}

console.log('\n✅ OG pre-render complete.');
