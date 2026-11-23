"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions, type Globe } from "cobe";
import { useTheme } from "next-themes";

/**
 * "Built in India, shipped with teams worldwide."
 *
 * The line on the left, a WebGL globe (cobe — ~5KB, no dependencies) on
 * the right, turning, with Pune pinned and arcs reaching the hubs it
 * works across. The hubs are deliberately unnamed: they illustrate the
 * spread of time zones, they are not a client list.
 *
 * The line is real HTML, so the claim is in the document whether or not
 * the canvas ever paints. Everything to its right is decoration.
 */

/** Where the work is done: Pune. */
const HOME: [number, number] = [18.5204, 73.8567];

/** Tech hubs across the time zones, west to east. Deliberately unlabelled. */
const HUBS: [number, number][] = [
  [37.7749, -122.4194], // San Francisco
  [40.7128, -74.006], // New York
  [43.6532, -79.3832], // Toronto
  [-23.5505, -46.6333], // São Paulo
  [51.5074, -0.1278], // London
  [52.52, 13.405], // Berlin
  [25.2048, 55.2708], // Dubai
  [1.3521, 103.8198], // Singapore
  [35.6762, 139.6503], // Tokyo
  [-33.8688, 151.2093], // Sydney
];

/**
 * Markers and arcs, as cobe's 0–1 triplets: the site's ink, which means
 * near-black on paper and inverted to white on the dark ground rather
 * than staying black and disappearing into it.
 */
const ACCENT_DARK: [number, number, number] = [1, 1, 1];
const ACCENT_LIGHT: [number, number, number] = [0.07, 0.07, 0.07];

/** Longitude 78°E to the front, so India faces the reader on first paint. */
const START_PHI = 4.1;
const THETA = 0.28;
/** Radians per frame. One turn takes a little under a minute at 60fps. */
const SPIN = 0.0024;

export function GlobeSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    /*
      The ground colour comes from the class next-themes has already
      written onto <html> — it is there before hydration, where
      `resolvedTheme` is still undefined on the first client render.
      That value is only the dependency: it is what tells this effect to
      rebuild the globe when the reader flips the theme.
    */
    const isDark = document.documentElement.classList.contains("dark");

    /*
      The canvas is created here rather than rendered by React, and a
      fresh one each time.

      A canvas hands out exactly one WebGL context for its lifetime, so
      re-running this effect against the same element would hand the new
      globe the old one's context. cobe also wraps the canvas in a
      positioning div of its own, which `destroy()` leaves behind.
      Creating and removing the element here keeps both honest.
    */
    const canvas = document.createElement("canvas");
    canvas.className = "globe-canvas";
    canvas.setAttribute("role", "img");
    canvas.setAttribute(
      "aria-label",
      "A globe turning, with Pune in India marked and arcs reaching tech hubs across the world."
    );
    wrap.prepend(canvas);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const accent = isDark ? ACCENT_DARK : ACCENT_LIGHT;

    let width = wrap.clientWidth;
    let drawnWidth = 0;
    let phi = START_PHI;

    /** Set by a drag; `drag` chases it so releasing coasts to a stop. */
    let dragTarget = 0;
    let drag = 0;
    let pointerFrom: number | null = null;

    const options: COBEOptions = {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: width * 2,
      height: width * 2,
      phi: START_PHI,
      theta: THETA,
      dark: isDark ? 1 : 0,
      /*
         With `dark: 0` the shader inverts the landmass term, so a higher
         `mapBrightness` DARKENS the continents against a white ocean.
         The light values are tuned for legibility on paper; the dark
         ones light the land up against `#191919`.
      */
      diffuse: isDark ? 1.2 : 0.8,
      mapSamples: 20000,
      mapBrightness: isDark ? 4.6 : 5.2,
      baseColor: isDark ? [0.24, 0.24, 0.24] : [1, 1, 1],
      markerColor: accent,
      glowColor: isDark ? [0.13, 0.13, 0.13] : [0.93, 0.93, 0.93],
      arcColor: accent,
      arcWidth: 0.45,
      arcHeight: 0.28,
      markerElevation: 0.01,
      markers: [
        { location: HOME, size: 0.09, id: "pune" },
        ...HUBS.map((location) => ({ location, size: 0.03 })),
      ],
      arcs: HUBS.map((to) => ({ from: HOME, to })),
    };

    const globe: Globe = createGlobe(canvas, options);

    /*
      cobe 2.0.1 has no animation loop of its own — its README still
      documents an `onRender` callback, but the shipped build has none
      and draws exactly one frame per `update()`. So the frames are
      driven from here, which is also what lets the world map appear at
      all: the texture is an image that loads after the first draw, and
      without a second frame the sphere stays blank.
    */
    let frame = 0;
    let running = false;

    const tick = () => {
      if (pointerFrom === null && !reduced) phi += SPIN;
      drag += (dragTarget - drag) * 0.09;

      const resized = width !== drawnWidth;
      if (resized) drawnWidth = width;

      globe.update({
        phi: phi + drag,
        theta: THETA,
        ...(resized ? { width: width * 2, height: width * 2 } : {}),
      });

      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    // Nothing is drawn while the band is off-screen.
    const visibility = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "120px" }
    );
    visibility.observe(wrap);

    const sizing = new ResizeObserver(() => {
      width = wrap.clientWidth;
    });
    sizing.observe(wrap);

    const onPointerDown = (e: PointerEvent) => {
      pointerFrom = e.clientX - dragTarget * 220;
      canvas.style.cursor = "grabbing";
    };
    const onPointerUp = () => {
      pointerFrom = null;
      canvas.style.cursor = "grab";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (pointerFrom === null) return;
      dragTarget = (e.clientX - pointerFrom) / 220;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    // Held back until a frame carrying the world map has landed, so the
    // first thing seen is never a blank sphere.
    const revealed = window.setTimeout(() => {
      canvas.style.opacity = "1";
    }, 220);

    return () => {
      window.clearTimeout(revealed);
      stop();
      visibility.disconnect();
      sizing.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      globe.destroy();
      // cobe wraps the canvas in a div of its own; take that too.
      (canvas.parentElement === wrap ? canvas : canvas.parentElement)?.remove();
    };
  }, [resolvedTheme]);

  return (
    <div className="globe-band">
      <p className="globe-line">
        Built in India, <span>shipped with teams worldwide.</span>
      </p>

      {/* The canvas is prepended here by the effect above. */}
      <div ref={wrapRef} className="globe-stage">
        {/*
          Rides cobe's own anchor name for the Pune marker, so it tracks
          the pin as the globe turns and fades out while India is round
          the back. Browsers without CSS anchor positioning get no card;
          the caption on the left says the same thing in text.
        */}
        <div aria-hidden="true" className="globe-card">
          <span className="globe-card-mark">DM</span>
          <span className="globe-card-text">
            <strong>Decision Machine</strong>
            Pune, India
          </span>
        </div>
      </div>
    </div>
  );
}
