import { useState } from "react";
import { Target, BarChart3, Palette, Code, Calendar, PieChart, FileText, BarChart, MessageSquare, Search, Workflow, Bot, Globe, Cloud, Boxes, Zap, Settings, Sliders, Award, Sparkles, TrendingUp, ArrowRight, Star, CheckCircle2, Layers } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("strategy");
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

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
        { name: "Product Discovery", level: 95 },
        { name: "Market Research", level: 90 },
        { name: "Competitive Analysis", level: 88 },
        { name: "Product Roadmap", level: 92 },
        { name: "Go-to-Market", level: 85 },
        { name: "MVP Development", level: 94 }
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
        { name: "User Analytics", level: 92 },
        { name: "A/B Testing", level: 88 },
        { name: "KPI Tracking", level: 90 },
        { name: "Data Visualization", level: 85 },
        { name: "Performance Metrics", level: 87 },
        { name: "Conversion Optimization", level: 86 }
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
        { name: "User Research", level: 90 },
        { name: "Journey Mapping", level: 88 },
        { name: "Wireframing", level: 92 },
        { name: "Usability Testing", level: 85 },
        { name: "Design Systems", level: 83 },
        { name: "Accessibility", level: 80 }
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
        { name: "Agile/Scrum", level: 94 },
        { name: "API Design", level: 82 },
        { name: "Database Basics", level: 78 },
        { name: "Tech Documentation", level: 88 },
        { name: "System Architecture", level: 75 },
        { name: "DevOps Basics", level: 72 }
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
        { name: "Figma", description: "UI/UX Design", color: "from-pink-500 to-rose-600" },
        { name: "Adobe XD", description: "Prototyping", color: "from-purple-500 to-violet-600" },
        { name: "Canva", description: "Graphics", color: "from-cyan-500 to-blue-600" },
        { name: "Sketch", description: "Interface", color: "from-amber-500 to-orange-600" },
        { name: "Framer", description: "Motion", color: "from-teal-500 to-emerald-600" },
      ]
    },
    management: {
      title: "Management",
      icon: <Calendar className="w-4 h-4" />,
      tools: [
        { name: "Jira", description: "Agile PM", color: "from-blue-500 to-indigo-600" },
        { name: "Notion", description: "Docs", color: "from-slate-600 to-gray-700" },
        { name: "Trello", description: "Kanban", color: "from-sky-500 to-blue-600" },
        { name: "Asana", description: "Tasks", color: "from-rose-500 to-red-600" },
        { name: "Linear", description: "Issues", color: "from-violet-500 to-purple-600" },
      ]
    },
    analytics: {
      title: "Analytics",
      icon: <PieChart className="w-4 h-4" />,
      tools: [
        { name: "Mixpanel", description: "Analytics", color: "from-purple-500 to-pink-600" },
        { name: "GA4", description: "Web Stats", color: "from-green-500 to-emerald-600" },
        { name: "Amplitude", description: "Product", color: "from-blue-500 to-cyan-600" },
        { name: "Tableau", description: "Viz", color: "from-indigo-500 to-blue-600" },
        { name: "Hotjar", description: "Heatmaps", color: "from-orange-500 to-amber-600" },
      ]
    },
    ai: {
      title: "AI Tools",
      icon: <Bot className="w-4 h-4" />,
      tools: [
        { name: "ChatGPT", description: "AI Chat", color: "from-green-500 to-emerald-600" },
        { name: "Claude", description: "AI", color: "from-amber-600 to-orange-700" },
        { name: "n8n", description: "Automation", color: "from-rose-500 to-red-600" },
        { name: "Zapier", description: "Connect", color: "from-orange-500 to-amber-600" },
        { name: "Make", description: "Visual", color: "from-indigo-500 to-purple-600" },
      ]
    },
    development: {
      title: "Dev Tools",
      icon: <Code className="w-4 h-4" />,
      tools: [
        { name: "GitHub", description: "Code", color: "from-slate-700 to-gray-800" },
        { name: "Postman", description: "API", color: "from-orange-500 to-red-600" },
        { name: "Docker", description: "Container", color: "from-sky-500 to-blue-700" },
        { name: "VS Code", description: "Editor", color: "from-blue-500 to-blue-700" },
        { name: "AWS", description: "Cloud", color: "from-amber-500 to-orange-600" },
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
            <div className="relative animate-fade-in">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentCategory.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className="group relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
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
                                "font-semibold text-sm transition-colors",
                                hoveredSkill === skill.name ? "text-white" : "text-slate-800 dark:text-slate-200"
                              )}>
                                {skill.name}
                              </span>
                              <CheckCircle2 className={cn(
                                "w-5 h-5 transition-all",
                                hoveredSkill === skill.name 
                                  ? "text-white/80 scale-110" 
                                  : currentCategory.textColor
                              )} />
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="relative">
                              <div className={cn(
                                "h-2 rounded-full overflow-hidden transition-colors",
                                hoveredSkill === skill.name ? "bg-white/20" : "bg-slate-200 dark:bg-slate-700"
                              )}>
                                <div 
                                  className={cn(
                                    "h-full rounded-full transition-all duration-700 ease-out",
                                    hoveredSkill === skill.name 
                                      ? "bg-white" 
                                      : `bg-gradient-to-r ${currentCategory.lightColor}`
                                  )}
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                              <span className={cn(
                                "absolute right-0 -top-6 text-xs font-bold transition-colors",
                                hoveredSkill === skill.name ? "text-white/80" : "text-slate-500"
                              )}>
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
              <div key={key} className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 dark:text-white">{category.title}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 dark:from-slate-700 to-transparent" />
                </div>
                
                {/* Tools Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {category.tools.map((tool, index) => (
                    <div 
                      key={index}
                      className="group relative"
                      onMouseEnter={() => setHoveredTool(tool.name)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      <div className={cn(
                        "relative p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden text-center",
                        hoveredTool === tool.name
                          ? "border-transparent shadow-xl scale-105 -translate-y-1"
                          : "border-slate-200/50 dark:border-slate-700/50 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"
                      )}>
                        {/* Gradient background on hover */}
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br transition-opacity duration-300",
                          tool.color,
                          hoveredTool === tool.name ? "opacity-100" : "opacity-0"
                        )} />
                        
                        {/* Shine effect */}
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-700",
                          hoveredTool === tool.name && "translate-x-full"
                        )} />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h4 className={cn(
                            "font-bold text-sm transition-colors",
                            hoveredTool === tool.name ? "text-white" : "text-slate-800 dark:text-white"
                          )}>
                            {tool.name}
                          </h4>
                          <p className={cn(
                            "text-xs mt-1 transition-colors",
                            hoveredTool === tool.name ? "text-white/80" : "text-slate-500 dark:text-slate-400"
                          )}>
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
