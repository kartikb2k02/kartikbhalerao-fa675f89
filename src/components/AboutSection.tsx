import { cn } from "@/lib/utils";

const GlassCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm",
        "transition-all duration-300 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span
      className="mt-[0.55rem] h-2 w-2 rounded-full flex-none"
      style={{ background: "linear-gradient(135deg, #22c55e, #3b82f6)" }}
      aria-hidden="true"
    />
    <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{children}</span>
  </li>
);

export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="space-y-8">
          {/* Primary content card */}
          <GlassCard className="p-10 sm:p-12">
            <div className="space-y-6 mb-10">
              <p className="text-2xl text-foreground leading-relaxed font-medium">
                Hi there! 👋 I'm{" "}
                <span className="relative inline-block">
                  <span className="animate-gradient-text font-bold">
                    Kartik Bhalerao
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full" style={{ background: "linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6)" }} />
                </span>
                , a Product Manager passionate about building user-centric products that
                drive real business impact. With a background in data analytics and
                product strategy, I specialize in translating complex problems into
                simple, scalable solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My experience spans across fintech, SaaS, and AI-enabled platforms,
                where I've led cross-functional teams through the entire product
                lifecycle—from discovery to launch. I'm a strong advocate of
                hypothesis-driven development and love using data, user insights, and
                rapid experimentation (A/B testing, MVPs) to inform product
                decisions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond product building, I document my thought process, case studies,
                and learnings through detailed blogs and product breakdowns. I'm also
                exploring the intersection of AI and product management to build
                smarter tools that empower PMs and teams.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                If you're equally obsessed with building meaningful products or just
                want to talk product, let's connect—I'm always up for great
                conversations!
              </p>
            </div>
          </GlassCard>

          {/* Experience Section */}
          <GlassCard className="p-10 sm:p-12">
            <h2 className="text-3xl font-black tracking-tight mb-10">
              <span className="text-slate-900 dark:text-white">Work </span>
              <span className="animate-gradient-text">Experience</span>
            </h2>

            <div className="space-y-10">
              {/* Decision Machine */}
              <article className="relative pl-8" style={{ borderLeft: "2px solid transparent", borderImage: "linear-gradient(180deg, #22c55e, #3b82f6) 1" }}>
                {/* Gradient dot */}
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full shadow-md" style={{ background: "linear-gradient(135deg, #22c55e, #3b82f6)" }} />

                <header className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Product Analyst</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Decision Machine · Pune, India · June 2024 – Present
                  </p>
                  <span className="inline-block text-xs font-semibold text-white px-3 py-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #22c55e, #3b82f6)" }}>
                    Current
                  </span>
                </header>

                <ul className="mt-5 space-y-3">
                  <Bullet>Collaborating with engineering and design to ship improvements with clear success metrics and tight feedback loops.</Bullet>
                  <Bullet>Spending time with users (calls, feedback sessions, usability tests) to understand what's working, what's confusing, and where the real value lies.</Bullet>
                  <Bullet>Writing clear PRDs and keeping the backlog organized—not just for the sake of process, but to make sure we're solving the right problems.</Bullet>
                  <Bullet>Using tools like Mixpanel and PostHog to track usage and figure out what to double down on, what to tweak, and what to kill.</Bullet>
                  <Bullet>Exploring how we can integrate AI into the product to give users smarter financial recommendations without overwhelming them.</Bullet>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Fintech", "B2C Product", "User Research", "PRD Writing", "Mixpanel", "PostHog", "A/B Testing", "Personal Finance", "AI Integration", "Product Analytics"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Divider */}
              <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, #3b82f6 40%, #8b5cf6 60%, transparent)" }} />

              {/* Ocius */}
              <article className="relative pl-8" style={{ borderLeft: "2px solid transparent", borderImage: "linear-gradient(180deg, #3b82f6, #8b5cf6) 1" }}>
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full shadow-md" style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }} />

                <header className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Product Manager</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Ocius · Remote · Jan 2024 – May 2024
                  </p>
                  <span className="inline-block text-xs font-semibold text-white px-3 py-0.5 rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #8b5cf6)" }}>
                    Completed
                  </span>
                </header>

                <ul className="mt-5 space-y-3">
                  <Bullet>Took ownership of building an internal analytics dashboard to help sales and marketing teams track campaign performance and lead conversions.</Bullet>
                  <Bullet>Worked closely with data and medical affairs to gather requirements and prioritize features that solved real user pain points.</Bullet>
                  <Bullet>Translated scattered requests into clear user stories and wireframes to speed up dev collaboration.</Bullet>
                  <Bullet>Set up a lightweight feedback loop with stakeholders to ship faster and iterate based on real usage.</Bullet>
                  <Bullet>Automated recurring reports with SQL to replace manual Excel-heavy workflows.</Bullet>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Analytics Dashboard", "Cross-functional", "Data Analytics", "User Stories", "Wireframing", "SQL", "Stakeholders", "Process Automation", "HealthTech"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </GlassCard>
        </div>


        {/* Call to Action */}
        <div className="text-center mt-16">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to see more of my work?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These case studies represent just a glimpse of my product management
              approach. Let's discuss how I can help drive your product's success.
            </p>
            <button
              className="inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold bg-black text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100 shadow-sm hover:scale-[1.02] transition-all duration-200"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kartik-bhalerao/",
                  "_blank"
                )
              }
            >
              Let's Talk
            </button>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
