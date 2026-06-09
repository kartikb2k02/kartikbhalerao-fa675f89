import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Clock, Video, CalendarCheck, ArrowRight, Briefcase, Sparkles, Lightbulb, Zap } from 'lucide-react';

interface CalComBookingProps {
  calUsername?: string;
  eventType?:   string;
}

const callTopics = [
  { label: "Roles & opportunities",    icon: Briefcase  },
  { label: "AI products & roadmaps",   icon: Sparkles   },
  { label: "Projects you're building", icon: Lightbulb  },
  { label: "Anything product",         icon: Zap        },
];

export const CalComBooking: React.FC<CalComBookingProps> = ({
  calUsername = "kartik-bhalerao-qqae1f",
  eventType   = "secret",
}) => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "secret" });
        cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#000000" },
            dark:  { "cal-brand": "#ffffff" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error('Failed to load Cal.com:', err);
      }
    })();
  }, []);

  return (
    <div className="bg-white dark:bg-white/[0.03] border border-black/8 dark:border-white/8 rounded-3xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none flex flex-col">

      {/* Header */}
      <div className="px-8 pt-7 pb-5 border-b border-black/[0.06] dark:border-white/[0.06] flex items-start justify-between">
        <div>
          <h3 className="text-[17px] font-bold text-black dark:text-white" style={{ fontFamily: "'Fraunces', serif" }}>
            Schedule a call
          </h3>
          <p className="text-[13px] text-black/40 dark:text-white/40 mt-0.5">Pick a time that works for you.</p>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 shrink-0">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">Available</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-8 py-7 flex flex-col gap-6 flex-1">

        {/* Call details strip */}
        <div className="flex items-center gap-2">
          {[
            { icon: Clock,         label: "30 min" },
            { icon: Video,         label: "Video"  },
            { icon: CalendarCheck, label: "Free"   },
          ].map(({ icon: Icon, label }) => (
            <div key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-black/7 dark:border-white/7"
            >
              <Icon size={11} className="text-black/40 dark:text-white/40" />
              <span className="text-[11px] font-semibold text-black/55 dark:text-white/55">{label}</span>
            </div>
          ))}
        </div>

        {/* What we can cover */}
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/28 dark:text-white/28">What we can cover</span>
          <div className="grid grid-cols-2 gap-2">
            {callTopics.map(({ label, icon: Icon }) => (
              <div key={label}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border bg-black/[0.02] dark:bg-white/[0.03] border-black/8 dark:border-white/8 hover:border-black/16 dark:hover:border-white/16 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] hover:shadow-sm transition-all duration-200 group cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-black/[0.05] dark:bg-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-black/[0.09] dark:group-hover:bg-white/[0.11] transition-colors duration-200">
                  <Icon size={12} className="text-black/45 dark:text-white/45" />
                </div>
                <span className="text-[11px] font-semibold text-black/55 dark:text-white/55 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1" />

        {/* CTA */}
        <div className="space-y-3">
          <button
            data-cal-namespace="secret"
            data-cal-link={`${calUsername}/${eventType}`}
            data-cal-config='{"layout":"month_view"}'
            className="group w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-[14px] font-semibold hover:bg-black/85 dark:hover:bg-white/85 active:scale-[0.99] transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.18)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.08)] focus-visible:outline-none"
          >
            Pick a time
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
          </button>

          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1.5">
              <CalendarCheck size={10} className="text-black/22 dark:text-white/22" />
              <span className="text-[10px] text-black/28 dark:text-white/28 font-medium">Instant confirmation</span>
            </div>
            <span className="w-px h-3 bg-black/10 dark:bg-white/10" />
            <div className="flex items-center gap-1.5">
              <Clock size={10} className="text-black/22 dark:text-white/22" />
              <span className="text-[10px] text-black/28 dark:text-white/28 font-medium">No prep needed</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
