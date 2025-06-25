
export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Product Analyst",
      company: "Decision Machine",
      location: "Pune (full-time)",
      period: "June 2024 - Present",
      highlights: [
        "🔍 Competitor Analysis",
        "📊 User Research", 
        "🏗️ Development of fintech SaaS platform",
        "🎯 MVP Scoping & Prioritization",
        "📋 PRD & Documentation Ownership"
      ],
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Product Manager",
      company: "Stealth",
      location: "Remote (Internship)",
      period: "Jan. 2024 - May 2024",
      highlights: [
        "🧭 Problem Discovery & Opportunity Mapping",
        "🎯 Vision & Product Strategy",
        "🔬 User Testing & Feedback Loops", 
        "🚀 Go-To-Market Readiness"
      ],
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  const cohorts = [
    {
      title: "HelloPM (Summer of Product)",
      period: "May 25 - June 25",
      description: "Intensive product management cohort focusing on hands-on learning",
      icon: "🎓"
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
        Work Experience <span className="text-2xl">💼</span>
      </h2>
      
      {/* Work Experience */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-emerald-600 font-semibold mb-1">
                  {exp.company}
                </p>
                <p className="text-gray-600">
                  {exp.location}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`inline-block bg-gradient-to-r ${exp.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                  {exp.period}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200"
                >
                  <span className="text-lg flex-shrink-0">
                    {highlight.split(' ')[0]}
                  </span>
                  <span className="text-gray-700 font-medium">
                    {highlight.split(' ').slice(1).join(' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Product Management Cohorts */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
          Product Management Cohorts <span className="text-xl">🎓</span>
        </h3>
        
        <div className="grid grid-cols-1 gap-6">
          {cohorts.map((cohort, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl p-6 text-white text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-3xl mb-3">{cohort.icon}</div>
              <h4 className="text-xl font-bold mb-2">{cohort.title}</h4>
              <p className="text-purple-100 mb-2">{cohort.period}</p>
              <p className="text-purple-50">{cohort.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
