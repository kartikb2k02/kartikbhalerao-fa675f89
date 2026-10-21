"use client";

import Image from "next/image";
import { motion, type Transition } from "motion/react";
import { profile } from "@/data/profile";

/**
 * The portrait, as a circle.
 *
 * A `motion.div` with an optional `layoutId` so the intro can morph the
 * same element from the centre of the screen into the profile header
 * rather than cross-fading two copies of it.
 *
 * The source is 240px square — four times the largest rendered size —
 * because the static export ships images unoptimised, so whatever is on
 * disk is what the browser downloads.
 */
export function Avatar({
  size = 60,
  layoutId,
  layoutTransition,
}: {
  size?: number;
  layoutId?: string;
  layoutTransition?: Transition;
}) {
  return (
    <motion.div
      layoutId={layoutId}
      transition={layoutTransition ? { layout: layoutTransition } : undefined}
      className="relative shrink-0 overflow-hidden rounded-full border border-border"
      style={{ width: size, height: size }}
    >
      <Image
        src="/kartik.webp"
        alt={profile.name}
        fill
        sizes="60px"
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
