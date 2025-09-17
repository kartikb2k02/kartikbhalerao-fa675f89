import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

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
      cal("ui", {
        "cssVarsPerTheme": {
          "light": {"cal-brand":"#182eb7"},
          "dark": {"cal-brand":"#182eb7"}
        },
        "hideEventTypeDetails":false,
        "layout":"month_view"
      });
    })();
  }, [])

  return (
    <Cal 
      namespace="secret"
      calLink={`${calUsername}/${eventType}`}
      style={{width:"100%",height:"100%",overflow:"scroll"}}
      config={{"layout":"month_view"}}
    />
  );
};