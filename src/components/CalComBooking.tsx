import React, { useEffect, useState } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

interface CalComBookingProps {
  calUsername?: string;
  eventType?: string;
}

export const CalComBooking: React.FC<CalComBookingProps> = ({ 
  calUsername = "kartik-bhalerao-qqae1f", 
  eventType = "secret" 
}) => {
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({"namespace":"secret"});
        cal("ui", {
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
        setIsCalLoaded(true);
      } catch (error) {
        console.error('Failed to load Cal.com:', error);
        setIsCalLoaded(true); // Still allow fallback
      }
    })();
  }, []);

  const handleBookingClick = async () => {
    if (isCalLoaded && window.Cal) {
      try {
        const cal = await getCalApi({"namespace":"secret"});
        cal("modal", {
          "calLink": `${calUsername}/${eventType}`,
          "config": {"layout":"month_view"}
        });
      } catch (error) {
        console.error('Error opening Cal.com modal:', error);
        // Fallback: open in new tab
        window.open(`https://cal.com/${calUsername}/${eventType}`, '_blank');
      }
    } else {
      // Fallback: open in new tab
      window.open(`https://cal.com/${calUsername}/${eventType}`, '_blank');
    }
  };

  return (
    <div className="text-center p-8">
      <Button
        onClick={handleBookingClick}
        size="lg"
        className="w-full max-w-md h-14 text-lg bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary/90 hover:via-blue-600/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
      >
        <Calendar className="h-5 w-5 mr-2" />
        Schedule a Meeting
      </Button>
      <p className="text-muted-foreground text-sm mt-4">
        Click to open the calendar and book your meeting
      </p>
    </div>
  );
};