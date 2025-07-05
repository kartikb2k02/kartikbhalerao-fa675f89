import { Target, BarChart3, Palette, Code, Lightbulb, Users, TrendingUp, Zap, Calendar, PieChart, FileText, BarChart, MessageSquare, Search, Workflow, Bot, Database, Cloud, Globe } from "lucide-react";

export const CompactSkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Strategy",
      icon: <Target className="w-8 h-8" />,
      skills: ["Product Discovery", "Market Research", "Competitive Analysis", "Product Vision", "Go-to-Market"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Data & Analytics", 
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["User Analytics", "A/B Testing", "KPI Tracking", "Data Visualization", "Metrics Definition"],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20"
    },
    {
      title: "User Experience",
      icon: <Palette className="w-8 h-8" />,
      skills: ["User Research", "Journey Mapping", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-purple-500 to-pink-500", 
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      title: "Technical Collaboration",
      icon: <Code className="w-8 h-8" />,
      skills: ["Agile/Scrum", "API Understanding", "SQL Basics", "Technical Documentation", "System Design"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20"
    }
  ];

  const tools = [
    { name: "Figma", icon: <Palette className="w-5 h-5" />, color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300" },
    { name: "Jira", icon: <Calendar className="w-5 h-5" />, color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
    { name: "Mixpanel", icon: <PieChart className="w-5 h-5" />, color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
    { name: "Notion", icon: <FileText className="w-5 h-5" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300" },
    { name: "Slack", icon: <MessageSquare className="w-5 h-5" />, color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
    { name: "GitHub", icon: <Code className="w-5 h-5" />, color: "bg-gray-100 text-gray-700 dark:bg-gray-800/30 dark:text-gray-300" },
    { name: "Google Analytics", icon: <BarChart className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
    { name: "Miro", icon: <Workflow className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
    { name: "ChatGPT", icon: <Bot className="w-5 h-5" />, color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
    { name: "AWS", icon: <Cloud className="w-5 h-5" />, color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
    { name: "Tableau", icon: <BarChart className="w-5 h-5" />, color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300" },
    { name: "Zapier", icon: <Workflow className="w-5 h-5" />, color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-6 py-3 rounded-full text-blue-600 dark:text-blue-400 font-bold text-lg mb-6 border border-blue-200/50 dark:border-blue-700/50 shadow-lg backdrop-blur-sm">
          <Target className="w-5 h-5" />
          <span>Skills & Expertise</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          Product Management
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
            Excellence
          </span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="group relative bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{category.title}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tools & Platforms</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
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
      </div>
    </div>
  );
};