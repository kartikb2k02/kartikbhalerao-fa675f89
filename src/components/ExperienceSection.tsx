
export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Product Manager",
      company: "TechFlow Solutions",
      timeline: "2022 - Present",
      achievements: [
        "🧱 Led product strategy for B2B SaaS platform serving 50K+ users",
        "🔍 Conducted user research that increased retention by 35%",
        "🚀 Launched 3 major features that boosted revenue by $2M annually",
        "📊 Implemented data-driven decision making across product org"
      ]
    },
    {
      title: "Product Manager",
      company: "InnovateLabs Inc",
      timeline: "2020 - 2022",
      achievements: [
        "🧱 Built and launched MVP for AI-powered analytics tool",
        "🔍 Established user feedback loops that improved NPS by 25 points",
        "🚀 Grew product from 0 to 10K active users in 18 months",
        "💡 Collaborated with engineering to reduce technical debt by 40%"
      ]
    },
    {
      title: "Associate Product Manager",
      company: "StartupVenture Co",
      timeline: "2019 - 2020",
      achievements: [
        "🧱 Defined product requirements for mobile-first platform",
        "🔍 A/B tested 20+ features leading to 15% conversion improvement",
        "🚀 Coordinated cross-functional teams of 12+ members",
        "📈 Analyzed user behavior to identify growth opportunities"
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
        Work Experience <span className="text-2xl">💼</span>
      </h2>
      
      <div className="grid gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-emerald-100"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-emerald-600 font-semibold mb-2">
                  {exp.company}
                </p>
              </div>
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                {exp.timeline}
              </span>
            </div>
            
            <ul className="space-y-3">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-700 text-base leading-relaxed">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
