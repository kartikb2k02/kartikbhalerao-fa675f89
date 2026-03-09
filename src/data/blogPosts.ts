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
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI-First Product Strategy: How to Build with Intelligence at the Core",
    excerpt: "The rise of generative AI has changed how we build products. AI is no longer just a feature — it's the foundation.",
    category: "strategy",
    date: "2024-06-20",
    readTime: "12 min read",
    tags: ["AI Strategy", "Product Management", "Innovation", "Future Tech"],
    image: "/lovable-uploads/e6ca466e-cd66-436d-b1a7-cffb0445e7c4.png",
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
    id: 7,
    title: "Scaling Product Teams: Lessons Learned",
    excerpt: "How to maintain product quality while growing your team",
    category: "leadership",
    date: "2024-05-15",
    readTime: "12 min read",
    tags: ["Team Management", "Leadership", "Scaling"],
    image: "/lovable-uploads/scaling-teams-banner.svg",
    slug: "scaling-product-teams-lessons"
  }
];
