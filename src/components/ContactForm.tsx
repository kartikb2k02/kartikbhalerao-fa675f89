import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          message: formData.message
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error sending message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-2xl border-border/40 bg-card/60 backdrop-blur-xl rounded-3xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative space-y-4 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
            <Send className="h-5 w-5 text-white" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
        </div>
        
        <CardTitle className="text-3xl sm:text-4xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent font-bold">
          Send Me a Message
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground leading-relaxed">
          I'd love to hear about your project ideas and discuss how we can bring them to life together. Let's start the conversation!
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 group">
              <label className="text-sm font-semibold text-foreground flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full group-focus-within:scale-110 transition-transform duration-200" />
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={cn(
                  "h-14 text-base transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary/40 focus:shadow-lg focus:shadow-primary/10",
                  errors.fullName && "border-destructive focus-visible:ring-destructive/20"
                )}
              />
              {errors.fullName && (
                <p className="text-destructive text-sm animate-fade-in">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-4 group">
              <label className="text-sm font-semibold text-foreground flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full group-focus-within:scale-110 transition-transform duration-200" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={cn(
                  "h-14 text-base transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary/40 focus:shadow-lg focus:shadow-primary/10",
                  errors.email && "border-destructive focus-visible:ring-destructive/20"
                )}
              />
              {errors.email && (
                <p className="text-destructive text-sm animate-fade-in">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-4 group">
            <label className="text-sm font-semibold text-foreground flex items-center gap-3">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full group-focus-within:scale-110 transition-transform duration-200" />
              Project Details
            </label>
            <textarea
              placeholder="Tell me about your project vision, goals, timeline, and any specific requirements you have in mind..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={cn(
                "flex min-h-[180px] w-full rounded-xl border border-border/60 bg-background/80 backdrop-blur-sm px-4 py-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus-visible:border-primary/40 focus-visible:shadow-lg focus-visible:shadow-primary/10 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300",
                errors.message && "border-destructive focus-visible:ring-destructive/20"
              )}
            />
            {errors.message && (
              <p className="text-destructive text-sm animate-fade-in">{errors.message}</p>
            )}
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full h-16 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] disabled:hover:scale-100 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {isSubmitting ? (
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-6 h-6 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  <span>Sending your message...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3 relative z-10">
                  <Send className="h-6 w-6" />
                  <span>Send Message</span>
                </div>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};