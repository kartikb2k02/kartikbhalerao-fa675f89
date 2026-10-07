import { blogPosts } from "@/data/blogPosts";
import { caseStudies } from "@/data/caseStudies";

const publishedPosts = blogPosts.filter((p) => !p.comingSoon).length;

export interface Contribution {
  id: string;
  topic: string;
  teaser: string;
  where: string[];
  /** The work itself, written out as paragraphs. */
  detail: string[];
  /** Method: how this gets approached, not what happened once. */
  how?: string;
  /** Only stated where a real number exists. */
  result?: string;
  /** Shown on the right of the collapsed card. An empty value renders as a
   *  named metric chip rather than a figure. */
  kpis?: { value?: string; label: string }[];
  tilt: number;
  /** 1 to 6, maps to the note pads defined in globals.css */
  tone: number;
}

/* ── Decision Machine · Associate Product Manager ───────────────────── */

export const DECISION_MACHINE: Contribution[] = [
  {
    id: "dm-goals",
    topic: "Business goals and KPIs",
    teaser: "Keeping the roadmap tied to company OKRs, not to opinions.",
    where: ["OKRs", "Leadership", "Enterprise"],
    detail: [
      "I define the product KPIs, success metrics and roadmap priorities here, and I build them from two inputs rather than one: customer insight on the demand side, business objectives on the other. A metric that only reflects one of those is easy to move and easy to ignore.",
      "I work directly with leadership on product vision and automation strategy, which means the roadmap conversation is not a status report. It is a question about where the company is trying to get to and what the product has to do to get it there. Keeping the roadmap tied to company OKRs and to the actual needs of enterprise clients is the part that stops it drifting into whatever happens to be interesting that quarter.",
    ],
    how: "I will not put a feature on a roadmap unless I can name the metric it is supposed to move. If nobody can say what number changes, the work is a preference rather than a priority, and it should be argued for on those terms.",
    kpis: [
      { value: "50k → 350k", label: "revenue" },
      { value: "+30%", label: "monthly active users" },
      { label: "Product KPIs" },
      { label: "Company OKRs" },
    ],
    tilt: -1.4,
    tone: 1,
  },
  {
    id: "dm-discovery",
    topic: "Product discovery",
    teaser: "Making discovery something that keeps running after launch.",
    where: ["User research", "Competitive", "Typeform"],
    detail: [
      "I run user research and competitive analysis to find product opportunities. Competitive analysis is the cheaper half and most teams do it once, at the start, and then stop. I treat it as ongoing, because the gap you are aiming at moves.",
      "The piece I am most pleased with is a structured customer feedback system I built in Typeform. Most discovery is front loaded: a burst of interviews before a build, then silence while everyone ships. This keeps discovery running after launch, and routes what comes back into roadmap decisions rather than into a folder nobody opens. That changes discovery from a phase into a standing input.",
    ],
    how: "I would rather have a small amount of feedback arriving every week than a large study once a quarter. Continuous input catches the problems you did not think to ask about, and it means a roadmap decision can cite something recent instead of something from six months ago.",
    kpis: [{ label: "Customer feedback" }, { label: "Competitive scan" }],
    tilt: 1.6,
    tone: 2,
  },
  {
    id: "dm-framing",
    topic: "Problem framing and prioritization",
    teaser: "Framing around the job to be done, then choosing with RICE and MoSCoW.",
    where: ["JTBD", "RICE", "MoSCoW"],
    detail: [
      "I frame each problem around the user, their pain points and the job they are actually trying to get done, and only then pick the solution and the metric. Doing it in that order matters. Start from a solution and you end up retrofitting a problem statement to justify it, which is a document that persuades nobody and teaches you nothing.",
      "For sequencing I use RICE and MoSCoW, balancing business impact, technical feasibility and user value across the roadmap. Two frameworks rather than one because they fail differently: RICE is good at comparing things of similar type and bad at handling must haves, MoSCoW is the reverse. Using both means fewer decisions get made by whichever framework happened to be open.",
    ],
    how: "Frameworks are for making the trade off visible, not for producing a number that ends the conversation. The output I want from a prioritization exercise is a decision everyone in the room watched get made, so it does not get relitigated three weeks later by someone who was not there.",
    kpis: [{ label: "RICE" }, { label: "MoSCoW" }],
    tilt: -1.2,
    tone: 3,
  },
  {
    id: "dm-prds",
    topic: "Solution design and PRDs",
    teaser: "Ten plus modules from discovery to launch, written down properly.",
    where: ["PRDs", "User stories", "Wireframes"],
    detail: [
      "I write the PRDs, user stories, wireframes and release plans, and I have owned delivery on more than ten product modules from discovery through to launch. Writing the release plan into the same document as the requirements is deliberate: it forces the question of how this actually reaches users while there is still time to change the answer.",
      "The piece of work I am proudest of here is changing how business teams use the AI and ML model scores. The models were already producing output. The problem was that the output was a raw score, and a raw score is not a decision. I reworked how it surfaces so it reads as a clear next action instead, which cut manual review steps out of daily operations.",
      "That project is the one I point at when someone asks what AI product work actually involves. The model was not the hard part and it was not what changed. What changed was the interpretation layer between a number and a person who has to act on it.",
    ],
    how: "I write for the person who joins in month four, not for the people already in the room, because those are the readers who will genuinely need the document. And with any model output my first question is what decision it is meant to support, since a score nobody can act on is a cost rather than a feature.",
    kpis: [{ value: "10+", label: "product modules owned" }],
    tilt: 1.3,
    tone: 4,
  },
  {
    id: "dm-delivery",
    topic: "Build and delivery",
    teaser: "Sprint planning, grooming and reviews that keep timelines honest.",
    where: ["Jira", "Confluence", "Notion", "Asana"],
    detail: [
      "I work with engineering, design and QA from discovery through launch rather than handing over at a boundary. Running sprint planning, backlog grooming and stakeholder reviews is how scope, priorities and timelines stay realistic, and realistic is the operative word: the function of grooming is not tidiness, it is catching the item that is far larger than it looks before it is committed to a sprint.",
      "Stakeholder reviews do the same job one level up. They exist so that a change in business priority arrives as a conversation rather than as a surprise halfway through a cycle. My day to day tools are Jira, Confluence, Notion and Asana.",
    ],
    how: "I would rather surface a slipping timeline early and absorb the awkward conversation than protect a date and spend it later with interest. Scope, priority and timeline are three dials and only two can be held fixed, so I say which two out loud.",
    kpis: [
      { value: "10+", label: "modules delivered" },
      { value: "4", label: "tools in daily use" },
      { label: "Scope" },
      { label: "Timelines" },
    ],
    tilt: -1.6,
    tone: 5,
  },
  {
    id: "dm-growth",
    topic: "Launch and growth",
    teaser: "Product led growth aimed at activation and in app adoption.",
    where: ["Activation", "Adoption", "PLG"],
    detail: [
      "The growth work here is product led and focused on activation and in app adoption rather than on acquisition spend. That is the right order for this product: getting more people through the door does nothing if the product has not yet proved it can get the first cohort to the point of value.",
      "Activation is the metric I care about most at this stage because it is the earliest honest signal. Everything downstream, retention, expansion, revenue, is a lagging consequence of whether someone reached the thing the product is actually for in their first session.",
    ],
    how: "I optimise the step where people are already arriving before I pay for more arrivals. A leak scaled is still a leak, and acquisition spend on top of a weak activation flow is the most expensive way to learn nothing.",
    kpis: [
      { value: "+20%", label: "user conversion" },
      { value: "+25%", label: "monthly active users" },
      { label: "Activation" },
      { label: "In-app adoption" },
    ],
    tilt: 1.5,
    tone: 6,
  },
  {
    id: "dm-experiments",
    topic: "Measurement and experimentation",
    teaser: "A/B experiments on onboarding and feature adoption, with the numbers to show.",
    where: ["Mixpanel", "Amplitude", "SQL"],
    detail: [
      "I design and analyse the A/B experiments on onboarding and feature adoption. Designing and analysing both matters, because an experiment set up without a decision rule attached produces a result that gets interpreted to suit whoever reads it first.",
      "That work improved user conversion by 20% and increased monthly active users by 25%. I track funnels and retention in Mixpanel and Amplitude, and use SQL, Google Analytics and Excel for the analysis underneath. Having the SQL in my own hands rather than queued behind someone else is most of what makes the loop fast enough to be useful.",
    ],
    how: "I write down what result would change my mind before the experiment runs. Without that, an inconclusive test becomes an argument about interpretation, and the team learns nothing except who is most persistent.",
    result: "20% improvement in user conversion. 25% increase in monthly active users.",
    kpis: [{ value: "+20%", label: "user conversion" }, { value: "+25%", label: "monthly active users" }],
    tilt: -1.1,
    tone: 1,
  },
];

/* ── Ocius · Product Manager Intern ─────────────────────────────────── */

export const OCIUS: Contribution[] = [
  {
    id: "oc-goals",
    topic: "Closing the loop on OKRs",
    teaser: "Alignment before the cycle, and the number actually checked after it.",
    where: ["OKRs", "North Star"],
    detail: [
      "I helped with OKR alignment across product cycles, which in practice means checking that what a cycle was about to build still connected to what the company had said it was trying to achieve. That link breaks quietly and nobody notices until a quarter has gone.",
      "I also tracked the North Star metric after each release. Tracking it afterwards is the half teams skip: the metric gets chosen during planning, quoted in the kickoff, and then never revisited once the work ships, which means nobody finds out whether the bet paid.",
    ],
    how: "I check the metric after release, not just before the build. A success metric nobody returns to is decoration, and the habit of going back is what turns a release into something you learn from.",
    kpis: [{ label: "North Star" }, { label: "OKR alignment" }],
    tilt: -1.5,
    tone: 2,
  },
  {
    id: "oc-discovery",
    topic: "Product discovery",
    teaser: "Interviews and surveys across the journey, feeding sprint priorities.",
    where: ["Interviews", "Surveys"],
    detail: [
      "I ran user interviews and surveys across the whole customer journey rather than at a single point in it, because pain tends to cluster at the handoffs between stages and those are precisely the parts no single team owns.",
      "What I learned went into shaping sprint priorities, which is the part that made it worth doing. Research that lands in a document and not in the next sprint has cost the team time and returned nothing, and it teaches everyone that discovery is a formality.",
    ],
    how: "Research has to change the next sprint or it was not worth running. I would rather do a smaller study whose findings actually reach the backlog than a thorough one that gets presented and filed.",
    kpis: [{ label: "Pain points" }, { label: "Sprint priorities" }],
    tilt: 1.4,
    tone: 3,
  },
  {
    id: "oc-prds",
    topic: "Solution design and PRDs",
    teaser: "Three MVP features, specified so scope stopped moving.",
    where: ["PRDs", "User flows", "Acceptance criteria"],
    detail: [
      "I wrote the PRDs and user flows for three MVP features, each with acceptance criteria and a release checklist. The acceptance criteria gave engineering a clear definition of done, and having that written before work started is what reduced scope creep.",
      "Scope creep is usually described as people asking for more, but most of it is ambiguity. When done is vague, the work expands to fill the uncertainty, and everyone involved is acting in good faith the whole time. Writing the condition down first removes the room rather than the requests.",
    ],
    how: "I define done as a condition that can be checked rather than as an adjective. If two people can read a story and disagree about whether it is finished, that is a defect in what I wrote.",
    kpis: [{ value: "3", label: "MVP features" }, { label: "Definition of done" }],
    tilt: -1.2,
    tone: 4,
  },
  {
    id: "oc-delivery",
    topic: "Build and delivery",
    teaser: "In grooming and planning with design and engineering, not adjacent to it.",
    where: ["Grooming", "Sprint planning"],
    detail: [
      "I joined backlog grooming and sprint planning alongside design and engineering. As an intern the useful thing about being in those rooms was hearing the questions that got asked about my own documents, which is the fastest available feedback on whether a spec is actually clear.",
      "It also closed the loop on estimation. You learn quickly which kinds of requirement look small on paper and turn out large in practice, and that only happens if you are present when the item is being sized rather than reading the outcome afterwards.",
    ],
    kpis: [{ label: "Backlog" }, { label: "Sprint planning" }],
    tilt: 1.6,
    tone: 5,
  },
  {
    id: "oc-launch",
    topic: "Launch and handoffs",
    teaser: "Checklists that made the product, QA and engineering handoff smoother.",
    where: ["Release checklists", "QA"],
    detail: [
      "The release checklists and acceptance criteria made the handoffs between product, QA and engineering noticeably smoother, and cut post launch issues by 10%. Most post launch issues are not deep bugs. They are things that were never agreed, found by whoever happened to click that path first.",
      "A checklist is an unglamorous instrument and it works for an unglamorous reason: it converts knowledge held in one person's head into something the next person can follow when that person is unavailable.",
    ],
    how: "I write the checklist before launch rather than after the first bad one. The cost of writing it is an hour and the cost of not having it is discovered at the worst possible moment.",
    result: "10% reduction in post launch issues.",
    kpis: [{ value: "−10%", label: "post launch issues" }],
    tilt: -1.4,
    tone: 6,
  },
  {
    id: "oc-measurement",
    topic: "Measurement and experimentation",
    teaser: "UX experiments that moved churn, verified after the fact.",
    where: ["UX experiments", "Churn"],
    detail: [
      "The UX experiments I ran helped reduce user churn by 8%. Churn at this stage is mostly a usability problem wearing a business costume: people are not weighing up alternatives and leaving, they are failing to get something done and quietly not returning.",
      "I tracked the North Star metric after release to check the result actually held, rather than taking the experiment readout as the end of it. Those two numbers disagree more often than people expect, and the gap between them is usually where the real lesson is.",
    ],
    result: "8% reduction in user churn.",
    kpis: [{ value: "−8%", label: "user churn" }, { label: "North Star" }],
    tilt: 1.3,
    tone: 1,
  },
];

/* ── Yaptics · Founding Product Manager ─────────────────────────────── */

export const YAPTICS: Contribution[] = [
  {
    id: "yp-goals",
    topic: "Business goals and KPIs",
    teaser: "North Star metrics set before anything got built.",
    where: ["North Star", "Founding"],
    detail: [
      "I set the North Star metrics before building anything, so that every feature had a number it was meant to move. Doing it first is a different exercise from doing it later: retrofitted metrics tend to be chosen because they are available and flattering, rather than because they describe whether the product works.",
      "On a founding team this is also the only real defence against building whatever is most interesting. When there is no existing product and no existing users, nothing external is pushing back, so the constraint has to be one you impose on yourself in advance.",
    ],
    how: "I would rather choose a metric that might embarrass me than one that is guaranteed to look good. A metric picked after the fact is a justification, and it cannot tell you to stop.",
    kpis: [{ label: "North Star" }, { label: "Set pre-build" }],
    tilt: -1.5,
    tone: 2,
  },
  {
    id: "yp-discovery",
    topic: "Product discovery",
    teaser: "Thirty plus interviews before a single line of spec.",
    where: ["30+ interviews", "Problem validation"],
    detail: [
      "I held more than thirty discovery interviews before writing a spec, specifically to check that the problem was real before spending build time on it. On a founding team that is the cheapest insurance available: the cost of thirty conversations is a few weeks, and the cost of building the wrong thing is the entire runway.",
      "The number mattered less than the point at which the answers stopped surprising me. That is the actual signal that a round of discovery is finished, not hitting a target count of sessions.",
    ],
    how: "I keep interviewing until new conversations stop changing my mind, and treat that as the stopping condition rather than a number in a plan. And I do it before writing a spec, because once a spec exists research quietly turns into looking for support for it.",
    kpis: [{ value: "30+", label: "discovery interviews" }],
    tilt: 1.4,
    tone: 3,
  },
  {
    id: "yp-prioritization",
    topic: "Prioritization",
    teaser: "RICE scoring, and keeping version one small on purpose.",
    where: ["RICE", "MVP scope"],
    detail: [
      "I used RICE scoring to choose which features made it in, and kept the first version small on purpose. On purpose is the important part. A small first version is usually described as a compromise forced by time, and here it was a decision: the fewer things ship, the more clearly you can read what the response to any one of them means.",
      "Scoring also made saying no survivable. When a cut is traceable to the same calculation everything else went through, it reads as a consequence rather than as a verdict on whoever suggested it.",
    ],
    how: "I keep the first release small so the signal is legible. Ship twelve things at once and you learn that something worked, which is almost useless for deciding what to do next.",
    kpis: [{ label: "RICE" }, { label: "MVP scope" }],
    tilt: -1.2,
    tone: 4,
  },
  {
    id: "yp-design",
    topic: "Solution design",
    teaser: "Core flows and wireframes in Figma, revised from real usability feedback.",
    where: ["Figma", "Wireframes", "Usability"],
    detail: [
      "I designed the core flows and wireframes in Figma myself, then revised them based on usability feedback rather than on internal preference. Designing it myself on a founding team removes a handoff and, more usefully, means the person who heard the thirty interviews is the person drawing the screens.",
      "The revisions were the valuable half. A first wireframe is a hypothesis about how someone will move through a product, and watching a real person fail to find something is the only reliable way to find out where that hypothesis was wrong.",
    ],
    how: "I keep early design work deliberately rough so that feedback lands on whether the flow is right rather than on spacing and colour. A polished mockup invites the wrong conversation at the stage where the structure is still in question.",
    kpis: [{ label: "Usability feedback" }],
    tilt: 1.6,
    tone: 5,
  },
  {
    id: "yp-delivery",
    topic: "Build and delivery",
    teaser: "Owned the full backlog, ran planning, shipped the MVP in 90 days.",
    where: ["Backlog", "Sprint planning", "90 days"],
    detail: [
      "I owned the entire backlog and ran sprint planning with the engineering team, and we shipped the MVP in 90 days. Owning the whole backlog on a founding team means there is nobody above you absorbing a bad call, so the sequencing has to be right the first time more often than it does elsewhere.",
      "Ninety days held because the scope was decided early and then protected. Most MVP timelines do not slip because the work was underestimated. They slip because the definition of the MVP kept expanding while the date stayed fixed.",
    ],
    how: "I protect the scope rather than the date, and if something has to move I say which one and why. A date defended by quietly adding work is not a date anyone can plan against.",
    result: "MVP shipped in 90 days.",
    kpis: [{ value: "90", label: "days to MVP" }],
    tilt: -1.6,
    tone: 6,
  },
  {
    id: "yp-gtm",
    topic: "Launch and go to market",
    teaser: "App store listing and the first cohort, done myself.",
    where: ["App Store", "First cohort"],
    detail: [
      "I led the launch work myself, including the app store listing and early user acquisition for the first cohort. The listing is a piece of product work that gets treated as marketing: it is where most people form their entire impression of what the product is, from a screenshot and two lines of text.",
      "Acquiring the first cohort by hand is slow and worth it. You end up with users you can actually talk to, and the reasons they signed up are known rather than inferred from a channel report.",
    ],
    how: "For a first cohort I would rather recruit a small number of users I can have a conversation with than a larger number I can only count. Early on, the qualitative feedback is worth more than the volume.",
    kpis: [{ label: "First cohort" }, { label: "App Store listing" }],
    tilt: 1.3,
    tone: 1,
  },
  {
    id: "yp-ai",
    topic: "AI pipeline",
    teaser: "Transcription, mood analysis and voice response, chained end to end.",
    where: ["WhisperFlow", "Claude Opus", "ElevenLabs"],
    detail: [
      "I built the AI pipeline: WhisperFlow for transcription, Claude Opus for mood analysis, and ElevenLabs for the voice response. Three models in sequence, each one consuming the previous one's output, which is where the interesting engineering problem lives.",
      "The hardest part was that transcribed speech is messy. It arrives without reliable punctuation, with filler words, false starts and mid sentence corrections, and a model asked to read emotional state from that will confidently read the mess instead of the person. I reworked the prompting to handle it, which was the difference between a pipeline that demonstrated well and one that behaved on real input.",
      "That is the lesson I took from the whole build. In a chained system the model is rarely the weak link. The weak link is the shape of what arrives at each stage, and almost nobody budgets time for it.",
    ],
    how: "In a multi step pipeline I assume each stage receives imperfect input and design for that rather than for the clean example. Errors compound through a chain, so a stage that is merely usually right becomes unreliable by the fourth step.",
    kpis: [{ value: "3", label: "models chained" }],
    tilt: -1.4,
    tone: 2,
  },
];

/* ── Rocket.Chat · learning work ────────────────────────────────────── */

export const ROCKETCHAT: Contribution[] = [
  {
    id: "rc-product",
    topic: "Product work on an AI chat feature",
    teaser: "Taking a feature idea forward as the product person.",
    where: ["Open source", "Mentors"],
    detail: [
      "While learning at Rocket.Chat I worked as the product person on a feature idea for an AI chat application, which meant doing the full job on a small scale: making the case for the idea, working out what it would actually involve, and taking it forward with mentors rather than waiting to be assigned the next step.",
      "Working inside an open source project is a useful place to learn this, because nothing gets built on authority. A proposal moves because it is argued for clearly enough that other people choose to spend their time on it.",
    ],
    how: "I would rather learn a role by doing a small version of all of it than a narrow slice of it thoroughly. The parts that connect to each other are where the judgement lives, and you cannot see them from inside one slice.",
    kpis: [{ label: "Feature proposal" }],
    tilt: -1.3,
    tone: 3,
  },
  {
    id: "rc-rag",
    topic: "RAG and LLM applications",
    teaser: "Working out where retrieval and models actually fit in a chat product.",
    where: ["RAG", "LLM apps"],
    detail: [
      "I used RAG and LLM applications here to understand how retrieval and models fit into a chat product specifically, rather than in the abstract. Chat is an unusually demanding context for retrieval: the useful information is scattered across history, the question is often underspecified, and the user expects an answer immediately.",
      "What I wanted out of it was a product sense of where the technology genuinely helps and where it adds confident noise, which is a judgement you can only really form by building something with it.",
    ],
    kpis: [
      { value: "2", label: "retrieval approaches tried" },
      { label: "RAG" },
      { label: "LLM applications" },
    ],
    tilt: 1.5,
    tone: 4,
  },
  {
    id: "rc-cac",
    topic: "Unit economics",
    teaser: "Measuring the CAC ratio alongside mentors.",
    where: ["CAC", "Mentorship"],
    detail: [
      "I measured the CAC ratio for the work with my mentors. Being walked through it by people who had done it before was the point: the arithmetic is simple and the judgement about which costs belong in it is not, and that is the part you get wrong on your own.",
      "It also connected the product decisions back to a cost, which is the link that is easiest to lose when you are learning product thinking through features and flows alone.",
    ],
    kpis: [{ label: "CAC ratio" }],
    tilt: -1.2,
    tone: 5,
  },
];

/* ── Own builds and side work ───────────────────────────────────────── */

export const OWN_BUILDS: Contribution[] = [
  {
    id: "ob-compint",
    topic: "Competitive intelligence pipeline",
    teaser: "Apify, the Claude API and n8n, and I actually use it.",
    where: ["Apify", "Claude API", "n8n"],
    detail: [
      "I built a competitive intelligence pipeline with Apify for collection, the Claude API for interpretation and n8n to orchestrate it. The thing I would point to is not the stack, it is that I use it. Most internal tooling built for oneself gets abandoned within a fortnight because it solved an imagined version of the problem.",
      "It works because competitive tracking is exactly the kind of task that is valuable, repetitive and easy to stop doing. Automating it means the input is still arriving in a month, when the manual version would have quietly lapsed.",
    ],
    how: "I automate the work I know I will stop doing by hand. The test of a tool like this is whether it is still running a month later, not whether it worked the day it was built.",
    kpis: [
      { value: "3", label: "services chained" },
      { label: "Runs unattended" },
    ],
    tilt: -1.5,
    tone: 6,
  },
  {
    id: "ob-prototyping",
    topic: "Prototyping",
    teaser: "Claude Code, Emergent and Lovable, for answering questions fast.",
    where: ["Claude Code", "Emergent", "Lovable"],
    detail: [
      "I prototype ideas quickly with Claude Code, Emergent and Lovable. The value is not that it saves engineering time, it is that it changes which questions are worth asking. When a rough working version takes an afternoon, you can settle an argument by building the thing instead of debating it in the abstract.",
      "It also makes me a better counterpart to engineers. Having built a crude version, I have usually met the awkward part of the problem myself, which makes an estimate easier to understand and much harder to wave away.",
    ],
    kpis: [
      { value: "3", label: "prototyping tools" },
      { label: "Hours, not sprints" },
    ],
    tilt: 1.4,
    tone: 1,
  },
  {
    id: "ob-technical",
    topic: "Technical foundation",
    teaser: "REST APIs, webhooks, JSON and Git, enough to be useful.",
    where: ["REST", "Webhooks", "JSON", "Git"],
    detail: [
      "On the technical side I work with REST APIs, webhooks and JSON, and I use Git for version control. This is not an engineering claim. It is the level at which a product manager can write an integration spec that is actually buildable, read a payload to see why something is failing, and follow a code review well enough to know what is being discussed.",
      "The practical return is fewer round trips. A requirement written by someone who understands what a webhook can and cannot tell you arrives closer to correct, and needs less translation before anyone can start.",
    ],
    kpis: [
      { value: "4", label: "interfaces I work in" },
      { label: "REST, webhooks, JSON, Git" },
    ],
    tilt: -1.2,
    tone: 2,
  },
  {
    id: "ob-copilot",
    topic: "PM Co-Pilot",
    teaser: "An AI workspace that writes the artifact instead of helping you type.",
    where: ["Live", "Full stack", "Claude API"],
    detail: [
      "PM Co-Pilot addresses context switching. A product manager drafting a PRD has the design in Figma, the planning doc in Notion, research in a browser tab and the writing somewhere else entirely, and spends a real part of the day carrying information between those places by hand. Most AI tools for this help you write faster in the last place. None of them had the first three.",
      "So it is built around connectors rather than prompts. You plug in a Figma token, a Notion token or any URL, that becomes the context, and then it generates against the real source: thirteen artifact types in all, from PRDs and roadmaps to competitive analyses, OKRs and sprint briefs, streaming token by token so a long generation shows progress instead of a spinner.",
      "Underneath every artifact there is a multi turn chat, which turned out to be the feature that made it usable rather than impressive. First drafts are rarely right, and being able to revise in place beats regenerating and losing what was already good. There is JWT auth and Supabase persistence so work survives a session, a model selector so the expensive model gets used only where the task justifies it, and write back into Notion, Jira and Linear, because an artifact that stays in the tool that made it has not entered anyone's workflow. I built it end to end and deployed it in under two weeks.",
    ],
    how: "I build the tools I want to use, which keeps the feedback loop honest, and I would rather finish a narrow thing that completes a real workflow including the unglamorous last step than a broad thing that stops at the demo.",
    result: "Live, deployed, and the tool I use on my own work.",
    kpis: [{ value: "13", label: "artifact types" }, { value: "2 wks", label: "to deployed" }],
    tilt: 1.6,
    tone: 3,
  },
  {
    id: "ob-figprd",
    topic: "figprd",
    teaser: "Point it at a Figma file and it writes the spec. Nothing pasted.",
    where: ["MCP", "Claude Sonnet", "CLI"],
    detail: [
      "PMs lose hours translating Figma screens into written requirements, describing layouts and enumerating states a designer has already drawn. It is transcription, and like all transcription it loses information. figprd removes that step: it connects to Figma over the Model Context Protocol and walks the actual design tree, with frames, components and layer names intact, rather than looking at a screenshot.",
      "From that it streams a structured PRD into the terminal: user stories, acceptance criteria, flows and edge cases. The edge cases are the interesting part, because a design file usually contains states a written description would skip, like the empty state or the variant nobody mentioned in standup. Reading the tree directly surfaces them.",
      "There is no interface, deliberately. It is a pure agent pipeline that runs on one command, and that was a design decision rather than a shortcut: a UI would have meant maintaining a UI, and the whole value is in the pipeline.",
    ],
    how: "I would rather an agent read the primary source than a description of it, because most quality loss in these pipelines happens where a human summarises something for the model.",
    kpis: [{ value: "1", label: "command" }, { label: "No UI" }],
    tilt: -1.4,
    tone: 4,
  },
  {
    id: "ob-writing",
    topic: "Writing and case studies",
    teaser: "Teardowns, a GenAI case study, and thinking out loud in public.",
    where: ["Case studies", "Blog", "LinkedIn"],
    detail: [
      "Outside work I write product case studies, including a GenAI trip planning case study for MakeMyTrip, and I write about product and AI on my blog and on LinkedIn.",
      "Writing a teardown of someone else's product is the closest available substitute for working on it. You have to reconstruct the constraints they were under and the trade offs they probably made, which is a more useful exercise than reading about how a decision should be approached in theory.",
      "Publishing is the part that makes it work. An argument written for other people to read gets held to a standard that private notes never reach, and the gaps show up while you are writing rather than in a conversation later.",
    ],
    how: "I write to find out whether I understand something. If I cannot explain a decision in a way a stranger could follow, I have not finished thinking about it.",
    kpis: [
      { value: `${publishedPosts}`, label: "posts published" },
      { value: `${caseStudies.length}`, label: "case studies written" },
    ],
    tilt: 1.3,
    tone: 5,
  },
];
