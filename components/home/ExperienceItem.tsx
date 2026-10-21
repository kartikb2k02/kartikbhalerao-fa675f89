import Link from "next/link";
import { TechStack } from "@/components/home/TechStack";
import type { Role } from "@/data/profile";

/**
 * One role.
 *
 * Title and organisation on one line, the where-and-how beneath it, the
 * dates in the right margin set in tabular numerals so the date column
 * lines up down the page. Fades its siblings on hover, like every other
 * list on the site.
 *
 * The detail carries no bullets — the reference hides them on both its
 * homepage and its listing, leaving the role, the dates and the stack
 * to do the work. The grouped highlights live on the detail page, which
 * is where someone has asked for them.
 */
export function ExperienceItem({ role }: { role: Role }) {
  return (
    <div className="w-full space-y-4 py-4 opacity-100 transition-opacity duration-150 group-hover/list:opacity-30 hover:!opacity-100">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-[16px] font-normal leading-snug text-foreground">
            <Link
              href={`/experience/${role.slug}`}
              className="underline-offset-4 hover:underline"
            >
              {role.title}, {role.company}
            </Link>
          </h3>
          <p className="text-[14px] text-muted-foreground">at, {role.location}</p>
        </div>

        <p className="text-[14px] font-normal tabular-nums text-muted-foreground">
          {role.start} — {role.end}
        </p>
      </div>

      <TechStack items={role.tools} />
    </div>
  );
}
