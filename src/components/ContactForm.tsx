import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
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
    if (!formData.fullName || formData.fullName.length < 2)
      newErrors.fullName = 'Full name must be at least 2 characters';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email))
      newErrors.email = 'Please enter a valid email address';
    if (!formData.message || formData.message.length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value))
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      else
        setErrors(prev => ({ ...prev, email: undefined }));
    } else if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contacts')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          message: formData.message
        });
      if (error) throw error;
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out on LinkedIn.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase = "w-full px-5 py-4 text-[15px] rounded-xl border text-black dark:text-white placeholder:text-black/25 dark:placeholder:text-white/25 outline-none transition-all duration-200 bg-black/[0.02] dark:bg-white/[0.03]";
  const inputNormal = "border-black/10 dark:border-white/10 focus:border-black/25 dark:focus:border-white/25 focus:bg-white dark:focus:bg-white/[0.06]";
  const inputError  = "border-red-400/60 focus:border-red-400 bg-red-500/[0.02]";

  return (
    <div className="bg-white dark:bg-white/[0.03] border border-black/8 dark:border-white/8 rounded-3xl overflow-hidden shadow-sm">

      {/* Card header */}
      <div className="px-8 pt-7 pb-5 border-b border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[17px] font-bold text-black dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Send a message
            </h3>
            <p className="text-[13px] text-black/40 dark:text-white/40 mt-0.5">I'll reply within 24 hours.</p>
          </div>
          <div className="flex gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-black/8 dark:bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-black/8 dark:bg-white/10" />
            <span className="w-2.5 h-2.5 rounded-full bg-black/8 dark:bg-white/10" />
          </div>
        </div>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit} className="px-8 py-7 space-y-6">

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.15em]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={cn(inputBase, errors.fullName ? inputError : inputNormal)}
            />
            {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.15em]">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={cn(inputBase, errors.email ? inputError : inputNormal)}
            />
            {errors.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-black/40 dark:text-white/40 uppercase tracking-[0.15em]">
              Message
            </label>
            <span className={cn("text-[11px] transition-colors duration-200", formData.message.length > 0 ? "text-black/40 dark:text-white/40" : "text-black/20 dark:text-white/20")}>
              {formData.message.length} / 500
            </span>
          </div>
          <textarea
            placeholder="Tell me about your project, idea, or just say hi..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={6}
            className={cn(inputBase, errors.message ? inputError : inputNormal, "resize-none leading-relaxed")}
          />
          {errors.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-[15px] font-semibold hover:opacity-85 disabled:opacity-40 active:scale-[0.99] transition-all duration-150"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
          ) : (
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-150" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

      </form>
    </div>
  );
};
