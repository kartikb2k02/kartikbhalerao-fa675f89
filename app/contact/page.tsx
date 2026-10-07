import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Kartik Bhalerao, Product Manager. Send a message or book a call.",
  path: "/contact",
});

export default function Contact() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Header />

      <main className="pt-16">
        <PageHeader
          label="Contact"
          title={<>Get in touch<span className="text-primary">.</span></>}
          lede="Send a note, or put something on the calendar, whichever you prefer."
          meta="Usually replies within a day"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            <ContactForm />
            <CalComBooking calUsername="kartik-bhalerao-qqae1f" eventType="secret" />
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
