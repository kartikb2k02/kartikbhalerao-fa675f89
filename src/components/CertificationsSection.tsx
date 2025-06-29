
import { LayoutDashboard } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Atlassian Professional Product Management Certification",
      issuer: "Atlassian",
      year: "2024",
      icon: "🏆"
    },
    {
      title: "AI in Product Management",
      issuer: "Pendo.ai",
      year: "2024",
      icon: "🤖"
    },
    {
      title: "Product Analytics Certification",
      issuer: "Pendo.ai",
      year: "2024",
      icon: "📊"
    },
    {
      title: "Product-Led Certification",
      issuer: "MindTheProduct",
      year: "2024",
      icon: "🎯"
    }
  ];

  const achievements = [
    "🏅 Conducted and mentored a 40-student cohort as a Facilitator for the Google Developer Student Clubs (GDSC) program",
    "🎖️ IETE x Diems Management Lead, 2023",
    "🥇 College Topper—1st Year, Electronics & Telecommunication Engineering, 2020",
    "✈️ Completed 'A' Certificate in NCC, 2017 (Air Wing)",
    "🏊‍♂️ School Champion in Swimming, qualified for State-Level Championship, 2016"
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
          Certifications & Achievements
        </h2>
        <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-3xl mr-4">📜</span>
            Certifications
          </h3>
          
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
              >
                <span className="text-3xl">{cert.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-white text-lg leading-tight">{cert.title}</h4>
                  <p className="text-blue-400 text-sm mt-1">{cert.issuer}</p>
                  <p className="text-slate-400 text-xs mt-1">{cert.year}</p>
                </div>
                <LayoutDashboard className="w-5 h-5 text-blue-400" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements & Honors */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-3xl mr-4">🌟</span>
            Achievements & Honors
          </h3>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-slate-800/30 border border-slate-700 rounded-xl hover:bg-slate-700/30 transition-all duration-200"
              >
                <LayoutDashboard className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-slate-200 leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
