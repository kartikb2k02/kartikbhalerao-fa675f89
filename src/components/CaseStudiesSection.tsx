
import { ExternalLink, Calendar, Tag } from "lucide-react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Gullak: Fintech App",
      description: "Designed and launched a comprehensive fintech application focusing on savings and investment solutions for young professionals.",
      tags: ["Product Strategy", "UX Design", "Fintech"],
      link: "https://www.behance.net/gallery/154819469/Gullak-Fintech-App-UIUX-Case-Study",
      date: "2023",
      type: "Product Design",
      color: "blue"
    },
    {
      title: "Codeant.AI Product Marketing",
      description: "Strategic product marketing initiative for AI-powered code analysis platform, including market research and positioning.",
      tags: ["MRD", "Product Marketing", "AI"],
      link: "https://www.canva.com/design/DAGuong-JoM/p1KoI6r5aSNVNdhG64Kd-A/view",
      date: "2024",
      type: "Marketing Strategy",
      color: "gray"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          border: 'border-blue-200 dark:border-blue-800',
          text: 'text-blue-700 dark:text-blue-300',
          bg: 'bg-blue-50 dark:bg-blue-900/20'
        };
      case 'gray':
        return {
          border: 'border-gray-200 dark:border-gray-700',
          text: 'text-gray-700 dark:text-gray-300',
          bg: 'bg-gray-50 dark:bg-gray-800/20'
        };
      default:
        return {
          border: 'border-gray-200 dark:border-gray-700',
          text: 'text-gray-700 dark:text-gray-300',
          bg: 'bg-gray-50 dark:bg-gray-800/20'
        };
    }
  };

  return (
    <section className="py-20">
      <div className="space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Case Studies & Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world projects showcasing product strategy, design thinking, and user-centered solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => {
            const colors = getColorClasses(study.color);
            
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 border ${colors.border} rounded-lg p-6 transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`px-3 py-1 ${colors.bg} rounded-full`}>
                      <span className={`text-sm font-medium ${colors.text}`}>
                        {study.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{study.date}</span>
                    </div>
                  </div>
                  
                  <a
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {study.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <div
                        key={tagIndex}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        <Tag className="w-3 h-3 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="mailto:kartikbhalerao948@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};
