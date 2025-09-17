import React, { useState } from 'react';
import { Calendar, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { CalComBooking } from '@/components/CalComBooking';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { FooterSection } from '@/components/FooterSection';

// Main Contact Component
export default function Contact() {
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'schedule'

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

            {/* Tab Navigation */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="flex p-1 bg-card/60 backdrop-blur-xl rounded-2xl border border-border/40 shadow-lg">
                <Button
                  onClick={() => setActiveTab('form')}
                  variant={activeTab === 'form' ? 'default' : 'ghost'}
                  size="lg"
                  className={`flex-1 transition-all duration-300 ${
                    activeTab === 'form'
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
                <Button
                  onClick={() => setActiveTab('schedule')}
                  variant={activeTab === 'schedule' ? 'default' : 'ghost'}
                  size="lg"
                  className={`flex-1 transition-all duration-300 ${
                    activeTab === 'schedule'
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* Contact Form Tab */}
              {activeTab === 'form' && <ContactForm />}

              {/* Schedule Call Tab */}
              {activeTab === 'schedule' && (
                <CalComBooking 
                  calUsername="kartik-bhalerao-qqae1f" 
                  eventType="secret" 
                />
              )}
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </>
  );
}