import { useState } from "react";
import { Mail, Phone, MapPin, Heart, Coffee, Target, ChevronLeft, ChevronRight, Quote, Users, Briefcase, Award, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Engineering Lead",
    company: "Decision Machine",
    content: "Kartik has an exceptional ability to translate complex requirements into actionable user stories. His data-driven approach and user empathy make him an invaluable asset to any product team.",
    avatar: "RS"
  },
  {
    name: "Priya Mehta",
    role: "Design Lead",
    company: "Ocius",
    content: "Working with Kartik was a pleasure. He bridges the gap between design and development seamlessly, always keeping the user at the center of every decision.",
    avatar: "PM"
  },
  {
    name: "Amit Patel",
    role: "CEO",
    company: "Tech Startup",
    content: "Kartik's strategic thinking and hands-on approach helped us ship features 40% faster. His understanding of both business goals and user needs is remarkable.",
    avatar: "AP"
  },
  {
    name: "Sneha Kulkarni",
    role: "Product Director",
    company: "Fintech Corp",
    content: "Kartik consistently delivers high-quality work with a focus on measurable outcomes. His ability to prioritize and execute is outstanding.",
    avatar: "SK"
  }
];

const stats = [
  { icon: Briefcase, value: "2+", label: "Years Experience", color: "from-blue-500 to-indigo-500" },
  { icon: Users, value: "10+", label: "Products Shipped", color: "from-purple-500 to-pink-500" },
  { icon: Award, value: "5+", label: "Case Studies", color: "from-emerald-500 to-teal-500" },
  { icon: TrendingUp, value: "40%", label: "Avg. Impact", color: "from-orange-500 to-red-500" }
];

export const AboutSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Interactive Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className={`relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-2xl p-6 shadow-xl transition-all duration-500 ${hoveredStat === index ? 'scale-105 shadow-2xl -translate-y-2' : ''}`}>
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content - Enhanced design */}
        <div className="space-y-8">
          {/* Primary content card */}
          <div className="relative group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="space-y-6 mb-10">
                <p className="text-2xl text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                  Hi there! 👋 I'm{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-bold">
                      Kartik Bhalerao
                    </span>
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 dark:from-blue-400/30 dark:to-indigo-400/30 rounded-full"></span>
                  </span>
                  , a Product Manager passionate about building user-centric products that drive real business impact. With a background in data analytics and product strategy, I specialize in translating complex problems into simple, scalable solutions.
                </p>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  My experience spans across fintech, SaaS, and AI-enabled platforms, where I've led cross-functional teams through the entire product lifecycle—from discovery to launch. I'm a strong advocate of hypothesis-driven development and love using data, user insights, and rapid experimentation (A/B testing, MVPs) to inform product decisions.
                </p>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Beyond product building, I document my thought process, case studies, and learnings through detailed blogs and product breakdowns. I'm also exploring the intersection of AI and product management to build smarter tools that empower PMs and teams.
                </p>

                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  If you're equally obsessed with building meaningful products or just want to talk product, let's connect—I'm always up for great conversations!
                </p>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="relative group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8 flex items-center space-x-3">
                <span>Experience</span>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
              </h3>
              
              <div className="space-y-8">
                {/* Decision Machine Experience */}
                <div className="relative pl-8 border-l-4 border-blue-500/30 dark:border-blue-400/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">Product Analyst</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">Decision Machine (Pune, India) | June 2024 – Present</p>
                    </div>
                    
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Leading the development of a B2B fintech product focused on personal finance—working from initial idea validation all the way to launch and iteration.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Collaborating with design and engineering teams to prioritize features, ship MVPs, and iterate based on real user behavior.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Spending time with users (calls, feedback sessions, usability tests) to understand what's working, what's confusing, and where the real value lies.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Writing clear PRDs and keeping the backlog organized—not just for the sake of process, but to make sure we're solving the right problems.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Using tools like Mixpanel and PostHog to track usage and figure out what to double down on, what to tweak, and what to kill.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Recently started exploring how we can integrate AI into the product to give users smarter financial recommendations without overwhelming them.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Running experiments and A/B tests to validate hypotheses before committing resources to full-scale development.</span>
                      </li>
                    </ul>
                    
                    {/* Keywords for Decision Machine */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {['Fintech', 'B2C Product', 'User Research', 'PRD Writing', 'Mixpanel', 'PostHog', 'A/B Testing', 'Personal Finance', 'AI Integration', 'Product Analytics'].map(keyword => (
                        <span key={keyword} className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded border border-blue-200/50 dark:border-blue-700/50 shadow-sm hover:shadow-lg hover:bg-blue-200/90 dark:hover:bg-blue-800/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Blue effect line after Decision Machine experience */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 my-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"></div>
                </div>

                {/* Ocius Experience */}
                <div className="relative pl-8 border-l-4 border-indigo-500/30 dark:border-indigo-400/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">Product Manager</h4>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Ocius (Remote) | Jan 2024 – May 2024</p>
                    </div>
                    
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Took ownership of building an internal analytics dashboard to help the sales and marketing teams track campaign performance and lead conversions more effectively.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Worked closely with cross-functional teams—especially data and medical affairs—to gather requirements and prioritize features that solved real user pain points.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Helped translate scattered requests and ideas into clear user stories and wireframes, which made collaboration with the dev team much smoother.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Set up a basic feedback loop with key stakeholders that helped us ship faster and improve features based on real usage.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Also dabbled in setting up automated reports using SQL to replace some of the manual Excel-based workflows, which saved the team a good chunk of time every week.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Conducted user interviews and gathered insights to inform product roadmap decisions and feature prioritization.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0">✦</span>
                        <span>Documented product requirements and maintained clear communication channels between technical and non-technical stakeholders.</span>
                      </li>
                    </ul>
                    
                    {/* Keywords for Ocius */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {['Analytics Dashboard', 'Cross-functional Teams', 'Data Analytics', 'User Stories', 'Wireframing', 'SQL', 'Medical Awareness', 'Process Automation', 'Stakeholder Management', 'HealthTech'].map(keyword => (
                        <span key={keyword} className="px-3 py-1 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded border border-indigo-200/50 dark:border-indigo-700/50 shadow-sm hover:shadow-lg hover:bg-indigo-200/90 dark:hover:bg-indigo-800/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials / People Perspectives Section */}
        <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-pink-50/30 dark:from-purple-900/10 dark:via-transparent dark:to-pink-900/10 rounded-3xl"></div>
          
          {/* Large quote decoration */}
          <div className="absolute top-8 left-8 opacity-10">
            <Quote className="w-24 h-24 text-purple-500" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center space-x-3">
              <span>What People Say</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10">Perspectives from colleagues and collaborators</p>
            
            {/* Testimonial Carousel */}
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gradient-to-br from-white/60 to-white/30 dark:from-slate-700/60 dark:to-slate-700/30 backdrop-blur-lg rounded-2xl p-8 border border-white/50 dark:border-slate-600/50 shadow-xl">
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-slate-100">{testimonial.name}</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role} at {testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/90 dark:bg-slate-700/90 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-white/50 dark:border-slate-600/50"
              >
                <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/90 dark:bg-slate-700/90 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-white/50 dark:border-slate-600/50"
              >
                <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8' 
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              These case studies represent just a glimpse of my product management approach. Let's discuss how I can help drive your product's success.
            </p>
            <button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" 
              onClick={() => window.open('https://www.linkedin.com/in/kartik-bhalerao/', '_blank')}
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
