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
        "relative rounded-3xl border border-border/40 bg-background/35 backdrop-blur-3xl shadow-2xl overflow-hidden",
        "transition-transform duration-500 will-change-transform hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <span
      className="mt-[0.55rem] h-2 w-2 rounded-full bg-primary/80 flex-none"
      aria-hidden="true"
    />
    <span className="text-muted-foreground leading-relaxed">{children}</span>
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary font-bold">
                    Kartik Bhalerao
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/25 rounded-full" />
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
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span>Experience</span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </h2>

            <div className="space-y-10">
              {/* Decision Machine */}
              <article className="relative pl-8 border-l-2 border-primary/25">
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-primary shadow-lg" />

                <header className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">Product Analyst</h3>
                  <p className="text-primary font-semibold">
                    Decision Machine (Pune, India) | June 2024 – Present
                  </p>
                </header>

                <ul className="mt-5 space-y-3">
                  <Bullet>
                    Collaborating with engineering and design to ship improvements
                    with clear success metrics and tight feedback loops.
                  </Bullet>
                  <Bullet>
                    Spending time with users (calls, feedback sessions, usability
                    tests) to understand what's working, what's confusing, and where
                    the real value lies.
                  </Bullet>
                  <Bullet>
                    Writing clear PRDs and keeping the backlog organized—not just for
                    the sake of process, but to make sure we're solving the right
                    problems.
                  </Bullet>
                  <Bullet>
                    Using tools like Mixpanel and PostHog to track usage and figure
                    out what to double down on, what to tweak, and what to kill.
                  </Bullet>
                  <Bullet>
                    Exploring how we can integrate AI into the product to give users
                    smarter financial recommendations without overwhelming them.
                  </Bullet>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Fintech", "B2C Product", "User Research", "PRD Writing", "Mixpanel", "PostHog", "A/B Testing", "Personal Finance", "AI Integration", "Product Analytics"].map(
                    (keyword) => (
                      <span
                        key={keyword}
                        className={cn(
                          "px-3 py-1 rounded-lg text-sm font-medium",
                          "bg-primary/10 text-primary border border-border/40",
                          "shadow-sm hover:shadow-md hover:bg-primary/15 transition-all duration-300"
                        )}
                      >
                        {keyword}
                      </span>
                    )
                  )}
                </div>
              </article>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-80" />

              {/* Ocius */}
              <article className="relative pl-8 border-l-2 border-primary/25">
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full bg-primary shadow-lg" />

                <header className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">Product Manager</h3>
                  <p className="text-primary font-semibold">
                    Ocius (Remote) | Jan 2024 – May 2024
                  </p>
                </header>

                <ul className="mt-5 space-y-3">
                  <Bullet>
                    Took ownership of building an internal analytics dashboard to help
                    sales and marketing teams track campaign performance and lead
                    conversions.
                  </Bullet>
                  <Bullet>
                    Worked closely with data and medical affairs to gather
                    requirements and prioritize features that solved real user pain
                    points.
                  </Bullet>
                  <Bullet>
                    Translated scattered requests into clear user stories and
                    wireframes to speed up dev collaboration.
                  </Bullet>
                  <Bullet>
                    Set up a lightweight feedback loop with stakeholders to ship
                    faster and iterate based on real usage.
                  </Bullet>
                  <Bullet>
                    Automated recurring reports with SQL to replace manual
                    Excel-heavy workflows.
                  </Bullet>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Analytics Dashboard", "Cross-functional", "Data Analytics", "User Stories", "Wireframing", "SQL", "Stakeholders", "Process Automation", "HealthTech"].map(
                    (keyword) => (
                      <span
                        key={keyword}
                        className={cn(
                          "px-3 py-1 rounded-lg text-sm font-medium",
                          "bg-primary/10 text-primary border border-border/40",
                          "shadow-sm hover:shadow-md hover:bg-primary/15 transition-all duration-300"
                        )}
                      >
                        {keyword}
                      </span>
                    )
                  )}
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
              className={cn(
                "inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold",
                "bg-primary text-primary-foreground shadow-lg",
                "hover:shadow-xl hover:brightness-105 transition-all duration-300"
              )}
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
