
import { useState } from "react";
import { ChevronDown, ChevronUp, Lightbulb } from "lucide-react";

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
      gradient: "from-blue-500 to-blue-700",
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
      gradient: "from-blue-600 to-indigo-700",
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
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
          Work Experience
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
      </div>
      
      {/* Work Experience */}
      <div className="space-y-8 mb-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">
                  {exp.title}
                </h3>
                <p className="text-xl text-blue-400 font-semibold">
                  {exp.company}
                </p>
                <p className="text-slate-300">
                  {exp.location}
                </p>
              </div>
              <div className="mt-4 lg:mt-0">
                <span className={`inline-block bg-gradient-to-r ${exp.gradient} text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg`}>
                  {exp.period}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {exp.highlights.map((highlight, i) => (
                <button
                  key={i}
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-700/50 transition-all duration-200 text-left w-full group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg flex-shrink-0">
                      {highlight.split(' ')[0]}
                    </span>
                    <span className="text-slate-200 font-medium">
                      {highlight.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                  {expandedJob === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>

            {expandedJob === index && (
              <div className="mt-8 space-y-6 animate-fade-in">
                <div className="flex items-center space-x-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Detailed Experience</h4>
                </div>
                {exp.details.map((detail, i) => (
                  <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 border-l-4 border-l-blue-400">
                    <h5 className="font-semibold text-blue-400 mb-3 text-lg">{detail.title}</h5>
                    <p className="text-slate-300 leading-relaxed">{detail.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Product Management Cohorts */}
      <div>
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          Product Management Cohorts
        </h3>
        
        <div className="grid grid-cols-1 gap-6">
          {cohorts.map((cohort, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{cohort.icon}</div>
              <h4 className="text-2xl font-bold mb-3">{cohort.title}</h4>
              <p className="text-indigo-100 mb-2 text-lg">{cohort.period}</p>
              <p className="text-indigo-50">{cohort.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
