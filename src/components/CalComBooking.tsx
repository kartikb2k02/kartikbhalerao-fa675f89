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
      className="inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-2xl text-xl font-bold ring-offset-background transition-all duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground hover:from-primary/90 hover:via-primary hover:to-primary/90 w-full max-w-lg h-20 shadow-2xl hover:shadow-3xl hover:scale-[1.05] relative overflow-hidden group mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <Calendar className="h-7 w-7 relative z-10" />
      <span className="relative z-10">Schedule a Meeting</span>
    </button>
  );
};