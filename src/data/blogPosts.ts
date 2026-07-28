export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
  featured?: boolean;
  comingSoon?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 12,
    title: "Loops Engineering for Product Development: How to Increase AI Efficiency",
    excerpt: "The best AI products aren't the ones that make the most LLM calls, they're the ones that make the fewest calls needed to get the job done. A breakdown of the loop patterns behind production AI products, what they actually cost in tokens, and how to keep them efficient at scale.",
    category: "ai",
    date: "2026-07-26",
    readTime: "13 min read",
    tags: ["AI", "Loop Engineering", "Agents", "Product Management", "System Design"],
    image: "/lovable-uploads/llm-loops-banner.svg",
    slug: "llm-loops-production-ai-products",
    featured: true
  },
  {
    id: 1,
    title: "AI-First Product Strategy: How to Build with Intelligence at the Core",
    excerpt: "The rise of generative AI has changed how we build products. AI is no longer just a feature — it's the foundation.",
    category: "strategy",
    date: "2024-06-20",
    readTime: "12 min read",
    tags: ["AI Strategy", "Product Management", "Innovation", "Future Tech"],
    image: "/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.webp",
    slug: "ai-first-product-strategy",
    featured: true
  },
  {
    id: 2,
    title: "MoSCoW: The Prioritization Method That Saves Your Sanity (and Your Sprint)",
    excerpt: "As a PM, it often feels like you're building a rocket ship with IKEA instructions. MoSCoW is the framework that brings clarity to chaos.",
    category: "strategy",
    date: "2025-07-14",
    readTime: "7 min read",
    tags: ["Prioritization", "Product Management", "Agile", "MoSCoW"],
    image: "/lovable-uploads/moscow-banner.svg",
    slug: "moscow-prioritization-method",
    featured: true
  },
  {
    id: 3,
    title: "AI as Your Co-Pilot: How Product Managers Can Supercharge Decision-Making with AI",
    excerpt: "AI is revolutionizing product management by providing deep insights, automating processes, and enhancing forecasting accuracy.",
    category: "ai",
    date: "2025-07-01",
    readTime: "8 min read",
    tags: ["AI", "Product Management", "Decision Making", "Analytics"],
    image: "/lovable-uploads/ai-copilot-banner.svg",
    slug: "ai-copilot-decision-making"
  },
  {
    id: 4,
    title: "Data-Driven Decision Making: My Experience at Decision Machine",
    excerpt: "How to balance quantitative insights with qualitative user feedback",
    category: "analytics",
    date: "2024-06-05",
    readTime: "7 min read",
    tags: ["Data Analytics", "Product Strategy", "Decision Making"],
    image: "/lovable-uploads/data-driven-banner.svg",
    slug: "data-driven-decision-making-experience"
  },
  {
    id: 5,
    title: "From Idea to MVP: A Product Manager's Journey",
    excerpt: "Step-by-step guide to building your first product from concept to launch",
    category: "strategy",
    date: "2024-05-28",
    readTime: "10 min read",
    tags: ["MVP", "Product Strategy", "Startup"],
    image: "/lovable-uploads/idea-to-mvp-banner.svg",
    slug: "idea-to-mvp-product-manager-journey",
    featured: true
  },
  {
    id: 6,
    title: "User Research That Actually Matters",
    excerpt: "Moving beyond vanity metrics to insights that drive product decisions",
    category: "research",
    date: "2024-05-20",
    readTime: "9 min read",
    tags: ["User Research", "Product Management", "Insights"],
    image: "/lovable-uploads/user-research-banner.svg",
    slug: "user-research-that-matters"
  },
  {
    id: 9,
    title: "Build a Competitive Intelligence System That Updates Itself",
    excerpt: "Stop manually checking G2, pricing pages, and app store reviews every week. Here's how I built a system using Apify, Notion, Claude, and Slack that delivers competitor signals automatically — with AI analysis included.",
    category: "ai",
    date: "2026-04-14",
    readTime: "8 min read",
    tags: ["Product Management", "Automation", "AI", "Tools"],
    image: "/lovable-uploads/competitive-intel-banner.svg",
    slug: "build-competitive-intelligence-system",
    featured: true
  },
  {
    id: 8,
    title: "I Replaced My Product Manager Workflow with AI for 7 Days — Here's What Happened",
    excerpt: "For 7 days, I replaced key parts of my PM workflow with AI tools. Here's where AI genuinely helped, where it struggled, and what it means for the future of Product Management.",
    category: "ai",
    date: "2026-03-12",
    readTime: "10 min read",
    tags: ["AI", "Product Management", "Workflow", "Productivity", "Experiment"],
    image: "/lovable-uploads/ai-pm-7days-banner.svg",
    slug: "ai-replaced-pm-workflow-7-days",
    featured: true
  },
  {
    id: 7,
    title: "Scaling Product Teams: Lessons Learned",
    excerpt: "How to maintain product quality while growing your team",
    category: "leadership",
    date: "2024-05-15",
    readTime: "12 min read",
    tags: ["Team Management", "Leadership", "Scaling"],
    image: "/lovable-uploads/scaling-teams-banner.svg",
    slug: "scaling-product-teams-lessons"
  },
  {
    id: 11,
    title: "Forward-Deployed AI PMs Are Changing How Products Get Built",
    excerpt: "A new breed of product manager is emerging — one who doesn't just spec features, but deploys AI directly into workflows, decisions, and customer interactions. Here's what that shift means for the future of product.",
    category: "ai",
    date: "2026-06-09",
    readTime: "8 min read",
    tags: ["AI", "Product Management", "Future of Work", "Forward Deployment"],
    image: "/lovable-uploads/ai-pm-forward-deployed-banner.svg",
    slug: "forward-deployed-ai-pms",
    featured: true
  },
  {
    id: 10,
    title: "I Tried Replacing Traditional User Personas with AI — Here's What I Learned",
    excerpt: "Most personas describe users. Very few help teams understand them. I replaced traditional personas with AI-generated behavioral archetypes — and it permanently changed how I think about user research.",
    category: "ai",
    date: "2026-05-28",
    readTime: "9 min read",
    tags: ["AI", "User Research", "Product Management", "Personas", "Behavioral Design"],
    image: "/lovable-uploads/ai-personas-banner.svg",
    slug: "ai-user-personas-experiment",
    comingSoon: true
  }
];
