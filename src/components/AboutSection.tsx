import { useState } from "react";
import { Mail, Phone, MapPin, Heart, Coffee, Target, Sparkles, Quote, Star, ArrowRight, Zap, Users, Lightbulb, Rocket, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Engineer",
    company: "Decision Machine",
    image: "PS",
    quote: "Kartik has an exceptional ability to translate complex technical requirements into clear product specifications. His collaborative approach makes cross-functional work seamless.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    name: "Rahul Desai",
    role: "Design Lead",
    company: "Ocius",
    image: "RD",
    quote: "Working with Kartik was a pleasure. He deeply understands user needs and always pushes for designs that balance business goals with user experience.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    name: "Ananya Patel",
    role: "Data Analyst",
    company: "Decision Machine",
    image: "AP",
    quote: "Kartik's data-driven approach to product decisions is impressive. He asks the right questions and knows how to use analytics to validate hypotheses.",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    name: "Vikram Singh",
    role: "Founder",
    company: "Startup Mentor",
    image: "VS",
    quote: "Kartik brings a rare combination of strategic thinking and hands-on execution. His ability to prioritize and ship meaningful features is remarkable.",
    gradient: "from-amber-500 to-orange-600"
  }
];

const stats = [
  { label: "Products Shipped", value: "8+", icon: <Rocket className="w-5 h-5" /> },
  { label: "User Interviews", value: "100+", icon: <Users className="w-5 h-5" /> },
  { label: "Features Launched", value: "50+", icon: <Zap className="w-5 h-5" /> },
  { label: "A/B Tests Run", value: "30+", icon: <Lightbulb className="w-5 h-5" /> }
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
      <div className="space-y-16">
        
        {/* Interactive Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div className={cn(
                "relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden",
                "bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl",
                "border-slate-200/50 dark:border-slate-700/50",
                hoveredStat === index && "border-blue-500/50 dark:border-blue-400/50 scale-105 shadow-xl shadow-blue-500/10"
              )}>
                {/* Animated background on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-300",
                  hoveredStat === index && "opacity-100"
                )} />
                
                {/* Floating particles on hover */}
                <div className={cn(
                  "absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300",
                  hoveredStat === index && "opacity-100"
                )}>
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500/40 rounded-full animate-ping" />
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-indigo-500/40 rounded-full animate-ping [animation-delay:300ms]" />
                </div>
                
                <div className="relative z-10 text-center">
                  <div className={cn(
                    "inline-flex p-3 rounded-xl mb-3 transition-all duration-300",
                    "bg-gradient-to-br from-blue-500/10 to-indigo-500/10",
                    hoveredStat === index && "from-blue-500/20 to-indigo-500/20 scale-110"
                  )}>
                    <div className="text-blue-600 dark:text-blue-400">
                      {stat.icon}
                    </div>
                  </div>
                  <div className={cn(
                    "text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent transition-transform duration-300",
                    hoveredStat === index && "scale-110"
                  )}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content - Enhanced design */}
        <div className="space-y-8">
          {/* Primary content card with unique design */}
          <div className="relative group">
            {/* Decorative corner elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-indigo-500/50 rounded-tr-lg" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-indigo-500/50 rounded-bl-lg" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-blue-500/50 rounded-br-lg" />
            
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 overflow-hidden">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-indigo-900/20 rounded-3xl" />
              
              {/* Floating accent shapes */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                {/* Sparkle header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-lg shadow-amber-500/30">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">My Story</span>
                </div>
                
                <div className="space-y-6">
                  <p className="text-2xl text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                    Hi there! 👋 I'm{" "}
                    <span className="relative inline-block group/name">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 font-bold animate-gradient bg-[length:200%_auto]">
                        Kartik Bhalerao
                      </span>
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 rounded-full opacity-50 group-hover/name:opacity-100 transition-opacity" />
                    </span>
                    , a Product Manager passionate about building user-centric products that drive real business impact.
                  </p>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    My experience spans across fintech, SaaS, and AI-enabled platforms, where I've led cross-functional teams through the entire product lifecycle—from discovery to launch. I'm a strong advocate of hypothesis-driven development and love using data, user insights, and rapid experimentation to inform product decisions.
                  </p>

                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    Beyond product building, I document my thought process, case studies, and learnings through detailed blogs and product breakdowns. I'm also exploring the intersection of AI and product management to build smarter tools that empower PMs and teams.
                  </p>

                  {/* Interactive highlight box */}
                  <div className="relative p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 border border-blue-200/30 dark:border-blue-700/30 overflow-hidden group/cta">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000" />
                    <div className="relative flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg shadow-blue-500/30 flex-shrink-0">
                        <Coffee className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
                          Let's build something meaningful together
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          If you're equally obsessed with building meaningful products or just want to talk product, let's connect—I'm always up for great conversations!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Experience Section with Timeline */}
          <div className="relative group">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-10">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg shadow-blue-500/30">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Experience</h3>
                  <div className="flex gap-1 ml-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse [animation-delay:200ms]" />
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse [animation-delay:400ms]" />
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* Decision Machine Experience */}
                  <div className="relative group/exp">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-transparent rounded-full" />
                    <div className="absolute -left-2 top-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg shadow-blue-500/50 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    
                    <div className="pl-10 pb-8">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200/30 dark:border-blue-700/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group-hover/exp:border-blue-400/50">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100">Product Analyst</h4>
                          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">Current</span>
                        </div>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Decision Machine (Pune, India) | June 2024 – Present</p>
                        
                        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-blue-500 dark:text-blue-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Leading the development of a B2B fintech product focused on personal finance—from idea validation to launch.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-blue-500 dark:text-blue-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Launched key features like personalized savings goals and real-time expense tracking, resulting in a 25% boost in engagement.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-blue-500 dark:text-blue-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Conducting user research through interviews, feedback sessions, and usability tests to understand pain points and validate solutions.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-blue-500 dark:text-blue-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Writing detailed PRDs and maintaining a prioritized backlog aligned with business objectives and user needs.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-blue-500 dark:text-blue-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Using Mixpanel and PostHog to track user behavior, run A/B tests, and make data-driven product decisions.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-blue-500 dark:text-blue-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Collaborating with design and engineering teams through agile sprints to ensure timely feature delivery.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-blue-500 dark:text-blue-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Exploring AI integration to provide users with smarter financial recommendations without overwhelming them.</span>
                          </li>
                        </ul>
                        
                        <div className="mt-6 flex flex-wrap gap-2">
                          {['Fintech', 'B2C Product', 'User Research', 'Mixpanel', 'A/B Testing', 'AI Integration'].map((keyword) => (
                            <span key={keyword} className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200/50 dark:border-blue-700/50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ocius Experience */}
                  <div className="relative group/exp">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-400 to-transparent rounded-full" />
                    <div className="absolute -left-2 top-0 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg shadow-indigo-500/50 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    
                    <div className="pl-10">
                      <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/30 dark:border-indigo-700/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group-hover/exp:border-indigo-400/50">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">Product Manager</h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">Ocius (Remote) | Jan 2024 – May 2024</p>
                        
                        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Built an internal analytics dashboard for sales and marketing teams to track campaign performance and lead conversions.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Worked closely with cross-functional teams—data, medical affairs, and engineering—to gather requirements and prioritize features.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Translated scattered requests into clear user stories and wireframes for smoother dev collaboration.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Set up a feedback loop with key stakeholders to ship faster and improve features based on real usage patterns.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Automated SQL reports to replace manual Excel-based workflows, saving the team significant time every week.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Defined KPIs and success metrics to measure dashboard adoption and track ROI of product initiatives.</span>
                          </li>
                          <li className="flex items-start space-x-3 group/item">
                            <span className="text-indigo-500 dark:text-indigo-400 mt-1.5 group-hover/item:scale-125 transition-transform">✦</span>
                            <span>Conducted stakeholder interviews to understand pain points and ensure the dashboard solved real user problems.</span>
                          </li>
                        </ul>
                        
                        <div className="mt-6 flex flex-wrap gap-2">
                          {['Analytics Dashboard', 'Cross-functional Teams', 'SQL', 'Wireframing', 'HealthTech'].map((keyword) => (
                            <span key={keyword} className="px-3 py-1 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full border border-indigo-200/50 dark:border-indigo-700/50 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default">
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
          </div>
        </div>
        
        {/* People Perspectives / Testimonials Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-lg shadow-purple-500/30">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">What People Say</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Perspectives from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Colleagues
              </span>
            </h3>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main testimonial card */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/40 dark:border-slate-700/40 overflow-hidden">
                      {/* Decorative quote icon */}
                      <div className="absolute top-6 right-6 opacity-10">
                        <Quote className="w-24 h-24 text-slate-400" />
                      </div>
                      
                      {/* Gradient accent */}
                      <div className={cn(
                        "absolute top-0 left-0 w-full h-1 bg-gradient-to-r",
                        testimonial.gradient
                      )} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed mb-8 italic">
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="flex items-center gap-4">
                          {/* Avatar */}
                          <div className={cn(
                            "w-14 h-14 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg",
                            testimonial.gradient
                          )}>
                            {testimonial.image}
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                          
                          {/* Rating stars */}
                          <div className="ml-auto flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      activeTestimonial === index
                        ? "bg-gradient-to-r from-blue-500 to-indigo-600 w-8"
                        : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                    )}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="relative group overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-10 border border-blue-200/30 dark:border-blue-700/30 backdrop-blur-sm">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-xl shadow-blue-500/30 mb-6">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Want to see more of my work?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                These case studies represent just a glimpse of my product management approach. Let's discuss how I can help drive your product's success.
              </p>
              <button 
                className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                onClick={() => window.open('https://www.linkedin.com/in/kartik-bhalerao/', '_blank')}
              >
                <span className="relative z-10">Let's Talk</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
