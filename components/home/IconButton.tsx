"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Kbd } from "@/components/home/Kbd";

const BASE =
  "flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/**
 * The 32px square used for every control in the nav, with its label and
 * shortcut in a tooltip.
 *
 * Renders an anchor when given an `href` and a button otherwise — an
 * anchor nested inside a button is invalid markup and leaves keyboard
 * users with two tab stops that do different things.
 *
 * The accessible name comes from `label`, not the tooltip: a tooltip is
 * not announced reliably and the control is icon-only.
 */
export function IconButton({
  label,
  shortcut,
  onClick,
  href,
  children,
}: {
  label: string;
  shortcut?: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
}) {
  const trigger = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={BASE}
    >
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} aria-label={label} className={BASE}>
      {children}
    </button>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent side="bottom" className="flex items-center">
        {label}
        {shortcut && <Kbd>{shortcut}</Kbd>}
      </TooltipContent>
    </Tooltip>
  );
}
