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
    image: "/lovable-uploads/89406d0e-28cd-4dbf-9e94-3244e4646a29.png",
    slug: "ai-first-product-strategy"
  },
  {
    id: 2,
    title: "The Art of Product Teardowns: Learning from Industry Giants",
    excerpt: "How analyzing products like Blinkit and Google Pay can make you a better Product Manager",
    category: "analysis",
    date: "2024-06-15",
    readTime: "8 min read",
    tags: ["Product Management", "Analysis", "Learning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
    slug: "product-teardowns-learning-from-giants"
  },
  {
    id: 3,
    title: "Building User-Centric Fintech Products: Lessons from Gullak",
    excerpt: "Key insights from designing a savings app that users actually want to use",
    category: "design",
    date: "2024-06-10",
    readTime: "6 min read",
    tags: ["Fintech", "User Experience", "Product Design"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop",
    slug: "user-centric-fintech-gullak-lessons"
  },
  {
    id: 4,
    title: "Data-Driven Decision Making: My Experience at Decision Machine",
    excerpt: "How to balance quantitative insights with qualitative user feedback",
    category: "analytics",
    date: "2024-06-05",
    readTime: "7 min read",
    tags: ["Data Analytics", "Product Strategy", "Decision Making"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    slug: "idea-to-mvp-product-manager-journey"
  },
  {
    id: 6,
    title: "User Research That Actually Matters",
    excerpt: "Moving beyond vanity metrics to insights that drive product decisions",
    category: "research",
    date: "2024-05-20",
    readTime: "9 min read",
    tags: ["User Research", "Product Management", "Insights"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
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
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
    slug: "scaling-product-teams-lessons"
  }
];