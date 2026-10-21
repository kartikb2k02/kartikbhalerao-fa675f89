import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

/**
 * Copyright and the off-site links.
 */
export function SiteFooter({ width = 640 }: { width?: number }) {
  return (
    <footer className="mx-auto w-full px-4 pb-12" style={{ maxWidth: width }}>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="text-[13px] text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={profile.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <span className="sr-only">X</span>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-3.5 w-3.5" />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
