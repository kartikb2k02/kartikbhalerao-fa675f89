import { useState, useEffect, useRef } from "react";
import {
  Target,
  BarChart3,
  Palette,
  Code,
  Calendar,
  PieChart,
  Zap,
  Award,
  ArrowRight,
  Star,
  CheckCircle2,
  Layers,
  Bot,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  SiN8N,
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
} from "react-icons/si";
import { MessageSquare, Users, FileText, Brain, Sparkles, PenTool } from "lucide-react";
import { VscVscode } from "react-icons/vsc";

// Counter animation hook
const useCountUp = (end: number, isVisible: boolean, duration: number = 1500, delay: number = 0) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }
    const startTime = Date.now() + delay;
    let animationFrame: number;
    const animate = () => {
      const now = Date.now();
      if (now < startTime) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.round(easeOutQuart * end);
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, isVisible, duration, delay]);
  return count;
};

// Animated counter component
const AnimatedCounter = ({
  value,
  isVisible,
  delay = 0,
  className,
}: {
  value: number;
  isVisible: boolean;
  delay?: number;
  className?: string;
}) => {
  const count = useCountUp(value, isVisible, 1200, delay);
  return <span className={className}>{count}%</span>;
};
export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("strategy");
  const [capsuleStyle, setCapsuleStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<{
    name: string;
    description: string;
    color: string;
    icon: React.ReactNode;
    tooltip: string;
    categoryTitle: string;
    whyIUse: string;
    useCases: string[];
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Reset animation when category changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Measure capsule position on active category change + initial mount
  useEffect(() => {
    const measure = () => {
      const idx = skillCategories.findIndex((c) => c.id === activeCategory);
      const btn = tabRefs.current[idx];
      if (btn) {
        setCapsuleStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
      }
    };
    measure();
    // Re-measure after fonts/layout settle
    const t = setTimeout(measure, 50);
    return () => clearTimeout(t);
  }, [activeCategory]);

  // Intersection Observer for skill bars animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleCertificationClick = () => {
    window.location.href = "/certifications";
  };
  const skillCategories = [
    {
      id: "strategy",
      title: "Product Strategy",
      shortTitle: "Strategy",
      description: "Finding what's worth building — before writing a single line of spec",
      icon: <Target className="w-5 h-5" />,
      skills: [
        {
          name: "Product Discovery",
          level: 95,
          tooltip: "Sitting with real user problems, not assumptions — figuring out what's actually worth solving",
        },
        {
          name: "Market Research",
          level: 90,
          tooltip: "Reading the landscape to understand who's winning, why, and where the gap is",
        },
        {
          name: "Competitive Analysis",
          level: 88,
          tooltip: "Studying competitors not to copy them, but to find the angle they missed",
        },
        {
          name: "Product Roadmap",
          level: 92,
          tooltip: "Turning messy priorities into a plan that both engineering and leadership can trust",
        },
        {
          name: "Go-to-Market",
          level: 85,
          tooltip: "Coordinating the launch — positioning, timing, and making sure every team is ready",
        },
        {
          name: "MVP Development",
          level: 94,
          tooltip: "Shipping the smallest thing that teaches you the most, as fast as possible",
        },
      ],
      color: "from-blue-500 to-indigo-600",
      lightColor: "from-blue-400 to-indigo-500",
      bgGlow: "bg-blue-500/20",
      textColor: "text-blue-500",
    },
    {
      id: "Product Analytics",
      title: "Data & Analytics",
      shortTitle: "Analytics",
      description: "Reading between the numbers to understand what users are actually doing",
      icon: <BarChart3 className="w-5 h-5" />,
      skills: [
        {
          name: "User Analytics",
          level: 92,
          tooltip: "Watching how users actually move through the product — not guessing at it",
        },
        {
          name: "A/B Testing",
          level: 88,
          tooltip: "Running clean experiments that give you a real answer, not a convenient one",
        },
        {
          name: "KPI Tracking",
          level: 90,
          tooltip: "Knowing which numbers actually matter and ignoring the ones that just look good",
        },
        {
          name: "Data Visualization",
          level: 85,
          tooltip: "Making data readable for people who aren't staring at dashboards all day",
        },
        {
          name: "Performance Metrics",
          level: 87,
          tooltip: "Setting the right goalposts before shipping, not scrambling to define them after",
        },
        {
          name: "Conversion Optimization",
          level: 86,
          tooltip: "Removing friction users hit before they even realize something is slowing them down",
        },
      ],
      color: "from-emerald-500 to-teal-600",
      lightColor: "from-emerald-400 to-teal-500",
      bgGlow: "bg-emerald-500/20",
      textColor: "text-emerald-500",
    },
    {
      id: "ux",
      title: "User Experience",
      shortTitle: "UX Design",
      description: "Bridging the gap between what users need and what actually gets built",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        {
          name: "User Research",
          level: 90,
          tooltip: "Actually talking to users — not assuming I already know what they think",
        },
        {
          name: "Journey Mapping",
          level: 88,
          tooltip: "Mapping the full experience end-to-end to find exactly where it breaks down",
        },
        {
          name: "Wireframing",
          level: 92,
          tooltip: "Sketching ideas fast enough to kill the bad ones before they get coded",
        },
        {
          name: "Usability Testing",
          level: 85,
          tooltip: "Watching people use the product and resisting the urge to explain it to them",
        },
        {
          name: "Design Systems",
          level: 83,
          tooltip: "Building consistency so the team stops reinventing the same components twice",
        },
        {
          name: "Accessibility",
          level: 80,
          tooltip: "Making sure the product works for people outside the core assumption",
        },
      ],
      color: "from-purple-500 to-pink-600",
      lightColor: "from-purple-400 to-pink-500",
      bgGlow: "bg-purple-500/20",
      textColor: "text-purple-500",
    },
    {
      id: "technical",
      title: "Technical Leadership",
      shortTitle: "Technical",
      description: "Knowing enough to collaborate well with engineering — not pretend to be one",
      icon: <Code className="w-5 h-5" />,
      skills: [
        {
          name: "Agile/Scrum",
          level: 94,
          tooltip: "Running sprints that actually move things forward, not just fill up a board",
        },
        {
          name: "API Design",
          level: 82,
          tooltip: "Understanding what goes in and out of the system well enough to spec it clearly",
        },
        {
          name: "Database Basics",
          level: 78,
          tooltip: "Knowing how data is stored so I can ask engineering the right questions",
        },
        {
          name: "Tech Documentation",
          level: 88,
          tooltip: "Writing specs that developers can actually build from without a follow-up meeting",
        },
        {
          name: "System Architecture",
          level: 75,
          tooltip: "Understanding how the pieces connect so I don't spec something impossible",
        },
        {
          name: "DevOps Basics",
          level: 72,
          tooltip: "Knowing what deployment looks like so I don't promise timelines that aren't real",
        },
      ],
      color: "from-orange-500 to-red-600",
      lightColor: "from-orange-400 to-red-500",
      bgGlow: "bg-orange-500/20",
      textColor: "text-orange-500",
    },
  ];
  // Text-based logo for brands without an SI icon
  const TI = ({ t }: { t: string }) => (
    <span className="font-black text-white text-xs tracking-tighter leading-none">{t}</span>
  );
  // Heart icon for Lovable
  const HeartIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
    </svg>
  );
  const toolCategories = {
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
  };
  const currentCategory = skillCategories.find((c) => c.id === activeCategory);
  return (
    <div className="w-full">
      <section className="relative pb-16">

        {/* Hero Section */}
        <div className="text-center mb-16">

          {/* Eyebrow label — mirrors homepage role tag */}
          <div className="inline-flex items-center gap-5 mb-7">
            <span className="w-14 h-[1.5px] bg-gradient-to-r from-transparent to-black/25 dark:to-white/25" />
            <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">
              PM Toolkit
            </span>
            <span className="w-14 h-[1.5px] bg-gradient-to-l from-transparent to-black/25 dark:to-white/25" />
          </div>

          {/* Title */}
          <h1 className="text-[52px] sm:text-[68px] lg:text-[82px] font-black leading-[0.92] tracking-tight text-black dark:text-white mb-6">
            Skills &amp; Expertise
          </h1>

          {/* Tagline */}
          <p className="text-[17px] text-black/42 dark:text-white/42 max-w-[420px] mx-auto leading-[1.9] tracking-[-0.01em] mb-8">
            Product thinking across the full lifecycle —{" "}
            <span className="text-black/75 dark:text-white/75 font-semibold italic">discovery</span> to{" "}
            <span className="text-black/75 dark:text-white/75 font-semibold italic">delivery</span>.
          </p>

          {/* Certifications CTA */}
          <button
            onClick={handleCertificationClick}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-semibold rounded-xl bg-black dark:bg-white text-white dark:text-black shadow-sm hover:shadow-md hover:opacity-80 transition-all duration-200"
          >
            <Award className="w-4 h-4" />
            View Certifications
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Skills Section */}
        <div className="mb-20">

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {skillCategories.map((category, idx) => (
              <button
                key={category.id}
                ref={(el) => { tabRefs.current[idx] = el; }}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200",
                  activeCategory === category.id
                    ? "bg-black dark:bg-white text-white dark:text-black shadow-sm scale-[1.03]"
                    : "bg-white dark:bg-white/5 border border-black/8 dark:border-white/10 text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20",
                )}
              >
                <span className={cn(
                  "transition-colors duration-200",
                  activeCategory === category.id ? "text-white dark:text-black" : "text-black/40 dark:text-white/40"
                )}>
                  {category.icon}
                </span>
                {category.shortTitle}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          {currentCategory && (
            <div ref={skillsRef}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <div className={cn("p-2 rounded-lg bg-gradient-to-br text-white", currentCategory.color)}>
                  {currentCategory.icon}
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white text-base leading-tight">{currentCategory.title}</p>
                  <p className="text-xs text-black/40 dark:text-white/40">{currentCategory.description}</p>
                </div>
              </div>

              {/* Cards Grid */}
              <TooltipProvider delayDuration={150}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {currentCategory.skills.map((skill, i) => {
                    return (
                      <Tooltip key={i}>
                        <TooltipTrigger asChild>
                          <div
                            className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-white/5 p-6 cursor-default overflow-hidden"
                            style={{
                              boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? "translateY(0)" : "translateY(14px)",
                              transition: `opacity 0.35s ease ${i * 55}ms, transform 0.35s ease ${i * 55}ms, box-shadow 0.3s ease`,
                            }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)")}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)")}
                          >
                            {/* Gradient wash — top-right corner */}
                            <div className={cn(
                              "absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-300",
                              currentCategory.color,
                            )} />

                            {/* Skill name + description */}
                            <div className="relative">
                              <p className="text-[17px] font-black text-black dark:text-white leading-tight tracking-tight mb-2">
                                {skill.name}
                              </p>
                              <p className="text-[12px] text-black/38 dark:text-white/38 leading-relaxed line-clamp-2">
                                {skill.tooltip}
                              </p>
                            </div>
                          </div>
                        </TooltipTrigger>
                      </Tooltip>
                    );
                  })}
                </div>
              </TooltipProvider>
            </div>
          )}
        </div>

        {/* Tools & Platforms Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20 px-5 py-2 rounded-full border border-amber-200/50 dark:border-amber-700/50 mb-4">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="font-semibold text-sm text-amber-700 dark:text-amber-400">Powerful Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">Tools & Platforms</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              Modern tools for exceptional product outcomes
            </p>
          </div>

          {/* Tools Grid by Category */}
          <div className="space-y-10">
            {Object.entries(toolCategories).map(([key, category]) => (
              <div key={key}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 dark:text-slate-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {category.title}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                  <span className="text-xs text-slate-400 dark:text-slate-600">{category.tools.length} tools</span>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center text-center gap-3 bg-white dark:bg-white/5 rounded-xl p-5 cursor-pointer overflow-hidden transition-all duration-250"
                      style={{
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                      }}
                      onMouseEnter={e => {
                        setHoveredTool(tool.name);
                        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)";
                        e.currentTarget.style.transform = "translateY(-3px)";
                      }}
                      onMouseLeave={e => {
                        setHoveredTool(null);
                        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      onClick={() => setSelectedTool({ ...tool, categoryTitle: category.title })}
                    >
                      {/* Brand glow on hover */}
                      <div className={cn(
                        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                        `bg-gradient-to-br ${tool.color}`,
                      )} style={{ opacity: hoveredTool === tool.name ? 0.05 : 0 }} />

                      {/* Icon */}
                      <div className={cn(
                        "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                        tool.color,
                      )}>
                        <div className="text-white [&>svg]:w-6 [&>svg]:h-6">{tool.icon}</div>
                      </div>

                      {/* Name */}
                      <div>
                        <p className="text-[13px] font-bold text-black dark:text-white leading-tight">
                          {tool.name}
                        </p>
                        <p className="text-[11px] text-black/35 dark:text-white/35 mt-0.5">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tool Detail Dialog - Enhanced Interactive Design */}
          <Dialog open={!!selectedTool} onOpenChange={(open) => !open && setSelectedTool(null)}>
            <DialogContent className="sm:max-w-lg p-0 overflow-hidden bg-white dark:bg-slate-900 border-0 shadow-2xl">
              {selectedTool && (
                <>
                  {/* Animated Gradient Header */}
                  <div className={cn("relative p-6 pb-8 bg-gradient-to-br overflow-hidden", selectedTool.color)}>
                    {/* Animated Background Patterns */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-2xl animate-pulse" />
                      <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-4 right-8 w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-duration:2s]" />
                      <div className="absolute top-12 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-bounce [animation-duration:3s] [animation-delay:0.5s]" />
                      <div className="absolute bottom-8 left-12 w-1 h-1 bg-white/50 rounded-full animate-ping [animation-duration:2s]" />
                    </div>

                    <DialogHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        {/* Animated Icon Container */}
                        <div className="relative group">
                          <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl scale-110 animate-pulse" />
                          <div className="relative p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-xl transition-transform duration-300 hover:scale-110 hover:rotate-3">
                            <div className="text-white scale-150">{selectedTool.icon}</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <DialogTitle className="text-2xl font-bold text-white drop-shadow-lg">
                            {selectedTool.name}
                          </DialogTitle>
                          <Badge className="mt-2 bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                            {selectedTool.categoryTitle}
                          </Badge>
                        </div>
                      </div>
                    </DialogHeader>
                  </div>

                  {/* Content Section with Staggered Animations */}
                  <div className="p-6 space-y-6">
                    {/* Why I Use This - Card Style */}
                    <div className="group relative animate-fade-in [animation-delay:100ms]">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/30 transition-all duration-300 group-hover:border-slate-300 dark:group-hover:border-slate-600 group-hover:shadow-lg">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={cn("p-1.5 rounded-lg bg-gradient-to-br", selectedTool.color)}>
                            <Zap className="w-3.5 h-3.5 text-white" />
                          </div>
                          <h4 className="text-sm font-bold text-slate-800 dark:text-white">Why I Use This</h4>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                          {selectedTool.whyIUse}
                        </p>
                      </div>
                    </div>

                    {/* Key Use Cases - Interactive List */}
                    <div className="animate-fade-in [animation-delay:200ms]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={cn("p-1.5 rounded-lg bg-gradient-to-br", selectedTool.color)}>
                          <Layers className="w-3.5 h-3.5 text-white" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white">Key Use Cases</h4>
                      </div>
                      <ul className="space-y-2">
                        {selectedTool.useCases.map((useCase, index) => (
                          <li
                            key={index}
                            className="group/item flex items-start gap-3 p-3 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-default animate-fade-in"
                            style={{ animationDelay: `${300 + index * 100}ms` }}
                          >
                            <div
                              className={cn(
                                "p-1 rounded-full bg-gradient-to-br flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110",
                                selectedTool.color,
                              )}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-sm text-slate-600 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                              {useCase}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Footer */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700 animate-fade-in [animation-delay:600ms]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex -space-x-1">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={cn(
                                  "w-2 h-2 rounded-full border border-white dark:border-slate-900 animate-pulse",
                                  i === 0 && "bg-emerald-500",
                                  i === 1 && "bg-blue-500 [animation-delay:200ms]",
                                  i === 2 && "bg-purple-500 [animation-delay:400ms]",
                                  i === 3 && "bg-amber-500 [animation-delay:600ms]",
                                )}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400">Daily driver tool</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                          <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>Expert level</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
};
