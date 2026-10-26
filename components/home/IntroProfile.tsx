"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { Avatar } from "@/components/home/Avatar";
import { TextFlip } from "@/components/home/TextFlip";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { profile } from "@/data/profile";
import { ease } from "@/lib/motion";

const GREETINGS = [
  { text: "Hello", hue: 42 },
  { text: "नमस्कार", hue: 14 },
  { text: "नमस्ते", hue: 330 },
  { text: "Bonjour", hue: 266 },
  { text: "Hola", hue: 200 },
  { text: "Ciao", hue: 160 },
  { text: "こんにちは", hue: 110 },
  { text: "Olá", hue: 300 },
  { text: "Hallo", hue: 230 },
] as const;

const GREETING_MS = 180;
const IDENTITY_HOLD_MS = 600;
const LAYOUT = { duration: 0.65, ease: [0.77, 0, 0.175, 1] as [number, number, number, number], type: "tween" as const };
const CURTAIN = { delay: 0.78, duration: 0.28, ease: [0.23, 1, 0.32, 1] as [number, number, number, number], type: "tween" as const };
const DETAIL = { delay: 0.58, duration: 0.18, ease: [0.23, 1, 0.32, 1] as [number, number, number, number], type: "tween" as const };
const ROLE = { ...DETAIL, delay: DETAIL.delay + 0.06 };
const AVATAR_ID = "home-profile-avatar";
const NAME_ID = "home-profile-name";
const [FIRST, ...REST] = profile.name.split(" ");
const LAST = REST.join(" ");

const CONFETTI = [
  ["-50vw", "-48vh", -120, "#A5B4FC"], ["-42vw", "-52vh", 84, "#FBD509"],
  ["-32vw", "-38vh", 142, "#52CD86"], ["-22vw", "-56vh", -72, "#F767C1"],
  ["-10vw", "-44vh", 112, "#A5B4FC"], ["2vw", "-54vh", -45, "#52CD86"],
  ["16vw", "-42vh", 96, "#FBD509"], ["30vw", "-56vh", -130, "#F767C1"],
  ["44vw", "-38vh", 64, "#52CD86"], ["52vw", "-14vh", -88, "#F767C1"],
  ["-56vw", "-16vh", 126, "#A5B4FC"], ["-48vw", "4vh", -52, "#FBD509"],
  ["-58vw", "24vh", 70, "#52CD86"], ["-46vw", "42vh", -116, "#A5B4FC"],
  ["-30vw", "54vh", 54, "#FBD509"], ["-14vw", "46vh", -76, "#F767C1"],
  ["2vw", "58vh", 108, "#FBD509"], ["18vw", "48vh", -102, "#52CD86"],
  ["34vw", "56vh", 72, "#F767C1"], ["48vw", "40vh", -64, "#A5B4FC"],
  ["58vw", "18vh", 118, "#52CD86"], ["50vw", "-4vh", -136, "#FBD509"],
] as const;

function WelcomeCelebration() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[3] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{ duration: 2.8, times: [0, 0.68, 1], ease: ease.inOut }}
    >
      <motion.div
        className="absolute inset-0 bg-white/10 dark:bg-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.46, times: [0, 0.18, 1], ease: ease.inOut }}
      />
      <motion.div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.12) 22%, transparent 68%)" }}
        initial={{ opacity: 0, scale: 0.35 }}
        animate={{ opacity: [0, 0.9, 0.35, 0], scale: [0.35, 1, 1.18, 1.32] }}
        transition={{ duration: 2.8, times: [0, 0.14, 0.42, 1], ease: ease.out }}
      />
      <div className="absolute left-1/2 top-1/2">
        {CONFETTI.map(([x, y, rotate, color], index) => (
          <motion.span
            key={index}
            className="absolute left-0 top-0 block size-3 rounded-[2px]"
            style={{ backgroundColor: color }}
            initial={{ x: 0, y: 0, scale: 0, rotate: 0, opacity: 0 }}
            animate={{ x, y, scale: [0, 1.12, 1.08, 0.86], rotate, opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.45, times: [0, 0.16, 0.75, 1], delay: (index % 5) * 0.02, ease: ease.inOut }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export type IntroMode = "pending" | "play" | "skip";
type Phase = "greetings" | "identity" | "profile";

function ProfileHeader({ animate }: { animate: boolean }) {
  return (
    <div className="relative z-[2] flex items-center gap-5">
      <Avatar layoutId={animate ? AVATAR_ID : undefined} layoutTransition={animate ? LAYOUT : undefined} />
      <div>
        <h1 className="text-[24px] font-semibold leading-snug tracking-tight text-foreground">
          <motion.span layoutId={animate ? NAME_ID : undefined} className="inline-block" transition={animate ? { layout: LAYOUT } : undefined}>
            {FIRST}
          </motion.span>{" "}
          <motion.span className="inline-block" initial={animate ? { opacity: 0, y: 2 } : false} animate={{ opacity: 1, y: 0 }} transition={DETAIL}>
            {LAST}
          </motion.span>
        </h1>
        <motion.div initial={animate ? { opacity: 0, y: 4 } : false} animate={{ opacity: 1, y: 0 }} transition={ROLE}>
          <TextFlip interval={3} className="text-[16px] leading-snug text-muted-foreground">
            {profile.roles.map((role) => <span key={role}>{role}</span>)}
          </TextFlip>
        </motion.div>
      </div>
    </div>
  );
}

export function IntroProfile({ mode }: { mode: IntroMode }) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("greetings");
  const [greeting, setGreeting] = useState(0);
  const [celebration, setCelebration] = useState(false);
  const [done, setDone] = useState(false);
  const playing = mode === "play" && !reduced;
  const visible: Phase = playing ? phase : "profile";

  useLockBodyScroll(mode === "pending" || (playing && !done));

  useEffect(() => {
    if (!playing) return;
    const timers = GREETINGS.slice(1).map((_, index) =>
      window.setTimeout(() => setGreeting(index + 1), (index + 1) * GREETING_MS)
    );
    const identityAt = GREETINGS.length * GREETING_MS;
    timers.push(
      window.setTimeout(() => setCelebration(true), 2 * GREETING_MS),
      window.setTimeout(() => setCelebration(false), 2 * GREETING_MS + 3050),
      window.setTimeout(() => setPhase("identity"), identityAt),
      window.setTimeout(() => setPhase("profile"), identityAt + IDENTITY_HOLD_MS)
    );
    return () => timers.forEach(window.clearTimeout);
  }, [playing]);

  return (
    <LayoutGroup id="home-profile-intro">
      <div>
        {mode === "pending" && <div aria-hidden="true" className="pointer-events-auto fixed -inset-1 z-[3] touch-none bg-background" />}
        {mode === "play" && (
          <AnimatePresence initial={false} onExitComplete={() => setDone(true)}>
            {visible !== "profile" && (
              <motion.div key="curtain" aria-hidden="true" className="pointer-events-auto fixed -inset-1 z-[1] touch-none bg-background will-change-transform" exit={{ y: "-100%" }} transition={CURTAIN} />
            )}
          </AnimatePresence>
        )}
        {playing && visible === "greetings" && (
          <p aria-hidden="true" className="pointer-events-none fixed inset-0 z-[2] flex items-center justify-center gap-3 px-6 text-center text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-none tracking-[-0.03em]" style={{ color: `hsl(${GREETINGS[greeting].hue} 72% var(--greeting-l, 42%))` }}>
            <span className="size-[0.14em] shrink-0 rounded-full bg-current" />
            <span>{GREETINGS[greeting].text}</span>
          </p>
        )}
        {playing && celebration && <WelcomeCelebration />}
        {playing && visible === "identity" && (
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[2] flex items-center justify-center gap-3 px-6 text-[clamp(1.75rem,5.5vw,3.25rem)] leading-none tracking-[-0.03em] text-foreground">
            <span className="font-medium">I&rsquo;m</span>
            <Avatar size={56} layoutId={AVATAR_ID} layoutTransition={LAYOUT} />
            <motion.span layoutId={NAME_ID} className="inline-block font-semibold" transition={{ layout: LAYOUT }}>{FIRST}</motion.span>
          </div>
        )}
        {visible === "profile" && <ProfileHeader animate={playing} />}
      </div>
    </LayoutGroup>
  );
}
