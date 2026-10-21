/**
 * Two short tones, synthesised rather than loaded.
 *
 * The reference pulls in an audio library and ships sample files for
 * this; two oscillator blips through the Web Audio API sound the same
 * at this length and cost no bytes and no dependency.
 *
 * The context is created lazily on the first play, because browsers
 * refuse to start one before a user gesture and constructing it at
 * import time logs a warning on every page load.
 */
let ctx: AudioContext | null = null;

function context(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (ctx) return ctx;

  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;
  if (!Ctor) return null;

  ctx = new Ctor();
  return ctx;
}

/** A single short sine blip with an exponential decay, so it has no click. */
function blip(from: number, to: number, duration = 0.12) {
  const audio = context();
  if (!audio) return;

  // Autoplay policy can leave the context suspended until a gesture.
  if (audio.state === "suspended") void audio.resume();

  const now = audio.currentTime;
  const osc = audio.createOscillator();
  const gain = audio.createGain();

  osc.type = "sine";
  osc.frequency.setValueAtTime(from, now);
  osc.frequency.exponentialRampToValueAtTime(to, now + duration);

  // Ramping to a tiny non-zero value: exponentialRamp cannot reach 0.
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.06, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(gain).connect(audio.destination);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

/** Rising — something switched on. */
export const playToggleOn = () => blip(520, 880);

/** Falling — something switched off. */
export const playToggleOff = () => blip(660, 330);

/** A soft tick for hovers and small confirmations. */
export const playTick = () => blip(900, 760, 0.05);
