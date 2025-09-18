import React from 'react';
import { Calendar } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { CalComBooking } from '@/components/CalComBooking';
import { Header } from '@/components/Header';
import { FooterSection } from '@/components/FooterSection';

// Main Contact Component
export default function Contact() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-primary/80 bg-clip-text text-transparent mb-6">
                Let's Work Together
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? Send me a message or schedule a call to discuss your project.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {/* Contact Form */}
              <ContactForm />

              {/* Schedule Meeting Button */}
              <div className="text-center">
                <div className="flex items-center mb-4">
                  <div className="flex-1 border-t border-border/40"></div>
                  <span className="px-4 text-sm text-muted-foreground">or</span>
                  <div className="flex-1 border-t border-border/40"></div>
                </div>
                <CalComBooking 
                  calUsername="kartik-bhalerao-qqae1f" 
                  eventType="secret" 
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}