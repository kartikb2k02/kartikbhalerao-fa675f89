
import { Mail, Phone, MapPin, Heart, Coffee, Target } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="space-y-12">
        {/* Main content - Enhanced design */}
        <div className="space-y-8">
          {/* Primary content card */}
          <div className="relative group bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/40 dark:border-slate-700/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-indigo-900/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="space-y-6 mb-10">
                <p className="text-2xl text-slate-800 leading-relaxed font-medium">
                  Hi there! 👋 I'm{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">
                      Kartik Bhalerao
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full"></div>
                  </span>
                  , a Product Manager passionate about building user-centric products that drive real business impact. With a background in data analytics and product strategy, I specialize in translating complex problems into simple, scalable solutions.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  My experience spans across fintech, SaaS, and AI-enabled platforms, where I've led cross-functional teams through the entire product lifecycle—from discovery to launch. I'm a strong advocate of hypothesis-driven development and love using data, user insights, and rapid experimentation (A/B testing, MVPs) to inform product decisions.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Beyond product building, I document my thought process, case studies, and learnings through detailed blogs and product breakdowns. I'm also exploring the intersection of AI and product management to build smarter tools that empower PMs and teams.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  If you're equally obsessed with building meaningful products or just want to talk product, let's connect—I'm always up for great conversations!
                </p>
              </div>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className="relative group bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 flex items-center space-x-3">
                <span>Experience</span>
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse"></div>
              </h3>
              
              <div className="space-y-8">
                {/* Decision Machine Experience */}
                <div className="relative pl-8 border-l-4 border-blue-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Product Analyst</h4>
                      <p className="text-blue-600 font-semibold">Decision Machine (Remote) | June 2024 – Present</p>
                    </div>
                    
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-500 mt-1.5">✦</span>
                        <span>Leading the development of a B2C fintech product focused on personal finance—working from initial idea validation all the way to launch and iteration.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-500 mt-1.5">✦</span>
                        <span>Collaborated with design and engineering teams to launch key features like personalized savings goals and real-time expense tracking, resulting in a 25% boost in engagement.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-500 mt-1.5">✦</span>
                        <span>Spending time with users (calls, feedback sessions, usability tests) to understand what’s working, what’s confusing, and where the real value lies.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-500 mt-1.5">✦</span>
                        <span>Writing clear PRDs and keeping the backlog organized—not just for the sake of process, but to make sure we’re solving the right problems.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-500 mt-1.5">✦</span>
                        <span>Using tools like Mixpanel and PostHog to track usage and figure out what to double down on, what to tweak, and what to kill.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-blue-500 mt-1.5">✦</span>
                        <span>Recently started exploring how we can integrate AI into the product to give users smarter financial recommendations without overwhelming them.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Blue effect line after Decision Machine experience */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 my-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"></div>
                </div>

                {/* Ocius Experience */}
                <div className="relative pl-8 border-l-4 border-indigo-500/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg"></div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">Product Manager</h4>
                      <p className="text-indigo-600 font-semibold">Ocius (Remote) | Jan 2024 – May 2024</p>
                    </div>
                    
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-500 mt-1.5">✦</span>
                        <span>Took ownership of building an internal analytics dashboard to help the sales and marketing teams track campaign performance and lead conversions more effectively.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-500 mt-1.5">✦</span>
                        <span>Worked closely with cross-functional teams—especially data and medical affairs—to gather requirements and prioritize features that solved real user pain points.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-500 mt-1.5">✦</span>
                        <span>Helped translate scattered requests and ideas into clear user stories and wireframes, which made collaboration with the dev team much smoother.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-500 mt-1.5">✦</span>
                        <span>Set up a basic feedback loop with key stakeholders that helped us ship faster and improve features based on real usage.</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <span className="text-indigo-500 mt-1.5">✦</span>
                        <span>Also dabbled in setting up automated reports using SQL to replace some of the manual Excel-based workflows, which saved the team a good chunk of time every week.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
