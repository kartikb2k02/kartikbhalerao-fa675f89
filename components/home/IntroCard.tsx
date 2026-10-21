import { Calendar, Mail, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const X_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ACTIONS = [
  {
    label: "Book an intro call",
    href: "/contact",
    tone: "brand-call",
    icon: <Calendar className="h-3.5 w-3.5" />,
    external: false,
  },
  {
    label: "Send an email",
    href: `mailto:${profile.email}`,
    tone: "brand-mail",
    icon: <Mail className="h-3.5 w-3.5" />,
    external: false,
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    tone: "brand-in",
    icon: <Linkedin className="h-3.5 w-3.5" />,
    external: true,
  },
  {
    label: "X",
    href: profile.links.x,
    tone: "brand-x",
    icon: X_ICON,
    external: true,
  },
];

/**
 * The card under the bio: the ask, and four ways to act on it, each
 * carrying the colour of the thing it opens.
 *
 * Only the icon takes the colour at full strength — four saturated
 * fills side by side would be the loudest thing on a page that is
 * otherwise greyscale, and would read as advertising rather than as
 * contact details.
 */
export function IntroCard() {
  return (
    <div className="surface p-4">
      <p className="text-[14px] leading-snug text-muted-foreground">
        Interested in working together? Open to product roles and
        collaborations.
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {ACTIONS.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className={`brand-btn ${action.tone}`}
          >
            {action.icon}
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}
