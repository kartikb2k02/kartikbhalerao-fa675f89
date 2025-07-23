
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
      icon: <Target className="w-5 h-5" />,
      skills: ["Product Discovery", "Market Research", "Competitive Analysis", "Product Vision & Roadmap", "Go-to-Market Strategy", "MVP Development"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      borderColor: "border-blue-200 dark:border-blue-800"
    },
    {
      id: "analytics",
      title: "Data & Analytics",
      description: "Data-driven decision making through comprehensive user behavior analysis",
      icon: <BarChart3 className="w-5 h-5" />,
      skills: ["User Analytics", "A/B Testing", "KPI Definition & Tracking", "Data Visualization", "Performance Metrics", "Conversion Optimization"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800"
    },
    {
      id: "ux",
      title: "User Experience",
      description: "User-centered design approach with focus on exceptional user journeys",
      icon: <Palette className="w-5 h-5" />,
      skills: ["User Research", "Journey Mapping", "Wireframing & Prototyping", "Usability Testing", "Design Systems", "Accessibility"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      borderColor: "border-purple-200 dark:border-purple-800"
    },
    {
      id: "technical",
      title: "Technical Leadership",
      description: "Technical collaboration and system architecture understanding",
      icon: <Code className="w-5 h-5" />,
      skills: ["Agile/Scrum Methodologies", "API Design", "Database Fundamentals", "Technical Documentation", "System Architecture", "DevOps Basics"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      borderColor: "border-orange-200 dark:border-orange-800"
    }
  ];

  const toolCategories = {
    design: [
      { name: "Figma", icon: <Palette className="w-4 h-4" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300", description: "UI/UX Design & Prototyping" },
      { name: "Adobe XD", icon: <Palette className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Interactive Prototyping" },
      { name: "Sketch", icon: <Palette className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", description: "Interface Design" },
      { name: "Framer", icon: <Palette className="w-4 h-4" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300", description: "Advanced Prototyping" },
    ],
    management: [
      { name: "Jira", icon: <Calendar className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Agile Project Management" },
      { name: "Notion", icon: <FileText className="w-4 h-4" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300", description: "Documentation & Planning" },
      { name: "Linear", icon: <Calendar className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Modern Issue Tracking" },
      { name: "Monday.com", icon: <Calendar className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "Team Collaboration" },
    ],
    analytics: [
      { name: "Mixpanel", icon: <PieChart className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Advanced User Analytics" },
      { name: "Google Analytics", icon: <BarChart className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "Web Analytics Platform" },
      { name: "Amplitude", icon: <BarChart className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Product Analytics" },
      { name: "Hotjar", icon: <Search className="w-4 h-4" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "User Behavior Analysis" },
    ],
    communication: [
      { name: "Slack", icon: <MessageSquare className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Team Communication" },
      { name: "Miro", icon: <Workflow className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", description: "Visual Collaboration" },
      { name: "Zoom", icon: <Globe className="w-4 h-4" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300", description: "Video Conferencing" },
      { name: "Dovetail", icon: <Search className="w-4 h-4" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300", description: "User Research Platform" },
    ],
    development: [
      { name: "GitHub", icon: <Code className="w-4 h-4" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300", description: "Version Control & Collaboration" },
      { name: "GitLab", icon: <Code className="w-4 h-4" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "DevOps Platform" },
      { name: "Postman", icon: <Globe className="w-4 h-4" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "API Development & Testing" },
      { name: "AWS", icon: <Cloud className="w-4 h-4" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300", description: "Cloud Infrastructure" },
    ],
    ai: [
      { name: "ChatGPT", icon: <Bot className="w-4 h-4" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300", description: "AI Assistant & Automation" },
      { name: "Claude", icon: <Bot className="w-4 h-4" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300", description: "Advanced AI Assistant" },
      { name: "Zapier", icon: <Workflow className="w-4 h-4" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300", description: "Workflow Automation" },
      { name: "Make", icon: <Workflow className="w-4 h-4" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300", description: "Visual Automation Platform" },
    ]
  };

  const getAllTools = () => {
    return Object.entries(toolCategories).flatMap(([category, tools]) => 
      tools.map(tool => ({ ...tool, category }))
    );
  };

  return (
    <section className="max-w-7xl mx-auto relative">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-8 py-4 rounded-full text-blue-600 dark:text-blue-400 font-semibold text-lg mb-8 border border-blue-200/60 dark:border-blue-700/60 shadow-lg backdrop-blur-sm">
          <Target className="w-6 h-6" />
          <span>Skills & Expertise</span>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
          Product Management
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
            Excellence
          </span>
        </h1>
        
        <div className="flex justify-center mb-8">
          <div className="w-40 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
        </div>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
          Comprehensive expertise across the full product lifecycle with unwavering focus on 
          <span className="text-blue-600 dark:text-blue-400 font-semibold"> user-centric solutions </span>
          and measurable 
          <span className="text-purple-600 dark:text-purple-400 font-semibold"> business impact</span>
        </p>
      </div>

      {/* Skills Categories */}
      <div className="mb-24">
        <Tabs defaultValue="strategy" className="w-full">
          <div className="mb-12 flex justify-center">
            <TabsList className="grid w-full max-w-4xl grid-cols-2 lg:grid-cols-4 h-auto p-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-xl">
              {skillCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="group relative flex flex-col items-center gap-3 px-6 py-5 rounded-xl font-semibold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-800 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-slate-500/25 hover:bg-slate-50 dark:hover:bg-slate-700/50 data-[state=active]:scale-105"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700 group-data-[state=active]:bg-white/20 transition-all duration-300 group-data-[state=active]:shadow-lg group-hover:scale-110">
                    {category.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{category.title}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 group-data-[state=active]:text-white/70">
                      {category.skills.length} skills
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card className="border-0 shadow-2xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
                
                <CardHeader className="pb-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-6 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-xl relative overflow-hidden`}>
                      <div className="relative z-10">
                        {category.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, i) => (
                      <div key={i} className="group relative">
                        <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-700 dark:to-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-600/60 hover:scale-105 hover:shadow-xl transition-all duration-500 hover:border-blue-300 dark:hover:border-blue-600 relative overflow-hidden">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-150 transition-transform duration-500 shadow-lg`}></div>
                          <span className="text-slate-700 dark:text-slate-300 font-semibold">
                            {skill}
                          </span>
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tools & Platforms
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive toolkit for modern product management
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="mb-10 flex justify-center">
            <TabsList className="grid w-full max-w-5xl grid-cols-3 lg:grid-cols-6 h-auto p-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-600/80 rounded-2xl shadow-xl">
              <TabsTrigger value="all" className="group relative flex flex-col items-center gap-2 px-4 py-4 rounded-xl font-semibold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-slate-900 data-[state=active]:to-slate-700 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-slate-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 data-[state=active]:scale-105">
                <Target className="w-5 h-5" />
                <span>All</span>
              </TabsTrigger>
              {Object.entries(toolCategories).map(([key, tools]) => (
                <TabsTrigger key={key} value={key} className="group relative flex flex-col items-center gap-2 px-4 py-4 rounded-xl font-semibold text-sm transition-all duration-500 data-[state=active]:bg-gradient-to-br data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white data-[state=active]:shadow-xl data-[state=active]:shadow-blue-500/30 hover:bg-slate-100 dark:hover:bg-slate-600 data-[state=active]:scale-105 capitalize">
                  {tools[0]?.icon}
                  <span>{key}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {getAllTools().map((tool, index) => (
                <Card key={index} className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`p-4 rounded-xl ${tool.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {tool.icon}
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900 dark:text-white">{tool.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tool.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {Object.entries(toolCategories).map(([category, tools]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tools.map((tool, index) => (
                  <Card key={index} className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`p-4 rounded-xl ${tool.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {tool.icon}
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-slate-900 dark:text-white">{tool.name}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{tool.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
