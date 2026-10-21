"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { IconButton } from "@/components/home/IconButton";
import { useSound } from "@/components/home/SoundProvider";
import { useHotkey } from "@/hooks/useHotkey";
import { playToggleOff, playToggleOn } from "@/lib/sounds";

/**
 * Light / dark.
 *
 * Renders a blank square until mounted: the resolved theme is only known
 * on the client, and drawing the wrong icon server-side then correcting
 * it gives both a hydration mismatch and a visible flip on every load.
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { enabled: soundOn } = useSound();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = () => {
    if (soundOn) (isDark ? playToggleOff : playToggleOn)();
    setTheme(isDark ? "light" : "dark");
  };

  useHotkey("d", toggle);

  return (
    <IconButton
      label={mounted ? `Switch to ${isDark ? "light" : "dark"}` : "Switch theme"}
      shortcut="D"
      onClick={toggle}
    >
      {mounted ? (
        isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" />
      )}
    </IconButton>
  );
}
