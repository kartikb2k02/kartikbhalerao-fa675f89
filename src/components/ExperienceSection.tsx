
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export const ExperienceSection = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

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
      gradient: "from-emerald-400 to-emerald-600",
      details: [
        {
          title: "Competitor Analysis",
          description: "Conducted deep competitive benchmarking across 12 fintech products, analyzing feature sets, pricing models, and user feedback. Identified whitespace opportunities for underserved Tier-2 users, informing the product's differentiation strategy and go-to-market messaging."
        },
        {
          title: "User Research",
          description: "Led user interviews, surveys, and secondary research to define key personas and jobs-to-be-done. Uncovered pain points in financial literacy and trust, shaping the initial product direction."
        },
        {
          title: "Development of fintech SaaS platform",
          description: "Led end-to-end development of a financial health product aimed at improving credit awareness and savings behavior for early-stage users."
        },
        {
          title: "MVP Scoping & Prioritization",
          description: "Defined scope and prioritized MVP features using the RICE framework. Balanced user value with engineering feasibility to deliver V1 in under 8 weeks."
        },
        {
          title: "PRD & Documentation Ownership",
          description: "Created clear and actionable PRDs, wireframes, and user stories in Notion. Ensured all stakeholders had visibility into roadmap, timelines, and blockers."
        }
      ]
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
      gradient: "from-blue-400 to-blue-600",
      details: [
        {
          title: "Problem Discovery & Opportunity Mapping",
          description: "Identified a gap in how early-stage founders track customer feedback and prioritize features. Conducted 25+ interviews to validate the core problem and define the target segment."
        },
        {
          title: "Vision & Product Strategy",
          description: "Defined product vision: an AI-first prioritization and customer insight engine for solo builders and small teams. Mapped out 6-month roadmap with a focus on iterative releases."
        },
        {
          title: "User Testing & Feedback Loops",
          description: "Built a waitlist of 150+ users and ran 1:1 feedback sessions. Used Notion and Typeform to capture insights and measure feature resonance."
        },
        {
          title: "Go-To-Market Readiness",
          description: "Prepared for soft launch by setting up a landing page, pricing hypotheses, and early positioning tests via email campaigns and founder Slack groups."
        }
      ]
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

  const toggleExpanded = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

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
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {exp.highlights.map((highlight, i) => (
                <button
                  key={i}
                  onClick={() => toggleExpanded(index)}
                  className="flex items-start justify-between space-x-3 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors duration-200 text-left w-full group"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-lg flex-shrink-0">
                      {highlight.split(' ')[0]}
                    </span>
                    <span className="text-gray-700 font-medium">
                      {highlight.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                  {expandedJob === index ? (
                    <ChevronUp className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>

            {expandedJob === index && (
              <div className="mt-6 space-y-4 animate-fade-in">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Detailed Experience</h4>
                {exp.details.map((detail, i) => (
                  <div key={i} className="bg-white/80 rounded-xl p-4 border-l-4 border-emerald-500">
                    <h5 className="font-semibold text-emerald-700 mb-2">{detail.title}</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{detail.description}</p>
                  </div>
                ))}
              </div>
            )}
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
