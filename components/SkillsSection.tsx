"use client";

import { useState, useRef, type ReactNode, type KeyboardEvent } from "react";
import {
  Palette,
  Code,
  Calendar,
  PieChart,
  Award,
  ArrowRight,
  Bot,
} from "lucide-react";
// Real brand icons
import {
  SiFigma,
  SiCanva,
  SiSketch,
  SiJira,
  SiNotion,
  SiTrello,
  SiAsana,
  SiLinear,
  SiMixpanel,
  SiGoogleanalytics,
  SiTableau,
  SiHotjar,
  SiOpenai,
  SiAnthropic,
  SiZapier,
  SiGithub,
  SiPostman,
  SiDocker,
  SiAmazonwebservices,
  SiMake,
  SiSlack,
  SiMiro,
  SiZoom,
  SiDiscord,
  SiSupabase,
  SiClickup,
  SiReplit,
  SiTypeform,
  SiSurveymonkey,
  SiHubspot,
  SiWebflow,
  SiIntercom,
  SiMailchimp,
  SiProducthunt,
  SiLinkedin,
} from "react-icons/si";
import { MessageSquare, Users, FileText, Brain, Sparkles, PenTool, Megaphone } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import { Highlighter } from "@/components/magicui/highlighter";

// Text-based logo for brands without an SI icon
const TI = ({ t }: { t: string }) => (
  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-foreground text-background text-[8px] font-black tracking-tighter rounded-sm">
    {t}
  </span>
);
// Heart icon for Lovable
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#EC4899">
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
  </svg>
);

type Tool = {
  name: string;
  description: string;
  color: string;
  whiteBg?: boolean;
  icon: ReactNode;
  tooltip: string;
  whyIUse: string;
  useCases: string[];
};

type Category = { title: string; icon: ReactNode; tools: Tool[] };

/**
 * The tools are a loop, not a logo wall. Each stage names what goes in and what
 * comes out, so the section reads as a process. `key` points at a category in
 * `toolCategories` below; `collaboration` is deliberately not a stage — it runs
 * under all six.
 */
const FLOW: { key: string; phase: string; io: string; note: string }[] = [
  {
    key: "feedback",
    phase: "Listen",
    io: "noise → signal",
    note: "Talk to people before anything gets written down. Surveys for scale, recordings for the parts nobody says out loud.",
  },
  {
    key: "management",
    phase: "Decide",
    io: "signal → bets",
    note: "Turn what I heard into a small number of bets, written plainly enough that someone can argue with them.",
  },
  {
    key: "design",
    phase: "Draw",
    io: "bets → shapes",
    note: "Make the idea concrete enough to be wrong on paper, where being wrong is still cheap.",
  },
  {
    key: "ai",
    phase: "Build",
    io: "shapes → a working thing",
    note: "Prototype it myself. A spec that has survived contact with a running build is a different document.",
  },
  {
    key: "development",
    phase: "Ship",
    io: "a working thing → live",
    note: "Stay close to what actually goes out — the PR, the endpoint, the constraint that moves the date.",
  },
  {
    key: "gtm",
    phase: "Launch",
    io: "live → in front of people",
    note: "Shipped is not launched. Positioning, the page people land on, the email that explains it, and the first week of answering for it.",
  },
  {
    key: "analytics",
    phase: "Measure",
    io: "live → evidence",
    note: "Find out whether the bet paid and where it leaked, in numbers and in recordings of people struggling.",
  },
];

const SUBSTRATE_KEY = "collaboration";

export const SkillsSection = () => {
  const handleCertificationClick = () => {
    window.location.href = "/certifications";
  };
  const toolCategories: Record<string, Category> = {
    management: {
      title: "Product Management",
      icon: <Calendar className="w-4 h-4" />,
      tools: [
        {
          name: "Monday.com",
          description: "Work OS",
          color: "from-[#FF3D57] to-[#6161FF]",
          icon: (
            <svg viewBox="0 0 36 14" className="w-7 h-3.5">
              <circle cx="5" cy="7" r="5" fill="#F62B54"/>
              <circle cx="18" cy="7" r="5" fill="#FFCB00"/>
              <circle cx="31" cy="7" r="5" fill="#00CA72"/>
            </svg>
          ),
          tooltip: "For visual work management and team collaboration",
          whyIUse:
            "Monday.com's visual interface makes complex project management intuitive. I use it to align cross-functional teams and track work across departments.",
          useCases: [
            "Managing product portfolios",
            "Cross-team collaboration",
            "Resource planning and allocation",
            "Executive reporting dashboards",
          ],
        },
        {
          name: "Aha!",
          description: "Roadmaps",
          color: "from-[#0073CF] to-[#00A4E4]",
          icon: <TI t="Aha!" />,
          tooltip: "For strategic roadmapping and product planning",
          whyIUse:
            "Aha! is my go-to for strategic product planning. It connects goals to features and helps communicate the product vision to stakeholders clearly.",
          useCases: [
            "Building strategic roadmaps",
            "Linking features to business goals",
            "Stakeholder presentations",
            "Release planning and tracking",
          ],
        },
        {
          name: "ProductBoard",
          description: "Insights",
          color: "from-[#3B49DF] to-[#7C3AED]",
          icon: <TI t="pb" />,
          tooltip: "For customer-driven product management",
          whyIUse:
            "ProductBoard helps me prioritize features based on real customer feedback. It keeps user insights at the center of every product decision.",
          useCases: [
            "Customer feedback aggregation",
            "Feature prioritization",
            "User insight analysis",
            "Objective-based planning",
          ],
        },
        {
          name: "Craft.io",
          description: "Product",
          color: "from-[#FF6B35] to-[#F7931E]",
          icon: <TI t="C" />,
          tooltip: "For end-to-end product management",
          whyIUse:
            "Craft.io provides a comprehensive product management suite. I use it to align product specs with roadmaps and collaborate with stakeholders.",
          useCases: [
            "PRD creation and management",
            "Capacity planning",
            "Product specs documentation",
            "Stakeholder alignment",
          ],
        },
        {
          name: "ClickUp",
          description: "Productivity",
          color: "from-[#7B68EE] to-[#49CCF9]",
          icon: <SiClickup className="w-5 h-5" />,
          tooltip: "For all-in-one project management",
          whyIUse:
            "ClickUp's flexibility allows me to customize workflows for any team or project. It's my Swiss Army knife for productivity.",
          useCases: ["Sprint management", "Team workload tracking", "Goal and OKR tracking", "Document collaboration"],
        },
      ],
    },
    analytics: {
      title: "Product Analytics",
      icon: <PieChart className="w-4 h-4" />,
      tools: [
        {
          name: "Mixpanel",
          description: "Analytics",
          color: "from-[#7856FF] to-[#A855F7]",
          icon: <SiMixpanel className="w-5 h-5" />,
          tooltip: "For deep user behavior analysis and funnel tracking",
          whyIUse:
            "Mixpanel powers my data-driven decisions. I use it to understand user journeys, identify drop-off points, and measure the impact of product changes on key metrics.",
          useCases: [
            "Analyzing user conversion funnels",
            "Measuring feature adoption rates",
            "Tracking cohort retention",
            "Building custom event-based reports",
          ],
        },
        {
          name: "GA4",
          description: "Web Stats",
          color: "from-[#E37400] to-[#F9AB00]",
          icon: <SiGoogleanalytics className="w-5 h-5" />,
          tooltip: "For comprehensive web analytics and attribution",
          whyIUse:
            "GA4 gives me the full picture of acquisition and user flow. Essential for understanding how users find us and how marketing efforts translate to product engagement.",
          useCases: [
            "Tracking acquisition channels and attribution",
            "Analyzing user flow through the product",
            "Measuring marketing campaign effectiveness",
            "Understanding cross-platform user behavior",
          ],
        },
        {
          name: "Segment",
          description: "CDP",
          color: "from-[#52BD94] to-[#43A879]",
          icon: <TI t="S" />,
          tooltip: "For customer data infrastructure and integration",
          whyIUse:
            "Segment unifies all customer data in one place. It's essential for creating a single source of truth across analytics tools.",
          useCases: [
            "Customer data unification",
            "Event tracking standardization",
            "Tool integration management",
            "Data governance",
          ],
        },
        {
          name: "Heap",
          description: "Auto-Track",
          color: "from-[#5E4AE3] to-[#9B59B6]",
          icon: <TI t="H" />,
          tooltip: "For automatic event tracking and retroactive analysis",
          whyIUse:
            "Heap's automatic event capture means I never miss important user interactions. Perfect for retroactive analysis without upfront instrumentation.",
          useCases: [
            "Retroactive user analysis",
            "Automatic event capture",
            "Funnel optimization",
            "Conversion tracking",
          ],
        },
        {
          name: "Hotjar",
          description: "Heatmaps",
          color: "from-[#FD3A5C] to-[#FF6B35]",
          icon: <SiHotjar className="w-5 h-5" />,
          tooltip: "For understanding user behavior through recordings and heatmaps",
          whyIUse:
            "Hotjar shows me exactly what users do—not just what data says they do. Session recordings and heatmaps reveal usability issues that numbers alone can't capture.",
          useCases: [
            "Identifying UX friction through session recordings",
            "Understanding scroll and click patterns",
            "Gathering qualitative user feedback",
            "Validating design hypotheses",
          ],
        },
      ],
    },
    ai: {
      title: "AI Tools",
      icon: <Bot className="w-4 h-4" />,
      tools: [
        {
          name: "Lovable",
          description: "AI Dev",
          color: "from-[#8B5CF6] to-[#EC4899]",
          icon: <HeartIcon />,
          tooltip: "For AI-powered app development",
          whyIUse:
            "Lovable transforms ideas into working applications. I use it to rapidly prototype and build full-stack apps with AI assistance.",
          useCases: [
            "Rapid prototyping",
            "Building MVPs quickly",
            "Creating internal tools",
            "AI-assisted development",
          ],
        },
        {
          name: "Flowise",
          description: "AI Flows",
          color: "from-[#3B82F6] to-[#06B6D4]",
          icon: <TI t="F" />,
          tooltip: "For building LLM apps visually",
          whyIUse:
            "Flowise makes building AI workflows visual and intuitive. Perfect for creating custom AI agents and chatbots without complex coding.",
          useCases: [
            "Building custom AI chatbots",
            "Creating RAG applications",
            "Designing LLM workflows",
            "AI automation pipelines",
          ],
        },
        {
          name: "Replit",
          description: "Code AI",
          color: "from-[#F26207] to-[#FB8C00]",
          icon: <SiReplit className="w-5 h-5" />,
          tooltip: "For collaborative AI-assisted coding",
          whyIUse:
            "Replit's AI features accelerate coding and prototyping. It's my go-to for quick experiments and collaborative development.",
          useCases: ["Quick code prototypes", "Collaborative coding", "AI-assisted development", "Instant deployment"],
        },
        {
          name: "Supabase",
          description: "Backend",
          color: "from-[#3ECF8E] to-[#10B981]",
          icon: <SiSupabase className="w-5 h-5" />,
          tooltip: "For instant backend and database",
          whyIUse:
            "Supabase provides everything I need for a backend—database, auth, storage, and more. It accelerates product development significantly.",
          useCases: ["Database management", "User authentication", "Real-time subscriptions", "File storage"],
        },
        {
          name: "n8n",
          description: "Automation",
          color: "from-[#EA4B71] to-[#FF6D3B]",
          whiteBg: true,
          icon: <img src="/logos/n8n.svg" alt="n8n" className="w-5 h-5 object-contain" />,
          tooltip: "For powerful workflow automation",
          whyIUse:
            "n8n lets me build powerful automated workflows connecting any tool or API. I use it to automate repetitive PM tasks and build AI-powered pipelines without writing heavy code.",
          useCases: ["Workflow automation", "AI agent pipelines", "API integrations", "Data sync between tools"],
        },
        {
          name: "Apify",
          description: "Web Scraping",
          color: "from-[#1A7F4B] to-[#34D399]",
          whiteBg: true,
          icon: <img src="/logos/apify.png" alt="Apify" className="w-5 h-5 object-contain" />,
          tooltip: "For web scraping and data extraction",
          whyIUse:
            "Apify is my go-to for extracting structured data from the web at scale. I use it for competitive research, market analysis, and feeding real data into AI workflows.",
          useCases: ["Competitor research", "Market data extraction", "Automated web monitoring", "AI data pipelines"],
        },
      ],
    },
    collaboration: {
      title: "Collaboration & Productivity",
      icon: <Users className="w-4 h-4" />,
      tools: [
        {
          name: "Slack",
          description: "Messaging",
          color: "from-[#4A154B] to-[#36C5F0]",
          icon: <SiSlack className="w-5 h-5" />,
          tooltip: "For team communication and collaboration",
          whyIUse:
            "Slack is the central hub for all team communication. I use it to coordinate with cross-functional teams and keep everyone aligned.",
          useCases: [
            "Team communication",
            "Cross-functional coordination",
            "Integration with PM tools",
            "Quick decision making",
          ],
        },
        {
          name: "Miro",
          description: "Whiteboard",
          color: "from-[#FFD02F] to-[#F7931E]",
          icon: <SiMiro className="w-5 h-5" />,
          tooltip: "For visual collaboration and brainstorming",
          whyIUse:
            "Miro transforms remote collaboration. I use it for workshops, brainstorming sessions, and visualizing complex product concepts.",
          useCases: ["Product workshops", "User journey mapping", "Brainstorming sessions", "Sprint retrospectives"],
        },
        {
          name: "Zoom",
          description: "Video",
          color: "from-[#2D8CFF] to-[#0B5CFF]",
          icon: <SiZoom className="w-5 h-5" />,
          tooltip: "For video meetings and presentations",
          whyIUse:
            "Zoom enables effective remote meetings and user research sessions. Essential for stakeholder presentations and team syncs.",
          useCases: ["Stakeholder presentations", "User research interviews", "Team standups", "Remote workshops"],
        },
        {
          name: "Discord",
          description: "Community",
          color: "from-[#5865F2] to-[#7289DA]",
          icon: <SiDiscord className="w-5 h-5" />,
          tooltip: "For community engagement and async communication",
          whyIUse: "Discord helps me stay connected with product communities and gather user feedback in real-time.",
          useCases: ["Community management", "User feedback collection", "Beta user engagement", "Real-time support"],
        },
      ],
    },
    design: {
      title: "Design & Wireframing",
      icon: <Palette className="w-4 h-4" />,
      tools: [
        {
          name: "Figma",
          description: "UI/UX Design",
          color: "from-[#F24E1E] to-[#A259FF]",
          icon: <SiFigma className="w-5 h-5" />,
          tooltip: "My go-to design tool for creating high-fidelity mockups and interactive prototypes",
          whyIUse:
            "Figma's real-time collaboration is unmatched. I use it daily to work seamlessly with designers, iterate on user flows, and build comprehensive design systems that scale across products.",
          useCases: [
            "Creating user flows and wireframes for product specs",
            "Collaborating with design teams on UI iterations",
            "Building and maintaining component libraries",
            "Prototyping for user testing sessions",
          ],
        },
        {
          name: "Balsamiq",
          description: "Wireframes",
          color: "from-[#CC0000] to-[#FF6666]",
          icon: <TI t="B" />,
          tooltip: "For rapid low-fidelity wireframing",
          whyIUse:
            "Balsamiq's sketch-style wireframes keep focus on functionality over aesthetics. Perfect for early-stage product discovery.",
          useCases: [
            "Low-fidelity wireframing",
            "Quick concept sketches",
            "Early stakeholder feedback",
            "Feature exploration",
          ],
        },
        {
          name: "Whimsical",
          description: "Diagrams",
          color: "from-[#7C3AED] to-[#A78BFA]",
          icon: <TI t="W" />,
          tooltip: "For flowcharts and mind maps",
          whyIUse:
            "Whimsical makes creating flowcharts and mind maps beautiful and easy. Great for documenting user flows and system architecture.",
          useCases: ["User flow diagrams", "Mind mapping", "Information architecture", "Process documentation"],
        },
        {
          name: "Sketch",
          description: "Interface",
          color: "from-[#FDB300] to-[#EA6C00]",
          icon: <SiSketch className="w-5 h-5" />,
          tooltip: "For detailed UI design and icon creation",
          whyIUse:
            "Sketch remains powerful for pixel-perfect UI work. I use it for legacy projects and when working with teams already invested in the Sketch ecosystem.",
          useCases: [
            "Maintaining design consistency in existing projects",
            "Creating detailed icon sets and UI elements",
            "Working with design teams using Sketch workflows",
            "Exporting assets for development",
          ],
        },
        {
          name: "Canva",
          description: "Graphics",
          color: "from-[#00C4CC] to-[#7D2AE8]",
          icon: <SiCanva className="w-5 h-5" />,
          tooltip: "For quick presentations and marketing visuals",
          whyIUse:
            "When I need to create polished presentations or marketing materials fast, Canva is my secret weapon. It's perfect for non-design tasks that still need to look professional.",
          useCases: [
            "Creating product launch presentations",
            "Designing social media content for product updates",
            "Building quick visual reports for stakeholders",
            "Making infographics for product documentation",
          ],
        },
      ],
    },
    feedback: {
      title: "Customer Feedback & Surveys",
      icon: <MessageSquare className="w-4 h-4" />,
      tools: [
        {
          name: "SurveyMonkey",
          description: "Surveys",
          color: "from-[#00BF6F] to-[#00A15F]",
          icon: <SiSurveymonkey className="w-5 h-5" />,
          tooltip: "For creating and analyzing surveys",
          whyIUse:
            "SurveyMonkey helps me gather structured user feedback at scale. Essential for NPS tracking and customer satisfaction research.",
          useCases: ["NPS surveys", "Customer satisfaction research", "Feature preference surveys", "Market research"],
        },
        {
          name: "Typeform",
          description: "Forms",
          color: "from-[#262627] to-[#4B4B4B]",
          icon: <SiTypeform className="w-5 h-5" />,
          tooltip: "For beautiful conversational forms",
          whyIUse:
            "Typeform creates engaging survey experiences that boost response rates. Perfect for user research and feedback collection.",
          useCases: [
            "User research interviews",
            "Onboarding feedback",
            "Product feedback collection",
            "Lead qualification",
          ],
        },
        {
          name: "UserTesting",
          description: "UX Research",
          color: "from-[#34A853] to-[#0F9D58]",
          icon: <TI t="UT" />,
          tooltip: "For remote usability testing",
          whyIUse:
            "UserTesting provides rapid access to real users for feedback. It accelerates the validation process significantly.",
          useCases: ["Usability testing", "Prototype validation", "Competitor analysis", "User interview recruitment"],
        },
      ],
    },
    development: {
      title: "Dev Tools",
      icon: <Code className="w-4 h-4" />,
      tools: [
        {
          name: "GitHub",
          description: "Code",
          color: "from-[#24292F] to-[#57606A]",
          icon: <SiGithub className="w-5 h-5" />,
          tooltip: "For code collaboration and version tracking",
          whyIUse:
            "GitHub keeps me connected to what's actually shipping. I use it to review PRs, track technical progress, and understand implementation details that inform product decisions.",
          useCases: [
            "Reviewing feature implementations",
            "Tracking development progress",
            "Managing product documentation in repos",
            "Understanding technical constraints",
          ],
        },
        {
          name: "Postman",
          description: "API",
          color: "from-[#FF6C37] to-[#FF9E2C]",
          icon: <SiPostman className="w-5 h-5" />,
          tooltip: "For API testing and documentation",
          whyIUse:
            "Postman helps me speak the same language as developers. I use it to understand APIs, test integrations, and ensure product specs align with technical reality.",
          useCases: [
            "Testing API endpoints during development",
            "Documenting API requirements",
            "Validating integration specifications",
            "Debugging product issues",
          ],
        },
        {
          name: "Docker",
          description: "Container",
          color: "from-[#2496ED] to-[#0DB7ED]",
          icon: <SiDocker className="w-5 h-5" />,
          tooltip: "For understanding containerized environments",
          whyIUse:
            "Understanding Docker helps me collaborate effectively with engineering on deployment and infrastructure decisions that impact product delivery timelines.",
          useCases: [
            "Understanding deployment processes",
            "Testing local development environments",
            "Discussing infrastructure with DevOps",
            "Ensuring consistent environments",
          ],
        },
        {
          name: "VS Code",
          description: "Editor",
          color: "from-[#007ACC] to-[#0098FF]",
          icon: <VscVscode className="w-5 h-5" />,
          tooltip: "For code exploration and quick edits",
          whyIUse:
            "VS Code lets me dive into codebases when needed. Whether it's updating documentation, reviewing implementations, or making quick fixes—it keeps me technically capable.",
          useCases: [
            "Exploring codebase for product context",
            "Editing product documentation",
            "Making minor configuration changes",
            "Understanding technical implementations",
          ],
        },
        {
          name: "AWS",
          description: "Cloud",
          color: "from-[#FF9900] to-[#FFB84D]",
          icon: <SiAmazonwebservices className="w-5 h-5" />,
          tooltip: "For understanding cloud infrastructure",
          whyIUse:
            "AWS knowledge helps me have informed discussions about scalability, costs, and technical feasibility. It bridges the gap between product vision and infrastructure reality.",
          useCases: [
            "Understanding infrastructure costs",
            "Discussing scalability with engineering",
            "Evaluating technical feasibility",
            "Planning for product scaling",
          ],
        },
      ],
    },
    gtm: {
      title: "Go-to-Market",
      icon: <Megaphone className="w-4 h-4" />,
      tools: [
        {
          name: "HubSpot",
          description: "CRM",
          color: "from-[#FF7A59] to-[#FF9A76]",
          icon: <SiHubspot className="w-5 h-5" />,
          tooltip: "For seeing what happens to a launch after the announcement",
          whyIUse:
            "HubSpot is where a launch stops being a feature and becomes a pipeline. I use it to follow signups through to conversations, and to see which messaging actually moves someone forward.",
          useCases: [
            "Tracking launch signups through the funnel",
            "Lifecycle email and nurture sequences",
            "Feeding sales conversations back into the roadmap",
            "Measuring which positioning converts",
          ],
        },
        {
          name: "Webflow",
          description: "Landing Pages",
          color: "from-[#4353FF] to-[#146EF5]",
          icon: <SiWebflow className="w-5 h-5" />,
          tooltip: "For shipping the launch page without booking an engineer",
          whyIUse:
            "Webflow lets me put a real page in front of people the same week. I use it to test positioning and headlines before any of it gets baked into the product.",
          useCases: [
            "Building and iterating launch pages",
            "Testing positioning and headlines",
            "Standing up waitlists quickly",
            "Shipping marketing changes without a deploy",
          ],
        },
        {
          name: "Intercom",
          description: "Onboarding",
          color: "from-[#1F8DED] to-[#5FB3F5]",
          icon: <SiIntercom className="w-5 h-5" />,
          tooltip: "For meeting people inside the product on launch week",
          whyIUse:
            "Intercom is where the launch meets the person using it — announcements in-product, onboarding tours, and the support thread that tells me what the copy failed to explain.",
          useCases: [
            "In-product announcements for new features",
            "Onboarding flows and product tours",
            "Reading support threads for launch friction",
            "Talking to users the week something ships",
          ],
        },
        {
          name: "Mailchimp",
          description: "Launch Email",
          color: "from-[#FFE01B] to-[#FFC800]",
          icon: <SiMailchimp className="w-5 h-5" />,
          tooltip: "For the email that explains what changed and why it matters",
          whyIUse:
            "Mailchimp handles the announcement itself. Writing the launch email is also the sharpest test of positioning — if it cannot be said in one paragraph, the feature is not clear yet.",
          useCases: [
            "Launch and release announcements",
            "Segmented sends by user behaviour",
            "A/B testing subject lines and framing",
            "Re-engaging users who never tried the feature",
          ],
        },
        {
          name: "Product Hunt",
          description: "Launch Day",
          color: "from-[#DA552F] to-[#FF6154]",
          icon: <SiProducthunt className="w-5 h-5" />,
          tooltip: "For launch day and the feedback that arrives with it",
          whyIUse:
            "Product Hunt is a brutal one-day test of whether the pitch lands with strangers. The comments are unfiltered first-impression research you cannot buy.",
          useCases: [
            "Running launch day for a new product",
            "Testing the one-line pitch on strangers",
            "Collecting first-impression feedback",
            "Finding early adopters and beta users",
          ],
        },
        {
          name: "LinkedIn",
          description: "Distribution",
          color: "from-[#0A66C2] to-[#378FE9]",
          icon: <SiLinkedin className="w-5 h-5" />,
          tooltip: "For getting the work in front of the people it is built for",
          whyIUse:
            "Most B2B launches live or die on distribution. LinkedIn is where I write about what shipped, what it is for, and what I learned building it.",
          useCases: [
            "Announcing what shipped and why",
            "Writing up build and launch learnings",
            "Reaching the buyers a B2B product needs",
            "Recruiting people into early access",
          ],
        },
      ],
    },
  };
  const categories = Object.entries(toolCategories);
  const totalTools = categories.reduce((n, [, c]) => n + c.tools.length, 0);

  const stages = FLOW.filter((stage) => Boolean(toolCategories[stage.key])).map(
    (stage) => ({ ...stage, category: toolCategories[stage.key] }),
  );
  const substrate = toolCategories[SUBSTRATE_KEY];

  const [active, setActive] = useState(0);
  // The one line under the panel, swapped on hover. Null = the resting copy.
  const [hint, setHint] = useState<Tool | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const stage = stages[active];

  const select = (i: number) => {
    setActive(i);
    setHint(null);
  };

  // Roving focus, the way a tablist is expected to behave.
  const onTabKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const n = stages.length;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  // Keyed per stage so switching stages remounts the tiles, which is what
  // replays the entrance. `now-in` is the same rise the hero ticker uses.
  const toolTile = (tool: Tool, i: number, prefix: string, offsetMs = 0) => (
    <div
      key={`${prefix}-${tool.name}`}
      title={tool.tooltip}
      onMouseEnter={() => setHint(tool)}
      onMouseLeave={() => setHint((h) => (h?.name === tool.name ? null : h))}
      style={{ animationDelay: `${offsetMs + i * 55}ms` }}
      className="now-in group/tool bg-background flex-1 basis-[49%] sm:basis-[32%] lg:basis-0 min-w-0 flex flex-col justify-center gap-2 px-3.5 py-4 hover:bg-primary/[0.055] transition-colors duration-200"
    >
      <span className="w-[22px] h-[22px] flex items-center justify-center [&>svg]:w-[22px] [&>svg]:h-[22px] [&>img]:w-[22px] [&>img]:h-[22px] [&>span]:w-[22px] [&>span]:h-[22px] group-hover/tool:scale-110 transition-transform duration-200">
        {tool.icon}
      </span>
      <span className="text-[13px] text-foreground/80 group-hover/tool:text-foreground transition-colors leading-tight">
        {tool.name}
      </span>
      <span className="data-mono text-[10px] text-muted-foreground/55 leading-tight">
        {tool.description}
      </span>
    </div>
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-end justify-between flex-wrap gap-5 mb-9">
        <div className="min-w-0">
          <h2
            className="heading-display text-foreground leading-[1.04]"
            style={{ fontSize: "clamp(28px, 4.2vw, 50px)" }}
          >
            What I reach for
          </h2>
          <p className="text-[15.5px] sm:text-[16.5px] text-muted-foreground leading-[1.6] max-w-[60ch] mt-4">
            <Highlighter action="highlight" color="#fbe7a1" padding={3}>
              Not a logo wall.
            </Highlighter>{" "}
            These are the stages a product actually moves through for me, and
            what I run each one on. Pick a stage.
          </p>
        </div>
        <div className="flex items-center gap-6 shrink-0">
          <span className="data-mono text-[11px] text-muted-foreground">
            {totalTools} tools · {stages.length} stages
          </span>
          <button
            onClick={handleCertificationClick}
            className="label-mono inline-flex items-center gap-2 text-[10px] text-foreground hover:text-primary transition-colors duration-200 border-b border-primary pb-1"
          >
            <Award className="w-3 h-3" />
            Certifications
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* The stepper */}
      <div
        role="tablist"
        aria-label="Stages of how I work"
        onKeyDown={onTabKeyDown}
        className="flex flex-wrap gap-px bg-border border-x border-t border-border"
      >
        {stages.map((s, i) => {
          const on = i === active;
          return (
            <button
              key={s.key}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`stage-tab-${s.key}`}
              aria-selected={on}
              aria-controls="stage-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => select(i)}
              className="group relative bg-background flex-1 basis-[49%] sm:basis-[32%] lg:basis-[13%] min-w-0 flex items-center gap-3 px-3.5 py-4 text-left transition-colors duration-200 hover:bg-foreground/[0.028]"
            >
              {on && (
                <span
                  className="absolute inset-0 bg-primary/[0.055]"
                  aria-hidden="true"
                />
              )}
              <span
                className={`relative w-[26px] h-[26px] shrink-0 flex items-center justify-center border data-mono text-[10px] transition-colors duration-200 ${
                  on
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground/70 group-hover:border-primary/50 group-hover:text-primary"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative min-w-0">
                <span
                  className={`label-mono block text-[10px] transition-colors duration-200 ${
                    on ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.phase}
                </span>
                <span className="data-mono block lg:hidden xl:block text-[10px] text-muted-foreground/50 mt-1 truncate">
                  {s.io}
                </span>
              </span>
              {on && (
                <span
                  className="absolute left-0 right-0 -bottom-px h-[2px] bg-primary"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* The panel for the selected stage */}
      <div
        role="tabpanel"
        id="stage-panel"
        aria-labelledby={`stage-tab-${stage.key}`}
        className="border border-border"
      >
        <div key={stage.key}>
          <div className="now-in flex items-baseline justify-between gap-4 flex-wrap px-4 sm:px-6 pt-6">
            <div className="flex items-baseline gap-4">
              <span className="data-mono text-[11px] text-primary">
                {String(active + 1).padStart(2, "0")}
              </span>
              <h3
                className="heading-display text-foreground leading-none"
                style={{ fontSize: "clamp(23px, 2.6vw, 34px)" }}
              >
                {stage.phase}
              </h3>
            </div>
            <span className="data-mono text-[11.5px] text-primary/85">
              {stage.io}
            </span>
          </div>

          <div
            className="now-in flex items-end justify-between gap-6 flex-wrap px-4 sm:px-6 pt-3 pb-5"
            style={{ animationDelay: "70ms" }}
          >
            <p className="text-[14.5px] sm:text-[15.5px] text-muted-foreground leading-[1.6] max-w-[58ch]">
              {stage.note}
            </p>
            <span className="label-mono text-[9.5px] text-muted-foreground/50">
              {stage.category.title} ·{" "}
              {String(stage.category.tools.length).padStart(2, "0")}
            </span>
          </div>

          <div className="px-4 sm:px-6 pb-5">
            <div className="flex flex-wrap gap-px bg-border border border-border sm:min-h-[207px] lg:min-h-[104px]">
              {stage.category.tools.map((tool, i) => toolTile(tool, i, stage.key, 140))}
            </div>
          </div>
        </div>

        {/* Hover reveals why a tool is in this stage */}
        <div className="border-t border-border px-4 sm:px-6 py-3.5 flex items-start gap-3 min-h-[48px]">
          <span className="data-mono text-[11px] text-primary shrink-0 leading-[1.5]" aria-hidden="true">
            &#8594;
          </span>
          <p className="text-[13.5px] leading-[1.5] text-muted-foreground" aria-live="polite">
            {hint ? (
              <>
                <span className="text-foreground">{hint.name}</span> — {hint.tooltip}
              </>
            ) : (
              <span className="text-muted-foreground/60">
                Hover a tool for what it is doing in this stage.
              </span>
            )}
          </p>
        </div>
      </div>

      {/* The loop closes */}
      <div className="flex items-center gap-3 mt-4">
        <span className="data-mono text-[12px] text-primary" aria-hidden="true">
          &#8630;
        </span>
        <p className="text-[13.5px] text-muted-foreground">
          Measure is not the end. What the numbers cannot explain becomes the
          next round of questions, and it starts again at{" "}
          <button
            onClick={() => select(0)}
            className="data-mono text-[12px] text-primary border-b border-primary/40 hover:border-primary transition-colors"
          >
            01 Listen
          </button>
          .
        </p>
      </div>

      {/* The layer under every stage */}
      {substrate && (
        <div className="mt-10 border border-border">
          <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-border">
            <p className="label-mono text-[10px] text-muted-foreground flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-primary" aria-hidden="true" />
              Loaded at every stage · {substrate.title}
            </p>
            <span className="data-mono text-[11px] text-muted-foreground/50">
              {String(substrate.tools.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-wrap gap-px bg-border">
            {substrate.tools.map((tool, i) => toolTile(tool, i, "substrate"))}
          </div>
        </div>
      )}
    </div>
  );
};
