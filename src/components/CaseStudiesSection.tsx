
export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Redesigned B2B analytics platform to increase user engagement",
      tags: ["UI/UX", "Metrics", "PRD", "Research"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      title: "Mobile-First E-commerce Platform",
      description: "Led product strategy for seamless shopping experience",
      tags: ["Mobile", "UX", "Growth", "A/B Testing"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      title: "Customer Onboarding Optimization",
      description: "Reduced time-to-value and improved user activation rates",
      tags: ["Onboarding", "Metrics", "Research", "Growth"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      gradient: "from-emerald-400 to-emerald-600"
    },
    {
      title: "Collaborative Workflow Tool",
      description: "Built team productivity platform from concept to launch",
      tags: ["Collaboration", "PRD", "MVP", "Launch"],
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Data Visualization Suite",
      description: "Created intuitive dashboards for complex data insights",
      tags: ["Data Viz", "UI/UX", "Analytics", "Dashboard"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      gradient: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
        Product Case Studies <span className="text-2xl">📱</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {study.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {study.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-emerald-200 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
