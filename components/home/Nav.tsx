"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin } from "lucide-react";
import { IconButton } from "@/components/home/IconButton";
import { SoundToggle } from "@/components/home/SoundToggle";
import { ThemeToggle } from "@/components/home/ThemeToggle";
import { RollingText } from "@/components/home/RollingText";
import { profile } from "@/data/profile";

const NAV = [
  { label: "home", href: "/", mark: "mark-home" },
  { label: "about", href: "/about", mark: "mark-about" },
  { label: "builds", href: "/builds", mark: "mark-builds" },
  { label: "writings", href: "/blog", mark: "mark-writings" },
];

/**
 * Lowercase text links left, controls right. No bar and no rule — it
 * sits on the page ground. The current route sits in a tinted
 * rectangle, a different hue per destination, so where you are reads at
 * a glance instead of by comparing two greys — and the colour becomes a
 * second cue people learn without being told.
 *
 * Contact is not here — the contact actions live in the intro card and
 * the footer, and a nav item for a page that is one button away was the
 * fifth thing competing for the same row.
 */
export function Nav({ width = 640 }: { width?: number }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    // The measure is a prop because the article templates run wider to
    // fit a table of contents. A fixed 640 here left the header visibly
    // inset from the text it sits above.
    <header
      className="mx-auto flex w-full items-center justify-between gap-4 px-4 pt-10"
      style={{ maxWidth: width }}
    >
      <nav aria-label="Primary">
        <ul className="flex items-center gap-4">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[14px] transition-colors ${
                    active
                      ? `nav-mark ${item.mark}`
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <RollingText text={item.label} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-1">
        <IconButton label="X" href={profile.links.x}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </IconButton>
        <IconButton label="LinkedIn" href={profile.links.linkedin}>
          <Linkedin className="h-4 w-4" />
        </IconButton>
        <SoundToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
