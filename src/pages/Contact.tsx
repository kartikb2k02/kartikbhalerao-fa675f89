import React from "react";
import { Calendar, MessageCircle, Sparkles, Mail, MapPin, Clock, Zap } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { ContactForm } from "@/components/ContactForm";
import { CalComBooking } from "@/components/CalComBooking";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <AnimatedBackground intensity="light" />

        {/* Hero Section */}
        <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary tracking-wide">
                  Available for new projects
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.1] tracking-tight">
                Let's Build Something
                <br />
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Have a project in mind? I'd love to hear about it. Let's discuss your vision and create something amazing together.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-2 space-y-6 animate-fade-in">
                {/* Quick Contact Cards */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Get in Touch
                  </h3>
                  
                  <div className="group p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/30 hover:border-primary/30 hover:bg-card/80 transition-all duration-500 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                        <p className="text-foreground font-semibold">hello@kartik.dev</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/30 hover:border-primary/30 hover:bg-card/80 transition-all duration-500 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Based in</p>
                        <p className="text-foreground font-semibold">India</p>
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/30 hover:border-primary/30 hover:bg-card/80 transition-all duration-500 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Response time</p>
                        <p className="text-foreground font-semibold">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Connect with me
                  </h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card/60 backdrop-blur-xl border border-border/30 flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <FaLinkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-card/60 backdrop-blur-xl border border-border/30 flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <FaTwitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Why Work With Me */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 via-card/60 to-card/40 backdrop-blur-xl border border-primary/10">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Why work with me?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "User-centric product approach",
                      "Data-driven decision making",
                      "Agile & collaborative process",
                      "End-to-end product expertise"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column - Forms */}
              <div className="lg:col-span-3 space-y-8">
                {/* Contact Form */}
                <div className="animate-fade-in">
                  <ContactForm />
                </div>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-background px-6 py-2 rounded-full border border-border/30 backdrop-blur-xl">
                      <span className="text-muted-foreground font-medium text-sm">
                        or book a call directly
                      </span>
                    </div>
                  </div>
                </div>

                {/* Schedule Meeting */}
                <div className="p-6 sm:p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/30 hover:border-primary/20 transition-all duration-500 animate-fade-in">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20 shrink-0">
                      <Calendar className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        Schedule a Meeting
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Pick a time that works for you and let's chat about your project.
                      </p>
                    </div>
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