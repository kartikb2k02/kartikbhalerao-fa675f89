import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CertificationsGrid } from "@/components/CertificationsGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Certifications & Achievements",
  description:
    "Professional certifications in product management, AI integration, analytics, and product-led growth earned by Kartik Bhalerao.",
  path: "/certifications",
});

export default function Certifications() {
  return (
    <div className="min-h-screen bg-[#FEFDF9] dark:bg-[#111111] text-foreground relative">
      <Header />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-5 mb-7">
              <span className="w-14 h-[1.5px] bg-gradient-to-r from-transparent to-black/25 dark:to-white/25" />
              <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">
                Credentials
              </span>
              <span className="w-14 h-[1.5px] bg-gradient-to-l from-transparent to-black/25 dark:to-white/25" />
            </div>

            <h1 className="text-[48px] sm:text-[60px] lg:text-[72px] font-black leading-none tracking-tight text-black dark:text-white mb-5">
              Certifications &<br />Achievements
            </h1>

            <p className="text-[17px] text-black/42 dark:text-white/42 max-w-[420px] mx-auto leading-[1.9] tracking-[-0.01em]">
              Credentials that validate the{" "}
              <span className="text-black/75 dark:text-white/75 font-semibold italic">journey</span>.
            </p>
          </div>

          <CertificationsGrid />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
