export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  bgGradient: string;
  image: string;
  externalLink: string;
  // Custom content fields - you can edit these
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyFeatures: string[];
  tools: string[];
  // Gallery images - add your screenshots/images here
  gallery: {
    src: string;
    caption: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "gullak-fintech",
    title: "Gullak Fintech App",
    subtitle: "Savings-Led Financial Empowerment Platform",
    tags: ["Product Strategy", "UX Design", "Fintech"],
    externalLink: "https://www.canva.com/design/DAGxiFuK6mo/lSD7Z6WwaqX6hDFwYuQ2gQ/view",
    bgGradient: "from-[#fbd26c] to-[#f99e30]",
    image: "/lovable-uploads/b1ba7330-6bbc-43d5-a1d2-56baa716c077.png",
    overview: "Gullak is a savings-led fintech platform designed to empower users with smart financial habits through gamification and goal-based savings.",
    challenge: "Many users struggle with consistent savings habits due to lack of motivation and visibility into their progress.",
    solution: "Designed an intuitive savings experience with goal tracking, reward systems, and social accountability features.",
    outcome: "Increased user engagement by 40% and improved savings completion rates significantly.",
    keyFeatures: ["Goal-based savings", "Gamification rewards", "Progress tracking", "Social features"],
    tools: ["Figma", "Miro", "User Interviews", "A/B Testing"],
    gallery: [], // Add your images here: { src: "/path/to/image.png", caption: "Description" }
  },
  {
    id: "blinkit-analysis",
    title: "Blinkit Product Analysis",
    subtitle: "Order Efficiency & Conversion Optimization",
    tags: ["Product Analysis", "E-commerce", "UX Research"],
    externalLink: "https://www.canva.com/design/DAGxiHLuc1A/cdCbIj30b6LODnEBr_bT-Q/view",
    bgGradient: "from-[#facc15] to-[#f97316]",
    image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png",
    overview: "Comprehensive analysis of Blinkit's order flow to identify optimization opportunities.",
    challenge: "Users experienced friction in the checkout process leading to cart abandonment.",
    solution: "Proposed streamlined checkout flow with fewer steps and better progress indicators.",
    outcome: "Recommendations aimed at reducing checkout time by 30%.",
    keyFeatures: ["Checkout optimization", "Cart analysis", "User flow mapping", "Conversion tracking"],
    tools: ["Analytics", "Heatmaps", "User Research", "Competitive Analysis"],
    gallery: [],
  },
  {
    id: "google-pay-analysis",
    title: "Google Pay Feature Analysis",
    subtitle: "Strategic Product Improvement Study",
    tags: ["Feature Analysis", "Product Strategy", "Fintech"],
    externalLink: "https://www.canva.com/design/DAGxiBL7YzA/Xk77mzvr9YaEsuEbvQ9bWg/view",
    bgGradient: "from-[#60a5fa] to-[#9333ea]",
    image: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png",
    overview: "Strategic analysis of Google Pay features to identify improvement opportunities.",
    challenge: "Understanding user pain points and feature gaps in the current payment experience.",
    solution: "Conducted comprehensive feature audit and user research to propose enhancements.",
    outcome: "Developed actionable recommendations for feature improvements.",
    keyFeatures: ["Feature audit", "User research", "Competitive analysis", "Roadmap planning"],
    tools: ["Figma", "Survey tools", "Data analysis", "User interviews"],
    gallery: [],
  },
  {
    id: "google-pay-prd",
    title: "Google Pay PRD",
    subtitle: "Strategic Product Improvement Study",
    tags: ["Feature Analysis", "Product Strategy", "Fintech"],
    externalLink: "https://www.canva.com/design/DAGxiRLzpnQ/iE96wDgatXY99zuZnHBt4g/view",
    bgGradient: "from-[#60a5fa] to-[#2563eb]",
    image: "/lovable-uploads/9b4dd787-aeb2-4969-8fc0-a1dd907efea8.png",
    overview: "Product Requirements Document for Google Pay feature enhancements.",
    challenge: "Translating user needs into clear, actionable product requirements.",
    solution: "Created comprehensive PRD with user stories, acceptance criteria, and success metrics.",
    outcome: "Delivered complete product specification ready for development.",
    keyFeatures: ["User stories", "Acceptance criteria", "Success metrics", "Technical specs"],
    tools: ["Notion", "Figma", "JIRA", "Confluence"],
    gallery: [],
  },
  {
    id: "zepto-efficiency",
    title: "Zepto Order Efficiency",
    subtitle: "User Experience Optimization",
    tags: ["UX Design", "E-commerce", "Mobile Design"],
    externalLink: "https://www.canva.com/design/DAGxiRyvVFQ/-YhV-xynX1b2K6ewewp3yQ/view",
    bgGradient: "from-[#c084fc] to-[#db2777]",
    image: "/lovable-uploads/zepto.png",
    overview: "UX optimization project for Zepto's quick commerce platform.",
    challenge: "Improving order efficiency while maintaining user satisfaction.",
    solution: "Redesigned key user flows with focus on speed and clarity.",
    outcome: "Proposed improvements to reduce order time significantly.",
    keyFeatures: ["Flow optimization", "Speed improvements", "UI refinements", "User testing"],
    tools: ["Figma", "Maze", "Analytics", "User testing"],
    gallery: [],
  },
  {
    id: "airbnb-ux",
    title: "Airbnb UX",
    subtitle: "Patient-Centered Design Approach",
    tags: ["UX Research", "Healthcare", "Accessibility"],
    externalLink: "https://www.canva.com/design/DAGxiIQik8Y/eWceLnISnpERQ_jx5kK0Uw/view",
    bgGradient: "from-[#FF5A5F] to-[#FF5A5F]",
    image: "/lovable-uploads/b6681943-085f-4f56-ad98-ba1fac93c64a.png",
    overview: "UX research and design improvements for Airbnb's user experience.",
    challenge: "Enhancing accessibility and user experience for diverse user groups.",
    solution: "Conducted accessibility audit and proposed inclusive design improvements.",
    outcome: "Created recommendations for more accessible and user-friendly experience.",
    keyFeatures: ["Accessibility audit", "Inclusive design", "User research", "Design improvements"],
    tools: ["Figma", "Accessibility tools", "User interviews", "Heuristic evaluation"],
    gallery: [],
  },
  {
    id: "cloudeagle-ai",
    title: "Cloudeagle AI Efficiency",
    subtitle: "User Experience Optimization",
    tags: ["UX Design", "E-commerce", "Mobile Design"],
    externalLink: "https://www.canva.com/design/DAGsMTJF8rQ/spC9-A66wGenPorZ0VkcmA/view",
    bgGradient: "from-[#111184] to-[#000000]",
    image: "/lovable-uploads/Cloudeagle.png",
    overview: "AI-powered efficiency improvements for Cloudeagle platform.",
    challenge: "Optimizing user workflows with AI-assisted features.",
    solution: "Designed intuitive AI integration points throughout the user journey.",
    outcome: "Enhanced user productivity through smart automation.",
    keyFeatures: ["AI integration", "Workflow optimization", "Smart automation", "User efficiency"],
    tools: ["Figma", "AI tools", "User research", "Prototyping"],
    gallery: [],
  },
  {
    id: "metis-improvement",
    title: "Metis Feature Improvement",
    subtitle: "User Experience Optimization",
    tags: ["UX Design", "E-commerce", "Mobile Design"],
    externalLink: "https://www.canva.com/design/DAGvsNeBU9A/fT2cPDGb3P_sHKunt_xa3g/view",
    bgGradient: "from-[#0165f1] to-[#018ff1]",
    image: "/lovable-uploads/Metis.png",
    overview: "Feature improvement project for Metis platform.",
    challenge: "Enhancing existing features based on user feedback.",
    solution: "Redesigned key features with improved usability and functionality.",
    outcome: "Delivered feature improvements that increased user satisfaction.",
    keyFeatures: ["Feature redesign", "Usability improvements", "User feedback", "Iterative design"],
    tools: ["Figma", "User testing", "Analytics", "Feedback tools"],
    gallery: [],
  },
  {
    id: "codeant-ai",
    title: "CodeAnt AI",
    subtitle: "Product Launch Narrative",
    tags: ["UX Design", "E-commerce", "Mobile Design"],
    externalLink: "https://www.canva.com/design/DAGuong-JoM/p1KoI6r5aSNVNdhG64Kd-A/view",
    bgGradient: "from-[#3c52c3] to-[#E0FFFF]",
    image: "/lovable-uploads/Codeant.png",
    overview: "Product launch strategy and narrative for CodeAnt AI platform.",
    challenge: "Creating a compelling product narrative for market launch.",
    solution: "Developed comprehensive launch strategy with clear value proposition.",
    outcome: "Successful product positioning and launch narrative.",
    keyFeatures: ["Launch strategy", "Value proposition", "Market positioning", "Brand narrative"],
    tools: ["Strategy frameworks", "Market research", "Storytelling", "Presentation design"],
    gallery: [],
  },
  {
    id: "ether-prd",
    title: "Ether Feature PRD",
    subtitle: "Product Improvement",
    tags: ["UX Design", "EdTech", "Web Design", "App Design"],
    externalLink: "https://www.canva.com/design/DAGw3QSmRIY/eIMrFE0YSiUhYc50vbS_vA/view",
    bgGradient: "from-[#432299] to-[#6a39f0]",
    image: "/lovable-uploads/Ether.png",
    overview: "Product Requirements Document for Ether platform improvements.",
    challenge: "Defining clear requirements for new EdTech features.",
    solution: "Created detailed PRD with user-centered feature specifications.",
    outcome: "Comprehensive product specification for development team.",
    keyFeatures: ["EdTech features", "User requirements", "Technical specs", "Success metrics"],
    tools: ["Notion", "Figma", "User research", "Documentation"],
    gallery: [
      { src: "/lovable-uploads/ether-prd-1.png", caption: "Problem Definition - Streamlining Fee Management for Schools and Parents" },
      { src: "/lovable-uploads/ether-prd-2.png", caption: "Goals & Non-Goals - Prioritized outcomes for Admins, Parents, and Ether" },
      { src: "/lovable-uploads/ether-prd-3.png", caption: "Competitive Analysis & Functional Metrics" },
      { src: "/lovable-uploads/ether-prd-4.png", caption: "Validation of the Problem - Survey Insights & User Anecdotes" },
      { src: "/lovable-uploads/ether-prd-5.png", caption: "Target Audience (Admins) - Key Personas & The Solution" },
      { src: "/lovable-uploads/ether-prd-6.png", caption: "Admin Wireframes - EtherView & EtherComm" },
      { src: "/lovable-uploads/ether-prd-7.png", caption: "Admin Wireframes - EtherTrack & EtherForecast" },
      { src: "/lovable-uploads/ether-prd-8.png", caption: "Feature Prioritization & User Flow Diagram (Admin)" },
      { src: "/lovable-uploads/ether-prd-9.png", caption: "Target Audience (Parents) - Key Personas & The Solution" },
      { src: "/lovable-uploads/ether-prd-10.png", caption: "Parent Wireframes - EtherTrack Family, EtherPay Express, EtherRemind+, EtherSecure" },
    ],
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((study) => study.id === id);
};
