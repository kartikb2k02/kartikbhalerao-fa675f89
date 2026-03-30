import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen w-full text-foreground relative bg-[#EFEFEF] dark:bg-[#111111]">

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

          {/* Heading */}
          <div className="mb-16 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-5 mb-7">
              <span className="w-14 h-[1.5px] bg-gradient-to-r from-transparent to-black/25 dark:to-white/25" />
              <span className="text-[13px] font-semibold tracking-[0.3em] uppercase text-black/45 dark:text-white/45">
                Let's Talk
              </span>
              <span className="w-14 h-[1.5px] bg-gradient-to-l from-transparent to-black/25 dark:to-white/25" />
            </div>

            <h1 className="text-[52px] sm:text-[64px] lg:text-[76px] font-black leading-none tracking-tight text-black dark:text-white mb-6">
              Get in Touch
            </h1>

            <p className="text-[17px] text-black/42 dark:text-white/42 max-w-[420px] mx-auto leading-[1.9] tracking-[-0.01em]">
              Have a project in mind or just want to talk{" "}
              <span className="text-black/75 dark:text-white/75 font-semibold italic">product</span>?
              I'm always up for a good conversation.
            </p>
          </div>

          {/* Contact form */}
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>

          {/* Cal.com booking */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
              <span className="text-sm text-slate-400 dark:text-slate-500 font-medium whitespace-nowrap">
                or book a meeting directly
              </span>
              <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
            </div>
            <CalComBooking
              calUsername="kartik-bhalerao-qqae1f"
              eventType="secret"
            />
          </div>

        </section>
      </div>
      <FooterSection />
    </>
  );
}
