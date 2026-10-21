"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "sound-enabled";

interface SoundState {
  enabled: boolean;
  setEnabled: (next: boolean) => void;
}

const SoundContext = createContext<SoundState>({
  enabled: false,
  setEnabled: () => {},
});

/**
 * Whether interface sounds are on.
 *
 * Defaults to OFF. A site that starts making noise on its own is a site
 * people close — the toggle exists so someone can opt in, not so they
 * can escape. The choice persists in localStorage.
 */
export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabledState] = useState(false);

  useEffect(() => {
    try {
      setEnabledState(window.localStorage.getItem(STORAGE_KEY) === "true");
    } catch {
      // Storage blocked: stay off, which is the safe default anyway.
    }
  }, []);

  const setEnabled = useCallback((next: boolean) => {
    setEnabledState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(next));
    } catch {
      /* the in-memory value still holds for this page */
    }
  }, []);

  const value = useMemo(() => ({ enabled, setEnabled }), [enabled, setEnabled]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export const useSound = () => useContext(SoundContext);
