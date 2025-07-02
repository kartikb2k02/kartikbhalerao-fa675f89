import { ExternalLink, Github, Calendar } from "lucide-react";

export const MyWorkSection = () => {
  const projects = [
    {
      title: "Financial Planning SaaS",
      company: "Decision Machine",
      period: "July 2024 - Present",
      description: "B2C SaaS product for financial planning with personalized savings goals and real-time expense tracking.",
      achievements: [
        "30% improvement in user onboarding and retention",
        "25% boost in engagement through key features",
        "AI co-pilot integration for financial insights"
      ],
      type: "Product Management"
    },
    {
      title: "Healthcare Analytics Platform",
      company: "Ocius",
      period: "Jan 2024 - May 2024",
      description: "Data analytics platform for healthcare with automated reporting and patient engagement metrics.",
      achievements: [
        "15% increase in lead conversion",
        "60% reduction in manual reporting efforts",
        "Real-time KPI monitoring dashboards"
      ],
      type: "Product & Analytics"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
          My 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"> Work </span>
          & Impact
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        <p className="text-xl text-slate-600 dark:text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
          Real products, real impact. Here's how I've driven user engagement and business growth through strategic product decisions.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="relative group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                      {project.type}
                    </span>
                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-4">
                    {project.company}
                  </p>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Key Achievements</h4>
                <div className="grid gap-3">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-1.5">✦</span>
                      <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};