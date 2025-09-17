import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface CalComBookingProps {
  calUsername?: string;
  eventType?: string;
}

export const CalComBooking: React.FC<CalComBookingProps> = ({ 
  calUsername = "your-username", 
  eventType = "30min" 
}) => {
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => setIsCalLoaded(true);
    document.head.appendChild(script);

    // Add Cal.com CSS
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = 'https://app.cal.com/embed/embed.css';
    document.head.appendChild(style);

    return () => {
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      const existingStyle = document.querySelector('link[href="https://app.cal.com/embed/embed.css"]');
      if (existingScript) existingScript.remove();
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  const openCalPopup = () => {
    if (window.Cal && isCalLoaded) {
      window.Cal("init", {
        origin: "https://app.cal.com"
      });
      
      window.Cal("ui", {
        "theme": "light",
        "styles": {"branding":{"brandColor":"#3b82f6"}},
        "hideEventTypeDetails": false
      });
      
      // Open the popup
      window.Cal("openPopup", {
        calLink: `${calUsername}/${eventType}`,
      });
    }
  };

  return (
    <Card className="shadow-3xl border-border/40 bg-card/95 backdrop-blur-xl">
      <CardHeader className="space-y-3 pb-8">
        <CardTitle className="text-3xl bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3">
          <Video className="h-8 w-8 text-primary" />
          Schedule a Call
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Let's discuss your project over a video call at your convenience
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Meeting Types */}
        <div className="grid gap-4">
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 border border-border/60">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">30-Minute Discovery Call</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Perfect for discussing your project requirements and goals
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50 border border-border/60">
            <div className="flex-shrink-0 w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">60-Minute Strategy Session</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Deep dive into technical requirements and project planning
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={openCalPopup}
          disabled={!isCalLoaded}
          size="lg"
          className="w-full h-14 text-lg bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary/90 hover:via-blue-600/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
        >
          {!isCalLoaded ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              <span>Loading Calendar...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5" />
              <span>Book a Meeting Time</span>
            </div>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Powered by Cal.com • All meetings include Google Meet/Zoom link
        </p>
      </CardContent>
    </Card>
  );
};