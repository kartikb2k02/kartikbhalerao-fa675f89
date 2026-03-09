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
        "rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm",
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
              <article className="relative pl-8 border-l-2 border-black dark:border-white">
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full shadow-md bg-black dark:bg-white" />

                {/* Header */}
                <header className="flex flex-wrap items-start justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Product Analyst</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Decision Machine &nbsp;·&nbsp; Pune, India
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-xs font-semibold text-white px-3 py-1 rounded-full bg-black dark:bg-white dark:text-black">
                      Current
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">June 2024 – Present</span>
                  </div>
                </header>

                {/* Aspect cards */}
                <div className="grid gap-3">
                  {[
                    {
                      icon: "🔍",
                      label: "Market & Insights",
                      points: [
                        "Benchmarked 12 competing fintech products on features, pricing, and app-store sentiment to map the competitive landscape.",
                        "Identified a clear whitespace: Tier-2 city users underserved by existing credit-awareness tools — directly shaping the product's differentiation angle.",
                        "Led 20+ user interviews and diary studies to surface real pain points around credit scores, loan eligibility, and savings discipline.",
                        "Synthesized findings into actionable personas (e.g., 'First-Time Borrower', 'Aspirational Saver') used across design and engineering sprints.",
                      ],
                    },
                    {
                      icon: "📋",
                      label: "Product Definition",
                      points: [
                        "Authored end-to-end PRDs covering problem context, success metrics, edge cases, and acceptance criteria — keeping engineering and design aligned.",
                        "Broke down epics into user stories with clear JTBD framing, reducing ambiguity during sprint planning.",
                        "Ran RICE-based prioritization workshops to align stakeholders on what ships in V1 vs. what gets parked in the backlog.",
                        "Defined MVP scope around three core flows: credit score explainer, savings nudge engine, and loan eligibility simulator.",
                      ],
                    },
                    {
                      icon: "🤖",
                      label: "AI / ML",
                      points: [
                        "Defined product requirements and integration specs for 20+ third-party platforms — including Google Meet, Linear, HubSpot, and Stripe — translating business needs into clear API contracts for engineering.",
                        "Owned the end-to-end product scope for AI agent workflows, writing use cases, edge case documentation, and success criteria that guided LLM feature development.",
                      ],
                    },
                    {
                      icon: "🗺️",
                      label: "Roadmap",
                      points: [
                        "Built and owned a 6-month rolling roadmap, broken into discovery, build, and validation phases per quarter.",
                        "Delivered V1 in under 8 weeks by sequencing dependencies early and cutting low-impact features after prioritization.",
                        "Set up a Now / Next / Later framework to communicate roadmap intent to leadership without committing to fixed dates prematurely.",
                        "Introduced fortnightly roadmap reviews to incorporate user feedback, bug severity, and business priorities in near real-time.",
                      ],
                    },
                    {
                      icon: "🚀",
                      label: "Go-To-Market",
                      points: [
                        "Defined target segments and crafted positioning around trust and simplicity — two attributes competitors consistently failed on in user reviews.",
                        "Co-authored launch messaging with marketing, ensuring product copy reflected real user language gathered during interviews.",
                        "Set up a closed beta with 200+ early users, structured onboarding flows, and tracked activation and D7 retention as leading indicators.",
                        "Built the GTM readiness checklist covering support docs, escalation paths, analytics instrumentation, and rollback criteria.",
                      ],
                    },
                    {
                      icon: "📈",
                      label: "Metrics & Impact",
                      points: [
                        "Reduced early-stage churn by 22% after redesigning the onboarding flow based on drop-off data from Mixpanel.",
                        "Improved D7 retention by 18% within 6 weeks of shipping the savings nudge engine.",
                        "Drove a 3.2× ROI on the beta cohort by optimising the credit score explainer flow, reducing support tickets by 35%.",
                        "Achieved 78% feature adoption on MVP core flows within the first month post-launch.",
                      ],
                    },
                  ].map((aspect) => (
                    <div
                      key={aspect.label}
                      className="rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/60 dark:bg-white/[0.02] px-5 py-4 hover:border-slate-200 dark:hover:border-white/10 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-200"
                    >
                      {/* Aspect label */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-[3px] h-4 rounded-full flex-shrink-0 bg-black dark:bg-white" />
                        <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white text-slate-700 dark:text-black border border-slate-200 dark:border-white">
                          {aspect.label}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2">
                        {aspect.points.map((point, i) => {
                          const dotColors = [
                            "bg-black dark:bg-white",
                            "bg-black dark:bg-white",
                            "bg-black dark:bg-white",
                            "bg-black dark:bg-white",
                          ];
                          return (
                          <li key={i} className="flex items-start gap-2.5 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className={`mt-[0.45rem] w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[i % dotColors.length]}`} />
                            {point}
                          </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                  {["Fintech", "B2C Product", "User Research", "PRD Writing", "Mixpanel", "A/B Testing", "Personal Finance", "AI Integration", "Product Analytics"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white hover:opacity-70 transition-opacity duration-150 cursor-default"
                    >
                      <span className="opacity-50 font-normal">#</span>{tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Divider */}
              <div className="w-full h-px bg-black dark:bg-white opacity-15" />

              {/* Ocius */}
              <article className="relative pl-8 border-l-2 border-black dark:border-white">
                <div className="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full shadow-md bg-black dark:bg-white" />

                {/* Header */}
                <header className="flex flex-wrap items-start justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Product Manager</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Ocius &nbsp;·&nbsp; Remote
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className="text-xs font-semibold text-white px-3 py-1 rounded-full bg-black dark:bg-white dark:text-black">
                      Completed
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Jan 2024 – May 2024</span>
                  </div>
                </header>

                {/* Points card */}
                <div className="rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/60 dark:bg-white/[0.02] px-5 py-4 hover:border-slate-200 dark:hover:border-white/10 hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-all duration-200">
                  <ul className="space-y-2">
                    {[
                      "Took ownership of building an internal analytics dashboard to help sales and marketing teams track campaign performance and lead conversions.",
                      "Worked closely with data and medical affairs to gather requirements and prioritize features that solved real user pain points.",
                      "Translated scattered requests into clear user stories and wireframes to speed up dev collaboration.",
                      "Set up a lightweight feedback loop with stakeholders to ship faster and iterate based on real usage.",
                      "Automated recurring reports with SQL to replace manual Excel-heavy workflows.",
                    ].map((point, i) => {
                      const dotColors = [
                        "bg-black dark:bg-white",
                        "bg-black dark:bg-white",
                        "bg-black dark:bg-white",
                        "bg-black dark:bg-white",
                        "bg-black dark:bg-white",
                      ];
                      return (
                      <li key={i} className="flex items-start gap-2.5 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className={`mt-[0.45rem] w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotColors[i % dotColors.length]}`} />
                        {point}
                      </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                  {["Analytics Dashboard", "Cross-functional", "Data Analytics", "User Stories", "Wireframing", "SQL", "Stakeholders", "Process Automation", "HealthTech"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white hover:opacity-70 transition-opacity duration-150 cursor-default"
                    >
                      <span className="opacity-50 font-normal">#</span>{tag}
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
