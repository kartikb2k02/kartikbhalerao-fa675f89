
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

  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-6 py-3 rounded-full text-blue-600 dark:text-blue-400 font-medium text-sm mb-8 border border-blue-200/50 dark:border-blue-700/50">
          <Target className="w-4 h-4" />
          <span>Skills & Expertise</span>
        </div>
        <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          Comprehensive Product 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"> Management </span>
          Skills
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Expertise across the full product lifecycle with focus on user-centric solutions and business impact
        </p>
      </div>
      
      {/* Enhanced Skills Categories */}
      <div className="mb-20">
        <Tabs defaultValue="strategy" className="w-full">
          <div className="mb-10 overflow-x-auto">
            <TabsList className="inline-flex h-auto min-w-full p-3 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-2xl mx-auto">
              <div className="flex gap-2 min-w-max">
                {skillCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="group relative flex items-center gap-3 px-8 py-5 rounded-xl font-semibold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-100 data-[state=active]:to-white data-[state=active]:text-slate-900 dark:data-[state=active]:from-slate-700 dark:data-[state=active]:to-slate-600 dark:data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-slate-500/20 hover:bg-slate-50 dark:hover:bg-slate-700/50 whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 group-data-[state=active]:bg-white dark:group-data-[state=active]:bg-slate-600 transition-all duration-300 group-data-[state=active]:shadow-lg">
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-sm">{category.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 group-data-[state=active]:text-slate-600 dark:group-data-[state=active]:text-slate-300">
                        {category.skills.length} skills
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-data-[state=active]:opacity-10 transition-opacity duration-300" 
                         style={{background: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`}}>
                    </div>
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.color} rounded-t-3xl`}></div>
                
                <div className="flex items-start gap-8 mb-12">
                  <div className={`${category.iconBg} text-white p-6 rounded-3xl shadow-xl hover:scale-110 transition-transform duration-300`}>
                    <Target className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{category.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="group flex items-center gap-4 p-6 bg-white/90 dark:bg-slate-700/90 rounded-2xl border border-slate-200/60 dark:border-slate-600/60 hover:scale-105 hover:shadow-xl transition-all duration-300">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform duration-300 shadow-lg`}></div>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold text-base">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Core Competencies */}
      <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-3xl p-12 mb-20 shadow-2xl">
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coreCompetencies.map((competency, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-blue-500 dark:text-blue-400 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl shadow-lg">
                  {competency.icon}
                </div>
                <span className="font-bold text-slate-900 dark:text-white text-xl">{competency.name}</span>
              </div>
              <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out shadow-sm relative overflow-hidden"
                  style={{ width: `${competency.level}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced All Tools & Platforms */}
      <div>
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">All Tools & Platforms</h3>
        
        <Tabs defaultValue="design" className="w-full">
          <div className="mb-12 overflow-x-auto">
            <TabsList className="inline-flex h-auto min-w-full p-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-600/80 rounded-2xl shadow-2xl mx-auto">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 min-w-max w-full">
                <TabsTrigger 
                  value="design" 
                  className="group relative flex flex-col items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-pink-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0"
                >
                  <Palette className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Design</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="management" 
                  className="group relative flex flex-col items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-blue-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0"
                >
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Management</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="group relative flex flex-col items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-emerald-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0"
                >
                  <BarChart3 className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Analytics</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="communication" 
                  className="group relative flex flex-col items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-yellow-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0"
                >
                  <MessageSquare className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Communication</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="development" 
                  className="group relative flex flex-col items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-slate-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0"
                >
                  <Code className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Development</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ai" 
                  className="group relative flex flex-col items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-2xl data-[state=active]:shadow-violet-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 min-w-0"
                >
                  <Bot className="w-5 h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">AI Tools</span>
                </TabsTrigger>
              </div>
            </TabsList>
          </div>

          {Object.entries(toolCategories).map(([category, tools]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-600/80 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] cursor-pointer overflow-hidden"
                  >
                    {/* Enhanced gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 rounded-2xl ${tool.color} group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                          {tool.icon}
                        </div>
                        <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {tool.name}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      
                      {/* Enhanced skill level indicator */}
                      <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-600/60">
                        <div className="flex items-center justify-between text-xs mb-3">
                          <span className="text-slate-500 dark:text-slate-400 font-medium">Proficiency</span>
                          <span className="text-slate-600 dark:text-slate-300 font-bold">{Math.floor((index % 3 + 3) * 20)}%</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                                i < (index % 3 + 3) 
                                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg group-hover:shadow-blue-500/50' 
                                  : 'bg-slate-200 dark:bg-slate-600'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced hover glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
