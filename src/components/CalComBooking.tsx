import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from 'lucide-react';

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
    <div className="flex justify-center">
      {/* gradient border wrapper */}
      <div
        className="p-[2px] rounded-2xl"
        style={{ background: "linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6, #22c55e)", backgroundSize: "250% auto", animation: "gradient-shift 4s ease infinite" }}
      >
        <button
          data-cal-namespace="secret"
          data-cal-link={`${calUsername}/${eventType}`}
          data-cal-config='{"layout":"month_view"}'
          className="relative inline-flex items-center justify-center gap-3 px-8 h-14 rounded-2xl text-lg font-bold text-white overflow-hidden group transition-all duration-300 hover:scale-[1.03] focus-visible:outline-none w-full bg-black"
        >
          {/* hover: gradient fill */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
            style={{ background: "linear-gradient(90deg, #22c55e, #3b82f6, #8b5cf6, #22c55e)", backgroundSize: "250% auto", animation: "gradient-shift 4s ease infinite" }}
          />
          <Calendar className="h-5 w-5 relative z-10" />
          <span className="relative z-10 tracking-wide">Schedule a Meeting</span>
        </button>
      </div>
    </div>
  );
};