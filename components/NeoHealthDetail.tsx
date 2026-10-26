"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, ZoomIn } from "lucide-react";
import { Nav } from "@/components/home/Nav";
import { SiteFooter } from "@/components/home/SiteFooter";
import { ImageLightbox } from "@/components/ImageLightbox";
import type { CaseStudy } from "@/data/caseStudies";

const featureSections = [
  {
    number: "01",
    label: "Care booking",
    title: "Make arranging care feel manageable from anywhere",
    body:
      "A single booking flow brings together home visits, virtual consultations, physical appointments, checkups, and urgent transport. Availability and appointment details stay visible as the care plan moves forward.",
    start: 12,
    end: 23,
  },
  {
    number: "02",
    label: "Provider network",
    title: "Create confidence before the first appointment",
    body:
      "Provider profiles surface verification, experience, reviews, availability, and communication options so families can choose care with more confidence and less back-and-forth.",
    start: 24,
    end: 28,
  },
  {
    number: "03",
    label: "Community",
    title: "Give people a safer place to ask for help",
    body:
      "The community layer supports anonymous questions, expert-verified answers, condition-specific groups, and live sessions. It combines the openness of a forum with clear signals of professional credibility.",
    start: 29,
    end: 33,
  },
  {
    number: "04",
    label: "Health records",
    title: "Keep the care story available across borders",
    body:
      "Permissioned records make diagnoses, test results, prescriptions, and appointment history easier to share with the right provider. Medication reminders and refill tracking support continuity after the visit.",
    start: 34,
    end: 37,
  },
  {
    number: "05",
    label: "Pharmacy",
    title: "Connect prescriptions to what happens next",
    body:
      "The pharmacy workflow covers digital prescriptions, remote payment, delivery tracking, refill prompts, and coordination when a treatment is difficult to source locally.",
    start: 38,
    end: 38,
  },
  {
    number: "06",
    label: "CareFund",
    title: "Make urgent healthcare support easier to trust",
    body:
      "CareFund connects verified medical need with transparent fundraising. Donors and family members can follow progress while funds are directed toward the care they were raised for.",
    start: 39,
    end: 41,
  },
] as const;

function GalleryGroup({
  caseStudy,
  start,
  end,
  onOpen,
}: {
  caseStudy: CaseStudy;
  start: number;
  end: number;
  onOpen: (index: number) => void;
}) {
  const images = caseStudy.gallery.slice(start, end + 1);

  return (
    <div className="mt-7 space-y-4">
      {images.map((item, offset) => {
        const index = start + offset;
        return (
          <button
            key={item.src}
            type="button"
            onClick={() => onOpen(index)}
            className="group block w-full text-left"
            aria-label={`Open ${item.caption}`}
          >
            <span className="relative block overflow-hidden border border-border bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.caption}
                className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </span>
            </span>
            <span className="mt-2 block text-center text-[12px] text-muted-foreground">
              {item.caption}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function NeoHealthDetail({ caseStudy }: { caseStudy: CaseStudy }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Nav width={860} />

      <main className="py-14">
        <div className="mx-auto max-w-[860px] px-4">
          <Link
            href="/builds"
            className="group mb-8 inline-flex items-center gap-1.5 text-[14px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            All builds
          </Link>

          <div className="mb-10 max-w-2xl">
            <p className="label-mono mb-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Product case study · Active development
            </p>
            <h1 className="mb-3 text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]">
              {caseStudy.title}
            </h1>
            <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              {caseStudy.subtitle}
            </p>
          </div>

          <figure className="mb-14 overflow-hidden border border-border bg-secondary">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={caseStudy.image} alt={caseStudy.title} className="block h-auto w-full" />
            <figcaption className="border-t border-border px-4 py-3 text-[12px] text-muted-foreground">
              A connected healthcare ecosystem for families coordinating care across borders.
            </figcaption>
          </figure>

          <div className="mb-16 grid gap-8 border-y border-border py-8 sm:grid-cols-[0.8fr_2fr]">
            <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              The context
            </span>
            <div className="space-y-5 text-[17px] leading-[1.8] text-foreground/80">
              <p>
                Neo Health was conceived as a single place for diaspora families to arrange and follow healthcare for loved ones at home. The product connects booking, providers, payments, records, fundraising, and care updates into one journey.
              </p>
              <p>
                The work focused on the coordination problem behind the interface: helping people make important decisions remotely when information, money, and medical services are spread across different systems.
              </p>
            </div>
          </div>

          <section className="mb-20 grid gap-8 sm:grid-cols-[0.8fr_2fr]">
            <div>
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">01 · Challenge</span>
              <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.7rem)] font-medium leading-tight tracking-[-0.03em]">
                Bring clarity to a fragmented care journey
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.8] text-foreground/75">
              <p>
                Remote healthcare coordination can become a chain of messages, phone calls, informal recommendations, and delayed updates. That makes it hard to know what has happened, what needs attention, and who is responsible for the next step.
              </p>
              <ul className="space-y-3 border-l-2 border-foreground/20 pl-5 text-foreground/85">
                <li>Coordinate appointments and emergencies without being physically present.</li>
                <li>Make provider quality and availability easier to evaluate.</li>
                <li>Keep records, prescriptions, and care history connected.</li>
                <li>Support urgent payments, fundraising, and reliable family updates.</li>
              </ul>
              <GalleryGroup caseStudy={caseStudy} start={1} end={8} onOpen={openLightbox} />
            </div>
          </section>

          <section className="mb-20 grid gap-8 sm:grid-cols-[0.8fr_2fr]">
            <div>
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">02 · Research</span>
              <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.7rem)] font-medium leading-tight tracking-[-0.03em]">
                Borrow the best patterns without losing local context
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-[1.8] text-foreground/75">
              <p>
                The direction was informed by studying local healthcare platforms, telemedicine, women&apos;s health products, fundraising tools, and super-app patterns. The goal was to combine proven interaction models while respecting different languages, payment habits, family roles, and levels of trust.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Local health platforms for appointments and records",
                  "Telemedicine for remote consultations and compliance",
                  "Fundraising products for verification and transparency",
                  "Super apps for joining messaging, payments, and booking",
                ].map((item) => (
                  <div key={item} className="border border-border bg-secondary/40 px-4 py-4 text-[14px] leading-relaxed text-foreground/80">
                    {item}
                  </div>
                ))}
              </div>
              <GalleryGroup caseStudy={caseStudy} start={9} end={11} onOpen={openLightbox} />
            </div>
          </section>

          <section className="mb-20">
            <div className="mb-10 max-w-2xl">
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">03 · Solution</span>
              <h2 className="mt-3 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.04em]">
                One ecosystem for the moments around care
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.8] text-muted-foreground">
                Instead of treating booking, records, community, and payment as separate products, Neo Health connects them so each action gives the next person better context.
              </p>
            </div>

            <div className="space-y-20">
              {featureSections.map((section) => (
                <article key={section.number} className="border-t border-border pt-6">
                  <div className="grid gap-5 sm:grid-cols-[0.8fr_2fr]">
                    <div>
                      <span className="label-mono text-[11px] text-muted-foreground">{section.number}</span>
                      <p className="mt-2 text-[13px] uppercase tracking-[0.12em] text-muted-foreground">{section.label}</p>
                    </div>
                    <div>
                      <h3 className="text-[clamp(1.45rem,3vw,2.2rem)] font-medium leading-tight tracking-[-0.03em]">
                        {section.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-[16px] leading-[1.8] text-foreground/75">{section.body}</p>
                    </div>
                  </div>
                  <GalleryGroup caseStudy={caseStudy} start={section.start} end={section.end} onOpen={openLightbox} />
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16 grid gap-8 border-y border-border py-10 sm:grid-cols-[0.8fr_2fr]">
            <div>
              <span className="label-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">04 · Learnings</span>
              <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.7rem)] font-medium leading-tight tracking-[-0.03em]">What the system needed to earn</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ["Trust", "Verification and transparency are core product infrastructure, not supporting details."],
                ["Privacy", "Anonymity can open conversations while provider identity keeps advice accountable."],
                ["Integration", "A complex backend should make the front-end journey feel shorter and calmer."],
                ["Cultural context", "Localization, payment preferences, and family structures shape every workflow."],
              ].map(([title, body]) => (
                <div key={title}>
                  <h3 className="mb-2 text-[16px] font-medium">{title}</h3>
                  <p className="text-[14px] leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <ImageLightbox
            images={caseStudy.gallery}
            initialIndex={lightboxIndex}
            open={lightboxOpen}
            onOpenChange={setLightboxOpen}
          />
        </div>
      </main>

      <SiteFooter width={860} />

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        title="Back to top"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-foreground/40 hover:text-foreground ${showBackToTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
