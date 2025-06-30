import { Target, BarChart3, Palette, Code, Lightbulb, Users, TrendingUp, Zap, Calendar, PieChart, FileText, BarChart, HelpCircle, MessageSquare, Search, Workflow, Bot, Cpu, Globe, Database, Cloud, Smartphone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SkillsSection = () => {
  const skillCategories = [
    {
      id: "strategy",
      title: "Product Strategy",
      description: "Strategic product planning with focus on market fit and business impact",
      icon: <Target className="w-8 h-8" />,
      skills: ["Product Discovery", "Market Research", "Competitive Analysis", "Product Vision", "Go-to-Market Strategy"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-500"
    },
    {
      id: "analytics",
      title: "Data & Analytics",
      description: "Data-driven decision making and user behavior analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["User Analytics", "A/B Testing", "KPI Tracking", "Data Visualization", "Metrics Definition"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconBg: "bg-emerald-500"
    },
    {
      id: "ux",
      title: "User Experience",
      description: "User-centered design thinking and experience optimization",
      icon: <Palette className="w-8 h-8" />,
      skills: ["User Research", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-500"
    },
    {
      id: "technical",
      title: "Technical Collaboration",
      description: "Working effectively with engineering teams and understanding technical constraints",
      icon: <Code className="w-8 h-8" />,
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
      
      {/* Skills Categories */}
      <div className="mb-20">
        <Tabs defaultValue="strategy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 p-2 rounded-3xl shadow-lg">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center space-x-2 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:shadow-xl data-[state=active]:text-slate-900 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white data-[state=active]:scale-105"
              >
                <div className="w-5 h-5">
                  {category.icon}
                </div>
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${category.color} rounded-t-3xl`}></div>
                
                <div className="flex items-start space-x-8 mb-10">
                  <div className={`${category.iconBg} text-white p-5 rounded-3xl shadow-xl hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">{category.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-4 p-5 bg-white/80 dark:bg-slate-700/80 rounded-2xl border-2 border-slate-200/40 dark:border-slate-600/40 hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform duration-300`}></div>
                      <span className="text-slate-700 dark:text-slate-300 font-semibold">
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
      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200/60 dark:border-slate-700/60 rounded-3xl p-12 mb-20 shadow-2xl">
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {coreCompetencies.map((competency, index) => (
            <div key={index} className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="text-blue-500 dark:text-blue-400 p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                  {competency.icon}
                </div>
                <span className="font-bold text-slate-900 dark:text-white text-lg">{competency.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-auto font-semibold">{competency.level}%</span>
              </div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out shadow-sm"
                  style={{ width: `${competency.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Tools & Platforms */}
      <div>
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-10 text-center">Tools & Platforms</h3>
        
        <Tabs defaultValue="design" className="w-full">
          <div className="mb-12">
            <TabsList className="inline-flex h-auto p-1 bg-gradient-to-r from-white via-slate-50 to-white dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 backdrop-blur-sm border-2 border-slate-200/80 dark:border-slate-600/80 rounded-2xl shadow-2xl mx-auto">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 w-full">
                <TabsTrigger 
                  value="design" 
                  className="relative px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-pink-500/25 data-[state=active]:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600"
                >
                  <Palette className="w-4 h-4 mb-2 mx-auto" />
                  Design
                </TabsTrigger>
                <TabsTrigger 
                  value="management" 
                  className="relative px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-500/25 data-[state=active]:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600"
                >
                  <Calendar className="w-4 h-4 mb-2 mx-auto" />
                  Management
                </TabsTrigger>
                <TabsTrigger 
                  value="analytics" 
                  className="relative px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-emerald-500/25 data-[state=active]:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600"
                >
                  <BarChart3 className="w-4 h-4 mb-2 mx-auto" />
                  Analytics
                </TabsTrigger>
                <TabsTrigger 
                  value="communication" 
                  className="relative px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-yellow-500/25 data-[state=active]:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600"
                >
                  <MessageSquare className="w-4 h-4 mb-2 mx-auto" />
                  Communication
                </TabsTrigger>
                <TabsTrigger 
                  value="development" 
                  className="relative px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-slate-500/25 data-[state=active]:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600"
                >
                  <Code className="w-4 h-4 mb-2 mx-auto" />
                  Development
                </TabsTrigger>
                <TabsTrigger 
                  value="ai" 
                  className="relative px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-violet-500/25 data-[state=active]:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600"
                >
                  <Bot className="w-4 h-4 mb-2 mx-auto" />
                  AI Tools
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
                    className="group relative bg-gradient-to-br from-white via-white to-slate-50/80 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700/80 backdrop-blur-sm border-2 border-slate-200/80 dark:border-slate-600/80 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer overflow-hidden"
                  >
                    {/* Gradient background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/20 dark:to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 rounded-2xl ${tool.color} group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                          {tool.icon}
                        </div>
                        <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {tool.name}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                      
                      {/* Skill level indicator */}
                      <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-600/60">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-500 dark:text-slate-400 font-medium">Proficiency</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div 
                                key={i} 
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  i < (index % 3 + 3) 
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm' 
                                    : 'bg-slate-200 dark:bg-slate-600'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
