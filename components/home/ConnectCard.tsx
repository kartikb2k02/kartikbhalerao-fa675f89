import { Calendar, Mail, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const X_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/** The two ways to actually start something. */
const ACTIONS = [
  {
    label: "Book an intro call",
    href: "/contact",
    tone: "brand-call",
    solid: true,
    icon: <Calendar className="h-3.5 w-3.5" />,
    external: false,
  },
  {
    label: "Send an email",
    href: `mailto:${profile.email}`,
    tone: "brand-mail",
    solid: false,
    icon: <Mail className="h-3.5 w-3.5" />,
    external: false,
  },
];

/** Not actions — places. Kept quiet so they do not compete with the two above. */
const SOCIALS = [
  { label: "LinkedIn", href: profile.links.linkedin, icon: <Linkedin className="h-4 w-4" /> },
  { label: "X", href: profile.links.x, icon: X_ICON },
];

/**
 * The closing block on /about.
 *
 * By the time someone reaches the bottom of this page they have read the
 * whole case, so this asks rather than introduces — which is why it opens
 * with a question in his own register rather than "connect with me on
 * social platforms", a line that asked for nothing.
 *
 * Four equally weighted buttons made every option cost the same to look
 * at, so nothing read as the next step. Now there is one: booking takes
 * the solid fill, email the tint it always had, and the two profiles drop
 * to icons — still reachable, no longer competing.
 */
export function ConnectCard() {
  return (
    <div className="surface overflow-hidden p-5 sm:p-6">
      <p className="label-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(150_70%_40%)] opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[hsl(150_70%_32%)] dark:bg-[hsl(150_65%_55%)]" />
        </span>
        Open to work
      </p>

      <h2 className="mt-3 max-w-[22ch] text-[clamp(1.5rem,3.6vw,2.1rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground">
        Got something worth asking too many questions about?
      </h2>

      <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
        Open to product roles and collaborations. Email is quickest — or take
        a slot and we can talk it through.
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {ACTIONS.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={`brand-btn ${action.tone} ${action.solid ? "brand-btn-solid" : ""}`}
          >
            {action.icon}
            {action.label}
          </a>
        ))}

        {/* Pushed to the far end on a wide card, wrapping under on a narrow one. */}
        <div className="flex items-center gap-1.5 sm:ml-auto">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <span className="sr-only">{social.label}</span>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
