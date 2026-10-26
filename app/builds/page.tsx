import type { Metadata } from "next";
import { Nav } from "@/components/home/Nav";
import { Shell, Section } from "@/components/home/Shell";
import { BuildsView } from "@/components/home/BuildsView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { caseStudies } from "@/data/caseStudies";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Builds",
  description:
    "Products shipped, specs written, and teardowns of products worth studying — from discovery through launch.",
  path: "/builds",
});

export default function Builds() {
  return (
    <>
      <Nav width={1267} />

      <Shell wide>
        <Section label="builds">
          <BuildsView builds={caseStudies} />
        </Section>
      </Shell>

      <SiteFooter width={1267} />
    </>
  );
}
