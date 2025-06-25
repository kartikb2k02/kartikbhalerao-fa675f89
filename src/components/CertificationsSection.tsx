
import { Check } from "lucide-react";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      year: "2023",
      icon: "🏆"
    },
    {
      title: "Certified Scrum Product Owner",
      issuer: "Scrum Alliance",
      year: "2022",
      icon: "🎯"
    },
    {
      title: "Product Management Certificate",
      issuer: "Stanford University",
      year: "2022",
      icon: "🎓"
    },
    {
      title: "UX Research Certification",
      issuer: "Nielsen Norman Group",
      year: "2021",
      icon: "🔍"
    }
  ];

  const achievements = [
    "🏅 Product Manager of the Year 2023",
    "🚀 Launched 5+ successful products",
    "📈 Increased user engagement by 40%",
    "👥 Led teams of 15+ professionals"
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
        Certifications & Achievements <span className="text-2xl">🏆</span>
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">📜</span>
            Certifications
          </h3>
          
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-colors duration-200"
              >
                <span className="text-2xl">{cert.icon}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                  <p className="text-emerald-600 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs">{cert.year}</p>
                </div>
                <Check className="w-5 h-5 text-emerald-500" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">🌟</span>
            Key Achievements
          </h3>
          
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-colors duration-200"
              >
                <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
