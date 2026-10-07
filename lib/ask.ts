/**
 * The answer engine behind the ⌘K console.
 *
 * Everything here is grounded in the site's own content: data/caseStudies,
 * data/blogPosts, data/certifications, plus the hand-written profile facts
 * below. There is no model call and no network request: the site is a static
 * export, so an answer is composed locally from real records. That also means
 * it can't invent anything it doesn't have.
 */

import { caseStudies } from "@/data/caseStudies";
import { blogPosts } from "@/data/blogPosts";
import { certifications } from "@/data/certifications";

export interface AskItem {
  term: string;
  detail?: string;
  href?: string;
}

export interface AskMetric {
  value: string;
  label: string;
}

export type AskBlock =
  | { kind: "text"; text: string }
  | { kind: "list"; items: AskItem[] }
  | { kind: "metrics"; metrics: AskMetric[] };

export interface AskSource {
  label: string;
  href: string;
}

export interface AskAnswer {
  id: string;
  blocks: AskBlock[];
  sources: AskSource[];
  /** Shown when nothing matched well and these are nearest records instead. */
  approximate?: boolean;
}

/* ─────────────────────────── derived counts ─────────────────────────── */

const publishedPosts = blogPosts.filter((p) => !p.comingSoon);
const buildCount = caseStudies.length;
const postCount = publishedPosts.length;
const certCount = certifications.length;

const aiBuildIds = ["figprd", "pm-copilot", "chatly-prd"];
const aiBuilds = caseStudies.filter((c) => aiBuildIds.includes(c.id));

const latestPosts = [...publishedPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

/* ───────────────────────────── answers ───────────────────────────────── */

const ANSWERS: Record<string, () => AskAnswer> = {
  who: () => ({
    id: "who",
    blocks: [
      {
        kind: "text",
        text: "Kartik Bhalerao, a product manager. Currently Associate Product Manager at Decision Machine, working with leadership on product KPIs, roadmap and AI product work. Before that, Product Manager Intern at Ocius, and founding PM on a consumer tech app.",
      },
      {
        kind: "text",
        text: "The short version: he talks to users, works out what is actually worth building, writes it down clearly, and ships it with a team. He also builds the AI tooling himself rather than only specifying it.",
      },
    ],
    sources: [
      { label: "About", href: "/about" },
      { label: "Builds", href: "/builds" },
    ],
  }),

  work: () => ({
    id: "work",
    blocks: [
      {
        kind: "list",
        items: [
          {
            term: "Associate Product Manager · Decision Machine",
            detail: "Defines product KPIs, success metrics and roadmap priorities with leadership. Has owned delivery on 10+ product modules from discovery to launch, including reworking how business teams act on AI and ML model scores.",
            href: "/about",
          },
          {
            term: "Product Manager Intern · Ocius",
            detail: "PRDs and user flows for 3 MVP features, with acceptance criteria and release checklists that cut post launch issues by 10%. UX experiments reduced churn by 8%.",
            href: "/about",
          },
        ],
      },
      {
        kind: "text",
        text: "Also founding PM on a consumer tech app, where the MVP shipped in 90 days, plus open source product work at Rocket.Chat.",
      },
    ],
    sources: [{ label: "Full experience", href: "/about" }],
  }),

  capability: () => ({
    id: "capability",
    blocks: [
      {
        kind: "list",
        items: [
          { term: "Figure out what to build", detail: "User interviews, diary studies, competitor teardowns, turning all of it into personas and a clear problem statement." },
          { term: "Write it down properly", detail: "PRDs with success metrics, edge cases, and acceptance criteria. User stories that don't start arguments in sprint planning." },
          { term: "Decide what ships first", detail: "RICE and MoSCoW prioritisation, MVP scoping, a Now / Next / Later roadmap leadership can actually read." },
          { term: "Read the numbers", detail: "Mixpanel, GA4, SQL, A/B tests. Finding the drop-off before guessing at a fix." },
          { term: "Build with AI", detail: "LLM workflows, agent pipelines, MCP integrations, and shipping real tools with them rather than slideware." },
          { term: "Take it to market", detail: "Positioning, launch messaging, closed betas, GTM readiness, rollback criteria." },
        ],
      },
    ],
    sources: [
      { label: "About", href: "/about" },
      { label: "Tools", href: "/about" },
    ],
  }),

  builds: () => ({
    id: "builds",
    blocks: [
      {
        kind: "text",
        text: `${buildCount} builds on the site: products shipped, PRDs written, and teardowns of products worth studying.`,
      },
      {
        kind: "list",
        items: [
          { term: "PM Co-Pilot", detail: "An AI workspace for PMs. 13 artifact types, streaming output, Notion and Jira write-back. Zero to deployed in under two weeks.", href: "/builds/pm-copilot" },
          { term: "figprd", detail: "Reads a Figma file over MCP and writes the whole PRD. No copy-paste in between.", href: "/builds/figprd" },
          { term: "Tenzo assignment engine", detail: "A full system design for instant vs. scheduled order conflicts, covering the scoring formula, escalation flow and a 13 week rollout.", href: "/builds/tenzo-product-discovery" },
          { term: "Gullak", detail: "Savings-led fintech app for first-time borrowers and aspirational savers.", href: "/builds/gullak-fintech" },
        ],
      },
    ],
    sources: [{ label: `All ${buildCount} builds`, href: "/builds" }],
  }),

  impact: () => ({
    id: "impact",
    blocks: [
      {
        kind: "text",
        text: "Measured, not estimated:",
      },
      {
        kind: "metrics",
        metrics: [
          { value: "+20%", label: "user conversion, from A/B experiments on onboarding and feature adoption" },
          { value: "+25%", label: "monthly active users" },
          { value: "10+", label: "product modules owned from discovery to launch" },
          { value: "−10%", label: "post launch issues at Ocius, from release checklists and acceptance criteria" },
          { value: "−8%", label: "user churn at Ocius, from UX experiments" },
          { value: "90 days", label: "to ship the consumer app MVP" },
        ],
      },
    ],
    sources: [
      { label: "How it was done", href: "/about" },
      { label: "Builds", href: "/builds" },
    ],
  }),

  ai: () => ({
    id: "ai",
    blocks: [
      {
        kind: "text",
        text: "AI is most of the current work, both building with it and writing about where it actually holds up.",
      },
      {
        kind: "list",
        items: aiBuilds.map((b) => ({
          term: b.title,
          detail: b.subtitle,
          href: `/builds/${b.id}`,
        })),
      },
      {
        kind: "text",
        text: "Also specced 20+ third-party integrations and owned the product scope for agent workflows: use cases, edge cases, and an explicit definition of what counts as working.",
      },
    ],
    sources: [
      { label: "AI writing", href: "/blog" },
      { label: "Builds", href: "/builds" },
    ],
  }),

  writing: () => ({
    id: "writing",
    blocks: [
      {
        kind: "text",
        text: `${postCount} posts on building products: AI, prioritisation, user research, and what went wrong.`,
      },
      {
        kind: "list",
        items: latestPosts.map((p) => ({
          term: p.title,
          detail: p.readTime,
          href: `/blog/${p.slug}`,
        })),
      },
    ],
    sources: [{ label: "All writing", href: "/blog" }],
  }),

  tools: () => ({
    id: "tools",
    blocks: [
      {
        kind: "list",
        items: [
          { term: "Product", detail: "Jira, Monday.com, Aha!, ProductBoard, Craft.io, ClickUp" },
          { term: "Analytics", detail: "Mixpanel, GA4, Segment, Heap, Hotjar, SQL" },
          { term: "AI", detail: "Claude API, MCP, Lovable, Flowise, n8n, Replit, Supabase, Apify" },
          { term: "Design", detail: "Figma, Balsamiq, Whimsical, Sketch, Canva" },
          { term: "Research", detail: "SurveyMonkey, Typeform, UserTesting" },
          { term: "Dev", detail: "GitHub, Postman, Docker, VS Code, AWS" },
        ],
      },
    ],
    sources: [{ label: "Full tool list", href: "/about" }],
  }),

  certifications: () => ({
    id: "certifications",
    blocks: [
      {
        kind: "text",
        text: `${certCount} certifications, in product management, AI, analytics, and product-led growth.`,
      },
      {
        kind: "list",
        items: certifications.slice(0, 4).map((c) => ({
          term: c.title,
          detail: `${c.issuer} · ${c.year}`,
          href: "/certifications",
        })),
      },
    ],
    sources: [{ label: "All certifications", href: "/certifications" }],
  }),

  now: () => ({
    id: "now",
    blocks: [
      {
        kind: "list",
        items: [
          { term: "Building", detail: "A no-code PM platform with AI agents, for PRDs, roadmaps and competitive analysis without filing an engineering ticket." },
          { term: "Learning", detail: "Agent orchestration and multi-step LLM pipelines that stay reliable." },
          { term: "Thinking about", detail: "Which PM skills get more valuable as AI takes the grunt work: taste, judgement, synthesis." },
          { term: "Experimenting with", detail: "Figma and Notion as context sources, wired straight into prompts." },
        ],
      },
    ],
    sources: [{ label: "About", href: "/about" }],
  }),

  contact: () => ({
    id: "contact",
    blocks: [
      {
        kind: "text",
        text: "Open to conversations about product roles, AI product work, or just a good argument about prioritisation.",
      },
      {
        kind: "list",
        items: [
          { term: "Send a note or book a call", detail: "Both on the contact page", href: "/contact" },
          { term: "LinkedIn", detail: "linkedin.com/in/kartik-bhalerao", href: "https://linkedin.com/in/kartik-bhalerao" },
          { term: "GitHub", detail: "github.com/kartikbh6614", href: "https://github.com/kartikbh6614" },
        ],
      },
    ],
    sources: [{ label: "Contact", href: "/contact" }],
  }),

  fintech: () => ({
    id: "fintech",
    blocks: [
      {
        kind: "text",
        text: "Product work across enterprise AI, analytics tooling and a consumer voice product. Open any of these for detail.",
      },
      {
        kind: "list",
        items: [
          { term: "Decision Machine", detail: "Enterprise AI and automation. Reworked how business teams act on AI and ML model scores, turning raw output into a clear next action.", href: "/about" },
          { term: "Consumer tech app", detail: "Founding PM on a consumer voice product. Transcription, mood analysis and voice response chained end to end.", href: "/about" },
          { term: "Ocius", detail: "Analytics tooling and discovery across the customer journey.", href: "/about" },
        ],
      },
    ],
    sources: [{ label: "Builds", href: "/builds" }],
  }),
};

/* ───────────────────────────── matching ─────────────────────────────── */

interface Intent {
  id: keyof typeof ANSWERS;
  /** Distinctive terms. A hit here is strong evidence. */
  strong: string[];
  /** Common words that only corroborate. */
  weak?: string[];
}

/**
 * Ordered narrowest-first. Ties go to whichever is listed earlier, so
 * "any fintech experience" resolves to fintech rather than generic work history.
 */
const INTENTS: Intent[] = [
  {
    id: "fintech",
    strong: ["fintech", "gullak", "payments", "lending", "credit", "savings", "banking"],
    weak: ["finance", "financial", "money"],
  },
  {
    id: "ai",
    strong: ["ai", "llm", "llms", "agent", "agents", "mcp", "claude", "machine learning", "copilot", "co-pilot", "gpt"],
    weak: ["ml", "automation", "model", "models"],
  },
  {
    id: "certifications",
    strong: ["certification", "certifications", "certificate", "certified", "credential", "credentials", "qualification", "qualifications"],
    weak: ["course", "courses"],
  },
  {
    id: "tools",
    strong: ["tools", "stack", "figma", "mixpanel", "jira", "notion", "software", "platforms", "sql"],
    weak: ["tool", "use", "using", "work with"],
  },
  {
    id: "impact",
    strong: ["impact", "results", "metrics", "numbers", "outcome", "outcomes", "retention", "churn", "roi"],
    weak: ["growth", "difference", "result", "moved the needle"],
  },
  {
    id: "writing",
    strong: ["writing", "blog", "blogs", "posts", "articles", "essays", "write", "writes", "written"],
    weak: ["read", "post", "article"],
  },
  {
    id: "builds",
    strong: ["what have you built", "built", "builds", "projects", "project", "case study", "case studies", "shipped", "portfolio", "prd", "prds"],
    weak: ["build", "made", "make", "ship", "shipping"],
  },
  {
    id: "now",
    strong: ["working on", "currently exploring", "these days", "exploring", "whats next", "right now", "up to"],
    weak: ["now", "lately", "learning", "next"],
  },
  {
    id: "contact",
    strong: ["contact", "hire", "hiring", "get in touch", "reach out", "email", "linkedin", "availability", "available", "resume", "cv"],
    weak: ["reach", "call", "connect", "talk", "touch"],
  },
  {
    id: "work",
    strong: ["experience", "current role", "where do you work", "currently work", "decision machine", "ocius", "work history", "employer", "career", "job", "jobs"],
    weak: ["worked", "role", "work", "company"],
  },
  {
    id: "capability",
    strong: ["what can you do", "what do you do", "skills", "skill", "capabilities", "capability", "good at", "strengths", "expertise", "specialise", "specialize"],
    weak: ["able", "strong"],
  },
  {
    id: "who",
    strong: ["who are you", "who is", "introduce", "yourself", "bio", "background", "about him", "about kartik"],
    weak: ["who", "about"],
  },
];

const normalise = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ").trim();

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Whole-word matching, so "know" doesn't match "now" and "about your" doesn't
 * match the phrase "about you".
 */
const hasTerm = (query: string, term: string) =>
  new RegExp(`\\b${escapeRe(term)}\\b`).test(query);

function scoreIntent(query: string, intent: Intent): number {
  let score = 0;
  for (const term of intent.strong) {
    if (hasTerm(query, term)) score += 5;
  }
  for (const term of intent.weak ?? []) {
    if (hasTerm(query, term)) score += 1;
  }
  return score;
}

/* ──────────────────────── retrieval fallback ────────────────────────── */

interface Record_ {
  term: string;
  detail: string;
  href: string;
  haystack: string;
}

const RECORDS: Record_[] = [
  ...caseStudies.map((c) => ({
    term: c.title,
    detail: c.subtitle,
    href: `/builds/${c.id}`,
    haystack: normalise([c.title, c.subtitle, c.overview, c.tags.join(" "), c.tools.join(" ")].join(" ")),
  })),
  ...publishedPosts.map((p) => ({
    term: p.title,
    detail: p.readTime,
    href: `/blog/${p.slug}`,
    haystack: normalise([p.title, p.excerpt, p.category, p.tags.join(" ")].join(" ")),
  })),
  ...certifications.map((c) => ({
    term: c.title,
    detail: `${c.issuer} · ${c.year}`,
    href: "/certifications",
    haystack: normalise([c.title, c.issuer, c.category, c.description, c.skills.join(" ")].join(" ")),
  })),
];

const STOPWORDS = new Set([
  "the", "a", "an", "and", "or", "of", "to", "in", "on", "for", "with", "is", "are",
  "was", "were", "do", "does", "did", "you", "your", "he", "his", "they", "their",
  "what", "which", "how", "why", "when", "where", "who", "can", "any", "about",
  "me", "i", "it", "that", "this", "have", "has", "had", "tell", "show", "give",
]);

function search(query: string, limit = 5): AskItem[] {
  const terms = query.split(" ").filter((t) => t.length > 2 && !STOPWORDS.has(t));
  if (!terms.length) return [];

  return RECORDS.map((r) => {
    let score = 0;
    for (const t of terms) {
      if (r.haystack.includes(t)) score += 1;
      if (normalise(r.term).includes(t)) score += 2;
    }
    return { r, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ r }) => ({ term: r.term, detail: r.detail, href: r.href }));
}

/* ─────────────────────────────── api ────────────────────────────────── */

export const SUGGESTIONS = [
  "What can you do?",
  "What have you built?",
  "What impact did it have?",
  "What are you working on now?",
  "Where do you work?",
  "What do you write about?",
];

export function ask(rawQuery: string): AskAnswer {
  const query = normalise(rawQuery);

  if (!query) return ANSWERS.who();

  let best: { id: keyof typeof ANSWERS; score: number } | null = null;
  for (const intent of INTENTS) {
    const score = scoreIntent(query, intent);
    if (score > 0 && (!best || score > best.score)) best = { id: intent.id, score };
  }

  if (best && best.score >= 5) return ANSWERS[best.id]();

  const hits = search(query);
  if (hits.length) {
    // If the question names something directly (a build, a post), say so plainly
    // rather than apologising for an approximate match.
    const named = normalise(hits[0].term).includes(query);
    return {
      id: "search",
      approximate: !named,
      blocks: [
        {
          kind: "text",
          text: named
            ? "Found this:"
            : "No direct answer for that, but these are the closest things on the site:",
        },
        { kind: "list", items: hits },
      ],
      sources: [
        { label: "Builds", href: "/builds" },
        { label: "Writing", href: "/blog" },
      ],
    };
  }

  // Weak single-keyword match is better than nothing.
  if (best) return ANSWERS[best.id]();

  return {
    id: "miss",
    approximate: true,
    blocks: [
      {
        kind: "text",
        text: "Nothing on the site covers that. This console only answers from what is actually here: experience, builds, writing, tools, and certifications.",
      },
      { kind: "list", items: SUGGESTIONS.slice(0, 4).map((s) => ({ term: s })) },
    ],
    sources: [{ label: "Contact", href: "/contact" }],
  };
}

export const ASK_STATS = { buildCount, postCount, certCount };
