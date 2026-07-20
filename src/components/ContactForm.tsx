import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, User, Mail, Lock, Clock, Rocket, BarChart2, Users, Lightbulb, Check, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const MAX_CHARS = 500;

const formTopics = [
  { label: "AI Products",   sub: "Ideas & builds",    icon: Rocket,    starter: "I'd love to discuss an AI product idea I'm working on — " },
  { label: "PM Strategy",   sub: "Planning & process", icon: BarChart2, starter: "I wanted to connect about PM strategy, specifically — "   },
  { label: "User Research", sub: "Methods & insights", icon: Users,     starter: "I'd love to talk about user research — "                  },
  { label: "Product Ideas", sub: "Concepts & feedback",icon: Lightbulb, starter: "I have a product idea I'd love your thoughts on — "      },
];

interface FormData   { fullName: string; email: string; message: string; }
interface FormErrors { fullName?: string; email?: string; message?: string; }

export const ContactForm = () => {
  const [isSubmitting,  setIsSubmitting]  = useState(false);
  const [submitted,     setSubmitted]     = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [formData,      setFormData]      = useState<FormData>({ fullName: '', email: '', message: '' });
  const [errors,        setErrors]        = useState<FormErrors>({});
  const [touched,       setTouched]       = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [focused,       setFocused]       = useState<keyof FormData | null>(null);
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
    setFocused(null);
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => ({ ...prev, [field]: validateField(field, formData[field]) }));
  };

  const isValid = (field: keyof FormData) =>
    touched[field] && !errors[field] && formData[field].trim().length > 0;

  const handleTopicSelect = (label: string, starter: string) => {
    setSelectedTopics(prev => {
      if (prev.includes(label)) return prev.filter(t => t !== label);
      // pre-fill message only on very first selection
      if (prev.length === 0) {
        setFormData(fd => ({ ...fd, message: starter }));
        setErrors(e => ({ ...e, message: undefined }));
      }
      return [...prev, label];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, message: true });
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      try {
        await supabase.from('contacts').insert({
          full_name: formData.fullName, email: formData.email, message: formData.message,
        });
      } catch (_) {}

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.fullName,
          from_email: formData.email,
          message:    formData.message,
          topic:      selectedTopics.length ? selectedTopics.join(', ') : 'General',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitted(true);
    } catch (err: any) {
      console.error('Contact form error:', err);
      toast({ title: "Something went wrong", description: "Try again or reach out on LinkedIn.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const charCount    = formData.message.length;
  const counterColor = charCount > 450 ? "text-red-500" : charCount > 350 ? "text-amber-500" : "text-black/30 dark:text-white/30";

  if (submitted) {
    return (
      <div className="bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10">
        <div className="px-8 py-16 flex flex-col items-center text-center gap-5">
          <div className="w-14 h-14 border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
            <CheckCircle2 size={26} className="text-emerald-500" />
          </div>
          <div>
            <h3 className="heading-display text-[20px] text-black dark:text-white">
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
            onClick={() => { setSubmitted(false); setFormData({ fullName:'', email:'', message:'' }); setSelectedTopics([]); setTouched({}); setErrors({}); }}
            className="label-mono text-[11px] text-black/35 dark:text-white/35 hover:text-black/70 dark:hover:text-white/70 transition-colors duration-150"
          >
            Send another →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex flex-col">

      {/* Header */}
      <div className="px-8 pt-7 pb-5 border-b border-black/[0.06] dark:border-white/[0.06] flex items-start justify-between">
        <div>
          <h3 className="heading-display text-[17px] text-black dark:text-white">
            Send a message
          </h3>
          <p className="text-[13px] text-black/40 dark:text-white/40 mt-0.5">Drop me a note — I read everything.</p>
        </div>
        <div className="label-mono flex items-center gap-1.5 mt-0.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[10px] text-emerald-700 dark:text-emerald-400 whitespace-nowrap">&lt;24h reply</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5 flex-1 flex flex-col">

        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-3">
          {/* Name */}
          <div className="space-y-1.5">
            <label className={cn(
              "label-mono text-[10px] transition-colors duration-200",
              focused === 'fullName' ? "text-violet-500" : "text-black/35 dark:text-white/35"
            )}>Name</label>
            <div className="relative group/name">
              <User size={14} className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200",
                focused === 'fullName' ? "text-violet-400" : isValid('fullName') ? "text-emerald-400" : "text-black/25 dark:text-white/25"
              )} />
              <input type="text" placeholder="Your name"
                value={formData.fullName}
                onChange={e => handleInputChange('fullName', e.target.value)}
                onFocus={() => setFocused('fullName')}
                onBlur={() => handleBlur('fullName')}
                className={cn(
                  "w-full pl-11 pr-10 py-4 text-[14px] border-2 text-black dark:text-white",
                  "placeholder:text-black/20 dark:placeholder:text-white/20 outline-none transition-all duration-200",
                  errors.fullName && touched.fullName
                    ? "border-red-400/70 bg-red-500/[0.03] focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
                    : isValid('fullName')
                    ? "border-emerald-400/60 bg-emerald-50/40 dark:bg-emerald-500/[0.05] focus:border-emerald-400 focus:shadow-[0_0_0_4px_rgba(52,211,153,0.1)]"
                    : focused === 'fullName'
                    ? "border-violet-400 bg-violet-50/50 dark:bg-violet-500/[0.07] shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
                    : "border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] hover:border-black/20 dark:hover:border-white/20"
                )}
              />
              {isValid('fullName') && (
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check size={11} className="text-white" strokeWidth={2.5} />
                </div>
              )}
            </div>
            {errors.fullName && touched.fullName && (
              <p className="text-[11px] text-red-500 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />{errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className={cn(
              "label-mono text-[10px] transition-colors duration-200",
              focused === 'email' ? "text-violet-500" : "text-black/35 dark:text-white/35"
            )}>Email</label>
            <div className="relative">
              <Mail size={14} className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-200",
                focused === 'email' ? "text-violet-400" : isValid('email') ? "text-emerald-400" : "text-black/25 dark:text-white/25"
              )} />
              <input type="email" placeholder="your@email.com"
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
                onFocus={() => setFocused('email')}
                onBlur={() => handleBlur('email')}
                className={cn(
                  "w-full pl-11 pr-10 py-4 text-[14px] border-2 text-black dark:text-white",
                  "placeholder:text-black/20 dark:placeholder:text-white/20 outline-none transition-all duration-200",
                  errors.email && touched.email
                    ? "border-red-400/70 bg-red-500/[0.03] focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
                    : isValid('email')
                    ? "border-emerald-400/60 bg-emerald-50/40 dark:bg-emerald-500/[0.05] focus:border-emerald-400 focus:shadow-[0_0_0_4px_rgba(52,211,153,0.1)]"
                    : focused === 'email'
                    ? "border-violet-400 bg-violet-50/50 dark:bg-violet-500/[0.07] shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
                    : "border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] hover:border-black/20 dark:hover:border-white/20"
                )}
              />
              {isValid('email') && (
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                  <Check size={11} className="text-white" strokeWidth={2.5} />
                </div>
              )}
            </div>
            {errors.email && touched.email && (
              <p className="text-[11px] text-red-500 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />{errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className={cn(
              "label-mono text-[10px] transition-colors duration-200 flex items-center gap-1.5",
              focused === 'message' ? "text-violet-500" : "text-black/35 dark:text-white/35"
            )}>
              <MessageSquare size={11} className={focused === 'message' ? "text-violet-400" : "text-black/25 dark:text-white/25"} />
              Message
            </label>
            <div className="flex items-center gap-2">
              <div className="w-20 h-1 rounded-full bg-black/8 dark:bg-white/8 overflow-hidden">
                <div
                  className={cn("h-full rounded-full transition-all duration-300", charCount > 450 ? "bg-red-400" : charCount > 350 ? "bg-amber-400" : "bg-violet-400")}
                  style={{ width: `${(charCount / MAX_CHARS) * 100}%` }}
                />
              </div>
              <span className={cn("text-[10px] font-medium tabular-nums transition-colors duration-300", counterColor)}>
                {charCount}/{MAX_CHARS}
              </span>
            </div>
          </div>

          {/* Topic picker */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="label-mono text-[9px] text-black/28 dark:text-white/28">What's this about?</span>
              <span className="flex-1 h-px bg-black/6 dark:bg-white/6" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {formTopics.map(({ label, sub, icon: Icon, starter }) => {
                const active = selectedTopics.includes(label);
                return (
                  <button type="button" key={label}
                    onClick={() => handleTopicSelect(label, starter)}
                    className={cn(
                      "flex items-center gap-3 px-3.5 py-3 border text-left transition-all duration-200",
                      active
                        ? "bg-black dark:bg-white border-black dark:border-white scale-[0.985]"
                        : "bg-black/[0.02] dark:bg-white/[0.03] border-black/8 dark:border-white/8 hover:border-black/18 dark:hover:border-white/18 hover:bg-black/[0.05] dark:hover:bg-white/[0.07] active:scale-[0.985]"
                    )}
                  >
                    <div className={cn(
                      "w-7 h-7 flex items-center justify-center shrink-0 transition-colors duration-200",
                      active ? "bg-white/15 dark:bg-black/15" : "bg-black/[0.06] dark:bg-white/[0.07]"
                    )}>
                      <Icon size={13} className={active ? "text-white dark:text-black" : "text-black/45 dark:text-white/45"} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className={cn(
                        "text-[12px] font-semibold leading-tight transition-colors duration-200",
                        active ? "text-white dark:text-black" : "text-black/70 dark:text-white/70"
                      )}>
                        {label}
                      </span>
                      <span className={cn(
                        "text-[10px] leading-tight mt-0.5 transition-colors duration-200 truncate",
                        active ? "text-white/60 dark:text-black/55" : "text-black/35 dark:text-white/35"
                      )}>
                        {sub}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <textarea
            placeholder="Tell me about your project, idea, or just say hi..."
            value={formData.message}
            onChange={e => handleInputChange('message', e.target.value)}
            onFocus={() => setFocused('message')}
            onBlur={() => handleBlur('message')}
            rows={5}
            maxLength={MAX_CHARS}
            className={cn(
              "w-full px-4 py-4 text-[14px] border-2 text-black dark:text-white",
              "placeholder:text-black/20 dark:placeholder:text-white/20 outline-none transition-all duration-200",
              "resize-none leading-relaxed",
              errors.message && touched.message
                ? "border-red-400/70 bg-red-500/[0.03] focus:border-red-400 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]"
                : isValid('message')
                ? "border-emerald-400/60 bg-emerald-50/40 dark:bg-emerald-500/[0.05]"
                : focused === 'message'
                ? "border-violet-400 bg-violet-50/50 dark:bg-violet-500/[0.07] shadow-[0_0_0_4px_rgba(139,92,246,0.12)]"
                : "border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.03] hover:border-black/20 dark:hover:border-white/20"
            )}
          />
          {errors.message && touched.message && (
            <p className="text-[11px] text-red-500 flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-red-500 inline-block" />{errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="space-y-3 mt-auto">
          <button type="submit" disabled={isSubmitting}
            className="label-mono group w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-black dark:bg-white text-white dark:text-black text-[13px] hover:opacity-80 disabled:opacity-40 active:scale-[0.99] transition-all duration-150"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {isSubmitting
              ? <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
              : <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
            }
          </button>

          <div className="label-mono flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              <Lock size={10} className="text-black/22 dark:text-white/22" />
              <span className="text-[10px] text-black/28 dark:text-white/28">Private</span>
            </div>
            <span className="w-px h-3 bg-black/10 dark:bg-white/10" />
            <div className="flex items-center gap-1.5">
              <Clock size={10} className="text-black/22 dark:text-white/22" />
              <span className="text-[10px] text-black/28 dark:text-white/28">Replies within 24h</span>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
};
