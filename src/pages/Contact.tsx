import React from "react";
import { Calendar, MessageCircle, Sparkles, ArrowDown } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground relative">
        {/* Grid background — same color as home dots, different design */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(rgb(100 116 139 / 0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgb(100 116 139 / 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        {/* Subtle corner accent blobs */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/8 via-transparent to-transparent pointer-events-none z-0" />
        <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/6 via-transparent to-transparent pointer-events-none z-0" />

        {/* Hero Section */}
        <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/15 rounded-full border border-primary/30 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  Let's create something amazing
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight tracking-tight">
                Let's Work
                <br />
                <span className="text-primary">Together</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 font-light">
                Ready to bring your ideas to life? Let's discuss your vision
                and create something extraordinary together.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-border/30 backdrop-blur-sm">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span className="font-medium">Quick Response</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-border/30 backdrop-blur-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium">Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full border border-border/30 backdrop-blur-sm">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="font-medium">Collaborative Process</span>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-primary/40 to-transparent"></div>
              </div>
              <ArrowDown className="h-5 w-5 text-primary/60 mx-auto animate-bounce" />
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <ContactForm />
              </div>

              {/* Schedule Meeting Section */}
              <div className="text-center animate-fade-in">
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-background/90 px-6 py-2 rounded-full border border-border/30 backdrop-blur-xl shadow-lg">
                      <span className="text-muted-foreground font-medium text-base">
                        or skip the form
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/80 backdrop-blur-xl rounded-xl border border-border/30 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-card/90">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Schedule a Meeting
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Prefer to talk directly? Book a time that works for you
                      and let's discuss your project in detail.
                    </p>
                  </div>

                  <CalComBooking
                    calUsername="kartik-bhalerao-qqae1f"
                    eventType="secret"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}
