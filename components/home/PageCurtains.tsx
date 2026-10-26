"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";
import { getRouteColor, getRouteWord } from "@/lib/routeTheme";

const CURTAIN_DURATION = 0.58;
const REVEAL_DELAY = 55;
/** Long enough for the word to land and be read before the slab leaves. */
const HOLD = 0.16;
const COVER_DELAY = (CURTAIN_DURATION + HOLD) * 1000 + 45;
const CURTAIN_ROUTES = ["/about", "/builds", "/blog"];

function isCurtainRoute(pathname: string) {
  return CURTAIN_ROUTES.includes(pathname);
}

function isDetailToLanding(from: string, to: string) {
  return (
    (to === "/blog" && from.startsWith("/blog/")) ||
    (to === "/builds" && from.startsWith("/builds/"))
  );
}

/**
 * Route curtains for the three primary interior landing pages. Targeted link
 * clicks are briefly held so the current page is covered before Next changes
 * the route; the new page then renders underneath the reveal.
 *
 * The slab sweeps up from below carrying the destination's name, holds a
 * beat, then keeps travelling in the same direction and off the top — so the
 * move reads as one continuous pass rather than a cover that backs out the
 * way it came. The word rides a clipped mask, the site's `maskRise`, which
 * is how display type arrives everywhere else here.
 */
export function PageCurtains() {
  const pathname = usePathname();
  const router = useRouter();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(true);
  const [visible, setVisible] = useState(false);
  const [transitionPathname, setTransitionPathname] = useState(pathname);
  const previousPathnameRef = useRef(pathname);
  const pendingPathRef = useRef<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    const previousPathname = previousPathnameRef.current;
    previousPathnameRef.current = pathname;

    if (
      reduced ||
      !isCurtainRoute(pathname) ||
      isDetailToLanding(previousPathname, pathname)
    ) {
      pendingPathRef.current = null;
      setTransitionPathname(pathname);
      setOpen(true);
      setVisible(false);
      return;
    }

    const isAfterCoveredNavigation = pendingPathRef.current === pathname;
    pendingPathRef.current = null;
    setTransitionPathname(pathname);
    setVisible(true);
    setOpen(false);

    timeoutRef.current = window.setTimeout(() => {
      setOpen(true);
      timeoutRef.current = null;
    }, isAfterCoveredNavigation ? REVEAL_DELAY : COVER_DELAY);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [pathname, reduced]);

  useEffect(() => {
    const onLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin) return;
      if (!isCurtainRoute(destination.pathname)) return;
      if (isDetailToLanding(pathname, destination.pathname)) return;
      if (
        destination.pathname === pathname &&
        destination.hash === window.location.hash
      ) {
        return;
      }

      event.preventDefault();

      if (pendingPathRef.current) return;

      pendingPathRef.current = destination.pathname;
      setTransitionPathname(destination.pathname);
      setVisible(true);
      setOpen(false);

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        timeoutRef.current = null;
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
      }, COVER_DELAY);
    };

    document.addEventListener("click", onLinkClick, true);
    return () => document.removeEventListener("click", onLinkClick, true);
  }, [pathname, router]);

  if (!visible || reduced) return null;

  const curtainColor = getRouteColor(transitionPathname);
  const curtainWord = getRouteWord(transitionPathname);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[10001] overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: curtainColor }}
        initial={{ y: "100%" }}
        animate={{ y: open ? "-100%" : "0%" }}
        transition={{ duration: CURTAIN_DURATION, ease: ease.inOut }}
      >
        {/* The mask is the parent's overflow; the word starts below its own
            line box and rises into it, slightly behind the slab so it reads
            as settling into place rather than being painted on. */}
        <span className="block overflow-hidden px-6">
          <motion.span
            className="bomb-mega block whitespace-nowrap text-[#111111]"
            initial={{ y: "110%" }}
            animate={{ y: open ? "-110%" : "0%" }}
            transition={{
              duration: CURTAIN_DURATION,
              ease: ease.inOut,
              delay: open ? 0 : 0.08,
            }}
          >
            {curtainWord}
          </motion.span>
        </span>
      </motion.div>
    </div>
  );
}
