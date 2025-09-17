import React, { useState, useEffect } from 'react';

interface CalComBookingProps {
  calUsername?: string;
  eventType?: string;
}

export const CalComBooking: React.FC<CalComBookingProps> = ({ 
  calUsername = "your-username", 
  eventType = "30min" 
}) => {
  const [isCalLoaded, setIsCalLoaded] = useState(false);
  const [isCalLoading, setIsCalLoading] = useState(true);

  const initializeCalendar = () => {
    if (window.Cal) {
      setTimeout(() => {
        const calElement = document.getElementById('cal-inline-embed');
        if (calElement) {
          try {
            // Initialize Cal.com with faster settings
            window.Cal("init", {
              origin: "https://app.cal.com"
            });
            
            // Set UI theme with optimized settings
            window.Cal("ui", {
              theme: "light",
              styles: { branding: { brandColor: "#3b82f6" } },
              hideEventTypeDetails: false
            });
            
            // Create inline embed with timeout
            window.Cal("inline", {
              elementOrSelector: "#cal-inline-embed",
              calLink: `${calUsername}/${eventType}`,
              layout: "month_view"
            });

            // Set loading complete after a reasonable timeout
            setTimeout(() => {
              setIsCalLoading(false);
            }, 2000);
          } catch (error) {
            console.error('Error loading Cal.com inline:', error);
            setIsCalLoading(false);
            // Fallback: open Cal.com in new tab
            window.open(`https://cal.com/${calUsername}/${eventType}`, '_blank');
          }
        }
      }, 50);
    } else {
      setIsCalLoading(false);
      // Fallback: open Cal.com in new tab
      window.open(`https://cal.com/${calUsername}/${eventType}`, '_blank');
    }
  };

  useEffect(() => {
    // Check if Cal.com script is already loaded
    if (document.querySelector('script[src*="cal.com"]') && window.Cal) {
      setIsCalLoaded(true);
      initializeCalendar();
      return;
    }

    // Set a timeout for script loading
    const loadingTimeout = setTimeout(() => {
      if (!isCalLoaded) {
        console.warn('Cal.com script taking too long to load');
        setIsCalLoaded(true);
        initializeCalendar();
      }
    }, 5000);

    // Load Cal.com embed script with prefetch
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      clearTimeout(loadingTimeout);
      // Wait a bit for Cal to be available
      const checkCalAvailable = () => {
        if (window.Cal) {
          setIsCalLoaded(true);
          setTimeout(() => initializeCalendar(), 100);
        } else {
          setTimeout(checkCalAvailable, 50);
        }
      };
      checkCalAvailable();
    };
    script.onerror = () => {
      clearTimeout(loadingTimeout);
      console.error('Failed to load Cal.com script');
      setIsCalLoaded(true);
      initializeCalendar();
    };
    document.head.appendChild(script);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [calUsername, eventType]);

  return (
    <div className="w-full min-h-[600px] rounded-lg border border-border/60 bg-background/50 overflow-hidden relative">
      {isCalLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center">
          <div className="w-12 h-12 border-3 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
          <p className="text-muted-foreground text-sm">Loading your calendar...</p>
        </div>
      )}
      <div 
        id="cal-inline-embed" 
        className="w-full min-h-[600px]"
        style={{ colorScheme: 'light' }}
      />
    </div>
  );
};