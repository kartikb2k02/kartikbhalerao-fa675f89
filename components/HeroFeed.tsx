"use client";

import type { ReactNode } from "react";
import { Bot, Mail, PenLine, Rocket } from "lucide-react";
import { SiFigma, SiRocketdotchat } from "react-icons/si";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: ReactNode;
  color: string;
  time: string;
}

/**
 * Verb-led, newest first, and every line carries a fact rather than a category
 * — "13 artifact types, shipped in two weeks" earns a read; "AI-powered PM
 * workspace" does not. Keep descriptions under ~40 characters so they hold one
 * line in the card.
 */
const notifications = [
  {
    name: "Shipped figprd",
    description: "Figma in, a full PRD out — over MCP",
    time: "2026",
    icon: <SiFigma />,
    color: "#00C9A7",
  },
  {
    name: "PM Co-Pilot went live",
    description: "13 artifact types, built in two weeks",
    time: "2025",
    icon: <Bot strokeWidth={2.1} />,
    color: "#1E86FF",
  },
  {
    name: "Published an essay",
    description: "Gemma 2 → 4, what actually changed",
    time: "2026",
    icon: <PenLine strokeWidth={2.1} />,
    color: "#E08A00",
  },
  {
    name: "Founding PM",
    description: "30+ interviews, MVP in 90 days",
    time: "2025",
    icon: <Rocket strokeWidth={2.1} />,
    color: "#FF3D71",
  },
  {
    name: "First open-source PR",
    description: "AI chat feature at Rocket.Chat",
    time: "2022",
    icon: <SiRocketdotchat />,
    color: "#7C3AED",
  },
  {
    name: "Open to product roles",
    description: "AI product work · Pune, India",
    time: "Now",
    icon: <Mail strokeWidth={2.1} />,
    color: "#111827",
  },
];

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-2xl text-white [&>svg]:size-5"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function HeroFeed({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[232px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList delay={2600} loop maxVisible={2}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t"></div>
    </div>
  );
}
