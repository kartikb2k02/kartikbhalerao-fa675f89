import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CertificationsGrid } from "@/components/CertificationsGrid";
import { PageHeader } from "@/components/PageHeader";
import { certifications } from "@/data/certifications";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Certifications & Achievements",
  description:
    "Professional certifications in product management, AI integration, analytics, and product-led growth earned by Kartik Bhalerao.",
  path: "/certifications",
});

export default function Certifications() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <PageHeader
          label="Credentials"
          title={<>Paper trail<span className="text-primary">.</span></>}
          lede="Certifications in product management, AI, analytics, and product-led growth."
          meta={`${certifications.length} certifications`}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <CertificationsGrid />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
