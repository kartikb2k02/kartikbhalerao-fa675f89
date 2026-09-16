import { Trophy, Zap, TrendingUp, Target, Users, Medal, Award, Star } from "lucide-react";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  skills: string[];
  credentialId: string;
  image?: string;
  detailedDescription: string;
  keyLearnings: string[];
  gallery?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  icon: string;
  description: string;
  impact: string;
  recognition: string;
  detailedDescription: string;
  highlights: string[];
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "atlassian-pm",
    title: "Atlassian Professional Product Management",
    issuer: "Atlassian",
    year: "2024",
    category: "Product Management",
    icon: "Trophy",
    color: "from-blue-500 to-blue-600",
    description: "Comprehensive product management methodology covering agile practices, stakeholder alignment, and strategic planning.",
    skills: ["Product Strategy", "Agile Methodology", "Stakeholder Management", "Strategic Planning"],
    credentialId: "PM-2024-001",
    image: "/lovable-uploads/cert-atlassian.webp",
    detailedDescription: "This certification validates expertise in Atlassian's product management framework, covering the complete product lifecycle from ideation to delivery. It emphasizes data-driven decision making, cross-functional collaboration, and agile product development methodologies.",
    keyLearnings: [
      "Building and prioritizing product roadmaps using Jira",
      "Stakeholder communication and alignment strategies",
      "Agile ceremonies and sprint planning best practices",
      "Measuring product success with key metrics",
      "Cross-functional team collaboration techniques"
    ]
  },
  {
    id: "ai-product-management",
    title: "AI in Product Management Certification",
    issuer: "Pendo.ai",
    year: "2024",
    category: "AI & Innovation",
    icon: "Zap",
    color: "from-purple-500 to-purple-600",
    description: "Advanced certification in integrating AI technologies into product development cycles and decision-making processes.",
    skills: ["AI Integration", "Machine Learning", "Product Innovation", "Data Science"],
    credentialId: "AI-PM-2024-078",
    image: "/lovable-uploads/cert-ai-pm.webp",
    detailedDescription: "This certification demonstrates proficiency in leveraging AI technologies to enhance product development, user experience, and decision-making. It covers practical applications of AI/ML in product management, from feature prioritization to personalization strategies.",
    keyLearnings: [
      "AI-powered product analytics and insights",
      "Implementing AI features in product roadmaps",
      "Ethical considerations in AI product development",
      "Machine learning basics for product managers",
      "Using AI for user behavior prediction and personalization"
    ]
  },
  {
    id: "product-analytics",
    title: "Product Analytics Master Class",
    issuer: "Pendo.ai",
    year: "2024",
    category: "Analytics",
    icon: "TrendingUp",
    color: "from-green-500 to-green-600",
    description: "Deep dive into product analytics, user behavior analysis, and metrics-driven product optimization strategies.",
    skills: ["Product Analytics", "User Behavior", "A/B Testing", "Metrics Design"],
    credentialId: "PA-2024-156",
    image: "/lovable-uploads/cert-product-analytics.webp",
    detailedDescription: "This master class certification covers advanced product analytics techniques, including funnel analysis, cohort tracking, and behavioral segmentation. It emphasizes turning data into actionable insights for product improvement.",
    keyLearnings: [
      "Setting up comprehensive product analytics frameworks",
      "Designing and running effective A/B tests",
      "User behavior analysis and cohort tracking",
      "Building dashboards for product health monitoring",
      "Converting analytics insights into product decisions"
    ]
  },
  {
    id: "product-led-growth",
    title: "Product-Led Growth Certification",
    issuer: "MindTheProduct",
    year: "2024",
    category: "Growth Strategy",
    icon: "Target",
    color: "from-indigo-500 to-indigo-600",
    description: "Strategic framework for implementing product-led growth methodologies and user acquisition strategies.",
    skills: ["PLG Strategy", "User Onboarding", "Growth Metrics", "Retention Optimization"],
    credentialId: "PLG-2024-089",
    image: "/lovable-uploads/cert-product-led.webp",
    detailedDescription: "This certification covers the fundamentals and advanced strategies of product-led growth, focusing on creating products that drive user acquisition, conversion, and expansion. It emphasizes the importance of user experience as the primary growth driver.",
    keyLearnings: [
      "Designing self-serve onboarding experiences",
      "Building viral loops and referral mechanisms",
      "Optimizing free-to-paid conversion funnels",
      "Measuring and improving activation metrics",
      "Creating sticky features for long-term retention"
    ]
  },
  {
    id: "enterprise-pm-fundamentals",
    title: "Microsoft AI Product Manager",
    issuer: "Coursera",
    year: "2026",
    category: "Product Management",
    icon: "Trophy",
    color: "from-blue-500 to-blue-600",
    description: "Professional certificate covering market research, cloud strategy, UX/UI design, and product lifecycle management using Azure, Power BI, and Copilot.",
    skills: ["Market Research", "Product Strategy", "UX/UI Design", "Product Launch", "Azure", "Power BI"],
    credentialId: "1ALKR1V4ZMLD",
    image: "/lovable-uploads/cert-enterprise-pm.webp",
    detailedDescription: "This intensive program covered market research, cloud strategy, and UX/UI design, utilizing Azure, Power BI, and Copilot. Completers demonstrated the ability to manage secure, compliant, and scalable software products from concept to launch, including go-to-market strategies and post-launch analysis.",
    keyLearnings: [
      "Market Research and Competitive Analysis",
      "Product Strategy and Roadmapping",
      "Product Design and UX/UI Fundamentals",
      "Product Launch and Post-Launch Management",
      "AI and cloud capabilities with Azure and Copilot"
    ]
  }
];

export const achievements: Achievement[] = [];

export const getCertificationById = (id: string): Certification | undefined => {
  return certifications.find(cert => cert.id === id);
};

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find(achievement => achievement.id === id);
};
