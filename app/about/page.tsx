import type { Metadata } from "next";
import { Nav } from "@/components/home/Nav";
import { Shell, Section } from "@/components/home/Shell";
import { ExperienceItem } from "@/components/home/ExperienceItem";
import { JourneyTimeline } from "@/components/home/JourneyTimeline";
import { Outcomes } from "@/components/home/Outcomes";
import { Practice } from "@/components/home/Practice";
import { IndustryList } from "@/components/home/IndustryList";
import { ConnectCard } from "@/components/home/ConnectCard";
import { SiteFooter } from "@/components/home/SiteFooter";
import { profile, roles } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Kartik Bhalerao — a product manager working across AI products, B2B SaaS, consumer experiences, growth and go-to-market execution.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <Nav />

      <Shell>
        <Section label="my intro">
          <div className="space-y-4">
            {profile.story.map((para) => (
              <p
                key={para.slice(0, 32)}
                className="max-w-[68ch] text-[15px] leading-relaxed text-muted-foreground"
              >
                {para}
              </p>
            ))}
          </div>
        </Section>

        {/* details.md §9 says these should be published only after
            confirming definitions and measurement periods, hence the
            qualifier rather than four bare percentages. */}
        <Section label="my journey">
          <JourneyTimeline />
        </Section>

        <Section label="experience">
          <p className="text-[14px] leading-snug text-muted-foreground">
            Where I have worked and what I shipped.
          </p>
          <div className="group/list divide-y divide-border">
            {roles.map((role) => (
              <ExperienceItem key={role.slug} role={role} />
            ))}
          </div>
        </Section>

        {/* The years that are not roles. Kept separate from `experience`
            so nothing here reads as a job title it was not. */}
        <Section label="results">
          <Outcomes />
          <p className="text-[12px] text-muted-foreground">
            Figures as reported. Baselines, timeframes and attribution available
            on request.
          </p>
        </Section>

        <Section label="skills">
          <Practice />
        </Section>

        <Section label="industries i work in">
          <p className="text-[14px] leading-snug text-muted-foreground">
            Open one to see what I built there and what it moved.
          </p>
          <IndustryList />
        </Section>

        <Section>
          <ConnectCard />
        </Section>

      </Shell>

      <SiteFooter />
    </>
  );
}
