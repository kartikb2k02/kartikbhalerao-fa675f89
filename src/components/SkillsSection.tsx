import { Target, BarChart3, Palette, Code, Lightbulb, Users, TrendingUp, Zap, Figma, Calendar, PieChart, FileText, BarChart, HelpCircle, MessageSquare, Search, Workflow, Bot, Cpu } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Strategy",
      description: "Strategic product planning with focus on market fit and business impact",
      icon: <Target className="w-8 h-8" />,
      skills: ["Product Discovery", "Market Research", "Competitive Analysis", "Product Vision", "Go-to-Market Strategy"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-500"
    },
    {
      title: "Data & Analytics",
      description: "Data-driven decision making and user behavior analysis",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["User Analytics", "A/B Testing", "KPI Tracking", "Data Visualization", "Metrics Definition"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      iconBg: "bg-emerald-500"
    },
    {
      title: "User Experience",
      description: "User-centered design thinking and experience optimization",
      icon: <Palette className="w-8 h-8" />,
      skills: ["User Research", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconBg: "bg-purple-500"
    },
    {
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

  const tools = [
    { name: "Figma", category: "Design", color: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300", icon: <Palette className="w-4 h-4" /> },
    { name: "Jira", category: "Project Management", color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300", icon: <Calendar className="w-4 h-4" /> },
    { name: "Mixpanel", category: "Analytics", color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300", icon: <PieChart className="w-4 h-4" /> },
    { name: "Notion", category: "Documentation", color: "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-300", icon: <FileText className="w-4 h-4" /> },
    { name: "Google Analytics", category: "Analytics", color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300", icon: <BarChart className="w-4 h-4" /> },
    { name: "Hotjar", category: "User Research", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Slack", category: "Communication", color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Dovetail", category: "Research", color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300", icon: <Search className="w-4 h-4" /> },
    { name: "Flowise", category: "AI Automation", color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300", icon: <Workflow className="w-4 h-4" /> },
    { name: "SuperAgent", category: "AI Agents", color: "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300", icon: <Bot className="w-4 h-4" /> },
    { name: "AutogenStudio", category: "AI Development", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300", icon: <Cpu className="w-4 h-4" /> },
    { name: "N8n", category: "AI Automation", color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300", icon: <HelpCircle className="w-4 h-4" />  }
  ];

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
      
      {/* Main Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${category.color}`}></div>
            
            <div className="flex items-start space-x-6 mb-8">
              <div className={`${category.iconBg} text-white p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{category.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{category.description}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center space-x-3 group/skill">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} group-hover/skill:scale-125 transition-transform`}></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium group-hover/skill:text-slate-900 dark:group-hover/skill:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
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

      {/* Tools & Platforms with icons */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Tools & Platforms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <div className={`p-2 rounded-lg ${tool.color.replace('text-', 'bg-').replace(/dark:text-\w+-\d+/, '').replace(/text-\w+-\d+/, 'bg-white')}`}>
                  {tool.icon}
                </div>
              </div>
              <div className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:scale-105 transition-transform">
                {tool.name}
              </div>
              <div className={`text-xs px-2 py-1 rounded-full font-medium ${tool.color}`}>
                {tool.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
