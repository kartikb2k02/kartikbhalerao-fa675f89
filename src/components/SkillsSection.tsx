import { useState, useEffect, useRef } from "react";
import { Target, BarChart3, Palette, Code, Calendar, PieChart, Zap, Award, ArrowRight, Star, CheckCircle2, Layers, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
// Real brand icons
import { SiFigma, SiAdobexd, SiCanva, SiSketch, SiFramer, SiJira, SiNotion, SiTrello, SiAsana, SiLinear, SiMixpanel, SiGoogleanalytics, SiTableau, SiHotjar, SiOpenai, SiAnthropic, SiZapier, SiGithub, SiPostman, SiDocker, SiAmazonwebservices, SiN8N, SiMake } from "react-icons/si";
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
  className 
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
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<{ name: string; description: string; color: string; icon: React.ReactNode; tooltip: string; categoryTitle: string } | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  // Reset animation when category changes
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Intersection Observer for skill bars animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCertificationClick = () => {
    window.open('https://www.canva.com/design/DAGrQ2ETbAE/JvZhDbPAJAXcsMx0uQ4dYA/view', '_blank');
  };

  const skillCategories = [
    {
      id: "strategy",
      title: "Product Strategy",
      shortTitle: "Strategy",
      description: "Strategic product planning with market-driven insights and business impact focus",
      icon: <Target className="w-5 h-5" />,
      skills: [
        { name: "Product Discovery", level: 95, tooltip: "Identifying user problems and validating solutions through research and experimentation" },
        { name: "Market Research", level: 90, tooltip: "Analyzing market trends, competitors, and customer segments to inform strategy" },
        { name: "Competitive Analysis", level: 88, tooltip: "Evaluating competitor products, positioning, and market strategies" },
        { name: "Product Roadmap", level: 92, tooltip: "Creating strategic roadmaps that align business goals with user needs" },
        { name: "Go-to-Market", level: 85, tooltip: "Planning and executing product launches with cross-functional teams" },
        { name: "MVP Development", level: 94, tooltip: "Building minimum viable products to test hypotheses quickly" }
      ],
      color: "from-blue-500 to-indigo-600",
      lightColor: "from-blue-400 to-indigo-500",
      bgGlow: "bg-blue-500/20",
      textColor: "text-blue-500"
    },
    {
      id: "analytics",
      title: "Data & Analytics", 
      shortTitle: "Analytics",
      description: "Data-driven decision making through comprehensive user behavior analysis",
      icon: <BarChart3 className="w-5 h-5" />,
      skills: [
        { name: "User Analytics", level: 92, tooltip: "Tracking and analyzing user behavior to inform product decisions" },
        { name: "A/B Testing", level: 88, tooltip: "Designing and running experiments to optimize features and conversions" },
        { name: "KPI Tracking", level: 90, tooltip: "Defining and monitoring key performance indicators for product success" },
        { name: "Data Visualization", level: 85, tooltip: "Creating dashboards and reports to communicate insights effectively" },
        { name: "Performance Metrics", level: 87, tooltip: "Measuring product performance through quantitative metrics" },
        { name: "Conversion Optimization", level: 86, tooltip: "Improving user flows and funnels to increase conversion rates" }
      ],
      color: "from-emerald-500 to-teal-600",
      lightColor: "from-emerald-400 to-teal-500",
      bgGlow: "bg-emerald-500/20",
      textColor: "text-emerald-500"
    },
    {
      id: "ux",
      title: "User Experience",
      shortTitle: "UX Design",
      description: "User-centered design approach with focus on exceptional user journeys",
      icon: <Palette className="w-5 h-5" />,
      skills: [
        { name: "User Research", level: 90, tooltip: "Conducting interviews, surveys, and usability studies to understand users" },
        { name: "Journey Mapping", level: 88, tooltip: "Visualizing end-to-end user experiences to identify pain points" },
        { name: "Wireframing", level: 92, tooltip: "Creating low and high-fidelity designs to communicate product vision" },
        { name: "Usability Testing", level: 85, tooltip: "Testing prototypes with real users to validate design decisions" },
        { name: "Design Systems", level: 83, tooltip: "Building consistent component libraries for scalable product design" },
        { name: "Accessibility", level: 80, tooltip: "Ensuring products are usable by people with diverse abilities" }
      ],
      color: "from-purple-500 to-pink-600",
      lightColor: "from-purple-400 to-pink-500",
      bgGlow: "bg-purple-500/20",
      textColor: "text-purple-500"
    },
    {
      id: "technical",
      title: "Technical Leadership",
      shortTitle: "Technical",
      description: "Technical collaboration and system architecture understanding",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "Agile/Scrum", level: 94, tooltip: "Leading agile ceremonies and driving sprint execution" },
        { name: "API Design", level: 82, tooltip: "Collaborating on API specifications and integration requirements" },
        { name: "Database Basics", level: 78, tooltip: "Understanding data models and database fundamentals" },
        { name: "Tech Documentation", level: 88, tooltip: "Writing clear technical specifications and PRDs" },
        { name: "System Architecture", level: 75, tooltip: "Understanding system components and their interactions" },
        { name: "DevOps Basics", level: 72, tooltip: "Familiarity with CI/CD pipelines and deployment processes" }
      ],
      color: "from-orange-500 to-red-600",
      lightColor: "from-orange-400 to-red-500",
      bgGlow: "bg-orange-500/20",
      textColor: "text-orange-500"
    }
  ];

  const toolCategories = {
    design: {
      title: "Design",
      icon: <Palette className="w-4 h-4" />,
      tools: [
        { name: "Figma", description: "UI/UX Design", color: "from-[#F24E1E] to-[#A259FF]", icon: <SiFigma className="w-5 h-5" />, tooltip: "Collaborative interface design tool for creating high-fidelity prototypes and design systems" },
        { name: "Adobe XD", description: "Prototyping", color: "from-[#FF61F6] to-[#470137]", icon: <SiAdobexd className="w-5 h-5" />, tooltip: "Vector-based design tool for crafting interactive prototypes and wireframes" },
        { name: "Canva", description: "Graphics", color: "from-[#00C4CC] to-[#7D2AE8]", icon: <SiCanva className="w-5 h-5" />, tooltip: "Easy-to-use graphic design platform for creating presentations and marketing materials" },
        { name: "Sketch", description: "Interface", color: "from-[#FDB300] to-[#EA6C00]", icon: <SiSketch className="w-5 h-5" />, tooltip: "Professional vector graphics editor for designing user interfaces and icons" },
        { name: "Framer", description: "Motion", color: "from-[#0055FF] to-[#00AAFF]", icon: <SiFramer className="w-5 h-5" />, tooltip: "Interactive design tool for creating animations and micro-interactions" },
      ]
    },
    management: {
      title: "Management",
      icon: <Calendar className="w-4 h-4" />,
      tools: [
        { name: "Jira", description: "Agile PM", color: "from-[#0052CC] to-[#2684FF]", icon: <SiJira className="w-5 h-5" />, tooltip: "Industry-standard agile project management for sprint planning and issue tracking" },
        { name: "Notion", description: "Docs", color: "from-[#000000] to-[#333333]", icon: <SiNotion className="w-5 h-5" />, tooltip: "All-in-one workspace for notes, docs, wikis, and project collaboration" },
        { name: "Trello", description: "Kanban", color: "from-[#0079BF] to-[#00C2E0]", icon: <SiTrello className="w-5 h-5" />, tooltip: "Visual kanban boards for organizing tasks and tracking project progress" },
        { name: "Asana", description: "Tasks", color: "from-[#F06A6A] to-[#FC636B]", icon: <SiAsana className="w-5 h-5" />, tooltip: "Work management platform for team coordination and task tracking" },
        { name: "Linear", description: "Issues", color: "from-[#5E6AD2] to-[#8B5CF6]", icon: <SiLinear className="w-5 h-5" />, tooltip: "Modern issue tracking with streamlined workflows for fast-moving teams" },
      ]
    },
    analytics: {
      title: "Analytics",
      icon: <PieChart className="w-4 h-4" />,
      tools: [
        { name: "Mixpanel", description: "Analytics", color: "from-[#7856FF] to-[#A855F7]", icon: <SiMixpanel className="w-5 h-5" />, tooltip: "Product analytics for tracking user behavior, funnels, and retention metrics" },
        { name: "GA4", description: "Web Stats", color: "from-[#E37400] to-[#F9AB00]", icon: <SiGoogleanalytics className="w-5 h-5" />, tooltip: "Google's web analytics for traffic analysis, conversions, and audience insights" },
        { name: "Amplitude", description: "Product", color: "from-[#1F2937] to-[#374151]", icon: <BarChart3 className="w-5 h-5" />, tooltip: "Product intelligence platform for understanding user journeys and feature adoption" },
        { name: "Tableau", description: "Viz", color: "from-[#E97627] to-[#C72037]", icon: <SiTableau className="w-5 h-5" />, tooltip: "Powerful data visualization tool for creating interactive dashboards and reports" },
        { name: "Hotjar", description: "Heatmaps", color: "from-[#FD3A5C] to-[#FF6B35]", icon: <SiHotjar className="w-5 h-5" />, tooltip: "Behavior analytics with heatmaps, session recordings, and user feedback" },
      ]
    },
    ai: {
      title: "AI Tools",
      icon: <Bot className="w-4 h-4" />,
      tools: [
        { name: "ChatGPT", description: "AI Chat", color: "from-[#10A37F] to-[#1A7F64]", icon: <SiOpenai className="w-5 h-5" />, tooltip: "OpenAI's conversational AI for content creation, analysis, and problem-solving" },
        { name: "Claude", description: "AI", color: "from-[#D4A574] to-[#CC785C]", icon: <SiAnthropic className="w-5 h-5" />, tooltip: "Anthropic's AI assistant for research, writing, and complex reasoning tasks" },
        { name: "n8n", description: "Automation", color: "from-[#EA4B71] to-[#FF6D5A]", icon: <SiN8N className="w-5 h-5" />, tooltip: "Self-hosted workflow automation for connecting apps and automating processes" },
        { name: "Zapier", description: "Connect", color: "from-[#FF4A00] to-[#FF8C00]", icon: <SiZapier className="w-5 h-5" />, tooltip: "No-code automation platform connecting 5000+ apps for seamless workflows" },
        { name: "Make", description: "Visual", color: "from-[#6D00CC] to-[#9B51E0]", icon: <SiMake className="w-5 h-5" />, tooltip: "Visual workflow builder for complex automations with advanced logic" },
      ]
    },
    development: {
      title: "Dev Tools",
      icon: <Code className="w-4 h-4" />,
      tools: [
        { name: "GitHub", description: "Code", color: "from-[#24292F] to-[#57606A]", icon: <SiGithub className="w-5 h-5" />, tooltip: "Version control and collaboration platform for code hosting and review" },
        { name: "Postman", description: "API", color: "from-[#FF6C37] to-[#FF9E2C]", icon: <SiPostman className="w-5 h-5" />, tooltip: "API development platform for testing, documenting, and monitoring APIs" },
        { name: "Docker", description: "Container", color: "from-[#2496ED] to-[#0DB7ED]", icon: <SiDocker className="w-5 h-5" />, tooltip: "Containerization platform for building and deploying applications consistently" },
        { name: "VS Code", description: "Editor", color: "from-[#007ACC] to-[#0098FF]", icon: <VscVscode className="w-5 h-5" />, tooltip: "Powerful code editor with extensions for every programming language" },
        { name: "AWS", description: "Cloud", color: "from-[#FF9900] to-[#FFB84D]", icon: <SiAmazonwebservices className="w-5 h-5" />, tooltip: "Amazon's cloud platform for scalable infrastructure and services" },
      ]
    }
  };

  const currentCategory = skillCategories.find(c => c.id === activeCategory);

  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto relative pb-16">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Mesh */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-3xl" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-30" />
          <div className="absolute top-40 left-16 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-32 w-2 h-2 bg-emerald-500 rounded-full animate-bounce [animation-duration:3s]" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 shadow-xl shadow-blue-500/10 px-5 py-2.5 rounded-full border border-slate-200/50 dark:border-slate-700/50">
              <div className="relative flex items-center justify-center">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <div className="absolute inset-0 blur-sm bg-amber-500/50 rounded-full" />
              </div>
              <span className="font-bold text-sm text-slate-700 dark:text-slate-200">Skills & Expertise</span>
              <div className="flex gap-0.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse [animation-delay:200ms]" />
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse [animation-delay:400ms]" />
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
            Product Management
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Excellence
              </span>
              {/* Decorative underline */}
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-sm" />
              <div className="absolute -bottom-1 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10">
            Transforming ideas into impactful products with data-driven strategies
          </p>

          {/* Certification Button - Glass Effect */}
          <button 
            onClick={handleCertificationClick}
            className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 active:scale-100"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 border-2 border-emerald-500/30 group-hover:border-emerald-500/50 rounded-2xl transition-colors" />
            <div className="absolute inset-[2px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-[14px]" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Content */}
            <div className="relative flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl text-white shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 group-hover:scale-110 transition-all">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-lg font-bold text-slate-800 dark:text-white">View Certifications</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">Professional credentials</span>
              </div>
              <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          {/* Category Selector - Pill Style */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center p-1.5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200/50 dark:border-slate-700/50">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "relative px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300",
                    activeCategory === category.id
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  )}
                >
                  {activeCategory === category.id && (
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-r rounded-xl shadow-lg",
                      category.color
                    )} />
                  )}
                  <span className="relative flex items-center gap-2">
                    {category.icon}
                    <span className="hidden sm:inline">{category.shortTitle}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Category Content */}
          {currentCategory && (
            <div className="relative animate-fade-in" ref={skillsRef}>
              {/* Background Glow */}
              <div className={cn("absolute inset-0 rounded-3xl blur-3xl opacity-20", currentCategory.bgGlow)} />
              
              <Card className="relative border-0 shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden">
                {/* Top Gradient Bar */}
                <div className={cn("h-1.5 bg-gradient-to-r", currentCategory.color)} />
                
                <CardHeader className="pb-6 pt-8">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br",
                      currentCategory.color
                    )}>
                      <div className="scale-125">{currentCategory.icon}</div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                        {currentCategory.title}
                      </CardTitle>
                      <CardDescription className="text-base text-slate-600 dark:text-slate-400">
                        {currentCategory.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="self-start sm:self-center bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 text-sm font-semibold">
                      <Layers className="w-4 h-4 mr-2" />
                      {currentCategory.skills.length} Skills
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <TooltipProvider delayDuration={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {currentCategory.skills.map((skill, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <div 
                              className="group relative"
                              onMouseEnter={() => setHoveredSkill(skill.name)}
                              onMouseLeave={() => setHoveredSkill(null)}
                              style={{ 
                                animationDelay: `${i * 100}ms`,
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: `opacity 0.5s ease ${i * 100}ms, transform 0.5s ease ${i * 100}ms`
                              }}
                            >
                              <div className={cn(
                                "relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-hidden",
                                hoveredSkill === skill.name
                                  ? "border-transparent shadow-xl scale-[1.02] -translate-y-1"
                                  : "border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600"
                              )}>
                                {/* Gradient background on hover */}
                                <div className={cn(
                                  "absolute inset-0 bg-gradient-to-br transition-opacity duration-300",
                                  currentCategory.color,
                                  hoveredSkill === skill.name ? "opacity-100" : "opacity-0"
                                )} />
                                
                                {/* Content */}
                                <div className="relative z-10">
                                  <div className="flex items-center justify-between mb-3">
                                    <span className={cn(
                                      "font-semibold text-sm transition-colors flex-1",
                                      hoveredSkill === skill.name ? "text-white" : "text-slate-800 dark:text-slate-200"
                                    )}>
                                      {skill.name}
                                    </span>
                                    <AnimatedCounter 
                                      value={skill.level} 
                                      isVisible={isVisible} 
                                      delay={i * 150}
                                      className={cn(
                                        "text-xs font-bold transition-colors mr-2 tabular-nums",
                                        hoveredSkill === skill.name ? "text-white/90" : "text-slate-500 dark:text-slate-400"
                                      )}
                                    />
                                    <CheckCircle2 className={cn(
                                      "w-4 h-4 flex-shrink-0 transition-all",
                                      hoveredSkill === skill.name 
                                        ? "text-white/80" 
                                        : currentCategory.textColor
                                    )} />
                                  </div>
                                  
                                  {/* Animated Progress Bar */}
                                  <div className={cn(
                                    "h-2.5 rounded-full overflow-hidden transition-colors",
                                    hoveredSkill === skill.name ? "bg-white/20" : "bg-slate-200 dark:bg-slate-700"
                                  )}>
                                    <div 
                                      className={cn(
                                        "h-full rounded-full transition-all ease-out",
                                        hoveredSkill === skill.name 
                                          ? "bg-white" 
                                          : `bg-gradient-to-r ${currentCategory.lightColor}`
                                      )}
                                      style={{ 
                                        width: isVisible ? `${skill.level}%` : '0%',
                                        transitionDuration: '1.2s',
                                        transitionDelay: `${i * 150}ms`
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="top" 
                            className="max-w-xs bg-slate-900 dark:bg-slate-800 text-white px-4 py-3 rounded-xl shadow-xl border-0"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className={cn("w-2 h-2 rounded-full bg-gradient-to-r", currentCategory.color)} />
                                <span className="font-semibold text-sm">{skill.name}</span>
                              </div>
                              <p className="text-xs text-slate-300 leading-relaxed">{skill.tooltip}</p>
                              <div className="flex items-center gap-2 pt-1 border-t border-slate-700">
                                <span className="text-xs text-slate-400">Proficiency:</span>
                                <span className={cn(
                                  "text-xs font-bold",
                                  skill.level >= 90 ? "text-emerald-400" : 
                                  skill.level >= 80 ? "text-blue-400" : 
                                  skill.level >= 70 ? "text-amber-400" : "text-slate-400"
                                )}>
                                  {skill.level >= 90 ? "Expert" : 
                                   skill.level >= 80 ? "Advanced" : 
                                   skill.level >= 70 ? "Proficient" : "Developing"}
                                </span>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </CardContent>
              </Card>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Tools & Platforms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
              Modern tools for exceptional product outcomes
            </p>
          </div>
          
          {/* Tools Grid by Category */}
          <div className="space-y-8">
            {Object.entries(toolCategories).map(([key, category]) => (
              <div key={key} className="relative group/row">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">{category.title}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                </div>
                
                {/* Tools Row with Sliding Animation */}
                <TooltipProvider delayDuration={200}>
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 group-hover/row:animate-slide-tools">
                    {category.tools.map((tool, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <div 
                              className="group relative"
                              onMouseEnter={() => setHoveredTool(tool.name)}
                              onMouseLeave={() => setHoveredTool(null)}
                              onClick={() => setSelectedTool({ ...tool, categoryTitle: category.title })}
                            >
                              <div className={cn(
                                "relative p-4 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden",
                                hoveredTool === tool.name
                                  ? "border-white/30 shadow-2xl scale-105 -translate-y-1"
                                  : "border border-white/20 dark:border-white/10",
                                // Glassy background
                                "bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl",
                                "hover:bg-white/80 dark:hover:bg-slate-800/80"
                              )}>
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 dark:from-white/5 dark:to-transparent rounded-2xl pointer-events-none" />
                                
                                {/* Colored glow on hover */}
                                <div className={cn(
                                  "absolute -inset-1 bg-gradient-to-br rounded-2xl blur-xl transition-opacity duration-300 -z-10",
                                  tool.color,
                                  hoveredTool === tool.name ? "opacity-40" : "opacity-0"
                                )} />
                                
                                {/* Inner border highlight */}
                                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/60 to-transparent dark:from-white/10 pointer-events-none" />
                                
                                {/* Shine effect */}
                                <div className={cn(
                                  "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full transition-transform duration-700",
                                  hoveredTool === tool.name && "translate-x-full"
                                )} />
                                
                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                  {/* Icon with gradient background and glow */}
                                  <div className={cn(
                                    "p-3 rounded-xl transition-all duration-300 shadow-lg",
                                    "bg-gradient-to-br",
                                    tool.color,
                                    hoveredTool === tool.name 
                                      ? "scale-110 shadow-xl" 
                                      : "shadow-md"
                                  )}>
                                    <div className="text-white">
                                      {tool.icon}
                                    </div>
                                  </div>
                                  <div className="text-center">
                                    <h4 className="font-bold text-sm text-slate-800 dark:text-white">
                                      {tool.name}
                                    </h4>
                                    <p className="text-xs mt-0.5 text-slate-500 dark:text-slate-400">
                                      {tool.description}
                                    </p>
                                  </div>
                                  {/* Click indicator */}
                                  <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                                    <span>Click for details</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent 
                            side="top" 
                            className="max-w-xs bg-slate-900 dark:bg-slate-800 text-white px-3 py-2 rounded-lg shadow-xl border-0 z-50"
                          >
                            <span className="text-xs">Click to see more details</span>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </TooltipProvider>
              </div>
            ))}
          </div>

          {/* Tool Detail Dialog */}
          <Dialog open={!!selectedTool} onOpenChange={(open) => !open && setSelectedTool(null)}>
            <DialogContent className="sm:max-w-md bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              {selectedTool && (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={cn(
                        "p-4 rounded-2xl shadow-xl bg-gradient-to-br",
                        selectedTool.color
                      )}>
                        <div className="text-white scale-125">
                          {selectedTool.icon}
                        </div>
                      </div>
                      <div>
                        <DialogTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                          {selectedTool.name}
                        </DialogTitle>
                        <Badge variant="secondary" className="mt-1">
                          {selectedTool.categoryTitle}
                        </Badge>
                      </div>
                    </div>
                  </DialogHeader>
                  
                  <div className="space-y-4 mt-4">
                    {/* Description */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">About</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {selectedTool.tooltip}
                      </p>
                    </div>
                    
                    {/* Use Cases */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Use Cases</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Product development and collaboration</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Cross-functional team workflows</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>Stakeholder presentations</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Proficiency */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Proficiency Level</h4>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full rounded-full bg-gradient-to-r", selectedTool.color)}
                            style={{ width: '85%' }}
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Expert</span>
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
