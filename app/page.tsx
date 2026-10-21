import { Nav } from "@/components/home/Nav";
import { Shell, Section } from "@/components/home/Shell";
import { IntroSection } from "@/components/home/IntroSection";
import { IntroCard } from "@/components/home/IntroCard";
import { ScrollWordReveal } from "@/components/home/ScrollWordReveal";
import { Currently } from "@/components/home/Currently";
import { Walker } from "@/components/home/Walker";
import { ListRow, RowList } from "@/components/home/ListRow";
import { ExperienceItem } from "@/components/home/ExperienceItem";
import { BannerGrid } from "@/components/home/BannerGrid";
import { ViewAllButton } from "@/components/home/ViewAllButton";
import { SiteFooter } from "@/components/home/SiteFooter";
import { profile, roles, HOMEPAGE_ROLE_COUNT } from "@/data/profile";
import { caseStudies } from "@/data/caseStudies";
import { shortNames, liveProducts } from "@/data/buildMeta";
import { blogPosts } from "@/data/blogPosts";

const FEATURED = ["blinkit-analysis", "ether-prd", "gullak-fintech", "cloudeagle-ai"];

const banners = FEATURED.map((id) => {
  const study = caseStudies.find((s) => s.id === id);
  if (!study) throw new Error(`Homepage references unknown build "${id}".`);
  const isLive = liveProducts.has(id);
  return {
    id,
    name: shortNames[id] ?? study.title,
    image: study.image,
    href: isLive ? study.externalLink : `/builds/${id}`,
    external: isLive,
  };
});

const latest = blogPosts
  .filter((p) => !p.comingSoon)
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function Index() {
  return (
    <>
      <Nav />
      <Walker />

      <Shell>
        <IntroSection>
          <ScrollWordReveal paragraphs={profile.homeIntro} />

          <Currently />

          <IntroCard />
        </IntroSection>

        <Section label="my product teardowns">
          <BannerGrid banners={banners} columns={2} />
          <div className="flex justify-center pt-1">
            <ViewAllButton href="/builds">
              View all {caseStudies.length} teardowns
            </ViewAllButton>
          </div>
        </Section>

        <Section label="my work exp">
          <div className="group/list divide-y divide-border">
            {roles.slice(0, HOMEPAGE_ROLE_COUNT).map((role) => (
              <ExperienceItem key={`${role.company}-${role.start}`} role={role} />
            ))}
          </div>

          <div className="flex justify-center pt-1">
            <ViewAllButton href="/about">View all experience</ViewAllButton>
          </div>
        </Section>

        <Section label="writing">
          <RowList>
            {latest.map((post) => (
              <ListRow
                key={post.slug}
                title={post.title}
                href={`/blog/${post.slug}`}
                description={post.excerpt}
              />
            ))}
          </RowList>
          <div className="flex justify-center pt-1">
            <ViewAllButton href="/blog">View all writing</ViewAllButton>
          </div>
        </Section>
      </Shell>

      <SiteFooter />
    </>
  );
}
