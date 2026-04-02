import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Calendar, ArrowUpRight } from 'lucide-react';

interface CalComBookingProps {
  calUsername?: string;
  eventType?: string;
}

export const CalComBooking: React.FC<CalComBookingProps> = ({ 
  calUsername = "kartik-bhalerao-qqae1f", 
  eventType = "secret" 
}) => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({"namespace":"secret"});
        cal("ui", {
          "cssVarsPerTheme": {
            "light": {
              "cal-brand": "#1f31de"
            },
            "dark": {
              "cal-brand": "#1f31de"
            }
          },
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      } catch (error) {
        console.error('Failed to load Cal.com:', error);
      }
    })();
  }, []);

  return (
    <div className="w-full">
      <button
        data-cal-namespace="secret"
        data-cal-link={`${calUsername}/${eventType}`}
        data-cal-config='{"layout":"month_view"}'
        className="group w-full flex items-center justify-between px-5 h-14 rounded-2xl bg-white dark:bg-white/[0.04] border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.07] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 focus-visible:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-black dark:bg-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
            <Calendar className="h-4 w-4 text-white dark:text-black" />
          </div>
          <div className="text-left">
            <p className="text-[13px] font-semibold text-black dark:text-white">Schedule a 30-min Call</p>
            <p className="text-[11px] text-black/40 dark:text-white/40">Pick a time that works for you</p>
          </div>
        </div>
        <ArrowUpRight size={15} className="text-black/25 dark:text-white/25 group-hover:text-black/60 dark:group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
      </button>
    </div>
  );
};