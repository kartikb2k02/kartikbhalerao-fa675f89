
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: "🎯",
      skills: ["Product Strategy", "Roadmapping", "PRDs", "User Stories", "Agile/Scrum", "Stakeholder Management"]
    },
    {
      title: "Analytics & Research",
      icon: "📊",
      skills: ["Google Analytics", "Mixpanel", "Amplitude", "User Research", "A/B Testing", "SQL"]
    },
    {
      title: "Design & Collaboration",
      icon: "🎨",
      skills: ["Figma", "Sketch", "Miro", "Notion", "Slack", "Confluence"]
    },
    {
      title: "Automation & Tools",
      icon: "⚡",
      skills: ["Zapier", "JIRA", "Asana", "Tableau", "Python", "APIs"]
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
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100"
          >
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium hover:from-emerald-100 hover:to-emerald-200 transition-all duration-200 cursor-default hover:scale-105"
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
