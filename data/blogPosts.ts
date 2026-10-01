export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  /**
   * Override for social-preview crawlers (LinkedIn/Twitter reject SVG and can
   * mishandle WebP). Only needed when `image` is an SVG with no same-name PNG
   * in public/lovable-uploads — otherwise the OG generator derives the PNG itself.
   */
  ogImage?: string;
  slug: string;
  featured?: boolean;
  comingSoon?: boolean;
  /**
   * Optional FAQ block, rendered at the end of the post and emitted as
   * FAQPage JSON-LD (both client-side and in the prerendered static HTML).
   * Answers should be directly grounded in the post's own content.
   */
  faq?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 13,
    title: "Prompt vs. Context vs. Harness Engineering: The Difference That Actually Matters",
    excerpt: "A well-instructed agent with great context still deleted a developer's home directory. Here's why that failure sits at the harness layer, not the prompt, and what that actually means to build.",
    category: "ai",
    date: "2026-09-30",
    readTime: "9 min read",
    tags: ["AI Engineering", "Agentic AI", "Harness Engineering", "AI Agent Reliability", "Context Engineering"],
    image: "/lovable-uploads/harness-engineering-banner.svg",
    slug: "prompt-context-harness-engineering",
    featured: true,
    faq: [
      {
        question: "What is harness engineering?",
        answer: "Harness engineering is the discipline of building the system that runs around a model across an entire task: executing tool calls, deciding what's allowed to run without asking, checking results before they reach the next step, retrying failures, enforcing limits, and giving the loop a way to stop. It governs what happens after the model decides what it wants to do."
      },
      {
        question: "How is harness engineering different from prompt and context engineering?",
        answer: "Prompt engineering controls the wording of one request and operates on a single model call. Context engineering controls what information the model sees and operates across a session. Harness engineering controls what the agent is allowed to do and operates across the full execution loop \u2014 so it's the only one of the three that can stop a destructive action."
      },
      {
        question: "Why does the harness affect benchmark scores so much?",
        answer: "Holding the model fixed and changing only the harness moves scores by a wide margin. Claude Opus 4.5 scores 45.9% on SWE-bench Pro under the SEAL scaffold and 55.4% under the Claude Code harness \u2014 a 9.5 point swing on identical weights. The Holistic Agent Leaderboard has reported single-model swings of up to nearly 48 percentage points on SWE-bench Verified Mini from scaffold choice alone."
      },
      {
        question: "What was actually missing in the rm -rf incident?",
        answer: "A harness boundary, not a better prompt. There was no architectural check stopping a recursive delete from resolving to a real home directory, and no sandbox isolation strong enough to keep the test filesystem genuinely separate from the host's. The command was syntactically valid and executed exactly as written."
      },
      {
        question: "What is a harness actually made of?",
        answer: "Four concrete responsibilities: permissions (what runs without asking, and what never runs), tool execution plus a separate step that verifies results instead of trusting them, state that survives across the task rather than one call, and a bounded loop with a real exit condition instead of trusting the model to know when to stop."
      }
    ]
  },
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
    featured: true,
    faq: [
      {
        question: "What is an LLM loop?",
        answer: "An LLM loop is the repeatable cycle a product runs every time it needs to answer something: take the input, gather whatever context or tools are needed, let the model reason, check the result, and only then respond — going around again if the check fails. It's what turns a single guess into a checked, grounded answer."
      },
      {
        question: "What's the cheapest type of LLM loop?",
        answer: "A think loop — the model reasons and answers immediately with no retrieval and no tools. It's basically free and fine for FAQs and writing help. Most products should start here, and a lot should stay here."
      },
      {
        question: "Why does loop design matter more than the model you pick?",
        answer: "The model rarely makes or breaks an AI product — the loop around it does, and that loop is where the cost lives too. At a hundred requests you'll never notice the difference; at a million, loop design is your infra bill."
      },
      {
        question: "How much can optimizing an LLM loop actually save?",
        answer: "In the worked example in this post, routing the easy part to a cheap model, trimming context, and caching the stable system prompt took a four-call naive loop from about $0.26 per request down to about $0.03 — roughly 9x cheaper for the same output."
      },
      {
        question: "What metric should I track to know if a loop is working?",
        answer: "Cost per successful outcome, not cost per call. A cheap call that returns a wrong answer and forces a retry is more expensive than one good call that costs three times as much."
      }
    ]
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
    featured: true,
    faq: [
      {
        question: "What is an AI-first product strategy?",
        answer: "An AI-first product strategy designs the product so AI is core to the user experience rather than a bolted-on feature — starting with what data is available and what insights can be derived from it, and building feedback loops for continuous learning."
      },
      {
        question: "Should we build our own AI or integrate a third-party solution?",
        answer: "Building gives you customization, IP ownership, and long-term differentiation, but demands specialized talent and extensive data. Integrating gets you to market faster and suits MVPs and early validation. Many successful companies start by integrating and gradually build proprietary systems as their AI strategy matures."
      },
      {
        question: "What metrics matter for an AI-first product?",
        answer: "Alongside traditional KPIs, track model accuracy/confidence, prediction value (did it reduce time, effort, or cost), user trust and override rates, and adoption of the AI-based features themselves."
      },
      {
        question: "What are the biggest risks in an AI-first strategy?",
        answer: "Bias in training data, opaque decision-making, and over-reliance on automation without human oversight. Responsible practice means adding explainability layers, fallback modes if primary systems fail, and human-in-the-loop review for high-consequence decisions."
      }
    ]
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
    ogImage: "/lovable-uploads/product-development-workflow.png",
    slug: "moscow-prioritization-method",
    featured: true,
    faq: [
      {
        question: "What does MoSCoW stand for?",
        answer: "Must Have, Should Have, Could Have, and Won't Have (this time). Every requirement gets sorted into exactly one of these four buckets — no grey areas."
      },
      {
        question: "Where did the MoSCoW method come from?",
        answer: "It was developed in the 1990s by Dai Clegg while working at Oracle, and originated from the DSDM agile framework, a lesser-known cousin of Scrum and Kanban."
      },
      {
        question: "How many items should be Must Haves?",
        answer: "Keep Must-Haves to 60% or less of total scope. If a Must-Have is missing, the release fails — so overloading the Must category defeats the point of prioritizing at all."
      },
      {
        question: "When should a team use MoSCoW?",
        answer: "Early and often — during sprint planning and backlog grooming, stakeholder alignment, MVP scoping, capacity planning, and retrospectives, not just once at project kickoff."
      }
    ]
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
    ogImage: "/lovable-uploads/ai-product-discovery-workflow.png",
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
    ogImage: "/lovable-uploads/ai-feedback-pipeline.png",
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
    ogImage: "/lovable-uploads/product-development-workflow.png",
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
    ogImage: "/lovable-uploads/ai-feedback-pipeline.png",
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
    ogImage: "/lovable-uploads/traditional-vs-ai-workflow.png",
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
    ogImage: "/lovable-uploads/ai-product-discovery-workflow.png",
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
