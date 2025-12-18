import { useState } from "react";
import { Target, BarChart3, Palette, Code, Calendar, PieChart, FileText, BarChart, MessageSquare, Search, Workflow, Bot, Globe, Cloud, Boxes, Zap, Settings, Sliders, Award, Sparkles, TrendingUp, MousePointer } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("strategy");

  const handleCertificationClick = () => {
    window.open('https://www.canva.com/design/DAGrQ2ETbAE/JvZhDbPAJAXcsMx0uQ4dYA/view', '_blank');
  };

  const skillCategories = [
    {
      id: "strategy",
      title: "Product Strategy",
      description: "Strategic product planning with market-driven insights and business impact focus",
      icon: <Target className="w-5 h-5" />,
      skills: ["Product Discovery", "Market Research", "Competitive Analysis", "Product Vision & Roadmap", "Go-to-Market Strategy", "MVP Development"],
      color: "from-blue-500 to-cyan-500",
      glowColor: "shadow-blue-500/30",
      accentColor: "blue"
    },
    {
      id: "analytics",
      title: "Data & Analytics", 
      description: "Data-driven decision making through comprehensive user behavior analysis",
      icon: <BarChart3 className="w-5 h-5" />,
      skills: ["User Analytics", "A/B Testing", "KPI Definition & Tracking", "Data Visualization", "Performance Metrics", "Conversion Optimization"],
      color: "from-emerald-500 to-green-500",
      glowColor: "shadow-emerald-500/30",
      accentColor: "emerald"
    },
    {
      id: "ux",
      title: "User Experience",
      description: "User-centered design approach with focus on exceptional user journeys",
      icon: <Palette className="w-5 h-5" />,
      skills: ["User Research", "Journey Mapping", "Wireframing & Prototyping", "Usability Testing", "Design Systems", "Accessibility"],
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/30",
      accentColor: "purple"
    },
    {
      id: "technical",
      title: "Technical Leadership",
      description: "Technical collaboration and system architecture understanding",
      icon: <Code className="w-5 h-5" />,
      skills: ["Agile/Scrum Methodologies", "API Design", "Database Fundamentals", "Technical Documentation", "System Architecture", "DevOps Basics"],
      color: "from-orange-500 to-red-500",
      glowColor: "shadow-orange-500/30",
      accentColor: "orange"
    }
  ];

  const toolCategories = {
    design: {
      tools: [
        { name: "Figma", icon: <Palette className="w-4 h-4" />, color: "from-pink-500 to-rose-500", description: "UI/UX Design" },
        { name: "Adobe XD", icon: <Palette className="w-4 h-4" />, color: "from-purple-500 to-violet-500", description: "Prototyping" },
        { name: "Canva", icon: <Palette className="w-4 h-4" />, color: "from-blue-500 to-cyan-500", description: "Graphics" },
        { name: "Sketch", icon: <Palette className="w-4 h-4" />, color: "from-yellow-500 to-orange-500", description: "Interface" },
        { name: "Framer", icon: <Palette className="w-4 h-4" />, color: "from-teal-500 to-emerald-500", description: "Motion" },
      ],
      accent: "pink"
    },
    management: {
      tools: [
        { name: "Jira", icon: <Calendar className="w-4 h-4" />, color: "from-blue-500 to-indigo-500", description: "Agile PM" },
        { name: "Notion", icon: <FileText className="w-4 h-4" />, color: "from-slate-500 to-gray-500", description: "Docs" },
        { name: "Trello", icon: <FileText className="w-4 h-4" />, color: "from-sky-500 to-blue-500", description: "Kanban" },
        { name: "Asana", icon: <FileText className="w-4 h-4" />, color: "from-orange-500 to-red-500", description: "Tasks" },
        { name: "Linear", icon: <Calendar className="w-4 h-4" />, color: "from-violet-500 to-purple-500", description: "Issues" },
        { name: "Monday.com", icon: <Calendar className="w-4 h-4" />, color: "from-green-500 to-emerald-500", description: "Collab" },
      ],
      accent: "blue"
    },
    analytics: {
      tools: [
        { name: "Mixpanel", icon: <PieChart className="w-4 h-4" />, color: "from-purple-500 to-pink-500", description: "Analytics" },
        { name: "Google Analytics", icon: <BarChart className="w-4 h-4" />, color: "from-green-500 to-teal-500", description: "Web Stats" },
        { name: "Amplitude", icon: <BarChart className="w-4 h-4" />, color: "from-blue-500 to-cyan-500", description: "Product" },
        { name: "Tableau", icon: <BarChart className="w-4 h-4" />, color: "from-indigo-500 to-blue-500", description: "Viz" },
        { name: "Segment", icon: <Sliders className="w-4 h-4" />, color: "from-teal-500 to-green-500", description: "CDP" },
        { name: "Hotjar", icon: <Search className="w-4 h-4" />, color: "from-orange-500 to-yellow-500", description: "Heatmaps" },
      ],
      accent: "emerald"
    },
    communication: {
      tools: [
        { name: "Slack", icon: <MessageSquare className="w-4 h-4" />, color: "from-indigo-500 to-purple-500", description: "Chat" },
        { name: "Miro", icon: <Workflow className="w-4 h-4" />, color: "from-yellow-500 to-amber-500", description: "Whiteboard" },
        { name: "Zoom", icon: <Globe className="w-4 h-4" />, color: "from-blue-500 to-sky-500", description: "Video" },
        { name: "Discord", icon: <MessageSquare className="w-4 h-4" />, color: "from-violet-500 to-indigo-500", description: "Community" },
        { name: "Teams", icon: <MessageSquare className="w-4 h-4" />, color: "from-purple-500 to-violet-500", description: "Collab" },
        { name: "Dovetail", icon: <Search className="w-4 h-4" />, color: "from-teal-500 to-cyan-500", description: "Research" },
      ],
      accent: "violet"
    },
    development: {
      tools: [
        { name: "GitHub", icon: <Code className="w-4 h-4" />, color: "from-slate-600 to-gray-700", description: "Code" },
        { name: "GitLab", icon: <Code className="w-4 h-4" />, color: "from-orange-500 to-red-500", description: "DevOps" },
        { name: "Postman", icon: <Globe className="w-4 h-4" />, color: "from-orange-400 to-orange-600", description: "API" },
        { name: "Docker", icon: <Boxes className="w-4 h-4" />, color: "from-sky-500 to-blue-600", description: "Container" },
        { name: "VS Code", icon: <Code className="w-4 h-4" />, color: "from-blue-500 to-blue-600", description: "Editor" },
        { name: "AWS", icon: <Cloud className="w-4 h-4" />, color: "from-yellow-500 to-orange-500", description: "Cloud" },
      ],
      accent: "orange"
    },
    ai: {
      tools: [
        { name: "ChatGPT", icon: <Bot className="w-4 h-4" />, color: "from-green-500 to-emerald-500", description: "AI Chat" },
        { name: "Claude", icon: <Bot className="w-4 h-4" />, color: "from-purple-500 to-violet-500", description: "AI" },
        { name: "Superagent", icon: <Zap className="w-4 h-4" />, color: "from-rose-500 to-pink-500", description: "Agents" },
        { name: "Autogen", icon: <Settings className="w-4 h-4" />, color: "from-fuchsia-500 to-purple-500", description: "Multi-AI" },
        { name: "n8n", icon: <Workflow className="w-4 h-4" />, color: "from-orange-500 to-red-500", description: "Automation" },
        { name: "Flowise", icon: <Workflow className="w-4 h-4" />, color: "from-green-500 to-teal-500", description: "Flow AI" },
        { name: "Zapier", icon: <Workflow className="w-4 h-4" />, color: "from-orange-500 to-amber-500", description: "Connect" },
        { name: "Make", icon: <Workflow className="w-4 h-4" />, color: "from-indigo-500 to-purple-500", description: "Visual" },
      ],
      accent: "violet"
    }
  };

  const getAllTools = () => {
    return Object.entries(toolCategories).flatMap(([category, data]) => 
      data.tools.map(tool => ({ ...tool, category }))
    );
  };

  return (
    <div className="w-full">
      <section className="max-w-6xl mx-auto relative pb-16">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Hexagon Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <polygon points="25,0 50,14.5 50,43.5 25,58 0,43.5 0,14.5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
          
          {/* Floating Orbs */}
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-[5%] w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
          <div className="absolute bottom-20 left-[20%] w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12 relative">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-blue-200/50 dark:border-blue-700/50 shadow-lg mb-6 group hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
              <div className="absolute inset-0 blur-sm bg-blue-500/50 rounded-full animate-ping" />
            </div>
            <span className="font-semibold text-sm bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Product Management
            <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
                Excellence
              </span>
              {/* Underline Animation */}
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" fill="none" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" className="animate-[dash_3s_ease-in-out_infinite]" strokeDasharray="200" strokeDashoffset="0" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-6">
            Comprehensive expertise across the full product lifecycle
          </p>

          {/* Certification Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={handleCertificationClick}
              className="group relative px-8 py-4 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-[spin_4s_linear_infinite] blur-xl opacity-50" />
                <div className="h-full w-full rounded-2xl bg-white dark:bg-slate-900 backdrop-blur-xl" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 flex items-center gap-3">
                <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl text-white shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-shadow">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-slate-800 dark:text-white">
                  View Certifications
                </span>
                <TrendingUp className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>

        {/* Skills Categories - Interactive Cards */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "group relative p-4 rounded-2xl transition-all duration-500 text-left overflow-hidden",
                  activeCategory === category.id
                    ? `bg-gradient-to-br ${category.color} text-white shadow-xl ${category.glowColor}`
                    : "bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-lg"
                )}
              >
                {/* Animated Background for active */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-2xl animate-pulse" />
                    <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-2xl animate-pulse [animation-delay:1s]" />
                  </div>
                )}
                
                <div className="relative z-10">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-white/20"
                      : `bg-gradient-to-br ${category.color} text-white shadow-lg`
                  )}>
                    {category.icon}
                  </div>
                  <h3 className={cn(
                    "font-bold text-sm mb-1",
                    activeCategory !== category.id && "text-slate-800 dark:text-white"
                  )}>
                    {category.title}
                  </h3>
                  <p className={cn(
                    "text-xs line-clamp-2",
                    activeCategory === category.id
                      ? "text-white/80"
                      : "text-slate-500 dark:text-slate-400"
                  )}>
                    {category.description}
                  </p>
                </div>
                
                {/* Hover indicator */}
                <div className={cn(
                  "absolute bottom-0 left-0 h-1 bg-gradient-to-r transition-all duration-300",
                  category.color,
                  activeCategory === category.id ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </button>
            ))}
          </div>

          {/* Skills Grid for Active Category */}
          {skillCategories.map((category) => (
            category.id === activeCategory && (
              <Card key={category.id} className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden animate-fade-in">
                {/* Gradient Top Border */}
                <div className={`h-1.5 bg-gradient-to-r ${category.color}`} />
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-xl ${category.glowColor}`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600 dark:text-slate-400">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill, i) => (
                      <div 
                        key={i} 
                        className="group relative"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className={cn(
                          "relative p-4 rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden",
                          hoveredSkill === skill
                            ? `bg-gradient-to-br ${category.color} text-white border-transparent shadow-lg ${category.glowColor}`
                            : "bg-white dark:bg-slate-700/50 border-slate-200/50 dark:border-slate-600/50 hover:border-slate-300 dark:hover:border-slate-500"
                        )}>
                          {/* Shine effect */}
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700",
                            hoveredSkill === skill && "translate-x-full"
                          )} />
                          
                          <div className="relative z-10 flex items-center gap-3">
                            <div className={cn(
                              "w-2 h-2 rounded-full transition-all duration-300",
                              hoveredSkill === skill
                                ? "bg-white scale-125"
                                : `bg-gradient-to-br ${category.color}`
                            )} />
                            <span className={cn(
                              "font-medium text-sm",
                              hoveredSkill !== skill && "text-slate-700 dark:text-slate-200"
                            )}>
                              {skill}
                            </span>
                          </div>
                          
                          {/* Hover cursor indicator */}
                          {hoveredSkill === skill && (
                            <MousePointer className="absolute bottom-2 right-2 w-4 h-4 text-white/50 animate-bounce" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="relative">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 px-4 py-2 rounded-full mb-4">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="font-semibold text-sm text-slate-600 dark:text-slate-300">Powerful Toolkit</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Tools & Platforms
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Comprehensive toolkit for modern product management
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            {/* Scrollable Tab List */}
            <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4">
              <TabsList className="inline-flex w-auto min-w-full md:grid md:w-full md:max-w-4xl md:mx-auto md:grid-cols-7 h-auto p-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl shadow-xl gap-1">
                <TabsTrigger 
                  value="all" 
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-700 data-[state=active]:to-slate-800 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <Target className="w-4 h-4" />
                  <span>All</span>
                </TabsTrigger>
                {Object.entries(toolCategories).map(([key, data]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 capitalize"
                  >
                    {data.tools[0]?.icon}
                    <span className="hidden sm:inline">{key}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {getAllTools().map((tool, index) => (
                  <ToolCard key={index} tool={tool} index={index} />
                ))}
              </div>
            </TabsContent>

            {Object.entries(toolCategories).map(([category, data]) => (
              <TabsContent key={category} value={category} className="mt-0 animate-fade-in">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {data.tools.map((tool, index) => (
                    <ToolCard key={index} tool={tool} index={index} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

// Tool Card Component
interface ToolCardProps {
  tool: { name: string; icon: React.ReactNode; color: string; description: string };
  index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
  return (
    <div 
      className="group relative bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200/50 dark:border-slate-700/50 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 overflow-hidden"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Gradient Background on Hover */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
        tool.color
      )} />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br shadow-lg",
          tool.color,
          "text-white group-hover:scale-110 group-hover:shadow-xl"
        )}>
          {tool.icon}
        </div>
        <div>
          <h4 className="font-bold text-sm text-slate-800 dark:text-white group-hover:text-white transition-colors">
            {tool.name}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-white/80 transition-colors mt-0.5">
            {tool.description}
          </p>
        </div>
      </div>
      
      {/* Corner Accent */}
      <div className={cn(
        "absolute top-0 right-0 w-16 h-16 bg-gradient-to-br opacity-10 group-hover:opacity-0 transition-opacity rounded-bl-full",
        tool.color
      )} />
    </div>
  );
};
