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
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Let's create something amazing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent mb-8 leading-tight">
                Let's Work
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Together
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Ready to bring your ideas to life? Let's discuss your vision and create something extraordinary together.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <span>Quick Response</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground/40 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground/40 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>Collaborative Process</span>
                </div>
              </div>

              <ArrowDown className="h-6 w-6 text-muted-foreground mx-auto animate-bounce" />
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <ContactForm />
              </div>

              {/* Schedule Meeting Section */}
              <div className="text-center animate-fade-in">
                <div className="relative mb-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gradient-to-r from-transparent via-border/60 to-transparent"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-background px-6 py-2 rounded-full border border-border/40 backdrop-blur-xl">
                      <span className="text-muted-foreground font-medium">or skip the form</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/80 backdrop-blur-xl rounded-3xl border border-border/40 p-8 shadow-2xl">
                  <div className="mb-6">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Schedule a Meeting</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
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