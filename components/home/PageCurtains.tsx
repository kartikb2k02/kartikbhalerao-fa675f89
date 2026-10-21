"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/lib/motion";

const CURTAIN_DURATION = 0.62;
const REVEAL_DELAY = 55;
const BLIND_COUNT = 10;
const BLIND_STAGGER = 0.035;
const BLIND_COVER_DELAY =
  (CURTAIN_DURATION + BLIND_STAGGER * (BLIND_COUNT - 1)) * 1000 + 45;
const CURTAIN_ROUTES = ["/about", "/builds", "/blog"];

function isCurtainRoute(pathname: string) {
  return CURTAIN_ROUTES.includes(pathname);
}

function getCurtainColor(pathname: string) {
  if (pathname.startsWith("/about")) return "#A5B4FC";
  if (pathname.startsWith("/builds")) return "#52CD86";
  if (pathname.startsWith("/blog")) return "#F767C1";
  return "#FBD509";
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
    }, isAfterCoveredNavigation ? REVEAL_DELAY : BLIND_COVER_DELAY);

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
      }, BLIND_COVER_DELAY);
    };

    document.addEventListener("click", onLinkClick, true);
    return () => document.removeEventListener("click", onLinkClick, true);
  }, [pathname, router]);

  if (!visible || reduced) return null;

  const curtainColor = getCurtainColor(transitionPathname);
  const panelTransition = {
    duration: CURTAIN_DURATION,
    ease: ease.inOut,
  } as const;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[10001] overflow-hidden"
    >
      {Array.from({ length: BLIND_COUNT }, (_, index) => (
        <motion.div
          key={index}
          className="absolute inset-x-0"
          style={{
            top: `${(index * 100) / BLIND_COUNT}%`,
            height: `${100 / BLIND_COUNT + 0.5}%`,
            backgroundColor: curtainColor,
            transformOrigin: "center center",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: open ? 0 : 1 }}
          transition={{
            ...panelTransition,
            delay: open
              ? (BLIND_COUNT - index - 1) * BLIND_STAGGER
              : index * BLIND_STAGGER,
          }}
        />
      ))}
    </div>
  );
}
