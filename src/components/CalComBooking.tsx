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
      const cal = await getCalApi({"namespace":"secret"});
      cal("floatingButton", {
        "calLink": `${calUsername}/${eventType}`,
        "config": {"layout":"month_view"},
        "buttonColor": "#2e3687",
        "buttonTextColor": "#1e3787"
      });
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, [calUsername, eventType])

  return (
    <div className="text-center p-8">
      <p className="text-muted-foreground">
        Click the floating calendar button to schedule a meeting
      </p>
    </div>
  );
};