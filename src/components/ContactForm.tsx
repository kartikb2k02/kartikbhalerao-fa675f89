import React, { useState } from 'react';
import { Send, User, Mail as MailIcon, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    <div className="p-6 sm:p-8 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/30 hover:border-primary/20 transition-all duration-500">
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20 shrink-0">
          <Send className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">
            Send a Message
          </h3>
          <p className="text-sm text-muted-foreground">
            Tell me about your project and let's create something great.
          </p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email Row */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <User className="h-4 w-4 text-primary/70" />
              Full Name
            </label>
            <Input
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={cn(
                "h-12 text-base bg-background/50 border-border/40 focus:border-primary/50 focus:bg-background/80 rounded-xl transition-all duration-300",
                errors.fullName && "border-destructive focus-visible:ring-destructive/30"
              )}
            />
            {errors.fullName && (
              <p className="text-destructive text-xs animate-fade-in">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-primary/70" />
              Email Address
            </label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={cn(
                "h-12 text-base bg-background/50 border-border/40 focus:border-primary/50 focus:bg-background/80 rounded-xl transition-all duration-300",
                errors.email && "border-destructive focus-visible:ring-destructive/30"
              )}
            />
            {errors.email && (
              <p className="text-destructive text-xs animate-fade-in">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary/70" />
            Your Message
          </label>
          <textarea
            placeholder="Tell me about your project, goals, and timeline..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={5}
            className={cn(
              "flex w-full rounded-xl border border-border/40 bg-background/50 px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 focus:border-primary/50 focus:bg-background/80 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300",
              errors.message && "border-destructive focus-visible:ring-destructive/30"
            )}
          />
          {errors.message && (
            <p className="text-destructive text-xs animate-fade-in">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full h-12 text-base bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] disabled:hover:scale-100 rounded-xl font-semibold"
        >
          {isSubmitting ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </div>
          )}
        </Button>
      </form>
    </div>
  );
};