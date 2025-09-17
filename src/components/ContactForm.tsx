import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
    <Card className="shadow-3xl border-border/40 bg-card/95 backdrop-blur-xl">
      <CardHeader className="space-y-3 pb-8">
        <CardTitle className="text-3xl bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Send Me a Message
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground leading-relaxed">
          I'd love to hear about your project ideas and discuss how we can bring them to life together.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={cn(
                  "h-12 text-base transition-all duration-200",
                  errors.fullName && "border-destructive focus-visible:ring-destructive/20"
                )}
              />
              {errors.fullName && (
                <p className="text-destructive text-sm">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Email Address
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={cn(
                  "h-12 text-base transition-all duration-200",
                  errors.email && "border-destructive focus-visible:ring-destructive/20"
                )}
              />
              {errors.email && (
                <p className="text-destructive text-sm">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Project Details
            </label>
            <textarea
              placeholder="Tell me about your project vision, goals, timeline, and any specific requirements you have in mind..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={cn(
                "flex min-h-[160px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-200",
                errors.message && "border-destructive focus-visible:ring-destructive/20"
              )}
            />
            {errors.message && (
              <p className="text-destructive text-sm">{errors.message}</p>
            )}
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full h-14 text-lg bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary/90 hover:via-blue-600/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  <span>Sending your message...</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Send className="h-5 w-5" />
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