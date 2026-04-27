import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, User, Mail, Lock, Clock, Rocket, BarChart2, Users, Lightbulb } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const MAX_CHARS = 500;

const formTopics = [
  { label: "AI Products",   icon: Rocket,   starter: "I'd love to discuss an AI product idea I'm working on — " },
  { label: "PM Strategy",   icon: BarChart2, starter: "I wanted to connect about PM strategy, specifically — "   },
  { label: "User Research", icon: Users,     starter: "I'd love to talk about user research — "                  },
  { label: "Product Ideas", icon: Lightbulb, starter: "I have a product idea I'd love your thoughts on — "      },
];

interface FormData  { fullName: string; email: string; message: string; }
interface FormErrors { fullName?: string; email?: string; message?: string; }

export const ContactForm = () => {
  const [isSubmitting,  setIsSubmitting]  = useState(false);
  const [submitted,     setSubmitted]     = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [formData,      setFormData]      = useState<FormData>({ fullName: '', email: '', message: '' });
  const [errors,        setErrors]        = useState<FormErrors>({});
  const [touched,       setTouched]       = useState<Partial<Record<keyof FormData, boolean>>>({});
  const { toast } = useToast();

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    if (field === 'fullName' && (!value || value.trim().length < 2)) return 'At least 2 characters';
    if (field === 'email'    && (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) return 'Enter a valid email';
    if (field === 'message'  && (!value || value.trim().length < 10)) return 'At least 10 characters';
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach(f => {
      const err = validateField(f, formData[f]);
      if (err) newErrors[f] = err;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === 'message' && value.length > MAX_CHARS) return;
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const handleTopicSelect = (label: string, starter: string) => {
    if (selectedTopic === label) {
      setSelectedTopic(null);
      setFormData(prev => ({ ...prev, message: '' }));
      setErrors(prev => ({ ...prev, message: undefined }));
    } else {
      setSelectedTopic(label);
      setFormData(prev => ({ ...prev, message: starter }));
      setErrors(prev => ({ ...prev, message: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, message: true });
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contacts').insert({
        full_name: formData.fullName, email: formData.email, message: formData.message,
      });
      if (error) throw error;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.fullName,
          from_email: formData.email,
          message:    formData.message,
          topic:      selectedTopic ?? 'General',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Try again or reach out on LinkedIn.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const charCount    = formData.message.length;
  const counterColor = charCount > 450 ? "text-red-500" : charCount > 350 ? "text-amber-500" : "text-black/30 dark:text-white/30";

  /* ── Shared input styles ── */
  const inputWrap   = "relative";
  const iconCls     = "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-black/25 dark:text-white/25";
  const inputBase   = "w-full pl-11 pr-4 py-3.5 text-[14px] rounded-xl border text-black dark:text-white placeholder:text-black/22 dark:placeholder:text-white/22 outline-none transition-all duration-200 bg-black/[0.02] dark:bg-white/[0.03]";
  const inputNormal = "border-black/10 dark:border-white/10 focus:border-black/30 dark:focus:border-white/30 focus:bg-white dark:focus:bg-white/[0.06]";
  const inputError  = "border-red-400/60 focus:border-red-400 bg-red-500/[0.02]";

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="bg-white dark:bg-white/[0.03] border border-black/8 dark:border-white/8 rounded-3xl overflow-hidden shadow-sm">
        <div className="px-8 py-16 flex flex-col items-center text-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle2 size={26} className="text-emerald-500" />
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-black dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
              Message received!
            </h3>
            <p className="text-[13px] text-black/45 dark:text-white/45 mt-2.5 leading-[1.75] max-w-[240px]">
              I'll read it within 24h and reply. For anything urgent, ping me on{" "}
              <a href="https://linkedin.com/in/kartik-bhalerao" target="_blank" rel="noopener noreferrer"
                className="text-black dark:text-white font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity">
                LinkedIn
              </a>.
            </p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setFormData({ fullName:'', email:'', message:'' }); setSelectedTopic(null); setTouched({}); setErrors({}); }}
            className="text-[12px] font-medium text-black/35 dark:text-white/35 hover:text-black/60 dark:hover:text-white/60 transition-colors"
          >
            Send another →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-white/[0.03] border border-black/8 dark:border-white/8 rounded-3xl overflow-hidden shadow-sm">

      {/* ── Header ── */}
      <div className="px-8 pt-7 pb-5 border-b border-black/5 dark:border-white/5 flex items-start justify-between">
        <div>
          <h3 className="text-[17px] font-bold text-black dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
            Send a message
          </h3>
          <p className="text-[13px] text-black/40 dark:text-white/40 mt-0.5">Drop me a note — I read everything.</p>
        </div>
        {/* Reply-time badge */}
        <div className="flex items-center gap-1.5 mt-0.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">&lt;24h reply</span>
        </div>
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">

        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-black/35 dark:text-white/35 uppercase tracking-[0.18em]">Name</label>
            <div className={inputWrap}>
              <User size={14} className={iconCls} />
              <input type="text" placeholder="Your name"
                value={formData.fullName}
                onChange={e => handleInputChange('fullName', e.target.value)}
                onBlur={() => handleBlur('fullName')}
                className={cn(inputBase, errors.fullName && touched.fullName ? inputError : inputNormal)}
              />
            </div>
            {errors.fullName && touched.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-black/35 dark:text-white/35 uppercase tracking-[0.18em]">Email</label>
            <div className={inputWrap}>
              <Mail size={14} className={iconCls} />
              <input type="email" placeholder="your@email.com"
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={cn(inputBase, errors.email && touched.email ? inputError : inputNormal)}
              />
            </div>
            {errors.email && touched.email && <p className="text-[11px] text-red-500">{errors.email}</p>}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-bold text-black/35 dark:text-white/35 uppercase tracking-[0.18em]">Message</label>
            <span className={cn("text-[10px] font-medium tabular-nums transition-colors duration-300", counterColor)}>
              {charCount} / {MAX_CHARS}
            </span>
          </div>

          {/* Topic quick-start grid */}
          <div className="space-y-1.5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/28 dark:text-white/28">What's this about?</span>
            <div className="grid grid-cols-2 gap-2">
              {formTopics.map(({ label, icon: Icon, starter }) => {
                const active = selectedTopic === label;
                return (
                  <button type="button" key={label}
                    onClick={() => handleTopicSelect(label, starter)}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2.5 rounded-xl border text-left transition-all duration-150",
                      active
                        ? "bg-black dark:bg-white border-black dark:border-white"
                        : "bg-black/[0.02] dark:bg-white/[0.03] border-black/8 dark:border-white/8 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.04] dark:hover:bg-white/[0.06]"
                    )}
                  >
                    <div className={cn(
                      "w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-150",
                      active
                        ? "bg-white/15 dark:bg-black/15"
                        : "bg-black/[0.05] dark:bg-white/[0.06]"
                    )}>
                      <Icon size={12} className={active ? "text-white dark:text-black" : "text-black/45 dark:text-white/45"} />
                    </div>
                    <span className={cn(
                      "text-[11px] font-semibold leading-tight transition-colors duration-150",
                      active ? "text-white dark:text-black" : "text-black/55 dark:text-white/55"
                    )}>
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <textarea
            placeholder="Tell me about your project, idea, or just say hi..."
            value={formData.message}
            onChange={e => handleInputChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            rows={4}
            maxLength={MAX_CHARS}
            className={cn(
              "w-full px-4 py-3.5 text-[14px] rounded-xl border text-black dark:text-white",
              "placeholder:text-black/22 dark:placeholder:text-white/22 outline-none transition-all duration-200",
              "bg-black/[0.02] dark:bg-white/[0.03] resize-none leading-relaxed",
              errors.message && touched.message ? inputError : inputNormal
            )}
          />
          {errors.message && touched.message && <p className="text-[11px] text-red-500">{errors.message}</p>}
        </div>

        {/* Submit */}
        <div className="space-y-3">
          <button type="submit" disabled={isSubmitting}
            className="group w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-[14px] font-semibold hover:opacity-85 disabled:opacity-40 active:scale-[0.99] transition-all duration-150"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {isSubmitting
              ? <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
              : <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-150" />
            }
          </button>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              <Lock size={10} className="text-black/22 dark:text-white/22" />
              <span className="text-[10px] text-black/28 dark:text-white/28 font-medium">Private</span>
            </div>
            <span className="w-px h-3 bg-black/10 dark:bg-white/10" />
            <div className="flex items-center gap-1.5">
              <Clock size={10} className="text-black/22 dark:text-white/22" />
              <span className="text-[10px] text-black/28 dark:text-white/28 font-medium">Replies within 24h</span>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};
