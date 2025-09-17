import React, { useEffect, useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalComBookingProps {
  calUsername?: string;
  eventType?: string;
}

export const CalComBooking: React.FC<CalComBookingProps> = ({ 
  calUsername = "kartik-bhalerao-qqae1f", 
  eventType = "secret" 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({"namespace":"secret"});
        cal("ui", {
          "cssVarsPerTheme": {
            "light": {"cal-brand":"#182eb7"},
            "dark": {"cal-brand":"#182eb7"}
          },
          "hideEventTypeDetails":false,
          "layout":"month_view"
        });
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load Cal.com:', err);
        setError('Failed to load calendar. Please try again.');
        setIsLoading(false);
      }
    })();
  }, [])

  if (error) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-muted/50 rounded-lg border border-border/60">
        <div className="text-center">
          <p className="text-destructive mb-2">{error}</p>
          <button 
            onClick={() => window.open(`https://cal.com/${calUsername}/${eventType}`, '_blank')}
            className="text-primary hover:underline"
          >
            Open calendar in new tab
          </button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-muted/50 rounded-lg border border-border/60">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-2" />
          <p className="text-muted-foreground">Loading calendar...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-[600px] rounded-lg border border-border/60 bg-background overflow-hidden">
      <Cal 
        namespace="secret"
        calLink={`${calUsername}/${eventType}`}
        style={{width:"100%", height:"600px", minHeight:"600px"}}
        config={{"layout":"month_view"}}
      />
    </div>
  );
};