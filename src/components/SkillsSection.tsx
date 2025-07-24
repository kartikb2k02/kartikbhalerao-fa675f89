
import { Target, BarChart3, Palette, Code, Calendar, PieChart, FileText, BarChart, MessageSquare, Search, Workflow, Bot, Globe, Database, Cloud } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const SkillsSection = () => {
  const skillCategories = [
    {
      id: "strategy",
      title: "Product Strategy",
      description: "Strategic product planning with market-driven insights and business impact focus",
      icon: <Target className="w-4 h-4" />,
      skills: ["Product Discovery", "Market Research", "Competitive Analysis", "Product Vision & Roadmap", "Go-to-Market Strategy", "MVP Development"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      tabColor: "data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:shadow-blue-500/25"
    },
    {
      id: "analytics",
      title: "Data & Analytics",
      description: "Data-driven decision making through comprehensive user behavior analysis",
      icon: <BarChart3 className="w-4 h-4" />,
      skills: ["User Analytics", "A/B Testing", "KPI Definition & Tracking", "Data Visualization", "Performance Metrics", "Conversion Optimization"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      tabColor: "data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:shadow-emerald-500/25"
    },
    {
      id: "ux",
      title: "User Experience",
      description: "User-centered design approach with focus on exceptional user journeys",
      icon: <Palette className="w-4 h-4" />,
      skills: ["User Research", "Journey Mapping", "Wireframing & Prototyping", "Usability Testing", "Design Systems", "Accessibility"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      tabColor: "data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:shadow-purple-500/25"
    },
    {
      id: "technical",
      title: "Technical Leadership",
      description: "Technical collaboration and system architecture understanding",
      icon: <Code className="w-4 h-4" />,
      skills: ["Agile/Scrum Methodologies", "API Design", "Database Fundamentals", "Technical Documentation", "System Architecture", "DevOps Basics"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      tabColor: "data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:shadow-orange-500/25"
    }
  ];

  const toolCategories = {
    design: {
      tools: [
        { name: "Figma", icon: <Palette className="w-4 h-4" />, color: "bg-gradient-to-br from-pink-50 to-pink-100 text-pink-700 dark:from-pink-900/30 dark:to-pink-800/30 dark:text-pink-300", description: "UI/UX Design & Prototyping" },
        { name: "Adobe XD", icon: <Palette className="w-4 h-4" />, color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300", description: "Interactive Prototyping" },
        { name: "Sketch", icon: <Palette className="w-4 h-4" />, color: "bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-700 dark:from-yellow-900/30 dark:to-yellow-800/30 dark:text-yellow-300", description: "Interface Design" },
        { name: "Framer", icon: <Palette className="w-4 h-4" />, color: "bg-gradient-to-br from-teal-50 to-teal-100 text-teal-700 dark:from-teal-900/30 dark:to-teal-800/30 dark:text-teal-300", description: "Advanced Prototyping" },
      ],
      tabColor: "data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:shadow-pink-500/25"
    },
    management: {
      tools: [
        { name: "Jira", icon: <Calendar className="w-4 h-4" />, color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-300", description: "Agile Project Management" },
        { name: "Notion", icon: <FileText className="w-4 h-4" />, color: "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 dark:from-gray-800/30 dark:to-gray-700/30 dark:text-gray-300", description: "Documentation & Planning" },
        { name: "Linear", icon: <Calendar className="w-4 h-4" />, color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300", description: "Modern Issue Tracking" },
        { name: "Monday.com", icon: <Calendar className="w-4 h-4" />, color: "bg-gradient-to-br from-green-50 to-green-100 text-green-700 dark:from-green-900/30 dark:to-green-800/30 dark:text-green-300", description: "Team Collaboration" },
      ],
      tabColor: "data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:shadow-blue-500/25"
    },
    analytics: {
      tools: [
        { name: "Mixpanel", icon: <PieChart className="w-4 h-4" />, color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300", description: "Advanced User Analytics" },
        { name: "Google Analytics", icon: <BarChart className="w-4 h-4" />, color: "bg-gradient-to-br from-green-50 to-green-100 text-green-700 dark:from-green-900/30 dark:to-green-800/30 dark:text-green-300", description: "Web Analytics Platform" },
        { name: "Amplitude", icon: <BarChart className="w-4 h-4" />, color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-300", description: "Product Analytics" },
        { name: "Hotjar", icon: <Search className="w-4 h-4" />, color: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 dark:from-orange-900/30 dark:to-orange-800/30 dark:text-orange-300", description: "User Behavior Analysis" },
      ],
      tabColor: "data-[state=active]:from-emerald-500 data-[state=active]:to-green-500 data-[state=active]:shadow-emerald-500/25"
    },
    communication: {
      tools: [
        { name: "Slack", icon: <MessageSquare className="w-4 h-4" />, color: "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 dark:from-indigo-900/30 dark:to-indigo-800/30 dark:text-indigo-300", description: "Team Communication" },
        { name: "Miro", icon: <Workflow className="w-4 h-4" />, color: "bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-700 dark:from-yellow-900/30 dark:to-yellow-800/30 dark:text-yellow-300", description: "Visual Collaboration" },
        { name: "Zoom", icon: <Globe className="w-4 h-4" />, color: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 dark:from-blue-900/30 dark:to-blue-800/30 dark:text-blue-300", description: "Video Conferencing" },
        { name: "Dovetail", icon: <Search className="w-4 h-4" />, color: "bg-gradient-to-br from-teal-50 to-teal-100 text-teal-700 dark:from-teal-900/30 dark:to-teal-800/30 dark:text-teal-300", description: "User Research Platform" },
      ],
      tabColor: "data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:shadow-indigo-500/25"
    },
    development: {
      tools: [
        { name: "GitHub", icon: <Code className="w-4 h-4" />, color: "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-700 dark:from-gray-800/30 dark:to-gray-700/30 dark:text-gray-300", description: "Version Control & Collaboration" },
        { name: "GitLab", icon: <Code className="w-4 h-4" />, color: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 dark:from-orange-900/30 dark:to-orange-800/30 dark:text-orange-300", description: "DevOps Platform" },
        { name: "Postman", icon: <Globe className="w-4 h-4" />, color: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 dark:from-orange-900/30 dark:to-orange-800/30 dark:text-orange-300", description: "API Development & Testing" },
        { name: "AWS", icon: <Cloud className="w-4 h-4" />, color: "bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-700 dark:from-yellow-900/30 dark:to-yellow-800/30 dark:text-yellow-300", description: "Cloud Infrastructure" },
      ],
      tabColor: "data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:shadow-orange-500/25"
    },
    ai: {
      tools: [
        { name: "ChatGPT", icon: <Bot className="w-4 h-4" />, color: "bg-gradient-to-br from-green-50 to-green-100 text-green-700 dark:from-green-900/30 dark:to-green-800/30 dark:text-green-300", description: "AI Assistant & Automation" },
        { name: "Claude", icon: <Bot className="w-4 h-4" />, color: "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 dark:from-purple-900/30 dark:to-purple-800/30 dark:text-purple-300", description: "Advanced AI Assistant" },
        { name: "Zapier", icon: <Workflow className="w-4 h-4" />, color: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 dark:from-orange-900/30 dark:to-orange-800/30 dark:text-orange-300", description: "Workflow Automation" },
        { name: "Make", icon: <Workflow className="w-4 h-4" />, color: "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 dark:from-indigo-900/30 dark:to-indigo-800/30 dark:text-indigo-300", description: "Visual Automation Platform" },
      ],
      tabColor: "data-[state=active]:from-violet-500 data-[state=active]:to-indigo-500 data-[state=active]:shadow-violet-500/25"
    }
  };

  const getAllTools = () => {
    return Object.entries(toolCategories).flatMap(([category, data]) => 
      data.tools.map(tool => ({ ...tool, category }))
    );
  };

  return (
    <div className="w-full">
      <section className="max-w-5xl mx-auto relative pb-16">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4 border border-blue-200/60 dark:border-blue-700/60 shadow-lg backdrop-blur-sm">
            <Target className="w-4 h-4" />
            <span>Skills & Expertise</span>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
            Product Management
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              Excellence
            </span>
          </h1>
          
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
          </div>
          
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise across the full product lifecycle with focus on 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> user-centric solutions </span>
            and measurable 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> business impact</span>
          </p>
        </div>

        {/* Skills Categories */}
        <div className="mb-12">
          <Tabs defaultValue="strategy" className="w-full">
            <div className="mb-6 flex justify-center">
              <TabsList className="grid w-full max-w-3xl grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-xl">
                {skillCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className={`group relative flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br ${category.tabColor} data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:scale-102`}
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 group-data-[state=active]:bg-white/20 transition-all duration-300 group-data-[state=active]:shadow-md group-hover:scale-110 group-data-[state=active]:from-white/20 group-data-[state=active]:to-white/10">
                      {category.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-xs">{category.title}</div>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl relative overflow-hidden rounded-2xl">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
                  
                  <CardHeader className="pb-3 pt-4">
                    <div className="flex items-start gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg relative overflow-hidden`}>
                        <div className="relative z-10 w-4 h-4 flex items-center justify-center">
                          {category.icon}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-white/10 rounded-full blur-lg"></div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">
                          {category.title}
                        </CardTitle>
                        <CardDescription className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pb-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="group relative">
                          <div className="flex items-center gap-2 p-2 bg-gradient-to-br from-white via-white to-slate-50/30 dark:from-slate-700/50 dark:via-slate-700/30 dark:to-slate-800/50 rounded-xl hover:scale-105 hover:shadow-md transition-all duration-300 hover:border-blue-300/60 dark:hover:border-blue-600/60 relative overflow-hidden backdrop-blur-sm">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${category.color} group-hover:scale-125 transition-all duration-300 shadow-sm flex-shrink-0`}>
                              <div className="w-full h-full rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
                            </div>
                            <span className="text-slate-800 dark:text-slate-200 font-medium text-xs leading-tight">
                              {skill}
                            </span>
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Tools & Platforms */}
        <div className="relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
              Tools & Platforms
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Comprehensive toolkit for modern product management excellence
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="mb-6 flex justify-center">
              <TabsList className="grid w-full max-w-4xl grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 h-auto p-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200/60 dark:border-slate-600/60 rounded-2xl shadow-xl">
                <TabsTrigger value="all" className="group relative flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-600 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-slate-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 data-[state=active]:scale-105">
                  <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 group-data-[state=active]:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <Target className="w-3 h-3" />
                  </div>
                  <span className="font-bold text-xs">All</span>
                </TabsTrigger>
                {Object.entries(toolCategories).map(([key, data]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className={`group relative flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl font-bold text-xs transition-all duration-500 data-[state=active]:bg-gradient-to-br ${data.tabColor} data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:scale-105 hover:bg-slate-100 dark:hover:bg-slate-600 capitalize`}
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 group-data-[state=active]:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      {data.tools[0]?.icon}
                    </div>
                    <span className="font-bold text-xs">{key}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {getAllTools().map((tool, index) => (
                  <div key={index} className="group relative bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden rounded-2xl hover:-translate-y-1 hover:bg-white/40 dark:hover:bg-slate-800/40">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-slate-50/20 dark:from-slate-700/20 dark:via-transparent dark:to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="p-3 relative z-10">
                      <div className="flex flex-col items-center text-center space-y-2">
                        <div className={`p-2 rounded-xl ${tool.color} group-hover:scale-110 transition-all duration-300 shadow-sm relative overflow-hidden backdrop-blur-sm`}>
                          <div className="relative z-10">
                            {tool.icon}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-xs text-slate-900 dark:text-white">{tool.name}</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{tool.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {Object.entries(toolCategories).map(([category, data]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {data.tools.map((tool, index) => (
                    <div key={index} className="group relative bg-white/30 dark:bg-slate-800/30 backdrop-blur-md border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden rounded-2xl hover:-translate-y-1 hover:bg-white/40 dark:hover:bg-slate-800/40">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-slate-50/20 dark:from-slate-700/20 dark:via-transparent dark:to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="p-3 relative z-10">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className={`p-2 rounded-xl ${tool.color} group-hover:scale-110 transition-all duration-300 shadow-sm relative overflow-hidden backdrop-blur-sm`}>
                            <div className="relative z-10">
                              {tool.icon}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-bold text-xs text-slate-900 dark:text-white">{tool.name}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{tool.description}</p>
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
      </section>
    </div>
  );
};
