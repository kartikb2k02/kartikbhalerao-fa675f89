
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      description: "Strategic product planning and execution with focus on user needs and business outcomes",
      icon: "🎯",
      skills: ["Product Discovery", "Roadmap Planning", "User Research", "MVP Definition", "Go-to-Market Strategy"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Analytics & Research",
      description: "Data-driven insights and user research to inform product decisions and optimize experiences",
      icon: "📊",
      skills: ["User Analytics", "A/B Testing", "Market Research", "Data Visualization", "KPI Tracking"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Design & UX",
      description: "User-centered design thinking and collaboration with design teams for optimal user experiences",
      icon: "🎨",
      skills: ["Wire-framing", "User Experience", "Design Systems", "Prototyping", "User Journey Mapping"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Technical Skills",
      description: "Technical knowledge and tools to effectively collaborate with engineering teams",
      icon: "⚡",
      skills: ["Agile Development", "SQL", "API Understanding", "Technical Documentation", "System Design"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const tools = [
    { name: "Figma", category: "Design" },
    { name: "Jira", category: "Project Management" },
    { name: "Mixpanel", category: "Analytics" },
    { name: "Notion", category: "Documentation" },
    { name: "Hotjar", category: "User Research" },
    { name: "Google Analytics", category: "Analytics" },
    { name: "Slack", category: "Communication" },
    { name: "Dovetail", category: "Research" },
    { name: "Craft.io", category: "Product Management" },
    { name: "airfocus", category: "Roadmapping" },
    { name: "Lovable", category: "Development" },
    { name: "ChatGPT", category: "AI Tools" }
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-blue-500 dark:bg-blue-400 mx-auto rounded-full"></div>
        <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          Comprehensive product management skills with focus on user-centric solutions
        </p>
      </div>
      
      {/* Main Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-xl font-bold shadow-lg`}>
                  {category.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{category.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{category.description}</p>
              </div>
              <div className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-2">
              {category.skills.map((skill, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                  <span className="text-slate-700 dark:text-slate-300 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 border border-slate-200 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Tools & Platforms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{tool.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{tool.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
