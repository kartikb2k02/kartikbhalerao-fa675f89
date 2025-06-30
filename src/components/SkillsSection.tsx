
import { Target, BarChart3, Palette, Code, Lightbulb, Users, TrendingUp, Zap, Calendar, PieChart, FileText, BarChart, HelpCircle, MessageSquare, Search, Workflow, Bot, Cpu } from "lucide-react";
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
      { name: "Figma", icon: <Palette className="w-5 h-5" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300" },
    ],
    management: [
      { name: "Jira", icon: <Calendar className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
      { name: "Notion", icon: <FileText className="w-5 h-5" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300" },
    ],
    analytics: [
      { name: "Mixpanel", icon: <PieChart className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
      { name: "Google Analytics", icon: <BarChart className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
      { name: "Hotjar", icon: <HelpCircle className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
    ],
    communication: [
      { name: "Slack", icon: <MessageSquare className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
      { name: "Dovetail", icon: <Search className="w-5 h-5" />, color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300" },
    ],
    ai: [
      { name: "Flowise", icon: <Workflow className="w-5 h-5" />, color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300" },
      { name: "SuperAgent", icon: <Bot className="w-5 h-5" />, color: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" },
      { name: "AutogenStudio", icon: <Cpu className="w-5 h-5" />, color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
      { name: "N8n", icon: <Workflow className="w-5 h-5" />, color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300" }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 font-medium text-sm mb-8">
          <Target className="w-4 h-4" />
          <span>Skills & Expertise</span>
        </div>
        <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          Comprehensive Product 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"> Management </span>
          Skills
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Expertise across the full product lifecycle with focus on user-centric solutions and business impact
        </p>
      </div>
      
      {/* Skills Tabs */}
      <div className="mb-20">
        <Tabs defaultValue="strategy" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 p-2 rounded-2xl">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-slate-900 dark:data-[state=active]:bg-slate-700 dark:data-[state=active]:text-white"
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
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.color} rounded-t-3xl`}></div>
                
                <div className="flex items-start space-x-6 mb-8">
                  <div className={`${category.iconBg} text-white p-4 rounded-2xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{category.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center space-x-3 p-4 bg-white/60 dark:bg-slate-700/60 rounded-xl border border-white/30 dark:border-slate-600/30 hover:scale-105 transition-transform duration-200">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
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
      <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-3xl p-10 mb-20">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreCompetencies.map((competency, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-blue-500 dark:text-blue-400">
                  {competency.icon}
                </div>
                <span className="font-semibold text-slate-900 dark:text-white">{competency.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 ml-auto">{competency.level}%</span>
              </div>
              <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${competency.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Platforms with Categories */}
      <div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Tools & Platforms</h3>
        
        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 p-2 rounded-2xl">
            <TabsTrigger value="design" className="rounded-xl font-medium">Design</TabsTrigger>
            <TabsTrigger value="management" className="rounded-xl font-medium">Management</TabsTrigger>
            <TabsTrigger value="analytics" className="rounded-xl font-medium">Analytics</TabsTrigger>
            <TabsTrigger value="communication" className="rounded-xl font-medium">Communication</TabsTrigger>
            <TabsTrigger value="ai" className="rounded-xl font-medium">AI Tools</TabsTrigger>
          </TabsList>

          {Object.entries(toolCategories).map(([category, tools]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${tool.color} group-hover:scale-110 transition-transform duration-200`}>
                        {tool.icon}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tool.name}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
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
  );
};
