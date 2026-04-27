import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-[#EFEFEF] dark:bg-[#111111]">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

          {/* Page header */}
          <div className="text-center mb-10">
            <h1
              className="text-[40px] sm:text-[52px] font-black text-black dark:text-white leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Get in touch
            </h1>
            <p className="text-[14px] text-black/42 dark:text-white/42 mt-3 leading-[1.75]">
              Send a note or book a live call — your choice.
            </p>
          </div>

          {/* Two cards */}
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
