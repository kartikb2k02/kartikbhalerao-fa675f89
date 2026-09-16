import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { caseStudies, getCaseStudyById } from "@/data/caseStudies";
import { CaseStudyDetailView } from "@/components/CaseStudyDetailView";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ id: cs.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const caseStudy = getCaseStudyById(id);
  if (!caseStudy) {
    return pageMetadata({
      title: "Case Study Not Found",
      description: "The case study you're looking for doesn't exist.",
      path: `/builds/${id}`,
      noindex: true,
    });
  }

  const ogDescription =
    caseStudy.subtitle || caseStudy.overview?.slice(0, 160) || "A product case study by Kartik Bhalerao";

  return pageMetadata({
    title: caseStudy.title,
    description: ogDescription,
    path: `/builds/${caseStudy.id}`,
    image: caseStudy.image || "/favicon.png",
    type: "article",
  });
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const caseStudy = getCaseStudyById(id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen w-full text-foreground relative bg-background">
        <Header />
        <main className="pt-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/builds" className="text-blue-600 hover:underline">← Back to Builds</Link>
        </main>
        <FooterSection />
      </div>
    );
  }

  const ogImage = caseStudy.image?.startsWith("http")
    ? caseStudy.image
    : `https://kartikbhalerao.in${caseStudy.image || "/favicon.png"}`;
  const ogDescription = caseStudy.subtitle || caseStudy.overview?.slice(0, 160) || "A product case study by Kartik Bhalerao";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    description: ogDescription,
    image: ogImage,
    creator: {
      "@type": "Person",
      name: "Kartik Bhalerao",
      url: "https://kartikbhalerao.in",
    },
    keywords: caseStudy.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://kartikbhalerao.in/builds/${caseStudy.id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyDetailView caseStudy={caseStudy} />
    </>
  );
}
