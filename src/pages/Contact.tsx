import React from "react";
import { Linkedin, Mail, Calendar } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

          {/* Heading */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Get in{" "}
              <span className="animate-gradient-text">Touch</span>
            </h1>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-md">
              Have a project in mind or just want to talk product? I'm always up for a good conversation.
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:items-start">

            {/* Left — info */}
            <div className="lg:col-span-2 flex flex-col gap-8 lg:pt-1">

              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Connect
                </p>
                <a
                  href="https://www.linkedin.com/in/kartik-bhalerao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-all">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="mailto:kartikbhalerao948@gmail.com"
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">kartikbhalerao948@gmail.com</span>
                </a>
              </div>

              <div className="h-px bg-slate-100 dark:bg-slate-800" />

              <div className="space-y-3">
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Prefer a call?
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Book a slot directly on my calendar — no back and forth.
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>

            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
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
