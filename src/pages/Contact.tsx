import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">

        {/* Dotted background — same as home */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(100 116 139 / 0.2) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Glowing orbs */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div
            className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #22c55e 0%, transparent 70%)" }}
          />
          <div
            className="absolute top-1/3 -right-40 w-[450px] h-[450px] rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
          />
        </div>

        <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

          {/* Heading — centered */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Get in{" "}
              <span className="animate-gradient-text">Touch</span>
            </h1>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400 mx-auto max-w-md">
              Have a project in mind or just want to talk product? I'm always up for a good conversation.
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
