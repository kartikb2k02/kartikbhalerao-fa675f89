
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Skills",
      icon: "🎯",
      skills: ["Product Management", "Product Discovery", "Wire-Framing", "Prioritisation", "User Experience", "Defining MVP", "Product Strategy", "Market Research", "Launch Planning"]
    },
    {
      title: "Analytics & Research",
      icon: "📊",
      skills: ["Business Analytics", "Data Analytics", "User Interface", "A/B Testing", "Competitive Analysis"]
    },
    {
      title: "Development & Agile",
      icon: "⚡",
      skills: ["Agile Development"]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: ["Figma", "Jira", "SQL", "Whimsical", "Canva", "Mixpanel", "Notion", "Click-Up", "Google Analytics", "Hotjar", "Slack", "Excel", "Dovetail", "N8n", "Craft.io", "Make", "airfocus", "Lovable", "Chatgpt", "AirTable", "Typeform", "Clay", "Claude", "GCP"]
    }
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
          Skills & Tools
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center mb-8">
              <span className="text-4xl mr-4">{category.icon}</span>
              <h3 className="text-2xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-slate-800/50 border border-slate-700 text-slate-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-700/50 hover:border-blue-400 hover:text-blue-400 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
