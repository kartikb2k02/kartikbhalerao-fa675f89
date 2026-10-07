import { StickyNote } from "@/components/StickyNote";
import { Reveal } from "@/components/Reveal";
import { ContributionNotes } from "@/components/ContributionNotes";
import {
  DECISION_MACHINE,
  OCIUS,
  YAPTICS,
  ROCKETCHAT,
  OWN_BUILDS,
  type Contribution,
} from "@/data/contributions";

const TIMELINE = [
  { when: "2022", what: "Open source contributor", where: "Rocket.Chat" },
  { when: "2023", what: "Moved into product management", where: "The switch" },
  { when: "2024", what: "Product Manager Intern", where: "Ocius · Remote" },
  { when: "Mid 2024", what: "Associate Product Manager", where: "Decision Machine · Pune" },
  { when: "2025", what: "Founding PM, consumer tech app", where: "Side projects for enterprise" },
  { when: "2026", what: "AI agents and products", where: "Now" },
];

function Timeline() {
  return (
    <div className="border-t border-border">
      {TIMELINE.map((row, i) => {
        const isCurrent = i === TIMELINE.length - 1;
        return (
          <Reveal key={row.what} delay={i * 70}>
            <div className="index-row grid sm:grid-cols-[132px_1fr_auto] gap-1 sm:gap-8 py-5">
              <span className="data-mono text-[12px] text-primary flex items-center gap-2.5">
                {isCurrent && (
                  <span className="w-1.5 h-1.5 bg-primary shrink-0" aria-hidden="true" />
                )}
                {row.when}
              </span>
              <span
                className={`text-[16px] ${
                  isCurrent ? "text-foreground font-medium" : "text-foreground/85"
                }`}
              >
                {row.what}
              </span>
              <span className="data-mono text-[12px] text-muted-foreground">
                {row.where}
              </span>
            </div>
          </Reveal>
        );
      })}
      <div className="border-t border-border" />
    </div>
  );
}

function Act({
  index,
  role,
  period,
  title,
  lede,
  note,
  items,
}: {
  index: string;
  role: string;
  period: string;
  title: string;
  lede: string;
  note: React.ReactNode;
  items: Contribution[];
}) {
  return (
    <section className="border-t border-border py-12 sm:py-16">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-10 lg:gap-16 mb-10 sm:mb-12">
        <div className="min-w-0">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-5 flex-wrap">
              <span className="data-mono text-[11px] text-primary">{index}</span>
              <span className="label-mono text-[10px] text-muted-foreground">{role}</span>
              <span className="data-mono text-[11px] text-muted-foreground/60 ml-auto">
                {period}
              </span>
            </div>

            <h2
              className="heading-display text-foreground leading-[1.02]"
              style={{ fontSize: "clamp(34px, 6vw, 76px)" }}
            >
              {title}
            </h2>

            <p className="text-[16.5px] sm:text-[18px] text-muted-foreground leading-[1.6] max-w-[60ch] mt-5">
              {lede}
            </p>
          </Reveal>
        </div>

        <div className="lg:pt-14">
          <Reveal delay={120}>{note}</Reveal>
        </div>
      </div>

      <ContributionNotes items={items} />
    </section>
  );
}

export const AboutSection = () => {
  return (
    <div>
      <Timeline />

      <Act
        index="01"
        role="Associate Product Manager"
        period="Decision Machine"
        title="Decision Machine"
        lede="Product KPIs, roadmap and AI product work with leadership and enterprise clients. Open any card for what I worked on and what I found."
        items={DECISION_MACHINE}
        note={
          <StickyNote tilt={1.5} title="What I found">
            The models were already producing scores. What was missing was the
            step between a number and a person who has to act on it.
          </StickyNote>
        }
      />

      <Act
        index="02"
        role="Product Manager Intern"
        period="Ocius"
        title="Ocius"
        lede="Discovery across the customer journey, three MVP features, and the checklists that made handoffs stop hurting."
        items={OCIUS}
        note={
          <StickyNote tilt={-1.4} title="What I found">
            Most post launch issues were not bugs. They were things nobody had
            agreed on, found by whoever clicked that path first.
          </StickyNote>
        }
      />

      <Act
        index="03"
        role="Founding Product Manager"
        period="Consumer voice product"
        title="Consumer tech app"
        lede="Thirty plus interviews before a spec, a deliberately small first version, and an MVP shipped in 90 days."
        items={YAPTICS}
        note={
          <StickyNote tilt={1.6} title="What I found">
            Transcribed speech is messy. The model was never the weak link, the
            shape of what reached it was.
          </StickyNote>
        }
      />

      <Act
        index="04"
        role="Learning work"
        period="Rocket.Chat"
        title="Rocket.Chat"
        lede="Working as the product person on an AI chat feature idea, with RAG, LLM applications and mentors to argue with."
        items={ROCKETCHAT}
        note={
          <StickyNote tilt={-1.3} title="What I found">
            In open source nothing gets built on authority. A proposal moves
            only if it is argued for well enough that people spend time on it.
          </StickyNote>
        }
      />

      <Act
        index="05"
        role="Own builds"
        period="Ongoing"
        title="Side work"
        lede="The AI tooling I wanted as a PM, built and actually used, plus the case studies and writing that go with it."
        items={OWN_BUILDS}
        note={
          <StickyNote tilt={1.4} title="What I found">
            Most tooling you build for yourself dies in a fortnight. The test is
            whether it is still running a month later.
          </StickyNote>
        }
      />
    </div>
  );
};
