import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Mail, Send, Video } from 'lucide-react';

// Simple utility function for class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Cal.com Integration Component
const CalComBooking = ({ calUsername = "your-username", eventType = "30min" }) => {
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => setIsCalLoaded(true);
    document.head.appendChild(script);

    // Add Cal.com CSS
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://app.cal.com/embed/embed.css';
    document.head.appendChild(style);

    return () => {
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      const existingStyle = document.querySelector('link[href="https://app.cal.com/embed/embed.css"]');
      if (existingScript) existingScript.remove();
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  const openCalPopup = () => {
    if (window.Cal && isCalLoaded) {
      window.Cal("init", {
        origin: "https://app.cal.com"
      });
      
      window.Cal("ui", {
        "theme": "light",
        "styles": {"branding":{"brandColor":"#3b82f6"}},
        "hideEventTypeDetails": false
      });
      
      // Open the popup
      window.Cal("openPopup", {
        calLink: `${calUsername}/${eventType}`,
      });
    }
  };

  return (
    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/40 dark:border-slate-700/40 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-slate-700/50 dark:via-slate-600/30 dark:to-slate-700/50 px-8 py-6 border-b border-slate-200/50 dark:border-slate-600/50">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 dark:from-slate-100 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-2 flex items-center gap-3">
          <Video className="h-7 w-7 text-blue-600" />
          Schedule a Call
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base">
          Let's discuss your project over a video call at your convenience
        </p>
      </div>
      
      <div className="p-8">
        <div className="space-y-6">
          {/* Meeting Types */}
          <div className="grid gap-4">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-700/50 border border-slate-200/60 dark:border-slate-600/40">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">30-Minute Discovery Call</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Perfect for discussing your project requirements and goals</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-700/50 border border-slate-200/60 dark:border-slate-600/40">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center">
                <Video className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">60-Minute Strategy Session</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Deep dive into technical requirements and project planning</p>
              </div>
            </div>
          </div>

          <button
            onClick={openCalPopup}
            disabled={!isCalLoaded}
            className={`w-full h-14 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold text-base rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group ${
              !isCalLoaded ? 'cursor-wait' : ''
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="flex items-center gap-3 relative z-10">
              {!isCalLoaded ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Loading Calendar...</span>
                </>
              ) : (
                <>
                  <Calendar className="h-5 w-5" />
                  <span>Book a Meeting Time</span>
                </>
              )}
            </div>
          </button>

          <p className="text-xs text-center text-slate-500 dark:text-slate-400">
            Powered by Cal.com • All meetings include Google Meet/Zoom link
          </p>
        </div>
      </div>
    </div>
  );
};

// Simple Contact Form Component
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    
    // Show success message (you can replace with your preferred notification method)
    alert("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({ fullName: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border border-slate-200/40 dark:border-slate-700/40 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-purple-50/80 dark:from-slate-700/50 dark:via-slate-600/30 dark:to-slate-700/50 px-8 py-8 border-b border-slate-200/50 dark:border-slate-600/50">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 dark:from-slate-100 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">
          Send Me a Message
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
          I'd love to hear about your project ideas and discuss how we can bring them to life together.
        </p>
      </div>
      
      <div className="p-8">
        <div onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full h-12 bg-white/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 rounded-xl transition-all duration-200 px-4"
              />
              {errors.fullName && <p className="text-red-500 dark:text-red-400 text-sm">{errors.fullName}</p>}
            </div>

            <div className="space-y-3">
              <label className="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                Email Address
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full h-12 bg-white/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 rounded-xl transition-all duration-200 px-4"
              />
              {errors.email && <p className="text-red-500 dark:text-red-400 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              Project Details
            </label>
            <textarea
              placeholder="Tell me about your project vision, goals, timeline, and any specific requirements you have in mind..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="w-full min-h-[160px] bg-white/90 dark:bg-slate-700/90 border border-slate-300/60 dark:border-slate-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500 dark:placeholder:text-slate-400 resize-none rounded-xl transition-all duration-200 p-4"
            />
            {errors.message && <p className="text-red-500 dark:text-red-400 text-sm">{errors.message}</p>}
          </div>

          <div className="pt-4">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full h-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:via-indigo-600 dark:hover:to-purple-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isSubmitting ? (
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending your message...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 relative z-10">
                  <Send className="h-6 w-6" />
                  <span>Send Message</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Contact Component
export default function Contact() {
  const [activeTab, setActiveTab] = useState('form'); // 'form' or 'schedule'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-950 dark:via-slate-900/95 dark:to-slate-800/40">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-700 to-indigo-700 dark:from-slate-100 dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent mb-6">
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Send me a message or schedule a call to discuss your project.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex p-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-slate-200/40 dark:border-slate-700/40">
              <button
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'form'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-5 w-5" />
                  Send Message
                </div>
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'schedule'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule Call
                </div>
              </button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Form Tab */}
            {activeTab === 'form' && <ContactForm />}

            {/* Schedule Call Tab */}
            {activeTab === 'schedule' && (
              <CalComBooking 
                calUsername="your-username" 
                eventType="30min" 
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}