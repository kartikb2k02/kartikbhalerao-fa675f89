import { Target, BarChart3, Palette, Code, Lightbulb, Users, TrendingUp, Zap, Calendar, PieChart, FileText, BarChart, MessageSquare, Search, Workflow, Bot, Database, Cloud, Globe, HelpCircle, Cpu, Smartphone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CompactSkillsSection = () => {
  const skillCategories = [
    {
      id: "strategy",
      title: "Product Strategy",
      description: "Strategic product planning with focus on market fit and business impact",
      icon: <Target className="w-6 h-6" />,
      skills: ["Product Discovery", "Market Research", "Competitive Analysis", "Product Vision", "Go-to-Market Strategy"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-500"
    },
    {
      id: "analytics",
      title: "Data & Analytics", 
      description: "Data-driven decision making and user behavior analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["User Analytics", "A/B Testing", "KPI Tracking", "Data Visualization", "Metrics Definition"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconBg: "bg-emerald-500"
    },
    {
      id: "ux",
      title: "User Experience",
      description: "User-centered design thinking and experience optimization",
      icon: <Palette className="w-6 h-6" />,
      skills: ["User Research", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-purple-500 to-pink-500", 
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-500"
    },
    {
      id: "technical",
      title: "Technical Collaboration",
      description: "Working effectively with engineering teams and understanding technical constraints",
      icon: <Code className="w-6 h-6" />,
      skills: ["Agile/Scrum", "API Understanding", "SQL Basics", "Technical Documentation", "System Design"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconBg: "bg-orange-500"
    }
  ];

  const toolCategories = {
    design: [
      { name: "Figma", icon: <Palette className="w-5 h-5" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300", description: "UI/UX Design" },
      { name: "Adobe XD", icon: <Palette className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Prototyping" },
      { name: "Canva", icon: <Palette className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Graphic Design" },
      { name: "Framer", icon: <Palette className="w-5 h-5" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300", description: "Interactive Design" },
    ],
    management: [
      { name: "Jira", icon: <Calendar className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Project Management" },
      { name: "Notion", icon: <FileText className="w-5 h-5" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300", description: "Documentation" },
      { name: "Trello", icon: <Calendar className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Task Management" },
      { name: "Linear", icon: <Calendar className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Issue Tracking" },
    ],
    analytics: [
      { name: "Mixpanel", icon: <PieChart className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "User Analytics" },
      { name: "Google Analytics", icon: <BarChart className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "Web Analytics" },
      { name: "Amplitude", icon: <TrendingUp className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Product Analytics" },
      { name: "Tableau", icon: <BarChart className="w-5 h-5" />, color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300", description: "Data Visualization" },
    ],
    ai: [
      { name: "ChatGPT", icon: <Bot className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "AI Assistant" },
      { name: "Claude", icon: <Bot className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "AI Assistant" },
      { name: "Zapier", icon: <Workflow className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "Automation Platform" },
      { name: "N8n", icon: <Workflow className="w-5 h-5" />, color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300", description: "Workflow Automation" },
    ]
  };

  // Get all tools combined for the "All" tab
  const getAllTools = () => {
    return Object.entries(toolCategories).flatMap(([category, tools]) => 
      tools.map(tool => ({ ...tool, category }))
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-6 py-3 rounded-full text-blue-600 dark:text-blue-400 font-bold text-lg mb-6 border border-blue-200/50 dark:border-blue-700/50 shadow-lg backdrop-blur-sm">
            <Target className="w-5 h-5" />
            <span>Skills & Expertise</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Product Management
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              Excellence
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise across the full product lifecycle with focus on 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> user-centric solutions </span>
            and measurable 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> business impact</span>
          </p>
        </div>

        {/* Enhanced Skills Categories with Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="strategy" className="w-full">
            <div className="mb-6 overflow-x-auto">
              <TabsList className="inline-flex h-auto min-w-full p-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-xl mx-auto">
                <div className="flex gap-2 min-w-max">
                  {skillCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="group relative flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-900 data-[state=active]:to-slate-800 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 whitespace-nowrap data-[state=active]:scale-105"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 group-data-[state=active]:bg-white/20 transition-all duration-300">
                        {category.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-bold">{category.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 group-data-[state=active]:text-white/70">
                          {category.skills.length} skills
                        </div>
                      </div>
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-8 shadow-xl relative overflow-hidden mb-6">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.color} rounded-t-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-6 mb-8">
                      <div className={`${category.iconBg} text-white p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300`}>
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{category.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="group relative overflow-hidden">
                          <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-700 dark:to-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-600/60 hover:scale-105 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform duration-300 shadow-sm`}></div>
                            <span className="text-slate-700 dark:text-slate-300 font-medium">
                              {skill}
                            </span>
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Enhanced Tools Section with Categories */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Tools & Platforms</h3>
        
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-6 overflow-x-auto">
              <TabsList className="inline-flex h-auto min-w-full p-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-600/80 rounded-2xl shadow-xl mx-auto">
                <div className="grid grid-cols-5 gap-2 min-w-max w-full">
                  <TabsTrigger 
                    value="all" 
                    className="group relative flex flex-col items-center gap-2 px-3 py-3 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                  >
                    <Target className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">All</span>
                  </TabsTrigger>
                  <TabsTrigger value="design" className="group relative flex flex-col items-center gap-2 px-3 py-3 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105">
                    <Palette className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">Design</span>
                  </TabsTrigger>
                  <TabsTrigger value="management" className="group relative flex flex-col items-center gap-2 px-3 py-3 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">Mgmt</span>
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="group relative flex flex-col items-center gap-2 px-3 py-3 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105">
                    <BarChart3 className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">Analytics</span>
                  </TabsTrigger>
                  <TabsTrigger value="ai" className="group relative flex flex-col items-center gap-2 px-3 py-3 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105">
                    <Bot className="w-4 h-4 flex-shrink-0" />
                    <span className="whitespace-nowrap">AI</span>
                  </TabsTrigger>
                </div>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {getAllTools().map((tool, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-3 hover:scale-110 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <div className={`p-2 rounded-lg ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                        {tool.icon}
                      </div>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {Object.entries(toolCategories).map(([categoryKey, tools]) => (
              <TabsContent key={categoryKey} value={categoryKey} className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-4 hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className={`p-3 rounded-lg ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                          {tool.icon}
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">
                            {tool.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {tool.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};