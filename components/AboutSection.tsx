"use client";

import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="space-y-16">
        {/* Intro */}
        <div className="space-y-6">
            <p className="text-2xl text-foreground leading-relaxed font-medium">
              Hi there! I'm{" "}
              <span className="relative inline-block">
                <span className="font-bold text-primary">
                  Kartik Bhalerao
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-primary/30" />
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
              want to talk product, let's{' '}
              <Link
                href="/contact"
                className="relative inline-block font-bold text-black dark:text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-200 after:origin-right hover:opacity-60 transition-opacity duration-200"
              >
                connect
              </Link>
              —I'm always up for great
              conversations!
            </p>
          </div>

          {/* What I'm Currently Exploring */}
          <div className="pt-16 border-t border-black/10 dark:border-white/10">
            <p className="label-mono text-[11px] text-black/40 dark:text-white/40 mb-3">Now</p>
            <h2 className="heading-display text-3xl mb-2 text-slate-900 dark:text-white">
              What I'm Currently Exploring
            </h2>
            <p className="text-black/40 dark:text-white/40 mt-2 mb-8">
              Focused on AI-powered products, No-Code platforms & PM tooling.{" "}
              <Link href="/builds" className="text-black/70 dark:text-white/70 font-semibold underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors">
                Check out my work
              </Link>{" "}
              — or just explore below.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Building",
                  title: "No-Code PM Platform with AI Agents",
                  desc: "PMs can generate PRDs, roadmaps & competitive analysis using LLMs — no engineering required.",
                },
                {
                  label: "Learning",
                  title: "AI Agent Orchestration & LLM Workflows",
                  desc: "Chaining AI agents and building reliable multi-step LLM pipelines for real PM artifacts.",
                },
                {
                  label: "Thinking About",
                  title: "The Future PM Stack",
                  desc: "Which PM skills — taste, judgment, synthesis — become more valuable as AI takes over the grunt work.",
                },
                {
                  label: "Experimenting With",
                  title: "Figma + Notion as AI Context Sources",
                  desc: "Wiring design files and docs directly into LLM prompts to generate richer, more accurate product specs.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group relative border border-black/10 dark:border-white/10 px-6 py-5 hover:-translate-y-1 hover:border-primary/40 dark:hover:border-primary/50 transition-all duration-200 overflow-hidden cursor-default"
                >
                  <p className="label-mono relative text-[11px] text-black/35 dark:text-white/35 group-hover:text-primary transition-colors duration-200 mb-2">{item.label}</p>
                  <h3 className="relative font-bold text-slate-900 dark:text-white text-[15px] mb-1">{item.title}</h3>
                  <p className="relative text-sm text-black/45 dark:text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="pt-16 border-t border-black/10 dark:border-white/10">
            <p className="label-mono text-[11px] text-black/40 dark:text-white/40 mb-3">Experience</p>
            <h2 className="heading-display text-3xl mb-10 text-slate-900 dark:text-white">
              Work Experience
            </h2>

            <div className="space-y-10">
              {/* Decision Machine */}
              <article className="relative">
                {/* Header */}
                <header className="flex flex-wrap items-start gap-5 sm:gap-7 mb-6">
                  <span className="heading-display text-[56px] sm:text-[72px] leading-[0.8] text-primary/25 select-none">
                    01
                  </span>
                  <div className="flex-1 min-w-[220px] flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="heading-display text-2xl text-slate-900 dark:text-white">Associate Product Manager</h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        Decision Machine &nbsp;·&nbsp; Pune, India
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="label-mono text-[11px] text-white px-3 py-1 bg-foreground dark:text-black">
                        Current
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">June 2024 – Present</span>
                    </div>
                  </div>
                </header>

                {/* Aspect groups */}
                <div className="space-y-7">
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
                    <div key={aspect.label}>
                      {/* Aspect label */}
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-[3px] h-4 flex-shrink-0 bg-primary" />
                        <span className="label-mono text-[11px] text-black/50 dark:text-white/50">
                          {aspect.label}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-2.5">
                        {aspect.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                            <span className="mt-[0.6rem] w-1 h-1 flex-shrink-0 rounded-full bg-foreground/40" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                  {["Fintech", "B2C Product", "User Research", "PRD Writing", "Mixpanel", "A/B Testing", "Personal Finance", "AI Integration", "Product Analytics"].map((tag) => (
                    <span
                      key={tag}
                      className="label-mono inline-flex items-center text-[12px] text-black/70 dark:text-white/70 border border-black/25 dark:border-white/25 px-2.5 py-1"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </article>

              {/* Divider */}
              <div className="w-full h-px bg-black/10 dark:bg-white/10" />

              {/* Ocius */}
              <article className="relative">
                {/* Header */}
                <header className="flex flex-wrap items-start gap-5 sm:gap-7 mb-6">
                  <span className="heading-display text-[56px] sm:text-[72px] leading-[0.8] text-primary/25 select-none">
                    02
                  </span>
                  <div className="flex-1 min-w-[220px] flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="heading-display text-2xl text-slate-900 dark:text-white">Product Manager</h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        Ocius &nbsp;·&nbsp; Remote
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="label-mono text-[11px] text-white px-3 py-1 bg-foreground dark:text-black">
                        Completed
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Jan 2024 – May 2024</span>
                    </div>
                  </div>
                </header>

                {/* Bullet points */}
                <ul className="space-y-2.5">
                  {[
                    "Took ownership of building an internal analytics dashboard to help sales and marketing teams track campaign performance and lead conversions.",
                    "Worked closely with data and medical affairs to gather requirements and prioritize features that solved real user pain points.",
                    "Translated scattered requests into clear user stories and wireframes to speed up dev collaboration.",
                    "Set up a lightweight feedback loop with stakeholders to ship faster and iterate based on real usage.",
                    "Automated recurring reports with SQL to replace manual Excel-heavy workflows.",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="mt-[0.6rem] w-1 h-1 flex-shrink-0 rounded-full bg-foreground/40" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
                  {["Analytics Dashboard", "Cross-functional", "Data Analytics", "User Stories", "Wireframing", "SQL", "Stakeholders", "Process Automation", "HealthTech"].map((tag) => (
                    <span
                      key={tag}
                      className="label-mono inline-flex items-center text-[12px] text-black/70 dark:text-white/70 border border-black/25 dark:border-white/25 px-2.5 py-1"
                    >
                      #{tag.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </div>
      </div>
    </section>
  );
};