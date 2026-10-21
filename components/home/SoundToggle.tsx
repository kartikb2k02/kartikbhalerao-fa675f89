"use client";

import { Volume2, VolumeX } from "lucide-react";
import { IconButton } from "@/components/home/IconButton";
import { useSound } from "@/components/home/SoundProvider";
import { useHotkey } from "@/hooks/useHotkey";
import { playToggleOff, playToggleOn } from "@/lib/sounds";

/**
 * Turns interface sounds on and off, and is itself the only thing that
 * makes a sound while they are off — playing the "on" blip as it enables
 * them, so the toggle demonstrates what it just did.
 */
export function SoundToggle() {
  const { enabled, setEnabled } = useSound();

  const toggle = () => {
    // The outgoing state decides the sound: turning off should play the
    // off blip, which means playing it before the state changes.
    if (enabled) playToggleOff();
    else playToggleOn();
    setEnabled(!enabled);
  };

  useHotkey("s", toggle);

  return (
    <IconButton
      label={enabled ? "Mute sound" : "Enable sound"}
      shortcut="S"
      onClick={toggle}
    >
      {enabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </IconButton>
  );
}
