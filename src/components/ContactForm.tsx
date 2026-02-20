import React, { useState } from 'react';
import { Send } from 'lucide-react';
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

  const inputBase = "w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none transition-all duration-150";
  const inputNormal = "border-slate-200 dark:border-slate-700 focus:border-slate-400 dark:focus:border-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700";
  const inputError = "border-red-300 dark:border-red-500/50 focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:focus:ring-red-500/20";

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
      {/* Form header */}
      <div className="mb-6 pb-5 border-b border-slate-100 dark:border-slate-800">
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">Send a message</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">I'll reply within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={cn(inputBase, errors.fullName ? inputError : inputNormal)}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={cn(inputBase, errors.email ? inputError : inputNormal)}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {formData.message.length} chars
            </span>
          </div>
          <textarea
            placeholder="Tell me about your project, idea, or just say hi..."
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={5}
            className={cn(inputBase, errors.message ? inputError : inputNormal, "resize-none")}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-gray-100 disabled:opacity-50 active:scale-[0.99] transition-all duration-150 mt-2"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white/30 dark:border-gray-900/30 border-t-white dark:border-t-gray-900 rounded-full animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};
