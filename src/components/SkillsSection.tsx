import { Target, BarChart3, Palette, Code, Lightbulb, Users, TrendingUp, Zap, Calendar, PieChart, FileText, BarChart, HelpCircle, MessageSquare, Search, Workflow, Bot, Cpu, Globe, Database, Cloud, Smartphone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SkillsSection = () => {
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

  const coreCompetencies = [
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, level: 95 },
    { name: "Stakeholder Management", icon: <Users className="w-5 h-5" />, level: 90 },
    { name: "Data Analysis", icon: <TrendingUp className="w-5 h-5" />, level: 85 },
    { name: "Product Innovation", icon: <Zap className="w-5 h-5" />, level: 88 }
  ];

  const toolCategories = {
    design: [
      { name: "Figma", icon: <Palette className="w-5 h-5" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300", description: "UI/UX Design" },
      { name: "Adobe XD", icon: <Palette className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Prototyping" },
      { name: "Sketch", icon: <Palette className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", description: "Interface Design" },
      { name: "Canva", icon: <Palette className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Graphic Design" },
      { name: "Framer", icon: <Palette className="w-5 h-5" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300", description: "Interactive Design" },
    ],
    management: [
      { name: "Jira", icon: <Calendar className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Project Management" },
      { name: "Notion", icon: <FileText className="w-5 h-5" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300", description: "Documentation" },
      { name: "Trello", icon: <Calendar className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Task Management" },
      { name: "Monday.com", icon: <Calendar className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "Workflow Management" },
      { name: "Asana", icon: <Calendar className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "Team Collaboration" },
      { name: "Linear", icon: <Calendar className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Issue Tracking" },
    ],
    analytics: [
      { name: "Mixpanel", icon: <PieChart className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "User Analytics" },
      { name: "Google Analytics", icon: <BarChart className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "Web Analytics" },
      { name: "Hotjar", icon: <HelpCircle className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "User Behavior" },
      { name: "Amplitude", icon: <TrendingUp className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Product Analytics" },
      { name: "Tableau", icon: <BarChart className="w-5 h-5" />, color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300", description: "Data Visualization" },
      { name: "Segment", icon: <Database className="w-5 h-5" />, color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300", description: "Customer Data" },
    ],
    communication: [
      { name: "Slack", icon: <MessageSquare className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Team Communication" },
      { name: "Dovetail", icon: <Search className="w-5 h-5" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300", description: "User Research" },
      { name: "Zoom", icon: <Globe className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Video Conferencing" },
      { name: "Miro", icon: <Workflow className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", description: "Collaboration Board" },
      { name: "Discord", icon: <MessageSquare className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Community Chat" },
      { name: "Teams", icon: <MessageSquare className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Microsoft Teams" },
    ],
    development: [
      { name: "GitHub", icon: <Code className="w-5 h-5" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300", description: "Version Control" },
      { name: "GitLab", icon: <Code className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "DevOps Platform" },
      { name: "Postman", icon: <Globe className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "API Testing" },
      { name: "Docker", icon: <Cloud className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Containerization" },
      { name: "AWS", icon: <Cloud className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", description: "Cloud Services" },
      { name: "VS Code", icon: <Code className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Code Editor" },
    ],
    ai: [
      { name: "Flowise", icon: <Workflow className="w-5 h-5" />, color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300", description: "AI Workflow Builder" },
      { name: "SuperAgent", icon: <Bot className="w-5 h-5" />, color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300", description: "AI Agent Platform" },
      { name: "AutogenStudio", icon: <Cpu className="w-5 h-5" />, color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300", description: "Multi-Agent Framework" },
      { name: "N8n", icon: <Workflow className="w-5 h-5" />, color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300", description: "Workflow Automation" },
      { name: "ChatGPT", icon: <Bot className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "AI Assistant" },
      { name: "Claude", icon: <Bot className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "AI Assistant" },
      { name: "Zapier", icon: <Workflow className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "Automation Platform" },
      { name: "Make", icon: <Workflow className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Visual Automation" },
    ]
  };

  // Get all tools combined for the "All" tab
  const getAllTools = () => {
    return Object.entries(toolCategories).flatMap(([category, tools]) => 
      tools.map(tool => ({ ...tool, category }))
    );
  };

  return (
    <section className="max-w-7xl mx-auto relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-8 py-4 rounded-full text-blue-600 dark:text-blue-400 font-bold text-lg mb-8 border border-blue-200/50 dark:border-blue-700/50 shadow-lg backdrop-blur-sm">
            <Target className="w-6 h-6" />
            <span>Skills & Expertise</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <h2 className="text-6xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
            Comprehensive Product 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              Management Skills
            </span>
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
          </div>
          <p className="text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Expertise across the full product lifecycle with focus on 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> user-centric solutions </span>
            and 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> business impact</span>
          </p>
        </div>
      
        {/* Enhanced Skills Categories with Modern Cards */}
        <div className="mb-24">
          <Tabs defaultValue="strategy" className="w-full">
            <div className="mb-12 overflow-x-auto">
              <TabsList className="inline-flex h-auto min-w-full p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-3xl shadow-2xl mx-auto">
                <div className="flex gap-3 min-w-max">
                  {skillCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="group relative flex items-center gap-4 px-10 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-900 data-[state=active]:to-slate-800 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-slate-500/25 hover:bg-slate-50 dark:hover:bg-slate-700/50 whitespace-nowrap data-[state=active]:scale-105"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-700 group-data-[state=active]:bg-white/20 transition-all duration-300 group-data-[state=active]:shadow-lg group-hover:scale-110">
                        {category.icon}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-lg">{category.title}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 group-data-[state=active]:text-white/70">
                          {category.skills.length} specialized skills
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-data-[state=active]:opacity-10 transition-opacity duration-300" 
                           style={{background: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`}}>
                      </div>
                    </TabsTrigger>
                  ))}
                </div>
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-3xl p-16 shadow-2xl relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${category.color} rounded-t-3xl`}></div>
                  
                  {/* Floating Decorative Elements */}
                  <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-indigo-500/5 to-pink-500/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-10 mb-16">
                      <div className={`${category.iconBg} text-white p-8 rounded-3xl shadow-2xl hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                        <Target className="w-10 h-10 relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">{category.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="group relative overflow-hidden">
                          <div className="flex items-center gap-5 p-8 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-700 dark:to-slate-800/50 rounded-2xl border border-slate-200/60 dark:border-slate-600/60 hover:scale-105 hover:shadow-2xl transition-all duration-500 hover:border-blue-300 dark:hover:border-blue-600 relative overflow-hidden">
                            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-150 transition-transform duration-500 shadow-lg relative z-10`}></div>
                            <span className="text-slate-700 dark:text-slate-300 font-bold text-lg relative z-10">
                              {skill}
                            </span>
                            {/* Hover Background Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
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

        {/* Enhanced Core Competencies */}
        <div className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-800 dark:via-slate-800/95 dark:to-slate-700/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-3xl p-16 mb-24 shadow-2xl relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {coreCompetencies.map((competency, index) => (
                <div key={index} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="text-blue-500 dark:text-blue-400 p-5 bg-blue-100 dark:bg-blue-900/30 rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300">
                      {competency.icon}
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white text-2xl">{competency.name}</span>
                  </div>
                  <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner relative">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
                      style={{ width: `${competency.level}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-sm font-bold">
                        {competency.level}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced All Tools & Platforms */}
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">All Tools & Platforms</h3>
          
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-16 overflow-x-auto">
                <TabsList className="inline-flex h-auto min-w-full p-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-600/80 rounded-3xl shadow-2xl mx-auto">
                  <div className="grid grid-cols-3 lg:grid-cols-7 gap-3 min-w-max w-full">
                    <TabsTrigger 
                      value="all" 
                      className="group relative flex flex-col items-center gap-3 px-8 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-slate-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                    >
                      <Target className="w-6 h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">All Tools</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="design" 
                      className="group relative flex flex-col items-center gap-3 px-8 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-pink-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                    >
                      <Palette className="w-6 h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">Design</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="management" 
                      className="group relative flex flex-col items-center gap-3 px-8 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-blue-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                    >
                      <Calendar className="w-6 h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">Management</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="analytics" 
                      className="group relative flex flex-col items-center gap-3 px-8 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-emerald-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                    >
                      <BarChart3 className="w-6 h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">Analytics</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="communication" 
                      className="group relative flex flex-col items-center gap-3 px-8 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-orange-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                    >
                      <MessageSquare className="w-6 h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">Communication</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="development" 
                      className="group relative flex flex-col items-center gap-3 px-8 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-purple-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                    >
                      <Code className="w-6 h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">Development</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="ai" 
                      className="group relative flex flex-col items-center gap-3 px-8 py-6 rounded-2xl font-bold text-base transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-cyan-500 data-[state=active]:to-teal-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-cyan-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0 data-[state=active]:scale-105"
                    >
                      <Bot className="w-6 h-6 flex-shrink-0" />
                      <span className="whitespace-nowrap">AI & Automation</span>
                    </TabsTrigger>
                  </div>
                </TabsList>
              </div>

              {/* All Tools Tab */}
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {getAllTools().map((tool, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`p-4 rounded-2xl ${tool.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {tool.icon}
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-bold text-slate-900 dark:text-white text-lg">{tool.name}</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{tool.description}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Category Tabs */}
              {Object.entries(toolCategories).map(([category, tools]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tools.map((tool, index) => (
                      <div
                        key={index}
                        className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                      >
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className={`p-4 rounded-2xl ${tool.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            {tool.icon}
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-bold text-slate-900 dark:text-white text-lg">{tool.name}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{tool.description}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};