"use client";
 
import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
 
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface DateTimePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}
 
export function DateTimePicker({ 
  date, 
  onDateChange, 
  placeholder = "Select date and time",
  className 
}: DateTimePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
 
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  
  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      // If we have an existing date with time, preserve the time
      if (date) {
        const newDate = new Date(selectedDate);
        newDate.setHours(date.getHours());
        newDate.setMinutes(date.getMinutes());
        onDateChange?.(newDate);
      } else {
        // Set default time to 9:00 AM
        const newDate = new Date(selectedDate);
        newDate.setHours(9);
        newDate.setMinutes(0);
        onDateChange?.(newDate);
      }
    }
  };
 
  const handleTimeChange = (
    type: "hour" | "minute" | "ampm",
    value: string
  ) => {
    if (date) {
      const newDate = new Date(date);
      if (type === "hour") {
        const currentHours = newDate.getHours();
        const isPM = currentHours >= 12;
        const hour24 = parseInt(value) === 12 ? 0 : parseInt(value);
        newDate.setHours(isPM ? hour24 + 12 : hour24);
      } else if (type === "minute") {
        newDate.setMinutes(parseInt(value));
      } else if (type === "ampm") {
        const currentHours = newDate.getHours();
        if (value === "PM" && currentHours < 12) {
          newDate.setHours(currentHours + 12);
        } else if (value === "AM" && currentHours >= 12) {
          newDate.setHours(currentHours - 12);
        }
      }
      onDateChange?.(newDate);
    }
  };
 
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full h-12 justify-start text-left font-normal bg-white/90 dark:bg-slate-700/90 border-slate-300/60 dark:border-slate-600/60 hover:bg-slate-50 dark:hover:bg-slate-600/90 text-slate-900 dark:text-slate-100",
            !date && "text-slate-500 dark:text-slate-400",
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "EEEE, MMM dd, yyyy 'at' hh:mm aa")
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-slate-200/60 dark:border-slate-700/60 shadow-2xl" 
        side="bottom" 
        align="start" 
        sideOffset={4}
        style={{ 
          position: 'fixed',
          zIndex: 9999,
          maxHeight: '400px',
          overflow: 'hidden'
        }}
      >
        <div className="sm:flex max-w-[600px]">
          <div className="border-r border-slate-200 dark:border-slate-600">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              disabled={(date) => date < new Date()}
              initialFocus
              className="pointer-events-auto p-3"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:h-[320px] divide-y sm:divide-y-0 sm:divide-x dark:divide-slate-600 min-w-[280px]">
            {/* Hours */}
            <ScrollArea className="w-20 sm:w-auto h-[320px]">
              <div className="flex sm:flex-col p-2 gap-1">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 sm:text-center px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Hour</div>
                {hours.map((hour) => (
                  <Button
                    key={hour}
                    size="sm"
                    variant={
                      date && (date.getHours() % 12 === hour % 12 || (date.getHours() % 12 === 0 && hour === 12))
                        ? "default"
                        : "ghost"
                    }
                    className="sm:w-full shrink-0 w-12 h-8 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
                    onClick={() => handleTimeChange("hour", hour.toString())}
                  >
                    {hour}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            
            {/* Minutes */}
            <ScrollArea className="w-20 sm:w-auto h-[320px]">
              <div className="flex sm:flex-col p-2 gap-1">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 sm:text-center px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Min</div>
                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                  <Button
                    key={minute}
                    size="sm"
                    variant={
                      date && date.getMinutes() === minute
                        ? "default"
                        : "ghost"
                    }
                    className="sm:w-full shrink-0 w-12 h-8 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
                    onClick={() =>
                      handleTimeChange("minute", minute.toString())
                    }
                  >
                    {minute.toString().padStart(2, '0')}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            
            {/* AM/PM */}
            <ScrollArea className="w-20 h-[320px]">
              <div className="flex sm:flex-col p-2 gap-1">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 sm:text-center px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">Period</div>
                {["AM", "PM"].map((ampm) => (
                  <Button
                    key={ampm}
                    size="sm"
                    variant={
                      date &&
                      ((ampm === "AM" && date.getHours() < 12) ||
                        (ampm === "PM" && date.getHours() >= 12))
                        ? "default"
                        : "ghost"
                    }
                    className="sm:w-full shrink-0 w-12 h-8 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
                    onClick={() => handleTimeChange("ampm", ampm)}
                  >
                    {ampm}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}