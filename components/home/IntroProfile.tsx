"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { Avatar } from "@/components/home/Avatar";
import { TextFlip } from "@/components/home/TextFlip";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { profile } from "@/data/profile";

/**
 * Hello in the languages that are actually around him — Marathi and
 * Hindi first, since Pune is where the work happens.
 */
/**
 * Hello in the languages that are actually around him, Marathi and
 * Hindi first since Pune is where the work happens.
 *
 * Each gets its own hue so the sequence reads as nine distinct beats
 * rather than one word flickering. The lightness is set per theme in
 * the style below: these are hues, not finished colours.
 */
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

const LAYOUT: { duration: number; ease: [number, number, number, number]; type: "tween" } = {
  duration: 0.65,
  ease: [0.77, 0, 0.175, 1],
  type: "tween",
};
const CURTAIN = { delay: 0.78, duration: 0.28, ease: [0.23, 1, 0.32, 1], type: "tween" } as const;
const DETAIL = { delay: 0.58, duration: 0.18, ease: [0.23, 1, 0.32, 1], type: "tween" } as const;
const ROLE = { ...DETAIL, delay: DETAIL.delay + 0.06 } as const;

const AVATAR_ID = "home-profile-avatar";
const NAME_ID = "home-profile-name";

export type IntroMode = "pending" | "play" | "skip";
type Phase = "greetings" | "identity" | "profile";

const [FIRST, ...REST] = profile.name.split(" ");
const LAST = REST.join(" ");

/** The settled state: avatar, name, rotating role. */
function ProfileHeader({ animate }: { animate: boolean }) {
  return (
    <div className="relative z-[2] flex items-center gap-5">
      <Avatar layoutId={animate ? AVATAR_ID : undefined} layoutTransition={animate ? LAYOUT : undefined} />

      <div>
        <h1 className="text-[24px] font-semibold leading-snug tracking-tight text-foreground">
          {/* The first name is the element that flew in from the centre,
              so it keeps the layoutId; the surname simply arrives after. */}
          <motion.span
            layoutId={animate ? NAME_ID : undefined}
            className="inline-block"
            transition={animate ? { layout: LAYOUT } : undefined}
          >
            {FIRST}
          </motion.span>{" "}
          <motion.span
            className="inline-block"
            initial={animate ? { opacity: 0, y: 2 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={DETAIL}
          >
            {LAST}
          </motion.span>
        </h1>

        <motion.div
          initial={animate ? { opacity: 0, y: 4 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={ROLE}
        >
          <TextFlip interval={3} className="text-[16px] leading-snug text-muted-foreground">
            {profile.roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </TextFlip>
        </motion.div>
      </div>
    </div>
  );
}

/**
 * The welcome.
 *
 * Three phases: greetings cycle in the centre of a blank screen, the
 * screen says who this is, then a curtain slides up to reveal the page
 * while the avatar and first name travel from the centre into the
 * header. The travel is a `layoutId` morph, not a cross-fade, so it is
 * recognisably the same element arriving — which is the whole trick.
 *
 * Runs once per session and not at all under reduced motion, where the
 * profile header simply renders in place. The page is scroll-locked only
 * while the overlay is up.
 *
 * Adapted from the MIT-licensed aniketpawar.com by Aniket Pawar.
 */
export function IntroProfile({ mode }: { mode: IntroMode }) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("greetings");
  const [greeting, setGreeting] = useState(0);
  const [done, setDone] = useState(false);

  const playing = mode === "play" && !reduced;
  const visible: Phase = playing ? phase : "profile";

  useLockBodyScroll(mode === "pending" || (playing && !done));

  useEffect(() => {
    if (!playing) return;

    const timers = GREETINGS.slice(1).map((_, i) =>
      window.setTimeout(() => setGreeting(i + 1), (i + 1) * GREETING_MS)
    );

    const identityAt = GREETINGS.length * GREETING_MS;
    timers.push(
      window.setTimeout(() => setPhase("identity"), identityAt),
      window.setTimeout(() => setPhase("profile"), identityAt + IDENTITY_HOLD_MS)
    );

    return () => timers.forEach(window.clearTimeout);
  }, [playing]);

  return (
    <LayoutGroup id="home-profile-intro">
      <div>
        {/* Before the mode is known, a plain cover stops the settled
            header flashing for a frame ahead of the intro. */}
        {mode === "pending" && (
          <div
            aria-hidden="true"
            className="pointer-events-auto fixed -inset-1 z-[3] touch-none bg-background"
          />
        )}

        {mode === "play" && (
          <AnimatePresence initial={false} onExitComplete={() => setDone(true)}>
            {visible !== "profile" && (
              <motion.div
                key="curtain"
                aria-hidden="true"
                className="pointer-events-auto fixed -inset-1 z-[1] touch-none bg-background will-change-transform"
                exit={{ y: "-100%" }}
                transition={CURTAIN}
              />
            )}
          </AnimatePresence>
        )}

        {playing && visible === "greetings" && (
          <p
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[2] flex items-center justify-center gap-3 px-6 text-center text-[clamp(2.5rem,9vw,5.5rem)] font-semibold leading-none tracking-[-0.03em]"
            style={{
              color: `hsl(${GREETINGS[greeting].hue} 72% var(--greeting-l, 42%))`,
            }}
          >
            <span className="size-[0.14em] shrink-0 rounded-full bg-current" />
            <span>{GREETINGS[greeting].text}</span>
          </p>
        )}

        {playing && visible === "identity" && (
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[2] flex items-center justify-center gap-3 px-6 text-[clamp(1.75rem,5.5vw,3.25rem)] leading-none tracking-[-0.03em] text-foreground"
          >
            <span className="font-medium">I&rsquo;m</span>
            <Avatar size={56} layoutId={AVATAR_ID} layoutTransition={LAYOUT} />
            <motion.span
              layoutId={NAME_ID}
              className="inline-block font-semibold"
              transition={{ layout: LAYOUT }}
            >
              {FIRST}
            </motion.span>
          </div>
        )}

        {visible === "profile" && <ProfileHeader animate={playing} />}
      </div>
    </LayoutGroup>
  );
}
