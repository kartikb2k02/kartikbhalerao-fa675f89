import React, { useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";

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
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      } catch (error) {
        console.error('Failed to load Cal.com:', error);
      }
    })();
  }, []);

  return null;
};