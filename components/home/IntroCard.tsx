import { Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const X_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIALS = [
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    className: "bg-[#0A66C2] text-white hover:bg-[#084f96]",
    icon: <Linkedin className="h-3.5 w-3.5" />,
  },
  {
    label: "X",
    href: profile.links.x,
    className: "bg-[#111111] text-white hover:bg-[#2b2b2b] dark:bg-[#272727] dark:hover:bg-[#363636]",
    icon: X_ICON,
  },
];

/**
 * The social-only CTA under the bio. The links use their brand colours
 * directly instead of sitting inside the translucent surface treatment.
 *
 * X is the exception: its mark is near-black, so on a dark background it
 * takes the same neutral fill as the secondary reference button rather than
 * inverting to white, which made it the single brightest thing on the page.
 */
export function IntroCard() {
  return (
    <div className="pt-1">
      <p className="text-[14px] leading-snug text-muted-foreground">
        Interested in working together? Open to product roles and
        collaborations.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {SOCIALS.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`reference-button inline-flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${action.className}`}
          >
            {action.icon}
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}
