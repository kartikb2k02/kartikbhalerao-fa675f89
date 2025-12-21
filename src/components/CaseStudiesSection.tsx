import { ArrowUpRight } from "lucide-react";

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Gullak Fintech App",
      subtitle: "Savings-Led Financial Empowerment Platform", 
      tags: ["Product Strategy", "UX Design", "Fintech"],
      link: "https://www.canva.com/design/DAGxiFuK6mo/lSD7Z6WwaqX6hDFwYuQ2gQ/view",
      bgGradient: "from-[#fbd26c] to-[#f99e30]",
      image: "/lovable-uploads/b1ba7330-6bbc-43d5-a1d2-56baa716c077.png"
    },
    {
      title: "Blinkit Product Analysis",
      subtitle: "Order Efficiency & Conversion Optimization",
      tags: ["Product Analysis", "E-commerce", "UX Research"],
      link: "https://www.canva.com/design/DAGxiHLuc1A/cdCbIj30b6LODnEBr_bT-Q/view",
      bgGradient: "from-[#facc15] to-[#f97316]",
      image: "/lovable-uploads/3d4a8070-20bc-4613-becb-61b277c2c14e.png"
    },
    {
      title: "Google Pay Feature Analysis",
      subtitle: "Strategic Product Improvement Study",
      tags: ["Feature Analysis", "Product Strategy", "Fintech"],
      link: "https://www.canva.com/design/DAGxiBL7YzA/Xk77mzvr9YaEsuEbvQ9bWg/view",
      bgGradient: "from-[#60a5fa] to-[#9333ea]",
      image: "/lovable-uploads/23a9f14a-acce-474f-b09e-c3714972d90d.png"
    },
    {
      title: "Google Pay PRD",
      subtitle: "Strategic Product Improvement Study",
      tags: ["Feature Analysis", "Product Strategy", "Fintech"],
      link: "https://www.canva.com/design/DAGxiRLzpnQ/iE96wDgatXY99zuZnHBt4g/view",
      bgGradient: "from-[#60a5fa] to-[#2563eb]",
      image: "/lovable-uploads/9b4dd787-aeb2-4969-8fc0-a1dd907efea8.png"
    },
    {
      title: "Zepto Order Efficiency",
      subtitle: "User Experience Optimization",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGxiRyvVFQ/-YhV-xynX1b2K6ewewp3yQ/view",
      bgGradient: "from-[#c084fc] to-[#db2777]",
      image: "/lovable-uploads/zepto.png"
    },   
    {
      title: "Airbnb UX",
      subtitle: "Patient-Centered Design Approach",
      tags: ["UX Research", "Healthcare", "Accessibility"],
      link: "https://www.canva.com/design/DAGxiIQik8Y/eWceLnISnpERQ_jx5kK0Uw/view",
      bgGradient: "from-[#FF5A5F] to-[#FF5A5F]",
      image: "/lovable-uploads/b6681943-085f-4f56-ad98-ba1fac93c64a.png"
    },
    {
      title: "Cloudeagle AI Efficiency",
      subtitle: "User Experience Optimization",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGsMTJF8rQ/spC9-A66wGenPorZ0VkcmA/view",
      bgGradient: "from-[#111184] to-[#000000]",
      image: "/lovable-uploads/Cloudeagle.png"
    },
    {
      title: "Metis Feature Improvement",
      subtitle: "User Experience Optimization",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGvsNeBU9A/fT2cPDGb3P_sHKunt_xa3g/view",
      bgGradient: "from-[#0165f1] to-[#018ff1]",
      image: "/lovable-uploads/Metis.png"
    },
    {
      title: "CodeAnt AI",
      subtitle: "Product Launch Narrative",
      tags: ["UX Design", "E-commerce", "Mobile Design"],
      link: "https://www.canva.com/design/DAGuong-JoM/p1KoI6r5aSNVNdhG64Kd-A/view",
      bgGradient: "from-[#3c52c3] to-[#E0FFFF]",
      image: "/lovable-uploads/Codeant.png"
    },
    {
      title: "Ether Feature PRD",
      subtitle: "Product Improvement",
      tags: ["UX Design", "EdTech", "Web Design", "App Design"],
      link: "https://www.canva.com/design/DAGw3QSmRIY/eIMrFE0YSiUhYc50vbS_vA/view",
      bgGradient: "from-[#432299] to-[#6a39f0]",
      image: "/lovable-uploads/Ether.png"
    },
  ];

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-[90rem] mx-auto px-6 space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Case Studies & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects showcasing product strategy, design thinking, and user-centered solutions
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(study.link)}
              className="bg-card/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1 border border-border/50"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Top Right Arrow */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full border border-border/50">
                    <ArrowUpRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Colored Footer Section */}
              <div className={`bg-gradient-to-r ${study.bgGradient} p-4 relative overflow-hidden`}>
                {/* Background pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-2 right-2 w-6 h-6 border-2 border-white/50 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-2 border-white/50 rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 space-y-1">
                  <h3 className="text-base font-bold text-white leading-tight">
                    {study.title}
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed">
                    {study.subtitle}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-3 right-3">
                  <div className="w-6 h-6 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/50 transition-colors">
                    <ArrowUpRight className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <button
            className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open('mailto:kartikbhalerao948@gmail.com', '_blank')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
