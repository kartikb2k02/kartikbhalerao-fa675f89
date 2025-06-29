
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
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
        Skills & Tools <span className="text-2xl">🛠️</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium hover:from-blue-100 hover:to-blue-200 transition-all duration-200 cursor-default hover:scale-105"
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
