import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Kartik Bhalerao — Product Manager. Send a message or book a call.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-background">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="text-center mb-10">
            <span className="label-mono text-[13px] text-black/50 dark:text-white/50 mb-2 block">
              Contact
            </span>
            <h1 className="heading-display text-[40px] sm:text-[52px] text-black dark:text-white leading-[0.95]">
              Get in touch
            </h1>
            <p className="text-[14px] text-black/42 dark:text-white/42 mt-3 leading-[1.75]">
              Send a note or book a live call — your choice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            <ContactForm />
            <CalComBooking calUsername="kartik-bhalerao-qqae1f" eventType="secret" />
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}
