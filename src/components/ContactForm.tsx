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
    
    // Real-time email validation
    if (field === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: undefined }));
      }
    } else if (errors[field]) {
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
    <Card className="shadow-2xl border-border/20 bg-card/60 backdrop-blur-2xl rounded-[2rem] overflow-hidden group hover:shadow-3xl hover:bg-card/70 transition-all duration-700">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <CardHeader className="relative space-y-4 pb-6 pt-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
            <Send className="h-5 w-5 text-primary" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"></div>
        </div>
        
        <CardTitle className="text-2xl sm:text-3xl bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent font-black tracking-tight">
          Send Me a Message
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground/80 leading-relaxed max-w-lg">
          I'd love to hear about your project ideas and discuss how we can bring them to life together.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="relative px-6 pb-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 group">
              <label className="text-sm font-bold text-foreground flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary/80 rounded-full group-focus-within:scale-125 transition-transform duration-300 shadow-lg shadow-primary/30" />
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={cn(
                  "h-16 text-lg transition-all duration-300 bg-background/60 backdrop-blur-sm border-border/40 focus:border-primary/50 focus:shadow-xl focus:shadow-primary/20 rounded-2xl",
                  errors.fullName && "border-destructive focus-visible:ring-destructive/30"
                )}
              />
              {errors.fullName && (
                <p className="text-destructive text-base animate-fade-in flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="space-y-5 group">
              <label className="text-base font-bold text-foreground flex items-center gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary/80 rounded-full group-focus-within:scale-125 transition-transform duration-300 shadow-lg shadow-primary/30" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={cn(
                  "h-16 text-lg transition-all duration-300 bg-background/60 backdrop-blur-sm border-border/40 focus:border-primary/50 focus:shadow-xl focus:shadow-primary/20 rounded-2xl",
                  errors.email && "border-destructive focus-visible:ring-destructive/30"
                )}
              />
              {errors.email && (
                <p className="text-destructive text-base animate-fade-in flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-5 group">
            <label className="text-base font-bold text-foreground flex items-center gap-4">
              <div className="w-4 h-4 bg-gradient-to-r from-primary to-primary/80 rounded-full group-focus-within:scale-125 transition-transform duration-300 shadow-lg shadow-primary/30" />
              Project Details
            </label>
            <textarea
              placeholder="Tell me about your project vision, goals, timeline, and any specific requirements you have in mind..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={cn(
                "flex min-h-[200px] w-full rounded-2xl border border-border/40 bg-background/60 backdrop-blur-sm px-6 py-6 text-lg ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:border-primary/50 focus-visible:shadow-xl focus-visible:shadow-primary/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300",
                errors.message && "border-destructive focus-visible:ring-destructive/30"
              )}
            />
            {errors.message && (
              <p className="text-destructive text-base animate-fade-in flex items-center gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full"></div>
                {errors.message}
              </p>
            )}
          </div>

          <div className="pt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full h-20 text-xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary hover:to-primary/90 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] disabled:hover:scale-100 rounded-2xl relative overflow-hidden group font-bold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              {isSubmitting ? (
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-7 h-7 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  <span>Sending your message...</span>
                </div>
              ) : (
                <div className="flex items-center gap-4 relative z-10">
                  <Send className="h-7 w-7" />
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