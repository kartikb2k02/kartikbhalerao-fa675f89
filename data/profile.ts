/**
 * The facts about Kartik, in his own words.
 *
 * Every string here is lifted from `details.md` (his master document) or
 * from the existing site data — nothing is written by the site. When
 * something needs changing, change it here rather than in a component.
 */
export const profile = {
  name: "Kartik Bhalerao",
  role: "Product Manager",
  /**
   * Cycled under the name.
   *
   * The first renders server-side and is what a crawler and a recruiter
   * screening on job title will read, so it stays the plain one. The
   * rest can have more character — each is still backed by something in
   * details.md rather than being a slogan.
   */
  roles: [
    "Product Manager",
    "AI Product Builder",
    "Growth & GTM",
    "Product Builder",
    "Fintech PM",
  ],
  location: "Pune, India",
  email: "kartikbhalerao948@gmail.com",
  pronouns: "he/him",

  /** The homepage introduction. Kartik's own words, unedited. Final. */
  homeIntro: [
    "I'm Kartik. I somehow went from building products to figuring out why nobody was using them. I've worked across AI, fintech, B2B SaaS, and consumer apps, doing a bit of everything from product discovery and development to GTM (because apparently shipping a product isn't the finish line).",
    "These days, I spend a lot of time experimenting with AI, breaking workflows, and figuring out why something that worked perfectly in a demo suddenly stops working with real users.",
    "I like building things, asking too many questions, and getting into problems that probably looked much simpler at first.",
  ],

  /**
   * What that work actually touches. His words, compressed from the
   * four focus points on the old homepage.
   */
  focus: [
    "AI agents",
    "MCP",
    "AI workflows",
    "Model evaluation",
    "Product strategy",
    "GTM",
  ],

  /** The /about opening. Kartik's own words, unedited. */
  story: [
    "I'm Kartik Bhalerao. I work in product, which mostly means asking why, figuring out what matters, and trying to make things a little less complicated. My work sits across AI, product development, and growth, where I enjoy connecting the dots between customer problems, business goals, and what we can actually build.",
    "I'm curious by nature, tend to ask one question too many, and like understanding how things work beyond the surface. I enjoy building things that solve real problems, learning along the way, and occasionally discovering that the simple solution was right there all along.",
  ],

  links: {
    linkedin: "https://linkedin.com/in/kartik-bhalerao",
    github: "https://github.com/kartikbh6614",
    x: "https://x.com/KartikB43758249",
  },
} as const;

/**
 * Reported results, from details.md §9.
 *
 * His own note on that table: these should be published "only after
 * confirming their definitions and measurement periods". They are shown
 * here as reported, not as independently verified.
 */
export const impact = [
  { value: "20%", label: "higher onboarding conversion" },
  { value: "25%", label: "growth in monthly active users" },
  { value: "$350K", label: "annual revenue, up from $50K" },
  { value: "10+", label: "modules owned end to end" },
] as const;

export interface Role {
  /** URL segment for the detail page. */
  slug: string;
  title: string;
  company: string;
  /** The sector tag shown beside the dates. */
  category: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
  /** Grouped exactly as details.md groups them, headings and all. */
  highlights: { group: string; points: string[] }[];
  /** What the experience taught him, in his words. */
  lessons?: string[];
  tools: string[];
  links?: { website?: string; linkedin?: string };
}

/** How many roles the homepage shows before the view-all. */
export const HOMEPAGE_ROLE_COUNT = 3;

/** From details.md §2. */
export const roles: Role[] = [
  {
    slug: "decision-machine",
    category: "B2B SaaS",
    title: "Associate Product Manager",
    company: "Decision Machine",
    location: "Pune, Full-Time",
    start: "Jun 2024",
    end: "Present",
    current: true,
    // details.md §2, opening sentence — his words.
    summary:
      "At Decision Machine, I worked across AI product strategy, product delivery, customer and business requirements, workflow automation, and growth. My role involved translating business problems and enterprise customer needs into product requirements and roadmap priorities.",
    // Verbatim from details.md §2, Decision Machine — including its
    // own grouping. The bold figures there are plain text here; the
    // doc's own note is that they need confirming before publication.
    highlights: [
      {
        group: "Product strategy and roadmap",
        points: [
          "Worked with leadership to translate business problems and enterprise needs into product requirements, automation opportunities, and roadmap priorities.",
          "Owned 10+ product modules across discovery, roadmap planning, requirements, engineering delivery, launch, and post-launch optimisation.",
          "Prioritised initiatives using customer impact, business value, revenue potential, engineering effort, and technical dependencies.",
          "Supported product positioning and go-to-market planning through competitor analysis, customer insights, and product messaging.",
        ],
      },
      {
        group: "Execution and cross-functional delivery",
        points: [
          "Coordinated delivery with engineering, design, and QA through backlog refinement, sprint planning, acceptance testing, and release readiness.",
          "Worked with engineering on API integrations, workflow execution, error handling, and configuration requirements.",
          "Built rapid prototypes with AI-assisted development tools to validate user workflows and technical feasibility before committing to full implementation.",
          "Translated AI use cases into feature requirements and integration workflows involving LLMs, MCP, and AI gateways.",
        ],
      },
      {
        group: "Growth and adoption",
        points: [
          "Improved onboarding conversion by 20% through A/B testing, funnel analysis, and improvements to key user journeys.",
          "Increased monthly active users by 25% through experimentation and feature-adoption improvements.",
          "Contributed to annual revenue growth from $50K to $350K through product adoption initiatives and improvements to user experience.",
          "Reported a 25% increase in AI adoption score after launching AI-powered workflows designed to improve feature adoption and streamline user journeys.",
        ],
      },
    ],
    lessons: [
      "Enterprise product management requires connecting the user workflow to the underlying business process.",
      "AI features need to be designed around useful outcomes, understandable failure modes, and the workflow surrounding the model — not just the model itself.",
      "Roadmaps are prioritisation decisions. A feature is not automatically valuable because it is technically possible.",
      "Onboarding and activation are product problems: users need to reach value quickly and understand what to do next.",
      "Post-launch optimisation is essential. Shipping a module is a milestone, not proof that the module is successful.",
    ],
    tools: ["Product strategy", "Roadmapping", "AI workflows", "GTM", "Analytics"],
  },
  {
    slug: "ocius",
    category: "Early stage",
    title: "Product Manager, Intern",
    company: "Ocius",
    location: "Remote, Internship",
    start: "Jan 2024",
    end: "Apr 2024",
    current: false,
    // details.md §2, opening sentence — his words.
    summary:
      "At Ocius, I worked on improving product experience by looking at customer feedback, support trends, and user behaviour. The goal was to identify gaps in the experience and translate them into actionable product improvements.",
    // Verbatim from details.md §2, Ocius.
    highlights: [
      {
        group: "What I worked on",
        points: [
          "Reviewed customer feedback and support patterns to identify recurring pain points and usability gaps.",
          "Translated business requirements into user stories, acceptance criteria, and edge cases so engineering teams had a shared understanding of expected behaviour.",
          "Coordinated backlog refinement, sprint planning, feature testing, and release readiness with engineering and design.",
          "Improved QA validation and release checklists to catch issues earlier and make releases more reliable.",
          "Ran targeted UX experiments and post-launch improvements focused on reducing friction and improving retention.",
        ],
      },
      {
        group: "Reported outcomes",
        points: [
          "8% reduction in user churn through targeted UX experiments.",
          "10% fewer post-launch issues through improved QA validation and release checklists.",
        ],
      },
    ],
    lessons: [
      "Retention work is often a sequence of small, specific improvements — not one large feature. Customer feedback can identify the friction, but the team still needs to validate the root cause, choose the right intervention, and check whether behaviour changes after release.",
    ],
    tools: ["Discovery", "User research", "UX experiments", "QA"],
  },
];

/**
 * The career as a narrative, from details.md §2.
 *
 * Years that are not roles — 2022, 2023, 2024, 2026 — belong here
 * rather than in `roles`, which is for employment. details.md marks
 * 2022 and 2023 [VERIFY]; they are written as the general direction he
 * describes, with no specific project claimed.
 */
export const journey = [
  {
    year: "2022",
    /** Two words at most — it sits under a dot on a six-stop line. */
    short: "Web dev",
    hue: 42,
    title: "Web development",
    body: "The beginning of a transition from technical learner toward someone interested in how products are designed, built and used — breaking larger problems into components, understanding how systems fit together, and exploring how technology solves practical user problems.",
  },
  {
    year: "2023",
    short: "RocketChat",
    hue: 150,
    title: "RocketChat",
    body: "Data-oriented work and applied technical projects: data cleaning, SQL and dashboarding with Tableau and Power BI, alongside a smart locking system, banking application concepts and sentence classification. These built an appreciation for the full path from an idea to a working experience.",
  },
  {
    year: "Jan 2024",
    short: "Ocius",
    hue: 210,
    title: "Product Manager Intern, Ocius",
    body: "Improving product experience by reading customer feedback, support trends and user behaviour, then translating the gaps into actionable product improvements. Ran targeted UX experiments and post-launch work, reducing churn by 8% and post-launch issues by 10%.",
  },
  {
    year: "2024–26",
    short: "Decision Machine",
    hue: 270,
    title: "Associate Product Manager",
    body: "Translating business problems and enterprise customer needs into product requirements and roadmap priorities, across AI product strategy, delivery, workflow automation and growth. Owned 10+ modules from discovery through post-launch optimisation.",
  },
  {
    year: "Now",
    short: "AI & GTM",
    hue: 320,
    title: "Building at the intersection of AI, product and GTM",
    body: "Exploring early-stage product opportunities, rapid prototyping, AI-assisted workflows, and ways to help businesses turn complex processes into usable software. Independent work focuses on AI-forward deployment, enterprise AI solutions, automation and customised CRM.",
  },
] as const;

/**
 * How the work actually gets done, from details.md §4 — the five stages
 * and what each one produces. The outputs are the useful half: they are
 * what a hiring manager can picture receiving.
 */
export const practice = [
  {
    stage: "Discovery",
    body: "Clarify the user, the job they are trying to do, and the business outcome that matters. Evidence from interviews, customer feedback, support patterns, analytics, competitor research and observation of the current workflow.",
    outputs: "Problem statement · user journey · opportunity list · assumptions · success metric",
  },
  {
    stage: "Prioritisation",
    body: "Compare opportunities on user impact, business value, confidence, effort, urgency and technical dependencies. Frameworks structure a decision; they do not replace context or judgement.",
    outputs: "Prioritised opportunities · trade-offs · rationale · a roadmap tied to outcomes",
  },
  {
    stage: "Definition and delivery",
    body: "Translate a selected opportunity into something the team can build and validate — a PRD, user stories, acceptance criteria, edge cases, workflow diagrams, API expectations and release considerations.",
    outputs: "Concise requirements · testable acceptance criteria · a delivery plan",
  },
  {
    stage: "Experimentation and measurement",
    body: "Identify the primary metric before evaluating the solution, with supporting signals and guardrails so an apparent improvement does not hide a negative effect elsewhere.",
    outputs: "Hypothesis · baseline · target metric · test plan · result review",
  },
  {
    stage: "Go-to-market and adoption",
    body: "A product change needs a path to discovery, understanding, adoption and repeat value: target users, positioning, messaging, launch readiness, onboarding and the feedback loop after release.",
    outputs: "Positioning notes · launch checklist · onboarding improvements · post-launch review",
  },
] as const;

/** From details.md §1 — the sectors the work has actually been in. */
export const industries = [
  { name: "AI products", note: "Agents, MCP, AI gateways and model evaluation" },
  { name: "B2B SaaS", note: "Enterprise workflows, integrations and configuration" },
  { name: "Fintech", note: "Savings, payments and decision-support products" },
  { name: "Consumer", note: "Onboarding, activation, retention and habit formation" },
  { name: "Commerce", note: "Order efficiency, conversion and marketplace operations" },
  { name: "EdTech", note: "Fee management and school-facing workflows" },
] as const;

/**
 * The headline results, from details.md §9 — framed by what each one
 * actually moved rather than as four bare percentages.
 *
 * His own note on that table: publish only after confirming the
 * definitions and measurement periods. The qualifier on the page stays
 * until he does.
 */
export const outcomes = [
  {
    value: "+20%",
    label: "onboarding conversion",
    note: "A/B testing, funnel analysis and improvements to key user journeys",
  },
  {
    value: "+25%",
    label: "monthly active users",
    note: "Experimentation and feature-adoption improvements",
  },
  {
    value: "$50K → $350K",
    label: "annual revenue",
    note: "Contributed through product adoption initiatives and UX improvements",
  },
  {
    value: "10+",
    label: "modules owned end to end",
    note: "Discovery, roadmap, requirements, delivery, launch, post-launch",
  },
  {
    value: "−8%",
    label: "user churn",
    note: "Targeted UX experiments at Ocius",
  },
  {
    value: "−10%",
    label: "post-launch issues",
    note: "Improved QA validation and release checklists",
  },
] as const;

export interface Industry {
  name: string;
  note: string;
  /** Case-study ids, so the expanded panel cannot drift from /builds. */
  builds: string[];
  /** What the work in this sector actually moved, in his words. */
  impact: string;
}

/** Sectors the work has actually been in, each backed by real builds. */
export const industriesDetailed: Industry[] = [
  {
    name: "AI products",
    note: "Agents, MCP, AI gateways and model evaluation",
    builds: ["figprd", "pm-copilot", "chatly-prd"],
    impact:
      "Translated AI use cases into feature requirements and integration workflows involving LLMs, MCP and AI gateways. Reported a 25% increase in AI adoption score after launching AI-powered workflows.",
  },
  {
    name: "Fintech",
    note: "Savings, payments and decision-support products",
    builds: ["gullak-fintech", "google-pay-analysis", "google-pay-prd"],
    impact:
      "Savings-led product work increasing user engagement by 40%, plus strategic improvement studies on payments journeys.",
  },
  {
    name: "Commerce",
    note: "Order efficiency, conversion and marketplace operations",
    builds: ["blinkit-analysis", "zepto-efficiency", "metis-improvement"],
    impact:
      "Checkout and order-efficiency teardowns, with recommendations aimed at reducing checkout time by 30%.",
  },
  {
    name: "B2B SaaS",
    note: "Enterprise workflows, integrations and configuration",
    builds: ["cloudeagle-ai", "codeant-ai"],
    impact:
      "Enterprise product work across API integrations, workflow execution, error handling and configuration — the details that make a product reliable in practice.",
  },
  {
    name: "Consumer",
    note: "Onboarding, activation, retention and habit formation",
    builds: ["airbnb-ux", "tenzo-product-discovery"],
    impact:
      "Onboarding and retention work: 20% higher onboarding conversion, 8% lower churn through targeted UX experiments.",
  },
  {
    name: "EdTech",
    note: "Fee management and school-facing workflows",
    builds: ["ether-prd"],
    impact:
      "Requirements definition for school and parent fee-management workflows.",
  },
];
