import type { Metadata } from "next";
import { Nav } from "@/components/home/Nav";
import { Shell, Section } from "@/components/home/Shell";
import { SiteFooter } from "@/components/home/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Kartik Bhalerao — open to product roles and collaborations.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <Nav />

      <Shell>
        <Section label="contact">
          <p className="text-[15px] leading-snug text-muted-foreground">
            Open to product roles and collaborations. Email is quickest —{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground underline underline-offset-4"
            >
              {profile.email}
            </a>
            .
          </p>

          <div className="surface p-4">
            <ContactForm />
          </div>
        </Section>

        <Section label="book a call">
          <div className="surface overflow-hidden p-4">
            <CalComBooking
              calUsername="kartik-bhalerao-qqae1f"
              eventType="secret"
            />
          </div>
        </Section>
      </Shell>

      <SiteFooter />
    </>
  );
}
