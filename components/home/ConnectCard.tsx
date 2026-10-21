import { Calendar, Mail, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const X_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ACTIONS = [
  { label: "Book an intro call", href: "/contact", tone: "brand-call", icon: <Calendar className="h-3.5 w-3.5" />, external: false },
  { label: "Send an email", href: `mailto:${profile.email}`, tone: "brand-mail", icon: <Mail className="h-3.5 w-3.5" />, external: false },
  { label: "LinkedIn", href: profile.links.linkedin, tone: "brand-in", icon: <Linkedin className="h-3.5 w-3.5" />, external: true },
  { label: "X", href: profile.links.x, tone: "brand-x", icon: X_ICON, external: true },
];

/**
 * The closing block on /about.
 *
 * Same buttons as the homepage card, different framing: by the time
 * someone reaches the bottom of this page they have read the whole
 * case, so this asks rather than introduces.
 */
export function ConnectCard() {
  return (
    <div className="surface p-5">
      <p className="text-[15px] leading-relaxed text-foreground">
        For more, you can connect with me on social platforms.
      </p>
      <p className="mt-1 text-[14px] leading-snug text-muted-foreground">
        Open to product roles and collaborations.
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
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
