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
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    // Check if Cal.com script is already loaded
    if (document.querySelector('script[src*="cal.com"]')) {
      setIsCalLoaded(true);
      return;
    }

    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      // Wait a bit for Cal to be available
      setTimeout(() => {
        if (window.Cal) {
          setIsCalLoaded(true);
        }
      }, 100);
    };
    document.head.appendChild(script);

    return () => {
      // Don't remove script to avoid conflicts
    };
  }, []);

  const handleShowCalendar = () => {
    if (window.Cal && isCalLoaded) {
      setShowCalendar(true);
      
      // Wait for the DOM element to be available
      setTimeout(() => {
        const calElement = document.getElementById('cal-inline-embed');
        if (calElement) {
          try {
            // Initialize Cal.com
            window.Cal("init", {
              origin: "https://app.cal.com"
            });
            
            // Set UI theme
            window.Cal("ui", {
              theme: "light",
              styles: { branding: { brandColor: "#3b82f6" } },
              hideEventTypeDetails: false
            });
            
            // Create inline embed
            window.Cal("inline", {
              elementOrSelector: "#cal-inline-embed",
              calLink: `${calUsername}/${eventType}`,
              layout: "month_view"
            });
          } catch (error) {
            console.error('Error loading Cal.com inline:', error);
            // Fallback: open Cal.com in new tab
            window.open(`https://cal.com/${calUsername}/${eventType}`, '_blank');
          }
        }
      }, 100);
    } else {
      // Fallback: open Cal.com in new tab
      window.open(`https://cal.com/${calUsername}/${eventType}`, '_blank');
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
          onClick={handleShowCalendar}
          disabled={!isCalLoaded || showCalendar}
          size="lg"
          className="w-full h-14 text-lg bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary/90 hover:via-blue-600/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
        >
          {!isCalLoaded ? (
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              <span>Loading Calendar...</span>
            </div>
          ) : showCalendar ? (
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5" />
              <span>Calendar Loading...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5" />
              <span>Book a Meeting Time</span>
            </div>
          )}
        </Button>

        {/* Cal.com Inline Embed Container */}
        {showCalendar && (
          <div 
            id="cal-inline-embed" 
            className="w-full min-h-[600px] rounded-lg border border-border/60 bg-background/50 overflow-hidden"
            style={{ colorScheme: 'light' }}
          />
        )}

        <p className="text-xs text-center text-muted-foreground">
          Powered by Cal.com • All meetings include Google Meet/Zoom link
        </p>
      </CardContent>
    </Card>
  );
};