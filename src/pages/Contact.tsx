import React from 'react';
import { Calendar, MessageCircle, Sparkles, ArrowDown } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { CalComBooking } from '@/components/CalComBooking';
import { Header } from '@/components/Header';
import { FooterSection } from '@/components/FooterSection';

// Main Contact Component
export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-accent/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-[spin_20s_linear_infinite]"></div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full border border-primary/30 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Let's create something amazing</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent mb-6 leading-tight tracking-tight">
                Let's Work
                <br />
                <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/60 bg-clip-text text-transparent">
                  Together
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
                Ready to bring your ideas to life? Let's discuss your vision and create something extraordinary together.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground/80 mb-10">
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
                        <span className="text-muted-foreground/80 font-medium text-base">or skip the form</span>
                      </div>
                    </div>
                  </div>

                <div className="bg-card/80 backdrop-blur-xl rounded-xl border border-border/30 p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:bg-card/90">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/20">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-3">Schedule a Meeting</h3>
                    <p className="text-sm text-muted-foreground/80 max-w-md mx-auto leading-relaxed">
                      Prefer to talk directly? Book a time that works for you and let's discuss your project in detail.
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