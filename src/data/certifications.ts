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
    image: "/lovable-uploads/cert-atlassian.png",
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
    image: "/lovable-uploads/cert-ai-pm.png",
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
    image: "/lovable-uploads/cert-product-analytics.png",
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
    image: "/lovable-uploads/cert-product-led.png",
    detailedDescription: "This certification covers the fundamentals and advanced strategies of product-led growth, focusing on creating products that drive user acquisition, conversion, and expansion. It emphasizes the importance of user experience as the primary growth driver.",
    keyLearnings: [
      "Designing self-serve onboarding experiences",
      "Building viral loops and referral mechanisms",
      "Optimizing free-to-paid conversion funnels",
      "Measuring and improving activation metrics",
      "Creating sticky features for long-term retention"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "gdsc-facilitator",
    title: "Google Developer Student Clubs Facilitator",
    organization: "Google for Education",
    year: "2024",
    category: "Leadership",
    icon: "Users",
    description: "Led and mentored a cohort of 40+ students in technology workshops, product development sessions, and career guidance programs.",
    impact: "Facilitated 12+ workshops, mentored 40+ students, organized 3 major tech events",
    recognition: "Outstanding Facilitator Award",
    detailedDescription: "As a GDSC Facilitator, I led initiatives to bridge the gap between academic learning and industry requirements. This role involved organizing workshops, hackathons, and mentorship programs to help students develop practical technical and product skills.",
    highlights: [
      "Designed and delivered 12+ hands-on technical workshops",
      "Mentored 40+ students on career development and product thinking",
      "Organized 3 major tech events including a hackathon",
      "Received Outstanding Facilitator Award for exceptional contribution",
      "Built a community of 200+ active members"
    ]
  },
  {
    id: "iete-lead",
    title: "IETE Management Lead",
    organization: "IETE x DIEMS",
    year: "2023",
    category: "Leadership",
    icon: "Medal",
    description: "Spearheaded technical event management and cross-functional team coordination for engineering society initiatives.",
    impact: "Organized 8+ technical events, managed team of 15+ members",
    recognition: "Excellence in Leadership",
    detailedDescription: "Led the management team at IETE (Institution of Electronics and Telecommunication Engineers) chapter, coordinating technical events, workshops, and industry collaborations. This role developed my leadership, event management, and team coordination skills.",
    highlights: [
      "Organized 8+ technical events and workshops",
      "Managed a cross-functional team of 15+ members",
      "Established industry partnerships for guest lectures",
      "Recognized for Excellence in Leadership",
      "Increased chapter engagement by 60%"
    ]
  },
  {
    id: "college-topper",
    title: "Academic Excellence - College Topper",
    organization: "DIEMS College",
    year: "2020",
    category: "Academic",
    icon: "Trophy",
    description: "Achieved highest academic performance in Electronics & Telecommunication Engineering first year with distinction.",
    impact: "GPA: 9.2/10, Top 1% of class",
    recognition: "Dean's List, Merit Scholarship",
    detailedDescription: "Achieved the highest academic performance in the first year of Electronics & Telecommunication Engineering, demonstrating strong analytical and problem-solving abilities. This achievement was recognized with placement on the Dean's List and a Merit Scholarship.",
    highlights: [
      "Secured GPA of 9.2/10 in first year",
      "Ranked in top 1% of the class",
      "Placed on Dean's List for academic excellence",
      "Awarded Merit Scholarship",
      "Recognized for outstanding performance in technical subjects"
    ]
  },
  {
    id: "ncc-certificate",
    title: "NCC 'A' Certificate",
    organization: "National Cadet Corps",
    year: "2017",
    category: "Service",
    icon: "Award",
    description: "Completed rigorous military training program demonstrating leadership, discipline, and service commitment.",
    impact: "Air Wing specialization, Leadership training",
    recognition: "Certificate of Excellence",
    detailedDescription: "Completed the National Cadet Corps 'A' Certificate program with Air Wing specialization. This training developed discipline, leadership, physical fitness, and a strong sense of service to the nation.",
    highlights: [
      "Completed Air Wing specialization training",
      "Developed leadership and team management skills",
      "Participated in national integration camps",
      "Received Certificate of Excellence",
      "Trained in disaster management and community service"
    ]
  },
  {
    id: "swimming-championship",
    title: "State-Level Swimming Championship",
    organization: "State Sports Association",
    year: "2016",
    category: "Sports",
    icon: "Star",
    description: "Qualified for state-level swimming championship after winning school and district competitions.",
    impact: "School champion, District qualifier",
    recognition: "Sports Excellence Award",
    detailedDescription: "Demonstrated excellence in competitive swimming, progressing from school-level to state-level championships. This achievement reflects dedication, physical discipline, and competitive spirit.",
    highlights: [
      "Won school-level swimming championship",
      "Qualified through district-level competition",
      "Represented school at state-level championship",
      "Received Sports Excellence Award",
      "Developed perseverance and competitive mindset"
    ]
  }
];

export const getCertificationById = (id: string): Certification | undefined => {
  return certifications.find(cert => cert.id === id);
};

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find(achievement => achievement.id === id);
};
