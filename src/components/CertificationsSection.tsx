
import { Award, Trophy, Star, CheckCircle } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Atlassian Professional Product Management Certification",
      issuer: "Atlassian",
      year: "2024",
      icon: <Trophy className="w-6 h-6 text-blue-500 dark:text-blue-400" />
    },
    {
      title: "AI in Product Management",
      issuer: "Pendo.ai",
      year: "2024",
      icon: <Award className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
    },
    {
      title: "Product Analytics Certification",
      issuer: "Pendo.ai",
      year: "2024",
      icon: <CheckCircle className="w-6 h-6 text-purple-500 dark:text-purple-400" />
    },
    {
      title: "Product-Led Certification",
      issuer: "MindTheProduct",
      year: "2024",
      icon: <Star className="w-6 h-6 text-blue-600 dark:text-blue-300" />
    }
  ];

  const achievements = [
    "Conducted and mentored a 40-student cohort as a Facilitator for the Google Developer Student Clubs (GDSC) program",
    "IETE x Diems Management Lead, 2023",
    "College Topper—1st Year, Electronics & Telecommunication Engineering, 2020",
    "Completed 'A' Certificate in NCC, 2017 (Air Wing)",
    "School Champion in Swimming, qualified for State-Level Championship, 2016"
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
          Certifications & Achievements
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications */}
        <div className="bg-white/80 dark:bg-slate-800/60 border border-blue-200/50 dark:border-blue-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            <Trophy className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-4" />
            Certifications
          </h3>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/60 dark:bg-slate-700/40 border border-blue-200/30 dark:border-blue-700/30 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-700/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 p-2 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-lg leading-tight mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">{cert.issuer}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements & Honors */}
        <div className="bg-white/80 dark:bg-slate-800/60 border border-indigo-200/50 dark:border-indigo-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center">
            <Star className="w-8 h-8 text-indigo-500 dark:text-indigo-400 mr-4" />
            Achievements & Honors
          </h3>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-5 bg-white/60 dark:bg-slate-700/40 border border-indigo-200/30 dark:border-indigo-700/30 rounded-2xl hover:bg-white/80 dark:hover:bg-slate-700/60 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
