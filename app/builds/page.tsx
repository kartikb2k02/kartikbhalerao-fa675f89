import type { Metadata } from "next";
import { Nav } from "@/components/home/Nav";
import { Shell, Section } from "@/components/home/Shell";
import { BuildsView, type BuildEntry } from "@/components/home/BuildsView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { caseStudies } from "@/data/caseStudies";
import { desk, shortNames } from "@/data/buildMeta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Builds",
  description:
    "Products shipped, specs written, and teardowns of products worth studying — from discovery through launch.",
  path: "/builds",
});

const builds: BuildEntry[] = caseStudies.map((study) => ({
  id: study.id,
  name: shortNames[study.id] ?? study.title,
  image: study.image,
  href: `/builds/${study.id}`,
  external: false,
  desk: desk[study.id],
}));

export default function Builds() {
  return (
    <>
      <Nav />

      <Shell className="page-entrance">
        <Section label="builds">
          <BuildsView builds={builds} />
        </Section>
      </Shell>

      <SiteFooter />
    </>
  );
}
