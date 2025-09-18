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
    <button 
      data-cal-namespace="secret"
      data-cal-link={`${calUsername}/${eventType}`}
      data-cal-config='{"layout":"month_view"}'
      className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-xl text-lg font-semibold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-accent via-primary to-accent/90 text-primary-foreground hover:from-accent/90 hover:via-primary/90 hover:to-accent/80 w-full max-w-sm h-16 shadow-xl hover:shadow-2xl hover:scale-[1.05] relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <Calendar className="h-6 w-6 relative z-10" />
      <span className="relative z-10">Schedule a Meeting</span>
    </button>
  );
};